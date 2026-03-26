'use client'

import { useState } from 'react'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Menu, X, Globe } from 'lucide-react'
import { NAVIGATION } from '@/lib/constants'
import { TrustBar } from '@/components/layout/TrustBar'

export function Header() {
  const t = useTranslations('header')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'hi' : 'en'
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <>
      <TrustBar />
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MNS</span>
                </div>
                <span className="text-xl font-bold text-gray-900 hidden sm:block">
                  MNS Bank
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <Link
                  href="/personal-banking"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {t('personal_banking', { defaultValue: 'Personal Banking' })}
                </Link>
                <Link
                  href="/business-banking"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {t('business_banking', { defaultValue: 'Business Banking' })}
                </Link>
              </div>
            </nav>

            {/* Right side items */}
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium uppercase">
                  {locale}
                </span>
              </Button>

              {/* Net Banking CTA */}
              <Button
                asChild
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium"
              >
                <Link href="/digital-services/net-banking">
                  {t('net_banking_button', { defaultValue: 'Net Banking' })}
                </Link>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="lg:hidden text-gray-600 hover:text-gray-900"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/personal-banking"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('personal_banking', { defaultValue: 'Personal Banking' })}
                </Link>
                <Link
                  href="/business-banking"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('business_banking', { defaultValue: 'Business Banking' })}
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
