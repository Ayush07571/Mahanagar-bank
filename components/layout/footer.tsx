'use client'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { Mail, Phone, MapPin } from 'lucide-react'
import { BANK_NAME, SOCIAL_LINKS, CONTACT_INFO, NAVIGATION } from '@/lib/constants'

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Bar Section could be here or separate component */}
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: About Us */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('about_us_title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-white transition-colors">
                  About MNS Bank
                </Link>
              </li>
              <li>
                <Link href="/about-us/board-of-directors" className="text-gray-400 hover:text-white transition-colors">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link href="/about-us/committees" className="text-gray-400 hover:text-white transition-colors">
                  Committees
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Personal Banking */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('personal_banking_title')}</h3>
            <ul className="space-y-2">
              {NAVIGATION.PERSONAL.items.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/emi-calculator" className="text-gray-400 hover:text-white transition-colors">
                  EMI Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Business Banking */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('business_banking_title')}</h3>
            <ul className="space-y-2">
              {NAVIGATION.BUSINESS.items.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Compliance & Legal */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('compliance_title')}</h3>
            <ul className="space-y-2">
              {NAVIGATION.COMPLIANCE.items.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Info & Social */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('connect_title')}</h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-sm">{CONTACT_INFO.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">{t('follow_us')}</h4>
              <div className="flex space-x-3">
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors capitalize"
                    aria-label={platform}
                  >
                    <span className="w-5 h-5 flex items-center justify-center text-xs font-bold">{platform[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {BANK_NAME}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/contact-us" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link href="/locate-us" className="text-gray-400 hover:text-white transition-colors">
                Locate Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
