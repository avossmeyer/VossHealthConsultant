import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const data = await request.json()
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Send email notification about new booking
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONSULTANT_EMAIL,
      subject: 'New Consultation Booking',
      html: `
        <h2>New Consultation Booking</h2>
        <p>A new consultation has been scheduled via Calendly.</p>
        <p>Calendly will send the detailed appointment information separately.</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}