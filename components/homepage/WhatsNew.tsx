'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, TrendingUp, Star, ArrowRight } from 'lucide-react'

interface NewsItem {
  id: string
  title: string
  summary: string
  category: 'product' | 'service' | 'digital' | 'compliance' | 'offer'
  date: string
  featured?: boolean
  image?: string
  link?: string
}

interface WhatsNewProps {
  items?: NewsItem[]
  maxItems?: number
  className?: string
}

export function WhatsNew({ 
  items = [], 
  maxItems = 6, 
  className = '' 
}: WhatsNewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All Updates', color: 'bg-gray-500' },
    { id: 'product', label: 'Products', color: 'bg-blue-500' },
    { id: 'service', label: 'Services', color: 'bg-green-500' },
    { id: 'digital', label: 'Digital Banking', color: 'bg-purple-500' },
    { id: 'compliance', label: 'Compliance', color: 'bg-red-500' },
    { id: 'offer', label: 'Offers', color: 'bg-yellow-500' }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? items.slice(0, maxItems)
    : items
        .filter(item => item.category === selectedCategory)
        .slice(0, maxItems)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'product':
        return <Star className="w-4 h-4" />
      case 'service':
        return <TrendingUp className="w-4 h-4" />
      case 'digital':
        return <ArrowRight className="w-4 h-4" />
      case 'compliance':
        return <Calendar className="w-4 h-4" />
      default:
        return <Star className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    const categoryConfig = categories.find(cat => cat.id === category)
    return categoryConfig?.color || 'bg-gray-500'
  }
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">What's New</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open('/tools/service-charges', '_self')}
        >
          View All Updates
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
            <span className="flex items-center space-x-1">
              {getCategoryIcon(category.id)}
              <span>{category.label}</span>
            </span>
          </button>
        ))}
      </div>

      {/* News Items */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`border rounded-lg p-4 hover:shadow-md transition-all cursor-pointer ${
              item.featured ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => item.link && window.open(item.link, '_self')}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full text-white ${getCategoryColor(item.category)}`}>
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                  {item.featured && (
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                      FEATURED
                    </span>
                  )}
                  <span className="text-xs text-gray-500">
                    {item.date}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-3">
                  {item.summary}
                </p>

                {item.link && (
                  <div className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                )}
              </div>

              {item.image && (
                <div className="ml-4 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* No Items State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-400 mb-4">
            <Calendar className="w-12 h-12 mx-auto mb-2" />
          </div>
          <p className="text-gray-600">No updates found in this category</p>
          <Button
            variant="outline"
            onClick={() => setSelectedCategory('all')}
            className="mt-4"
          >
            Show All Updates
          </Button>
        </div>
      )}
    </div>
  </div>
  )
}

// Default what's new data
export const defaultWhatsNewItems: NewsItem[] = [
  {
    id: '1',
    title: 'New Personal Loan Rates',
    summary: 'We\'ve reduced our personal loan interest rates starting from 10.99% p.a. with quick approval process.',
    category: 'product',
    date: '2024-01-15',
    featured: true,
    link: '/personal-banking/personal-loan'
  },
  {
    id: '2',
    title: 'UPI AutoPay Feature Launched',
    summary: 'Set up automatic recurring payments through UPI for your bills and subscriptions. Never miss a payment again!',
    category: 'digital',
    date: '2024-01-12',
    link: '/digital-services/upi-qr'
  },
  {
    id: '3',
    title: 'Enhanced Mobile Banking App',
    summary: 'Experience our redesigned mobile banking app with improved UI, faster transactions, and enhanced security features.',
    category: 'service',
    date: '2024-01-10',
    link: '/digital-services/mobile-banking'
  },
  {
    id: '4',
    title: 'Updated Fair Practices Code',
    summary: 'Our updated Fair Practices Code is now available with new guidelines for transparent banking operations.',
    category: 'compliance',
    date: '2024-01-08',
    featured: true,
    link: '/compliance/policy-centre'
  },
  {
    id: '5',
    title: 'Home Loan Festival Offer',
    summary: 'Special processing fee waiver on home loans during this festive season. Limited time offer.',
    category: 'offer',
    date: '2024-01-05',
    link: '/personal-banking/home-loan'
  },
  {
    id: '6',
    title: 'New Branch Opening in Pune',
    summary: 'We\'re pleased to announce the opening of our new branch in Pune with extended banking hours.',
    category: 'service',
    date: '2024-01-03',
    link: '/tools/branch-locator'
  }
]
