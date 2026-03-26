import { Metadata } from 'next'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Business Banking | MNS Bank - Empowering Your Business',
  description: 'MNS Bank provides comprehensive business banking solutions including current accounts, business loans, and MSME services to fuel your growth.',
}

export default function BusinessBanking() {
  const t = useTranslations('navigation')
  const commonT = useTranslations('common')

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('business_banking')}</h1>
          <p className="text-xl text-green-100">
            Comprehensive banking solutions for your business growth
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Current Accounts</h3>
            <p className="text-gray-600 mb-4">
              Efficient current accounts for your daily business operations
            </p>
            <Button asChild className="w-full">
              <Link href="/current-account">{commonT('learn_more')}</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Working Capital Loan</h3>
            <p className="text-gray-600 mb-4">
              Fuel your business growth with flexible credit limits
            </p>
            <Button asChild className="w-full">
              <Link href="/working-capital-loan">{commonT('learn_more')}</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Micro Finance</h3>
            <p className="text-gray-600 mb-4">
              Empowering small entrepreneurs with easy micro-loans
            </p>
            <Button asChild className="w-full">
              <Link href="/micro-finance">{commonT('learn_more')}</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Self Employed Loan</h3>
            <p className="text-gray-600 mb-4">
              Customized loans for professionals and small business owners
            </p>
            <Button asChild className="w-full">
              <Link href="/self-employed-loan">{commonT('learn_more')}</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Transport Loan</h3>
            <p className="text-gray-600 mb-4">
              Financing solutions for your commercial vehicle fleet
            </p>
            <Button asChild className="w-full">
              <Link href="/transport-loan">{commonT('learn_more')}</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Overdraft Facility</h3>
            <p className="text-gray-600 mb-4">
              Ready liquidity to manage your business cash flows
            </p>
            <Button asChild className="w-full">
              <Link href="/overdraft-facility">{commonT('learn_more')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
