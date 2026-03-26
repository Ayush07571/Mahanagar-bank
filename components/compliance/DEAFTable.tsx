'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

interface DEAFRecord {
  id: string
  customerId: string
  glCode: string
  accountNumber: string
  deafAccountNumber: string
  customerName: string
  address: string
  state: string
  district: string
  transactionDate: string
  amount: number
}

interface DEAFTableProps {
  searchTerm: string
}

export function DEAFTable({ searchTerm }: DEAFTableProps) {
  const t = useTranslations('compliance.deaf')
  const [records, setRecords] = useState<DEAFRecord[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Mock data for demonstration
  const mockRecords: DEAFRecord[] = [
    {
      id: '1',
      customerId: 'CUST001',
      glCode: 'GL001',
      accountNumber: '1234567890',
      deafAccountNumber: 'DEAF123456',
      customerName: 'RAMESH KUMAR SHARMA',
      address: '123, MG Road, Bhopal',
      state: 'Madhya Pradesh',
      district: 'Bhopal',
      transactionDate: '2023-03-15',
      amount: 25000
    },
    {
      id: '2',
      customerId: 'CUST002',
      glCode: 'GL002',
      accountNumber: '0987654321',
      deafAccountNumber: 'DEAF789012',
      customerName: 'SITA DEVI',
      address: '456, New Market, Bhopal',
      state: 'Madhya Pradesh',
      district: 'Bhopal',
      transactionDate: '2023-02-20',
      amount: 15000
    }
  ]

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true)
      setTimeout(() => {
        const filtered = mockRecords.filter(r => 
          r.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.accountNumber.includes(searchTerm)
        )
        setRecords(filtered)
        setIsLoading(false)
      }, 500)
    }
  }, [searchTerm])

  if (isLoading) return <div className="text-center py-8">{t('loading', { defaultValue: 'Loading...' })}</div>

  if (!searchTerm) return <div className="text-center py-8 text-gray-500">{t('search_placeholder')}</div>

  if (records.length === 0) return <div className="text-center py-8 text-gray-500">{t('no_records', { date: new Date().toLocaleDateString() })}</div>

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('columns.s_no')}</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('columns.customer_id')}</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('columns.gl_code')}</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('columns.account_number')}</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('columns.deaf_account_number')}</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('columns.customer_name')}</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('columns.address')}</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('columns.state')}</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('columns.district')}</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('columns.transaction_date')}</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('columns.amount')}</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {records.map((record, index) => (
            <tr key={record.id}>
              <td className="px-4 py-4 text-sm text-gray-900">{index + 1}</td>
              <td className="px-4 py-4 text-sm text-gray-900">{record.customerId}</td>
              <td className="px-4 py-4 text-sm text-gray-900">{record.glCode}</td>
              <td className="px-4 py-4 text-sm text-gray-900">{record.accountNumber}</td>
              <td className="px-4 py-4 text-sm text-gray-900">{record.deafAccountNumber}</td>
              <td className="px-4 py-4 text-sm text-gray-900">{record.customerName}</td>
              <td className="px-4 py-4 text-sm text-gray-900">{record.address}</td>
              <td className="px-4 py-4 text-sm text-gray-900">{record.state}</td>
              <td className="px-4 py-4 text-sm text-gray-900">{record.district}</td>
              <td className="px-4 py-4 text-sm text-gray-900">{record.transactionDate}</td>
              <td className="px-4 py-4 text-sm text-gray-900">{record.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
