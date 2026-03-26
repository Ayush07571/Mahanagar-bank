import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function CarLoanPage() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          Drive home your dream car with MNS Bank's flexible car loans. We provide financing for both new and used cars with attractive interest rates and easy repayment options.
        </p>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Loan up to 90% of the on-road price</li>
          <li>Repayment tenure up to 7 years</li>
          <li>Quick processing and minimal documentation</li>
          <li>No hidden charges</li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Salaried individuals, self-employed professionals, and businessmen</li>
          <li>Minimum age: 21 years</li>
          <li>Minimum annual income: ₹2.5 Lakhs</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>KYC documents (Aadhaar, PAN, etc.)</li>
          <li>Income proof (Salary slips / ITR)</li>
          <li>Bank statements for the last 6 months</li>
          <li>Proforma Invoice of the car</li>
        </ul>
      </div>
    ),
    inquiry: <InquiryForm type="inquiry" product="Car Loan" />
  }

  const kfsData = {
    indicativeRate: "9.00% - 11.00% p.a.",
    processingFee: "₹1,000 - ₹3,000",
    repaymentTenure: "Up to 7 years",
    monthlyEmi: "₹1,609 (per ₹1 Lakh @ 9% for 7 years)",
    totalCost: "₹1,35,156 (per ₹1 Lakh)",
    prepaymentCharges: "Nil for floating rate"
  }

  return (
    <ProductPageShell
      title="Car Loan"
      subtitle="Your dream car is just a loan away"
      description="Affordable car loans for new and pre-owned vehicles with competitive interest rates."
      category="personal"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
    />
  )
}
