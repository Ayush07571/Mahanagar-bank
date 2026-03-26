import { Button } from '@/components/ui/button'
import { ExternalLink, Lock, Shield, Clock } from 'lucide-react'

interface NetBankingCTAProps {
  variant?: 'default' | 'compact' | 'featured'
  className?: string
}

export function NetBankingCTA({ variant = 'default', className = '' }: NetBankingCTAProps) {
  const baseClasses = "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
  const compactClasses = "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium text-sm px-4 py-2"
  const featuredClasses = "bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:via-amber-700 hover:to-orange-700 text-white font-bold text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"

  const getButtonClasses = () => {
    switch (variant) {
      case 'compact':
        return compactClasses
      case 'featured':
        return featuredClasses
      default:
        return baseClasses
    }
  }

  const getButtonContent = () => {
    switch (variant) {
      case 'compact':
        return (
          <>
            <Lock className="w-4 h-4 mr-2" />
            Net Banking
          </>
        )
      case 'featured':
        return (
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Lock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold">Secure Net Banking</div>
              <div className="text-sm opacity-90">24/7 Access to Your Account</div>
            </div>
            <ExternalLink className="w-5 h-5" />
          </div>
        )
      default:
        return (
          <>
            <Lock className="w-4 h-4 mr-2" />
            Net Banking
            <ExternalLink className="w-4 h-4 ml-2" />
          </>
        )
    }
  }

  return (
    <div className={className}>
      <Button
        asChild
        className={`${getButtonClasses()} ${className}`}
        aria-label="Access Net Banking portal securely"
      >
        <a
          href="https://netbanking.mnsbank.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          {getButtonContent()}
        </a>
      </Button>
      
      {variant === 'featured' && (
        <div className="mt-4 flex items-center justify-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Shield className="w-4 h-4 text-green-600" />
            <span>Bank-level Security</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>24/7 Available</span>
          </div>
        </div>
      )}
    </div>
  )
}

// Quick Access Button for header
export function QuickNetBankingButton() {
  return (
    <Button
      asChild
      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium px-4 py-2 text-sm shadow-md hover:shadow-lg transition-all duration-200"
      aria-label="Quick access to Net Banking"
    >
      <a
        href="https://netbanking.mnsbank.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <Lock className="w-4 h-4 mr-2" />
        Net Banking
      </a>
    </Button>
  )
}

// Login Form Component for Net Banking
export function NetBankingLoginForm() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Net Banking Login</h2>
        <p className="text-gray-600">Access your account securely</p>
      </div>
      
      <form className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            User ID
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your User ID"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your Password"
            required
          />
        </div>
        
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
            Forgot Password?
          </a>
        </div>
        
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium"
        >
          Login to Net Banking
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 mb-2">New to Net Banking?</p>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          Register Now
        </a>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Shield className="w-3 h-3" />
            <span>Secure</span>
          </div>
          <div className="flex items-center space-x-1">
            <Lock className="w-3 h-3" />
            <span>Encrypted</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>24/7</span>
          </div>
        </div>
      </div>
    </div>
  )
}
