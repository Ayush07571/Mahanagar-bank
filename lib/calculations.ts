// EMI Calculation Library following RBI standards

export interface EMICalculation {
  loanAmount: number
  interestRate: number
  tenure: number
  monthlyEMI: number
  totalInterest: number
  totalAmount: number
  effectiveRate: number
}

export interface AmortizationEntry {
  month: number
  openingBalance: number
  emi: number
  interestComponent: number
  principalComponent: number
  closingBalance: number
  totalInterestPaid: number
  totalPrincipalPaid: number
}

export interface EMICalculatorResult {
  calculation: EMICalculation
  amortizationSchedule: AmortizationEntry[]
  summary: {
    totalMonths: number
    totalInterest: number
    totalAmount: number
    effectiveRate: number
    processingFee?: number
    prepaymentCharges?: number
  }
}

/**
 * Calculate EMI using RBI standard formula
 * EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
 * Where:
 * P = Principal loan amount
 * r = Monthly interest rate (annual rate / 12 / 100)
 * n = Loan tenure in months
 */
export function calculateEMI(
  loanAmount: number,
  annualRate: number,
  tenureYears: number
): EMICalculatorResult {
  // Validate inputs
  if (loanAmount <= 0) {
    throw new Error('Loan amount must be greater than 0')
  }
  if (annualRate <= 0) {
    throw new Error('Interest rate must be greater than 0')
  }
  if (tenureYears <= 0) {
    throw new Error('Tenure must be greater than 0')
  }

  const monthlyRate = annualRate / 12 / 100
  const tenureMonths = tenureYears * 12

  // Calculate EMI using RBI formula
  let monthlyEMI: number
  
  if (monthlyRate === 0) {
    // For 0% interest rate
    monthlyEMI = loanAmount / tenureMonths
  } else {
    const rPowerN = Math.pow(1 + monthlyRate, tenureMonths)
    monthlyEMI = (loanAmount * monthlyRate * rPowerN) / (rPowerN - 1)
  }

  const totalAmount = monthlyEMI * tenureMonths
  const totalInterest = totalAmount - loanAmount
  const effectiveRate = (totalInterest / loanAmount) * 100

  const calculation: EMICalculation = {
    loanAmount,
    interestRate: annualRate,
    tenure: tenureYears,
    monthlyEMI,
    totalInterest,
    totalAmount,
    effectiveRate
  }

  // Generate amortization schedule
  const amortizationSchedule = generateAmortizationSchedule(
    loanAmount,
    monthlyEMI,
    monthlyRate,
    tenureMonths
  )

  const summary = {
    totalMonths: tenureMonths,
    totalInterest,
    totalAmount,
    effectiveRate
  }

  return {
    calculation,
    amortizationSchedule,
    summary
  }
}

/**
 * Generate complete amortization schedule
 */
function generateAmortizationSchedule(
  principal: number,
  emi: number,
  monthlyRate: number,
  totalMonths: number
): AmortizationEntry[] {
  const schedule: AmortizationEntry[] = []
  let openingBalance = principal
  let totalInterestPaid = 0
  let totalPrincipalPaid = 0

  for (let month = 1; month <= totalMonths; month++) {
    const interestComponent = openingBalance * monthlyRate
    const principalComponent = emi - interestComponent
    const closingBalance = openingBalance - principalComponent

    totalInterestPaid += interestComponent
    totalPrincipalPaid += principalComponent

    // Handle last month rounding
    const isLastMonth = month === totalMonths
    const finalPrincipal = isLastMonth ? openingBalance : principalComponent
    const finalClosingBalance = isLastMonth ? 0 : closingBalance

    schedule.push({
      month,
      openingBalance,
      emi,
      interestComponent,
      principalComponent: finalPrincipal,
      closingBalance: finalClosingBalance,
      totalInterestPaid,
      totalPrincipalPaid
    })

    openingBalance = closingBalance
  }

  return schedule
}

/**
 * Calculate loan eligibility based on income and existing EMIs
 */
