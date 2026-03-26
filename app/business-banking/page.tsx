import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BusinessBanking() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Business Banking</h1>
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
              <Link href="/business-banking/current-account">Learn More</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Loans</h3>
            <p className="text-gray-600 mb-4">
              Working capital and term loans for business expansion
            </p>
            <Button asChild className="w-full">
              <Link href="/business-banking/biz-loans">Learn More</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Trade Finance</h3>
            <p className="text-gray-600 mb-4">
              Complete trade finance solutions for import/export businesses
            </p>
            <Button asChild className="w-full">
              <Link href="/business-banking/trade-finance">Learn More</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cash Management</h3>
            <p className="text-gray-600 mb-4">
              Optimize your cash flow with our cash management services
            </p>
            <Button asChild className="w-full">
              <Link href="/business-banking/cash-management">Learn More</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">MSME Services</h3>
            <p className="text-gray-600 mb-4">
              Specialized services for Micro, Small & Medium Enterprises
            </p>
            <Button asChild className="w-full">
              <Link href="/business-banking/msme-services">Learn More</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Forex Services</h3>
            <p className="text-gray-600 mb-4">
              Foreign exchange services for international business
            </p>
            <Button asChild className="w-full">
              <Link href="/business-banking/forex-services">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
