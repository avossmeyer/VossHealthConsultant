import React from 'react';
import siteContent from '../content/siteContent.json';

export const metadata = {
  title: 'FAQ | Disability Claims Consulting',
  description: 'Find answers to frequently asked questions about our disability claims consulting services.',
};

export default function FAQ() {
  const { faqs } = siteContent.about;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{faqs.title}</h1>
          <p className="text-xl text-gray-600">{faqs.subtitle}</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.items.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-white rounded-lg shadow-md p-8">
          <p className="text-xl text-gray-700 mb-6">{faqs.cta.text}</p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
          >
            {faqs.cta.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
