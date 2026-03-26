'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { InteractiveMap } from '@/components/maps/InteractiveMap'
import { 
  branchLocations, 
  getUniqueCities, 
  getUniqueStates, 
  getUniqueServices,
  filterLocations,
  type Location,
  type LocationFilters 
} from '@/lib/locations'

export default function BranchLocatorPage() {
  const [locations, setLocations] = useState<Location[]>(branchLocations)
  const [filteredLocations, setFilteredLocations] = useState<Location[]>(branchLocations)
  const [filters, setFilters] = useState<LocationFilters>({
    type: 'branch',
    city: '',
    state: '',
    services: [],
    features: [],
    search: ''
  })
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [loading, setLoading] = useState(false)

  const cities = getUniqueCities()
  const states = getUniqueStates()
  const services = getUniqueServices()

  // Apply filters
  useEffect(() => {
    setLoading(true)
    const filtered = filterLocations(locations, filters)
    setFilteredLocations(filtered)
    setLoading(false)
  }, [filters, locations])

  const handleFilterChange = (key: keyof LocationFilters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleServiceToggle = (service: string) => {
    setFilters(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleClearFilters = () => {
    setFilters({
      type: 'branch',
      city: '',
      state: '',
      services: [],
      features: [],
      search: ''
    })
  }

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location)
  }

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Branch Locator</h1>
          <p className="text-xl text-blue-100">
            Find MNS Bank branches near you with complete details and services
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Filter Branches</h3>
              
              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Branches
                  </label>
                  <input
                    type="text"
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    placeholder="Search by name, address, IFSC..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* City Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <select
                    value={filters.city}
                    onChange={(e) => handleFilterChange('city', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Cities</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* State Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <select
                    value={filters.state}
                    onChange={(e) => handleFilterChange('state', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All States</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                {/* Services Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Services
                  </label>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {services.map(service => (
                      <label key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <Button
                  onClick={handleClearFilters}
                  variant="outline"
                  className="w-full"
                >
                  Clear Filters
                </Button>
              </div>

              {/* Results Count */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-semibold">{filteredLocations.length}</span> branches
                </p>
              </div>
            </div>
          </div>

          {/* Map and Results */}
          <div className="lg:col-span-3 space-y-8">
            {/* Interactive Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Branch Locations</h3>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Google Maps
                  </Button>
                </div>
              </div>
              
              <InteractiveMap
                locations={filteredLocations}
                filters={filters}
                onLocationSelect={handleLocationSelect}
                className="h-[500px]"
              />
            </div>

            {/* Branch List */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Branch List</h3>
              
              {loading ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <p className="text-gray-600 mt-2">Loading branches...</p>
                </div>
              ) : filteredLocations.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <p className="text-gray-600">No branches found matching your filters</p>
                  <Button
                    onClick={handleClearFilters}
                    variant="outline"
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredLocations.map((branch) => (
                    <div
                      key={branch.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                        selectedLocation?.id === branch.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => handleLocationSelect(branch)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-gray-900">{branch.name}</h4>
                            {branch.status === 'active' && (
                              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                                OPEN
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-2">{branch.address}</p>
                          <p className="text-gray-600 text-sm mb-2">
                            {branch.city}, {branch.state} - {branch.pincode}
                          </p>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.46.45 2.27 1.78 4.7 4.25 5.19.35.09.75-.02 1.02-.24l2.2-2.2c.28-.28.38-.67.26-1.02-.37-1.02-.37-2.49-1.79-4.75-4.25-5.19-.35-.09-.74.02-1.02.24l-2.2 2.2c-.28.28-.38.67-.26 1.02.37 1.02.37 2.49 1.79 4.75 4.25 5.19.35.09.74-.02 1.02-.24l2.2-2.2c.28-.28.38-.67.26-1.02-.37-1.02-.37-2.49-1.79-4.75-4.25-5.19-.35-.09-.74.02-1.02.24l-2.2 2.2c-.28.28-.38.67-.26 1.02.37 1.02.37 2.49 1.79 4.75 4.25 5.19.35.09.74-.02 1.02-.24l2.2-2.2c.28-.28.38-.67.26-1.02-.37-1.02-.37-2.49-1.79-4.75-4.25-5.19-.35-.09-.74.02-1.02.24l-2.2 2.2c-.28.28-.38.67-.26 1.02.37 1.02.37 2.49 1.79 4.75 4.25 5.19.35.09.74-.02 1.02-.24l2.2-2.2z"/>
                              </svg>
                              {branch.phone}
                            </div>
                            {branch.ifsc && (
                              <div className="flex items-center">
                                <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                                  {branch.ifsc}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-1 mt-3">
                            {branch.services.slice(0, 3).map((service, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                              >
                                {service}
                              </span>
                            ))}
                            {branch.services.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                +{branch.services.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="ml-4">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => window.open(
                              `https://maps.google.com/maps?q=${branch.coordinates.lat},${branch.coordinates.lng}`,
                              '_blank'
                            )}
                          >
                            Directions
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
