import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NetBankingCTA } from '@/components/banking/NetBankingCTA'
import { Navigation } from '@/components/layout/Navigation'

export default function Home() {
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
                  Explore Personal Banking
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3"
              >
                <Link href="/business-banking">
                  Explore Business Banking
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
            <p className="text-lg text-gray-600">
              Experience banking that puts you first
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Trusted Since 1976
              </h3>
              <p className="text-gray-600">
                Over 45 years of dedicated service to the Bhopal community
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure Banking
              </h3>
              <p className="text-gray-600">
                Bank-level security for all your transactions and data
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Digital Banking
              </h3>
              <p className="text-gray-600">
                24/7 access to your accounts through our mobile and internet banking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Banking Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions for all your banking needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Personal Banking
              </h3>
              <p className="text-gray-600 mb-4">
                Savings accounts, loans, deposits, and more
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/personal-banking">Learn More</Link>
              </Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Business Banking
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
                Digital Services
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
                Financial Tools
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
