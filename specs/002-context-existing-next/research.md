# Research: Banking System Enhancement

This document outlines the research and technical decisions made for the 002-context-existing-next feature.

## Decision 1: Route Redirection Strategy (301 Redirects)

**Decision**: Implement 301 redirects using `next.config.ts` for static redirects and `middleware.ts` for dynamic/conditional redirects.

**Rationale**: 
- `next.config.ts` redirects are handled at the server level before reaching the Next.js application, making them highly efficient for SEO-critical path changes (e.g., `/personal-banking/home-loan` -> `/home-loan`).
- `middleware.ts` will be used if any complex logic (like language-specific redirection) is required.

**Alternatives Considered**:
- **Client-side Redirects (useEffect)**: Rejected due to poor SEO and "flash of original content."
- **Middleware-only**: Slightly higher overhead than `next.config.ts` for simple path mapping.

## Decision 2: i18n Persistence & Implementation

**Decision**: Use `next-intl` (if not already present) or a lightweight custom implementation using Middleware and a `NEXT_LOCALE` cookie.

**Rationale**:
- Next.js App Router requires a specific pattern for i18n (usually via `[locale]` dynamic segments).
- Persistent preference (EN/HI) must be stored in a cookie to allow the Middleware to redirect users correctly on subsequent visits.
- `next-intl` provides a robust, production-grade solution that aligns with the constitution's requirement for a "Production-Grade Next.js Architecture."

**Alternatives Considered**:
- **LocalStorage only**: Does not allow for server-side redirection or SEO indexing of translated content.
- **Query Params**: Clutters URLs and is not user-friendly for banking customers.

## Decision 3: EMI Calculator Formula

**Decision**: Implement the standard reducing balance EMI formula: `E = [P x R x (1+R)^N] / [(1+R)^N - 1]`.

**Rationale**:
- This is the standard formula mandated by RBI for retail loans.
- P = Principal, R = Monthly Interest Rate (Annual Rate / 12 / 100), N = Number of Monthly Installments.
- Implementation in `lib/calculations.ts` ensures reusability across components.

## Decision 4: Accessibility Toolbar State Management

**Decision**: Use React Context API combined with `localStorage` for state persistence.

**Rationale**:
- Font scaling and contrast toggling must affect all components globally.
- Context API avoids prop-drilling while maintaining a reactive UI.
- `localStorage` ensures that a user's accessibility preferences persist across sessions.

## Decision 5: DEAF Search Table Optimization

**Decision**: Use Server Components for initial data fetching and Client Components for real-time filtering (Search).

**Rationale**:
- Server components provide the fastest first-load time for compliance data.
- Small datasets (DEAF typically contains <1000 records) can be filtered entirely on the client for zero-latency search.
- Larger datasets will implement debounced server-side search via API routes.
