// Branch and ATM location data models and seed data

export interface Location {
  id: string
  type: 'branch' | 'atm'
  name: string
  address: string
  city: string
  state: string
  pincode: string
  coordinates: {
    lat: number
    lng: number
  }
  phone: string
  email?: string
  services: string[]
  timings: {
    weekdays: string
    saturday: string
    sunday: string
  }
  ifsc?: string
  micr?: string
  branchCode?: string
  features: string[]
  status: 'active' | 'inactive' | 'temporarily-closed'
  accessibility: string[]
  parking: boolean
  wheelchairAccessible: boolean
  lastUpdated: string
}

export interface LocationFilters {
  type: 'all' | 'branch' | 'atm'
  city: string
  state: string
  services: string[]
  features: string[]
  search: string
}

// Seed data for branches
export const branchLocations: Location[] = [
  {
    id: 'BR001',
    type: 'branch',
    name: 'MNS Bank - Head Office',
    address: '123 Banking Street, Fort',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    coordinates: { lat: 18.9750, lng: 72.8258 },
    phone: '+91-22-12345678',
    email: 'headoffice@mnsbank.com',
    services: ['Savings Account', 'Current Account', 'Personal Loan', 'Home Loan', 'Credit Card', 'Demat Account', 'Locker Facility'],
    timings: {
      weekdays: '9:30 AM - 4:00 PM',
      saturday: '9:30 AM - 1:00 PM',
      sunday: 'Closed'
    },
    ifsc: 'MNSB0000001',
    micr: '400229001',
    branchCode: '001',
    features: ['24/7 ATM', 'Safe Deposit Lockers', 'Foreign Exchange', 'NRI Services', 'Wealth Management'],
    status: 'active',
    accessibility: ['Wheelchair Ramp', 'Braille Signage', 'Special Counter'],
    parking: true,
    wheelchairAccessible: true,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'BR002',
    type: 'branch',
    name: 'MNS Bank - Andheri Branch',
    address: '456 Linking Road, Andheri West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400053',
    coordinates: { lat: 19.1199, lng: 72.8466 },
    phone: '+91-22-23456789',
    email: 'andheri@mnsbank.com',
    services: ['Savings Account', 'Current Account', 'Personal Loan', 'Car Loan', 'Credit Card'],
    timings: {
      weekdays: '9:30 AM - 4:00 PM',
      saturday: '9:30 AM - 1:00 PM',
      sunday: 'Closed'
    },
    ifsc: 'MNSB0000002',
    micr: '400229002',
    branchCode: '002',
    features: ['24/7 ATM', 'Cash Deposit Machine', 'Cheque Deposit Machine'],
    status: 'active',
    accessibility: ['Wheelchair Ramp'],
    parking: true,
    wheelchairAccessible: true,
    lastUpdated: '2024-01-10'
  },
  {
    id: 'BR003',
    type: 'branch',
    name: 'MNS Bank - Delhi Main Branch',
    address: '789 Connaught Place, New Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    coordinates: { lat: 28.6304, lng: 77.2177 },
    phone: '+91-11-34567890',
    email: 'delhi@mnsbank.com',
    services: ['Savings Account', 'Current Account', 'Personal Loan', 'Home Loan', 'Business Loan', 'Credit Card'],
    timings: {
      weekdays: '9:30 AM - 4:00 PM',
      saturday: '9:30 AM - 1:00 PM',
      sunday: 'Closed'
    },
    ifsc: 'MNSB0000003',
    micr: '110042001',
    branchCode: '003',
    features: ['24/7 ATM', 'Safe Deposit Lockers', 'Foreign Exchange', 'NRI Services'],
    status: 'active',
    accessibility: ['Wheelchair Ramp', 'Braille Signage'],
    parking: true,
    wheelchairAccessible: true,
    lastUpdated: '2024-01-12'
  },
  {
    id: 'BR004',
    type: 'branch',
    name: 'MNS Bank - Bangalore Central',
    address: '321 MG Road, Brigade Road',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560001',
    coordinates: { lat: 12.9716, lng: 77.5946 },
    phone: '+91-80-45678901',
    email: 'bangalore@mnsbank.com',
    services: ['Savings Account', 'Current Account', 'Personal Loan', 'Home Loan', 'Credit Card', 'Demat Account'],
    timings: {
      weekdays: '9:30 AM - 4:00 PM',
      saturday: '9:30 AM - 1:00 PM',
      sunday: 'Closed'
    },
    ifsc: 'MNSB0000004',
    micr: '560029001',
    branchCode: '004',
    features: ['24/7 ATM', 'Safe Deposit Lockers', 'Foreign Exchange'],
    status: 'active',
    accessibility: ['Wheelchair Ramp', 'Braille Signage'],
    parking: true,
    wheelchairAccessible: true,
    lastUpdated: '2024-01-08'
  },
  {
    id: 'BR005',
    type: 'branch',
    name: 'MNS Bank - Chennai Branch',
    address: '654 Anna Salai, T Nagar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600017',
    coordinates: { lat: 13.0408, lng: 80.2474 },
    phone: '+91-44-56789012',
    email: 'chennai@mnsbank.com',
    services: ['Savings Account', 'Current Account', 'Personal Loan', 'Car Loan', 'Credit Card'],
    timings: {
      weekdays: '9:30 AM - 4:00 PM',
      saturday: '9:30 AM - 1:00 PM',
      sunday: 'Closed'
    },
    ifsc: 'MNSB0000005',
    micr: '600029001',
    branchCode: '005',
    features: ['24/7 ATM', 'Cash Deposit Machine'],
    status: 'active',
    accessibility: ['Wheelchair Ramp'],
    parking: true,
    wheelchairAccessible: true,
    lastUpdated: '2024-01-05'
  }
]

