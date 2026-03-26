// Accessibility utilities for MNS Bank
// This file provides accessibility improvements and color contrast fixes

export interface AccessibilityConfig {
  colorContrast: {
    minimum: 4.5
    enhanced: 7.0
  }
  focusIndicators: {
    outline: '2px solid #2563eb'
    inner: '2px solid #3b82f6'
  }
  screenReader: {
    skipLink: false
    announceNavigation: true
  }
}

// Color contrast utilities
export const colorUtils = {
  // Check if color combination meets WCAG AA standards
  checkContrast: (foreground: string, background: string): boolean => {
    const rgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex)
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null
    }

    const getLuminance = (r: number, g: number, b: number) => {
      const [rs, gs, bs] = [r, g, b].map(val => val / 255)
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
    }

    const contrastRatio = (l1: number, l2: number) => {
      const lighter = Math.max(l1, l2)
      const darker = Math.min(l1, l2)
      return (lighter + 0.05) / (darker + 0.05)
    }

    const fg = rgb(foreground)
    const bg = rgb(background)
    
    if (!fg || !bg) return false
    
    const ratio = contrastRatio(getLuminance(fg.r, fg.g, fg.b), getLuminance(bg.r, bg.g, bg.b))
    return ratio >= 4.5 // WCAG AA standard
  },

  // Generate accessible color combinations
  getAccessibleColors: (baseColor: string) => {
    const accessibleCombos = [
      { name: 'High Contrast', bg: '#000000', fg: '#ffffff' },
      { name: 'Medium Contrast', bg: '#1a1a1a', fg: '#ffffff' },
      { name: 'Low Contrast', bg: '#f3f4f6', fg: '#000000' },
      { name: 'Blue Theme', bg: '#1e40af', fg: '#ffffff' },
      { name: 'Green Theme', bg: '#059669', fg: '#ffffff' }
    ]
    
    return accessibleCombos.filter(combo => 
      colorUtils.checkContrast(combo.fg, combo.bg)
    )
  }
}

// ARIA utilities
export const ariaUtils = {
  // Generate proper ARIA labels
  generateLabel: (text: string, context?: string) => {
    const cleanText = text.replace(/[^a-zA-Z0-9\s]/g, '')
    return context ? `${cleanText} (${context})` : cleanText
  },

  // Generate accessibility attributes for interactive elements
  getButtonProps: (label: string, disabled?: boolean) => ({
    'aria-label': ariaUtils.generateLabel(label),
    'aria-disabled': disabled || undefined,
    'role': 'button',
    'tabIndex': disabled ? -1 : 0
  }),

  // Generate accessibility attributes for form inputs
  getInputProps: (label: string, required?: boolean, error?: string) => ({
    'aria-label': ariaUtils.generateLabel(label),
    'aria-required': required || undefined,
    'aria-invalid': error ? 'true' : 'false',
    'aria-describedby': error ? `${label}-error` : undefined,
    'role': 'textbox',
    'tabIndex': 0
  }),

  // Generate accessibility attributes for navigation
  getNavProps: (label: string, active?: boolean) => ({
    'aria-label': ariaUtils.generateLabel(label, 'navigation'),
    'aria-current': active ? 'page' : undefined,
    'role': 'navigation',
    'tabIndex': active ? 0 : -1
  })
}

// Focus management utilities
export const focusUtils = {
  // Trap focus within modal
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
          }
        }
      }
    }

    container.addEventListener('keydown', handleTabKey)
  },

  // Restore focus to element
  restoreFocus: (element: HTMLElement) => {
    setTimeout(() => {
      element.focus()
    }, 100)
  },

  // Announce content to screen readers
  announceToScreenReader: (message: string) => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    
    document.body.appendChild(announcement)
    
    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }
}

// Screen reader utilities
export const screenReaderUtils = {
  // Hide elements visually but keep them accessible to screen readers
  srOnly: (content: string) => `<span class="sr-only">${content}</span>`,
  
  // Add skip links for keyboard navigation
  skipLink: (target: string, label: string) => 
    `<a href="#${target}" class="skip-link" aria-label="${label}">${label}</a>`,
  
  // Add landmarks for better navigation
  landmark: (tag: string, label: string) => 
    `<${tag} role="region" aria-label="${label}">`,
  
  // Add proper heading structure
  heading: (level: number, text: string) => 
    `<h${level} class="text-${level}xl font-bold text-gray-900 mb-4">${text}</h${level}>`
}

// Responsive design utilities
export const responsiveUtils = {
  // Check if device is mobile
  isMobile: () => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 768
  },

  // Check if device is tablet
  isTablet: () => {
    if (typeof window === 'undefined') return false
    return window.innerWidth >= 768 && window.innerWidth < 1024
  },

  // Check if device is desktop
  isDesktop: () => {
    if (typeof window === 'undefined') return false
    return window.innerWidth >= 1024
  },

  // Get responsive classes
  getResponsiveClasses: (mobile?: string, tablet?: string, desktop?: string) => {
    if (responsiveUtils.isMobile()) return mobile || ''
    if (responsiveUtils.isTablet()) return tablet || ''
    if (responsiveUtils.isDesktop()) return desktop || ''
    return ''
  }
}

// Motion and animation utilities
export const motionUtils = {
  // Respect user's motion preferences
  prefersReducedMotion: () => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  // Add safe animations
  getAnimationClass: (reduced: boolean) => ({
    'transition-all': reduced ? 'transition-none' : 'transition-all duration-200 ease-in-out',
    'transform': reduced ? 'transform-none' : 'transform hover:scale-105',
    'animate': reduced ? 'animate-none' : 'animate-fade-in'
  })
}

// Form accessibility utilities
export const formUtils = {
  // Add error states with proper accessibility
  getErrorClass: (hasError: boolean) => 
    hasError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500',
  
  // Add success states
  getSuccessClass: (isSuccess: boolean) => 
    isSuccess ? 'border-green-500 focus:ring-green-500' : 'border-gray-300 focus:ring-blue-500',
  
  // Add required field indicators
  getRequiredIndicator: () => 
    `<span class="text-red-500 ml-1" aria-label="Required field">*</span>`,
  
  // Add field descriptions
  getFieldDescription: (text: string, id: string) => 
    `<p id="${id}-description" class="text-sm text-gray-600 mt-1">${text}</p>`
}

// CSS custom properties for accessibility
export const cssUtils = {
  // High contrast mode
  highContrast: `
    :root {
      --text-primary: #000000;
      --bg-primary: #ffffff;
      --text-secondary: #1a1a1a;
      --bg-secondary: #f3f4f6;
      --border-color: #374151;
      --focus-ring: #2563eb;
    }
  `,
  
  // Focus indicators
  focusIndicators: `
    :focus-visible {
      outline: 2px solid var(--focus-ring);
      outline-offset: 2px;
    }
    
    *:focus {
      outline: 2px solid var(--focus-ring);
      outline-offset: 2px;
    }
    
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `,
  
  // Reduced motion
  reducedMotion: `
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `
}
