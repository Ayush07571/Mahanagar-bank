// CMS Integration for MNS Bank
// This file provides integration with headless CMS for content management

import { useState, useEffect } from 'react'

export interface CMSContent {
  id: string
  type: 'page' | 'component' | 'news' | 'product' | 'service' | 'navigation'
  title: string
  slug: string
  content: any
  metadata?: {
    publishedAt?: string
    updatedAt?: string
    author?: string
    tags?: string[]
    category?: string
    featured?: boolean
    locale?: string
    description?: string
    excerpt?: string
  }
}

export interface CMSConfig {
  apiUrl: string
  apiKey: string
  projectId: string
  environment: 'development' | 'staging' | 'production'
}

// CMS Configuration
const cmsConfig: CMSConfig = {
  apiUrl: process.env.CMS_API_URL || 'https://api.mnsbank-cms.com',
  apiKey: process.env.CMS_API_KEY || '',
  projectId: process.env.CMS_PROJECT_ID || 'mns-bank-prod',
  environment: (process.env.NODE_ENV as 'development' | 'staging' | 'production') || 'development'
}

// CMS API Client
export class CMSClient {
  private baseUrl: string
  private apiKey: string
  private projectId: string

  constructor(config: CMSConfig) {
    this.baseUrl = config.apiUrl.replace(/\/$/, '')
    this.apiKey = config.apiKey
    this.projectId = config.projectId
  }

  // Generic API request method
  private async request<T>(
    endpoint: string,
    options: {
      method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
      body?: any
      params?: Record<string, string>
      headers?: Record<string, string>
    } = {}
  ): Promise<T> {
    const url = new URL(`${this.baseUrl}/${endpoint}`)
    
    // Add query parameters
    if (options.params) {
      Object.entries(options.params).forEach(([key, value]) => {
        url.searchParams.append(key, value)
      })
    }

    const requestOptions: RequestInit = {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
        'X-Project-ID': this.projectId,
        ...options.headers
      }
    }

    if (options.body) {
      requestOptions.body = JSON.stringify(options.body)
    }

    try {
      const response = await fetch(url.toString(), requestOptions)
      
      if (!response.ok) {
        throw new Error(`CMS API Error: ${response.status} ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('CMS API request failed:', error)
      throw error
    }
  }

  // Content fetching methods
  async getContentByType(type: CMSContent['type'], locale: string = 'en', filters?: Record<string, any>): Promise<CMSContent[]> {
    const params: Record<string, string> = {
      locale,
      limit: filters?.limit?.toString() || '100',
      sort: 'publishedAt:desc'
    }

    if (filters?.featured !== undefined) {
      params.featured = filters.featured.toString()
    }

    return this.request<CMSContent[]>(`content/${type}`, { params })
  }

  async getContentBySlug(slug: string, locale: string = 'en'): Promise<CMSContent | null> {
    try {
      const contents = await this.request<CMSContent[]>(`content/slug/${slug}`, {
        params: { locale }
      })
      return contents[0] || null
    } catch (error) {
      console.error(`Failed to fetch content by slug ${slug}:`, error)
      return null
    }
  }

  async getContentById(id: string, locale: string = 'en'): Promise<CMSContent | null> {
    try {
      const content = await this.request<CMSContent>(`content/${id}`, {
        params: { locale }
      })
      return content
    } catch (error) {
      console.error(`Failed to fetch content by ID ${id}:`, error)
      return null
    }
  }

  // Content management methods
  async createContent(content: Partial<CMSContent>): Promise<CMSContent> {
    return this.request<CMSContent>('content', {
      method: 'POST',
      body: content
    })
  }

  async updateContent(id: string, content: Partial<CMSContent>): Promise<CMSContent> {
    return this.request<CMSContent>(`content/${id}`, {
      method: 'PUT',
      body: content
    })
  }

  async deleteContent(id: string): Promise<void> {
    return this.request(`content/${id}`, {
      method: 'DELETE'
    })
  }

  async publishContent(id: string): Promise<CMSContent> {
    return this.request<CMSContent>(`content/${id}/publish`, {
      method: 'POST'
    })
  }

  async unpublishContent(id: string): Promise<CMSContent> {
    return this.request<CMSContent>(`content/${id}/unpublish`, {
      method: 'POST'
    })
  }

  // Content search and filtering
  async searchContent(query: string, locale: string = 'en', filters?: {
    type?: CMSContent['type']
    category?: string
    featured?: boolean
    dateFrom?: string
    dateTo?: string
  }): Promise<CMSContent[]> {
    const params: Record<string, string> = {
      q: query,
      locale,
      limit: '50'
    }

    if (filters) {
      if (filters.type) params.type = filters.type
      if (filters.category) params.category = filters.category
      if (filters.featured !== undefined) params.featured = filters.featured.toString()
      if (filters.dateFrom) params.dateFrom = filters.dateFrom
      if (filters.dateTo) params.dateTo = filters.dateTo
    }

    return this.request<CMSContent[]>('content/search', { params })
  }

  // Media management
  async uploadMedia(file: File, metadata?: {
    alt?: string
    caption?: string
    tags?: string[]
  }): Promise<{ url: string; id: string }> {
    const formData = new FormData()
    formData.append('file', file)
    
    if (metadata) {
      Object.entries(metadata).forEach(([key, value]) => {
        formData.append(key, value as string)
      })
    }

    const response = await fetch(`${this.baseUrl}/media/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'X-Project-ID': this.projectId
      },
      body: formData
    })