// Seed data for ATMs
export const atmLocations: Location[] = [
  {
    id: 'ATM001',
    type: 'atm',
    name: 'MNS Bank ATM - CST Station',
    address: 'Chhatrapati Shivaji Terminus, Platform 1',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    coordinates: { lat: 18.9402, lng: 72.8357 },
    phone: '+91-22-98765432',
    services: ['Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'Fund Transfer', 'Bill Payment'],
    timings: {
      weekdays: '24/7',
      saturday: '24/7',
      sunday: '24/7'
    },
    features: ['Cardless Withdrawal', 'UPI QR Code', 'Cash Deposit', 'Cheque Deposit'],
    status: 'active',
    accessibility: ['Wheelchair Accessible', 'Voice Guidance'],
    parking: false,
    wheelchairAccessible: true,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'ATM002',
    type: 'atm',
    name: 'MNS Bank ATM - Andheri Station',
    address: 'Andheri Railway Station, East Side',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400053',
    coordinates: { lat: 19.1187, lng: 72.8464 },
    phone: '+91-22-98765433',
    services: ['Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'Fund Transfer'],
    timings: {
      weekdays: '24/7',
      saturday: '24/7',
      sunday: '24/7'
    },
    features: ['Cardless Withdrawal', 'UPI QR Code', 'Cash Deposit'],
    status: 'active',
    accessibility: ['Wheelchair Accessible'],
    parking: true,
    wheelchairAccessible: true,
    lastUpdated: '2024-01-10'
  },
  {
    id: 'ATM003',
    type: 'atm',
    name: 'MNS Bank ATM - Delhi Airport',
    address: 'Indira Gandhi International Airport, Terminal 3',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110037',
    coordinates: { lat: 28.5665, lng: 77.1187 },
    phone: '+91-11-98765434',
    services: ['Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'Fund Transfer', 'Bill Payment', 'Foreign Exchange'],
    timings: {
      weekdays: '24/7',
      saturday: '24/7',
      sunday: '24/7'
    },
    features: ['Cardless Withdrawal', 'UPI QR Code', 'Cash Deposit', 'Multi-Currency'],
    status: 'active',
    accessibility: ['Wheelchair Accessible', 'Voice Guidance', 'Multi-Language'],
    parking: true,
    wheelchairAccessible: true,
    lastUpdated: '2024-01-12'
  },
  {
    id: 'ATM004',
    type: 'atm',
    name: 'MNS Bank ATM - Brigade Road',
    address: 'Brigade Road, Near MG Road',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560001',
    coordinates: { lat: 12.9720, lng: 77.5958 },
    phone: '+91-80-98765435',
    services: ['Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'Fund Transfer'],
    timings: {
      weekdays: '24/7',
      saturday: '24/7',
      sunday: '24/7'
    },
    features: ['Cardless Withdrawal', 'UPI QR Code', 'Cash Deposit'],
    status: 'active',
    accessibility: ['Wheelchair Accessible'],
    parking: true,
    wheelchairAccessible: true,
    lastUpdated: '2024-01-08'
  },
  {
    id: 'ATM005',
    type: 'atm',
    name: 'MNS Bank ATM - T Nagar',
    address: 'T Nagar, Near Pondy Bazaar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600017',
    coordinates: { lat: 13.0412, lng: 77.2468 },
    phone: '+91-44-98765436',
    services: ['Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'Fund Transfer'],
    timings: {
      weekdays: '24/7',
      saturday: '24/7',
      sunday: '24/7'
    },
    features: ['Cardless Withdrawal', 'UPI QR Code'],
    status: 'active',
    accessibility: ['Wheelchair Accessible'],
    parking: false,
    wheelchairAccessible: true,
    lastUpdated: '2024-01-05'
  }
]

// Combined locations
export const allLocations: Location[] = [...branchLocations, ...atmLocations]

// Location utility functions
export function getLocationsByType(type: 'branch' | 'atm' | 'all'): Location[] {
  if (type === 'all') return allLocations
  return allLocations.filter(location => location.type === type)
}

export function getLocationsByCity(city: string): Location[] {
  return allLocations.filter(location => 
    location.city.toLowerCase().includes(city.toLowerCase())
  )
}

export function getLocationsByState(state: string): Location[] {
  return allLocations.filter(location => 
    location.state.toLowerCase().includes(state.toLowerCase())
  )
}

export function searchLocations(query: string): Location[] {
  const searchTerm = query.toLowerCase()
  return allLocations.filter(location => 
    location.name.toLowerCase().includes(searchTerm) ||
    location.address.toLowerCase().includes(searchTerm) ||
    location.city.toLowerCase().includes(searchTerm) ||
    location.pincode.includes(searchTerm) ||
    location.ifsc?.toLowerCase().includes(searchTerm)
  )
}

export function filterLocations(locations: Location[], filters: Partial<LocationFilters>): Location[] {
  return locations.filter(location => {
    // Type filter
    if (filters.type && filters.type !== 'all') {
      if (location.type !== filters.type) return false
    }
    
    // City filter
    if (filters.city && filters.city !== '') {
      if (!location.city.toLowerCase().includes(filters.city.toLowerCase())) return false
    }
    
    // State filter
    if (filters.state && filters.state !== '') {
      if (!location.state.toLowerCase().includes(filters.state.toLowerCase())) return false
    }
    
    // Services filter
    if (filters.services && filters.services.length > 0) {
      const hasService = filters.services.some(service => 
        location.services.some(locService => 
          locService.toLowerCase().includes(service.toLowerCase())
        )
      )
      if (!hasService) return false
    }
    
    // Features filter
    if (filters.features && filters.features.length > 0) {
      const hasFeature = filters.features.some(feature => 
        location.features.some(locFeature => 
          locFeature.toLowerCase().includes(feature.toLowerCase())
        )
      )
      if (!hasFeature) return false
    }
    
    // Search filter
    if (filters.search && filters.search !== '') {
      const searchTerm = filters.search.toLowerCase()
      const matchesSearch = 
        location.name.toLowerCase().includes(searchTerm) ||
        location.address.toLowerCase().includes(searchTerm) ||
        location.city.toLowerCase().includes(searchTerm) ||
        location.pincode.includes(searchTerm) ||
        location.ifsc?.toLowerCase().includes(searchTerm)
      
      if (!matchesSearch) return false
    }
    
    return true
  })
}

export function getUniqueCities(): string[] {
  const cities = new Set(allLocations.map(location => location.city))
  return Array.from(cities).sort()
}

export function getUniqueStates(): string[] {
  const states = new Set(allLocations.map(location => location.state))
  return Array.from(states).sort()
}

export function getUniqueServices(): string[] {
  const services = new Set(allLocations.flatMap(location => location.services))
  return Array.from(services).sort()
}

export function getUniqueFeatures(): string[] {
  const features = new Set(allLocations.flatMap(location => location.features))
  return Array.from(features).sort()
}

export function getLocationById(id: string): Location | undefined {
  return allLocations.find(location => location.id === id)
}

export function getDirectionsUrl(from: string, to: Location): string {
  const destination = `${to.coordinates.lat},${to.coordinates.lng}`
  return `https://www.google.com/maps/dir/?api=1&origin=${from}&destination=${destination}`
}

export function getMapUrl(center: { lat: number; lng: number }, zoom: number = 12): string {
  return `https://maps.google.com/maps?q=${center.lat},${center.lng}&z=${zoom}`
}
