'use client'

import { useState } from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import EventTypeSelector from '@/app/components/EventsTypeSelector'
import TierSelector from '@/app/components/TierSelector'
import BookingForm from '@/app/components/BookingForm'

// Define the types
type EventType = 'POP_UP' | 'PRIVATE' | 'CORPORATE'
type TierType = 'BASIC' | 'PREMIUM' | 'DELUXE'

export default function BookingPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventType>('POP_UP')
  const [selectedTier, setSelectedTier] = useState<TierType>('BASIC')

  // Define the pricing structure with proper typing
  const tiers: Record<EventType, Record<TierType, number>> = {
    POP_UP: {
      BASIC: 500,
      PREMIUM: 750,
      DELUXE: 1000
    },
    PRIVATE: {
      BASIC: 800,
      PREMIUM: 1200,
      DELUXE: 2000
    },
    CORPORATE: {
      BASIC: 1500,
      PREMIUM: 2500,
      DELUXE: 4000
    }
  }

  const currentPrice = tiers[selectedEvent][selectedTier]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Book Your Quesadilla Event</h1>
        
        <div className="space-y-8">
          {/* Step 1: Event Type */}
          <EventTypeSelector 
            selectedEvent={selectedEvent}
            onEventChange={setSelectedEvent}
          />

          {/* Step 2: Tier Selection */}
          <TierSelector 
            selectedEvent={selectedEvent}
            selectedTier={selectedTier}
            onTierChange={setSelectedTier}
          />

          {/* Step 3: Booking Form */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-semibold mb-4">3. Your Details</h2>
            <BookingForm 
              eventType={selectedEvent}
              tier={selectedTier}
              price={currentPrice}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}