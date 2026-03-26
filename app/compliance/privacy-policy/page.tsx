import { Button } from '@/components/ui/button'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-purple-100">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="text-sm text-gray-500 mb-4">
            Last updated: January 15, 2024
          </div>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-6">
              Mahanagar Nagrik Sahakari Bank Ltd. ("MNS Bank", "we", "us", or "our") is committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our banking services, 
              website, mobile applications, or interact with us in other ways.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <div className="space-y-4 text-gray-600">
              <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, address, email address, phone number</li>
                <li>Date of birth, PAN, Aadhaar number, government-issued IDs</li>
                <li>Employment details, income information</li>
                <li>Family members and nominees information</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">Financial Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account numbers, credit/debit card details</li>
                <li>Transaction history and patterns</li>
                <li>Credit score and credit history</li>
                <li>Loan details and repayment history</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">Technical Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address, device information, browser details</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Usage data and browsing behavior</li>
                <li>Location data (when provided by you)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <div className="space-y-4 text-gray-600">
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain banking services</li>
                <li>To process transactions and manage accounts</li>
                <li>To assess creditworthiness and manage risk</li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To prevent fraud and protect against unauthorized access</li>
                <li>To improve our services and develop new products</li>
                <li>To communicate with you about your accounts and services</li>
                <li>To send marketing communications (with your consent)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <div className="space-y-4 text-gray-600">
              <p>We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With RBI and other regulatory authorities as required</li>
                <li>With credit bureaus for credit assessment</li>
                <li>With law enforcement agencies for legal compliance</li>
                <li>With service providers who assist in our operations</li>
                <li>With our subsidiaries and affiliates for service delivery</li>
                <li>With third parties in case of business transfer or merger</li>
              </ul>
              <p>We do not sell your personal information to third parties for marketing purposes.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <div className="space-y-4 text-gray-600">
              <p>We implement appropriate security measures to protect your information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure servers and data centers with restricted access</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection and privacy</li>
                <li>Incident response procedures for data breaches</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <div className="space-y-4 text-gray-600">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Restriction of processing in certain circumstances</li>
                <li>Objection to processing for direct marketing</li>
                <li>Data portability where technically feasible</li>
                <li>Right to be forgotten in certain circumstances</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <div className="space-y-4 text-gray-600">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website usage and improve performance</li>
                <li>Provide personalized content and services</li>
                <li>Enhance security and prevent fraud</li>
              </ul>
              <p>You can control cookies through your browser settings.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <div className="space-y-4 text-gray-600">
              <p>Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children. 
              If we become aware that we have collected personal information from a child, we will take steps to delete such information.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <div className="space-y-4 text-gray-600">
              <p>Your personal information is primarily stored and processed within India. We may transfer data internationally only when:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Required for service delivery</li>
                <li>Necessary for regulatory compliance</li>
                <li>You have provided explicit consent</li>
                <li>Adequate protection measures are in place</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <div className="space-y-4 text-gray-600">
              <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications to registered customers</li>
                <li>Displaying notices in our branches and mobile apps</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="space-y-4 text-gray-600">
              <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Data Protection Officer</strong></p>
                <p>Mahanagar Nagrik Sahakari Bank Ltd.</p>
                <p>MP Nagar, Bhopal - 462016</p>
                <p>Madhya Pradesh, India</p>
                <p>Email: privacy@mnsbank.com</p>
                <p>Phone: 1800-123-4567 (Toll-Free)</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <p>© 2024 Mahanagar Nagrik Sahakari Bank Ltd. All rights reserved.</p>
              </div>
              <div className="space-x-4">
                <Button variant="outline" size="sm">
                  Download PDF
                </Button>
                <Button variant="outline" size="sm">
                  Print
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
