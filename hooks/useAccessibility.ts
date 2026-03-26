// Accessibility React hooks for MNS Bank
// This file provides easy-to-use hooks for accessibility and styling improvements

import { useState, useEffect, useCallback } from 'react'
import { colorUtils, ariaUtils, focusUtils, themeUtils, responsiveUtils } from '@/lib/accessibility'
import { cssUtils } from '@/lib/styling'

export interface UseAccessibilityOptions {
  initialTheme?: 'light' | 'dark'
  highContrast?: boolean
  reducedMotion?: boolean
  announceNavigation?: boolean
  skipLinks?: boolean
}

export const useAccessibility = (options: UseAccessibilityOptions = {}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(options.initialTheme || 'light')
  const [highContrast, setHighContrast] = useState(options.highContrast || false)
  const [reducedMotion, setReducedMotion] = useState(options.reducedMotion || false)
  const [announceNavigation, setAnnounceNavigation] = useState(options.announceNavigation || false)

  // Apply theme on mount
  useEffect(() => {
    themeUtils.applyTheme(theme)
  }, [theme])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      focusUtils.trapFocus(document.body)
    }
  }, [])

  // Add keyboard event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Theme toggle
  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    themeUtils.applyTheme(newTheme)
  }, [theme])

  // High contrast toggle
  const toggleHighContrast = useCallback(() => {
    const newHighContrast = !highContrast
    setHighContrast(newHighContrast)
    
    // Apply high contrast CSS
    if (newHighContrast) {
      const style = document.createElement('style')
      style.textContent = cssUtils.highContrast
      document.head.appendChild(style)
    } else {
      // Remove high contrast style if it exists
      const existingStyle = document.querySelector('style[data-high-contrast]')
      if (existingStyle) {
        existingStyle.remove()
      }
    }
  }, [highContrast])

  // Reduced motion toggle
  const toggleReducedMotion = useCallback(() => {
    const newReducedMotion = !reducedMotion
    setReducedMotion(newReducedMotion)
    
    // Apply reduced motion CSS
    if (newReducedMotion) {
      const style = document.createElement('style')
      style.textContent = cssUtils.reducedMotion
      style.setAttribute('data-reduced-motion', 'true')
      document.head.appendChild(style)
    } else {
      // Remove reduced motion style if it exists
      const existingStyle = document.querySelector('style[data-reduced-motion]')
      if (existingStyle) {
        existingStyle.remove()
      }
    }
  }, [reducedMotion])

  // Skip links toggle
  const toggleSkipLinks = useCallback(() => {
    const newSkipLinks = !skipLinks
    setSkipLinks(newSkipLinks)
  }, [skipLinks])

  // Announce navigation changes
  const announcePageChange = useCallback((pageName: string) => {
    if (announceNavigation) {
      ariaUtils.announceToScreenReader(`Navigated to ${pageName}`)
    }
  }, [announceNavigation])

  // Check if colors are accessible
  const isColorAccessible = useCallback((foreground: string, background: string) => {
    return colorUtils.checkContrast(foreground, background)
  }, [])

  // Get responsive classes
  const getResponsiveClasses = useCallback((mobile?: string, tablet?: string, desktop?: string) => {
    return responsiveUtils.getResponsiveClasses(mobile, tablet, desktop)
  }, [])

  // Get accessible color combinations
  const getAccessibleColors = useCallback((baseColor: string) => {
    return colorUtils.getAccessibleColors(baseColor)
  }, [])

  return {
    // Theme state
    theme,
    setTheme,
    toggleTheme,
    
    // Accessibility preferences
    highContrast,
    setHighContrast,
    toggleHighContrast,
    reducedMotion,
    setReducedMotion,
    toggleReducedMotion,
    
    // Navigation preferences
    announceNavigation,
    setAnnounceNavigation,
    announcePageChange,
    
    // Utility functions
    isColorAccessible,
    getAccessibleColors,
    getResponsiveClasses
  }
}

