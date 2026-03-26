'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { calculateEMI, validateEMIInputs, formatCurrency, formatPercentage } from '@/lib/calculations'
import { AmortizationTable } from './AmortizationTable'
import type { EMICalculatorResult } from '@/lib/calculations'

interface EMICalculatorProps {
  className?: string
  showAmortization?: boolean
}

export function EMICalculator({ className = '', showAmortization = false }: EMICalculatorProps) {
  const [loanAmount, setLoanAmount] = useState<number>(1000000)
  const [interestRate, setInterestRate] = useState<number>(10.99)
  const [tenure, setTenure] = useState<number>(5)
  const [result, setResult] = useState<EMICalculatorResult | null>(null)
  const [errors, setErrors] = useState<string[]>([])
  const [isCalculating, setIsCalculating] = useState(false)

  // Auto-calculate when inputs change
  useEffect(() => {
    if (loanAmount && interestRate && tenure) {
      handleCalculate()
    }
  }, [loanAmount, interestRate, tenure])

  const handleCalculate = async () => {
    const validation = validateEMIInputs(loanAmount, interestRate, tenure)
    
    if (!validation.isValid) {
      setErrors(validation.errors)
      setResult(null)
      return
    }

    setErrors([])
    setIsCalculating(true)

    try {
      // Try API first, fallback to local calculation
      let calculationResult: EMICalculatorResult
      
      try {
        const response = await fetch('/api/calculator/emi', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'emi',
            loanAmount,
            interestRate,
            tenure
          })
        })

        if (response.ok) {
          const data = await response.json()
          calculationResult = data.data
        } else {
          throw new Error('API call failed')
        }
      } catch (apiError) {
        // Fallback to local calculation
        calculationResult = calculateEMI(loanAmount, interestRate, tenure)
      }

      setResult(calculationResult)
    } catch (error) {
      setErrors(['Calculation failed. Please check your inputs.'])
      setResult(null)
    } finally {
      setIsCalculating(false)
    }
  }

  const handleLoanAmountChange = (value: string) => {
    const num = parseFloat(value.replace(/,/g, ''))
    if (!isNaN(num) && num >= 0) {
      setLoanAmount(num)
    }
  }

  const handleInterestRateChange = (value: string) => {
    const num = parseFloat(value)
    if (!isNaN(num) && num >= 0 && num <= 100) {
      setInterestRate(num)
    }
  }

  const handleTenureChange = (value: string) => {
    const num = parseInt(value)
    if (!isNaN(num) && num >= 0 && num <= 30) {
      setTenure(num)
    }
  }

  const resetCalculator = () => {
    setLoanAmount(1000000)
    setInterestRate(10.99)
    setTenure(5)
    setResult(null)
    setErrors([])
  }

  const exportResults = () => {
    if (!result) return
    
    const data = {
      loanDetails: result.calculation,
      amortizationSchedule: result.amortizationSchedule,
      summary: result.summary,
      calculatedAt: new Date().toISOString()
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `emi-calculation-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">EMI Calculator</h3>
        
        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-2">
              Loan Amount (₹)
            </label>
            <input
              type="text"
              id="loanAmount"
              value={formatCurrency(loanAmount).replace('₹', '').replace(/,/g, '')}
              onChange={(e) => handleLoanAmountChange(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.some(e => e.includes('Loan amount')) ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter loan amount"
            />
            <p className="text-xs text-gray-500 mt-1">Min: ₹10,000 | Max: ₹50,00,000</p>
          </div>

          <div>
            <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate (% p.a.)
            </label>
            <input
              type="text"
              id="interestRate"
              value={interestRate}
              onChange={(e) => handleInterestRateChange(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.some(e => e.includes('Interest rate')) ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter interest rate"
              step="0.01"
            />
            <p className="text-xs text-gray-500 mt-1">Min: 6% | Max: 24%</p>
          </div>

          <div>
            <label htmlFor="tenure" className="block text-sm font-medium text-gray-700 mb-2">
              Loan Tenure (Years)
            </label>
            <input
              type="text"
              id="tenure"
              value={tenure}
              onChange={(e) => handleTenureChange(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.some(e => e.includes('Tenure')) ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter tenure"
            />
            <p className="text-xs text-gray-500 mt-1">Min: 1 year | Max: 30 years</p>
          </div>
        </div>

        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
            <h4 className="text-red-800 font-medium mb-2">Please fix the following errors:</h4>
            <ul className="list-disc list-inside text-red-700 space-y-1">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-4 mb-6">
          <Button
            onClick={handleCalculate}
            disabled={isCalculating}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isCalculating ? 'Calculating...' : 'Calculate EMI'}
          </Button>
          <Button
            onClick={resetCalculator}
            variant="outline"
          >
            Reset
          </Button>
          {result && (
            <Button
              onClick={exportResults}
              variant="outline"
            >
              Export Results
            </Button>
          )}
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-6">
            {/* EMI Results */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-4">EMI Calculation Results</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-blue-700">Monthly EMI</p>
                  <p className="text-2xl font-bold text-blue-900">
                    {formatCurrency(result.calculation.monthlyEMI)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-blue-700">Total Interest</p>
                  <p className="text-2xl font-bold text-blue-900">
                    {formatCurrency(result.calculation.totalInterest)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-blue-700">Total Amount</p>
                  <p className="text-2xl font-bold text-blue-900">
                    {formatCurrency(result.calculation.totalAmount)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-blue-700">Effective Rate</p>
                  <p className="text-2xl font-bold text-blue-900">
                    {formatPercentage(result.calculation.effectiveRate)}
                  </p>
                </div>
              </div>
            </div>

            {/* Loan Summary */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Loan Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-700 mb-3">Loan Details</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Principal Amount:</span>
                      <span className="font-medium">{formatCurrency(result.calculation.loanAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Rate:</span>
                      <span className="font-medium">{formatPercentage(result.calculation.interestRate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loan Tenure:</span>
                      <span className="font-medium">{result.calculation.tenure} years ({result.summary.totalMonths} months)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-3">Payment Breakdown</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Principal Component:</span>
                      <span className="font-medium">{formatCurrency(result.calculation.loanAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Component:</span>
                      <span className="font-medium">{formatCurrency(result.calculation.totalInterest)}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-gray-900 font-medium">Total Payment:</span>
                      <span className="font-bold text-blue-600">{formatCurrency(result.calculation.totalAmount)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm">
                Download Amortization Schedule
              </Button>
              <Button variant="outline" size="sm">
                Email Results
              </Button>
              <Button variant="outline" size="sm">
                Apply for This Loan
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Amortization Table */}
      {result && showAmortization && (
        <AmortizationTable calculationResult={result} />
      )}
    </div>
  )
}
