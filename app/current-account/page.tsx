import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { Button } from '@/components/ui/button'

export default function CurrentAccount() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <div className="prose max-w-none text-gray-600">
          <p>
            Our Current Account is designed for businesses and professionals who need efficient banking solutions. 
            With unlimited transactions and comprehensive digital banking features, it's perfect for your day-to-day business operations.
          </p>
        </div>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">Free</div>
            <div className="text-gray-600">NEFT/RTGS/IMPS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">Unlimited</div>
            <div className="text-gray-600">Transactions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Internet Banking</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">Free</div>
            <div className="text-gray-600">Debit Card</div>
          </div>
        </div>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Registered business entity</li>
          <li>• Valid business registration documents</li>
          <li>• PAN and GST registration</li>
          <li>• Proprietor/partnership/director identity proof</li>
          <li>• Business address proof</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Documents</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Business registration certificate</li>
          <li>• PAN card of business and proprietor</li>
          <li>• GST registration certificate</li>
          <li>• Address proof of business premises</li>
          <li>• Identity proof of authorized signatories</li>
          <li>• Partnership deed/MOA/AOA (if applicable)</li>
        </ul>
      </div>
    ),
    apply: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Open Current Account</h3>
        <div className="space-y-4">
          <p className="text-gray-600">
            Start your business banking journey with MNS Bank
          </p>
          <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium">
            Apply Online
          </Button>
          <Button variant="outline" className="w-full">
            Schedule Appointment
          </Button>
        </div>
      </div>
    )
  }

  const relatedProducts = [
    {
      name: 'Business Loans',
      href: '/business-banking/biz-loans',
      category: 'Business Banking'
    },
    {
      name: 'Trade Finance',
      href: '/business-banking/trade-finance',
      category: 'Business Banking'
    },
    {
      name: 'Cash Management',
      href: '/business-banking/cash-management',
      category: 'Business Banking'
    }
  ]

  return (
    <ProductPageShell
      title="Current Account"
      subtitle="Efficient banking for your business needs"
      description="Current accounts for small businesses, professionals, and enterprises with unlimited transactions and comprehensive digital banking features"
      category="business"
      productType="account"
      tabs={tabs}
      relatedProducts={relatedProducts}
    />
  )
}
