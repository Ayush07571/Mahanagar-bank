import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function LoanAgainstFDPage() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          Meet your liquidity needs without breaking your Fixed Deposits. MNS Bank's Loan Against FD offers a quick way to get funds while your investment continues to grow.
        </p>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Interest rate usually 1% to 2% above the FD rate</li>
          <li>Loan amount up to 90% of the FD value</li>
          <li>No processing fees</li>
          <li>Instant disbursement</li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Individual FD holders with MNS Bank</li>
          <li>Sole or joint account holders</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Original FD receipt / certificate</li>
          <li>Loan application form</li>
          <li>KYC documents (if not already provided)</li>
        </ul>
      </div>
    ),
    inquiry: <InquiryForm type="inquiry" product="Loan Against FD" />
  }

  const kfsData = {
    indicativeRate: "FD Rate + 1.50% p.a.",
    processingFee: "Nil",
    repaymentTenure: "Residual tenure of the FD",
    monthlyEmi: "Flexible repayment / Interest only",
    totalCost: "Depends on FD rate",
    prepaymentCharges: "Nil"
  }

  return (
    <ProductPageShell
      title="Loan Against Fixed Deposit"
      subtitle="Instant funds, zero investment loss"
      description="Leverage your Fixed Deposits for immediate financial needs without closing your account."
      category="personal"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
    />
  )
}
