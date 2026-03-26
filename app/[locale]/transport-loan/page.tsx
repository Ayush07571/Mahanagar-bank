import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function TransportLoanPage() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          Accelerate your transport business with MNS Bank's Transport Loan. We provide financing for commercial vehicles including trucks, buses, and taxis.
        </p>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Financing for new and used commercial vehicles</li>
          <li>Competitive interest rates</li>
          <li>Repayment tenure up to 5 years</li>
          <li>Quick loan processing</li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Transport operators, firms, and companies</li>
          <li>Minimum 2 years of experience in transport business</li>
          <li>Valid driving license and permits</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>KYC of promoters/firm</li>
          <li>Business proof and permits</li>
          <li>Bank statements for 6 months</li>
          <li>Proforma invoice of the vehicle</li>
        </ul>
      </div>
    ),
    inquiry: <InquiryForm type="inquiry" product="Transport Loan" />
  }

  const kfsData = {
    indicativeRate: "10.50% - 13.50% p.a.",
    processingFee: "1.00% of loan amount",
    repaymentTenure: "Up to 5 years",
    monthlyEmi: "₹2,149 (per ₹1 Lakh @ 10.5% for 5 years)",
    totalCost: "₹1,28,940 (per ₹1 Lakh)",
    prepaymentCharges: "2% of principal outstanding"
  }

  return (
    <ProductPageShell
      title="Transport Loan"
      subtitle="Financing for your commercial fleet"
      description="Tailored loans for transport operators to purchase new or used commercial vehicles."
      category="business"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
    />
  )
}
