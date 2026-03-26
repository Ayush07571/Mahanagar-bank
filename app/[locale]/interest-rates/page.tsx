import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Interest Rates | MNS Bank - Competitive Rates',
  description: 'View current interest rates for all banking products including savings accounts, deposits, loans, and more.',
}

export default function InterestRatesPage() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Interest Rates</h1>
          <p className="text-xl text-blue-100">
            Competitive interest rates for all our banking products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domestic Term Deposits</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tenure
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    General Public (% p.a.)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Senior Citizens (% p.a.)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7 days to 14 days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3.50</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">15 days to 30 days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4.50</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">31 days to 45 days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4.50</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">46 days to 90 days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5.50</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">91 days to 180 days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6.25</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6.75</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">181 days to 364 days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6.75</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7.25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Savings Account</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Savings Account</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">3.00% p.a.</p>
              <p className="text-sm text-gray-600">On daily balance above ₹1 lakh</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Savings Account</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">2.75% p.a.</p>
              <p className="text-sm text-gray-600">On daily balance up to ₹1 lakh</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Notes</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>Rates are subject to change without prior notice</li>
            <li>Senior Citizen rates applicable for individuals aged 60 years and above</li>
            <li>Interest is calculated on daily basis and paid quarterly</li>
            <li>TDS is applicable as per prevailing income tax regulations</li>
            <li>For complete details, please contact your nearest branch</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
