import { Metadata } from 'next'
import { Link } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'
import { Button } from '@/components/ui/button'
import { NetBankingCTA } from '@/components/banking/NetBankingCTA'
import { Navigation } from '@/components/layout/Navigation'

export const metadata: Metadata = {
  title: 'Mahanagar Nagrik Sahakari Bank Ltd. | Your Trusted Banking Partner in Bhopal',
  description: 'Welcome to MNS Bank, providing secure and reliable personal and business banking services in Bhopal since 1976. Explore our wide range of loans, deposits, and digital services.',
}

export default async function Home() {
  const t = await getTranslations('header')
  const navT = await getTranslations('navigation')

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to MNS Bank
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your Trusted Banking Partner in Bhopal Since 1976
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3"
              >
                <Link href="/personal-banking">
                  {navT('personal_banking')}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3"
              >
                <Link href="/business-banking">
                  {navT('business_banking')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <Navigation />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose MNS Bank?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have been serving the community of Bhopal for over 45 years with trust, integrity, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Banking</h3>
              <p className="text-gray-600">
                Advanced security measures to protect your transactions and data.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/personal-banking">Learn More</Link>
              </Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {navT('business_banking')}
              </h3>
              <p className="text-gray-600 mb-4">
                Current accounts, business loans, and corporate services
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/business-banking">Learn More</Link>
              </Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {navT('digital_services')}
              </h3>
              <p className="text-gray-600 mb-4">
                Mobile banking, UPI, bill payments, and online services
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/digital-services">Learn More</Link>
              </Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {navT('tools')}
              </h3>
              <p className="text-gray-600 mb-4">
                EMI calculator, branch locator, and helpful resources
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/emi-calculator">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Better Banking?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Access your account anytime, anywhere with our secure Net Banking
          </p>
          <NetBankingCTA variant="featured" />
        </div>
      </section>
    </div>
  )
}
