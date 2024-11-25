import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto">
        <Link href="/booking" className="btn btn-outline text-white">
          Book a Consultation
        </Link>
      </div>
    </nav>
  )
}
