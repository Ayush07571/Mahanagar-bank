import { Button } from '@/components/ui/button'

export default function ATMServices() {
  const atmFeatures = [
    { title: 'Cash Withdrawal', description: 'Withdraw cash from your account 24/7', icon: '💵' },
    { title: 'Balance Inquiry', description: 'Check your account balance instantly', icon: '📊' },
    { title: 'Mini Statement', description: 'Get last 10 transactions', icon: '📋' },
    { title: 'PIN Change', description: 'Change your debit card PIN securely', icon: '🔐' },
    { title: 'Fund Transfer', description: 'Transfer funds using NEFT/RTGS/IMPS', icon: '💸' },
    { title: 'Mobile Recharge', description: 'Recharge your mobile phone', icon: '📱' },
    { title: 'Bill Payment', description: 'Pay utility bills', icon: '📄' },
    { title: 'Card to Card Transfer', description: 'Transfer money between cards', icon: '💳' }
  ]

  const atmTypes = [
    {
      type: 'White Label ATMs',
      description: 'ATMs operated by third parties but serving MNS Bank customers',
      features: ['Cash withdrawal', 'Balance inquiry', 'Mini statement']
    },
    {
      type: 'Brown Label ATMs',
      description: 'ATMs owned and operated by MNS Bank',
      features: ['All services', 'Higher withdrawal limits', 'Priority support']
    },
    {
      type: 'Cash Deposit Machines',
      description: 'Automated cash deposit machines for instant credit',
      features: ['Cash deposit', 'Instant credit', 'No forms required']
    }
  ]

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">ATM Services</h1>
          <p className="text-xl text-green-100">
            24/7 banking convenience at your fingertips
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">ATM Services Available</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {atmFeatures.map((feature, index) => (
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ATM Network</h2>
            <div className="space-y-4">
              {atmTypes.map((atm, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{atm.type}</h3>
                  <p className="text-gray-600 mb-3">{atm.description}</p>
                  <ul className="text-sm text-gray-500">
                    {atm.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ATM Usage Guidelines</h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Safety Tips</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Cover your PIN while entering</li>
                  <li>• Check for skimming devices</li>
                  <li>• Use well-lit ATMs</li>
                  <li>• Don't accept help from strangers</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Transaction Limits</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Withdrawal: ₹25,000 per transaction</li>
                  <li>• Daily limit: ₹1,00,000</li>
                  <li>• Transfer: ₹2,00,000 per day</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">Charges</h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Free for first 5 transactions per month</li>
                  <li>• ₹20 per transaction thereafter</li>
                  <li>• No charges for MNS Bank ATMs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">ATM Locator</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Find Nearest ATM</h3>
                <p className="text-green-800">Locate MNS Bank ATMs and partner ATMs near you</p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <a href="/locate-us">
                  Locate ATM
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Card Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Lost or Stolen Card</h3>
              <div className="space-y-3 text-gray-600">
                <p>Immediately block your card:</p>
                <p className="font-medium">Phone: 1800-123-4567 (Toll-Free)</p>
                <p className="font-medium">SMS: BLOCK CARD_NUMBER to 5676766</p>
                <p className="font-medium">Net Banking: Block card online</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fraud Prevention</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Never share your PIN</li>
                <li>• Change PIN regularly</li>
                <li>• Report suspicious transactions</li>
                <li>• Use chip-enabled cards</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ATM Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>For ATM-related issues:</p>
                <p className="font-medium">Phone: 1800-123-4567</p>
                <p className="font-medium">Available 24/7</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Card Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>For card-related issues:</p>
                <p className="font-medium">Phone: 1800-234-5678</p>
                <p className="font-medium">Available 24/7</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fraud Reporting</h3>
              <div className="space-y-3 text-gray-600">
                <p>Report fraud immediately:</p>
                <p className="font-medium">Phone: 1930</p>
                <p className="font-medium">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
