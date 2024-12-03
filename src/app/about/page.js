'use client'
import { Award, Users, Clock, Briefcase, ChevronDown } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
import siteContent from '../content/siteContent.json'

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold pr-8">{question}</h3>
        <ChevronDown 
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export default function About() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const { about } = siteContent;

  return (
    <>
      {/* Hero Section - Updated title */}
      <section className="relative bg-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Images/Stock/office.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
            opacity: '0.4'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{about.hero.title}</h1>
          <p className="text-xl max-w-3xl">
            {about.hero.subtitle}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {about.faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Start Your Claim?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your case with our experienced team.
          </p>
          <Link 
            href="/booking" 
            className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-200"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
