import { Button } from '@/components/ui/button'

export default function ServiceCharges() {
  const accountCharges = [
    { service: 'Savings Account - Minimum Balance', charge: 'NIL', frequency: 'Monthly' },
    { service: 'Current Account - Minimum Balance', charge: 'NIL', frequency: 'Monthly' },
    { service: 'Cheque Book - First 25 Leaves', charge: 'NIL', frequency: 'One-time' },
    { service: 'Cheque Book - Additional 25 Leaves', charge: '₹100 + GST', frequency: 'Per book' },
    { service: 'Duplicate Passbook', charge: '₹50 + GST', frequency: 'Per copy' },
    { service: 'Account Statement - Branch', charge: 'NIL', frequency: 'Per statement' },
    { service: 'Account Statement - Email', charge: 'NIL', frequency: 'Per statement' },
    { service: 'Stop Payment', charge: '₹50 + GST', frequency: 'Per instruction' },
  ]

  const transactionCharges = [
    { service: 'NEFT', charge: 'NIL', frequency: 'Per transaction' },
    { service: 'RTGS', charge: 'NIL', frequency: 'Per transaction' },
    { service: 'IMPS', charge: '₹5 + GST', frequency: 'Per transaction' },
    { service: 'Cash Deposit - Own Account', charge: 'NIL', frequency: 'Per transaction' },
    { service: 'Cash Deposit - Third Party', charge: '₹50 + GST', frequency: 'Per transaction' },
    { service: 'Cash Withdrawal - Branch', charge: 'NIL', frequency: 'Per transaction' },
    { service: 'Cash Withdrawal - ATM (MNS Bank)', charge: 'NIL', frequency: 'Per transaction' },
    { service: 'Cash Withdrawal - ATM (Other Banks)', charge: '₹20 + GST', frequency: 'Per transaction' },
  ]

  const loanCharges = [
    { service: 'Personal Loan - Processing Fee', charge: '0% - 2%', frequency: 'One-time' },
    { service: 'Home Loan - Processing Fee', charge: '0.5% - 1%', frequency: 'One-time' },
    { service: 'Car Loan - Processing Fee', charge: '1% - 2%', frequency: 'One-time' },
    { service: 'Prepayment Charges', charge: '4%', frequency: 'Before 6 months' },
    { service: 'Prepayment Charges', charge: 'NIL', frequency: 'After 6 months' },
    { service: 'Late Payment Fee', charge: '2% of EMI', frequency: 'Per instance' },
    { service: 'Loan Statement', charge: 'NIL', frequency: 'Per statement' },
    { service: 'Foreclosure Charges', charge: '2% - 4%', frequency: 'One-time' },
  ]

  const digitalCharges = [
    { service: 'Internet Banking', charge: 'NIL', frequency: 'Annual' },
    { service: 'Mobile Banking', charge: 'NIL', frequency: 'Annual' },
    { service: 'SMS Alerts', charge: '₹15 + GST', frequency: 'Quarterly' },
    { service: 'Email Alerts', charge: 'NIL', frequency: 'Annual' },
    { service: 'UPI Transactions', charge: 'NIL', frequency: 'Per transaction' },
    { service: 'Bill Payment (Bharat Bill Pay)', charge: 'NIL', frequency: 'Per transaction' },
    { service: 'FASTag Issuance', charge: '₹100 + GST', frequency: 'One-time' },
    { service: 'Digital Locker', charge: 'NIL', frequency: 'Annual' },
  ]

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Service Charges</h1>
          <p className="text-xl text-orange-100">
            Complete schedule of charges for all banking services
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
                    Charge
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Frequency
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {accountCharges.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.charge}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.frequency}
                    </td>
                  </tr>
                ))}
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
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Charge
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Frequency
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactionCharges.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.charge}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.frequency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Related Charges</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Charge
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Frequency
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loanCharges.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.charge}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.frequency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Digital Banking Charges</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Charge
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Frequency
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {digitalCharges.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.charge}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.frequency}
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
              <h3 className="text-lg font-semibold text-blue-900 mb-2">GST Applicable</h3>
              <p className="text-blue-800">
                All charges mentioned are exclusive of GST. Applicable GST will be charged as per government rates.
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Waiver for Senior Citizens</h3>
              <p className="text-green-800">
                Senior citizens (60 years and above) get waiver on certain charges. Contact branch for details.
              </p>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Changes in Charges</h3>
              <p className="text-yellow-800">
                Service charges are subject to change. Customers will be informed of any changes through proper channels.
              </p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Dispute Resolution</h3>
              <p className="text-red-800">
                For any disputes regarding charges, please contact our grievance cell or RBI Ombudsman.
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
                <p>For any queries about service charges:</p>
                <p className="font-medium">Phone: 1800-123-4567 (Toll-Free)</p>
                <p className="font-medium">Email: charges@mnsbank.com</p>
                <p className="font-medium">Visit: Your nearest branch</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full">
                  Download Charge Schedule
                </Button>
                <Button variant="outline" className="w-full">
                  Check Account Charges
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
