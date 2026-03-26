import { Button } from '@/components/ui/button'

export default function InterestRates() {
  const personalBankingRates = [
    { product: 'Savings Account', rate: '3.50% - 4.00%', effectiveFrom: '01-Jan-2024' },
    { product: 'Fixed Deposits (1 Year)', rate: '6.50% - 7.25%', effectiveFrom: '01-Jan-2024' },
    { product: 'Personal Loan', rate: '10.99% - 18.99%', effectiveFrom: '01-Jan-2024' },
    { product: 'Home Loan', rate: '8.35% - 9.50%', effectiveFrom: '01-Jan-2024' },
    { product: 'Car Loan', rate: '9.25% - 12.50%', effectiveFrom: '01-Jan-2024' },
    { product: 'Education Loan', rate: '8.50% - 11.75%', effectiveFrom: '01-Jan-2024' },
  ]

  const businessBankingRates = [
    { product: 'Current Account', rate: 'No Interest', effectiveFrom: '01-Jan-2024' },
    { product: 'Business Loans', rate: '11.50% - 16.50%', effectiveFrom: '01-Jan-2024' },
    { product: 'Working Capital', rate: '10.25% - 14.75%', effectiveFrom: '01-Jan-2024' },
    { product: 'Term Loan', rate: '9.75% - 13.25%', effectiveFrom: '01-Jan-2024' },
    { product: 'Machinery Loan', rate: '10.50% - 15.00%', effectiveFrom: '01-Jan-2024' },
    { product: 'Property Loan', rate: '9.25% - 12.75%', effectiveFrom: '01-Jan-2024' },
  ]

  const depositRates = [
    { tenure: '7 days to 14 days', rate: '4.00%', effectiveFrom: '01-Jan-2024' },
    { tenure: '15 days to 45 days', rate: '4.50%', effectiveFrom: '01-Jan-2024' },
    { tenure: '46 days to 90 days', rate: '5.00%', effectiveFrom: '01-Jan-2024' },
    { tenure: '91 days to 180 days', rate: '5.75%', effectiveFrom: '01-Jan-2024' },
    { tenure: '181 days to 1 year', rate: '6.25%', effectiveFrom: '01-Jan-2024' },
    { tenure: '1 year to 2 years', rate: '6.75%', effectiveFrom: '01-Jan-2024' },
    { tenure: '2 years to 3 years', rate: '7.00%', effectiveFrom: '01-Jan-2024' },
    { tenure: '3 years to 5 years', rate: '7.25%', effectiveFrom: '01-Jan-2024' },
    { tenure: '5 years to 10 years', rate: '7.50%', effectiveFrom: '01-Jan-2024' },
  ]

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Interest Rates</h1>
          <p className="text-xl text-purple-100">
            Current interest rates for all our banking products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Banking Rates</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Interest Rate (p.a.)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Effective From
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {personalBankingRates.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.product}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.rate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.effectiveFrom}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Banking Rates</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Interest Rate (p.a.)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Effective From
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {businessBankingRates.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.product}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.rate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.effectiveFrom}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fixed Deposit Rates</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tenure
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Interest Rate (p.a.)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Effective From
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {depositRates.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.tenure}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.rate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.effectiveFrom}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>
          <div className="space-y-4 text-gray-600">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Rate Changes</h3>
              <p className="text-blue-800">
                Interest rates are subject to change without prior notice. Please check with our branch for the latest rates.
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Special Rates</h3>
              <p className="text-green-800">
                Special rates are available for senior citizens, women, and existing customers. Contact our branch for details.
              </p>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Tax Benefits</h3>
              <p className="text-yellow-800">
                Interest earned on fixed deposits is taxable as per applicable income tax laws. TDS will be deducted as per government norms.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-600">
                <p>For any queries about interest rates:</p>
                <p className="font-medium">Phone: 1800-123-4567 (Toll-Free)</p>
                <p className="font-medium">Email: rates@mnsbank.com</p>
                <p className="font-medium">Visit: Your nearest branch</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full">
                  Calculate EMI
                </Button>
                <Button variant="outline" className="w-full">
                  Download Rate Sheet
                </Button>
                <Button variant="outline" className="w-full">
                  Schedule Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
