import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function GoldLoanPage() {
  return (
    <ProductPageShell
      title="Gold Loan"
      subtitle="Quick funds against your gold ornaments"
      description="Get instant financial assistance by pledging your gold jewelry. Hassle-free processing with minimal documentation."
      category="personal"
      productType="loan"
      tabs={{
        overview: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-600 mb-4">
              MNS Bank's Gold Loan is a convenient way to meet your immediate financial needs, whether it's for business expansion, education, medical emergencies, or any other personal requirement.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Instant loan sanction and disbursement</li>
              <li>Competitive interest rates</li>
              <li>Minimal documentation required</li>
              <li>Safe and secure storage of gold ornaments</li>
            </ul>
          </div>
        ),
        features: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>High loan-to-value (LTV) ratio</li>
              <li>Flexible repayment options</li>
              <li>No hidden charges</li>
              <li>Part-payment facility available</li>
            </ul>
          </div>
        ),
        eligibility: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Any individual (resident Indian) owning gold ornaments</li>
              <li>Minimum age: 18 years</li>
              <li>Maximum age: 70 years</li>
            </ul>
          </div>
        ),
        documents: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Documents Required</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Identity Proof: Aadhaar Card, PAN Card, Voter ID, or Passport</li>
              <li>Address Proof: Utility bill, Rent agreement, or Aadhaar Card</li>
              <li>Two recent passport-size photographs</li>
            </ul>
          </div>
        ),
        inquiry: <InquiryForm type="inquiry" product="Gold Loan" />
      }}
      kfsData={{
        indicativeRate: "9.50% - 12.00% p.a.",
        processingFee: "0.50% of loan amount",
        repaymentTenure: "Up to 12 months",
        monthlyEmi: "₹8,768 (for ₹1 Lakh @ 9.5%)",
        totalCost: "₹1,05,212",
        prepaymentCharges: "Nil"
      }}
    />
  )
}
