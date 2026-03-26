'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

export default function PolicyCentre() {
  const t = useTranslations('compliance')
  const commonT = useTranslations('common')

  const policies = [
    {
      category: 'Banking Policies',
      documents: [
        { name: 'Fair Practice Code', type: 'PDF', size: '2.3 MB', date: '2024-01-15' },
        { name: 'Interest Rates Policy', type: 'PDF', size: '1.8 MB', date: '2024-01-10' },
        { name: 'Service Charges', type: 'PDF', size: '3.1 MB', date: '2024-01-08' },
        { name: 'KYC Policy', type: 'PDF', size: '2.7 MB', date: '2024-01-05' },
      ]
    },
    {
      category: 'Customer Protection',
      documents: [
        { name: 'Customer Rights Policy', type: 'PDF', size: '1.5 MB', date: '2024-01-12' },
        { name: 'Grievance Redressal Policy', type: 'PDF', size: '2.1 MB', date: '2024-01-10' },
        { name: 'Data Protection Policy', type: 'PDF', size: '3.4 MB', date: '2024-01-08' },
        { name: 'Privacy Policy', type: 'PDF', size: '1.9 MB', date: '2024-01-05' },
      ]
    }
  ]

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('policy_centre')}</h1>
          <p className="text-xl text-blue-100">
            Access all our banking policies, guidelines, and regulatory documents
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {policies.map((category) => (
            <div key={category.category} className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Document Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {commonT('status', { defaultValue: 'Type' })}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Size
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {commonT('date')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {category.documents.map((doc, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center mr-3">
                              <span className="text-red-600 text-sm">📄</span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                            {doc.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {doc.size}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {doc.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                              {commonT('download')}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
