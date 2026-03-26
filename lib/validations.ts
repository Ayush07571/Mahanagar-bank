import { z } from 'zod'

// Inquiry Form Validation
export const inquirySchema = z.object({
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  mobileNumber: z.string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  productType: z.string().min(1, 'Please select a product'),
  preferredBranch: z.string().min(1, 'Please select a branch'),
  message: z.string().max(250, 'Message must be less than 250 characters').optional().or(z.literal('')),
})

// Contact Form Validation
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  subject: z.string().min(1, 'Please enter a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// Feedback Form Validation
export const feedbackSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  category: z.string().min(1, 'Please select a category'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
})

// EMI Calculator Validation
export const emiCalculatorSchema = z.object({
  loanAmount: z.number()
    .min(10000, 'Loan amount must be at least ₹10,000')
    .max(5000000, 'Loan amount must not exceed ₹50,00,000'),
  interestRate: z.number()
    .min(6, 'Interest rate must be at least 6%')
    .max(24, 'Interest rate must not exceed 24%'),
  tenure: z.number()
    .min(1, 'Tenure must be at least 1 year')
    .max(30, 'Tenure must not exceed 30 years'),
})

// Form validation functions
export function validateInquiryForm(formData: Record<string, string>, type: 'inquiry' | 'contact' | 'feedback' | 'complaint'): Record<string, string> {
  const errors: Record<string, string> = {}

  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  // Phone validation
  const phoneRegex = /^[6-9]\d{9}$/
  if (!formData.phone || !phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
    errors.phone = 'Please enter a valid 10-digit mobile number'
  }

  // Subject validation
  if (!formData.subject || formData.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters'
  }

  // Message validation
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  // Type-specific validations
  if (type === 'feedback' && !formData.category) {
    errors.category = 'Please select a category'
  }

  return errors
}

export type InquiryFormData = z.infer<typeof inquirySchema>
export type ContactFormData = z.infer<typeof contactSchema>
export type FeedbackFormData = z.infer<typeof feedbackSchema>
export type EMICalculatorFormData = z.infer<typeof emiCalculatorSchema>
