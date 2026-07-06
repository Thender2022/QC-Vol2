'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface BookingFormProps {
  eventType: string
  tier: string
  price: number
}

export default function BookingForm({ eventType, tier, price }: BookingFormProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      customerName: formData.get('customerName'),
      customerEmail: formData.get('customerEmail'),
      customerPhone: formData.get('customerPhone'),
      eventDate: formData.get('eventDate'),
      eventTime: formData.get('eventTime'),
      guestCount: formData.get('guestCount'),
      location: formData.get('location'),
      specialRequests: formData.get('specialRequests'),
      eventType: eventType,
      tier: tier,
      totalPrice: price
    }

    // For now, just log the data
    console.log('Booking Data:', data)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setLoading(false)
    
    // Redirect to success page
    router.push('/booking/success')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name *</label>
          <input
            type="text"
            name="customerName"
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-orange-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input
            type="email"
            name="customerEmail"
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-orange-600"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Phone Number *</label>
        <input
          type="tel"
          name="customerPhone"
          required
          className="w-full p-2 border rounded-lg focus:outline-none focus:border-orange-600"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Event Date *</label>
          <input
            type="date"
            name="eventDate"
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-orange-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Event Time *</label>
          <input
            type="time"
            name="eventTime"
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-orange-600"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Number of Guests *</label>
        <input
          type="number"
          name="guestCount"
          required
          min="1"
          className="w-full p-2 border rounded-lg focus:outline-none focus:border-orange-600"
        />
      </div>

      {eventType === 'POP_UP' && (
        <div>
          <label className="block text-sm font-medium mb-1">Preferred Location</label>
          <input
            type="text"
            name="location"
            placeholder="e.g., Farmers Market, Downtown Festival"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-orange-600"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Special Requests</label>
        <textarea
          name="specialRequests"
          rows={3}
          className="w-full p-2 border rounded-lg focus:outline-none focus:border-orange-600"
          placeholder="Any dietary restrictions, setup needs, or special requirements"
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Selected Package</p>
            <p className="font-medium">{eventType} - {tier}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Total</p>
            <p className="text-2xl font-bold text-orange-600">${price}</p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Book Now'}
      </button>
    </form>
  )
}