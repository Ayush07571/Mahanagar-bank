'use client'

import { useState } from 'react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { ChevronDown } from 'lucide-react'
import { NAVIGATION } from '@/lib/constants'

interface NavigationProps {
  className?: string
}

export function Navigation({ className = '' }: NavigationProps) {
  const t = useTranslations('navigation')
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal')
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set())

  const toggleDropdown = (label: string) => {
    const newOpenDropdowns = new Set(openDropdowns)
    if (newOpenDropdowns.has(label)) {
      newOpenDropdowns.delete(label)
    } else {
      newOpenDropdowns.add(label)
    }
    setOpenDropdowns(newOpenDropdowns)
  }

  const currentNav = activeTab === 'personal' ? NAVIGATION.PERSONAL : NAVIGATION.BUSINESS

  return (
    <nav className={`bg-white border-b border-gray-200 ${className}`}>
      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('personal')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === 'personal'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {t('personal_banking')}
          </button>
          <button
            onClick={() => setActiveTab('business')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === 'business'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {t('business_banking')}
          </button>
        </div>
      </div>

      {/* Sub-Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1 py-2 overflow-x-auto">
          {currentNav.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
