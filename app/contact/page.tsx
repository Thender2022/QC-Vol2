'use client'

import { useState } from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }

    // For now, just log the data
    console.log('Contact Form Data:', data)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setLoading(false)
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions about our services, want to partner with us, or need help with your booking? 
            We&apos;d love to hear from you!
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 border rounded-lg">
            <div className="text-3xl mb-2">📧</div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600 text-sm">hello@quesadillaqc.com</p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600 text-sm">(555) 123-4567</p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="text-3xl mb-2">⏰</div>
            <h3 className="font-semibold">Hours</h3>
            <p className="text-gray-600 text-sm">Mon-Sat: 9am - 8pm</p>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">✅</div>
                <h2 className="text-xl font-semibold mb-2">Message Sent!</h2>
                <p className="text-gray-600">
                    Thank you for reaching out! We&apos;ll get back to you within 24 hours.
                </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-2 border rounded-lg focus:outline-none focus:border-orange-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 border rounded-lg focus:outline-none focus:border-orange-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:border-orange-600"
                  placeholder="General inquiry, partnership, etc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full p-2 border rounded-lg focus:outline-none focus:border-orange-600"
                  placeholder="Tell us how we can help..."
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
