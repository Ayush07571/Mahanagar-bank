'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { LocationPopup } from './LocationPopup'
import type { Location, LocationFilters } from '@/lib/locations'
import { getDirectionsUrl } from '@/lib/locations'

interface InteractiveMapProps {
  locations: Location[]
  filters: LocationFilters
  onLocationSelect?: (location: Location) => void
  className?: string
}

export function InteractiveMap({ 
  locations, 
  filters, 
  onLocationSelect, 
  className = '' 
}: InteractiveMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 }) // India center
  const [mapZoom, setMapZoom] = useState(5)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  // Filter locations based on current filters
  const filteredLocations = locations.filter(location => {
    if (filters.type && filters.type !== 'all') {
      if (location.type !== filters.type) return false
    }
    return true
  })

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ lat: latitude, lng: longitude })
          setMapCenter({ lat: latitude, lng: longitude })
          setMapZoom(12)
        },
        (error) => {
          console.error('Error getting location:', error)
        }
      )
    }
  }, [])

  // Handle location click
  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location)
    onLocationSelect?.(location)
  }

  // Handle directions
  const handleDirections = (location: Location) => {
    if (userLocation) {
      const from = `${userLocation.lat},${userLocation.lng}`
      const url = getDirectionsUrl(from, location)
      window.open(url, '_blank')
    } else {
      // Fallback to Google Maps with just destination
      const url = `https://maps.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`
      window.open(url, '_blank')
    }
  }

  // Handle map controls
  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 1, 20))
  }

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 1, 2))
  }

  const handleReset = () => {
    setMapCenter({ lat: 20.5937, lng: 78.9629 })
    setMapZoom(5)
    setSelectedLocation(null)
  }

  const handleCenterOnUser = () => {
    if (userLocation) {
      setMapCenter(userLocation)
      setMapZoom(12)
    }
  }

  // Simple map implementation (in production, you'd use Google Maps, Mapbox, or Leaflet)
  return (
    <div className={`relative bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      {/* Map Container */}
      <div 
        ref={mapRef}
        className="relative h-[500px] bg-gradient-to-br from-blue-50 to-green-50"
      >
        {/* Simple map visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Interactive Map View</h3>
            <p className="text-sm mb-4">Showing {filteredLocations.length} locations</p>
            <div className="flex justify-center space-x-2">
              <Button size="sm" variant="outline">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Google Maps
              </Button>
              <Button size="sm" variant="outline">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5z"/>
                </svg>
                Open in Maps
              </Button>
            </div>
          </div>
        </div>

        {/* Location pins (simplified visualization) */}
        {filteredLocations.map((location, index) => {
          const position = {
            left: `${((location.coordinates.lng - 68) / (97 - 68)) * 100}%`,
            top: `${((37 - location.coordinates.lat) / (37 - 8)) * 100}%`
          }

          return (
            <div
              key={location.id}
              className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={position}
              onClick={() => handleLocationClick(location)}
            >
              <div className="relative">
                {location.type === 'branch' ? (
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg group-hover:scale-110 transition-transform">
                    B
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg group-hover:scale-110 transition-transform">
                    A
                  </div>
                )}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-current group-hover:border-t-blue-600 transition-colors"></div>
              </div>
            </div>
          )
        })}

        {/* User location marker */}
        {userLocation && (
          <div
            className="absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${((userLocation.lng - 68) / (97 - 68)) * 100}%`,
              top: `${((37 - userLocation.lat) / (37 - 8)) * 100}%`
            }}
          >
            <div className="absolute inset-0 bg-red-400 rounded-full animate-ping"></div>
          </div>
        )}
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-2 space-y-2">
        <Button
          size="sm"
          variant="outline"
          onClick={handleZoomIn}
          className="w-10 h-10 p-0"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={handleZoomOut}
          className="w-10 h-10 p-0"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13H5v-2h14v2z"/>
          </svg>
        </Button>
        <div className="border-t pt-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleCenterOnUser}
            className="w-10 h-10 p-0"
            title="Center on my location"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
            </svg>
          </Button>
        </div>
        <div className="border-t pt-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleReset}
            className="w-10 h-10 p-0"
            title="Reset view"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
            </svg>
          </Button>
        </div>
      </div>

      {/* Location Popup */}
      {selectedLocation && (
        <LocationPopup
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
          onDirections={() => handleDirections(selectedLocation)}
        />
      )}
    </div>
  )
}
