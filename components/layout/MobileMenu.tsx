'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Menu, ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

interface MenuItem {
  label: string
  href: string
  children?: MenuItem[]
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleExpanded = (label: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(label)) {
      newExpanded.delete(label)
    } else {
      newExpanded.add(label)
    }
    setExpandedItems(newExpanded)
  }

  const personalMenuItems: MenuItem[] = [
    {
      label: 'Accounts',
      href: '/personal-banking/savings-account',
      children: [
        { label: 'Savings Account', href: '/personal-banking/savings-account' },
        { label: 'Current Account', href: '/personal-banking/current-account' },
        { label: 'Salary Account', href: '/personal-banking/salary-account' },
      ]
    },
    {
      label: 'Loans',
      href: '/personal-banking/loans',
      children: [
        { label: 'Personal Loan', href: '/personal-banking/personal-loan' },
        { label: 'Home Loan', href: '/personal-banking/home-loan' },
        { label: 'Car Loan', href: '/personal-banking/car-loan' },
        { label: 'Education Loan', href: '/personal-banking/education-loan' },
      ]
    },
    {
      label: 'Deposits',
      href: '/personal-banking/deposits',
      children: [
        { label: 'Fixed Deposits', href: '/personal-banking/fixed-deposits' },
        { label: 'Recurring Deposits', href: '/personal-banking/recurring-deposits' },
        { label: 'Senior Citizen Deposits', href: '/personal-banking/senior-deposits' },
      ]
    },
    {
      label: 'Digital Services',
      href: '/digital-services',
      children: [
        { label: 'Mobile Banking', href: '/digital-services/mobile-banking' },
        { label: 'Internet Banking', href: '/digital-services/internet-banking' },
        { label: 'UPI Services', href: '/digital-services/upi-services' },
        { label: 'Bill Payments', href: '/digital-services/bill-payments' },
      ]
    },
    {
      label: 'Cards',
      href: '/personal-banking/cards',
      children: [
        { label: 'Debit Cards', href: '/personal-banking/debit-cards' },
        { label: 'Credit Cards', href: '/personal-banking/credit-cards' },
        { label: 'Prepaid Cards', href: '/personal-banking/prepaid-cards' },
      ]
    },
  ]

  const businessMenuItems: MenuItem[] = [
    {
      label: 'Accounts',
      href: '/business-banking/current-account',
      children: [
        { label: 'Current Account', href: '/business-banking/current-account' },
        { label: 'Overdraft Account', href: '/business-banking/overdraft-account' },
        { label: 'Cash Credit Account', href: '/business-banking/cash-credit-account' },
      ]
    },
    {
      label: 'Business Loans',
      href: '/business-banking/biz-loans',
      children: [
        { label: 'Working Capital Loan', href: '/business-banking/working-capital-loan' },
        { label: 'Term Loan', href: '/business-banking/term-loan' },
        { label: 'Machinery Loan', href: '/business-banking/machinery-loan' },
        { label: 'Property Loan', href: '/business-banking/property-loan' },
      ]
    },
    {
      label: 'Business Deposits',
      href: '/business-banking/biz-deposits',
      children: [
        { label: 'Current Account Deposits', href: '/business-banking/current-deposits' },
        { label: 'Fixed Deposits', href: '/business-business/fixed-deposits' },
        { label: 'Business Savings', href: '/business-banking/savings' },
      ]
    },
    {
      label: 'Business Services',
      href: '/business-banking/biz-services',
      children: [
        { label: 'Trade Finance', href: '/business-banking/trade-finance' },
        { label: 'Cash Management', href: '/business-banking/cash-management' },
        { label: 'Forex Services', href: '/business-banking/forex-services' },
        { label: 'Merchant Services', href: '/business-banking/merchant-services' },
      ]
    },
    {
      label: 'MSME Services',
      href: '/business-banking/msme-services',
      children: [
        { label: 'MSME Loans', href: '/business-banking/msme-loans' },
        { label: 'Government Schemes', href: '/business-banking/govt-schemes' },
        { label: 'Business Advisory', href: '/business-business/advisory' },
      ]
    },
  ]

  const otherMenuItems: MenuItem[] = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Branch Locator', href: '/locate-us' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Careers', href: '/careers' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Grievance Redressal', href: '/grievance-redressal' },
    { label: 'DEAF/Unclaimed Deposits', href: '/deaf-unclaimed-deposits' },
  ]

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.has(item.label)
    const paddingLeft = level === 0 ? '' : 'pl-6'

    return (
      <div key={item.href} className="border-b border-gray-100">
        <div className="flex items-center justify-between">
          <Link
            href={item.href}
            className={`${paddingLeft} block py-3 px-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors`}
            onClick={() => {
              if (hasChildren) {
                toggleExpanded(item.label)
              } else {
                onClose()
              }
            }}
          >
            {item.label}
          </Link>
          {hasChildren && (
            <button
              onClick={() => toggleExpanded(item.label)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-expanded={isExpanded}
              aria-label={`Toggle ${item.label} menu`}
            >
              {isExpanded ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="bg-gray-50">
            {item.children?.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="overflow-y-auto h-full pb-20">
          {/* Banking Categories */}
          <div className="bg-blue-50 p-4">
            <h3 className="text-sm font-semibold text-blue-900 mb-3">Banking Services</h3>
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Personal Banking</h4>
                <div className="space-y-1">
                  {personalMenuItems.map((item) => renderMenuItem(item))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Business Banking</h4>
                <div className="space-y-1">
                  {businessMenuItems.map((item) => renderMenuItem(item))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Links */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Other Services</h3>
            <div className="space-y-1">
              {otherMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 px-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors rounded-lg"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Net Banking CTA */}
          <div className="p-4 bg-gray-50">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium"
              onClick={onClose}
            >
              <Link href="https://netbanking.mnsbank.com" target="_blank" rel="noopener noreferrer">
                Net Banking
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
