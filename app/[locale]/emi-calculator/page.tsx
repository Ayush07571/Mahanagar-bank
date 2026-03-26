import { Metadata } from 'next'
import { EMICalculatorClient } from '@/components/tools/EMICalculatorClient'

export const metadata: Metadata = {
  title: 'EMI Calculator | MNS Bank - Plan Your Loan',
  description: 'Calculate your monthly loan payments with MNS Bank EMI calculator. Plan your home, personal, or car loan with ease.',
}

export default function EMICalculatorPage() {
  return <EMICalculatorClient />
}
