// SEO optimization utilities for MNS Bank
// This file provides comprehensive SEO optimization features

export interface MetaTags {
  title: string
  description: string
  keywords?: string[]
  author?: string
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    image?: string
    url?: string
    type?: string
    siteName?: string
    locale?: string
  }
  twitter?: {
    card?: 'summary' | 'summary_large_image'
    title?: string
    description?: string
    image?: string
    site?: string
    creator?: string
  }
  jsonLd?: Record<string, any>
  robots?: 'index,follow' | 'noindex,nofollow' | 'none'
  alternateLanguages?: Array<{
    hrefLang: string
    href: string
  }>
}

export interface SitemapEntry {
  url: string
  lastModified: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
  alternateLanguages?: Array<{
    hrefLang: string
    href: string
  }>
}

export interface StructuredData {
  '@context': string
  '@type': string
  name?: string
  description?: string
  url?: string
  image?: {
    '@type': string
    url: string
    width?: number
    height?: number
  }
  datePublished?: string
  dateModified?: string
  author?: any
  publisher?: {
    '@type': string
    name: string
    logo?: {
      '@type': string
      url: string
    }
  }
  mainEntityOfPage?: any
  breadcrumb?: Array<{
    '@type': string
    name: string
    item: string
  }>
  contactPoint?: any
  address?: any
  sameAs?: string[]
  itemListElement?: any
  potentialAction?: any
  headline?: string
  brand?: string
  category?: string
  offers?: any
  availability?: string
  aggregateRating?: any
  reviewCount?: number
  telephone?: string
  email?: string
  geo?: any
  openingHours?: string[]
  priceRange?: string
  paymentAccepted?: string[]
  currenciesAccepted?: string[]
  logo?: any
  availableLanguage?: string[]
  contactType?: string
}

// SEO configuration
const seoConfig = {
  siteName: 'MNS Bank',
  siteUrl: 'https://mnsbank.com',
  defaultTitle: 'MNS Bank - Your Trusted Banking Partner Since 1976',
  defaultDescription: 'MNS Bank offers comprehensive banking services including personal banking, business banking, digital banking, loans, and more. Your trusted banking partner since 1976.',
  defaultKeywords: ['banking', 'personal banking', 'business banking', 'digital banking', 'loans', 'savings account', 'credit cards', 'MNS Bank'],
  author: 'MNS Bank',
  socialImage: 'https://mnsbank.com/images/og-default.jpg',
  twitterHandle: '@mnsbank'
}

