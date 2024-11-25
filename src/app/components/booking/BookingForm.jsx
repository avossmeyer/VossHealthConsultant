'use client'
import { useState, useEffect } from 'react'
import CalendlyEmbed from './CalendlyEmbed'
import DocumentUpload from './DocumentUpload'
import BookingAlert from './BookingAlert'
import BookingNotice from './BookingNotice'

const BookingForm = () => {
  const [calendlyEmail, setCalendlyEmail] = useState('')
  const [hasUploadedFiles, setHasUploadedFiles] = useState(false)

  const handleCalendlyEvent = (e) => {
    if (e.data.event === 'calendly.event_scheduled') {
      const { email } = e.data.payload.invitee
      setCalendlyEmail(email)
      const documentSection = document.getElementById('document-upload')
      if (documentSection) {
        documentSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  useEffect(() => {
    window.addEventListener('message', handleCalendlyEvent)
    return () => window.removeEventListener('message', handleCalendlyEvent)
  }, [])

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <BookingNotice />
      
      <div className="bg-white rounded-lg shadow">
        <CalendlyEmbed />
      </div>
      
      <div id="document-upload">
        <DocumentUpload 
          calendlyEmail={calendlyEmail}
          onUploadSuccess={() => setHasUploadedFiles(true)}
        />
      </div>

      <BookingAlert 
        calendlyEmail={calendlyEmail}
        hasUploadedFiles={hasUploadedFiles}
      />
    </div>
  )
}

export default BookingForm

