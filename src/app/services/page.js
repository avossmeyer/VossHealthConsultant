'use client'
import { CheckCircle, DollarSign, Clock, Shield, AlertCircle } from 'lucide-react'

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Images/Stock/services.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
            opacity: '0.4'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Comprehensive Disability Claims Assistance</h1>
          <p className="text-xl max-w-3xl">
            Our services are tailored to help individuals at every stage of the disability claims process, from initial applications to appeals.
          </p>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-4">Transparent, Affordable Pricing</h2>
          <p className="text-lg text-center text-gray-600 mb-12">Compare our client-focused approach with traditional consulting services</p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Our Pricing */}
            <div className="card bg-white shadow-2xl border-2 border-primary transform hover:scale-105 transition-transform duration-300">
              <div className="card-body">
                <div className="bg-primary text-white py-2 px-4 rounded-lg inline-block mx-auto mb-4">
                  <span className="text-sm font-semibold">RECOMMENDED</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">Our Client-First Approach</h3>
                <p className="text-center text-gray-600 mb-6">Affordable, transparent, and personalized service</p>
                <div className="space-y-6">
                  <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-primary mr-4" />
                    <div>
                      <span className="font-semibold block">Free Initial Screening</span>
                      <span className="text-sm text-gray-600">No obligation consultation</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <DollarSign className="w-8 h-8 text-primary mr-4" />
                    <div>
                      <span className="font-semibold block">$200 Initial Fee</span>
                      <span className="text-sm text-gray-600">Affordable starting point</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <Clock className="w-8 h-8 text-primary mr-4" />
                    <div>
                      <span className="font-semibold block">$50/hour Support</span>
                      <span className="text-sm text-gray-600">Flexible ongoing assistance</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <Shield className="w-8 h-8 text-primary mr-4" />
                    <div>
                      <span className="font-semibold block">Regular Updates</span>
                      <span className="text-sm text-gray-600">Clear communication throughout</span>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary w-full mt-8">Get Started Today</button>
              </div>
            </div>

            {/* Competitor Pricing */}
            <div className="card bg-gray-100 shadow-xl opacity-75 hover:opacity-100 transition-opacity duration-300">
              <div className="card-body">
                <h3 className="text-2xl font-bold text-center mb-2 text-gray-700">Traditional Consultants</h3>
                <p className="text-center text-gray-500 mb-6">Standard industry pricing model</p>
                <div className="space-y-6">
                  <div className="flex items-center p-4 bg-gray-200 rounded-lg">
                    <DollarSign className="w-8 h-8 text-gray-500 mr-4" />
                    <div>
                      <span className="font-semibold block text-gray-700">$6,000 Retainer Fee</span>
                      <span className="text-sm text-gray-500">High upfront cost</span>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-200 rounded-lg">
                    <Clock className="w-8 h-8 text-gray-500 mr-4" />
                    <div>
                      <span className="font-semibold block text-gray-700">$500/hour Rate</span>
                      <span className="text-sm text-gray-500">Expensive ongoing costs</span>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-200 rounded-lg">
                    <AlertCircle className="w-8 h-8 text-gray-500 mr-4" />
                    <div>
                      <span className="font-semibold block text-gray-700">Limited Updates</span>
                      <span className="text-sm text-gray-500">Minimal communication</span>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-200 rounded-lg">
                    <Clock className="w-8 h-8 text-gray-500 mr-4" />
                    <div>
                      <span className="font-semibold block text-gray-700">Multi Year Timelines</span>
                      <span className="text-sm text-gray-500">Extended processing times</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Long Term Disability Support */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="text-xl font-semibold mb-4">Long Term Disability Support</h3>
                <p className="mb-4">We help navigate private and employer-sponsored long-term disability claims, ensuring you understand your policy and receive the benefits you&#39;re entitled to.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Policy review and explanation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Medical evidence compilation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Claim filing assistance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Surveillance awareness guidance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Appeals support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SSDI Consulting */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="text-xl font-semibold mb-4">SSDI Assistance</h3>
                <p className="mb-4">SSDI is an insurance-based program under Title II. We provide comprehensive guidance to help you secure the benefits you&#39;ve earned through your work history.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Detailed medical evidence compilation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Onset date documentation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Employment history analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Application preparation and review</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Ongoing claim status monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Appeals Support */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="text-xl font-semibold mb-4">Appeals Support</h3>
                <p className="mb-4">Facing a denial doesn&#39;t mean the end. Our comprehensive appeals process helps you build a stronger case and navigate each level of appeal effectively.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Detailed denial analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Additional medical evidence gathering</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Appeal documentation preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Appeals Council representation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Federal Court appeal guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Have Questions About Our Services?</h2>
          <p className="text-lg mb-8">Schedule your free initial screening today.</p>
          <button className="btn btn-primary btn-lg">
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </>
  )
}
