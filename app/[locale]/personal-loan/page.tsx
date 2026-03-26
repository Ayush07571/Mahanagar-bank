import { Metadata } from 'next'
import { ProductPageShell } from '@/components/banking/ProductPageShell'
import { Button } from '@/components/ui/button'
import { InquiryForm } from '@/components/forms/InquiryForm'

export const metadata: Metadata = {
  title: 'Personal Loans | MNS Bank - Quick & Easy Financing',
  description: 'Get personal loans from MNS Bank for all your needs. Instant approval, competitive interest rates, and flexible repayment options up to 5 years.',
}

export default function PersonalLoan() {
  const tabs = {
    overview: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <div className="prose max-w-none text-gray-600">
          <p>
            Our Personal Loan offers quick and easy financing for all your personal needs. 
            With competitive interest rates and flexible repayment options, you can fulfill your dreams without financial constraints.
          </p>
        </div>
      </div>
    ),
    features: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Loan Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10.99%</div>
            <div className="text-gray-600">Interest Rate (Starting)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5 Years</div>
            <div className="text-gray-600">Maximum Tenure</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">₹25 Lakhs</div>
            <div className="text-gray-600">Maximum Amount</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24 Hours</div>
            <div className="text-gray-600">Quick Approval</div>
          </div>
        </div>
      </div>
    ),
    eligibility: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Age: 21 to 60 years</li>
          <li>• Minimum monthly income: ₹15,000</li>
          <li>• Work experience: 2+ years</li>
          <li>• Good credit score</li>
          <li>• Salaried or self-employed</li>
        </ul>
      </div>
    ),
    documents: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Documents</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• ID proof (Aadhaar/PAN/Passport)</li>
          <li>• Address proof</li>
          <li>• Income proof (salary slips)</li>
          <li>• Bank statements (6 months)</li>
          <li>• Photographs</li>
        </ul>
      </div>
    ),
    apply: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Apply Now</h3>
        <div className="space-y-4">
          <p className="text-gray-600">
            Get your personal loan approved in just 24 hours
          </p>
          <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium">
            Apply Online
          </Button>
          <Button variant="outline" className="w-full">
            Check Eligibility
          </Button>
        </div>
      </div>
    ),
    inquiry: (
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Have Questions?</h3>
        <InquiryForm type="inquiry" product="Personal Loan" />
      </div>
    )
  }

  const kfsData = {
    indicativeRate: '10.99% - 18.99% p.a.',
    processingFee: '0% - 2% of loan amount',
    repaymentTenure: '12 - 60 months',
    monthlyEmi: '₹22,244 (for ₹10 lakh at 10.99% for 5 years)',
    totalCost: '₹13,34,640 (for ₹10 lakh at 10.99% for 5 years)',
    prepaymentCharges: 'Nil after 6 months, 4% before 6 months'
  }

  const relatedProducts = [
    {
      name: 'Home Loan',
      href: '/personal-banking/home-loan',
      category: 'Personal Banking'
    },
    {
      name: 'Car Loan',
      href: '/personal-banking/car-loan',
      category: 'Personal Banking'
    },
    {
      name: 'Education Loan',
      href: '/personal-banking/education-loan',
      category: 'Personal Banking'
    }
  ]

  return (
    <ProductPageShell
      title="Personal Loan"
      subtitle="Quick and easy personal loans for all your needs"
      description="Flexible personal loans for any purpose with competitive rates and quick approval"
      category="personal"
      productType="loan"
      tabs={tabs}
      kfsData={kfsData}
      relatedProducts={relatedProducts}
    />
  )
}