// Generate meta tags
export const generateMetaTags = (meta: MetaTags): string => {
  const tags: string[] = []

  // Basic meta tags
  tags.push(`<title>${meta.title}</title>`)
  tags.push(`<meta name="description" content="${meta.description}">`)
  
  if (meta.keywords && meta.keywords.length > 0) {
    tags.push(`<meta name="keywords" content="${meta.keywords.join(', ')}">`)
  }

  if (meta.author) {
    tags.push(`<meta name="author" content="${meta.author}">`)
  }

  // Canonical URL
  if (meta.canonical) {
    tags.push(`<link rel="canonical" href="${meta.canonical}">`)
  }

  // Robots meta tag
  if (meta.robots) {
    tags.push(`<meta name="robots" content="${meta.robots}">`)
  }

  // Open Graph tags
  if (meta.openGraph) {
    const og = meta.openGraph
    tags.push(`<meta property="og:title" content="${og.title || meta.title}">`)
    tags.push(`<meta property="og:description" content="${og.description || meta.description}">`)
    tags.push(`<meta property="og:type" content="${og.type || 'website'}">`)
    tags.push(`<meta property="og:site_name" content="${og.siteName || seoConfig.siteName}">`)
    tags.push(`<meta property="og:url" content="${og.url || meta.canonical}">`)
    
    if (og.image) {
      tags.push(`<meta property="og:image" content="${og.image}">`)
      tags.push(`<meta property="og:image:width" content="1200">`)
      tags.push(`<meta property="og:image:height" content="630">`)
    }

    if (og.locale) {
      tags.push(`<meta property="og:locale" content="${og.locale}">`)
    }
  }

  // Twitter Card tags
  if (meta.twitter) {
    const twitter = meta.twitter
    tags.push(`<meta name="twitter:card" content="${twitter.card || 'summary_large_image'}">`)
    tags.push(`<meta name="twitter:site" content="${twitter.site || seoConfig.twitterHandle}">`)
    tags.push(`<meta name="twitter:title" content="${twitter.title || meta.title}">`)
    tags.push(`<meta name="twitter:description" content="${twitter.description || meta.description}">`)
    
    if (twitter.image) {
      tags.push(`<meta name="twitter:image" content="${twitter.image}">`)
    }
    
    if (twitter.creator) {
      tags.push(`<meta name="twitter:creator" content="${twitter.creator}">`)
    }
  }

  // Alternate language links
  if (meta.alternateLanguages) {
    meta.alternateLanguages.forEach(alt => {
      tags.push(`<link rel="alternate" hreflang="${alt.hrefLang}" href="${alt.href}">`)
    })
  }

  // JSON-LD structured data
  if (meta.jsonLd) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(meta.jsonLd)}</script>`)
  }

  // Additional meta tags
  tags.push(`<meta name="viewport" content="width=device-width, initial-scale=1.0">`)
  tags.push(`<meta http-equiv="X-UA-Compatible" content="IE=edge">`)
  tags.push(`<meta name="theme-color" content="#1e40af">`)
  tags.push(`<meta name="msapplication-TileColor" content="#1e40af">`)
  tags.push(`<meta name="apple-mobile-web-app-capable" content="yes">`)
  tags.push(`<meta name="apple-mobile-web-app-status-bar-style" content="default">`)

  return tags.join('\n')
}

// Generate LocalBusiness structured data
export const generateLocalBusinessData = (business: {
  name: string
  description: string
  url: string
  telephone: string
  email: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  openingHours?: string[]
  priceRange?: string
  paymentAccepted?: string[]
  currenciesAccepted?: string[]
  image?: string
}): StructuredData => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    url: business.url,
    telephone: business.telephone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry
    },
    ...(business.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: business.geo.latitude,
        longitude: business.geo.longitude
      }
    }),
    ...(business.openingHours && {
      openingHours: business.openingHours
    }),
    ...(business.priceRange && {
      priceRange: business.priceRange
    }),
    ...(business.paymentAccepted && {
      paymentAccepted: business.paymentAccepted
    }),
    ...(business.currenciesAccepted && {
      currenciesAccepted: business.currenciesAccepted
    }),
    ...(business.image && {
      image: {
        '@type': 'ImageObject',
        url: business.image
      }
    })
  }
}

// Generate BreadcrumbList structured data
export const generateBreadcrumbData = (breadcrumbs: Array<{
  name: string
  url: string
}>): StructuredData => {
  const breadcrumbItems = breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems
  }
}

// Generate sitemap
export const generateSitemap = (entries: SitemapEntry[]): string => {
  const urlset = entries.map(entry => {
    let urlElement = `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>`

    if (entry.alternateLanguages) {
      const alternateLinks = entry.alternateLanguages.map(alt => 
        `    <xhtml:link rel="alternate" hreflang="${alt.hrefLang}" href="${alt.href}"/>`
      ).join('\n')
      urlElement += '\n' + alternateLinks
    }

    return urlElement + '\n  </url>'
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlset}
</urlset>`
}

// Generate robots.txt
export const generateRobotsTxt = (config: {
  disallow?: string[]
  allow?: string[]
  sitemap?: string
}): string => {
  let content = ''

  if (config.allow) {
    content += config.allow.map(path => `Allow: ${path}`).join('\n')
  }

  if (config.disallow) {
    content += config.disallow.map(path => `Disallow: ${path}`).join('\n')
  }

  if (config.sitemap) {
    content += `\nSitemap: ${config.sitemap}`
  }

  return `# MNS Bank Robots.txt
# Generated on ${new Date().toISOString()}

${content}`
}

