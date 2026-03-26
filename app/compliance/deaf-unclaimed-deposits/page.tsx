import { Metadata } from 'next'
import { DEAFClient } from '@/components/compliance/DEAFClient'

export const metadata: Metadata = {
  title: 'DEAF / Unclaimed Deposits | MNS Bank - Financial Awareness',
  description: 'Search for unclaimed deposits transferred to the Depositor Education and Awareness Fund (DEAF) as per RBI guidelines.',
}

export default function DEAFUnclaimedDepositsPage() {
  return <DEAFClient />
}
