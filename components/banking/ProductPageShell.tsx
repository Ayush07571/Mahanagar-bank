import React from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Tabs } from '@/components/ui/Tabs'
import { KFSPanel } from '@/components/banking/KFSPanel'
import { RelatedProducts } from '@/components/banking/RelatedProducts'

interface ProductPageShellProps {
  title: string
  subtitle: string
  description: string
  category: 'personal' | 'business'
  productType: 'loan' | 'deposit' | 'account'
  tabs: {
    overview: React.ReactNode
    features: React.ReactNode
    eligibility: React.ReactNode
    documents: React.ReactNode
    apply?: React.ReactNode
    inquiry?: React.ReactNode
  }
  kfsData?: {
    indicativeRate: string
    processingFee: string
    repaymentTenure: string
    monthlyEmi: string
    totalCost: string
    prepaymentCharges: string
  }
  relatedProducts?: Array<{
    name: string
    href: string
    category: string
  }>
  className?: string
}

export function ProductPageShell({
  title,
  subtitle,
  description,
  category,
  productType,
  tabs,
  kfsData,
  relatedProducts,
  className = ''
}: ProductPageShellProps) {
  const t = useTranslations('products')
  const commonT = useTranslations('common')
  const navT = useTranslations('navigation')

  const categoryColors = {
    personal: 'from-blue-900 to-blue-700',
    business: 'from-green-900 to-green-700',
  }

  const productTypeIcons = {
    loan: '💰',
    deposit: '🏦',
    account: '💳'
  }

  const defaultTabs = [
    { id: 'overview', label: t('overview'), content: tabs.overview },
    { id: 'features', label: t('features'), content: tabs.features },
    { id: 'eligibility', label: t('eligibility'), content: tabs.eligibility },
    { id: 'documents', label: t('documents'), content: tabs.documents },
  ]

  if (tabs.apply) {
    defaultTabs.push({ id: 'apply', label: t('apply'), content: tabs.apply })
  }

  if (tabs.inquiry) {
    defaultTabs.push({ id: 'inquiry', label: t('enquire'), content: tabs.inquiry })
  }

  return (
    <div className={`min-h-full bg-gray-50 ${className}`}>
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${categoryColors[category]} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">{productTypeIcons[productType]}</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">{title}</h1>
              <p className="text-xl text-white/90">{subtitle}</p>
            </div>
          </div>
          <p className="text-lg text-white/90 max-w-3xl">{description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <Tabs tabs={defaultTabs} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* KFS Panel for Loans */}
            {productType === 'loan' && kfsData && (
              <div className="mb-6">
                <KFSPanel {...kfsData} />
              </div>
            )}

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{navT('tools')}</h3>
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium">
                  {t('apply')}
                </Button>
                <Button variant="outline" className="w-full">
                  {t('eligibility')}
                </Button>
                <Button variant="outline" className="w-full">
                  EMI {commonT('calculator', { defaultValue: 'Calculator' })}
                </Button>
                <Button variant="outline" className="w-full">
                  {commonT('download')} Brochure
                </Button>
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts && relatedProducts.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <RelatedProducts products={relatedProducts} />
              </div>
            )}

            {/* Contact Support */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{navT('support')}</h3>
              <div className="space-y-3 text-gray-600">
                <p>Have questions about this product?</p>
                <div className="space-y-2">
                  <p className="font-medium">Call: 1800-123-4567</p>
                  <p className="font-medium">Email: support@mnsbank.com</p>
                </div>
                <Button className="w-full">
                  {commonT('contact')} {navT('support')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
