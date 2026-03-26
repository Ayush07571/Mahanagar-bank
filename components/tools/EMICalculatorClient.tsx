'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

export function EMICalculatorClient() {
  const t = useTranslations('calculator')
  const commonT = useTranslations('common')
  
  const [loanAmount, setLoanAmount] = useState('1000000')
  const [interestRate, setInterestRate] = useState('8.5')
  const [tenure, setTenure] = useState('20')
  const [results, setResults] = useState<any>(null)

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount)
    const rate = parseFloat(interestRate) / 12 / 100
    const time = parseFloat(tenure) * 12

    if (principal && rate && time) {
      const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1)
      const totalAmount = emi * time
      const totalInterest = totalAmount - principal

      setResults({
        emi: emi.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
      })
    }
  }

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('emi_calculator')}</h1>
          <p className="text-xl text-purple-100">
            Calculate your loan EMI instantly
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Details</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('loan_amount')} (₹)
                </label>
                <input
                  type="number"
                  id="loanAmount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder={t('loan_amount_placeholder')}
                />
              </div>
              
              <div>
                <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('interest_rate')} (% {t('tenure_years')})
                </label>
                <input
                  type="number"
                  id="interestRate"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder={t('interest_rate_placeholder')}
                />
              </div>
              
              <div>
                <label htmlFor="tenure" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('tenure')} ({t('tenure_years')})
                </label>
                <input
                  type="number"
                  id="tenure"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter loan tenure"
                />
              </div>
              
              <Button
                onClick={calculateEMI}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium"
              >
                {t('calculate')}
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
            {results ? (
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-sm text-purple-600 mb-1">{t('results.monthly_emi')}</div>
                  <div className="text-2xl font-bold text-purple-900">₹{results.emi}</div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">{t('results.total_interest')}</div>
                  <div className="text-xl font-semibold text-gray-900">₹{results.totalInterest}</div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">{t('results.total_amount')}</div>
                  <div className="text-xl font-semibold text-gray-900">₹{results.totalAmount}</div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium">
                  {t('results.apply_for_loan')}
                </Button>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                Enter loan details and click "{t('calculate')}" to see results
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
