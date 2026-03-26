import { Button } from '@/components/ui/button'

export default function MobileBanking() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Mobile Banking</h1>
          <p className="text-xl text-purple-100">
            Bank on the go with our secure and convenient mobile banking app
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobile Banking Features</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-purple-600 mr-3">📱</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Secure Banking</h3>
                    <p className="text-gray-600">Bank-level security with multi-factor authentication</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-3">💸</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Instant Transfers</h3>
                    <p className="text-gray-600">Send money instantly using UPI, IMPS, NEFT</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-3">📊</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Account Management</h3>
                    <p className="text-gray-600">Check balance, view transactions, download statements</p>
                  </div>
                  <h3 className="font-semibold text-gray-900">Account Management</h3>
                  <p className="text-gray-600">Check balance, view transactions, download statements</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-3">💳</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Card Services</h3>
                  <p className="text-gray-600">Block/unblock cards, set limits, pay bills</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Download App</h2>
            <div className="space-y-4">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">📱</span>
                </div>
                <p className="text-gray-600">Available for iOS and Android</p>
              </div>
              
              <Button className="w-full bg-black text-white mb-3">
                Download from App Store
              </Button>
              <Button className="w-full bg-green-600 text-white mb-4">
                Download from Google Play
              </Button>
              <Button variant="outline" className="w-full">
                Scan QR Code
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Download App</h3>
              <p className="text-gray-600">Download from App Store or Google Play</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Register</h3>
              <p className="text-gray-600">Create your mobile banking account</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Activate</h3>
              <p className="text-gray-600">Activate using your debit card details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">4️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Start Banking</h3>
              <p className="text-gray-600">Enjoy secure mobile banking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
