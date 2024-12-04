import React from 'react';
import siteContent from '../content/siteContent.json';

export const metadata = {
  title: 'Privacy Policy | Disability Claims Consulting',
  description: 'Our commitment to protecting your privacy and personal information while providing disability claims consulting services.',
};

export default function PrivacyPolicy() {
  const privacy = siteContent.privacy;

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
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 border-b pb-4">{privacy.title}</h1>
        
        <div className="space-y-8 bg-white shadow-lg rounded-lg p-8">
          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{privacy.introduction.title}</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">{privacy.introduction.content}</p>
          </section>

          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{privacy.informationUse.title}</h2>
            <p className="mb-4 text-gray-700">{privacy.informationUse.pretext}</p>
            {renderList(privacy.informationUse.items)}
          </section>

          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{privacy.protection.title}</h2>
            <p className="mb-4 text-gray-700">{privacy.protection.pretext}</p>
            {renderList(privacy.protection.items)}
          </section>

          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{privacy.sharing.title}</h2>
            <p className="mb-4 text-gray-700">{privacy.sharing.pretext}</p>
            {renderList(privacy.sharing.items)}
          </section>

          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{privacy.rights.title}</h2>
            <p className="mb-4 text-gray-700">{privacy.rights.pretext}</p>
            {renderList(privacy.rights.items)}
          </section>

          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{privacy.contact.title}</h2>
            <p className="mb-4 text-gray-700">{privacy.contact.content}</p>
            <p className="mb-4 bg-gray-100 p-4 rounded-lg text-gray-700 inline-block">
              Email: <a href={`mailto:${privacy.contact.email}`} className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">{privacy.contact.email}</a>
            </p>
          </section>

          <section className="hover:bg-gray-50 transition-colors duration-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{privacy.updates.title}</h2>
            <p className="mb-4 text-gray-700">{privacy.updates.content}</p>
            <p className="text-sm text-gray-600 italic">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 