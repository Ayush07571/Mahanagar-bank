import { Button } from '@/components/ui/button'

export default function DebitCards() {
  const cardTypes = [
    {
      name: 'Classic Debit Card',
      description: 'Basic debit card for everyday transactions',
      features: ['Daily limit: ₹50,000', 'International usage', 'Contactless payments', 'Free for first year'],
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Gold Debit Card',
      description: 'Premium debit card with enhanced features',
      features: ['Daily limit: ₹1,00,000', 'Airport lounge access', 'International usage', 'Contactless payments'],
      color: 'from-yellow-600 to-yellow-800'
    },
    {
      name: 'Platinum Debit Card',
      description: 'Elite debit card with exclusive benefits',
      features: ['Daily limit: ₹2,00,000', 'Airport lounge access', 'Travel insurance', 'Cashback rewards'],
      color: 'from-purple-600 to-purple-800'
    },
    {
      name: 'Corporate Debit Card',
      description: 'Business debit card for corporate accounts',
      features: ['Daily limit: ₹5,00,000', 'Employee cards', 'Expense tracking', 'Corporate branding'],
      color: 'from-green-600 to-green-800'
    }
  ]

  const cardFeatures = [
    { title: 'Contactless Payments', description: 'Tap to pay at merchant terminals', icon: '📱' },
    { title: 'International Usage', description: 'Use your card worldwide', icon: '🌍' },
    { title: 'Online Shopping', description: 'Secure online transactions', icon: '🛒' },
    { title: 'ATM Withdrawals', description: '24/7 cash access', icon: '💵' },
    { title: 'Mobile Wallet Integration', description: 'Link to mobile wallets', icon: '💳' },
    { title: 'EMI on Purchases', description: 'Convert purchases to EMIs', icon: '📊' }
  ]

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Debit Cards</h1>
          <p className="text-xl text-indigo-100">
            Secure and convenient debit cards for all your payment needs
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Debit Card Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardTypes.map((card, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${card.color} rounded-full mb-4`}></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.name}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <ul className="space-y-2">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-4 w-full" variant="outline">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Card Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardFeatures.map((feature, index) => (
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Features</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <strong>EMV Chip Technology:</strong> Enhanced security against fraud
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <strong>3D Secure:</strong> Extra protection for online transactions
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <strong>Instant Block:</strong> Block card immediately if lost/stolen
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <strong>Transaction Alerts:</strong> SMS alerts for all transactions
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <strong>Daily Limits:</strong> Set your own transaction limits
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Open Account</h3>
                  <p className="text-gray-600">Have a savings or current account with MNS Bank</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Submit Application</h3>
                  <p className="text-gray-600">Fill out debit card application form</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">KYC Verification</h3>
                  <p className="text-gray-600">Complete KYC verification process</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Receive Card</h3>
                  <p className="text-gray-600">Get your debit card within 7-10 working days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Card Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">Block/Unblock Card</h3>
              <p className="text-indigo-800 mb-4">Temporarily block or unblock your card</p>
              <Button variant="outline" className="w-full">
                Manage Card
              </Button>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Set Limits</h3>
              <p className="text-green-800 mb-4">Set daily transaction limits</p>
              <Button variant="outline" className="w-full">
                Set Limits
              </Button>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Generate PIN</h3>
              <p className="text-purple-800 mb-4">Generate or reset your card PIN</p>
              <Button variant="outline" className="w-full">
                Generate PIN
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Card Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>For debit card related issues:</p>
                <p className="font-medium">Phone: 1800-123-4567 (Toll-Free)</p>
                <p className="font-medium">Email: cards@mnsbank.com</p>
                <p className="font-medium">Available 24/7</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Lost Card</h3>
              <div className="space-y-3 text-gray-600">
                <p>Block your lost card immediately:</p>
                <p className="font-medium">Phone: 1800-123-4567 (Toll-Free)</p>
                <p className="font-medium">SMS: BLOCK CARD_NUMBER to 5676766</p>
                <p className="font-medium">Net Banking: Block card online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
