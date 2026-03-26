// Database Types
export interface Inquiry {
  id: string
  customerName: string
  mobileNumber: string
  email?: string
  productType: string
  preferredBranch: string
  message?: string
  referenceNumber: string
  status: string
  timestamp: Date
}

export interface Branch {
  id: string
  name: string
  address: string
  phone: string
  email?: string
  businessHours: string
  coordinates?: string
  ifscCode: string
  branchType: string
  isActive: boolean
}

export interface ATM {
  id: string
  location: string
  address: string
  coordinates?: string
  available24x7: boolean
  servicesOffered?: string
  isActive: boolean
}

export interface Product {
  id: string
  name: string
  category: string
  type: string
  features: Record<string, unknown>
  eligibility: Record<string, unknown>
  documents: Record<string, unknown>
  rates?: Record<string, unknown>
  charges?: Record<string, unknown>
  kfsData?: Record<string, unknown>
  relatedProducts: string[]
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface DEAFRecord {
  id: string
  customerId: string
  glCode: string
  accountNumber: string
  deafAccountNumber: string
  customerName: string
  address: string
  state: string
  district: string
  transactionDate: Date
  amount: number
  lastUpdated: Date
}

export interface Grievance {
  id: string
  customerDetails: Record<string, unknown>
  complaintType: string
  description: string
  escalationLevel: string
  status: string
  resolutionDetails?: Record<string, unknown>
  createdAt: Date
  updatedAt: Date
}

export interface Content {
  id: string
  type: string
  title: string
  body: string
  language: string
  lastUpdated: Date
  updatedBy: string
  published: boolean
}

export interface Rate {
  id: string
  productType: string
  tenure: string
  rate: number
  differentialCategory?: string
  effectiveDate: Date
  isActive: boolean
}

// Form Types
export interface InquiryFormData {
  customerName: string
  mobileNumber: string
  email?: string
  productType: string
  preferredBranch: string
  message?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface FeedbackFormData {
  name: string
  email: string
  phone: string
  category: string
  description: string
}

export interface EMICalculatorFormData {
  loanAmount: number
  interestRate: number
  tenure: number
}

// Component Props Types
export interface NavigationItem {
  label: string
  href: string
}

export interface NavigationSection {
  title: string
  items: NavigationItem[]
}

export interface ProductCardProps {
  product: Product
  showKFS?: boolean
  showInquiryForm?: boolean
}

export interface EMICalculatorResult {
  emi: number
  totalInterest: number
  totalAmount: number
}

export interface AmortizationScheduleItem {
  year: number
  principalPaid: number
  interestPaid: number
  totalPaid: number
  outstandingBalance: number
}

// API Response Types
export interface APIResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface InquiryResponse extends APIResponse<Inquiry> {
  referenceNumber?: string
}

// CMS Types
export interface CMSContent {
  id: string
  type: 'news' | 'policy' | 'rate' | 'announcement'
  title: string
  body: string
  language: 'en' | 'hi'
  lastUpdated: Date
  updatedBy: string
  published: boolean
}

// Map Types
export interface MapLocation {
  id: string
  name: string
  address: string
  coordinates?: {
    lat: number
    lng: number
  }
  phone?: string
  email?: string
  businessHours?: string
  type: 'branch' | 'atm'
}

// Language Types
export type Language = 'en' | 'hi'
export type TranslationKey = string

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>
