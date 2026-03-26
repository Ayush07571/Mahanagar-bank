'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { allLocations, getUniqueCities, getUniqueStates } from '@/lib/locations'
import type { Location } from '@/lib/locations'

export default function LocateUsPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'branches' | 'atms'>('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedState, setSelectedState] = useState('')

  const cities = getUniqueCities()
  const states = getUniqueStates()
  const branchCount = allLocations.filter(loc => loc.type === 'branch').length
  const atmCount = allLocations.filter(loc => loc.type === 'atm').length

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const query = encodeURIComponent(searchQuery.trim())
      window.open(`https://maps.google.com/maps?q=${query}`, '_blank')
    }
  }

  const handleCitySearch = (city: string) => {
    window.open(`https://maps.google.com/maps?q=${encodeURIComponent(city)}`, '_blank')
  }

  const handleQuickAction = (action: 'branches' | 'atms' | 'nearby') => {
    switch (action) {
      case 'branches':
        window.open('/tools/branch-locator', '_self')
        break
      case 'atms':
        window.open('/tools/atm-locator', '_self')
        break
      case 'nearby':
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords
              window.open(
                `https://maps.google.com/maps?q=${latitude},${longitude}&search=nearby+banks`,
                '_blank'
              )
            },
            (error) => {
              console.error('Error getting location:', error)
              // Fallback to main city search
              window.open('/tools/branch-locator', '_self')
            }
          )
        } else {
          window.open('/tools/branch-locator', '_self')
        }
        break
    }
  }

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Locate Us</h1>
          <p className="text-xl text-purple-100">
            Find MNS Bank branches and ATMs near you with our comprehensive locator
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {[
                { id: 'overview', label: 'Overview', icon: '📍' },
                { id: 'branches', label: 'Branches', icon: '🏢' },
                { id: 'atms', label: 'ATMs', icon: '💳' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Search */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Search</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Locations
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by name, address, IFSC..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <Button
                      onClick={handleSearch}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Search
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search by City
                  </label>
                  <div className="flex space-x-2">
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select a city</option>
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    <Button
                      onClick={() => selectedCity && handleCitySearch(selectedCity)}
                      disabled={!selectedCity}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Go
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Button
                  onClick={() => handleQuickAction('branches')}
                  className="bg-blue-600 hover:bg-blue-700 text-white h-24 flex flex-col items-center justify-center space-y-2"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                  <span className="text-sm">Find Branches</span>
                </Button>

                <Button
                  onClick={() => handleQuickAction('atms')}
                  className="bg-green-600 hover:bg-green-700 text-white h-24 flex flex-col items-center justify-center space-y-2"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm-8-2c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>
                  </svg>
                  <span className="text-sm">Find ATMs</span>
                </Button>

                <Button
                  onClick={() => handleQuickAction('nearby')}
                  className="bg-purple-600 hover:bg-purple-700 text-white h-24 flex flex-col items-center justify-center space-y-2"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                  </svg>
                  <span className="text-sm">Near Me</span>
                </Button>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Network Overview</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{branchCount}</p>
                  <p className="text-sm text-gray-600">Branches</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm-8-2c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{atmCount}</p>
                  <p className="text-sm text-gray-600">ATMs</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{states.length}</p>
                  <p className="text-sm text-gray-600">States</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{cities.length}</p>
                  <p className="text-sm text-gray-600">Cities</p>
                </div>
              </div>
            </div>

            {/* Featured Locations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Featured Locations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allLocations.slice(0, 4).map((location) => (
                  <div key={location.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        location.type === 'branch' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {location.type === 'branch' ? 'BRANCH' : 'ATM'}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                        {location.status === 'active' ? 'OPEN' : 'CLOSED'}
                      </span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">{location.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{location.address}</p>
                    <p className="text-gray-600 text-sm mb-3">
                      {location.city}, {location.state} - {location.pincode}
                    </p>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(
                        `https://maps.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`,
                        '_blank'
                      )}
                    >
                      Get Directions
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Branches Tab */}
        {activeTab === 'branches' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Branch Network</h3>
              <Button
                onClick={() => window.open('/tools/branch-locator', '_self')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                View All Branches
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allLocations.filter(loc => loc.type === 'branch').slice(0, 6).map((branch) => (
                <div key={branch.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{branch.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{branch.address}</p>
                  <p className="text-gray-600 text-sm mb-3">
                    {branch.city}, {branch.state}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">IFSC: {branch.ifsc}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(
                        `https://maps.google.com/maps?q=${branch.coordinates.lat},${branch.coordinates.lng}`,
                        '_blank'
                      )}
                    >
                      Map
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ATMs Tab */}
        {activeTab === 'atms' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">ATM Network</h3>
              <Button
                onClick={() => window.open('/tools/atm-locator', '_self')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                View All ATMs
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allLocations.filter(loc => loc.type === 'atm').slice(0, 6).map((atm) => (
                <div key={atm.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{atm.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{atm.address}</p>
                  <p className="text-gray-600 text-sm mb-3">
                    {atm.city}, {atm.state}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-green-600 font-medium">24/7 Available</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(
                        `https://maps.google.com/maps?q=${atm.coordinates.lat},${atm.coordinates.lng}`,
                        '_blank'
                      )}
                    >
                      Map
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
