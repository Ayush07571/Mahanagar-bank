import { Metadata } from 'next'
import { DepositsClient } from '@/components/banking/DepositsClient'

export const metadata: Metadata = {
  title: 'Fixed & Recurring Deposits | MNS Bank - Grow Your Savings',
  description: 'Invest in Fixed Deposits (FD) and Recurring Deposits (RD) with MNS Bank for high returns. Special rates for senior citizens and flexible tenure options.',
}

export default function DepositsPage() {
  return <DepositsClient />
}
