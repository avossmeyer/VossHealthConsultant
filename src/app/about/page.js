'use client'
import { Award, Users, Clock, Briefcase } from 'lucide-react'
import Image from 'next/image';


export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Images/Stock/office.jpg')", // You'll need to add an appropriate image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
            opacity: '0.4'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Our Firm</h1>
          <p className="text-xl max-w-3xl">
            Dedicated to helping individuals navigate the complex world of disability claims with expertise and compassion.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="/Images/Team/alex-Ryan.jpg"
                alt="Ryan"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6">Meet Ryan</h2>
              <p className="text-lg mb-6">
                As the founder of Disability Claim Advocates, Ryan brings a unique perspective shaped by personal experience. 
                Having navigated the complex disability claims system himself while managing chronic health conditions, Ryan understands 
                firsthand the challenges that claimants face.
              </p>
              <p className="text-lg mb-6">
                Growing up in a family of healthcare professionals, Ryan developed a deep passion for the medical and health industries 
                from an early age. This personal connection, combined with his experience working alongside leading disability consulting 
                teams, has given him comprehensive insight into the intricate landscape of disability claims.
              </p>
              <p className="text-lg mb-6">
                For over 4 years, Ryan has been dedicated to understanding and managing medical and chronic conditions, building expertise 
                in both the healthcare and administrative aspects of disability claims.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-primary mr-2" />
                  <span>4+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-primary mr-2" />
                  <span>Healthcare Background</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Our Mission',
                content: 'To simplify the disability claims process and ensure our clients receive the maximum benefits they deserve through expert guidance and unwavering advocacy.',
                icon: Award
              },
              {
                title: 'Our Approach',
                content: 'We provide personalized, step-by-step guidance through every stage of the claims process, from initial application to appeals if necessary.',
                icon: Briefcase
              },
              {
                title: 'Our Commitment',
                content: 'We are dedicated to maintaining the highest standards of professionalism while providing compassionate support to every client we serve.',
                icon: Users
              }
            ].map((item, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Work with Our Team?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us help you navigate the disability claims process with confidence and expertise.
          </p>
          <button className="btn btn-primary btn-lg">
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </>
  )
}
