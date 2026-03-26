interface KFSPanelProps {
  indicativeRate: string
  processingFee: string
  repaymentTenure: string
  monthlyEmi: string
  totalCost: string
  prepaymentCharges: string
  className?: string
}

export function KFSPanel({
  indicativeRate,
  processingFee,
  repaymentTenure,
  monthlyEmi,
  totalCost,
  prepaymentCharges,
  className = ''
}: KFSPanelProps) {
  return (
    <div className={`bg-amber-50 border border-amber-200 rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-amber-900 mb-4">Key Facts Statement</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Indicative Interest Rate:</span>
          <span className="text-sm font-semibold text-gray-900">{indicativeRate}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Processing Fee:</span>
          <span className="text-sm font-semibold text-gray-900">{processingFee}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Repayment Tenure:</span>
          <span className="text-sm font-semibold text-gray-900">{repaymentTenure}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Monthly EMI (Example):</span>
          <span className="text-sm font-semibold text-gray-900">{monthlyEmi}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Total Cost of Credit (Example):</span>
          <span className="text-sm font-semibold text-gray-900">{totalCost}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Prepayment Charges:</span>
          <span className="text-sm font-semibold text-gray-900">{prepaymentCharges}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-amber-200">
        <p className="text-xs text-amber-700">
          <strong>Note:</strong> Rates are indicative. Actual terms determined at sanction based on applicant profile.
        </p>
      </div>
    </div>
  )
}
