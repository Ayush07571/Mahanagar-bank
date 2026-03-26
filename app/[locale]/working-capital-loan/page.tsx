import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function WorkingCapitalLoanPage() {
  return (
    <ProductPageShell
      title="Working Capital Loan"
      subtitle="Fuel your business growth"
      description="Tailored financial solutions to manage your business's short-term operational needs and day-to-day expenses."
      category="business"
      productType="loan"
      tabs={{
        overview: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-600 mb-4">
              MNS Bank's Working Capital Loan provides the liquidity needed for businesses to maintain operations, purchase raw materials, and manage cash flow gaps effectively.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Customized solutions based on business turnover</li>
              <li>Competitive interest rates</li>
              <li>Flexible repayment terms</li>
              <li>Fast processing and disbursement</li>
            </ul>
          </div>
        ),
        features: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Overdraft and Cash Credit facilities</li>
              <li>No fixed EMI - pay interest only on utilized amount</li>
              <li>Collateral-free options for MSMEs (subject to criteria)</li>
              <li>Annual renewal facility</li>
            </ul>
          </div>
        ),
        eligibility: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Proprietorship firms, Partnership firms, and Companies</li>
              <li>Businesses operating for at least 2 years with positive track record</li>
              <li>GST-registered entities</li>
              <li>Bhopal-based businesses preferred</li>
            </ul>
          </div>
        ),
        documents: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Documents Required</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>KYC documents of the entity and its promoters</li>
              <li>Last 2 years' audited financial statements</li>
              <li>Bank statements for the last 6 months</li>
              <li>GST returns for the last 1 year</li>
            </ul>
          </div>
        ),
        inquiry: <InquiryForm type="inquiry" product="Working Capital Loan" />
      }}
      kfsData={{
        indicativeRate: "11.00% - 14.50% p.a.",
        processingFee: "1.00% of sanctioned limit",
        repaymentTenure: "On-demand renewal (Annual)",
        monthlyEmi: "Interest on utilization",
        totalCost: "Variable based on use",
        prepaymentCharges: "Nil"
      }}
    />
  )
}
