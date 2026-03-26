import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Offers | MNS Bank - Special Promotions',
  description: 'Check out latest offers and promotions on banking products and services at MNS Bank.',
}

export default function OffersPage() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Special Offers</h1>
          <p className="text-xl text-blue-100">
            Exclusive offers and promotions for our valued customers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2 text-sm font-semibold">
              Limited Time Offer
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Home Loan Festival Special</h3>
              <p className="text-gray-600 mb-4">
                Get special processing fee waiver on home loans during this festive season. 
                Lowest interest rates starting from 8.50% p.a.
              </p>
              <div className="text-2xl font-bold text-blue-600 mb-4">
                Zero Processing Fee*
              </div>
              <p className="text-sm text-gray-500 mb-4">
                *Valid until December 31, 2024
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2 text-sm font-semibold">
              New Customer Offer
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Savings Account Welcome Bonus</h3>
              <p className="text-gray-600 mb-4">
                Open a new savings account and get exclusive benefits including 
                free debit card and first year's annual maintenance waiver.
              </p>
              <div className="text-2xl font-bold text-green-600 mb-4">
                Free Debit Card
              </div>
              <p className="text-sm text-gray-500 mb-4">
                *T&C apply. Valid for new accounts only
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Open Account
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2 text-sm font-semibold">
              Digital Banking Offer
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Net Banking Cashback</h3>
              <p className="text-gray-600 mb-4">
                Register for net banking and get cashback on your first 5 online transactions. 
                Earn rewards while banking digitally.
              </p>
              <div className="text-2xl font-bold text-purple-600 mb-4">
                5% Cashback
              </div>
              <p className="text-sm text-gray-500 mb-4">
                *Max cashback ₹500 per transaction
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Register Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-orange-600 text-white px-4 py-2 text-sm font-semibold">
              Business Banking
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Current Account Special</h3>
              <p className="text-gray-600 mb-4">
                Open a current account and enjoy free transactions for the first 6 months. 
                Ideal for small businesses and startups.
              </p>
              <div className="text-2xl font-bold text-orange-600 mb-4">
                6 Months Free
              </div>
              <p className="text-sm text-gray-500 mb-4">
                *No minimum balance requirement
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Know More
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-teal-600 text-white px-4 py-2 text-sm font-semibold">
              Loan Offer
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Loan Express</h3>
              <p className="text-gray-600 mb-4">
                Quick approval personal loans with minimal documentation. 
                Get funds in your account within 24 hours.
              </p>
              <div className="text-2xl font-bold text-teal-600 mb-4">
                24 Hour Approval
              </div>
              <p className="text-sm text-gray-500 mb-4">
                *Interest rates starting from 10.99% p.a.
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-2 text-sm font-semibold">
              Fixed Deposit
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Special FD Rates</h3>
              <p className="text-gray-600 mb-4">
                Earn higher interest rates on fixed deposits with special tenure options. 
                Senior citizens get additional 0.50% p.a.
              </p>
              <div className="text-2xl font-bold text-indigo-600 mb-4">
                7.25% p.a.
              </div>
              <p className="text-sm text-gray-500 mb-4">
                *For 2-3 year tenure
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Invest Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Terms & Conditions</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>All offers are subject to bank's terms and conditions</li>
            <li>The bank reserves the right to modify or withdraw any offer without prior notice</li>
            <li>Offers cannot be combined with any other promotional scheme</li>
            <li>For complete details, please visit your nearest branch</li>
            <li>Offers are valid for a limited period only</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
