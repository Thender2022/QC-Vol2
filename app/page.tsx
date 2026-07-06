import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              Gourmet Quesadillas for <br />
              <span className="text-orange-600">Your Next Event</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bringing delicious, authentic quesadillas to pop-ups, private parties, 
              and corporate events. Made fresh with quality ingredients.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Link 
                href="/booking" 
                className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition text-lg"
              >
                Book Your Event
              </Link>
              <Link 
                href="/locations" 
                className="border border-gray-300 px-8 py-3 rounded-lg hover:border-orange-600 hover:text-orange-600 transition text-lg"
              >
                Find Us
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Pop-Up Events</h3>
              <p className="text-gray-600">Perfect for festivals, markets, and community events</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Private Parties</h3>
              <p className="text-gray-600">Birthdays, anniversaries, and family gatherings</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Corporate Catering</h3>
              <p className="text-gray-600">Office lunches, company events, and celebrations</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}