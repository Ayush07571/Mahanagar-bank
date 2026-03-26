'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { EscalationMatrix } from '@/components/compliance/EscalationMatrix'

export default function GrievanceRedressal() {
  const t = useTranslations('compliance.grievance')
  const commonT = useTranslations('common')

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-red-100">
            {t('description')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <EscalationMatrix />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('submit_grievance')}</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {commonT('to', { defaultValue: 'Full Name' })}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="account" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('reference_number')}
                    </label>
                    <input
                      type="text"
                      id="account"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  {t('submit_grievance')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
