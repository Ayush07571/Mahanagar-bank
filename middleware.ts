import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'
import { logger } from '@/lib/logger'

// i18n configuration
const locales = ['en', 'hi']
const defaultLocale = 'en'

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
})

// Security headers configuration
const securityHeaders = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://api.github.com",
    "frame-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join('; '),
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': [
    'camera=()',
    'microphone=()',
    'geolocation=()',
    'payment=()',
    'usb=()',
    'magnetometer=()',
    'gyroscope=()',
    'accelerometer=()',
  ].join(', '),
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
}

// Rate limiting configuration (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 100 // 100 requests per window

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  record.count++
  return true
}

// CSRF protection for state-changing requests
const csrfToken = process.env.CSRF_SECRET || 'default-csrf-secret'

function validateCSRF(request: NextRequest): boolean {
  const method = request.method
  const isStateChanging = ['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)
  
  if (!isStateChanging) {
    return true
  }

  // For API routes, check CSRF token
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const token = request.headers.get('x-csrf-token')
    const referer = request.headers.get('referer')
    const origin = request.headers.get('origin')
    
    // Basic CSRF validation
    if (!token || token !== csrfToken) {
      return false
    }
    
    // Validate referer/origin for additional security
    const host = request.headers.get('host')
    if (referer && !referer.includes(host || '')) {
      return false
    }
    
    if (origin && !origin.includes(host || '')) {
      return false
    }
  }

  return true
}

export function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
            request.headers.get('x-real-ip') || 
            'unknown'
  const pathname = request.nextUrl.pathname

  // Log request
  logger.info('Incoming request', {
    method: request.method,
    pathname,
    ip,
    userAgent: request.headers.get('user-agent'),
  })

  // Rate limiting
  if (!checkRateLimit(ip)) {
    logger.warn('Rate limit exceeded', { ip, pathname })
    return new NextResponse('Too Many Requests', { status: 429 })
  }

  // CSRF protection
  if (!validateCSRF(request)) {
    logger.warn('CSRF validation failed', { ip, pathname })
    return new NextResponse('Invalid CSRF Token', { status: 403 })
  }

  // Handle i18n
  const response = intlMiddleware(request)

  // Apply security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Add custom headers
  response.headers.set('X-Request-ID', crypto.randomUUID())
  response.headers.set('X-Response-Time', Date.now().toString())

  // Security logging for suspicious activities
  const suspiciousPatterns = [
    /\.\./,  // Path traversal
    /<script/i,  // XSS attempts
    /union.*select/i,  // SQL injection attempts
    /javascript:/i,  // JavaScript protocol
  ]

  const url = request.url.toLowerCase()
  const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(url))

  if (isSuspicious) {
    logger.warn('Suspicious request detected', {
      ip,
      pathname,
      url: request.url,
      userAgent: request.headers.get('user-agent'),
    })
  }

  // Special handling for API routes
  if (pathname.startsWith('/api/')) {
    // Add API-specific headers
    response.headers.set('X-API-Version', '1.0')
    response.headers.set('X-Rate-Limit-Limit', RATE_LIMIT_MAX_REQUESTS.toString())
    response.headers.set('X-Rate-Limit-Window', (RATE_LIMIT_WINDOW / 1000).toString())
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!_next/static|_next/image|favicon.ico|public|api).*)',
    // Always run for API routes to apply security even if they don't need i18n
    '/api/:path*',
    // Match locales
    '/(hi|en)/:path*',
  ],
}
