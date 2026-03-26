import { Button } from '@/components/ui/button'
import { NetBankingLoginForm } from '@/components/banking/NetBankingCTA'

export default function NetBanking() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Net Banking</h1>
          <p className="text-xl text-blue-100">
            Secure online banking services available 24/7
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Login to Net Banking</h2>
            <NetBankingLoginForm />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Net Banking Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  24/7 account access
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fund transfers (NEFT/RTGS/IMPS)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Bill payments and recharges
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  View account statements
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Mobile and DTH recharges
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Tax payments
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🔒</span>
                  Two-factor authentication
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🔒</span>
                  End-to-end encryption
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🔒</span>
                  Secure login with OTP
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🔒</span>
                  Transaction limits
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  Forgot Password
                </Button>
                <Button variant="outline" className="w-full">
                  Reset Login Password
                </Button>
                <Button variant="outline" className="w-full">
                  Block Card
                </Button>
                <Button variant="outline" className="w-full">
                  Download Mobile App
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Net Banking</h3>
              <p className="text-gray-600">Go to our secure net banking portal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Enter Credentials</h3>
              <p className="text-gray-600">Use your User ID and Password</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Verify with OTP</h3>
              <p className="text-gray-600">Complete two-factor authentication</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">4️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Access Account</h3>
              <p className="text-gray-600">Start using net banking services</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Net Banking URL</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Secure Net Banking Portal</h3>
                <p className="text-blue-800 font-mono text-lg">https://netbanking.mnsbank.com</p>
                <p className="text-sm text-blue-700 mt-2">Standard HTTPS port 443 with SSL encryption</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="https://netbanking.mnsbank.com" target="_blank" rel="noopener noreferrer">
                  Access Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Net Banking Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>For any net banking related issues:</p>
                <p className="font-medium">Phone: 1800-123-4567 (Toll-Free)</p>
                <p className="font-medium">Email: netbanking@mnsbank.com</p>
                <p className="font-medium">24/7 Support Available</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Helpline</h3>
              <div className="space-y-3 text-gray-600">
                <p>Report suspicious activities:</p>
                <p className="font-medium">Phone: 1800-234-5678 (Toll-Free)</p>
                <p className="font-medium">Email: security@mnsbank.com</p>
                <p className="font-medium">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
