import React from 'react';
import siteContent from '../content/siteContent.json';

export const metadata = {
  title: 'Terms of Service | Disability Claims Consulting',
  description: 'Terms and conditions for using our disability claims consulting services.',
};

export default function TermsOfService() {
  const terms = siteContent.terms;

  const renderList = (items) => (
    <ul className="list-none pl-6 mb-4 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <span className="mr-2 text-indigo-500">•</span>
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 border-b pb-4">{terms.title}</h1>
        
        <div className="space-y-8 bg-white shadow-lg rounded-lg p-8">
          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{terms.agreement.title}</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">{terms.agreement.content}</p>
          </section>

          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{terms.serviceDescription.title}</h2>
            <p className="mb-4 text-gray-700">{terms.serviceDescription.pretext}</p>
            {renderList(terms.serviceDescription.items)}
          </section>

          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{terms.paymentTerms.title}</h2>
            <p className="mb-4 text-gray-700">{terms.paymentTerms.pretext}</p>
            {renderList(terms.paymentTerms.items)}
          </section>

          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{terms.clientResponsibilities.title}</h2>
            <p className="mb-4 text-gray-700">{terms.clientResponsibilities.pretext}</p>
            {renderList(terms.clientResponsibilities.items)}
          </section>

          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{terms.confidentiality.title}</h2>
            <p className="mb-4 text-gray-700">{terms.confidentiality.pretext}</p>
            {renderList(terms.confidentiality.items)}
          </section>

          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{terms.disclaimer.title}</h2>
            <p className="mb-4 text-gray-700">{terms.disclaimer.pretext}</p>
            {renderList(terms.disclaimer.items)}
          </section>

          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{terms.termination.title}</h2>
            <p className="mb-4 text-gray-700">{terms.termination.pretext}</p>
            {renderList(terms.termination.items)}
          </section>

          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{terms.updates.title}</h2>
            <p className="mb-4 text-gray-700">{terms.updates.content}</p>
            <p className="text-sm text-gray-600 italic">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
