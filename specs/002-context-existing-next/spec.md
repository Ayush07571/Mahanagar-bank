# Feature Specification: Complete Banking System Fix & BRD Coverage

**Feature Branch**: `002-complete-brd-implementation`  
**Created**: 2026-03-25  
**Status**: Draft  
**Input**: User description: "Fix and complete the system to achieve FULL BRD COVERAGE and a fully functional website."

## Problem Statement
The current Mahanagar Nagrik Sahakari Bank website is functionally incomplete, with several broken or missing pages, regulatory non-compliance (missing DEAF info, Grievance matrix, KFS), and inconsistent multilingual support. To meet the March 2026 BRD requirements, the system must be updated to provide 100% coverage of all products and services, fix all navigation/routing issues, and implement a robust accessibility and multilingual framework.

## Goals
1. **Full BRD Coverage**: Implement all 18+ loan pages, deposit products, and digital services specified in the BRD.
2. **Fix Routing & Navigation**: Ensure 0 broken links in header, footer, and dropdowns. Resolve Net Banking URL issues.
3. **Multilingual Support**: Implement a complete English + Hindi system with persistent language preference.
4. **Regulatory Compliance**: Add DEAF search, Grievance Redressal matrix, and Key Facts Statement (KFS) on all loan pages.
5. **Accessibility**: Add a site-wide accessibility toolbar for font size and contrast adjustments.
6. **UI/UX Polish**: Fix spacing, typography, and responsive alignment across all components.

## User Scenarios & Testing

### User Story 1 - Fix All Navigation (Priority: P1)
As any site visitor, I want every menu link to open a real page, so that I can find the information I need without dead ends.

**Why this priority**: Navigation is the backbone of the site; broken links destroy trust and prevent users from accessing products.

**Independent Test**: Use a link checker to verify that all 100+ links in header, footer, and product pages resolve to 200 OK.

**Acceptance Scenarios**:
1. **Given** the homepage header, **When** I click "Net Banking", **Then** I am redirected to the secure portal on port 443 (no port 8444).
2. **Given** any product card, **When** I click the CTA, **Then** I land on the specific product subpage (SP) instead of a landing page or "#".

---

### User Story 2 - Multilingual Experience (Priority: P1)
As a Hindi-first user, I want to switch the site to Hindi, so that I can read all product details and compliance notices in my preferred language.

**Why this priority**: Required by BRD to serve the local Bhopal demographic.

**Independent Test**: Switch language to Hindi and verify that all UI elements, including navigation and product content, update correctly.

**Acceptance Scenarios**:
1. **Given** the language toggle, **When** I select "Hindi", **Then** the entire site content translates and remains Hindi even after a page refresh.
2. **Given** the savings account page in Hindi, **When** I fill the inquiry form, **Then** form labels and validation messages are also in Hindi.

---

### User Story 3 - Regulatory Compliance (Priority: P1)
As a customer, I want to see the DEAF list and Grievance matrix, so that I can exercise my rights as a bank member.

**Why this priority**: Mandatory for RBI compliance as of March 2026.

**Independent Test**: Navigate to /deaf-unclaimed-deposits and perform a search.

**Acceptance Scenarios**:
1. **Given** the /deaf-unclaimed-deposits page, **When** I search for a name, **Then** the table filters in real-time or shows "No records found".
2. **Given** any loan page, **When** I view the "Apply" tab, **Then** a Key Facts Statement (KFS) panel is visible with indicative rates and fees.

## Requirements

### Functional Requirements

- **FR-001**: Implement all missing product subpages (SPs) defined in Section 4 of BRD (Gold Loan, Car Loan, Education Loan, etc.) using the root slug structure.
- **FR-002**: Update header and footer components to include all links specified in BRD Section 5.1.
- **FR-003**: Implement a dedicated internal page at `/digital-services/net-banking` that provides secure access instructions and a login gateway, replacing all direct external links to port 8444.
- **FR-004**: Expand i18n system to cover 100% of site content in English and Hindi using centralized JSON files (AI-generated content to be used for initial Hindi translations).
- **FR-005**: Implement a persistent Accessibility Toolbar (C-001) for font scaling and contrast toggling.
- **FR-006**: Add functional EMI Calculator (C-010) that matches RBI standard formula.
- **FR-007**: Ensure all 18 loan pages display the KFS Panel (C-012) and an Inline Inquiry Form (C-004).
- **FR-008**: Implement search functionality for the DEAF table (C-013).
- **FR-009**: Create the Grievance Escalation Matrix (C-014) on the /grievance-redressal page.
- **FR-010**: Fix all UI styling issues related to spacing, alignment, and typography to match the professional banking design system.
- **FR-011**: Implement 301 redirects from old nested paths (e.g., `/personal-banking/home-loan`) to new root-level slugs (e.g., `/home-loan`) to maintain SEO and UX.

### Key Entities

- **Product**: Represents a banking product (Loan, Deposit, Service) with content tabs (Overview, Features, Eligibility, Documents, Apply).
- **Inquiry**: Data captured from the inline inquiry form (Name, Mobile, Product, Branch).
- **DEAF Record**: An entry in the unclaimed deposits table.
- **Translation**: Key-value pairs for i18n strings in EN and HI.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of pages specified in the BRD Information Architecture (Section 4) are implemented and accessible.
- **SC-002**: 0 broken links (404) across the entire site navigation (Header, Footer, Sitemap).
- **SC-003**: 100% of UI strings and product content available in both English and Hindi.
- **SC-004**: Accessibility toolbar functions on all pages (font size +/- 20%, high contrast toggle).
- **SC-005**: All forms (Inquiry, Feedback) submit successfully with validation and confirmation messages.

## Assumptions
- The standard HTTPS port (443) is used for Net Banking as per BRD requirement, accessed via the new internal `/net-banking` page.
- Individual product pages will be moved to root-level slugs (e.g., `/gold-loan`) while maintaining redirects for existing nested paths.
- Hindi content will be generated using AI and then flagged for later manual review.

## Clarifications Resolved

- **Q1 [Net Banking URL]**: Implement as a separate internal webpage (`/digital-services/net-banking`) instead of a direct external redirect.
- **Q2 [Routing Structure]**: Implement root-level slugs as primary routes and provide 301 redirects for all legacy nested paths.
- **Q3 [Hindi Content Source]**: Use AI-generated translations based on the English source for full coverage, with a manual review step planned for Phase 2.
