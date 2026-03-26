'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import { 
  Phone, 
  MapPin, 
  Calculator, 
  FileText, 
  CreditCard, 
  Users, 
  Shield,
  TrendingUp,
  ArrowRight
} from 'lucide-react'

interface QuickLink {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  link: string
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow'
  badge?: string
}

export function QuickLinks({ className = '' }: { className?: string }) {
  const t = useTranslations('navigation')
  const commonT = useTranslations('common')

  const links: QuickLink[] = [
    {
      id: '1',
      title: 'Branch Locator',
      description: 'Find our nearest branches and ATMs',
      icon: <MapPin className="w-6 h-6" />,
      link: '/locate-us',
      color: 'blue'
    },
    {
      id: '2',
      title: 'Customer Support',
      description: '24/7 helpline and email support',
      icon: <Phone className="w-6 h-6" />,
      link: '/contact-us',
      color: 'green',
      badge: '24/7'
    },
    {
      id: '3',
      title: 'Apply for Loan',
      description: 'Quick loan application process',
      icon: <FileText className="w-6 h-6" />,
      link: '/personal-loan',
      color: 'purple'
    },
    {
      id: '4',
      title: 'EMI Calculator',
      description: 'Calculate your loan EMIs',
      icon: <Calculator className="w-6 h-6" />,
      link: '/emi-calculator',
      color: 'orange'
    },
    {
      id: '5',
      title: 'Net Banking',
      description: 'Secure online banking platform',
      icon: <Shield className="w-6 h-6" />,
      link: '/digital-services/net-banking',
      color: 'blue'
    },
    {
      id: '6',
      title: 'Mobile Banking',
      description: 'Bank on your mobile device',
      icon: <CreditCard className="w-6 h-6" />,
      link: '/digital-services/mobile-banking',
      color: 'green'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100'
      case 'green': return 'bg-green-50 text-green-700 border-green-100 hover:bg-green-100'
      case 'purple': return 'bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100'
      case 'orange': return 'bg-orange-50 text-orange-700 border-orange-100 hover:bg-orange-100'
      default: return 'bg-gray-50 text-gray-700 border-gray-100 hover:bg-gray-100'
    }
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">{t('tools')}</h3>
        <Button variant="outline" size="sm" asChild>
          <Link href="/digital-services">{commonT('learn_more')}</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.link}
            className={`p-4 rounded-lg border transition-all hover:shadow-md text-left ${getColorClasses(link.color)}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                {link.icon}
              </div>
              {link.badge && (
                <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                  {link.badge}
                </span>
              )}
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">{link.title}</h4>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{link.description}</p>
            <div className="flex justify-end">
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
