# Implementation Plan: Complete Digital Banking System

**Branch**: `001-complete-banking-system` | **Date**: 2026-03-24 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-complete-banking-system/spec.md`

## Summary

Extract comprehensive digital banking system covering all 77 pages from BRD/PRD-MNS-2026-01 with complete compliance framework, product information system, digital services access, multilingual support, and CMS-driven content management. System must achieve PageSpeed ≥ 90, WCAG 2.1 AA compliance, and 100% BRD coverage with zero missing requirements.

## Technical Context

**Language/Version**: Next.js 14 (latest) with TypeScript 5  
**Primary Dependencies**: React 18, Tailwind CSS 3.4, Prisma 5, Supabase (PostgreSQL), Next.js App Router  
**Storage**: Supabase PostgreSQL database with Prisma ORM  
**Testing**: Jest + React Testing Library + Playwright  
**Target Platform**: Web (responsive 320px - 1440px) + Mobile browsers  
**Project Type**: Web application (banking digital platform)  
**Performance Goals**: PageSpeed Insights ≥ 90 mobile, LCP < 3s on 4G, 99.5% uptime  
**Constraints**: WCAG 2.1 AA compliance, RBI banking regulations, HTTPS-only, no port 8444  
**Scale/Scope**: 77 pages, 18 loan products, 13 digital services, 5000+ concurrent users

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Gates Status**: ✅ PASS
- ✅ BRD-First Development: All 77 pages and requirements covered
- ✅ Complete Banking Compliance: DEAF, Grievance, Policy Centre, KFS specified
- ✅ Production-Grade Next.js: App Router, TypeScript, Server Components defined
- ✅ Banking UX Standards: Trust-focused design, accessibility requirements included
- ✅ Multilingual System: Complete EN/HI support specified
- ✅ CMS-Driven Content: Headless CMS approach decided (Strapi/Sanity/Contentful)
- ✅ Performance & Accessibility: PageSpeed ≥ 90, WCAG 2.1 AA requirements defined

## Project Structure

### Documentation (this feature)

```text
specs/001-complete-banking-system/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
# Web Application Structure (Next.js App Router)
app/
├── (auth)/                    # Authentication routes (future)
├── about-us/                  # About Us page group
│   ├── page.tsx
│   ├── board-of-directors/page.tsx
│   ├── committees/page.tsx
│   ├── management/page.tsx
│   ├── annual-reports/page.tsx
│   └── membership/page.tsx
├── personal-banking/           # Personal Banking section
│   ├── layout.tsx            # Personal banking sub-layout
│   ├── savings-account/page.tsx
│   ├── double-deposit/page.tsx
│   ├── time-deposit/page.tsx
│   ├── recurring-deposit/page.tsx
│   ├── loans/                # Personal loans group
│   │   ├── gold-loan/page.tsx
│   │   ├── car-loan/page.tsx
│   │   ├── consumer-loan/page.tsx
│   │   ├── personal-loan/page.tsx
│   │   ├── festival-loan/page.tsx
│   │   ├── education-loan/page.tsx
│   │   ├── home-loan/page.tsx
│   │   ├── house-construction-loan/page.tsx
│   │   ├── loan-against-fd/page.tsx
│   │   ├── loan-against-nsc/page.tsx
│   │   ├── loan-against-property/page.tsx
│   │   └── mortgage-overdraft/page.tsx
│   ├── deposits/              # Personal deposits group
│   ├── services/              # Personal services group
│   └── stay-connected/         # Personal stay connected group
├── business-banking/           # Business Banking section
│   ├── layout.tsx            # Business banking sub-layout
│   ├── current-account/page.tsx
│   ├── biz-deposits/          # Business deposits group
│   ├── biz-loans/             # Business loans group
│   ├── biz-services/           # Business services group
│   └── biz-stay-connected/     # Business stay connected group
├── digital-services/           # Digital Services section
│   ├── net-banking/page.tsx
│   ├── mobile-banking/page.tsx
│   ├── atm/page.tsx
│   ├── debit-cards/page.tsx
│   ├── upi-qr/page.tsx
│   ├── imps/page.tsx
│   ├── bbps/page.tsx
│   ├── sms-banking/page.tsx
│   ├── pan/page.tsx
│   ├── locker/page.tsx
│   ├── neft-rtgs/page.tsx
│   ├── pm-jeevan-yojana/page.tsx
│   └── pm-suraksha-yojana/page.tsx
├── other-services/            # Conditional services
├── compliance/                # Compliance pages
│   ├── deaf-unclaimed-deposits/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── grievance-redressal/page.tsx
│   ├── policy-centre/page.tsx
│   ├── kyc-ckyc/page.tsx
│   └── cyber-awareness/page.tsx
├── tools/                    # Tools and utilities
│   ├── interest-rates/page.tsx
│   ├── service-charges/page.tsx
│   ├── emi-calculator/page.tsx
│   ├── locate-us/page.tsx
│   ├── branch-locator/page.tsx
│   ├── atm-locator/page.tsx
│   ├── ifsc-codes/page.tsx
│   ├── tenders/page.tsx
│   ├── feedback/page.tsx
│   ├── contact-us/page.tsx
│   ├── download-forms/page.tsx
│   └── sitemap/page.tsx
├── api/                      # API routes
│   ├── inquiries/             # Form submissions
│   ├── cms/                   # Headless CMS integration
│   └── compliance/             # Compliance data
├── components/                # Reusable components
│   ├── ui/                    # Base UI components
│   ├── forms/                  # Form components
│   ├── layout/                 # Layout components
│   └── banking/                # Banking-specific components
├── lib/                      # Utilities and configurations
│   ├── db.ts                  # Database connection
│   ├── utils.ts                # Helper functions
│   ├── validations.ts          # Form validations
│   └── constants.ts            # App constants
├── types/                    # TypeScript type definitions
├── public/                   # Static assets
└── styles/                   # Global styles

tests/
├── __mocks__/             # Mock data for testing
├── components/             # Component tests
├── pages/                  # Page tests
├── integration/            # Integration tests
└── e2e/                   # End-to-end tests

prisma/
├── schema.prisma           # Database schema
└── migrations/             # Database migrations
```

**Structure Decision**: Next.js App Router with TypeScript, organized by banking sections (Personal, Business, Digital Services, Compliance) following BRD navigation structure. Component-driven architecture with reusable banking components.

## Complexity Tracking

No complexity violations - all requirements align with constitution principles and BRD specifications.
