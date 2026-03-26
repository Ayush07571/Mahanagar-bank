'use client'

import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { branchLocations, getUniqueCities, getUniqueStates } from '@/lib/locations'
import type { Location } from '@/lib/locations'

export default function IFSCCodesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'city' | 'state'>('name')

  const cities = getUniqueCities()
  const states = getUniqueStates()

  // Filter and sort branches
  const filteredBranches = useMemo(() => {
    let filtered = branchLocations.filter(branch => {
      const matchesSearch = !searchQuery || 
        branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.ifsc?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.state.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCity = !selectedCity || branch.city === selectedCity
      const matchesState = !selectedState || branch.state === selectedState

      return matchesSearch && matchesCity && matchesState
    })

    // Sort branches
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'city':
          return a.city.localeCompare(b.city)
        case 'state':
          return a.state.localeCompare(b.state)
        default:
          return 0
      }
    })
  }, [searchQuery, selectedCity, selectedState, sortBy])

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedCity('')
    setSelectedState('')
    setSortBy('name')
  }

  const handleExportCSV = () => {
    const headers = ['Branch Name', 'Address', 'City', 'State', 'Pincode', 'IFSC Code', 'MICR Code', 'Branch Code', 'Phone']
    const csvContent = [
      headers.join(','),
      ...filteredBranches.map(branch => [
        `"${branch.name}"`,
        `"${branch.address}"`,
        `"${branch.city}"`,
        `"${branch.state}"`,
        `"${branch.pincode}"`,
        `"${branch.ifsc}"`,
        `"${branch.micr}"`,
        `"${branch.branchCode}"`,
        `"${branch.phone}"`
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `mns-bank-ifsc-codes-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // Show success message (you could add a toast notification here)
      console.log('IFSC code copied to clipboard')
    })
  }

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">IFSC Codes</h1>
          <p className="text-xl text-indigo-100">
            Find IFSC codes for all MNS Bank branches with search and filtering options
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Branches
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, address, IFSC..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All States</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="name">Branch Name</option>
                <option value="city">City</option>
                <option value="state">State</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold">{filteredBranches.length}</span> branches
            </p>
            <div className="flex space-x-3">
              <Button
                onClick={handleClearFilters}
                variant="outline"
                size="sm"
              >
                Clear Filters
              </Button>
              <Button
                onClick={handleExportCSV}
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
                size="sm"
              >
                Export CSV
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              IFSC Codes ({filteredBranches.length} branches)
            </h3>
          </div>

          {filteredBranches.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              <p className="text-gray-600">No branches found matching your criteria</p>
              <Button
                onClick={handleClearFilters}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Branch Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      IFSC Code
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      MICR Code
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredBranches.map((branch) => (
                    <tr key={branch.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {branch.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {branch.city}, {branch.state}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {branch.address}
                        </div>
                        <div className="text-sm text-gray-500">
                          {branch.pincode}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-mono font-medium text-indigo-600">
                            {branch.ifsc}
                          </span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(branch.ifsc || '')}
                            className="p-1 text-gray-400 hover:text-indigo-600"
                            title="Copy IFSC Code"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12v14h2V3c0-1.1-.9-2-2-2zM3 5H1v16h2V5zm16 8h-2v8h2v-8zm-4 0h-2v8h2v-8z"/>
                            </svg>
                          </Button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-mono text-gray-900">
                          {branch.micr}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {branch.phone}
                        </div>
                        {branch.email && (
                          <div className="text-sm text-gray-500">
                            {branch.email}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
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
                          <Button
                            size="sm"
                            onClick={() => window.open(`/tools/branch-locator`, '_self')}
                          >
                            Details
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Information Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About IFSC Codes</h3>
            <div className="space-y-3 text-gray-600">
              <p>
                IFSC (Indian Financial System Code) is an 11-digit alphanumeric code used to identify bank branches participating in electronic payment systems.
              </p>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">IFSC Code Format</h4>
                <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                  AAAA0BBBBBBB
                </div>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• First 4 characters: Bank code (MNSB)</li>
                  <li>• 5th character: Zero (0)</li>
                  <li>• Last 6 characters: Branch code</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Use IFSC</h3>
            <div className="space-y-3 text-gray-600">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">For NEFT/RTGS Transfers</h4>
                <p className="text-sm">
                  Use the IFSC code to transfer funds to any MNS Bank account through NEFT or RTGS.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">For IMPS</h4>
                <p className="text-sm">
                  IFSC code is required for IMPS transfers to ensure proper routing.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">For Bill Payments</h4>
                <p className="text-sm">
                  Use the branch IFSC code when setting up bill payments through various payment platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
