// Content caching and optimization utilities for MNS Bank
// This file provides caching mechanisms for improved performance

export interface CacheEntry {
  data: any
  timestamp: number
  expiresAt?: number
  tags?: string[]
  metadata?: Record<string, any>
}

export interface CacheConfig {
  defaultTTL: number // Time to live in milliseconds
  maxSize: number // Maximum number of entries
  strategy: 'memory' | 'localStorage' | 'sessionStorage' | 'redis'
}

// Cache configuration
const cacheConfig: CacheConfig = {
  defaultTTL: 5 * 60 * 1000, // 5 minutes
  maxSize: 1000, // Maximum 1000 entries
  strategy: 'memory' // Use in-memory cache for this implementation
}

// In-memory cache implementation
export class MemoryCache {
  private cache = new Map<string, CacheEntry>()
  private maxSize: number
  private currentSize = 0

  constructor(config: Partial<CacheConfig> = {}) {
    this.maxSize = config.maxSize || cacheConfig.maxSize
  }

  // Get cache entry
  get(key: string): any | null {
    const entry = this.cache.get(key)
    if (!entry) {
      return null
    }

    // Check if entry has expired
    if (entry.expiresAt && Date.now() > entry.expiresAt) {
      this.cache.delete(key)
      this.currentSize--
      return null
    }

    return entry.data
  }

  // Set cache entry
  set(key: string, data: any, ttl?: number): void {
    const existingEntry = this.cache.get(key)
    
    // If entry exists, update it
    if (existingEntry) {
      existingEntry.data = data
      existingEntry.timestamp = Date.now()
      existingEntry.expiresAt = ttl ? Date.now() + ttl : undefined
      return
    }

    // Check cache size limit
    if (this.currentSize >= this.maxSize) {
      this.evictOldestEntries()
    }

    const entry: CacheEntry = {
      data,
      timestamp: Date.now(),
      expiresAt: ttl ? Date.now() + ttl : undefined
    }

    this.cache.set(key, entry)
    this.currentSize++
  }

  // Delete cache entry
  delete(key: string): boolean {
    const deleted = this.cache.delete(key)
    if (deleted) {
      this.currentSize--
    }
    return deleted
  }

  // Clear all cache
  clear(): void {
    this.cache.clear()
    this.currentSize = 0
  }

  // Get all cache keys
  getKeys(): string[] {
    return Array.from(this.cache.keys())
  }

  // Evict oldest entries when cache is full
  private evictOldestEntries(): void {
    const entries = Array.from(this.cache.entries())
    
    // Sort by timestamp (oldest first)
    entries.sort((a, b) => a[1].timestamp - b[1].timestamp)

    // Remove oldest 25% of entries
    const entriesToRemove = Math.ceil(this.maxSize * 0.25)
    for (let i = 0; i < entriesToRemove; i++) {
      const [key] = entries[i]
      if (key) {
        this.cache.delete(key)
        this.currentSize--
      }
    }
  }

  // Get cache statistics
  getStats(): {
    totalEntries: number
    currentSize: number
    hitRate: number
    evictionCount: number
  } {
    const totalEntries = this.cache.size
    return {
      totalEntries,
      currentSize: this.currentSize,
      hitRate: 0,
      evictionCount: 0
    }
  }
}

// Content optimization utilities
export class ContentOptimizer {
  // Optimize text content for SEO and performance
  static optimizeText(content: string, options: {
    maxLength?: number
    removeHTML?: boolean
    compressSpaces?: boolean
    addReadMore?: boolean
  } = {}): string {
    let optimized = content

    // Remove HTML tags if requested
    if (options.removeHTML) {
      optimized = optimized.replace(/<[^>]*>/g, '')
    }

    // Compress spaces if requested
    if (options.compressSpaces) {
      optimized = optimized.replace(/\s+/g, ' ')
    }

    // Truncate to max length
    if (options.maxLength && optimized.length > options.maxLength) {
      if (options.addReadMore) {
        optimized = optimized.substring(0, options.maxLength - 3) + '...'
      } else {
        optimized = optimized.substring(0, options.maxLength)
      }
    }

    return optimized
  }

  // Generate meta description from content
  static generateMetaDescription(content: string, maxLength: number = 160): string {
    const textContent = content.replace(/<[^>]*>/g, '')
    return textContent.length > maxLength 
      ? textContent.substring(0, maxLength - 3) + '...'
      : textContent
  }

  // Generate excerpt from content
  static generateExcerpt(content: string, maxLength: number = 150): string {
    const textContent = content.replace(/<[^>]*>/g, '')
    return textContent.length > maxLength 
      ? textContent.substring(0, maxLength - 3) + '...'
      : textContent
  }

  // Generate keywords from content
  static generateKeywords(content: string): string[] {
    const textContent = content.replace(/<[^>]*>/g, '')
    const words = textContent.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3)
      .filter((word, index, array) => array.indexOf(word) === index)

