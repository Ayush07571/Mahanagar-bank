export const BANK_NAME = 'Mahanagar Nagrik Sahakari Bank Ltd.'
export const BANK_SHORT_NAME = 'MNS Bank'

// Branch locations
export const BRANCHES = [
  {
    id: '1',
    name: 'Head Office - Bairagarhi',
    address: 'Bairagarhi, Bhopal, Madhya Pradesh - 462001',
    phone: '0755-1234567',
    email: 'ho@mnsbank.com',
    businessHours: '10:00 AM - 4:00 PM (Mon-Sat)',
    coordinates: '23.2599,77.4126',
    ifscCode: 'MNSB0000001',
    branchType: 'head_office',
  },
  {
    id: '2',
    name: 'TT Nagar Branch',
    address: 'TT Nagar, Bhopal, Madhya Pradesh - 462016',
    phone: '0755-2345678',
    email: 'ttnagar@mnsbank.com',
    businessHours: '10:00 AM - 4:00 PM (Mon-Sat)',
    coordinates: '23.2419,77.3976',
    ifscCode: 'MNSB0000002',
    branchType: 'branch',
  },
  {
    id: '3',
    name: 'Karond Branch',
    address: 'Karond, Bhopal, Madhya Pradesh - 462022',
    phone: '0755-3456789',
    email: 'karond@mnsbank.com',
    businessHours: '10:00 AM - 4:00 PM (Mon-Sat)',
    coordinates: '23.2846,77.3536',
    ifscCode: 'MNSB0000003',
    branchType: 'branch',
  },
] as const

// ATM locations
export const ATMS = [
  {
    id: '1',
    location: 'Bairagarhi ATM',
    address: 'Bairagarhi, Bhopal, Madhya Pradesh - 462001',
    coordinates: '23.2599,77.4126',
    available24x7: true,
    servicesOffered: ['Cash Withdrawal', 'Balance Inquiry', 'Mini Statement'],
  },
  {
    id: '2',
    location: 'TT Nagar ATM',
    address: 'TT Nagar, Bhopal, Madhya Pradesh - 462016',
    coordinates: '23.2419,77.3976',
    available24x7: true,
    servicesOffered: ['Cash Withdrawal', 'Balance Inquiry', 'Mini Statement'],
  },
  {
    id: '3',
    location: 'Karond ATM',
    address: 'Karond, Bhopal, Madhya Pradesh - 462022',
    coordinates: '23.2846,77.3536',
    available24x7: true,
    servicesOffered: ['Cash Withdrawal', 'Balance Inquiry', 'Mini Statement'],
  },
] as const

// Product categories
export const PRODUCT_CATEGORIES = {
  PERSONAL: 'personal',
  BUSINESS: 'business',
} as const

// Product types
export const PRODUCT_TYPES = {
  LOAN: 'loan',
  DEPOSIT: 'deposit',
  ACCOUNT: 'account',
  SERVICE: 'service',
} as const

// Personal loan products
export const PERSONAL_LOANS = [
  'gold-loan',
  'car-loan',
  'consumer-loan',
  'personal-loan',
  'festival-loan',
  'education-loan',
  'home-loan',
  'house-construction-loan',
  'loan-against-fd',
  'loan-against-nsc',
  'loan-against-property',
  'mortgage-overdraft',
] as const

// Business loan products
export const BUSINESS_LOANS = [
  'working-capital-loan',
  'transport-loan',
  'professional-loan',
  'micro-finance',
  'self-employed-loan',
  'overdraft-facility',
] as const

// Digital services
export const DIGITAL_SERVICES = [
  'net-banking',
  'mobile-banking',
  'atm',
  'debit-cards',
  'upi-qr',
  'imps',
  'bbps',
  'sms-banking',
  'pan',
  'locker',
  'neft-rtgs',
  'pm-jeevan-yojana',
  'pm-suraksha-yojana',
] as const

// Compliance pages
export const COMPLIANCE_PAGES = [
  'deaf-unclaimed-deposits',
  'privacy-policy',
  'grievance-redressal',
  'policy-centre',
  'kyc-ckyc',
  'cyber-awareness',
  'positive-pay',
] as const

// External service URLs
export const EXTERNAL_URLS = {
  netBanking: '/digital-services/net-banking', // Point to internal page
  mobileBanking: '/digital-services/mobile-banking',
  internetBanking: '/digital-services/net-banking',
} as const

// Navigation structure
export const NAVIGATION = {
  PERSONAL: {
    title: 'Personal Banking',
    items: [
      { label: 'Savings Account', href: '/savings-account' },
      { label: 'Home Loan', href: '/home-loan' },
      { label: 'Personal Loan', href: '/personal-loan' },
      { label: 'Deposits', href: '/deposits' },
      { label: 'Gold Loan', href: '/gold-loan' },
    ],
  },
  BUSINESS: {
    title: 'Business Banking',
    items: [
      { label: 'Current Account', href: '/current-account' },
      { label: 'Business Loans', href: '/working-capital-loan' },
      { label: 'Micro Finance', href: '/micro-finance' },
      { label: 'Services', href: '/digital-services' },
    ],
  },
  COMPLIANCE: {
    title: 'Compliance & Legal',
    items: [
      { label: 'DEAF Search', href: '/compliance/deaf-unclaimed-deposits' },
      { label: 'Grievance Redressal', href: '/grievance-redressal' },
      { label: 'Privacy Policy', href: '/compliance/privacy-policy' },
      { label: 'Policy Centre', href: '/compliance/policy-centre' },
    ]
  }
} as const

// Languages
export const LANGUAGES = {
  EN: 'en',
  HI: 'hi',
} as const

// Contact information
export const CONTACT_INFO = {
  phone: '1800-123-4567',
  email: 'info@mnsbank.com',
  address: 'Bairagarhi, Bhopal, Madhya Pradesh - 462001',
  tollFree: '14448', // RBI Ombudsman
} as const

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/mnsbank',
  twitter: 'https://twitter.com/mnsbank',
  instagram: 'https://instagram.com/mnsbank',
  linkedin: 'https://linkedin.com/company/mnsbank',
  youtube: 'https://youtube.com/mnsbank',
} as const
