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
            <h2 className="text-4xl font-bold mb-4">Expert Guidance for Your Disability Claims</h2>
            <p className="text-xl mb-8">We're here to help you navigate the complex world of disability claims with compassion and expertise.</p>
            <button className="btn btn-ghost bg-white text-primary hover:bg-blue-100">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service cards */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Claim Evaluation
                </h3>
                <p>We thoroughly assess your situation to determine the strength of your claim.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Application Assistance
                </h3>
                <p>Our experts guide you through the entire application process, ensuring all necessary documentation is properly prepared and submitted.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Appeals Support
                </h3>
                <p>If your claim has been denied, we provide comprehensive support for the appeals process to help overturn the decision.</p>
              </div>
            </div>
            {/* Add more service cards as needed */}
          </div>
          
          {/* Banner card */}
          <div className="card bg-base-100 shadow-xl mt-12">
            <div className="card-body">
              <h3 className="card-title text-primary">
                <AlertCircle className="w-6 h-6 mr-2" />
                Don't Face This Challenge Alone
              </h3>
              <p className="text-lg my-4">
                Navigating disability insurance claims can feel like a battle against endless paperwork, invasive investigations, and changing rules. A disability consultant is your trusted ally, ensuring your rights are protected, your claim is properly represented, and you achieve the financial peace of mind you deserve.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">
                  Schedule Your Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
