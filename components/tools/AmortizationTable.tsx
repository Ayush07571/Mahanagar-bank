'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/calculations'
import type { AmortizationEntry, EMICalculatorResult } from '@/lib/calculations'

interface AmortizationTableProps {
  calculationResult: EMICalculatorResult
  className?: string
}

export function AmortizationTable({ calculationResult, className = '' }: AmortizationTableProps) {
  const [showYearlyView, setShowYearlyView] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set())

  const itemsPerPage = 12
  const totalPages = Math.ceil(calculationResult.amortizationSchedule.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = calculationResult.amortizationSchedule.slice(startIndex, endIndex)

  // Group data by year for yearly view
  const yearlyData = calculationResult.amortizationSchedule.reduce((acc, entry) => {
    const year = Math.ceil(entry.month / 12)
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(entry)
    return acc
  }, {} as Record<number, AmortizationEntry[]>)

  const toggleYearExpansion = (year: number) => {
    const newExpanded = new Set(expandedYears)
    if (newExpanded.has(year)) {
      newExpanded.delete(year)
    } else {
      newExpanded.add(year)
    }
    setExpandedYears(newExpanded)
  }

  const exportToCSV = () => {
    const headers = [
      'Month',
      'Opening Balance',
      'EMI',
      'Interest Component',
      'Principal Component',
      'Closing Balance',
      'Total Interest Paid',
      'Total Principal Paid'
    ]

    const csvContent = [
      headers.join(','),
      ...calculationResult.amortizationSchedule.map(entry => [
        entry.month,
        entry.openingBalance.toFixed(2),
        entry.emi.toFixed(2),
        entry.interestComponent.toFixed(2),
        entry.principalComponent.toFixed(2),
        entry.closingBalance.toFixed(2),
        entry.totalInterestPaid.toFixed(2),
        entry.totalPrincipalPaid.toFixed(2)
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `amortization-schedule-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const printSchedule = () => {
    window.print()
  }

  if (showYearlyView) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">Amortization Schedule (Yearly View)</h3>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowYearlyView(false)}
            >
              Monthly View
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={exportToCSV}
            >
              Export CSV
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={printSchedule}
            >
              Print
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(yearlyData).map(([year, entries]) => {
            const yearTotal = entries[entries.length - 1]
            const isExpanded = expandedYears.has(parseInt(year))

            return (
              <div key={year} className="border border-gray-200 rounded-lg overflow-hidden">
                <div
                  className="bg-gray-50 p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => toggleYearExpansion(parseInt(year))}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">Year {year}</h4>
                      <p className="text-sm text-gray-600">
                        {entries.length} months • Total Interest: {formatCurrency(yearTotal.totalInterestPaid)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Closing Balance</p>
                      <p className="font-semibold">{formatCurrency(yearTotal.closingBalance)}</p>
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
                          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Opening</th>
                          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">EMI</th>
                          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Interest</th>
                          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Principal</th>
                          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Closing</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {entries.map((entry) => (
                          <tr key={entry.month} className="hover:bg-gray-50">
                            <td className="px-4 py-2 text-sm text-gray-900">{entry.month}</td>
                            <td className="px-4 py-2 text-sm text-gray-900 text-right">{formatCurrency(entry.openingBalance)}</td>
                            <td className="px-4 py-2 text-sm text-gray-900 text-right">{formatCurrency(entry.emi)}</td>
                            <td className="px-4 py-2 text-sm text-gray-900 text-right">{formatCurrency(entry.interestComponent)}</td>
                            <td className="px-4 py-2 text-sm text-gray-900 text-right">{formatCurrency(entry.principalComponent)}</td>
                            <td className="px-4 py-2 text-sm text-gray-900 text-right">{formatCurrency(entry.closingBalance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Amortization Schedule</h3>
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowYearlyView(true)}
          >
            Yearly View
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={exportToCSV}
          >
            Export CSV
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={printSchedule}
          >
            Print
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600">Monthly EMI</p>
          <p className="text-lg font-bold text-blue-900">
            {formatCurrency(calculationResult.calculation.monthlyEMI)}
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-600">Total Principal</p>
          <p className="text-lg font-bold text-green-900">
            {formatCurrency(calculationResult.calculation.loanAmount)}
          </p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-sm text-yellow-600">Total Interest</p>
          <p className="text-lg font-bold text-yellow-900">
            {formatCurrency(calculationResult.calculation.totalInterest)}
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-purple-600">Total Amount</p>
          <p className="text-lg font-bold text-purple-900">
            {formatCurrency(calculationResult.calculation.totalAmount)}
          </p>
        </div>
      </div>

      {/* Amortization Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Opening Balance</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">EMI</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Interest</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Principal</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Closing Balance</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentData.map((entry) => (
              <tr key={entry.month} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900">{entry.month}</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">{formatCurrency(entry.openingBalance)}</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">{formatCurrency(entry.emi)}</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">{formatCurrency(entry.interestComponent)}</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">{formatCurrency(entry.principalComponent)}</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">{formatCurrency(entry.closingBalance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, calculationResult.amortizationSchedule.length)} of{' '}
            {calculationResult.amortizationSchedule.length} months
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="px-3 py-1 text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Yearly Summary */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Yearly Summary</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Interest Paid</th>
                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Principal Paid</th>
                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Balance</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Object.entries(yearlyData).map(([year, entries]) => {
                const yearEnd = entries[entries.length - 1]
                return (
                  <tr key={year} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-900">Year {year}</td>
                    <td className="px-4 py-2 text-sm text-gray-900 text-right">
                      {formatCurrency(yearEnd.totalInterestPaid)}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900 text-right">
                      {formatCurrency(yearEnd.totalPrincipalPaid)}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900 text-right">
                      {formatCurrency(yearEnd.closingBalance)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
