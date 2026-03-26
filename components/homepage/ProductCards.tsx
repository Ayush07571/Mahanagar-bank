'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CreditCard, TrendingUp, Shield, Users, ArrowRight } from 'lucide-react'

interface ProductCard {
  id: string
  title: string
  description: string
  category: 'personal' | 'business' | 'digital' | 'loan' | 'investment'
  icon: React.ReactNode
  features: string[]
  cta?: {
    text: string
    link: string
  }
  popular?: boolean
  new?: boolean
}

interface ProductCardsProps {
  products?: ProductCard[]
  maxItems?: number
  className?: string
}

export function ProductCards({ 
  products = [], 
  maxItems = 8, 
  className = '' 
}: ProductCardsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All Products', color: 'bg-gray-500' },
    { id: 'personal', label: 'Personal Banking', color: 'bg-blue-500' },
    { id: 'business', label: 'Business Banking', color: 'bg-green-500' },
    { id: 'digital', label: 'Digital Services', color: 'bg-purple-500' },
    { id: 'loan', label: 'Loans', color: 'bg-orange-500' },
    { id: 'investment', label: 'Investments', color: 'bg-red-500' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products.slice(0, maxItems)
    : products
        .filter(product => product.category === selectedCategory)
        .slice(0, maxItems)

  const getCategoryColor = (category: string) => {
    const categoryConfig = categories.find(cat => cat.id === category)
    return categoryConfig?.color || 'bg-gray-500'
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Products & Services</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open('/personal-banking', '_self')}
        >
          View All Products
        </Button>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? `${category.color} text-white`
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`border rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer ${
              product.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => product.cta?.link && window.open(product.cta.link, '_self')}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${getCategoryColor(product.category)}`}>
                  {product.icon}
                </div>
                <div className="flex space-x-2">
                  {product.popular && (
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      POPULAR
                    </span>
                  )}
                  {product.new && (
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {product.title}
            </h4>
            
            <p className="text-gray-600 text-sm mb-4">
              {product.description}
            </p>

            {/* Features */}
            <div className="space-y-2 mb-4">
              {product.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  {feature}
                </div>
              ))}
              {product.features.length > 3 && (
                <div className="text-sm text-gray-500">
                  +{product.features.length - 3} more features
                </div>
              )}
            </div>

            {/* CTA */}
            {product.cta && (
              <Button
                className="w-full"
                onClick={() => window.open(product.cta?.link, '_self')}
              >
                {product.cta?.text}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* No Products State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <CreditCard className="w-16 h-16 mx-auto mb-2" />
          </div>
          <p className="text-gray-600">No products found in this category</p>
          <Button
            variant="outline"
            onClick={() => setSelectedCategory('all')}
            className="mt-4"
          >
            Show All Products
          </Button>
        </div>
      )}
    </div>
  )
}

// Default product cards data
export const defaultProductCards: ProductCard[] = [
  {
    id: '1',
    title: 'Savings Account',
    description: 'Open a savings account with competitive interest rates and zero balance requirements. Enjoy seamless digital banking access.',
    category: 'personal',
    icon: <Users className="w-6 h-6 text-white" />,
    features: [
      'Zero Balance Requirements',
      'Competitive Interest Rates',
      'Digital Banking Access',
      'Mobile Banking App'
    ],
    cta: {
      text: 'Open Account',
      link: '/personal-banking/savings-account'
    },
    popular: true
  },
  {
    id: '2',
    title: 'Personal Loan',
    description: 'Get instant personal loans with flexible repayment options. Quick approval process and competitive interest rates.',
    category: 'loan',
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    features: [
      'Quick Approval',
      'Flexible Tenure',
      'Competitive Rates',
      'Minimal Documentation'
    ],
    cta: {
      text: 'Apply Now',
      link: '/personal-banking/personal-loan'
    },
    new: true
  },
  {
    id: '3',
    title: 'Current Account',
    description: 'Business current account with overdraft facility and comprehensive banking services for your business needs.',
    category: 'business',
    icon: <CreditCard className="w-6 h-6 text-white" />,
    features: [
      'Overdraft Facility',
      'Business Banking Services',
      'Online Banking',
      'Dedicated Relationship Manager'
    ],
    cta: {
      text: 'Open Account',
      link: '/business-banking/current-account'
    }
  },
  {
    id: '4',
    title: 'Mobile Banking',
    description: 'Bank on the go with our secure mobile banking app. Transfer funds, pay bills, and manage accounts.',
    category: 'digital',
    icon: <Shield className="w-6 h-6 text-white" />,
    features: [
      'Secure Transactions',
      'Bill Payments',
      'Fund Transfers',
      'Account Management'
    ],
    cta: {
      text: 'Download App',
      link: '/digital-services/mobile-banking'
    },
    popular: true
  },
  {
    id: '5',
    title: 'Home Loan',
    description: 'Dream home, dream loan. Get home loans with attractive interest rates and flexible repayment options.',
    category: 'loan',
    icon: <Users className="w-6 h-6 text-white" />,
    features: [
      'Attractive Interest Rates',
      'Flexible Repayment',
      'Quick Processing',
      'Tax Benefits'
    ],
    cta: {
      text: 'Apply Now',
      link: '/personal-banking/home-loan'
    }
  },
  {
    id: '6',
    title: 'Net Banking',
    description: 'Comprehensive internet banking platform for all your banking needs with advanced security features.',
    category: 'digital',
    icon: <Shield className="w-6 h-6 text-white" />,
    features: [
      '24/7 Access',
      'Advanced Security',
      'Bill Payments',
      'Fund Transfers'
    ],
    cta: {
      text: 'Login Now',
      link: '/digital-services/net-banking'
    }
  },
  {
    id: '7',
    title: 'Business Loan',
    description: 'Grow your business with our tailored loan solutions. Competitive rates and flexible repayment options.',
    category: 'business',
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    features: [
      'Tailored Solutions',
      'Competitive Rates',
      'Quick Disbursement',
      'Flexible Repayment'
    ],
    cta: {
      text: 'Apply Now',
      link: '/business-banking'
    },
    new: true
  },
  {
    id: '8',
    title: 'UPI Services',
    description: 'Fast, secure, and instant payments using UPI. Scan QR codes or pay using mobile numbers.',
    category: 'digital',
    icon: <ArrowRight className="w-6 h-6 text-white" />,
    features: [
      'Instant Payments',
      'QR Code Support',
      'Mobile to Mobile',
      'Bill Splitting'
    ],
    cta: {
      text: 'Learn More',
      link: '/digital-services/upi-qr'
    },
    popular: true
  }
]
