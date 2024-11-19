import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Phone, Mail, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="mr-3" />
            <h1 className="text-2xl font-semibold text-blue-800">Disability Claims Consulting</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#" className="text-gray-600 hover:text-blue-800">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-800">Services</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-800">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-800">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-4">Expert Guidance for Your Disability Claims</h2>
              <p className="text-xl mb-8">We're here to help you navigate the complex world of disability claims with compassion and expertise.</p>
              <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-100">
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <CheckCircle className="mr-2" />
                    Claim Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  We thoroughly assess your situation to determine the strength of your claim and the best path forward.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <CheckCircle className="mr-2" />
                    Application Assistance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Our experts guide you through the entire application process, ensuring all necessary documentation is properly prepared and submitted.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <CheckCircle className="mr-2" />
                    Appeals Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  If your claim has been denied, we provide comprehensive support for the appeals process to help overturn the decision.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-800 rounded-full p-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Experienced Professionals</h3>
                  <p className="text-gray-600">Our team has years of experience in successfully handling disability claims across various fields.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-800 rounded-full p-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Personalized Approach</h3>
                  <p className="text-gray-600">We understand that every case is unique, and we tailor our services to meet your specific needs.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-800 rounded-full p-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Compassionate Support</h3>
                  <p className="text-gray-600">We provide empathetic guidance throughout the entire process, ensuring you feel supported every step of the way.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-800 rounded-full p-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Proven Results</h3>
                  <p className="text-gray-600">Our track record speaks for itself, with a high success rate in approved claims and appeals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-600">Contact us today for a free consultation and take the first step towards securing your disability benefits.</p>
            <Button size="lg" className="bg-blue-800 text-white hover:bg-blue-700">
              Contact Us Now
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Disability Claims Consulting</h3>
              <p className="text-gray-400">Expert guidance for your disability claims journey.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  info@disabilityclaims.com
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Mon-Fri: 9am-5pm
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2023 Disability Claims Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}