// Performance optimization utilities for MNS Bank
// This file provides image optimization, lazy loading, and performance monitoring

export interface ImageOptimizationOptions {
  quality?: number
  format?: 'webp' | 'avif' | 'jpg' | 'png'
  width?: number
  height?: number
  placeholder?: 'blur' | 'color' | 'empty'
  loading?: 'lazy' | 'eager'
  sizes?: string
  srcset?: boolean
}

export interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
  memoryUsage?: number
  bundleSize?: number
}

// Image optimization utilities
export class ImageOptimizer {
  // Generate responsive image srcset
  static generateSrcSet(baseImageUrl: string, widths: number[]): string {
    return widths
      .map(width => `${baseImageUrl}?w=${width}&q=80 ${width}w`)
      .join(', ')
  }

  // Generate optimized image URL
  static getOptimizedImageUrl(
    imageUrl: string,
    options: ImageOptimizationOptions = {}
  ): string {
    const params = new URLSearchParams()
    
    if (options.width) params.set('w', options.width.toString())
    if (options.height) params.set('h', options.height.toString())
    if (options.quality) params.set('q', options.quality.toString())
    if (options.format) params.set('f', options.format)
    
    const paramString = params.toString()
    return paramString ? `${imageUrl}?${paramString}` : imageUrl
  }

  // Generate placeholder image URL
  static getPlaceholderUrl(
    imageUrl: string,
    type: 'blur' | 'color' | 'empty' = 'blur',
    width?: number,
    height?: number
  ): string => {
    switch (type) {
      case 'blur':
        return `${imageUrl}?w=${width || 400}&h=${height || 300}&blur=20&q=30`
      case 'color':
        return `data:image/svg+xml;base64,${btoa(
          `<svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#f3f4f6"/>
            <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999" font-family="sans-serif" font-size="14">Loading...</text>
          </svg>`
        )}`
      case 'empty':
        return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
      default:
        return imageUrl
    }
  }

  // Generate progressive image loading markup
  static generateProgressiveImage(
    imageUrl: string,
    alt: string,
    options: ImageOptimizationOptions = {}
  ): string => {
    const optimizedUrl = this.getOptimizedImageUrl(imageUrl, options)
    const placeholderUrl = this.getPlaceholderUrl(imageUrl, options.placeholder, options.width, options.height)
    
    return `
      <picture>
        ${options.srcset ? `
          <source 
            type="image/webp" 
            srcset="${this.generateSrcSet(imageUrl, [320, 640, 768, 1024, 1280])}"
          />
        ` : ''}
        <img
          src="${optimizedUrl}"
          ${options.srcset ? `srcset="${this.generateSrcSet(imageUrl, [320, 640, 768, 1024, 1280])}"` : ''}
          alt="${alt}"
          loading="${options.loading || 'lazy'}"
          decoding="async"
          ${options.sizes ? `sizes="${options.sizes}"` : ''}
          width="${options.width || ''}"
          height="${options.height || ''}"
          style="background-image: url('${placeholderUrl}'); background-size: cover; background-position: center;"
          onload="this.style.backgroundImage='none';"
          onerror="this.style.backgroundImage='none';"
        />
      </picture>
    `
  }

  // Generate critical CSS for above-the-fold content
  static generateCriticalCSS(criticalStyles: string[]): string => {
    return criticalStyles.join('\n')
  }

  // Preload critical resources
  static generatePreloadLinks(resources: Array<{
    href: string
    as: 'script' | 'style' | 'font' | 'image'
    type?: string
    crossorigin?: string
  }>): string[] => {
    return resources.map(resource => {
      let link = `<link rel="preload" href="${resource.href}" as="${resource.as}"`
      
      if (resource.type) link += ` type="${resource.type}"`
      if (resource.crossorigin) link += ` crossorigin="${resource.crossorigin}"`
      
      return link + '>'
    })
  }
}

// Lazy loading utilities
export class LazyLoader {
  private static observer: IntersectionObserver | null = null
  private static elements = new WeakMap()

