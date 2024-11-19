'use client'
import ContactForm from '../components/contact/ContactForm'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Images/Stock/contact.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
            opacity: '0.4'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We're here to help with your disability claims journey</p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-2xl mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="avatar placeholder mr-4">
                        <div className="bg-primary text-primary-content rounded-full w-12">
                          <Phone className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-gray-600">(555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="avatar placeholder mr-4">
                        <div className="bg-primary text-primary-content rounded-full w-12">
                          <Mail className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-gray-600">info@disabilityclaims.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="avatar placeholder mr-4">
                        <div className="bg-primary text-primary-content rounded-full w-12">
                          <Clock className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="avatar placeholder mr-4">
                        <div className="bg-primary text-primary-content rounded-full w-12">
                          <MapPin className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Office Location</h3>
                        <p className="text-gray-600">
                          123 Business Street<br />
                          Suite 100<br />
                          City, State 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
