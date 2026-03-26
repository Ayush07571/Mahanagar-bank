import Link from 'next/link'
import { logger } from '@/lib/logger'

export default function NotFound() {
  // Log 404 errors for monitoring
  if (typeof window !== 'undefined') {
    logger.warn('404 Not Found', {
      url: window.location.href,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <div className="text-center">
          <div className="mb-4">
            <div className="text-6xl font-bold text-blue-600">404</div>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Page not found
          </h1>
          
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-3">
            <Link
              href="/"
              className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              Go to homepage
            </Link>
            
            <Link
              href="/contact-us"
              className="block w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors text-center"
            >
              Contact Support
            </Link>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">
              Looking for something specific?
            </p>
            <div className="space-y-2">
              <Link href="/personal-banking" className="block text-sm text-blue-600 hover:text-blue-800">
                Personal Banking
              </Link>
              <Link href="/business-banking" className="block text-sm text-blue-600 hover:text-blue-800">
                Business Banking
              </Link>
              <Link href="/locate-us" className="block text-sm text-blue-600 hover:text-blue-800">
                Find a Branch
              </Link>
              <Link href="/emi-calculator" className="block text-sm text-blue-600 hover:text-blue-800">
                EMI Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
