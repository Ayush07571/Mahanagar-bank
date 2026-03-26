import { Button } from '@/components/ui/button'

export default function KycCkyc() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">KYC / CKYC</h1>
          <p className="text-xl text-green-100">
            Know Your Customer and Central KYC Registry information
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What is KYC?</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Know Your Customer (KYC) is a process where a bank verifies and identifies customers to prevent fraud, 
                  money laundering, and other illegal activities. KYC is mandatory for all banking relationships as per RBI guidelines.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">KYC Requirements:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identity proof (Aadhaar, PAN, Passport, etc.)</li>
                  <li>Address proof (Utility bills, rent agreement, etc.)</li>
                  <li>Recent photograph</li>
                  <li>Signature verification</li>
                  <li>Income proof for certain products</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What is CKYC?</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Central KYC (CKYC) is a centralized KYC registry maintained by CERSAI (Central Registry of Securitisation 
                  Asset Reconstruction and Security Interest of India). Once you complete CKYC, you don't need to repeat KYC 
                  for multiple financial institutions.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">CKYC Benefits:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>One-time KYC for multiple financial institutions</li>
                  <li>Digital and paperless process</li>
                  <li>Instant verification with CKYC number</li>
                  <li>Reduced paperwork and faster onboarding</li>
                  <li>Secure and centralized data management</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">KYC Documents Required</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">For Individuals</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• PAN Card (mandatory)</li>
                    <li>• Aadhaar Card</li>
                    <li>• Passport/Driving License/Voter ID</li>
                    <li>• Recent passport size photograph</li>
                    <li>• Address proof (if different from ID)</li>
                    <li>• Signature on white paper</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">For Businesses</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• PAN of the entity</li>
                    <li>• GST Registration Certificate</li>
                    <li>• Certificate of Incorporation</li>
                    <li>• MOA/AOA/Partnership Deed</li>
                    <li>• Address proof of business</li>
                    <li>• Identity proof of authorized signatories</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">KYC Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">1️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Submit Documents</h3>
                  <p className="text-gray-600">Provide required KYC documents</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">2️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Verification</h3>
                  <p className="text-gray-600">Bank verifies submitted documents</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">3️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">CKYC Registration</h3>
                  <p className="text-gray-600">Data uploaded to CKYC registry</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">4️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Account Opening</h3>
                  <p className="text-gray-600">Account opened with KYC completion</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete KYC Online</h3>
              <p className="text-gray-600 mb-6">
                Complete your KYC process online in minutes
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium mb-4">
                Start KYC Process
              </Button>
              <Button variant="outline" className="w-full mb-4">
                Check CKYC Status
              </Button>
              <Button variant="outline" className="w-full">
                Download KYC Form
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">KYC Updates</h3>
              <p className="text-gray-600 mb-4">
                Update your KYC information when needed
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Address Change</span>
                  <Button size="sm" variant="outline">Update</Button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Mobile Number</span>
                  <Button size="sm" variant="outline">Update</Button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Email Address</span>
                  <Button size="sm" variant="outline">Update</Button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Nominee Details</span>
                  <Button size="sm" variant="outline">Update</Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>Need help with KYC process?</p>
                <p className="font-medium">KYC Helpdesk: 1800-123-4567</p>
                <p className="font-medium">Email: kyc@mnsbank.com</p>
                <Button className="w-full mt-4">
                  Contact KYC Support
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">KYC Validity</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• KYC is valid for 10 years for individuals</li>
                <li>• Periodic updates may be required</li>
                <li>• High-risk transactions may need re-KYC</li>
                <li>• Inactive accounts may require fresh KYC</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security & Privacy</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Your data is encrypted and secure</li>
                <li>• Information shared only with authorized entities</li>
                <li>• Compliance with data protection laws</li>
                <li>• Right to access and correct your data</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
