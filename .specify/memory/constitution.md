<!--
Sync Impact Report:
Version change: 0.0.0 → 1.0.0 (initial constitution creation)
List of modified principles: All principles newly created based on banking requirements
Added sections: Core Principles (7), Banking Compliance Standards, Development Workflow, Governance
Templates requiring updates: ✅ plan-template.md (constitution check section aligned), ✅ spec-template.md (compliance requirements aligned), ✅ tasks-template.md (banking-specific task types aligned)
Follow-up TODOs: None
-->

# Mahanagar Nagrik Sahakari Bank Constitution

## Core Principles

### I. BRD-First Development (NON-NEGOTIABLE)
The Business & Product Requirements Document (BRD/PRD-MNS-2026-01) is the single source of truth. Every feature, page, component, and requirement defined in the BRD MUST be implemented. Nothing from BRD/PRD can be skipped. If anything is unclear, infer minimally but DO NOT omit. Missing features, compliance modules, or broken navigation constitute project failure.

### II. Complete Banking Compliance (ZERO-TOLERANCE)
All mandatory compliance modules MUST be implemented exactly as defined in BRD: DEAF (Depositor Education and Awareness Fund), Grievance Redressal with RBI Ombudsman link, Policy Centre, and KFS (Key Facts Statement) panels on all loan pages. Compliance is not optional - any missing compliance module results in project failure. All implementations must strictly follow BRD definitions and RBI guidelines.

### III. Production-Grade Next.js Architecture
Use Next.js latest version with App Router (/app) as the exclusive framework. Server Components by default, Client Components only when explicitly required for interactivity. Use next/image for all assets, follow modular architecture patterns, and implement proper error boundaries. No alternative frameworks or architectures are permitted.

### IV. Banking UX Standards
Implement clean, minimal, professional UI that builds trust. Use official Mahanagar Bank logo and branding throughout. Design must be mobile-first with accessibility WCAG 2.1 AA compliance. All interfaces must reflect banking industry standards for security, clarity, and user confidence. No experimental or trendy UI patterns that compromise trust.

### V. Multilingual System (EN/HI)
English and Hindi language support is mandatory across all pages. Language preference must be persistent and respected throughout the user journey. All UI strings, product content, error messages, and compliance information must be available in both languages. Translation must be reviewed by native speakers.

### VI. CMS-Driven Content Management
All editable content must be dynamic through a CMS system. Product rates, promotional content, news updates, and policy documents must be manageable by non-technical staff. No hard-coded content that requires developer intervention for routine updates.

### VII. Performance & Accessibility Excellence
PageSpeed performance MUST achieve ≥ 90 on all pages. Full WCAG 2.1 AA compliance is required. All images must have proper alt text, all forms must be accessible, and all navigation must work via keyboard. Performance and accessibility are non-negotiable requirements for banking applications.

## Banking Compliance Standards

### Regulatory Requirements
All implementations MUST comply with RBI guidelines for Urban Cooperative Banks (UCBs) as of March 2026. This includes mandatory disclosures, DEAF compliance, unclaimed deposits reporting, and customer protection measures. Any regulatory requirement in the BRD takes precedence over technical preferences.

### Security & Data Protection
Implement industry-standard security practices including HTTPS everywhere (no non-standard ports), proper input validation, CSRF protection, and secure session management. All sensitive operations must be logged and auditable. Customer data protection is a banking requirement, not a technical option.

### Financial Transparency
All interest rates, fees, and charges must be accurately displayed and easily accessible. KFS (Key Facts Statement) must be present on all 18 loan product pages showing complete cost of credit. No hidden fees or unclear pricing structures are permitted.

## Development Workflow

### Specification-Driven Development
All features must follow the complete spec → plan → tasks → implementation workflow. No development work can begin without approved specifications. User stories must be independently testable and prioritized. Each story must deliver value as a standalone MVP increment.

### Quality Gates
Every implementation must pass: BRD compliance verification, accessibility testing, performance testing, security review, and multilingual testing. No feature can be considered complete without passing all quality gates. Automated testing must cover all critical user journeys.

### Code Review Standards
All code changes require review focusing on: BRD compliance, security implications, performance impact, accessibility compliance, and banking UX standards. Reviewers must verify that no BRD requirements are missed or compromised.

## Governance

This constitution supersedes all other practices and guidelines. Amendments require documentation, approval from project stakeholders, and a migration plan for any existing work. All pull requests and reviews must verify compliance with these principles. Complexity must be justified with banking-specific requirements. Use runtime guidance documents for development decisions but never violate constitutional principles.

**Version**: 1.0.0 | **Ratified**: 2026-03-24 | **Last Amended**: 2026-03-24
