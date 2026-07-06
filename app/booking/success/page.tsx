import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function BookingSuccessPage() {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Booking Confirmed! 🎉</h1>
            
            <p className="text-lg text-gray-600 mb-6">
              Thank you for booking with Quesadilla QC! We&apos;ve received your request 
              and will contact you within 24 hours to confirm the details.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg text-left mb-8">
              <h2 className="font-semibold mb-2">What happens next?</h2>
              <ul className="space-y-2 text-gray-600">
                <li>✓ You&apos;ll receive a confirmation email shortly</li>
                <li>✓ We&apos;ll review your event details</li>
                <li>✓ We&apos;ll contact you within 24 hours to finalize</li>
                <li>✓ A deposit may be required to secure your date</li>
              </ul>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Link 
                href="/" 
                className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
              >
                Return Home
              </Link>
              <Link 
                href="/booking" 
                className="border border-gray-300 px-6 py-2 rounded-lg hover:border-orange-600 hover:text-orange-600 transition"
              >
                Book Another Event
              </Link>
            </div>
          </div>
        </main>
  
        <Footer />
      </div>
    )
  }