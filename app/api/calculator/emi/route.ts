import { NextRequest, NextResponse } from 'next/server'
import { calculateEMI, validateEMIInputs, calculateLoanEligibility, calculatePrepaymentSavings } from '@/lib/calculations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, ...params } = body

    switch (type) {
      case 'emi':
        return handleEMICalculation(params)
      case 'eligibility':
        return handleEligibilityCalculation(params)
      case 'prepayment':
        return handlePrepaymentCalculation(params)
      default:
        return NextResponse.json(
          { success: false, message: 'Invalid calculation type' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Calculator API error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

function handleEMICalculation(params: any) {
  const { loanAmount, interestRate, tenure } = params

  // Validate inputs
  const validation = validateEMIInputs(loanAmount, interestRate, tenure)
  if (!validation.isValid) {
    return NextResponse.json(
      { success: false, errors: validation.errors },
      { status: 400 }
    )
  }

  try {
    const result = calculateEMI(loanAmount, interestRate, tenure)
    return NextResponse.json({
      success: true,
      data: result
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Calculation failed' },
      { status: 500 }
    )
  }
}

function handleEligibilityCalculation(params: any) {
  const { monthlyIncome, existingEMIs, interestRate, maxDTIRatio } = params

  if (!monthlyIncome || monthlyIncome <= 0) {
    return NextResponse.json(
      { success: false, message: 'Monthly income must be greater than 0' },
      { status: 400 }
    )
  }

  try {
    const result = calculateLoanEligibility(
      monthlyIncome,
      existingEMIs || 0,
      interestRate || 10.99,
      maxDTIRatio || 50
    )
    return NextResponse.json({
      success: true,
      data: result
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Eligibility calculation failed' },
      { status: 500 }
    )
  }
}

function handlePrepaymentCalculation(params: any) {
  const { originalCalculation, prepaymentAmount, prepaymentMonth } = params

  if (!originalCalculation || !prepaymentAmount || !prepaymentMonth) {
    return NextResponse.json(
      { success: false, message: 'Missing required parameters for prepayment calculation' },
      { status: 400 }
    )
  }

  try {
    const result = calculatePrepaymentSavings(
      originalCalculation,
      prepaymentAmount,
      prepaymentMonth
    )
    return NextResponse.json({
      success: true,
      data: result
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Prepayment calculation failed' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')

  switch (type) {
    case 'rates':
      return getCurrentRates()
    case 'info':
      return getCalculatorInfo()
    default:
      return NextResponse.json(
        { success: false, message: 'Invalid endpoint' },
        { status: 400 }
      )
  }
}

function getCurrentRates() {
  const rates = {
    personal: { min: 10.99, max: 18.99, current: 12.49 },
    home: { min: 8.50, max: 12.50, current: 9.50 },
    car: { min: 9.50, max: 15.50, current: 11.25 },
    education: { min: 11.00, max: 14.00, current: 12.50 }
  }

  return NextResponse.json({
    success: true,
    data: rates,
    lastUpdated: new Date().toISOString()
  })
}

function getCalculatorInfo() {
  const info = {
    name: 'MNS Bank EMI Calculator',
    version: '1.0.0',
    features: [
      'Real-time EMI calculation',
      'Amortization schedule generation',
      'Loan eligibility assessment',
      'Prepayment savings calculation',
      'CSV export functionality',
      'RBI-compliant formulas'
    ],
    limits: {
      loanAmount: { min: 10000, max: 5000000 },
      interestRate: { min: 6, max: 24 },
      tenure: { min: 1, max: 30 }
    },
    formulas: {
      emi: 'P × r × (1 + r)^n / ((1 + r)^n - 1)',
      description: 'Where P=Principal, r=Monthly Rate, n=Months'
    }
  }

  return NextResponse.json({
    success: true,
    data: info
  })
}
