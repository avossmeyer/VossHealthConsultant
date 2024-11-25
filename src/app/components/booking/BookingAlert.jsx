'use client'
import { useState, useEffect } from 'react'

export default function BookingAlert({ calendlyEmail, hasUploadedFiles }) {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div 
      className={`fixed bottom-6 right-6 max-w-md bg-white shadow-2xl rounded-xl pointer-events-auto ring-1 ring-black/5 transform transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {!hasUploadedFiles && calendlyEmail && (
              <div className="p-2 bg-yellow-50 rounded-full">
                <svg className="h-6 w-6 text-yellow-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            )}
            {hasUploadedFiles && (
              <div className="p-2 bg-green-50 rounded-full">
                <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Booking Progress
            </h3>
            <ul className="space-y-3">
              <li className={`flex items-center ${
                calendlyEmail ? 'text-green-600' : 'text-gray-500'
              }`}>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 mr-3 
                  ${calendlyEmail ? 'border-green-500 bg-green-50' : 'border-gray-300'}">
                  {calendlyEmail ? '✓' : '1'}
                </span>
                <span className={calendlyEmail ? 'line-through' : ''}>
                  Schedule Consultation
                </span>
              </li>
              <li className={`flex items-center ${
                hasUploadedFiles ? 'text-green-600' : 
                calendlyEmail ? 'text-yellow-600' : 'text-gray-500'
              }`}>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 mr-3
                  ${hasUploadedFiles ? 'border-green-500 bg-green-50' : 
                    calendlyEmail ? 'border-yellow-500 bg-yellow-50' : 'border-gray-300'}">
                  {hasUploadedFiles ? '✓' : '2'}
                </span>
                Upload Documents
                {!hasUploadedFiles && calendlyEmail && (
                  <span className="ml-2 text-yellow-500 text-xs font-medium bg-yellow-50 px-2 py-0.5 rounded-full animate-pulse">
                    Required
                  </span>
                )}
              </li>
            </ul>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={() => setIsVisible(false)}
              className="rounded-md p-1.5 text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="sr-only">Close</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {hasUploadedFiles && (
          <div className="mt-4 bg-green-50 rounded-lg p-3">
            <p className="text-sm text-green-700">
              ✨ All set! We&apos;ll see you at your scheduled consultation.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}