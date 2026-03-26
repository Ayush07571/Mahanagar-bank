import { NextRequest, NextResponse } from 'next/server'
import { 
  allLocations, 
  getLocationsByType, 
  getLocationsByCity, 
  getLocationsByState, 
  searchLocations, 
  filterLocations,
  getLocationById,
  getUniqueCities,
  getUniqueStates,
  getUniqueServices,
  getUniqueFeatures
} from '@/lib/locations'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Parse query parameters
    const type = searchParams.get('type') as 'branch' | 'atm' | 'all' || 'all'
    const city = searchParams.get('city') || ''
    const state = searchParams.get('state') || ''
    const search = searchParams.get('search') || ''
    const services = searchParams.get('services')?.split(',').filter(Boolean) || []
    const features = searchParams.get('features')?.split(',').filter(Boolean) || []
    const id = searchParams.get('id')

    // Handle single location request
    if (id) {
      const location = getLocationById(id)
      if (!location) {
        return NextResponse.json(
          { success: false, message: 'Location not found' },
          { status: 404 }
        )
      }
      return NextResponse.json({
        success: true,
        data: location
      })
    }

    // Get base locations
    let locations = getLocationsByType(type)

    // Apply filters
    locations = filterLocations(locations, {
      type,
      city,
      state,
      services,
      features,
      search
    })

    // Return response
    return NextResponse.json({
      success: true,
      data: {
        locations,
        filters: {
          type,
          city,
          state,
          services,
          features,
          search
        },
        meta: {
          total: locations.length,
          cities: getUniqueCities(),
          states: getUniqueStates(),
          services: getUniqueServices(),
          features: getUniqueFeatures()
        }
      }
    })

  } catch (error) {
    console.error('Locations API error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, ...params } = body

    switch (action) {
      case 'search':
        return handleSearch(params)
      case 'filter':
        return handleFilter(params)
      case 'nearby':
        return handleNearby(params)
      default:
        return NextResponse.json(
          { success: false, message: 'Invalid action' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Locations API POST error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

function handleSearch(params: any) {
  const { query, type = 'all' } = params
  
  if (!query) {
    return NextResponse.json(
      { success: false, message: 'Search query is required' },
      { status: 400 }
    )
  }

  const results = searchLocations(query)
  const filteredResults = type !== 'all' 
    ? results.filter(location => location.type === type)
    : results

  return NextResponse.json({
    success: true,
    data: {
      query,
      type,
      results: filteredResults,
      total: filteredResults.length
    }
  })
}

function handleFilter(params: any) {
  const { filters } = params
  
  if (!filters) {
    return NextResponse.json(
      { success: false, message: 'Filters are required' },
      { status: 400 }
    )
  }

  let locations = allLocations
  
  // Apply filters
  locations = filterLocations(locations, filters)

  return NextResponse.json({
    success: true,
    data: {
      filters,
      locations,
      total: locations.length
    }
  })
}

function handleNearby(params: any) {
  const { lat, lng, radius = 10 } = params
  
  if (!lat || !lng) {
    return NextResponse.json(
      { success: false, message: 'Latitude and longitude are required' },
      { status: 400 }
    )
  }

  // Calculate distance between two points using Haversine formula
  function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371 // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLon = (lon2 - lon1) * Math.PI / 180
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return R * c
  }

  const nearbyLocations = allLocations
    .map(location => ({
      ...location,
      distance: calculateDistance(
        parseFloat(lat), 
        parseFloat(lng), 
        location.coordinates.lat, 
        location.coordinates.lng
      )
    }))
    .filter(location => location.distance <= radius)
    .sort((a, b) => a.distance - b.distance)

  return NextResponse.json({
    success: true,
    data: {
      center: { lat: parseFloat(lat), lng: parseFloat(lng) },
      radius,
      locations: nearbyLocations,
      total: nearbyLocations.length
    }
  })
}
