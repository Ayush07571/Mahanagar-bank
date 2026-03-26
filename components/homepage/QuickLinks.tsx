'use client'

import { Button } from '@/components/ui/button'
import { 
  Phone, 
  Mail, 
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

interface QuickLinksProps {
  links?: QuickLink[]
  columns?: number
  className?: string
}

export function QuickLinks({ 
  links = [], 
  columns = 3, 
  className = '' 
}: QuickLinksProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200'
      case 'green':
        return 'bg-green-100 text-green-700 hover:bg-green-200 border-green-200'
      case 'purple':
        return 'bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200'
      case 'orange':
        return 'bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-200'
      case 'red':
        return 'bg-red-100 text-red-700 hover:bg-red-200 border-red-200'
      case 'yellow':
        return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200'
    }
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Quick Links</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open('/tools/service-charges', '_self')}
        >
          All Services
        </Button>
      </div>

      {/* Quick Links Grid */}
      <div className={`grid gap-4 ${
        columns === 2 ? 'grid-cols-1 md:grid-cols-2' :
        columns === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => window.open(link.link, '_self')}
            className={`p-4 rounded-lg border transition-all hover:shadow-md text-left ${getColorClasses(link.color)}`}
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3">
              {link.icon}
            </div>

            {/* Content */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">{link.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{link.description}</p>
            </div>

            {/* Badge */}
            {link.badge && (
              <div className="flex justify-center mb-3">
                <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                  {link.badge}
                </span>
              </div>
            )}

            {/* Arrow */}
            <div className="flex justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          </button>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-6 pt-6 border-t border-gray-200">
        <p className="text-gray-600 mb-4">Need help finding something specific?</p>
        <Button
          onClick={() => window.open('/contact-us', '_self')}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Contact Support
        </Button>
      </div>
    </div>
  )
}

// Default quick links data
export const defaultQuickLinks: QuickLink[] = [
  {
    id: '1',
    title: 'Branch Locator',
    description: 'Find our nearest branches and ATMs',
    icon: <MapPin className="w-6 h-6" />,
    link: '/tools/locate-us',
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
    link: '/personal-banking/personal-loan',
    color: 'purple'
  },
  {
    id: '4',
    title: 'EMI Calculator',
    description: 'Calculate your loan EMIs',
    icon: <Calculator className="w-6 h-6" />,
    link: '/tools/emi-calculator',
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
  },
  {
    id: '7',
    title: 'Account Opening',
    description: 'Open new savings or current account',
    icon: <Users className="w-6 h-6" />,
    link: '/personal-banking/savings-account',
    color: 'purple'
  },
  {
    id: '8',
    title: 'Service Charges',
    description: 'View our fee structure',
    icon: <FileText className="w-6 h-6" />,
    link: '/tools/service-charges',
    color: 'yellow'
  },
  {
    id: '9',
    title: 'Interest Rates',
    description: 'Current interest rates',
    icon: <TrendingUp className="w-6 h-6" />,
    link: '/tools/interest-rates',
    color: 'red'
  }
]
