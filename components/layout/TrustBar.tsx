'use client'

import { useTranslations } from 'next-intl'
import { Shield, Award, Clock, CheckCircle } from 'lucide-react'

export function TrustBar() {
  const t = useTranslations('common')

  return (
    <div className="bg-gray-900 text-white py-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="font-medium">DICGC Insured</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-blue-400" />
            <span className="font-medium">RBI Member</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-purple-400" />
            <span className="font-medium">NPCI Certified</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="font-medium">Serving Since 1976</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="font-medium">ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </div>
  )
}
