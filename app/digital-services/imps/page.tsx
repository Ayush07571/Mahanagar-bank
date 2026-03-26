import { Button } from '@/components/ui/button'

export default function IMPS() {
  const impsFeatures = [
    { title: 'Instant Transfer', description: 'Transfer money instantly 24/7', icon: '⚡' },
    { title: 'Mobile to Mobile', description: 'Transfer using mobile number', icon: '📱' },
    { title: 'A2A Transfer', description: 'Account to Account transfer', icon: '💳' },
    { title: 'IFSC Transfer', description: 'Transfer using IFSC code', icon: '🏦' },
    { title: 'MMID Transfer', description: 'Transfer using MMID', icon: '🔢' },
    { title: 'Ad-hoc Payment', description: 'One-time payment without registration', icon: '💰' }
  ]

  const impsLimits = [
    {
      type: 'Per Transaction',
      limit: '₹5,00,000',
      description: 'Maximum amount per transaction'
    },
    {
      type: 'Daily Limit',
      limit: '₹5,00,000',
      description: 'Maximum amount per day'
    },
    {
      type: 'Per Beneficiary',
      limit: '₹5,00,000',
      description: 'Maximum per beneficiary per day'
    }
  ]

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">IMPS Services</h1>
          <p className="text-xl text-teal-100">
            Instant Mobile Payment Service for real-time fund transfers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">IMPS Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impsFeatures.map((feature, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use IMPS</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Register for Mobile Banking</h3>
                  <p className="text-gray-600">Register your mobile number for mobile banking</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Get MMID</h3>
                  <p className="text-gray-600">Generate 7-digit Mobile Money Identifier (MMID)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Set MPIN</h3>
                  <p className="text-gray-600">Create 6-digit Mobile PIN for transactions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Transfer Money</h3>
                  <p className="text-gray-600">Use mobile app, net banking, or USSD to transfer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Transfer Methods</h2>
            <div className="space-y-4">
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-semibold text-teal-900 mb-2">Mobile to Mobile</h3>
                <p className="text-teal-800 mb-2">Transfer using beneficiary's mobile number and MMID</p>
                <div className="text-sm text-teal-700">
                  <p>Required: Mobile Number + MMID</p>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Account to Account (A2A)</h3>
                <p className="text-blue-800 mb-2">Transfer using beneficiary's account number and IFSC</p>
                <div className="text-sm text-blue-700">
                  <p>Required: Account Number + IFSC Code</p>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Ad-hoc Payment</h3>
                <p className="text-green-800 mb-2">One-time payment without beneficiary registration</p>
                <div className="text-sm text-green-700">
                  <p>Required: Account Number + IFSC Code + Mobile Number</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">IMPS Limits & Charges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Transaction Limits</h3>
              <div className="space-y-3">
                {impsLimits.map((limit, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">{limit.type}</h4>
                      <p className="text-sm text-gray-600">{limit.description}</p>
                    </div>
                    <div className="text-lg font-bold text-teal-600">{limit.limit}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Charges</h3>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Fund Transfer</h4>
                  <p className="text-green-800">₹5 + GST per transaction</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">MMID Generation</h4>
                  <p className="text-blue-800">FREE for first time</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">Balance Inquiry</h4>
                  <p className="text-yellow-800">FREE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">IMPS Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Banking</h3>
              <p className="text-gray-600">Use our mobile banking app for IMPS transfers</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Net Banking</h3>
              <p className="text-gray-600">Access IMPS through internet banking portal</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">USSD</h3>
              <p className="text-gray-600">Dial *99# for IMPS services</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">IMPS Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 6-digit MPIN authentication</li>
                <li>• Two-factor authentication</li>
                <li>• Transaction limits</li>
                <li>• Real-time alerts</li>
                <li>• Secure encryption</li>
                <li>• Beneficiary verification</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Safety Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Never share your MPIN</li>
                <li>• Keep mobile number updated</li>
                <li>• Verify beneficiary details</li>
                <li>• Check transaction status</li>
                <li>• Report suspicious activity</li>
                <li>• Use official banking apps</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">IMPS Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>For IMPS related issues:</p>
                <p className="font-medium">Phone: 1800-123-4567 (Toll-Free)</p>
                <p className="font-medium">Email: imps@mnsbank.com</p>
                <p className="font-medium">Available 24/7</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">MMID Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>For MMID generation issues:</p>
                <p className="font-medium">Phone: 1800-234-5678 (Toll-Free)</p>
                <p className="font-medium">Email: mmid@mnsbank.com</p>
                <p className="font-medium">Available 9 AM - 9 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
