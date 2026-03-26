'use client'

import { EMICalculator } from '@/components/tools/EMICalculator'
import { AmortizationTable } from '@/components/tools/AmortizationTable'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { calculateEMI } from '@/lib/calculations'
import type { EMICalculatorResult } from '@/lib/calculations'

export default function EMICalculatorPage() {
  const [calculationResult, setCalculationResult] = useState<EMICalculatorResult | null>(null)

  const handleCalculationComplete = (result: EMICalculatorResult) => {
    setCalculationResult(result)
  }

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">EMI Calculator</h1>
          <p className="text-xl text-blue-100">
            Calculate your Equated Monthly Installment with our accurate RBI-compliant calculator
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* EMI Calculator */}
          <div className="lg:col-span-1">
            <EMICalculator />
          </div>

          {/* Results and Amortization */}
          <div className="lg:col-span-2 space-y-8">
            {calculationResult && (
              <>
                {/* Quick Stats */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Loan Summary</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-600 mb-1">Monthly EMI</p>
                      <p className="text-2xl font-bold text-blue-900">
                        ₹{calculationResult.calculation.monthlyEMI.toLocaleString('en-IN', {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0
                        })}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600 mb-1">Total Interest</p>
                      <p className="text-2xl font-bold text-green-900">
                        ₹{calculationResult.calculation.totalInterest.toLocaleString('en-IN', {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0
                        })}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-600 mb-1">Total Amount</p>
                      <p className="text-2xl font-bold text-purple-900">
                        ₹{calculationResult.calculation.totalAmount.toLocaleString('en-IN', {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0
                        })}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-600 mb-1">Effective Rate</p>
                      <p className="text-2xl font-bold text-yellow-900">
                        {calculationResult.calculation.effectiveRate.toFixed(2)}%
                      </p>
                    </div>
                  </div>
                </div>

                {/* Amortization Table */}
                <AmortizationTable calculationResult={calculationResult} />
              </>
            )}

            {/* Calculator Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About EMI Calculator</h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What is EMI?</h4>
                  <p>
                    EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How is EMI calculated?</h4>
                  <p>
                    Our calculator uses the RBI standard formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
                    where P is the principal amount, r is the monthly interest rate, and n is the number of months.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Real-time calculation updates</li>
                    <li>Detailed amortization schedule</li>
                    <li>Export to CSV functionality</li>
                    <li>RBI-compliant formulas</li>
                    <li>Input validation for accuracy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interest Rate Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Current Interest Rates</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Personal Loans</h4>
                  <p className="text-gray-600">10.99% - 18.99% p.a.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Home Loans</h4>
                  <p className="text-gray-600">8.50% - 12.50% p.a.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Car Loans</h4>
                  <p className="text-gray-600">9.50% - 15.50% p.a.</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Education Loans</h4>
                  <p className="text-gray-600">11.00% - 14.00% p.a.</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Rates are indicative and subject to change based on credit assessment and market conditions.
              </p>
            </div>

            {/* Tips for Better EMI Management */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tips for Better EMI Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Before Taking a Loan</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Check your credit score</li>
                    <li>• Compare interest rates</li>
                    <li>• Calculate total cost of borrowing</li>
                    <li>• Consider prepayment charges</li>
                    <li>• Read terms and conditions carefully</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">During Loan Repayment</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Pay EMIs on time</li>
                    <li>• Consider prepayments when possible</li>
                    <li>• Maintain emergency funds</li>
                    <li>• Monitor loan statements</li>
                    <li>• Avoid late payment penalties</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Loan Counseling</h4>
                  <p className="text-gray-600">Our loan counselors can help you choose the right loan product and tenure.</p>
                  <p className="font-medium text-gray-900">Phone: 1800-123-4567 (Toll-Free)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Apply for Loan</h4>
                  <p className="text-gray-600">Ready to apply? Get instant approval on select loan products.</p>
                  <div className="mt-3">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
