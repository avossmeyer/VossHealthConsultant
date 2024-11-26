'use client'
import { CheckCircle, DollarSign, Clock, Shield, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We begin by thoroughly discussing your unique circumstances. During this session, we review your insurance policy, medical documentation, and goals to develop a clear understanding of your needs."
    },
    {
      title: "Customized Strategy Development",
      description: "Using insights from the consultation, we craft a tailored plan designed to maximize your chances of success. This includes a step-by-step roadmap for filing, responding to disputes, and, if necessary, appealing denials."
    },
    {
      title: "Ongoing Support",
      description: "Throughout the claims process, we remain by your side. From ensuring your submission is complete to addressing unexpected challenges, our team provides guidance and support at every turn."
    }
  ];

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

      {/* Pricing Section */}
      <section className="py-20">
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
                <div className="card-actions">
                  <Link 
                    href="/booking" 
                    className="btn btn-primary w-full mt-8 hover:scale-105 transition-transform duration-200"
                  >
                    Get Started Today
                  </Link>
                </div>
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

      {/* New Compelling Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Expert Guidance When You Need It Most</h2>
              <p className="text-lg text-gray-600">
                Navigating disability claims shouldn&apos;t be a journey you take alone. Our experienced team provides the support, knowledge, and advocacy you need to secure the benefits you deserve.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Personalized consultation and strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive documentation support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Expert claim navigation assistance</span>
                </div>
              </div>
              <Link 
                href="/booking" 
                className="btn btn-primary btn-lg inline-flex items-center gap-2 mt-4"
              >
                Schedule Your Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <div className="relative h-[500px] overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/Images/Stock/8.jpg"
                  alt="Professional disability claim consultation"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Detailed Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* LTD Claims Consulting */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Long-Term Disability (LTD) Claims Consulting</h3>
              <p className="text-gray-600">
                Filing a successful LTD claim requires an in-depth understanding of insurance policies,
                medical documentation, and the tactics employed by insurers to minimize payouts.
              </p>
              <div className="grid gap-4">
                {[
                  {
                    title: "Policy Analysis",
                    desc: "We help you decode the complex language of your insurance policy, ensuring you fully understand your rights and obligations."
                  },
                  {
                    title: "Claim Preparation",
                    desc: "From gathering medical records to crafting a compelling narrative, we assist you in building a solid case."
                  },
                  {
                    title: "Error Prevention",
                    desc: "Small mistakes can lead to denials. We guide you in avoiding common pitfalls that jeopardize claims."
                  },
                  {
                    title: "Dispute Resolution",
                    desc: "If you're facing challenges such as surveillance or unfair claim denials, we provide strategies to counter these tactics effectively."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SSDI Guidance */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Social Security Disability Insurance (SSDI) Guidance</h3>
              <p className="text-gray-600">
                While our expertise lies in LTD claims, we can also provide assistance and support in
                Social Security Disability Insurance (SSDI) applications.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Evaluating SSDI eligibility and requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Clarifying the differences between SSDI and LTD benefits to ensure proper coordination of claims</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Simplifying the SSDI application process to increase your chances of approval</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Proven Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="absolute -top-4 left-8 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 mt-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Educational Resources and Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Templates and Checklists",
                description: "Step-by-step guides to streamline the claims process."
              },
              {
                title: "Communication Strategies",
                description: "Tips for managing interactions with insurers to protect your rights."
              },
              {
                title: "Appeal Assistance",
                description: "Tools to build a compelling case if your claim is denied."
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Have Questions About Our Services?</h2>
          <p className="text-lg mb-8">Schedule your free initial screening today.</p>
          <Link 
            href="/booking" 
            className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-200"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