  // Initialize intersection observer
  static initObserver(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            this.loadElement(element)
            this.observer?.unobserve(element)
          }
        })
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    )
  }

  // Observe element for lazy loading
  static observe(element: HTMLElement): void {
    if (!this.observer) {
      this.initObserver()
    }

    // Store original element state
    this.elements.set(element, {
      loaded: false,
      src: element.getAttribute('data-src'),
      originalContent: element.innerHTML
    })

    this.observer?.observe(element)
  }

  // Load element content
  private static loadElement(element: HTMLElement): void {
    const data = this.elements.get(element)
    if (!data || data.loaded) return

    data.loaded = true

    // Handle different element types
    if (element.tagName === 'IMG') {
      const img = element as HTMLImageElement
      if (data.src) {
        img.src = data.src
        img.style.backgroundImage = 'none'
      }
    } else if (element.tagName === 'SCRIPT') {
      const script = element as HTMLScriptElement
      if (data.src) {
        script.src = data.src
        script.onload = () => {
          if (data.originalContent) {
            element.innerHTML = data.originalContent
          }
        }
      }
    }
  }

  // Load all lazy elements
  static loadAll(): void {
    this.elements.forEach((data, element) => {
      if (!data.loaded) {
        this.loadElement(element)
      }
    })
  }

  // Destroy observer
  static destroy(): void {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = null
    }
  }
}

// Performance monitoring
export class PerformanceMonitor {
  private static metrics: Partial<PerformanceMetrics> = {}
  private static observers: PerformanceObserver[] = []

  // Initialize performance monitoring
  static init(): void {
    if (typeof window === 'undefined') return

    // Monitor Core Web Vitals
    this.observeWebVitals()
    
    // Monitor resource loading
    this.observeResources()
    
    // Monitor memory usage
    this.observeMemory()
  }

  // Observe Web Vitals
  private static observeWebVitals(): void {
    try {
      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach(entry => {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.firstContentfulPaint = entry.startTime
            }
            if (entry.name === 'largest-contentful-paint') {
              this.metrics.largestContentfulPaint = entry.startTime
            }
          })
        })

        observer.observe({ entryTypes: ['paint'] })
        this.observers.push(observer)
      }

      // First Input Delay
      if ('PerformanceEventTiming' in window) {
        const measureInputDelay = () => {
          const inputDelay = performance.now() - event.timeStamp
          this.metrics.firstInputDelay = inputDelay
        }

        document.addEventListener('pointerdown', measureInputDelay, { once: true })
        document.addEventListener('keydown', measureInputDelay, { once: true })
      }

      // Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach(entry => {
            if (!entry.hadRecentInput) {
              this.metrics.cumulativeLayoutShift = 
                (this.metrics.cumulativeLayoutShift || 0) + entry.value
            }
          })
        })

        observer.observe({ entryTypes: ['layout-shift'] })
        this.observers.push(observer)
      }
    } catch (error) {
      console.error('Failed to initialize performance monitoring:', error)
    }
  }

  // Observe resource loading
  private static observeResources(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const bundleSize = entries
          .filter(entry => entry.name.includes('bundle'))
          .reduce((total, entry) => total + (entry as any).transferSize, 0)

        if (bundleSize > 0) {
          this.metrics.bundleSize = bundleSize
        }
      })

      observer.observe({ entryTypes: ['resource'] })
      this.observers.push(observer)
    }
  }

  // Observe memory usage
  private static observeMemory(): void {
    if ('memory' in performance) {
      this.metrics.memoryUsage = (performance as any).memory.usedJSHeapSize
    }
  }

  // Get current metrics
  static getMetrics(): PerformanceMetrics {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
    return {
      loadTime: navigation.loadEventEnd - navigation.fetchStart,
      renderTime: navigation.domContentLoadedEventEnd - navigation.fetchStart,
      firstContentfulPaint: this.metrics.firstContentfulPaint || 0,
      largestContentfulPaint: this.metrics.largestContentfulPaint || 0,
      firstInputDelay: this.metrics.firstInputDelay || 0,
      cumulativeLayoutShift: this.metrics.cumulativeLayoutShift || 0,
      memoryUsage: this.metrics.memoryUsage,
      bundleSize: this.metrics.bundleSize || 0
    }
  }

  // Report performance metrics
  static reportMetrics(): void {
    const metrics = this.getMetrics()
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.table(metrics)
    }

    // Send to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'web_vitals', {
        event_category: 'Performance',
        custom_map: {
          custom_parameter_1: metrics.loadTime.toFixed(2),
          custom_parameter_2: metrics.renderTime.toFixed(2),
          custom_parameter_3: metrics.firstContentfulPaint.toFixed(2),
          custom_parameter_4: metrics.largestContentfulPaint.toFixed(2),
          custom_parameter_5: metrics.firstInputDelay.toFixed(2),
          custom_parameter_6: metrics.cumulativeLayoutShift.toFixed(3),
          custom_parameter_7: metrics.memoryUsage ? (metrics.memoryUsage / 1024 / 1024).toFixed(2) : '0',
          custom_parameter_8: metrics.bundleSize ? (metrics.bundleSize / 1024).toFixed(2) : '0'
        }
      })
    }
  }

  // Clean up observers
  static destroy(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Bundle optimization utilities
export class BundleOptimizer {
  // Generate optimized bundle configuration
  static generateBundleConfig(): any {
    return {
      // Split vendor and app bundles
      optimization: {
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000,
          maxSize: 244000,
        },
        runtimeChunk: 'single',
      },
      
      // Tree shaking
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        mainFields: ['browser', 'module', 'main'],
      },
      
      // Minification
      minimizer: [
        '...',
        '...'
      ],
      
      // Source maps for production debugging
      devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval',
    }
  }

  // Generate service worker for caching
  static generateServiceWorker(): string {
    return `
      // MNS Bank Service Worker
      const CACHE_NAME = 'mns-bank-v1'
      const urlsToCache = [
        '/',
        '/personal-banking',
        '/business-banking',
        '/digital-services',
        '/tools/branch-locator',
        '/images/logo.png',
        '/images/og-default.jpg'
      ]

      self.addEventListener('install', event => {
        event.waitUntil(
          caches.open(CACHE_NAME)
            .then(cache => {
              return cache.addAll(urlsToCache)
            })
        )
      })

      self.addEventListener('fetch', event => {
        event.respondWith(
          caches.match(event.request)
            .then(response => {
              if (response) {
                return response
              }
              
              return fetch(event.request)
            })
            .then(response => {
              if (response.ok) {
                const responseClone = response.clone()
                caches.open(CACHE_NAME)
                  .then(cache => {
                    cache.put(event.request, responseClone)
                  })
                return responseClone
              }
            })
        )
      })
    `
  }
}

