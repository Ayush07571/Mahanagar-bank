import { Metadata } from 'next'
import { GrievanceClient } from '@/components/compliance/GrievanceClient'

export const metadata: Metadata = {
  title: 'Grievance Redressal | MNS Bank - Your Concerns, Our Priority',
  description: 'MNS Bank is committed to resolving your concerns promptly and fairly. Learn about our grievance redressal process and escalation matrix.',
}

export default function GrievanceRedressalPage() {
  return <GrievanceClient />
}
