# Implementation Plan: Complete Banking System Fix & BRD Coverage

**Branch**: `002-context-existing-next` | **Date**: 2026-03-25 | **Spec**: [/specs/002-context-existing-next/spec.md](/specs/002-context-existing-next/spec.md)
**Input**: Feature specification from `/specs/002-context-existing-next/spec.md`

## Summary
The goal is to achieve 100% BRD coverage by implementing all missing product pages, fixing broken navigation, and ensuring full regulatory compliance (DEAF, Grievance, KFS). The technical approach involves refactoring nested routes to root-level slugs with 301 redirects, expanding the i18n system for full English/Hindi support, and adding a site-wide accessibility toolbar. The project utilizes Next.js App Router with a modular component-based architecture.

## Technical Context

**Language/Version**: TypeScript, Next.js 15+ (App Router)
**Primary Dependencies**: React, Tailwind CSS, Prisma, next-intl or custom i18n
**Storage**: PostgreSQL (via Prisma) for locations, inquiries, and DEAF data
**Testing**: Jest (unit), Playwright (E2E)
**Target Platform**: Web (Modern Browsers, Mobile-first)
**Project Type**: Web Application (Banking)
**Performance Goals**: PageSpeed Insights score ≥ 90 on mobile; LCP < 3s on 4G
**Constraints**: WCAG 2.1 AA compliance, no non-standard ports (retire 8444), SSL-only
**Scale/Scope**: 100+ pages, dual-tab (Personal/Business) navigation, 18 loan products

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Check | Status |
|-----------|-------|--------|
| **BRD-First** | Does the plan include ALL 100+ pages and components? | ✅ PASS |
| **Compliance** | Are DEAF, Grievance, Policy Centre, and KFS included? | ✅ PASS |
| **Architecture** | Is it exclusively Next.js App Router? | ✅ PASS |
| **UX Standards** | Is it professional, mobile-first, and WCAG AA? | ✅ PASS |
| **Multilingual** | Is EN/HI support persistent and complete? | ✅ PASS |
| **CMS-Driven** | Are rates and news dynamic? | ✅ PASS |
| **Perf/A11y** | Target ≥ 90 PageSpeed and WCAG AA? | ✅ PASS |

## Project Structure

### Documentation (this feature)

```text
specs/002-context-existing-next/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── checklists/
    └── requirements.md  # Spec quality checklist
```

### Source Code (repository root)

```text
app/
├── (root)/              # Root-level slugs (/home-loan, /savings-account)
├── about-us/
├── business-banking/    # Legacy paths (to be redirected)
├── personal-banking/    # Legacy paths (to be redirected)
├── digital-services/
├── compliance/
└── api/

components/
├── banking/             # KFS, NetBankingCTA, ProductShell
├── compliance/          # DEAFTable, EscalationMatrix
├── layout/              # Accessibility toolbar, Header, Footer
├── forms/               # InquiryForm
├── ui/                  # Base design system
└── maps/                # Locator maps

lib/
├── i18n.ts              # Translation logic
├── calculations.ts      # EMI formulas
├── locations.ts         # Map data handling
└── db.ts                # Prisma client

locales/
├── en.json
└── hi.json
```

**Structure Decision**: Single Next.js project using App Router. Product pages will be promoted to the root directory for flat slug support, while `middleware.ts` will handle 301 redirects from legacy nested paths.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
