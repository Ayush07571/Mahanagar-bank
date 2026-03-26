'use client'

import { useAccessibility } from './AccessibilityContext'
import { Button } from '@/components/ui/button'
import { 
  ZoomIn, 
  ZoomOut, 
  Contrast, 
  RotateCcw, 
  Palette,
  Type
} from 'lucide-react'

export function AccessibilityToolbar() {
  const {
    highContrast,
    invertColors,
    grayscale,
    wordSpacing,
    increaseFontSize,
    decreaseFontSize,
    toggleContrast,
    toggleInvert,
    toggleGrayscale,
    toggleWordSpacing,
    resetAll,
  } = useAccessibility()

  return (
    <div className="bg-gray-100 border-b border-gray-200 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600 font-medium">
            Accessibility Tools:
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={decreaseFontSize}
              className="p-2"
              title="Decrease font size"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={increaseFontSize}
              className="p-2"
              title="Increase font size"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            
            <div className="w-px h-4 bg-gray-300" />
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleContrast}
              className={`p-2 ${highContrast ? 'bg-blue-100' : ''}`}
              title="Toggle high contrast"
            >
              <Contrast className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleInvert}
              className={`p-2 ${invertColors ? 'bg-blue-100' : ''}`}
              title="Toggle invert colors"
            >
              <Palette className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleGrayscale}
              className={`p-2 ${grayscale ? 'bg-blue-100' : ''}`}
              title="Toggle grayscale"
            >
              <Palette className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleWordSpacing}
              className={`p-2 ${wordSpacing ? 'bg-blue-100' : ''}`}
              title="Toggle word spacing"
            >
              <Type className="w-4 h-4" />
            </Button>
            
            <div className="w-px h-4 bg-gray-300" />
            
            <Button
              variant="ghost"
              size="sm"
              onClick={resetAll}
              className="p-2"
              title="Reset all accessibility settings"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
