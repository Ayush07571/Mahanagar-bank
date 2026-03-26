import { getRequestConfig } from 'next-intl/server'

// Can be imported from a shared config
const locales = ['en', 'hi'] as const

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is defined and valid
  const resolvedLocale = locale && locales.includes(locale as any) ? locale : 'en'
  
  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  }
})
