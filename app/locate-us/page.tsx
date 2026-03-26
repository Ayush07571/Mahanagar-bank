import { Button } from '@/components/ui/button'

export default function LocateUs() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Branch & ATM Locator</h1>
          <p className="text-xl text-blue-100">
            Find our branches and ATMs near you
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Locations</h2>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Search by location, branch name, or area..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex space-x-4">
                  <Button className="flex-1">Search</Button>
                  <Button variant="outline" className="flex-1">Use Current Location</Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Filter Results</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location Type</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span>Branches</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span>ATMs</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Services</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>24/7 ATM</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Locker Facility</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Foreign Exchange</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Results</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">Head Office</h3>
                      <p className="text-gray-600">MP Nagar, Bhopal</p>
                      <p className="text-sm text-gray-500">Main Branch • Locker • Forex • 24/7 ATM</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">2.5 km away</p>
                      <Button size="sm" className="mt-2">Get Directions</Button>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">New Market Branch</h3>
                      <p className="text-gray-600">New Market, Bhopal</p>
                      <p className="text-sm text-gray-500">Personal Banking • Business Banking • ATM</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">3.1 km away</p>
                      <Button size="sm" className="mt-2">Get Directions</Button>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">Habibganj ATM</h3>
                      <p className="text-gray-600">Habibganj, Bhopal</p>
                      <p className="text-sm text-gray-500">24/7 ATM • Cash Deposit</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">4.2 km away</p>
                      <Button size="sm" className="mt-2">Get Directions</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  All Branches
                </Button>
                <Button variant="outline" className="w-full">
                  All ATMs
                </Button>
                <Button variant="outline" className="w-full">
                  24/7 ATMs
                </Button>
                <Button variant="outline" className="w-full">
                  Branches with Locker
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>Need help finding a branch?</p>
                <p className="font-medium">Call: 1800-123-4567</p>
                <p className="font-medium">Email: support@mnsbank.com</p>
                <Button className="w-full mt-4">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
