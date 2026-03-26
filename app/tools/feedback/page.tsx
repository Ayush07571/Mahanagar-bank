import { InquiryForm } from '@/components/forms/InquiryForm'

export default function Feedback() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Feedback & Complaints</h1>
          <p className="text-xl text-green-100">
            We value your feedback and take your complaints seriously
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Share Your Feedback</h2>
            <InquiryForm type="feedback" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">File a Complaint</h2>
            <InquiryForm type="complaint" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Feedback Process</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Submit Feedback</h3>
                  <p className="text-gray-600">Fill out the feedback form with your suggestions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Review Process</h3>
                  <p className="text-gray-600">Our team reviews and analyzes your feedback</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Implementation</h3>
                  <p className="text-gray-600">Valuable feedback is implemented to improve services</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Follow-up</h3>
                  <p className="text-gray-600">We follow up on implemented changes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complaint Resolution</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">File Complaint</h3>
                  <p className="text-gray-600">Submit your complaint with details</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Acknowledgment</h3>
                  <p className="text-gray-600">Receive immediate acknowledgment with reference number</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Investigation</h3>
                  <p className="text-gray-600">Our team investigates the issue within 48 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Resolution</h3>
                  <p className="text-gray-600">We resolve and communicate the solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Feedback Guidelines</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Be specific and constructive</li>
                <li>• Provide relevant details</li>
                <li>• Include suggestions for improvement</li>
                <li>• Maintain professional tone</li>
                <li>• Focus on service quality</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Complaint Guidelines</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Provide clear description of issue</li>
                <li>• Include date and time of incident</li>
                <li>• Mention involved parties</li>
                <li>• Attach supporting documents</li>
                <li>• Keep reference number for follow-up</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Feedback Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>For feedback related queries:</p>
                <p className="font-medium">Phone: 1800-123-4567</p>
                <p className="font-medium">Email: feedback@mnsbank.com</p>
                <p className="font-medium">Available 9 AM - 6 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Complaint Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>For complaint related queries:</p>
                <p className="font-medium">Phone: 1800-234-5678</p>
                <p className="font-medium">Email: complaints@mnsbank.com</p>
                <p className="font-medium">Available 24/7</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Escalation</h3>
              <div className="space-y-3 text-gray-600">
                <p>If not satisfied with resolution:</p>
                <p className="font-medium">Nodal Officer: 1800-345-6789</p>
                <p className="font-medium">RBI Ombudsman: 1800-425-0018</p>
                <p className="font-medium">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
