// Simple i18n configuration for client-side usage
// Translation files will be handled by next-intl automatically

export type Language = 'en' | 'hi'

export const DEFAULT_LANGUAGE: Language = 'en'
export const SUPPORTED_LANGUAGES: Language[] = ['en', 'hi']

export function getLanguageLabel(lang: Language): string {
  switch (lang) {
    case 'en':
      return 'EN'
    case 'hi':
      return 'HI'
    default:
      return 'EN'
  }
}

export function getLanguageFullName(lang: Language): string {
  const names: Record<Language, string> = {
    en: 'English',
    hi: 'हिन्दी'
  }
  return names[lang] || 'English'
}

export function toggleLanguage(currentLang: Language): Language {
  return currentLang === 'en' ? 'hi' : 'en'
}

export default {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  getLanguageLabel,
  getLanguageFullName,
  toggleLanguage
}