export function calculateLoanEligibility(
  monthlyIncome: number,
  existingEMIs: number,
  interestRate: number,
  maxDTIRatio: number = 50 // Default 50% Debt-to-Income ratio
): {
  maxEligibleEMI: number
  maxLoanAmount: number
  recommendedTenure: number
} {
  const maxEMI = (monthlyIncome * maxDTIRatio) / 100 - existingEMIs
  
  if (maxEMI <= 0) {
    return {
      maxEligibleEMI: 0,
      maxLoanAmount: 0,
      recommendedTenure: 0
    }
  }

  // Estimate maximum loan amount for common tenures (5, 10, 15, 20, 25, 30 years)
  const tenures = [5, 10, 15, 20, 25, 30]
  let maxLoanAmount = 0
  let recommendedTenure = 10

  for (const tenure of tenures) {
    const monthlyRate = interestRate / 12 / 100
    const tenureMonths = tenure * 12
    
    let eligibleAmount: number
    
    if (monthlyRate === 0) {
      eligibleAmount = maxEMI * tenureMonths
    } else {
      const rPowerN = Math.pow(1 + monthlyRate, tenureMonths)
      eligibleAmount = (maxEMI * (rPowerN - 1)) / (monthlyRate * rPowerN)
    }

    if (eligibleAmount > maxLoanAmount) {
      maxLoanAmount = eligibleAmount
      recommendedTenure = tenure
    }
  }

  return {
    maxEligibleEMI: maxEMI,
    maxLoanAmount: Math.round(maxLoanAmount),
    recommendedTenure
  }
}

/**
 * Calculate prepayment savings
 */
export function calculatePrepaymentSavings(
  originalCalculation: EMICalculatorResult,
  prepaymentAmount: number,
  prepaymentMonth: number
): {
  newEMI: number
  totalSavings: number
  reducedTenure: number
} {
  const schedule = originalCalculation.amortizationSchedule
  const monthlyRate = originalCalculation.calculation.interestRate / 12 / 100
  
  if (prepaymentMonth >= schedule.length) {
    throw new Error('Prepayment month exceeds loan tenure')
  }

  // Get opening balance at prepayment month
  const prepaymentEntry = schedule[prepaymentMonth - 1]
  const remainingBalance = prepaymentEntry.closingBalance + prepaymentAmount
  const remainingMonths = schedule.length - prepaymentMonth

  // Calculate new EMI with reduced principal
  let newEMI: number
  
  if (monthlyRate === 0) {
    newEMI = remainingBalance / remainingMonths
  } else {
    const rPowerN = Math.pow(1 + monthlyRate, remainingMonths)
    newEMI = (remainingBalance * monthlyRate * rPowerN) / (rPowerN - 1)
  }

  const newTotalAmount = (prepaymentEntry.totalInterestPaid + newEMI * remainingMonths)
  const totalSavings = originalCalculation.calculation.totalAmount - newTotalAmount
  const reducedTenure = Math.ceil(remainingMonths)

  return {
    newEMI,
    totalSavings,
    reducedTenure
  }
}

/**
 * Format currency amount
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

/**
 * Format percentage
 */
export function formatPercentage(rate: number, decimals: number = 2): string {
  return `${rate.toFixed(decimals)}%`
}

/**
 * Validate EMI calculator inputs
 */
export function validateEMIInputs(
  loanAmount: number,
  interestRate: number,
  tenure: number
): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (loanAmount < 10000) {
    errors.push('Loan amount must be at least ₹10,000')
  }
  if (loanAmount > 5000000) {
    errors.push('Loan amount cannot exceed ₹50,00,000')
  }

  if (interestRate < 6) {
    errors.push('Interest rate cannot be less than 6%')
  }
  if (interestRate > 24) {
    errors.push('Interest rate cannot exceed 24%')
  }

  if (tenure < 1) {
    errors.push('Tenure must be at least 1 year')
  }
  if (tenure > 30) {
    errors.push('Tenure cannot exceed 30 years')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}
