import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

export default function EventsPage() {
  const eventTypes = [
    {
      type: "Pop-Up Events",
      description: "Perfect for festivals, farmers markets, and community gatherings",
      features: [
        "2-4 hour service",
        "Up to 100 guests",
        "3-5 quesadilla varieties",
        "Setup and breakdown included"
      ],
      priceRange: "$500 - $1,000",
      icon: "🎪"
    },
    {
      type: "Private Parties",
      description: "Birthday parties, anniversaries, family reunions, and more",
      features: [
        "3-5 hour service",
        "Up to 75 guests",
        "Custom menu options",
        "Full service staff"
      ],
      priceRange: "$800 - $2,000",
      icon: "🎉"
    },
    {
      type: "Corporate Events",
      description: "Office lunches, company celebrations, and corporate gatherings",
      features: [
        "Full day service available",
        "100+ guests",
        "Branded experience",
        "Custom catering packages"
      ],
      priceRange: "$1,500 - $4,000",
      icon: "🏢"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Our Events</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          From intimate gatherings to large celebrations, we bring the flavor to your event.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {eventTypes.map((event) => (
            <div 
              key={event.type} 
              className="border rounded-lg p-6 hover:shadow-lg transition flex flex-col"
            >
              <div className="text-5xl mb-4">{event.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{event.type}</h2>
              <p className="text-gray-600 mb-4">{event.description}</p>
              
              <div className="mb-4 flex-1">
                <h3 className="font-semibold text-sm mb-2">What&apos;s Included:</h3>
                <ul className="space-y-1">
                  {event.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-orange-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-500">Starting at</p>
                <p className="text-xl font-bold text-orange-600">{event.priceRange}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 pt-8 border-t">
          <p className="text-gray-600 mb-4">Ready to book your event?</p>
          <Link 
            href="/booking" 
            className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition inline-block"
          >
            Book Now
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}