import { Button } from '@/components/ui/button'

export default function BBPS() {
  const supportedBillers = [
    {
      category: 'Electricity',
      billers: ['MSEB', 'BSEB', 'DHBVN', 'CESC', 'Reliance Energy', 'Tata Power'],
      icon: '⚡'
    },
    {
      category: 'Mobile Recharge',
      billers: ['Airtel', 'Jio', 'Vodafone', 'BSNL', 'MTNL', 'Reliance Jio'],
      icon: '📱'
    },
    {
      category: 'DTH Recharge',
      billers: ['Tata Sky', 'Airtel Digital TV', 'Dish TV', 'Sun Direct', 'Videocon D2H'],
      icon: '📺'
    },
    {
      category: 'Water Bill',
      billers: ['MCGM', 'Delhi Jal Board', 'Kolkata Municipal', 'Chennai Metro Water'],
      icon: '💧'
    },
    {
      category: 'Gas Bill',
      billers: ['Indane Gas', 'Bharat Gas', 'HP Gas', 'PNG (City Gas)', 'LPG'],
      icon: '🔥'
    },
    {
      category: 'Broadband',
      billers: ['BSNL Broadband', 'Airtel Broadband', 'Jio Fiber', 'ACT Fibernet', 'Tikona'],
      icon: '🌐'
    },
    {
      category: 'Landline',
      billers: ['BSNL Landline', 'MTNL Landline', 'Airtel Landline', 'Reliance Landline'],
      icon: '☎️'
    },
    {
      category: 'Insurance',
      billers: ['LIC', 'ICICI Prudential', 'HDFC Life', 'SBI Life', 'Max Life'],
      icon: '🛡️'
    }
  ]

  const bbpsFeatures = [
    { title: 'One-Stop Solution', description: 'Pay all bills from one platform', icon: '🎯' },
    { title: 'Instant Confirmation', description: 'Get instant payment confirmation', icon: '✅' },
    { title: 'Secure Payments', description: 'Safe and secure payment gateway', icon: '🔒' },
    { title: 'Multiple Payment Modes', description: 'Pay via UPI, cards, net banking', icon: '💳' },
    { title: 'Auto-Pay Facility', description: 'Set up automatic bill payments', icon: '🔄' },
    { title: 'Payment History', description: 'View all your payment history', icon: '📊' }
  ]

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">BHARAT Bill Payment System (BBPS)</h1>
          <p className="text-xl text-purple-100">
            One-stop solution for all your bill payments
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">BBPS Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bbpsFeatures.map((feature, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Supported Billers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportedBillers.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {category.billers.map((biller, idx) => (
                    <div key={idx} className="bg-purple-50 px-3 py-2 rounded text-sm text-purple-800">
                      {biller}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Pay Bills</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Select Biller</h3>
                  <p className="text-gray-600">Choose your biller from the supported list</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Enter Details</h3>
                  <p className="text-gray-600">Enter your consumer number and other details</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fetch Bill</h3>
                  <p className="text-gray-600">System fetches your bill details automatically</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Make Payment</h3>
                  <p className="text-gray-600">Pay using UPI, cards, or net banking</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Channels</h2>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Mobile Banking App</h3>
                <p className="text-purple-800">Access BBPS through our mobile banking app</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Net Banking</h3>
                <p className="text-blue-800">Pay bills through internet banking portal</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">UPI Apps</h3>
                <p className="text-green-800">Use any UPI app to pay bills</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">Bank Branch</h3>
                <p className="text-yellow-800">Visit any MNS Bank branch for bill payment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">BBPS Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Convenience</h3>
              <p className="text-gray-600">Pay all bills from one platform, anytime, anywhere</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Effective</h3>
              <p className="text-gray-600">No additional charges for bill payments</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure</h3>
              <p className="text-gray-600">RBI regulated platform with secure payment gateway</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Auto-Pay Facility</h2>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Set Up Auto-Pay</h3>
                <p className="text-purple-800">
                  Never miss a bill payment with our auto-pay facility. Set up standing instructions for recurring bills.
                </p>
                <ul className="text-sm text-purple-700 mt-2 space-y-1">
                  <li>• Automatic bill payment on due date</li>
                  <li>• Email and SMS notifications</li>
                  <li>• Easy to modify or cancel</li>
                  <li>• Available for all supported billers</li>
                </ul>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Set Up Auto-Pay
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">BBPS Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>For BBPS related issues:</p>
                <p className="font-medium">Phone: 1800-123-4567 (Toll-Free)</p>
                <p className="font-medium">Email: bbps@mnsbank.com</p>
                <p className="font-medium">Available 24/7</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Biller Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>For biller-related issues:</p>
                <p className="font-medium">Phone: 1800-234-5678 (Toll-Free)</p>
                <p className="font-medium">Email: billers@mnsbank.com</p>
                <p className="font-medium">Available 9 AM - 9 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
