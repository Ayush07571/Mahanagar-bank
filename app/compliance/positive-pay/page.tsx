import { Button } from '@/components/ui/button'

export default function PositivePaySystem() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Positive Pay System</h1>
          <p className="text-xl text-blue-100">
            Enhance cheque security with RBI's Positive Pay System
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What is Positive Pay System?</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Positive Pay System is a fraud prevention mechanism introduced by RBI to enhance the security of cheque payments. 
                  Under this system, account holders can reconfirm key details of high-value cheques before they are presented for payment.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">How It Works:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Customer submits cheque details to bank before presentation</li>
                  <li>Bank verifies the details when cheque is presented for payment</li>
                  <li>Cheque is honored only if details match</li>
                  <li>Suspicious cheques are flagged for verification</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Positive Pay</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fraud Prevention</h3>
                  <p className="text-gray-600">Reduces cheque fraud and unauthorized transactions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✅</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Enhanced Security</h3>
                  <p className="text-gray-600">Multi-layer verification for high-value cheques</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Real-time Monitoring</h3>
                  <p className="text-gray-600">Instant verification and alert system</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Peace of Mind</h3>
                  <p className="text-gray-600">Secure transactions for businesses and individuals</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cheque Details Required</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Mandatory Information:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-blue-800">
                    <li>Account number</li>
                    <li>Cheque number</li>
                    <li>Cheque date</li>
                    <li>Payee name</li>
                    <li>Cheque amount</li>
                    <li>Minimum amount threshold: ₹50,000</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Submission Methods:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-green-800">
                    <li>Internet Banking portal</li>
                    <li>Mobile Banking app</li>
                    <li>Branch visit with physical cheque</li>
                    <li>SMS banking (for registered users)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">1️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Register</h3>
                  <p className="text-gray-600">Register for Positive Pay through net banking</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">2️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Submit Cheque</h3>
                  <p className="text-gray-600">Enter cheque details before issuing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">3️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Verification</h3>
                  <p className="text-gray-600">Bank verifies details on presentation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">4️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Secure Payment</h3>
                  <p className="text-gray-600">Cheque honored if details match</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Register for Positive Pay</h3>
              <p className="text-gray-600 mb-6">
                Protect your high-value cheques with Positive Pay
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium mb-4">
                Register Now
              </Button>
              <Button variant="outline" className="w-full mb-4">
                Submit Cheque
              </Button>
              <Button variant="outline" className="w-full">
                Check Status
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Information</h3>
              <div className="space-y-3 text-gray-600">
                <div className="bg-yellow-50 p-3 rounded text-sm">
                  <strong>Threshold:</strong> ₹50,000 and above
                </div>
                <div className="bg-blue-50 p-3 rounded text-sm">
                  <strong>Timing:</strong> Submit before cheque issuance
                </div>
                <div className="bg-green-50 p-3 rounded text-sm">
                  <strong>Validity:</strong> 6 months from registration
                </div>
                <div className="bg-red-50 p-3 rounded text-sm">
                  <strong>Charges:</strong> As per bank's schedule
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  View Registered Cheques
                </Button>
                <Button variant="outline" className="w-full">
                  Download Guide
                </Button>
                <Button variant="outline" className="w-full">
                  Check Charges
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>Need help with Positive Pay registration?</p>
                <p className="font-medium">Helpdesk: 1800-123-4567</p>
                <p className="font-medium">Email: positivepay@mnsbank.com</p>
                <Button className="w-full mt-4">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is Positive Pay mandatory?</h3>
              <p className="text-gray-600">
                Positive Pay is mandatory for cheques of ₹50,000 and above. For cheques below this amount, it's optional but recommended.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if details don't match?</h3>
              <p className="text-gray-600">
                If cheque details don't match the registered information, the bank will contact the account holder for verification before honoring the cheque.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I modify registered details?</h3>
              <p className="text-gray-600">
                Yes, you can modify or cancel registered cheque details through net banking or by visiting the branch before the cheque is presented.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there any charge for Positive Pay?</h3>
              <p className="text-gray-600">
                Nominal charges apply as per the bank's schedule of charges. Please check the latest fee structure for details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
