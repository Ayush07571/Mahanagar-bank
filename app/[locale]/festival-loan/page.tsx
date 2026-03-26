import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function FestivalLoanPage() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          Celebrate every occasion with joy. MNS Bank's Festival Loan provides the extra funds you need for shopping, home decoration, and celebrations during the festive season.
        </p>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Special interest rates during festive seasons</li>
          <li>Quick processing and disbursement</li>
          <li>Minimal documentation</li>
          <li>Loan amount up to ₹2 Lakhs</li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Salaried individuals with a steady job</li>
          <li>Existing customers with good track record</li>
          <li>Minimum monthly income: ₹15,000</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>KYC documents</li>
          <li>Latest salary slip</li>
          <li>Bank statement for 3 months</li>
        </ul>
      </div>
    ),
    inquiry: <InquiryForm type="inquiry" product="Festival Loan" />
  }

  const kfsData = {
    indicativeRate: "11.50% - 13.00% p.a.",
    processingFee: "₹500 flat",
    repaymentTenure: "Up to 12 months",
    monthlyEmi: "₹8,862 (per ₹1 Lakh @ 11.5% for 12 months)",
    totalCost: "₹1,06,344 (per ₹1 Lakh)",
    prepaymentCharges: "Nil"
  }

  return (
    <ProductPageShell
      title="Festival Loan"
      subtitle="Spread the cheer this season"
      description="Quick loans to meet your festive expenses and make celebrations memorable."
      category="personal"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
    />
  )
}
