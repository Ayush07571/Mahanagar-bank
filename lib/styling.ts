// Styling utilities for MNS Bank
// This file provides consistent styling, theme management, and visibility improvements

export interface ThemeConfig {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e293b',
      900: '#1e3a8a'
    }
    secondary: {
      50: '#f8fafc',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#fef3c7',
      400: '#fed7aa',
      500: '#f59e0b',
      600: '#d1d5db',
      700: '#b91c1c',
      800: '#7c3aed',
      900: '#451a03'
    }
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    }
    success: {
      light: '#10b981',
      dark: '#059669'
    }
    warning: {
      light: '#f59e0b',
      dark: '#d97706'
    }
    error: {
      light: '#ef4444',
      dark: '#dc2626'
    }
    info: {
      light: '#3b82f6',
      dark: '#1e40af'
    }
  }
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['JetBrains Mono', 'Fira Code', 'monospace']
    }
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem'
    }
    spacing: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem'
    }
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      full: '1.5rem'
    }
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      md: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px 0 rgba(0, 0, 0, 0.15)',
      xl: '0 20px 25px 0 rgba(0, 0, 0.25)'
    }
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  }
}

// CSS class utilities
export const cssUtils = {
  // Generate consistent color classes
  getColorClass: (color: string, shade: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 = 500, variant: string = '') => {
    const theme = themeConfig.colors
    const colorPalette = theme[color as keyof typeof theme.colors]
    return colorPalette[shade] ? `${color}-${shade}` : color
  },

  // Generate spacing classes
  getSpacingClass: (size: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24) => `p-${size}`,
  
  // Generate responsive display classes
  getDisplayClass: (breakpoint: 'sm' | 'md' | 'lg' | 'xl' = 'md') => {
    const displayMap = {
      sm: 'block sm:hidden',
      md: 'hidden sm:block md:hidden',
      lg: 'hidden md:block lg:hidden',
      xl: 'hidden md:block lg:hidden xl:block'
    }
    return displayMap[breakpoint]
  },

  // Generate text alignment classes
  getTextAlignClass: (alignment: 'left' | 'center' | 'right' | 'justify') => `text-${alignment}`,
  
  // Generate font weight classes
  getFontWeightClass: (weight: 'light' | 'normal' | 'medium' | 'semibold' | 'bold') => `font-${weight}`,
  
  // Generate shadow classes
  getShadowClass: (size: 'sm' | 'base' | 'md' | 'lg' | 'xl' = 'base') => `shadow-${size}`,

  // Generate border classes
  getBorderClass: (size: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'full' = 'base') => `border-${size}`,

  // Generate rounded classes
  getRoundedClass: (size: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'full' = 'base') => `rounded-${size}`,

  // Generate animation classes
  getAnimationClass: (animation: string) => {
    const animations = {
      fade: 'animate-fade-in',
      slide: 'animate-slide-in',
      bounce: 'animate-bounce',
      pulse: 'animate-pulse',
      spin: 'animate-spin'
    }
    return animations[animation as keyof typeof animations] || animation
  }
}

// Theme management utilities
export const themeUtils = {
  // Apply theme to document
  applyTheme: (theme: 'light' | 'dark' = 'light') => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    
    // Update CSS custom properties
    const colors = theme === 'dark' ? {
      text: '#ffffff',
      background: '#1f2937',
      primary: '#3b82f6',
      secondary: '#4b5563'
    } : themeConfig.colors.primary

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value)
    })
  },

  // Get current theme
  getCurrentTheme: () => {
    return document.documentElement.getAttribute('data-theme') || 'light'
  },

  // Toggle theme
  toggleTheme: () => {
    const currentTheme = themeUtils.getCurrentTheme()
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    themeUtils.applyTheme(newTheme)
    
    // Announce theme change to screen readers
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'theme_change', {
        event_category: 'Accessibility',
        event_action: 'toggle',
        event_label: newTheme
      })
    }
  }
}

