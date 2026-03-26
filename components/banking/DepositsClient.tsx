'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calculator, FileText, Shield, Clock } from 'lucide-react'

export function DepositsClient() {
  const [activeTab, setActiveTab] = useState('fixed')

  const depositTypes = [
    {
      id: 'fixed',
      title: 'Fixed Deposits',
      description: 'Earn higher interest rates with fixed tenure deposits',
      features: [
        'Interest rates up to 7.5% p.a.',
        'Flexible tenure options: 7 days to 10 years',
        'Premature withdrawal facility available',
        'Auto-renewal option',
        'Loan against FD available'
      ],
      rates: [
        { tenure: '7-14 days', rate: '4.00%' },
        { tenure: '15-45 days', rate: '5.50%' },
        { tenure: '46-90 days', rate: '6.00%' },
        { tenure: '91-180 days', rate: '6.50%' },
        { tenure: '181-364 days', rate: '7.00%' },
        { tenure: '1-2 years', rate: '7.25%' },
        { tenure: '2-5 years', rate: '7.50%' },
        { tenure: '5-10 years', rate: '7.50%' }
      ]
    },
    {
      id: 'recurring',
      title: 'Recurring Deposits',
      description: 'Build savings discipline with monthly deposits',
      features: [
        'Monthly installments from ₹500',
        'Interest rates up to 7.0% p.a.',
        'Flexible tenure: 6 months to 10 years',
        'Loan against RD available',
        'Auto-debit facility available'
      ],
      rates: [
        { tenure: '6 months', rate: '6.00%' },
        { tenure: '12 months', rate: '6.25%' },
        { tenure: '24 months', rate: '6.50%' },
        { tenure: '36 months', rate: '6.75%' },
        { tenure: '48 months', rate: '6.75%' },
        { tenure: '60 months', rate: '7.00%' },
        { tenure: '72 months', rate: '7.00%' },
        { tenure: '84 months', rate: '7.00%' },
        { tenure: '96 months', rate: '7.00%' },
        { tenure: '120 months', rate: '7.00%' }
      ]
    },
    {
      id: 'double',
      title: 'Double Deposit Scheme',
      description: 'Special scheme for doubling your investment',
      features: [
        'Investment doubles in 7 years',
        'Monthly deposits of minimum ₹500',
        'Interest rate: 8.0% p.a.',
        'Premature withdrawal with penalty',
        'Suitable for long-term goals'
      ],
      rates: [
        { tenure: '84 months', rate: '8.00%' }
      ]
    },
    {
      id: 'time',
      title: 'Time Deposits',
      description: 'High-yield time deposit options',
      features: [
        'Interest rates up to 7.75% p.a.',
        'Minimum deposit: ₹10,000',
        'Multiple tenure options',
        'Quarterly interest payment',
        'Nomination facility available'
      ],
      rates: [
        { tenure: '1 year', rate: '7.00%' },
        { tenure: '2 years', rate: '7.25%' },
        { tenure: '3 years', rate: '7.50%' },
        { tenure: '5 years', rate: '7.75%' }
      ]
    }
  ]

  const currentDeposit = depositTypes.find(d => d.id === activeTab)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Deposit Schemes</h1>
            <p className="text-xl mb-8">Secure your future with our range of deposit options</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Open Deposit Account
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Deposit Types</h2>
              <div className="space-y-2">
                {depositTypes.map((deposit) => (
                  <button
                    key={deposit.id}
                    onClick={() => setActiveTab(deposit.id)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      activeTab === deposit.id
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <h3 className="font-semibold">{deposit.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{deposit.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">{currentDeposit?.title}</h2>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                    {currentDeposit?.features.length} Features
                  </span>
                </div>
                <p className="text-gray-600">{currentDeposit?.description}</p>
              </div>

              {/* Tab Navigation */}
              <div className="grid w-full grid-cols-4 mb-6">
                {depositTypes.map((deposit) => (
                  <button
                    key={deposit.id}
                    onClick={() => setActiveTab(deposit.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === deposit.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {deposit.title}
                  </button>
                ))}
              </div>

              {depositTypes.map((deposit) => (
                activeTab === deposit.id && (
                  <div key={deposit.id} className="mt-6">
                    {/* Features Section */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {deposit.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interest Rates Table */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Interest Rates</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="border border-gray-200 px-4 py-3 text-left">Tenure</th>
                              <th className="border border-gray-200 px-4 py-3 text-left">Rate (p.a.)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {deposit.rates.map((rate, index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="border border-gray-200 px-4 py-3">{rate.tenure}</td>
                                <td className="border border-gray-200 px-4 py-3 font-semibold text-blue-600">
                                  {rate.rate}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Apply Section */}
                    <div className="mt-8 text-center">
                      <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                      <p className="text-gray-600 mb-6">
                        Visit your nearest branch or contact our customer service to open your deposit account.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-blue-600 text-white">
                          <Calculator className="w-4 h-4 mr-2" />
                          Calculate Returns
                        </Button>
                        <Button variant="outline" size="lg">
                          <FileText className="w-4 h-4 mr-2" />
                          Download Application Form
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
