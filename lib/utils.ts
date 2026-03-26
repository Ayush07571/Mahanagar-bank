import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatPhoneNumber(phone: string): string {
  // Format Indian phone number: XXXXX XXXXX
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`
  }
  return phone
}

export function generateReferenceNumber(): string {
  const timestamp = Date.now().toString()
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `MNS${timestamp}${random}`
}

export function validateIndianMobile(phone: string): boolean {
  const regex = /^[6-9]\d{9}$/
  return regex.test(phone)
}

export function calculateEMI(
  principal: number,
  annualRate: number,
  years: number
): {
  emi: number
  totalInterest: number
  totalAmount: number
} {
  const monthlyRate = annualRate / 12 / 100
  const months = years * 12

  // EMI = [P × R × (1+R)^N] / [(1+R)^N-1]
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)

  const totalAmount = emi * months
  const totalInterest = totalAmount - principal

  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalAmount: Math.round(totalAmount),
  }
}

export function generateAmortizationSchedule(
  principal: number,
  annualRate: number,
  years: number
): Array<{
  year: number
  principalPaid: number
  interestPaid: number
  totalPaid: number
  outstandingBalance: number
}> {
  const monthlyRate = annualRate / 12 / 100
  const { emi } = calculateEMI(principal, annualRate, years)

  const schedule = []
  let outstandingBalance = principal

  for (let year = 1; year <= years; year++) {
    let yearPrincipalPaid = 0
    let yearInterestPaid = 0

    for (let month = (year - 1) * 12 + 1; month <= year * 12; month++) {
      const interestPayment = outstandingBalance * monthlyRate
      const principalPayment = emi - interestPayment

      yearInterestPaid += interestPayment
      yearPrincipalPaid += principalPayment
      outstandingBalance -= principalPayment
    }

    schedule.push({
      year,
      principalPaid: Math.round(yearPrincipalPaid),
      interestPaid: Math.round(yearInterestPaid),
      totalPaid: Math.round(yearPrincipalPaid + yearInterestPaid),
      outstandingBalance: Math.max(0, Math.round(outstandingBalance)),
    })
  }

  return schedule
}
