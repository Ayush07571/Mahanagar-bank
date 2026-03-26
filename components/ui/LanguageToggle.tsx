'use client'

import React, { useState } from 'react'
import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Language, DEFAULT_LANGUAGE, getLanguageLabel, getLanguageFullName, toggleLanguage } from '@/lib/i18n'

interface LanguageToggleProps {
  className?: string
}

export function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE)

  React.useEffect(() => {
    // Load saved language preference
    const saved = localStorage.getItem('preferred-language') as Language
    if (saved && (saved === 'en' || saved === 'hi')) {
      setCurrentLanguage(saved)
      document.documentElement.lang = saved
    }
  }, [])

  const handleToggleLanguage = () => {
    const newLang = toggleLanguage(currentLanguage)
    setCurrentLanguage(newLang)
    
    // Store preference
    localStorage.setItem('preferred-language', newLang)
    
    // Update HTML lang attribute
    document.documentElement.lang = newLang
    
    // In a real app, this would trigger a page reload or context update
    // For now, we'll just reload the page with the new language
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleToggleLanguage}
        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
        aria-label={`Switch language. Current: ${getLanguageFullName(currentLanguage)}`}
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium text-sm">
          {getLanguageLabel(currentLanguage)}
        </span>
      </Button>
    </div>
  )
}

// Hook to get current language (for use in other components)
export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE)

  React.useEffect(() => {
    // Load saved language preference
    const saved = localStorage.getItem('preferred-language') as Language
    if (saved && (saved === 'en' || saved === 'hi')) {
      setCurrentLanguage(saved)
      document.documentElement.lang = saved
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
    localStorage.setItem('preferred-language', lang)
    document.documentElement.lang = lang
  }

  return {
    currentLanguage,
    changeLanguage,
    isEnglish: currentLanguage === 'en',
    isHindi: currentLanguage === 'hi',
  }
}
