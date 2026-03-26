import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function LoanAgainstNSCPage() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          Get financial assistance by pledging your National Savings Certificates (NSC) or LIC policies. A cost-effective way to manage urgent cash requirements.
        </p>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Competitive interest rates</li>
          <li>Loan up to 80% of the surrender value</li>
          <li>Safe custody of your certificates</li>
          <li>Flexible repayment options</li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Holders of valid NSC or LIC policies</li>
          <li>Age: 18 to 65 years</li>
          <li>Clear title to the certificates</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Original NSC certificates / LIC policy documents</li>
          <li>Lien marking request to the issuing authority</li>
          <li>KYC documents</li>
          <li>Application form</li>
        </ul>
      </div>
    ),
    inquiry: <InquiryForm type="inquiry" product="Loan Against NSC/LIC" />
  }

  const kfsData = {
    indicativeRate: "11.00% - 13.00% p.a.",
    processingFee: "0.50% of loan amount",
    repaymentTenure: "Up to 5 years (subject to certificate maturity)",
    monthlyEmi: "₹2,174 (per ₹1 Lakh @ 11% for 5 years)",
    totalCost: "₹1,30,440 (per ₹1 Lakh)",
    prepaymentCharges: "Nil"
  }

  return (
    <ProductPageShell
      title="Loan Against NSC / LIC"
      subtitle="Funds against your government securities"
      description="Use your NSC or LIC policies as collateral for affordable personal or business loans."
      category="personal"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
    />
  )
}