    if (!response.ok) {
      throw new Error(`Media upload failed: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  // Content caching
  private cache = new Map<string, { data: any; timestamp: number }>()

  async getCachedContent(key: string): Promise<any | null> {
    const cached = this.cache.get(key)
    if (cached && Date.now() - cached.timestamp < 5 * 60 * 1000) { // 5 minutes
      return cached.data
    }
    return null
  }

  setCachedContent(key: string, data: any): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    })
  }

  // Content validation
  validateContent(content: Partial<CMSContent>): { valid: boolean; errors: string[] } {
    const errors: string[] = []

    if (!content.title || content.title.trim().length === 0) {
      errors.push('Title is required')
    }

    if (!content.slug || content.slug.trim().length === 0) {
      errors.push('Slug is required')
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
  }

  // Content optimization
  optimizeContent(content: CMSContent): CMSContent {
    // Basic SEO optimization
    const optimizedContent = { ...content }

    // Add meta description if missing
    if (!optimizedContent.metadata?.description && typeof content.content === 'string') {
      const textContent = content.content.replace(/<[^>]*>/g, '')
      const description = textContent.length > 160 
        ? textContent.substring(0, 157) + '...'
        : textContent

      optimizedContent.metadata = {
        ...optimizedContent.metadata,
        description
      }
    }

    // Generate excerpt if missing
    if (!optimizedContent.metadata?.excerpt && typeof content.content === 'string') {
      const textContent = content.content.replace(/<[^>]*>/g, '')
      const excerpt = textContent.length > 150 
        ? textContent.substring(0, 147) + '...'
        : textContent

      optimizedContent.metadata = {
        ...optimizedContent.metadata,
        excerpt
      }
    }

    return optimizedContent
  }
}

// Create CMS client instance
export const cmsClient = new CMSClient(cmsConfig)

// Utility functions for common CMS operations
export const cmsUtils = {
  // Get homepage content
  async getHomepageContent(locale: string = 'en') {
    try {
      const [hero, news, products, services] = await Promise.all([
        cmsClient.getContentBySlug('homepage-hero', locale),
        cmsClient.getContentByType('news', locale, { limit: 6, featured: true }),
        cmsClient.getContentByType('product', locale, { limit: 8 }),
        cmsClient.getContentByType('service', locale, { limit: 9 })
      ])

      return {
        hero: hero,
        news: news,
        products,
        services
      }
    } catch (error) {
      console.error('Failed to fetch homepage content:', error)
      return {
        hero: null,
        news: [],
        products: [],
        services: []
      }
    }
  },

  // Get navigation content
  async getNavigationContent(locale: string = 'en') {
    try {
      const navigation = await cmsClient.getContentByType('navigation', locale)
      return navigation
    } catch (error) {
      console.error('Failed to fetch navigation content:', error)
      return []
    }
  },

  // Get footer content
  async getFooterContent(locale: string = 'en') {
    try {
      const footer = await cmsClient.getContentBySlug('footer', locale)
      return footer
    } catch (error) {
      console.error('Failed to fetch footer content:', error)
      return null
    }
  },

  // Get page content by type
  async getPageContent(type: CMSContent['type'], locale: string = 'en') {
    try {
      const content = await cmsClient.getContentByType(type, locale)
      return content
    } catch (error) {
      console.error(`Failed to fetch ${type} content:`, error)
      return []
    }
  },

  // Search content across all types
  async searchAllContent(query: string, locale: string = 'en') {
    try {
      const results = await cmsClient.searchContent(query, locale)
      return results
    } catch (error) {
      console.error('Failed to search content:', error)
      return []
    }
  }
}

// Content hooks for React components
export const useCMSContent = (type: CMSContent['type'], slug?: string, locale: string = 'en') => {
  const [content, setContent] = useState<CMSContent | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true)
        setError(null)
        
        let result: CMSContent | null = null
        if (slug) {
          result = await cmsClient.getContentBySlug(slug, locale)
        } else {
          const contents = await cmsClient.getContentByType(type, locale, { limit: 1 })
          result = contents[0] || null
        }

        setContent(result)
        cmsClient.setCachedContent(`${type}-${slug || 'latest'}-${locale}`, result)
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err))
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [type, slug, locale])

  const refetch = async () => {
    try {
      setLoading(true)
      setError(null)
      
      let result: CMSContent | null = null
      if (slug) {
        result = await cmsClient.getContentBySlug(slug, locale)
      } else {
        const contents = await cmsClient.getContentByType(type, locale, { limit: 1 })
        result = contents[0] || null
      }

      setContent(result)
      cmsClient.setCachedContent(`${type}-${slug || 'latest'}-${locale}`, result)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setLoading(false)
    }
  }

  return { content, loading, error, refetch }
}

// Content management hooks
export const useCMSContentManagement = () => {
  const [contents, setContents] = useState<CMSContent[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadContents = async (filters?: {
    type?: CMSContent['type']
    search?: string
    locale?: string
  }) => {
    try {
      setLoading(true)
      setError(null)

      let result: CMSContent[] = []
      if (filters?.search) {
        result = await cmsClient.searchContent(filters.search, filters.locale || 'en')
      } else if (filters?.type) {
        result = await cmsClient.getContentByType(filters.type, filters.locale || 'en')
      } else {
        result = await cmsClient.getContentByType('page', filters?.locale || 'en')
      }

      setContents(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setLoading(false)
    }
  }

  const createContent = async (content: Partial<CMSContent>) => {
    try {
      setLoading(true)
      setError(null)

      const validation = cmsClient.validateContent(content)
      if (!validation.valid) {
        setError(validation.errors.join(', '))
        return
      }

      const result = await cmsClient.createContent(content)
      setContents(prev => [result, ...prev])
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setLoading(false)
    }
  }

  const updateContent = async (id: string, content: Partial<CMSContent>) => {
    try {
      setLoading(true)
      setError(null)

      const result = await cmsClient.updateContent(id, content)
      setContents(prev => prev.map(item => item.id === id ? result : item))
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setLoading(false)
    }
  }

  const deleteContent = async (id: string) => {
    try {
      setLoading(true)
      setError(null)

      await cmsClient.deleteContent(id)
      setContents(prev => prev.filter(item => item.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setLoading(false)
    }
  }

  return { contents, loading, error, loadContents, createContent, updateContent, deleteContent }
}
