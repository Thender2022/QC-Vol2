'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-600">
          🧀 Quesadilla QC
        </Link>
        <nav className="flex gap-6 items-center">
          <Link href="/locations" className="hover:text-orange-600 transition">
            Locations
          </Link>
          <Link href="/events" className="hover:text-orange-600 transition">
            Events
          </Link>
          <Link href="/contact" className="hover:text-orange-600 transition">
            Contact
          </Link>
          <Link 
            href="/booking" 
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  )
}