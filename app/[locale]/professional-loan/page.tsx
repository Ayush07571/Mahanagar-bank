import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function ProfessionalLoanPage() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          Specialized financial solutions for Doctors, Chartered Accountants, Architects, and other professionals to set up or expand their practice.
        </p>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>No collateral required for specified limits</li>
          <li>Attractive interest rates for professionals</li>
          <li>Funds for clinic/office setup, equipment, or working capital</li>
          <li>Flexible repayment options</li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Qualified professionals (MBBS, CA, CS, ICWA, etc.)</li>
          <li>Minimum 3 years of post-qualification experience</li>
          <li>Resident of Bhopal</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Professional qualification certificates</li>
          <li>Practice certificate / License</li>
          <li>ITR for the last 2 years</li>
          <li>Bank statement for 6 months</li>
        </ul>
      </div>
    ),
    inquiry: <InquiryForm type="inquiry" product="Professional Loan" />
  }

  const kfsData = {
    indicativeRate: "11.00% - 13.00% p.a.",
    processingFee: "0.50% - 1.00% of loan amount",
    repaymentTenure: "Up to 7 years",
    monthlyEmi: "₹1,712 (per ₹1 Lakh @ 11% for 7 years)",
    totalCost: "₹1,43,808 (per ₹1 Lakh)",
    prepaymentCharges: "Nil"
  }

  return (
    <ProductPageShell
      title="Professional Loan"
      subtitle="Financial support for your expertise"
      description="Customized loan products designed specifically for the needs of qualified professionals."
      category="business"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
    />
  )
}
