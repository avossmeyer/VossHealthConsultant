'use client'
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="relative bg-primary text-white py-20">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Images/Stock/2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
            opacity: '0.4'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-4">
              Simplifying Disability Claims. Maximizing Your Benefits.
            </h2>
            <p className="text-xl mb-8">
              We guide you step-by-step through Social Security Disability Insurance (SSDI) and Long Term Disability (LTD) claims to ensure you receive the benefits you deserve.
            </p>
            <div className="space-x-4">
              <button className="btn btn-ghost bg-white text-primary hover:bg-blue-100">
                Check Your Eligibility
              </button>
              <button className="btn btn-outline text-white hover:bg-white hover:text-primary">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Navigating Disability Claims Made Easy</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {['Understand SSDI and LTD eligibility', 'Navigate employer and private disability policies', 
              'Handle appeals and denied claims effectively', 'Stay prepared for insurer surveillance']
              .map((text, index) => (
                <div key={index} className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <CheckCircle className="w-6 h-6 text-primary mb-4" />
                    <p>{text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Real Clients, Real Results</h2>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <p className="text-lg italic">"After being denied SSDI twice, Arthur's team helped me appeal successfully. I now receive monthly benefits of $1,400."</p>
              <p className="font-semibold mt-4">– Sarah T.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Expertise You Can Trust</h2>
          <p className="text-center text-lg mb-12">
            With decades of experience and a deep understanding of SSI and SSDI processes, we've helped hundreds of clients secure the benefits they deserve.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {['Personalized Guidance', 'Expert in Federal and State Disability Law', 'Proven Track Record of Success']
              .map((text, index) => (
                <div key={index} className="card bg-base-100 shadow-xl">
                  <div className="card-body text-center">
                    <CheckCircle className="w-6 h-6 text-primary mx-auto mb-4" />
                    <p className="font-semibold">{text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-8">Ready to Take the Next Step?</h2>
          <button className="btn btn-primary btn-lg">
            Contact Us Today
          </button>
        </div>
      </section>
    </>
  )
}