// Performance utilities
export const performanceUtils = {
  // Debounce function for performance
  debounce: <T extends any[], R = any>(
    func: (...args: T[]) => R,
    wait: number
  ) => {
    let timeout: NodeJS.Timeout | null = null
    
    return (...args: T[]): Promise<R> => {
      return new Promise(resolve => {
        if (timeout) clearTimeout(timeout)
        
        timeout = setTimeout(() => {
          timeout = null
          resolve(func(...args))
        }, wait)
      })
    }
  },

  // Throttle function for performance
  throttle: <T extends any[], R = any>(
    func: (...args: T[]) => R,
    limit: number
  ) => {
    let inThrottle = false
    
    return (...args: T[]): Promise<R> => {
      return new Promise(resolve => {
        if (!inThrottle) {
          inThrottle = true
          resolve(func(...args))
          
          setTimeout(() => {
            inThrottle = false
          }, limit)
        }
      })
    }
  },

  // Memoize function for performance
  memoize: <T extends any[], R = any>(
    func: (...args: T[]) => R
  ) => {
    const cache = new Map()
    
    return (...args: T[]): R => {
      const key = JSON.stringify(args)
      
      if (cache.has(key)) {
        return cache.get(key)
      }
      
      const result = func(...args)
      cache.set(key, result)
      return result
    }
  },

  // Measure component render performance
  measureRender: (componentName: string) => {
    return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
      const originalMethod = descriptor.value

      descriptor.value = function (...args: any[]) {
        const startTime = performance.now()
        
        // Call original method
        const result = originalMethod.apply(this, args)
        
        const endTime = performance.now()
        const renderTime = endTime - startTime
        
        // Log render time
        if (process.env.NODE_ENV === 'development') {
          console.log(`${componentName}.${propertyName} render time: ${renderTime.toFixed(2)}ms`)
        }
        
        // Send to analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'component_render', {
            event_category: 'Performance',
            event_action: componentName,
            event_label: propertyName,
            value: Math.round(renderTime)
          })
        }
        
        return result
      }
    }
  },

  // Optimize images in viewport
  optimizeViewportImages: () => {
    const images = document.querySelectorAll('img[data-src]')
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            const src = img.getAttribute('data-src')
            if (src) {
              img.src = src
              img.removeAttribute('data-src')
            }
          }
        })
      }, {
        rootMargin: '50px'
      })

      images.forEach(img => observer.observe(img))
    }
  }
}

// React hooks for performance
export const usePerformanceOptimization = () => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({})

  useEffect(() => {
    const updateMetrics = () => {
      const currentMetrics = PerformanceMonitor.getMetrics()
      setMetrics(currentMetrics)
    }

    // Update metrics every 5 seconds
    const interval = setInterval(updateMetrics, 5000)

    return () => {
      clearInterval(interval)
      PerformanceMonitor.destroy()
    }
  }, [])

  return {
    metrics,
    optimizeImage: ImageOptimizer.getOptimizedImageUrl,
    generateProgressiveImage: ImageOptimizer.generateProgressiveImage,
    preloadResources: ImageOptimizer.generatePreloadLinks
  }
}