// Component styling utilities
export const componentUtils = {
  // Generate consistent button styles
  getButtonClass: (variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary', size: 'sm' | 'md' | 'lg' = 'md') => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-blue-500'
    }
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    }
    
    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`
  },

  // Generate consistent card styles
  getCardClass: (elevated: boolean = false) => {
    const baseClasses = 'bg-white rounded-lg shadow-md border border-gray-200'
    const elevatedClasses = 'bg-white rounded-lg shadow-lg border-0 shadow-xl'
    return elevated ? elevatedClasses : baseClasses
  },

  // Generate consistent input styles
  getInputClass: (hasError: boolean = false) => {
    const baseClasses = 'w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500'
    const errorClasses = hasError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
    return `${baseClasses} ${errorClasses}`
  },

  // Generate consistent navigation styles
  getNavLinkClass: (active: boolean = false) => {
    const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors'
    const activeClasses = active ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
    return `${baseClasses} ${activeClasses}`
  }
}

// Visibility and contrast utilities
export const visibilityUtils = {
  // Check if element is visible in viewport
  isInViewport: (element: HTMLElement) => {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
  },

  // Lazy load images for better performance
  lazyLoadImage: (img: HTMLImageElement) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const src = img.getAttribute('data-src')
          if (src) {
            img.src = src
            img.removeAttribute('data-src')
          }
        }
      })
    })

    observer.observe(img)
  },

  // Add loading states
  addLoadingState: (element: HTMLElement, loading: boolean) => {
    if (loading) {
      element.setAttribute('aria-busy', 'true')
      element.classList.add('opacity-50', 'pointer-events-none')
    } else {
      element.removeAttribute('aria-busy')
      element.classList.remove('opacity-50', 'pointer-events-none')
    }
  }
}

// Performance utilities
export const performanceUtils = {
  // Debounce function calls
  debounce: <T extends any[], R = any>(
    func: (...args: T[]) => R,
    wait: number
  ) => {
    let timeout: NodeJS.Timeout
    return (...args: T[]) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  },

  // Throttle function calls
  throttle: <T extends any[], R = any>(
    func: (...args: T[]) => R,
    limit: number
  ) => {
    let inThrottle = false
    return (...args: T[]) => {
      if (!inThrottle) {
        inThrottle = true
        func(...args)
        setTimeout(() => {
          inThrottle = false
        }, limit)
      }
    }
  }
}

// Responsive image utilities
export const imageUtils = {
  // Generate responsive image srcset
  getResponsiveSrcset: (baseSrc: string, sizes: number[]) => {
    return sizes
      .map(size => `${baseSrc}?w=${size}&q=80`)
      .join(', ')
  },

  // Generate optimized image attributes
  getImageProps: (src: string, alt: string, sizes?: number[], lazy: boolean = true) => ({
    src: lazy ? undefined : src,
    'data-src': lazy ? src : undefined,
    alt,
    sizes: sizes ? imageUtils.getResponsiveSrcset(src, sizes) : undefined,
    loading: lazy ? 'lazy' : 'eager',
    decoding: 'async',
    className: 'w-full h-auto object-cover rounded-lg'
  })
}

// Form validation utilities
export const validationUtils = {
  // Email validation
  isValidEmail: (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  // Phone validation
  isValidPhone: (phone: string) => {
    const phoneRegex = /^[\+]?[1-9][\d\s\-\s\(\d{3}\)\s\d{4}$/
    return phoneRegex.test(phone)
  },

  // PAN card validation (Indian banking)
  isValidPAN: (pan: string) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}$/
    return panRegex.test(pan)
  },

  // IFSC code validation
  isValidIFSC: (ifsc: string) => {
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{4}$/
    return ifscRegex.test(ifsc)
  }
}

// Error handling utilities
export const errorUtils = {
  // Generate user-friendly error messages
  getErrorMessage: (error: any, context?: string) => {
    const errorMessages: Record<string, string> = {
      'Network Error': 'Unable to connect. Please check your internet connection and try again.',
      'Validation Error': 'Please check the entered information and try again.',
      'Authentication Error': 'Your session has expired. Please log in again.',
      'Server Error': 'We are experiencing technical difficulties. Please try again later.',
      'Timeout Error': 'The request took too long to complete. Please try again.',
      'Default': 'An unexpected error occurred. Please try again.'
    }

    const errorType = error?.name || 'Default'
    const message = errorMessages[errorType] || errorMessages['Default']
    
    return context ? `${message} (${context})` : message
  },

  // Log errors for debugging
  logError: (error: any, context?: string) => {
    console.error(`[MNS Bank Error] ${context ? context + ': ' : ''}`, error)
    
    // Send to error tracking service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'error', {
        event_category: 'Application',
        event_action: error?.name || 'unknown',
        event_label: context || 'general',
        custom_map: {
          custom_parameter_1: error?.message || 'Unknown error'
        }
      })
    }
  }
}
