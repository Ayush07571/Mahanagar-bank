import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function HouseConstructionLoanPage() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          Build your home on your own plot of land with MNS Bank's House Construction Loan. We provide funds in stages based on the progress of construction.
        </p>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Disbursement in stages as per construction progress</li>
          <li>Attractive interest rates</li>
          <li>Technical guidance and estimation support</li>
          <li>Tenure up to 20 years</li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Individual owning a residential plot</li>
          <li>Approved building plan</li>
          <li>Salaried or self-employed with stable income</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Property title deeds</li>
          <li>Approved building plan and estimate</li>
          <li>KYC documents</li>
          <li>Income proof (Salary slips / ITR)</li>
        </ul>
      </div>
    ),
    inquiry: <InquiryForm type="inquiry" product="House Construction Loan" />
  }

  const kfsData = {
    indicativeRate: "8.50% - 9.75% p.a.",
    processingFee: "0.50% of loan amount",
    repaymentTenure: "Up to 20 years",
    monthlyEmi: "₹868 (per ₹1 Lakh @ 8.5% for 20 years)",
    totalCost: "₹2,08,320 (per ₹1 Lakh)",
    prepaymentCharges: "Nil for floating rate"
  }

  return (
    <ProductPageShell
      title="House Construction Loan"
      subtitle="Build your home, your way"
      description="Stage-wise financing for constructing your dream house on your own land."
      category="personal"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
    />
  )
}
