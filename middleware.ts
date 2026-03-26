import createIntlMiddleware from 'next-intl/middleware'

export default createIntlMiddleware({
  locales: ['en', 'hi'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
})

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
}
