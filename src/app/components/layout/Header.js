'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/placeholder.svg" alt="Logo" width={40} height={40} className="mr-3" />
          <h1 className="text-2xl font-semibold text-primary">Disability Claims Consulting</h1>
        </div>
      </div>
    </header>
  )
} 