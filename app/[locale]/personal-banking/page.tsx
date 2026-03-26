import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Personal Banking | MNS Bank - Your Financial Partner',
  description: 'MNS Bank offers a wide range of personal banking products including savings accounts, home loans, personal loans, and deposits tailored to your needs.',
}

export default function PersonalBanking() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Personal Banking</h1>
          <p className="text-xl text-blue-100">
            Complete banking solutions designed for your personal financial needs
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Savings Accounts</h3>
            <p className="text-gray-600 mb-4">
              Secure savings options with competitive interest rates
            </p>
            <Button asChild className="w-full">
              <Link href="/savings-account">Learn More</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Loans</h3>
            <p className="text-gray-600 mb-4">
              Flexible personal loans for all your financial needs
            </p>
            <Button asChild className="w-full">
              <Link href="/personal-loan">Learn More</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Loans</h3>
            <p className="text-gray-600 mb-4">
              Make your dream home a reality with our home loans
            </p>
            <Button asChild className="w-full">
              <Link href="/home-loan">Learn More</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fixed Deposits</h3>
            <p className="text-gray-600 mb-4">
              Earn guaranteed returns with our fixed deposit schemes
            </p>
            <Button asChild className="w-full">
              <Link href="/deposits">Learn More</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Gold Loans</h3>
            <p className="text-gray-600 mb-4">
              Quick and easy loans against your gold ornaments
            </p>
            <Button asChild className="w-full">
              <Link href="/gold-loan">Learn More</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Banking</h3>
            <p className="text-gray-600 mb-4">
              Bank on the go with our modern digital banking solutions
            </p>
            <Button asChild className="w-full">
              <Link href="/digital-services">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
