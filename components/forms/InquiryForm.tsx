'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { validateInquiryForm } from '@/lib/validations'

interface InquiryFormProps {
  type: 'inquiry' | 'contact' | 'feedback' | 'complaint'
  product?: string
  className?: string
}

export function InquiryForm({ type, product, className = '' }: InquiryFormProps) {
  const t = useTranslations('forms.inquiry')
  const commonT = useTranslations('common')
  const validationT = useTranslations('forms')
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    branch: '',
    product: product || '',
    productId: '',
    urgency: 'normal'
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const rawErrors = validateInquiryForm(formData, type)
    const localizedErrors: Record<string, string> = {}
    
    // Map raw error messages to localized strings
    if (rawErrors.name) localizedErrors.name = validationT('required_field')
    if (rawErrors.email) localizedErrors.email = validationT('invalid_email')
    if (rawErrors.phone) localizedErrors.phone = validationT('invalid_phone')
    if (rawErrors.subject) localizedErrors.subject = validationT('required_field')
    if (rawErrors.message) localizedErrors.message = validationT('min_length', { min: 10 })
    if (rawErrors.branch) localizedErrors.branch = validationT('required_field')

    setErrors(localizedErrors)
    return Object.keys(localizedErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const refNumber = `REF${Date.now().toString().slice(-6)}`
      setReferenceNumber(refNumber)
      
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        branch: '',
        product: product || '',
        productId: '',
        urgency: 'normal'
      })
    } catch (error) {
      setErrors({ submit: t('error_message') })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✅</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{commonT('success')}!</h3>
        <p className="text-gray-600 mb-4">{t('success_message', { ref: referenceNumber })}</p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
        >
          {commonT('back')}
        </Button>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-8 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('title')}</h3>
      <p className="text-gray-600 mb-6">{t('message_placeholder')}</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              {t('name')} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={t('name_placeholder')}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {t('email')} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={t('email_placeholder')}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              {t('phone')} *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={t('phone_placeholder')}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">
              {t('branch')} *
            </label>
            <select
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.branch ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">{t('branch_placeholder')}</option>
              <option value="main">Main Branch (H.O.)</option>
              <option value="mp-nagar">M.P. Nagar Branch</option>
              <option value="indrapuri">Indrapuri Branch</option>
            </select>
            {errors.branch && (
              <p className="text-red-500 text-sm mt-1">{errors.branch}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('message_placeholder')}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
        >
          {isSubmitting ? commonT('processing') : t('submit_button')}
        </Button>
      </form>
    </div>
  )
}
