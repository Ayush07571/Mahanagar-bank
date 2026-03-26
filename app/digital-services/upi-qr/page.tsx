import { Button } from '@/components/ui/button'

export default function UPIQR() {
  const upiFeatures = [
    { title: 'Instant Money Transfer', description: 'Send money instantly 24/7', icon: '⚡' },
    { title: 'QR Code Payments', description: 'Scan and pay at merchants', icon: '📱' },
    { title: 'Bill Payments', description: 'Pay utility bills easily', icon: '📄' },
    { title: 'Mobile Recharge', description: 'Recharge prepaid mobile', icon: '📞' },
    { title: 'DTH Recharge', description: 'Recharge DTH services', icon: '📺' },
    { title: 'Request Money', description: 'Request money from others', icon: '💰' }
  ]

  const upiPins = [
    {
      bank: 'MNS Bank UPI',
      vpa: 'yourname@mnsbank',
      features: ['Instant transfers', 'QR payments', 'Bill payments', 'Mobile recharge']
    },
    {
      bank: 'BHIM UPI',
      vpa: 'yourphone@upi',
      features: ['All bank accounts', 'Simple interface', 'Government app']
    },
    {
      bank: 'PhonePe',
      vpa: 'yourname@ybl',
      features: ['Wide merchant network', 'Cashback offers', 'Multiple payment options']
    },
    {
      bank: 'Google Pay',
      vpa: 'yourname@okhdfcbank',
      features: 'Google integration, Rewards program, Easy to use'
    },
    {
      bank: 'Paytm',
      vpa: 'yourname@paytm',
      features: ['Wallet integration', 'Cashback offers', 'Wide acceptance']
    },
    {
      bank: 'Amazon Pay',
      vpa: 'yourname@apl',
      features: ['Amazon integration', 'Rewards points', 'Simple payments']
    }
  ]

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">UPI & QR Payments</h1>
          <p className="text-xl text-orange-100">
            Fast, secure, and convenient digital payments
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">UPI Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upiFeatures.map((feature, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Virtual Payment Address (VPA)</h2>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-2">Your MNS Bank VPA</h3>
            <p className="text-orange-800 font-mono text-lg mb-2">yourname@mnsbank</p>
            <p className="text-sm text-orange-700">
              Use this VPA to receive payments from any UPI app
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Create Your VPA</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Steps to Create VPA:</h4>
                  <ol className="space-y-2 text-gray-600">
                    <li>1. Open any UPI app</li>
                    <li>2. Select MNS Bank</li>
                    <li>3. Enter your account details</li>
                    <li>4. Create your VPA (username@mnsbank)</li>
                    <li>5. Set UPI PIN</li>
                  </ol>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Create VPA Now
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular UPI Apps</h3>
              <div className="space-y-3">
                {upiPins.slice(0, 4).map((app, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900">{app.bank}</h4>
                        <p className="text-sm text-gray-600">{app.vpa}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Link Account
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">QR Code Payments</h2>
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-6xl">📱</span>
                </div>
                <p className="text-gray-600 mb-4">Scan QR code to pay</p>
                <Button className="w-full">
                  Generate QR Code
                </Button>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">How to Pay with QR Code</h3>
                <ol className="space-y-2 text-sm text-blue-800">
                  <li>1. Open any UPI app</li>
                  <li>2. Click on "Scan QR Code"</li>
                  <li>3. Scan merchant QR code</li>
                  <li>4. Enter amount</li>
                  <li>5. Enter UPI PIN</li>
                  <li>6. Payment successful</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">UPI Limits & Charges</h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Transaction Limits</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• Per transaction: ₹1,00,000</li>
                  <li>• Daily limit: ₹5,00,000</li>
                  <li>• Per hour limit: ₹20,000</li>
                  <li>• Weekly limit: ₹10,00,000</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">Charges</h3>
                <ul className="space-y-2 text-yellow-800">
                  <li>• Fund transfer: FREE</li>
                  <li>• Bill payments: FREE</li>
                  <li>• Mobile recharge: FREE</li>
                  <li>• Merchant payments: FREE</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">UPI Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 4-6 digit UPI PIN</li>
                <li>• Two-factor authentication</li>
                <li>• Transaction limits</li>
                <li>• Device binding</li>
                <li>• Real-time alerts</li>
                <li>• Secure encryption</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Safety Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Never share your UPI PIN</li>
                <li>• Use official UPI apps only</li>
                <li>• Verify merchant details</li>
                <li>• Check transaction details</li>
                <li>• Report suspicious activity</li>
                <li>• Keep app updated</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">UPI Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>For UPI related issues:</p>
                <p className="font-medium">Phone: 1800-123-4567 (Toll-Free)</p>
                <p className="font-medium">Email: upi@mnsbank.com</p>
                <p className="font-medium">Available 24/7</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fraud Reporting</h3>
              <div className="space-y-3 text-gray-600">
                <p>Report UPI fraud immediately:</p>
                <p className="font-medium">Phone: 1930</p>
                <p className="font-medium">Email: fraud@mnsbank.com</p>
                <p className="font-medium">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
