import { Button } from '@/components/ui/button'

export default function CyberAwareness() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Cyber Security & Fraud Awareness</h1>
          <p className="text-xl text-red-100">
            Stay safe online with our comprehensive cyber security guide
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Cyber Threats</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phishing Attacks</h3>
                  <p className="text-gray-600 mb-3">
                    Fraudulent emails or messages designed to trick you into revealing personal information
                  </p>
                  <div className="bg-red-50 p-3 rounded text-sm text-red-800">
                    <strong>Warning:</strong> Never click on suspicious links or provide personal details via email
                  </div>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Vishing & Smishing</h3>
                  <p className="text-gray-600 mb-3">
                    Voice and SMS-based scams attempting to obtain sensitive information
                  </p>
                  <div className="bg-orange-50 p-3 rounded text-sm text-orange-800">
                    <strong>Remember:</strong> MNS Bank never asks for OTP, passwords, or PIN over phone/SMS
                  </div>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ATM/Card Skimming</h3>
                  <p className="text-gray-600 mb-3">
                    Devices installed on ATMs or POS machines to capture card data
                  </p>
                  <div className="bg-yellow-50 p-3 rounded text-sm text-yellow-800">
                    <strong>Tip:</strong> Always check ATM machines for suspicious devices before use
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Malware & Ransomware</h3>
                  <p className="text-gray-600 mb-3">
                    Malicious software that can steal data or lock your device
                  </p>
                  <div className="bg-green-50 p-3 rounded text-sm text-green-800">
                    <strong>Protection:</strong> Use antivirus software and keep it updated
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Best Practices</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Online Banking Security</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use strong, unique passwords</li>
                    <li>• Enable two-factor authentication</li>
                    <li>• Never share login credentials</li>
                    <li>• Log out after each session</li>
                    <li>• Use official banking apps only</li>
                    <li>• Avoid public WiFi for banking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Card Security</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Never share card details</li>
                    <li>• Cover PIN when entering</li>
                    <li>• Report lost cards immediately</li>
                    <li>• Set transaction limits</li>
                    <li>• Monitor statements regularly</li>
                    <li>• Use secure websites only</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Identifying Fraudulent Communications</h2>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Red Flags to Watch For:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-red-800">
                    <li>Urgent requests for immediate action</li>
                    <li>Threats of account suspension</li>
                    <li>Requests for OTP, password, or PIN</li>
                    <li>Unsolicited prize money offers</li>
                    <li>Generic greetings ("Dear Customer")</li>
                    <li>Spelling and grammar errors</li>
                    <li>Suspicious email addresses</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Do If You're a Victim</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">1️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Report Immediately</h3>
                  <p className="text-gray-600">Contact bank and report the incident</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">2️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Block Cards</h3>
                  <p className="text-gray-600">Block all cards and change passwords</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">3️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">File Police Complaint</h3>
                  <p className="text-gray-600">Report to cyber crime cell</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">4️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Monitor Accounts</h3>
                  <p className="text-gray-600">Watch for suspicious activities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Contacts</h3>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Report Fraud</h4>
                  <div className="text-red-800">
                    <p className="font-medium">24/7 Helpline: 1930</p>
                    <p className="font-medium">Bank Fraud: 1800-123-4567</p>
                    <p className="font-medium">Cyber Crime: 1930</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Block Cards</h4>
                  <div className="text-blue-800">
                    <p className="font-medium">Card Blocking: 1800-234-5678</p>
                    <p className="font-medium">Net Banking: 1800-345-6789</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Tools</h3>
              <div className="space-y-3">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Report Fraud
                </Button>
                <Button variant="outline" className="w-full">
                  Block Card
                </Button>
                <Button variant="outline" className="w-full">
                  Security Checklist
                </Button>
                <Button variant="outline" className="w-full">
                  Download Security Guide
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-4">
                Get latest security alerts and tips
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 border border-gray-300 rounded-md" />
                  <Button size="sm">Subscribe</Button>
                </div>
                <div className="text-sm text-gray-500">
                  <p>We respect your privacy. Unsubscribe anytime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Security Reminders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">MNS Bank Never Asks</h3>
              <p className="text-gray-600 text-sm">
                OTP, passwords, PIN, CVV, or card details over phone/email/SMS
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Verify Before Trusting</h3>
              <p className="text-gray-600 text-sm">
                Always verify caller identity and cross-check with official sources
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Stay Protected</h3>
              <p className="text-gray-600 text-sm">
                Use updated antivirus, strong passwords, and secure networks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
