import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function HomeLoanPage() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          Make your dream home a reality with MNS Bank's affordable home loans. We offer competitive interest rates and flexible repayment options to suit your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold">New Home Purchase</h4>
            <p className="text-sm text-gray-600">Buy your dream house with our competitive rates</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold">Home Construction</h4>
            <p className="text-sm text-gray-600">Build your home on your own plot of land</p>
          </div>
        </div>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features & Benefits</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Attractive interest rates starting from 8.35%</li>
          <li>Flexible repayment tenure up to 30 years</li>
          <li>Minimal documentation and fast processing</li>
          <li>No hidden charges</li>
          <li>Balance transfer facility available</li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Resident Indians and NRIs</li>
          <li>Salaried individuals, professionals, and self-employed</li>
          <li>Minimum age: 21 years</li>
          <li>Maximum age: 65 years at the time of maturity</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Completed application form with photographs</li>
          <li>Identity and Address Proof (Aadhaar, PAN, etc.)</li>
          <li>Last 6 months' bank statements</li>
          <li>Salary slips / Income Tax Returns</li>
          <li>Property documents</li>
        </ul>
      </div>
    ),
    inquiry: <InquiryForm type="inquiry" product="Home Loan" />
  }

  const kfsData = {
    indicativeRate: "8.35% - 9.50% p.a.",
    processingFee: "0.25% - 0.50% of loan amount",
    repaymentTenure: "Up to 30 years",
    monthlyEmi: "₹7,584 (for ₹10 Lakh @ 8.35% for 30 years)",
    totalCost: "₹27,30,240",
    prepaymentCharges: "Nil for floating rate loans"
  }

  const relatedProducts = [
    { name: 'Personal Loan', href: '/personal-loan', category: 'Personal' },
    { name: 'Gold Loan', href: '/gold-loan', category: 'Personal' },
    { name: 'Deposits', href: '/deposits', category: 'Personal' }
  ]

  return (
    <ProductPageShell
      title="Home Loan"
      subtitle="Your path to a perfect home"
      description="Affordable financing solutions for purchasing, constructing, or renovating your dream house."
      category="personal"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
      relatedProducts={relatedProducts}
    />
  )
}
