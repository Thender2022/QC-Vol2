import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

export default function LocationsPage() {
  const locations = [
    {
      name: "Downtown Food Hall",
      address: "123 Main Street, Suite 101",
      city: "Austin, TX 78701",
      hours: "Mon-Fri: 11am - 8pm, Sat: 12pm - 6pm",
      partner: "Austin Food Collective",
      image: "🏛️"
    },
    {
      name: "Riverside Market",
      address: "456 River Road",
      city: "Austin, TX 78704",
      hours: "Wed-Sun: 10am - 7pm",
      partner: "Riverside Farmers Market",
      image: "🌿"
    },
    {
      name: "The Brewery Taproom",
      address: "789 Brewery Lane",
      city: "Austin, TX 78702",
      hours: "Thu-Sat: 5pm - 10pm",
      partner: "Austin Craft Brewing Co.",
      image: "🍺"
    },
    {
      name: "Office Tower Cafe",
      address: "200 Commerce Drive",
      city: "Austin, TX 78705",
      hours: "Mon-Fri: 8am - 3pm",
      partner: "Commerce Tower Management",
      image: "🏢"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Our Locations</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Find Quesadilla QC at these partner locations. Coming soon to more cities!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {locations.map((location) => (
            <div 
              key={location.name} 
              className="border rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{location.image}</span>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-1">{location.name}</h2>
                  <p className="text-sm text-gray-600 mb-2">
                    Partner: {location.partner}
                  </p>
                  <p className="text-sm text-gray-600">{location.address}</p>
                  <p className="text-sm text-gray-600 mb-2">{location.city}</p>
                  <p className="text-sm font-medium text-orange-600">{location.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 pt-8 border-t">
          <p className="text-gray-600 mb-4">
            Interested in partnering with us?
          </p>
          <Link 
            href="/contact" 
            className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition inline-block"
          >
            Become a Partner
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}