    // Remove common words
    const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'a', 'an', 'as', 'are', 'was', 'were', 'been', 'be', 'have', 'has', 'had', 'does', 'did', 'will', 'would', 'could', 'should']
    
    return words.filter(word => !commonWords.includes(word)).slice(0, 10)
  }

  // Generate structured data for SEO
  static generateStructuredData(content: {
    title: string
    description: string
    url: string
    type: string
    publishedAt?: string
    updatedAt?: string
    author?: string
    image?: string
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': content.type === 'news' ? 'NewsArticle' : 'WebPage',
      headline: content.title,
      description: content.description,
      url: content.url,
      datePublished: content.publishedAt,
      dateModified: content.updatedAt,
      author: {
        '@type': 'Person',
        name: content.author
      },
      publisher: {
        '@type': 'Organization',
        name: 'MNS Bank'
      },
      mainEntityOfPage: {
        '@type': 'Organization',
        name: 'MNS Bank'
      },
      image: content.image ? {
        '@type': 'ImageObject',
        url: content.image
      } : undefined
    }
  }
}

// Cache utilities
export const cacheUtils = {
  // Create cache instance
  createCache: (config?: Partial<CacheConfig>) => {
    return new MemoryCache(config)
  },

  // Cache middleware for API calls
  withCache: <T extends any[], R>(
    cache: MemoryCache,
    keyGenerator: (...args: T) => string,
    fetcher: (...args: T) => Promise<R>
  ) => {
    return async (...fetchArgs: T): Promise<R> => {
      const cacheKey = keyGenerator(...fetchArgs)
      
      // Try to get from cache first
      const cached = cache.get(cacheKey)
      if (cached !== null) {
        return cached
      }

      // If not in cache, fetch and cache the result
      try {
        const result = await fetcher(...fetchArgs)
        cache.set(cacheKey, result, cacheConfig.defaultTTL)
        return result
      } catch (error) {
        console.error('Cache fetch failed:', error)
        throw error
      }
    }
  },

  // Cache invalidation utilities
  invalidatePattern: (cache: MemoryCache, pattern: string) => {
    const keys = cache.getKeys()
    const matchingKeys = keys.filter(key => key.includes(pattern))
    
    matchingKeys.forEach(key => cache.delete(key))
  },

  // Cache warming utilities
  warmCache: async (cache: MemoryCache, keys: string[], dataFetcher: (key: string) => Promise<any>) => {
    const warmPromises = keys.map(async (key) => {
      const cached = cache.get(key)
      if (cached === null) {
        try {
          const data = await dataFetcher(key)
          cache.set(key, data, cacheConfig.defaultTTL)
          return data
        } catch (error) {
          console.error(`Failed to warm cache for key ${key}:`, error)
          return null
        }
      }
      return cached
    })

    await Promise.all(warmPromises)
  }
}

// Performance monitoring
export const performanceUtils = {
  // Measure performance of operations
  measure: async <T>(
    operation: string,
    fn: () => Promise<T>
  ): Promise<{ result: T; duration: number }> => {
    const start = performance.now()
    try {
      const result = await fn()
      const end = performance.now()
      return {
        result,
        duration: end - start
      }
    } catch (error) {
      const end = performance.now()
      return {
        result: null as T,
        duration: end - start
      }
    }
  },

  // Performance monitoring decorator
  withPerformanceMonitoring: (
    operation: string
  ) => {
    return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
      const originalMethod = descriptor.value

      descriptor.value = async function (...args: any[]): Promise<any> {
        const { result, duration } = await performanceUtils.measure(
          `${operation}.${propertyName}`,
          () => originalMethod.apply(this, args)
        )

        // Log performance metrics
        console.log(`Performance: ${operation}.${propertyName} took ${duration}ms`)
        
        return result
      }
    }
  }
}

// Content validation utilities
export const validationUtils = {
  // Validate content structure
  validateContent: (content: any): { valid: boolean; errors: string[] } => {
    const errors: string[] = []

    if (!content.title || typeof content.title !== 'string') {
      errors.push('Title is required and must be a string')
    }

    if (!content.slug || typeof content.slug !== 'string') {
      errors.push('Slug is required and must be a string')
    }

    if (content.slug && !/^[a-z0-9-]+$/.test(content.slug)) {
      errors.push('Slug must contain only lowercase letters, numbers, and hyphens')
    }

    if (!content.content) {
      errors.push('Content is required')
    }

    return {
      valid: errors.length === 0,
      errors
    }
  },

  // Sanitize content for security
  sanitizeHTML: (html: string): string => {
    return html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
  },

  // Validate and sanitize user input
  sanitizeInput: (input: string): string => {
    return input
      .trim()
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
  }
}
