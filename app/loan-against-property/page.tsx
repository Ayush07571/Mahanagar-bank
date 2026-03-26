import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function LoanAgainstPropertyPage() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          Unlock the value of your property with MNS Bank's Loan Against Property (LAP). Use the funds for business needs, education, medical expenses, or any other personal requirement.
        </p>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>High loan amounts based on property value</li>
          <li>Lower interest rates compared to personal loans</li>
          <li>Longer repayment tenure up to 15 years</li>
          <li>Both residential and commercial properties accepted</li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Property owners (Residential / Commercial)</li>
          <li>Salaried or self-employed individuals</li>
          <li>Age: 21 to 65 years</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Original property documents</li>
          <li>Latest tax receipts</li>
          <li>KYC documents</li>
          <li>Income proof (ITR / Audited financials)</li>
        </ul>
      </div>
    ),
    inquiry: <InquiryForm type="inquiry" product="Loan Against Property" />
  }

  const kfsData = {
    indicativeRate: "10.00% - 12.00% p.a.",
    processingFee: "1.00% of loan amount",
    repaymentTenure: "Up to 15 years",
    monthlyEmi: "₹1,075 (per ₹1 Lakh @ 10% for 15 years)",
    totalCost: "₹1,93,500 (per ₹1 Lakh)",
    prepaymentCharges: "2% - 4% for fixed rate loans"
  }

  return (
    <ProductPageShell
      title="Loan Against Property"
      subtitle="Liquidate the value of your property"
      description="Multipurpose loan secured by your residential or commercial property."
      category="personal"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
    />
  )
}
