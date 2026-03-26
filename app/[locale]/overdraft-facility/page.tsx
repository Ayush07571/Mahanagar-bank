import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function OverdraftFacilityPage() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          Manage your business's cash flow fluctuations with MNS Bank's Overdraft Facility. Access funds whenever you need them and pay interest only on what you use.
        </p>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Credit limit linked to current account</li>
          <li>Interest charged on daily utilized balance</li>
          <li>Easy withdrawal and repayment</li>
          <li>Annual renewal based on performance</li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Current account holders with satisfactory track record</li>
          <li>Business entities with regular turnover</li>
          <li>Adequate security/collateral</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Last 2 years' audited financials</li>
          <li>Bank statement for 12 months</li>
          <li>Collateral documents</li>
          <li>Business KYC</li>
        </ul>
      </div>
    ),
    inquiry: <InquiryForm type="inquiry" product="Overdraft Facility" />
  }

  const kfsData = {
    indicativeRate: "11.50% - 13.50% p.a.",
    processingFee: "0.50% - 1.00% of limit",
    repaymentTenure: "On-demand / Annual renewal",
    monthlyEmi: "Interest on utilization",
    totalCost: "Variable",
    prepaymentCharges: "Nil"
  }

  return (
    <ProductPageShell
      title="Overdraft Facility"
      subtitle="Ready liquidity for your business"
      description="A flexible credit arrangement to ensure your business operations never stop for want of funds."
      category="business"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
    />
  )
}
