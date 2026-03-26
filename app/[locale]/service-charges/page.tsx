import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Charges | MNS Bank - Fee Schedule',
  description: 'View complete schedule of service charges and fees for various banking services and transactions.',
}

export default function ServiceChargesPage() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Service Charges</h1>
          <p className="text-xl text-blue-100">
            Transparent and competitive fee structure for all banking services
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Related Charges</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Charges
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applicability
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Account Opening</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Free</td>
                  <td className="px-6 py-4 text-sm text-gray-900">All accounts</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Annual Maintenance</td>
                  <td className="px-6 py-4 text-sm text-gray-900">₹500 + GST</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Savings Account</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Minimum Balance Non-Maintenance</td>
                  <td className="px-6 py-4 text-sm text-gray-900">₹300 per month</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Urban/Metro branches</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Minimum Balance Non-Maintenance</td>
                  <td className="px-6 py-4 text-sm text-gray-900">₹200 per month</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Semi-Urban/Rural branches</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Account Closure</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Free after 1 year</td>
                  <td className="px-6 py-4 text-sm text-gray-900">All accounts</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Account Closure</td>
                  <td className="px-6 py-4 text-sm text-gray-900">₹500 + GST</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Within 1 year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Transaction Charges</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Own Bank ATM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Other Bank ATM
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Financial Transactions</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Free (5 per month)</td>
                  <td className="px-6 py-4 text-sm text-gray-900">₹20 + GST</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Financial Transactions</td>
                  <td className="px-6 py-4 text-sm text-gray-900">₹20 + GST (after 5)</td>
                  <td className="px-6 py-4 text-sm text-gray-900">₹20 + GST</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Non-Financial Transactions</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Free</td>
                  <td className="px-6 py-4 text-sm text-gray-900">₹10 + GST</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Cash Withdrawal (Branch)</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Free (3 per month)</td>
                  <td className="px-6 py-4 text-sm text-gray-900">-</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Cash Withdrawal (Branch)</td>
                  <td className="px-6 py-4 text-sm text-gray-900">₹100 + GST (after 3)</td>
                  <td className="px-6 py-4 text-sm text-gray-900">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Cheque Book</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">₹150 + GST</p>
              <p className="text-sm text-gray-600">Per 25 leaves</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Passbook</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">₹100 + GST</p>
              <p className="text-sm text-gray-600">First copy free</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Stop Payment</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">₹100 + GST</p>
              <p className="text-sm text-gray-600">Per instrument</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Duplicate Statement</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">₹50 + GST</p>
              <p className="text-sm text-gray-600">Per statement</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Information</h3>
          <ul className="list-disc list-inside space-y-2 text-yellow-800">
            <li>All charges are exclusive of GST</li>
            <li>Senior citizens are exempt from certain charges as per RBI guidelines</li>
            <li>Charges are subject to revision from time to time</li>
            <li>For complete details, please refer to the Master Circular on Customer Service</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
