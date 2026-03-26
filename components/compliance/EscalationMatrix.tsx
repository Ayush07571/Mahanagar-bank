'use client'

import { useTranslations } from 'next-intl'

interface EscalationMatrixProps {
  className?: string
}

export function EscalationMatrix({ className = '' }: EscalationMatrixProps) {
  const t = useTranslations('compliance.grievance')

  const escalationLevels = [
    {
      level: 1,
      title: t('levels.level1'),
      description: 'First point of contact for all grievances and complaints',
      contactPerson: 'Branch Manager',
      email: 'branch-manager@mnsbank.com',
      phone: '0755-1234567',
      resolutionTime: '7 working days',
      color: 'border-green-500 bg-green-50'
    },
    {
      level: 2,
      title: t('levels.level2'),
      description: 'For unresolved grievances at branch level or serious complaints',
      contactPerson: 'Chief Nodal Officer',
      email: 'nodal-officer@mnsbank.com',
      phone: '0755-2345678',
      resolutionTime: '14 working days',
      color: 'border-orange-500 bg-orange-50'
    },
    {
      level: 3,
      title: t('levels.level3'),
      description: 'Final escalation for unresolved grievances or regulatory issues',
      contactPerson: 'RBI Banking Ombudsman',
      email: 'ombudsman@rbi.org.in',
      phone: '1800-425-0018',
      resolutionTime: '30 working days',
      color: 'border-red-500 bg-red-50'
    }
  ]

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('escalation_matrix')}</h2>
        <p className="text-gray-600">
          Follow the escalation process below for grievance redressal
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {escalationLevels.map((level) => (
          <div
            key={level.level}
            className={`border-l-4 ${level.color} rounded-lg p-6 hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-current mr-3">
                <span className="font-bold text-lg">{level.level}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{level.title}</h3>
            </div>
            
            <p className="text-gray-600 mb-4">{level.description}</p>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Contact Person:</span>
                <span className="text-gray-900">{level.contactPerson}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Email:</span>
                <a href={`mailto:${level.email}`} className="text-blue-600 hover:text-blue-800">
                  {level.email}
                </a>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Phone:</span>
                <a href={`tel:${level.phone}`} className="text-blue-600 hover:text-blue-800">
                  {level.phone}
                </a>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">{t('tat')}:</span>
                <span className="text-gray-900">{level.resolutionTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
