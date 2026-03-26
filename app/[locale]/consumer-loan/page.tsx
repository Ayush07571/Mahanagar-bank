import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function ConsumerLoanPage() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          Upgrade your lifestyle with MNS Bank's Consumer Durable Loan. Purchase electronics, home appliances, and furniture with easy monthly installments.
        </p>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Loans for a wide range of consumer durables</li>
          <li>Instant approval and on-the-spot disbursement</li>
          <li>Minimal down payment</li>
          <li>Flexible EMI options</li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Salaried or self-employed individuals</li>
          <li>Age: 21 to 60 years</li>
          <li>Stable source of income</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>KYC documents (Aadhaar, PAN)</li>
          <li>Address proof</li>
          <li>Income proof / Salary slip</li>
          <li>Cancelled cheque</li>
        </ul>
      </div>
    ),
    inquiry: <InquiryForm type="inquiry" product="Consumer Durable Loan" />
  }

  const kfsData = {
    indicativeRate: "12.00% - 15.00% p.a.",
    processingFee: "₹500 - ₹1,500",
    repaymentTenure: "Up to 3 years",
    monthlyEmi: "₹3,321 (per ₹1 Lakh @ 12% for 3 years)",
    totalCost: "₹1,19,556 (per ₹1 Lakh)",
    prepaymentCharges: "2% of outstanding amount"
  }

  return (
    <ProductPageShell
      title="Consumer Durable Loan"
      subtitle="Easy EMIs for your home needs"
      description="Financing for electronics, appliances, and more with quick processing."
      category="personal"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
    />
  )
}
