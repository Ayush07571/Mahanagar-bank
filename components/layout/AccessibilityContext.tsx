'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface AccessibilityContextType {
  fontSize: number
  highContrast: boolean
  invertColors: boolean
  grayscale: boolean
  wordSpacing: boolean
  increaseFontSize: () => void
  decreaseFontSize: () => void
  toggleContrast: () => void
  toggleInvert: () => void
  toggleGrayscale: () => void
  toggleWordSpacing: () => void
  resetAll: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const [invertColors, setInvertColors] = useState(false)
  const [grayscale, setGrayscale] = useState(false)
  const [wordSpacing, setWordSpacing] = useState(false)

  useEffect(() => {
    // Apply settings to document element
    document.documentElement.style.fontSize = `${fontSize}%`
    
    const classes = {
      'high-contrast': highContrast,
      'invert-colors': invertColors,
      'grayscale': grayscale,
      'word-spacing': wordSpacing,
    }

    Object.entries(classes).forEach(([className, active]) => {
      if (active) {
        document.documentElement.classList.add(className)
      } else {
        document.documentElement.classList.remove(className)
      }
    })
  }, [fontSize, highContrast, invertColors, grayscale, wordSpacing])

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 10, 150))
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 10, 80))
  const toggleContrast = () => setHighContrast(prev => !prev)
  const toggleInvert = () => setInvertColors(prev => !prev)
  const toggleGrayscale = () => setGrayscale(prev => !prev)
  const toggleWordSpacing = () => setWordSpacing(prev => !prev)
  const resetAll = () => {
    setFontSize(100)
    setHighContrast(false)
    setInvertColors(false)
    setGrayscale(false)
    setWordSpacing(false)
  }

  return (
    <AccessibilityContext.Provider value={{
      fontSize,
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
    }}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider')
  }
  return context
}
