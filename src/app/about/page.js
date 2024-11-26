'use client'
import { Award, Users, Clock, Briefcase, ChevronDown } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'

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

  const faqs = [
    {
      question: "What are your consultation fees?",
      answer: "Our pricing is designed to be both affordable and transparent. Unlike many consultants, we avoid high upfront fees and hourly rates, ensuring our services are accessible to all."
    },
    {
      question: "How long does the LTD claims process take?",
      answer: "The timeline for LTD claims varies depending on factors such as the complexity of the case and the insurer's responsiveness. However, our expert guidance ensures that your claim is handled efficiently, minimizing unnecessary delays."
    },
    {
      question: "Do you provide legal representation?",
      answer: "No. While we do not provide legal representation, we focus on equipping you with the knowledge and tools needed to navigate the system confidently and independently."
    },
    {
      question: "What conditions qualify for LTD benefits?",
      answer: "LTD benefits typically cover chronic illnesses, severe injuries, and mental health conditions that prevent you from working. We'll evaluate your case to ensure your claim meets your policy's criteria."
    },
    {
      question: "Can insurance companies investigate me?",
      answer: "Yes. Insurers often monitor claimants to verify the legitimacy of their claims. We provide advice on how to protect your claim from unwarranted scrutiny."
    },
    {
      question: "What happens if my claim is denied?",
      answer: "Denial is not the end of the road. We'll work with you to identify the reasons for the refusal and develop a strong appeal."
    },
    {
      question: "Do you assist with SSDI claims?",
      answer: "Yes. In addition to LTD claims, we provide guidance on SSDI applications, mainly when pursued in tandem with LTD benefits."
    },
    {
      question: "How do I book a consultation?",
      answer: "Contact us via phone, email, or our online portal to schedule a personalized consultation. Our team will be happy to assist you."
    }
  ];

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
          <h1 className="text-4xl font-bold mb-4">Our Founder&apos;s Journey</h1>
          <p className="text-xl max-w-3xl">
            Advocacy Rooted in Personal Experience
          </p>
        </div>
      </section>

      {/* Founder Section - Updated content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="relative h-[600px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image 
                  src="/Images/Stock/Ryan1.jpg"
                  alt="Ryan Beckmann, Founder of Disability Claim Advocates"
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6">Meet Ryan</h2>
              <p className="text-lg mb-6">
                Disability Claim Advocates was founded with a singular goal, to make the disability
                claims process accessible, affordable, and compassionate for everyone. This mission
                stems from the personal experiences of our founder, Ryan Beckmann.
              </p>
              <p className="text-lg mb-6">
                In his early 20s, Ryan was diagnosed with multiple chronic illnesses that significantly
                impacted his ability to work. Faced with the challenge of balancing his health with his
                employment, Ryan found himself navigating the complex world of medical leave policies
                and disability claims. The process was overwhelming and expensive, requiring him to
                hire a consultant to secure the benefits he was entitled to.
              </p>
              <p className="text-lg mb-6">
                This experience, combined with witnessing his family&apos;s struggles with cancer and mental
                health issues, ignited Ryan&apos;s passion for advocacy. He established Disability Claim
                Advocates to ensure others wouldn&apos;t face the same barriers alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values - Updated content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Mission, Vision, and Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Our Mission',
                content: 'To simplify the disability claims process and empower individuals to access the benefits they rightfully deserve.',
                icon: Award
              },
              {
                title: 'Our Vision',
                content: 'To become the leading provider of LTD consulting services in the United States, known for our expertise, empathy, and commitment to client success.',
                icon: Briefcase
              },
              {
                title: 'Core Values',
                content: 'Empathy: We approach every client with understanding and compassion. Integrity: Transparency and honesty are the cornerstones of our practice. Expertise: We bring deep knowledge and strategic insight to every case.',
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

      {/* FAQ Section - New */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services and the LTD claims process
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Have general questions? We&apos;re here to help.
            </p>
            <Link 
              href="/contact" 
              className="btn btn-outline btn-primary hover:scale-105 transition-transform duration-200"
            >
              Contact Us
            </Link>
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
