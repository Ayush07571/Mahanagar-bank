import { Shield, Award, Clock, CheckCircle } from 'lucide-react'

export function TrustBar() {
  return (
    <div className="bg-gray-900 text-white py-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="font-medium">DICGC Insured</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-blue-400" />
            <span className="font-medium">RBI Member</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-purple-400" />
            <span className="font-medium">NPCI Certified</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="font-medium">Serving Since 1976</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="font-medium">ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Compact version for mobile
export function CompactTrustBar() {
  return (
    <div className="bg-gray-900 text-white py-2 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center space-x-4 text-xs">
          <span className="text-gray-300">DICGC Insured</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-300">RBI Member</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-300">NPCI Certified</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-300">Since 1976</span>
        </div>
      </div>
    </div>
  )
}

// Enhanced version with more details
export function EnhancedTrustBar() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="font-semibold text-sm text-green-400">DICGC Insured</h3>
            <p className="text-xs text-gray-400 mt-1">Your deposits are insured up to ₹5 lakh</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-semibold text-sm text-blue-400">RBI Member</h3>
            <p className="text-xs text-gray-400 mt-1">Regulated by Reserve Bank of India</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="font-semibold text-sm text-purple-400">NPCI Certified</h3>
            <p className="text-xs text-gray-400 mt-1">UPI and digital payments certified</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <Clock className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="font-semibold text-sm text-amber-400">Since 1976</h3>
            <p className="text-xs text-gray-400 mt-1">45+ years of trusted service</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <Shield className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="font-semibold text-sm text-red-400">ISO 27001</h3>
            <p className="text-xs text-gray-400 mt-1">Information security certified</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="font-semibold text-sm text-cyan-400">Banking Ombudsman</h3>
            <p className="text-xs text-gray-400 mt-1">Customer protection certified</p>
          </div>
        </div>
      </div>
    </div>
  )
}
