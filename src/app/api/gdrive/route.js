import { NextResponse } from 'next/server'
import { google } from 'googleapis'
import nodemailer from 'nodemailer'
import { Readable } from 'stream'

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_DRIVE_CREDENTIALS),
  scopes: ['https://www.googleapis.com/auth/drive.file']
})

const drive = google.drive({ version: 'v3', auth })

async function createOrGetUserFolder(email) {
  try {
    // Check if folder already exists
    const response = await drive.files.list({
      q: `mimeType='application/vnd.google-apps.folder' and name='${email}' and '${process.env.GOOGLE_DRIVE_FOLDER_ID}' in parents`,
      fields: 'files(id, name)',
      spaces: 'drive'
    });

    if (response.data.files.length > 0) {
      // Folder exists, return its ID
      return response.data.files[0].id;
    }

    // Create new folder
    const fileMetadata = {
      name: email,
      mimeType: 'application/vnd.google-apps.folder',
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID]
    };

    const folder = await drive.files.create({
      requestBody: fileMetadata,
      fields: 'id'
    });

    return folder.data.id;
  } catch (error) {
    console.error('Error creating/getting user folder:', error);
    throw error;
  }
}

export async function POST(request) {
  try {
    console.log('Starting file upload process')
    
    const formData = await request.formData()
    const files = formData.getAll('files')
    const email = formData.get('email')
    
    if (!email || email === 'no-email-provided') {
      throw new Error('Email is required')
    }

    console.log(`Processing ${files.length} files for email: ${email}`)
    
    if (!files || files.length === 0) {
      throw new Error('No files provided')
    }

    // Create or get user's folder
    const userFolderId = await createOrGetUserFolder(email)
    console.log(`Using folder ID: ${userFolderId} for email: ${email}`)

    const uploadedFiles = []

    for (const file of files) {
      console.log(`Processing file: ${file.name}`)
      
      const buffer = Buffer.from(await file.arrayBuffer())
      
      const fileMetadata = {
        name: file.name,
        parents: [userFolderId] // Use user's folder ID instead of root folder
      }

      const media = {
        mimeType: file.type,
        body: Readable.from(buffer)
      }

      console.log('Uploading to Google Drive...')
      
      const driveResponse = await drive.files.create({
        requestBody: fileMetadata,
        media: media,
        fields: 'id, webViewLink'
      })

      console.log('File uploaded successfully:', driveResponse.data.id)
      
      uploadedFiles.push({
        name: file.name,
        url: driveResponse.data.webViewLink
      })
    }

    // Send email notification
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONSULTANT_EMAIL,
      subject: `New Documents from ${email}`,
      html: `
        <h2>New Documents Uploaded</h2>
        <p>Client Email: ${email}</p>
        <h3>Uploaded Files:</h3>
        <ul>
          ${uploadedFiles.map(file => 
            `<li><a href="${file.url}">${file.name}</a></li>`
          ).join('')}
        </ul>
      `,
    })

    console.log('Email notification sent')
    
    return NextResponse.json({ 
      success: true, 
      files: uploadedFiles,
      message: 'Files uploaded successfully'
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ 
      success: false,
      error: error.message || 'Upload failed'
    }, { 
      status: 500 
    })
  }
}