// SEO utilities
export const seoUtils = {
  // Generate page-specific meta tags
  generatePageMeta: (page: {
    title: string
    description: string
    url: string
    type?: string
    keywords?: string[]
    image?: string
    publishedAt?: string
    updatedAt?: string
  }): MetaTags => {
    return {
      title: page.title,
      description: page.description,
      keywords: page.keywords || seoConfig.defaultKeywords,
      canonical: page.url,
      robots: 'index,follow',
      openGraph: {
        title: page.title,
        description: page.description,
        image: page.image || seoConfig.socialImage,
        url: page.url,
        type: page.type || 'website',
        siteName: seoConfig.siteName,
        locale: 'en_US'
      },
      twitter: {
        card: 'summary_large_image',
        title: page.title,
        description: page.description,
        image: page.image || seoConfig.socialImage,
        site: seoConfig.twitterHandle
      },
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': page.type === 'news' ? 'NewsArticle' : 'WebPage',
        headline: page.title,
        description: page.description,
        url: page.url,
        datePublished: page.publishedAt,
        dateModified: page.updatedAt,
        author: {
          '@type': 'Organization',
          name: seoConfig.author
        },
        publisher: {
          '@type': 'Organization',
          name: seoConfig.siteName,
          logo: {
            '@type': 'ImageObject',
            url: 'https://mnsbank.com/images/logo.png'
          }
        },
        mainEntityOfPage: {
          '@type': 'Organization',
          name: seoConfig.siteName
        },
        ...(page.image && {
          image: {
            '@type': 'ImageObject',
            url: page.image
          }
        })
      }
    }
  },

  // Generate homepage meta tags
  generateHomepageMeta: (): MetaTags => {
    return {
      title: seoConfig.defaultTitle,
      description: seoConfig.defaultDescription,
      keywords: seoConfig.defaultKeywords,
      canonical: seoConfig.siteUrl,
      robots: 'index,follow',
      openGraph: {
        title: seoConfig.defaultTitle,
        description: seoConfig.defaultDescription,
        image: seoConfig.socialImage,
        url: seoConfig.siteUrl,
        type: 'website',
        siteName: seoConfig.siteName,
        locale: 'en_US'
      },
      twitter: {
        card: 'summary_large_image',
        title: seoConfig.defaultTitle,
        description: seoConfig.defaultDescription,
        image: seoConfig.socialImage,
        site: seoConfig.twitterHandle
      },
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: seoConfig.siteName,
        description: seoConfig.defaultDescription,
        url: seoConfig.siteUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: seoConfig.siteUrl + '/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        },
        sameAs: [
          'https://www.facebook.com/mnsbank',
          'https://twitter.com/mnsbank',
          'https://www.linkedin.com/company/mns-bank'
        ]
      }
    }
  },

  // Generate product/service meta tags
  generateProductMeta: (product: {
    name: string
    description: string
    url: string
    price?: string
    availability?: string
    brand?: string
    category?: string
    image?: string
    rating?: number
    reviewCount?: number
  }): MetaTags => {
    return {
      title: `${product.name} - MNS Bank`,
      description: product.description,
      keywords: [product.name, product.category || 'banking', 'MNS Bank'],
      canonical: product.url,
      robots: 'index,follow',
      openGraph: {
        title: product.name,
        description: product.description,
        image: product.image,
        url: product.url,
        type: 'product',
        siteName: seoConfig.siteName,
        locale: 'en_US'
      },
      twitter: {
        card: 'summary_large_image',
        title: product.name,
        description: product.description,
        image: product.image,
        site: seoConfig.twitterHandle
      },
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        url: product.url,
        image: product.image ? {
          '@type': 'ImageObject',
          url: product.image
        } : undefined,
        brand: product.brand || seoConfig.siteName,
        category: product.category,
        ...(product.price && { offers: { '@type': 'Offer', price: product.price } }),
        ...(product.availability && { availability: product.availability }),
        ...(product.rating && { aggregateRating: { '@type': 'AggregateRating', ratingValue: product.rating } }),
        ...(product.reviewCount && { reviewCount: product.reviewCount })
      }
    }
  },

  // Generate structured data for organization
  generateOrganizationData: (): StructuredData => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: seoConfig.siteName,
      description: 'MNS Bank is a leading banking institution in India, providing comprehensive banking services since 1976.',
      url: seoConfig.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: 'https://mnsbank.com/images/logo.png'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-22-1234-5670',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi']
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'MNS Bank Headquarters',
        addressLocality: 'Bhopal',
        addressRegion: 'Madhya Pradesh',
        postalCode: '462001',
        addressCountry: 'India'
      },
      sameAs: [
        'https://www.facebook.com/mnsbank',
        'https://twitter.com/mnsbank',
        'https://www.linkedin.com/company/mns-bank'
      ]
    }
  },

  // Optimize URL for SEO
  optimizeUrl: (url: string): string => {
    return url
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
  },

  // Generate slug from title
  generateSlug: (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '-')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
  },

  // Generate SEO-friendly URL
  generateSeoUrl: (path: string, params?: Record<string, string>): string => {
    const baseUrl = seoConfig.siteUrl.replace(/\/$/, '')
    const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, '')
    
    let url = `${baseUrl}/${cleanPath}`
    
    if (params && Object.keys(params).length > 0) {
      const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&')
      url += `?${queryString}`
    }
    
    return url
  }
}

// React hook for SEO meta tags
export const useSEOMeta = (meta: MetaTags) => {
  // This hook would be used in React components to inject meta tags
  // In a real implementation, this would use Next.js Head component
  return {
    meta,
    inject: () => {
      // Implementation would depend on the framework being used
      if (typeof document !== 'undefined') {
        document.title = meta.title
        
        // Update or create meta description
        let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement
        if (!metaDescription) {
          metaDescription = document.createElement('meta')
          metaDescription.name = 'description'
          metaDescription.content = meta.description
          document.head.appendChild(metaDescription)
        } else {
          metaDescription.content = meta.description
        }
      }
    }
  }
}
