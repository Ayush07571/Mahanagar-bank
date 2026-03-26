import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function MortgageOverdraftPage() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          MNS Bank's Mortgage Overdraft facility gives you access to a flexible credit line against your property. Pay interest only on the amount you use.
        </p>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Flexible credit limit based on property value</li>
          <li>Interest charged only on the utilized amount</li>
          <li>Anytime withdrawal and deposit facility</li>
          <li>Ideal for managing irregular cash flows</li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Property owners (Residential / Commercial)</li>
          <li>Business owners and self-employed individuals</li>
          <li>Steady income to service interest</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Property documents</li>
          <li>KYC of the property owner and borrower</li>
          <li>Last 2 years' income documents</li>
          <li>Bank statement for 12 months</li>
        </ul>
      </div>
    ),
    inquiry: <InquiryForm type="inquiry" product="Mortgage Overdraft" />
  }

  const kfsData = {
    indicativeRate: "11.50% - 14.00% p.a.",
    processingFee: "1.00% of sanctioned limit",
    repaymentTenure: "Annual renewal",
    monthlyEmi: "Interest on utilization",
    totalCost: "Variable",
    prepaymentCharges: "Nil"
  }

  return (
    <ProductPageShell
      title="Mortgage Overdraft"
      subtitle="Flexible credit line against property"
      description="Manage your financial contingencies with a ready credit limit backed by your real estate."
      category="personal"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
    />
  )
}
