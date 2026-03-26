import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function SelfEmployedLoanPage() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          Fuel your entrepreneurial journey with MNS Bank's Self-Employed Loan. We support small businesses and traders with easy credit facilities.
        </p>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Loan for business expansion, stock purchase, or renovation</li>
          <li>Flexible collateral requirements</li>
          <li>Competitive interest rates</li>
          <li>Minimal documentation</li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Proprietors, traders, and small business owners</li>
          <li>Business vintage of at least 3 years</li>
          <li>Profitable operations for the last 2 years</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Business registration proof (GST/Gumasta)</li>
          <li>ITR and financial statements for 2 years</li>
          <li>Bank statement for 12 months</li>
          <li>KYC of the proprietor</li>
        </ul>
      </div>
    ),
    inquiry: <InquiryForm type="inquiry" product="Self-Employed Loan" />
  }

  const kfsData = {
    indicativeRate: "12.00% - 14.50% p.a.",
    processingFee: "1.00% of loan amount",
    repaymentTenure: "Up to 5 years",
    monthlyEmi: "₹2,224 (per ₹1 Lakh @ 12% for 5 years)",
    totalCost: "₹1,33,440 (per ₹1 Lakh)",
    prepaymentCharges: "2% of principal outstanding"
  }

  return (
    <ProductPageShell
      title="Self-Employed Loan"
      subtitle="Empowering local businesses"
      description="Quick and flexible loans for self-employed individuals to grow their business."
      category="business"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
    />
  )
}
