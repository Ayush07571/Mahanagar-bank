'use client'

import { Button } from '@/components/ui/button'
import type { Location } from '@/lib/locations'

interface LocationPopupProps {
  location: Location
  onClose: () => void
  onDirections: () => void
}

export function LocationPopup({ location, onClose, onDirections }: LocationPopupProps) {
  const getDirectionsUrl = (location: Location) => {
    return `https://maps.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`
  }

  const getPhoneUrl = (phone: string) => {
    return `tel:${phone.replace(/[^0-9+]/g, '')}`
  }

  const getEmailUrl = (email: string) => {
    return `mailto:${email}`
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-2 py-1 text-xs font-medium rounded ${
                  location.type === 'branch' 
                    ? 'bg-blue-800 text-white' 
                    : 'bg-green-600 text-white'
                }`}>
                  {location.type === 'branch' ? 'BRANCH' : 'ATM'}
                </span>
                {location.status === 'active' && (
                  <span className="px-2 py-1 text-xs font-medium bg-green-600 text-white rounded">
                    OPEN
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold">{location.name}</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white hover:bg-opacity-20 p-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Address */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
            <p className="text-gray-600 text-sm">{location.address}</p>
            <p className="text-gray-600 text-sm">
              {location.city}, {location.state} - {location.pincode}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
            <div className="space-y-2">
              <a
                href={getPhoneUrl(location.phone)}
                className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.46.45 2.27 1.78 4.7 4.25 5.19.35.09.75-.02 1.02-.24l2.2-2.2c.28-.28.38-.67.26-1.02-.37-1.02-.37-2.49-1.79-4.75-4.25-5.19-.35-.09-.74.02-1.02.24l-2.2 2.2c-.28.28-.38.67-.26 1.02.37 1.02.37 2.49 1.79 4.75 4.25 5.19.35.09.74-.02 1.02-.24l2.2-2.2c.28-.28.38-.67.26-1.02-.37-1.02-.37-2.49-1.79-4.75-4.25-5.19-.35-.09-.74.02-1.02.24l-2.2 2.2c-.28.28-.38.67-.26 1.02.37 1.02.37 2.49 1.79 4.75 4.25 5.19.35.09.74-.02 1.02-.24l2.2-2.2c.28-.28.38-.67.26-1.02-.37-1.02-.37-2.49-1.79-4.75-4.25-5.19-.35-.09-.74.02-1.02.24l-2.2 2.2c-.28.28-.38.67-.26 1.02.37 1.02.37 2.49 1.79 4.75 4.25 5.19.35.09.74-.02 1.02-.24l2.2-2.2z"/>
                </svg>
                {location.phone}
              </a>
              {location.email && (
                <a
                  href={getEmailUrl(location.email)}
                  className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  {location.email}
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
            <div className="flex flex-wrap gap-2">
              {location.services.slice(0, 4).map((service, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {service}
                </span>
              ))}
              {location.services.length > 4 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  +{location.services.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Timings */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Timings</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">{location.timings.weekdays}</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">{location.timings.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium">{location.timings.sunday}</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
            <div className="flex flex-wrap gap-2">
              {location.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                >
                  {feature}
                </span>
              ))}
              {location.features.length > 3 && (
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  +{location.features.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Accessibility */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
            <div className="flex items-center space-x-4 text-sm">
              {location.wheelchairAccessible && (
                <div className="flex items-center text-green-600">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.5 3c.28 0 .5.22.5.5s.22-.5.5-.5.5-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM20 21h-1v-7c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5v7h-1v-9c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5v9h-1V9c0-.28-.22-.5-.5-.5H6c-.28 0-.5.22-.5.5v12H5c-.28 0-.5.22-.5.5s.22.5.5.5h15c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z"/>
                  </svg>
                  Wheelchair Accessible
                </div>
              )}
              {location.parking && (
                <div className="flex items-center text-blue-600">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4c-.67 0-1.23.42-1.43 1.01L13 18.08c-.37 1.11-1.48 1.71-2.59 1.34-.56-.19-.99-.59-1.28-1.14L7.8 11.5c-.19-.37-.59-.99-1.14-1.28L4.4 5.5c-.37-.19-.99-.59-1.14-1.28L2.4 3.5c-.19-.37-.59-.99-1.14-1.28L.4 1.5c-.37-.19-.99-.59-1.14-1.28L18.92 5.01z"/>
                  </svg>
                  Parking Available
                </div>
              )}
            </div>
          </div>

          {/* Branch Specific Info */}
          {location.type === 'branch' && location.ifsc && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Banking Details</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>IFSC Code:</span>
                  <span className="font-mono font-medium">{location.ifsc}</span>
                </div>
                {location.micr && (
                  <div className="flex justify-between">
                    <span>MICR Code:</span>
                    <span className="font-mono font-medium">{location.micr}</span>
                  </div>
                )}
                {location.branchCode && (
                  <div className="flex justify-between">
                    <span>Branch Code:</span>
                    <span className="font-mono font-medium">{location.branchCode}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="bg-gray-50 px-4 py-3 rounded-b-lg">
          <div className="flex space-x-3">
            <Button
              onClick={onDirections}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v2h2v3h4v-3h2v-2h-2z"/>
              </svg>
              Get Directions
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open(getDirectionsUrl(location), '_blank')}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              View on Map
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