export interface UseStylingOptions {
  initialVariant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  initialSize?: 'sm' | 'md' | 'lg'
  initialColor?: string
  rounded?: boolean
  shadow?: boolean
  fullWidth?: boolean
}

export const useStyling = (options: UseStylingOptions = {}) => {
  const [variant, setVariant] = useState(options.initialVariant || 'primary')
  const [size, setSize] = useState(options.initialSize || 'md')
  const [color, setColor] = useState(options.initialColor || 'primary')

  // Generate button classes
  const getButtonClasses = useCallback((buttonVariant?: string, buttonSize?: string) => {
    const variant = buttonVariant || variant
    const size = buttonSize || size
    return cssUtils.getButtonClass(variant, size)
  }, [variant, size])

  // Generate card classes
  const getCardClasses = useCallback((elevated?: boolean) => {
    return cssUtils.getCardClass(elevated)
  }, [])

  // Generate input classes
  const getInputClasses = useCallback((hasError?: boolean) => {
    return cssUtils.getInputClass(hasError || false)
  }, [])

  // Color utilities
  const getColorClass = useCallback((colorName: string, shade: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 = 500) => {
    return cssUtils.getColorClass(colorName, shade)
  }, [])

  // Spacing utilities
  const getSpacingClass = useCallback((size: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24) => {
    return cssUtils.getSpacingClass(size)
  }, [])

  // Animation utilities
  const getAnimationClass = useCallback((animation: string) => {
    return cssUtils.getAnimationClass(animation)
  }, [])

  return {
    // Styling state
    variant,
    setVariant,
    size,
    setSize,
    color,
    setColor,
    rounded,
    shadow,
    fullWidth,
    
    // Utility functions
    getButtonClasses,
    getCardClasses,
    getInputClasses,
    getColorClass,
    getSpacingClass,
    getAnimationClass
  }
}

export interface UseFocusManagementOptions {
  initialFocus?: string
  restoreFocus?: boolean
}

export const useFocusManagement = (options: UseFocusManagementOptions = {}) => {
  const [focusedElement, setFocusedElement] = useState<string | null>(options.initialFocus || null)
  const [shouldRestoreFocus, setShouldRestoreFocus] = useState(options.restoreFocus || false)

  // Set focus to element
  const setFocus = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      setFocusedElement(elementId)
      element.focus()
      ariaUtils.announceToScreenReader(`Focused on ${elementId}`)
    }
  }, [])

  // Restore focus to previously focused element
  const restoreFocus = useCallback(() => {
    if (shouldRestoreFocus && focusedElement) {
      focusUtils.restoreFocus(document.getElementById(focusedElement))
      setShouldRestoreFocus(false)
    }
  }, [shouldRestoreFocus, focusedElement])

  return {
    focusedElement,
    setFocusedElement,
    shouldRestoreFocus,
    setShouldRestoreFocus,
    setFocus,
    restoreFocus
  }
}

export interface UseLoadingStateOptions {
  initialLoading?: boolean
  delay?: number
}

export const useLoadingState = (options: UseLoadingStateOptions = {}) => {
  const [isLoading, setIsLoading] = useState(options.initialLoading || false)

  // Set loading state with optional delay
  const setLoading = useCallback((loading: boolean, delay?: number) => {
    if (delay && delay > 0) {
      setTimeout(() => setIsLoading(loading), delay)
    } else {
      setIsLoading(loading)
    }
  }, [])

  return {
    isLoading,
    setIsLoading,
    setLoading
  }
}

export interface UseErrorStateOptions {
  initialError?: string | null
}

export const useErrorState = (options: UseErrorStateOptions = {}) => {
  const [error, setError] = useState<string | null>(options.initialError || null)

  // Clear error after delay
  const clearError = useCallback((delay: number = 5000) => {
    setTimeout(() => setError(null), delay)
  }, [])

  return {
    error,
    setError,
    clearError
  }
}
