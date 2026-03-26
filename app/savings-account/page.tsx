import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { Button } from '@/components/ui/button'

export default function SavingsAccount() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <div className="prose max-w-none text-gray-600">
          <p>
            Our Savings Account is designed to help you grow your money while providing easy access to your funds. 
            With competitive interest rates and flexible features, it's the perfect choice for your everyday banking needs.
          </p>
        </div>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features & Benefits</h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Competitive interest rates
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Zero balance maintenance options
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Free debit card with account opening
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            24/7 mobile and internet banking
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Easy online account opening
          </li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Age: 18 years and above</li>
          <li>• Valid ID and address proof</li>
          <li>• PAN card (mandatory)</li>
          <li>• Passport size photographs</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Documents</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Aadhaar Card or Voter ID</li>
          <li>• PAN Card</li>
          <li>• Passport size photographs (2)</li>
          <li>• Address proof (latest utility bill)</li>
          <li>• Signature proof</li>
        </ul>
      </div>
    ),
    apply: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Apply Now</h3>
        <div className="space-y-4">
          <p className="text-gray-600">
            Start your savings journey with MNS Bank today
          </p>
          <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium">
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
      name: 'Fixed Deposits',
      href: '/personal-banking/fixed-deposits',
      category: 'Personal Banking'
    },
    {
      name: 'Personal Loan',
      href: '/personal-banking/personal-loan',
      category: 'Personal Banking'
    },
    {
      name: 'Debit Cards',
      href: '/personal-banking/debit-cards',
      category: 'Personal Banking'
    }
  ]

  return (
    <ProductPageShell
      title="Savings Account"
      subtitle="Grow your money with competitive interest rates"
      description="Secure your future with our range of savings accounts designed for your personal financial needs"
      category="personal"
      productType="account"
      tabs={tabs}
      relatedProducts={relatedProducts}
    />
  )
}
