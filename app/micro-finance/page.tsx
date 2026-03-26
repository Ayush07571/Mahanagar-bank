import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function MicroFinancePage() {
  return (
    <ProductPageShell
      title="Micro Finance"
      subtitle="Empowering small entrepreneurs"
      description="Small loans to support micro-enterprises and self-employed individuals in their journey towards financial independence."
      category="business"
      productType="loan"
      tabs={{
        overview: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-600 mb-4">
              MNS Bank's Micro Finance initiative is designed to provide financial services to the underserved sections of society, enabling them to start or expand small businesses.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>No collateral required for smaller loans</li>
              <li>Group-based and individual lending models</li>
              <li>Simplified application process</li>
              <li>Focus on women entrepreneurs</li>
            </ul>
          </div>
        ),
        features: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Low interest rates for micro-segments</li>
              <li>Weekly, fortnightly, or monthly repayment options</li>
              <li>Free financial literacy training for borrowers</li>
              <li>Insurance coverage included</li>
            </ul>
          </div>
        ),
        eligibility: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Residents of Bhopal and surrounding urban/semi-urban areas</li>
              <li>Small traders, vendors, and self-employed professionals</li>
              <li>Household income within specified limits</li>
              <li>Good social reputation and willingness to participate in groups</li>
            </ul>
          </div>
        ),
        documents: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Documents Required</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Aadhaar Card (Mandatory)</li>
              <li>PAN Card or Form 60</li>
              <li>Voter ID or Rashon Card</li>
              <li>Proof of business location (if applicable)</li>
            </ul>
          </div>
        ),
        inquiry: <InquiryForm type="inquiry" product="Micro Finance" />
      }}
      kfsData={{
        indicativeRate: "12.00% - 15.00% p.a.",
        processingFee: "0.50% - 1.00% of loan amount",
        repaymentTenure: "Up to 3 years",
        monthlyEmi: "₹3,321 (for ₹1 Lakh @ 12%)",
        totalCost: "₹1,19,556",
        prepaymentCharges: "Nil"
      }}
    />
  )
}
