'use client'

import { useEffect } from 'react'
import { logger } from '@/lib/logger'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to our logging service
    logger.error('Application error occurred', {
      digest: error.digest,
      name: error.name,
      message: error.message,
    }, error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-600 mb-6">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mb-6 text-left">
              <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
                Error Details
              </summary>
              <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                {error.message}
                {error.stack && `\n\n${error.stack}`}
              </pre>
            </details>
          )}
          
          <div className="space-y-3">
            <button
              onClick={reset}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Try again
            </button>
            
            <a
              href="/"
              className="block w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors text-center"
            >
              Go to homepage
            </a>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              If this problem persists, please contact our support team.
            </p>
            <div className="mt-2 space-y-1">
              <a href="/contact-us" className="text-sm text-blue-600 hover:text-blue-800">
                Contact Support
              </a>
              <br />
              <a href="/grievance-redressal" className="text-sm text-blue-600 hover:text-blue-800">
                Report an Issue
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
