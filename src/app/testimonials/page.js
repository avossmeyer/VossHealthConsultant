'use client'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah T.",
      type: "SSDI Appeal Success",
      content: "After being denied SSDI twice, this team helped me appeal successfully. Their step-by-step guidance made all the difference. I now receive monthly benefits of $1,400, which has been life-changing for my family.",
      rating: 5,
      date: "March 2024"
    },
    {
      name: "Michael R.",
      type: "Long Term Disability Claim",
      content: "When my employer's insurance company made my LTD claim difficult, this team was invaluable. They helped me understand my policy details and gathered the right medical documentation. Within 3 months, my claim was approved. Their $200 initial fee and reasonable hourly rate saved me thousands compared to other firms.",
      rating: 5,
      date: "February 2024"
    },
    {
      name: "Jennifer L.",
      type: "SSDI Consultation",
      content: "The regular updates and clear communication made a huge difference. They verified my work history and helped gather medical evidence that proved crucial for my case. Their hourly rate was so reasonable compared to the $6,000 retainer other firms wanted.",
      rating: 5,
      date: "January 2024"
    },
    {
      name: "David M.",
      type: "Appeals Support",
      content: "When my initial claim was denied, I was devastated. Their team reviewed my case, identified the gaps, and helped prepare a compelling appeal. Their expertise in administrative hearings was invaluable.",
      rating: 5,
      date: "December 2023"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Images/Stock/testimonials.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
            opacity: '0.4'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Client Success Stories</h1>
          <p className="text-xl max-w-3xl">
            Real experiences from people we've helped navigate the disability claims process.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <span className="text-sm text-primary">{testimonial.type}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8">Join our successful clients and let us help you secure the benefits you deserve.</p>
          <button className="btn btn-primary btn-lg">
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </>
  )
}
