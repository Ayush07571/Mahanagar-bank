import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'hi'],

  // Used when no locale matches
  defaultLocale: 'en',
  
  // This value is used to determine whether the locale prefix
  // should be used in the URL. If set to 'as-needed', the
  // default locale will not have a prefix.
  localePrefix: 'as-needed'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
