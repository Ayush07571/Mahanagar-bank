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
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MNS</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Bank</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/personal-banking" className="text-gray-700 hover:text-blue-600 font-medium">
                {t('personal_banking')}
              </Link>
              <Link href="/business-banking" className="text-gray-700 hover:text-blue-600 font-medium">
                {t('business_banking')}
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-blue-600 font-medium">
                {t('about_us')}
              </Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-blue-600 font-medium">
                {t('contact_us')}
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={toggleLanguage} className="flex items-center space-x-1">
                <Globe className="w-4 h-4" />
                <span>{locale === 'en' ? 'EN' : 'HI'}</span>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                {t('net_banking_button')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <Link href="/personal-banking" className="text-gray-700 hover:text-blue-600 font-medium">
                  {t('personal_banking')}
                </Link>
                <Link href="/business-banking" className="text-gray-700 hover:text-blue-600 font-medium">
                  {t('business_banking')}
                </Link>
                <Link href="/about-us" className="text-gray-700 hover:text-blue-600 font-medium">
                  {t('about_us')}
                </Link>
                <Link href="/contact-us" className="text-gray-700 hover:text-blue-600 font-medium">
                  {t('contact_us')}
                </Link>
                <div className="flex items-center space-x-4 pt-4">
                  <Button variant="outline" size="sm" onClick={toggleLanguage} className="flex items-center space-x-1">
                    <Globe className="w-4 h-4" />
                    <span>{locale === 'en' ? 'EN' : 'HI'}</span>
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    {t('net_banking_button')}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
