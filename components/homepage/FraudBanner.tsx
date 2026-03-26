'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Shield, Phone, X, ExternalLink } from 'lucide-react'

interface FraudAlert {
  id: string
  type: 'scam' | 'phishing' | 'security' | 'info'
  title: string
  description: string
  severity: 'high' | 'medium' | 'low'
  date: string
  link?: string
}

interface FraudBannerProps {
  alerts?: FraudAlert[]
  maxAlerts?: number
  className?: string
}

export function FraudBanner({ 
  alerts = [], 
  maxAlerts = 3, 
  className = '' 
}: FraudBannerProps) {
  const [dismissedAlerts, setDismissedAlerts] = useState<Set<string>>(new Set())

  const displayedAlerts = alerts
    .filter(alert => !dismissedAlerts.has(alert.id))
    .slice(0, maxAlerts)

  const dismissAlert = (alertId: string) => {
    setDismissedAlerts(prev => new Set(prev).add(alertId))
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-50 border-red-200 text-red-800'
      case 'medium':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800'
      case 'low':
        return 'bg-blue-50 border-blue-200 text-blue-800'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'scam':
        return <AlertTriangle className="w-5 h-5" />
      case 'phishing':
        return <Shield className="w-5 h-5" />
      case 'security':
        return <Shield className="w-5 h-5" />
      default:
        return <AlertTriangle className="w-5 h-5" />
    }
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <h3 className="text-xl font-bold text-gray-900">Fraud Awareness & Security</h3>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open('/compliance/cyber-awareness', '_self')}
        >
          Security Center
        </Button>
      </div>

      {/* Fraud Alerts */}
      <div className="space-y-4">
        {displayedAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`border rounded-lg p-4 ${getSeverityColor(alert.severity)}`}
          >
            {/* Alert Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className={`p-1 rounded ${getSeverityColor(alert.severity)}`}>
                  {getTypeIcon(alert.type)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{alert.title}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      alert.severity === 'high' ? 'bg-red-100 text-red-800' :
                      alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {alert.severity.toUpperCase()} PRIORITY
                    </span>
                    <span className="text-xs text-gray-500">
                      {alert.date}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => dismissAlert(alert.id)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Alert Content */}
            <p className="text-sm text-gray-700 mb-3">
              {alert.description}
            </p>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button
                size="sm"
                onClick={() => window.open('tel:1800-123-4567', '_self')}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Report Fraud
              </Button>

              {alert.link && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(alert.link, '_self')}
                >
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        ))}

        {/* No Alerts State */}
        {displayedAlerts.length === 0 && (
          <div className="text-center py-8">
            <div className="text-green-400 mb-4">
              <Shield className="w-16 h-16 mx-auto" />
            </div>
            <p className="text-gray-600">No current fraud alerts</p>
            <p className="text-sm text-gray-500">
              Stay vigilant. We'll notify you immediately of any security concerns.
            </p>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Report Suspicious Activity</h4>
            <p className="text-sm text-gray-600 mb-3">
              If you notice any unauthorized transactions or suspicious activity
            </p>
            <Button
              size="sm"
              onClick={() => window.open('tel:1800-123-4567', '_self')}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Security Tips</h4>
            <p className="text-sm text-gray-600 mb-3">
              Learn how to protect yourself from banking fraud
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('/compliance/cyber-awareness', '_self')}
            >
              <Shield className="w-4 h-4 mr-2" />
              View Tips
            </Button>
          </div>

          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">24/7 Helpline</h4>
            <p className="text-sm text-gray-600 mb-3">
              Report fraud immediately
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4 text-green-600" />
              <span className="font-mono font-bold text-green-600">1800-123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Default fraud alerts data
export const defaultFraudAlerts: FraudAlert[] = [
  {
    id: '1',
    type: 'phishing',
    title: 'Phishing Alert',
    description: 'Fraudulent emails claiming to be from MNS Bank asking for account details, OTPs, or passwords. Never share sensitive information via email.',
    severity: 'high',
    date: '2024-01-15',
    link: '/compliance/cyber-awareness'
  },
  {
    id: '2',
    type: 'scam',
    title: 'Loan Scam Warning',
    description: 'Individuals offering instant loan approvals with advance fee payments. MNS Bank never asks for payment to release loans.',
    severity: 'high',
    date: '2024-01-12'
  },
  {
    id: '3',
    type: 'security',
    title: 'Secure Banking Reminder',
    description: 'Always use official MNS Bank website or mobile app for banking. Verify URLs start with https://mnsbank.com',
    severity: 'medium',
    date: '2024-01-10',
    link: '/digital-services'
  },
  {
    id: '4',
    type: 'info',
    title: 'New Security Features',
    description: 'We\'ve enhanced our security with two-factor authentication and real-time transaction alerts.',
    severity: 'low',
    date: '2024-01-08'
  },
  {
    id: '5',
    type: 'scam',
    title: 'KYC Update Fraud',
    description: 'Fraudsters requesting KYC updates with payment. MNS Bank never asks for payment for KYC updates.',
    severity: 'high',
    date: '2024-01-05'
  }
]
