import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { InquiryForm } from '@/components/forms/InquiryForm'

export default function EducationLoanPage() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600 mb-4">
          Invest in your future with MNS Bank's Education Loan. We provide financial support for students pursuing higher education in India and abroad.
        </p>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Coverage for tuition fees, hostel, books, and travel</li>
          <li>Repayment holiday (moratorium) during study period</li>
          <li>Income tax benefits under Section 80E</li>
          <li>Flexible repayment options</li>
        </ul>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Indian national student</li>
          <li>Confirmed admission in a recognized institution</li>
          <li>Co-applicant (parent/guardian) with steady income</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Admission letter from the institution</li>
          <li>Detailed fee structure</li>
          <li>Academic records (Mark sheets / Certificates)</li>
          <li>KYC and Income proof of co-applicant</li>
        </ul>
      </div>
    ),
    inquiry: <InquiryForm type="inquiry" product="Education Loan" />
  }

  const kfsData = {
    indicativeRate: "10.50% - 12.50% p.a.",
    processingFee: "Nil for studies in India",
    repaymentTenure: "Up to 15 years after moratorium",
    monthlyEmi: "₹1,105 (per ₹1 Lakh @ 10.5% for 15 years)",
    totalCost: "₹1,98,900 (per ₹1 Lakh)",
    prepaymentCharges: "Nil"
  }

  return (
    <ProductPageShell
      title="Education Loan"
      subtitle="Financing your educational aspirations"
      description="Comprehensive education loans for higher studies in India and overseas."
      category="personal"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
    />
  )
}
