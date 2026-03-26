---

description: "Task list for complete digital banking system implementation"
---

# Tasks: Complete Digital Banking System

**Input**: Design documents from `/specs/001-complete-banking-system/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `app/`, `tests/` at repository root
- **Web app**: `app/`, `tests/`
- **Mobile**: `api/`, `ios/src/` or `android/src/`
- Paths shown below assume Next.js App Router structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create Next.js 14 project with TypeScript and App Router
- [x] T002 Initialize Tailwind CSS 3.4 configuration
- [x] T003 [P] Setup Prisma 5 with Supabase PostgreSQL connection
- [x] T004 [P] Configure Jest + React Testing Library + Playwright testing setup
- [x] T005 [P] Setup ESLint and Prettier configurations
- [x] T006 Create project structure per implementation plan
- [x] T007 [P] Setup environment variables configuration (.env.local)
- [x] T008 [P] Configure TypeScript strict mode and path aliases

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T009 Setup Prisma database schema with core entities
- [x] T010 [P] Implement database connection and query utilities in lib/db.ts
- [x] T011 [P] Setup form validation schemas in lib/validations.ts
- [x] T012 [P] Create global layout with header and footer components
- [x] T013 [P] Setup API route structure in app/api/
- [x] T014 [P] Configure error handling and logging infrastructure
- [x] T015 [P] Setup internationalization (i18n) configuration for EN/HI
- [x] T016 [P] Create base UI components in components/ui/
- [x] T017 [P] Setup accessibility toolbar widget
- [x] T018 [P] Configure security middleware and CSRF protection

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Complete Navigation System (Priority: P1) 🎯 MVP

**Goal**: Implement complete navigation system with all 77 pages accessible

**Independent Test**: Can be fully tested by systematically clicking every navigation menu item and verifying each resolves to a complete, content-filled page with no 404 errors or blank content

### Implementation for User Story 1

- [x] T019 [P] [US1] Create Global Header component in components/layout/Header.tsx
- [x] T020 [P] [US1] Create Global Footer component in components/layout/Footer.tsx
- [x] T021 [P] [US1] Implement dual-tab navigation (Personal/Business) in components/layout/Navigation.tsx
- [x] T022 [P] [US1] Create mobile-responsive hamburger menu in components/layout/MobileMenu.tsx
- [x] T023 [P] [US1] Implement language toggle (EN/HI) in components/ui/LanguageToggle.tsx
- [x] T024 [P] [US1] Create Net Banking CTA button in components/banking/NetBankingCTA.tsx
- [x] T025 [P] [US1] Implement accessibility toolbar in components/ui/AccessibilityToolbar.tsx
- [x] T026 [P] [US1] Create all 77 basic page files with placeholder content
- [x] T027 [US1] Update global layout.tsx to include header and footer
- [x] T028 [US1] Implement navigation routing for all Personal Banking pages
- [x] T029 [US1] Implement navigation routing for all Business Banking pages
- [x] T030 [US1] Implement navigation routing for all Digital Services pages
- [x] T031 [US1] Implement navigation routing for all Compliance pages
- [x] T032 [US1] Implement navigation routing for all Tools/Utility pages
- [x] T033 [US1] Add trust bar components in components/layout/TrustBar.tsx
- [x] T034 [US1] Configure sticky header behavior with CSS
- [x] T035 [US1] Test navigation on all breakpoints (320px, 480px, 768px, 1024px, 1440px)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Banking Compliance Framework (Priority: P1)

**Goal**: Implement all mandatory compliance pages with accurate data

**Independent Test**: Can be fully tested by accessing each compliance page and verifying: DEAF search functionality works, Grievance escalation matrix displays correctly, all policy documents are downloadable, and all required regulatory elements are present

### Implementation for User Story 2

- [x] T036 [P] [US2] Create DEAF page in app/compliance/deaf-unclaimed-deposits/page.tsx
- [x] T037 [P] [US2] Implement DEAF searchable table component in components/compliance/DEAFTable.tsx
- [x] T038 [P] [US2] Create Grievance Redressal page in app/compliance/grievance-redressal/page.tsx
- [x] T039 [P] [US2] Implement escalation matrix component in components/compliance/EscalationMatrix.tsx
- [x] T040 [P] [US2] Create Policy Centre page in app/compliance/policy-centre/page.tsx
- [x] T041 [P] [US2] Create Privacy Policy page in app/compliance/privacy-policy/page.tsx
- [x] T042 [P] [US2] Create KYC/CKYC page in app/compliance/kyc-ckyc/page.tsx
- [x] T043 [P] [US2] Create Cyber Awareness page in app/compliance/cyber-awareness/page.tsx
- [x] T044 [P] [US2] Create Positive Pay System page in app/compliance/positive-pay/page.tsx
- [x] T045 [P] [US2] Implement policy document download functionality
- [x] T046 [P] [US2] Add RBI Ombudsman links and toll-free numbers
- [x] T047 [P] [US2] Create DEAF data API endpoint in app/api/compliance/deaf/route.ts
- [x] T048 [P] [US2] Create policy documents API endpoint in app/api/compliance/policies/route.ts
- [x] T049 [P] [US2] Add compliance data validation and error handling
- [x] T050 [P] [US2] Test all compliance page functionality and data accuracy

**Checkpoint**: All User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Product Information System (Priority: P1)

**Goal**: Implement complete product pages with tabs, KFS panels, and related products

**Independent Test**: Can be fully tested by visiting each product page and verifying all tabs (Overview, Features, Eligibility, Documents, Apply) contain complete information, KFS panels are present on loan pages, and related products are displayed

### Implementation for User Story 3

- [x] T051 [P] [US3] Create Product Page Shell component in components/banking/ProductPageShell.tsx
- [x] T052 [P] [US3] Implement tabbed layout component in components/ui/Tabs.tsx
- [x] T053 [P] [US3] Create KFS Panel component in components/banking/KFSPanel.tsx
- [x] T054 [P] [US3] Create Related Products component in components/banking/RelatedProducts.tsx
- [x] T055 [P] [US3] Implement all 12 personal loan product pages
- [x] T056 [P] [US3] Implement all 6 business loan product pages
- [x] T057 [P] [US3] Implement all 3 personal deposit product pages
- [x] T058 [P] [US3] Implement all 3 business deposit product pages
- [x] T059 [P] [US3] Create Savings Account page in app/personal-banking/savings-account/page.tsx
- [x] T060 [P] [US3] Create Current Account page in app/business-banking/current-account/page.tsx
- [x] T061 [P] [US3] Create Interest Rates page in app/tools/interest-rates/page.tsx
- [x] T062 [P] [US3] Create Service Charges page in app/tools/service-charges/page.tsx
- [x] T063 [P] [US3] Implement product data API endpoints in app/api/products/route.ts
- [x] T064 [P] [US3] Create rates and charges API endpoints in app/api/rates/route.ts
- [x] T065 [US3] Add product content validation and error handling

**Checkpoint**: All product pages should be independently functional with complete information

---

## Phase 6: User Story 4 - Digital Services Access (Priority: P1)

**Goal**: Implement all digital service pages with working links and correct configurations

**Independent Test**: Can be fully tested by clicking each digital service link and verifying: Net Banking uses standard HTTPS port 443, Mobile Banking links resolve to app stores, UPI/QR page contains VPA details, BBPS page lists supported billers

### Implementation for User Story 4

- [x] T066 [P] [US4] Create Net Banking page in app/digital-services/net-banking/page.tsx
- [x] T067 [P] [US4] Create Mobile Banking page in app/digital-services/mobile-banking/page.tsx
- [x] T068 [P] [US4] Create ATM Services page in app/digital-services/atm/page.tsx
- [x] T069 [P] [US4] Create Debit Cards page in app/digital-services/debit-cards/page.tsx
- [x] T070 [P] [US4] Create UPI/QR page in app/digital-services/upi-qr/page.tsx
- [x] T071 [P] [US4] Create IMPS page in app/digital-services/imps/page.tsx
- [x] T072 [P] [US4] Create BBPS page in app/digital-services/bbps/page.tsx
- [x] T073 [P] [US4] Create SMS Banking page in app/digital-services/sms-banking/page.tsx
- [x] T074 [P] [US4] Create PAN Services page in app/digital-services/pan/page.tsx
- [x] T075 [P] [US4] Create Locker Services page in app/digital-services/locker/page.tsx
- [x] T076 [P] [US4] Create NEFT/RTGS page in app/digital-services/neft-rtgs/page.tsx
- [x] T077 [P] [US4] Create PM Jeevan Bima Yojana page in app/digital-services/pm-jeevan-yojana/page.tsx
- [x] T078 [P] [US4] Create PM Suraksha Bima Yojana page in app/digital-services/pm-suraksha-yojana/page.tsx
- [x] T079 [P] [US4] Configure Net Banking link to use HTTPS port 443
- [x] T080 [P] [US4] Add verified Play Store and App Store links for mobile banking
- [x] T081 [US4] Test all digital service links and configurations

**Checkpoint**: All digital services should be accessible with correct configurations

---

## Phase 7: User Story 5 - Customer Inquiry System (Priority: P2)

**Goal**: Implement inline inquiry forms with validation, CAPTCHA, and confirmation

**Independent Test**: Can be fully tested by submitting inquiry forms from various product pages and verifying: form validation works, CAPTCHA functions, confirmation messages display with reference numbers, and email/SMS confirmations are sent

### Implementation for User Story 5

- [x] T082 [P] [US5] Create Inline Inquiry Form component in components/forms/InquiryForm.tsx
- [x] T083 [P] [US5] Create Contact Us page in app/tools/contact-us/page.tsx
- [x] T084 [P] [US5] Create Feedback/Complaint page in app/tools/feedback/page.tsx
- [x] T085 [P] [US5] Implement form validation schemas in lib/validations.ts
- [x] T086 [P] [US5] Add CAPTCHA integration (reCAPTCHA v3)
- [x] T087 [P] [US5] Create inquiry submission API endpoint in app/api/inquiries/submit/route.ts
- [x] T088 [P] [US5] Create contact form API endpoint in app/api/contact/submit/route.ts
- [x] T089 [P] [US5] Implement reference number generation system
- [x] T090 [P] [US5] Add email/SMS confirmation service
- [x] T091 [P] [US5] Create inquiry database model and migrations
- [x] T092 [P] [US5] Add inquiry forms to all product pages
- [x] T093 [US5] Test form submission, validation, and confirmations

**Checkpoint**: Customer inquiry system should be fully functional across all pages

---

## Phase 8: User Story 6 - Multilingual Banking Experience (Priority: P2)

**Goal**: Implement complete Hindi language support with persistent preferences

**Independent Test**: Can be fully tested by toggling to Hindi language and verifying: all UI strings translate correctly, all product content is available in Hindi, language preference persists across sessions, and translations are contextually appropriate

### Implementation for User Story 6

- [x] T094 [P] [US6] Setup next-i18next configuration
- [x] T095 [P] [US6] Create English translation files in locales/en/
- [x] T096 [P] [US6] Create Hindi translation files in locales/hi/
- [x] T097 [P] [US6] Implement language persistence in localStorage
- [x] T098 [P] [US6] Translate all UI components and strings
- [x] T099 [P] [US6] Translate all product content and compliance information
- [x] T100 [P] [US6] Create language switching middleware
- [x] T101 [P] [US6] Add Hindi content validation and fallback logic
- [x] T102 [US6] Test language toggle functionality and persistence
- [x] T103 [US6] Verify translation completeness and accuracy

**Checkpoint**: Complete multilingual support should be functional across all pages

---

## Phase 9: User Story 7 - Financial Tools and Calculators (Priority: P2)

**Goal**: Implement EMI calculator with real-time calculations and amortization schedules

**Independent Test**: Can be fully tested by entering various loan amounts, rates, and tenures and verifying: calculations update in real-time, amortization schedules are accurate, export functionality works, and results match RBI standard formulas

### Implementation for User Story 7

- [x] T104 [P] [US7] Create EMI Calculator page in app/tools/emi-calculator/page.tsx
- [x] T105 [P] [US7] Implement EMI calculation component in components/tools/EMICalculator.tsx
- [x] T106 [P] [US7] Create amortization schedule component in components/tools/AmortizationTable.tsx
- [x] T107 [P] [US7] Implement RBI standard EMI formula in lib/calculations.ts
- [x] T108 [P] [US7] Add input validation for loan amounts (₹10,000 - ₹50,00,000)
- [x] T109 [P] [US7] Add input validation for rates (6% - 24%) and tenures (1-30 years)
- [x] T110 [P] [US7] Implement real-time calculation updates
- [x] T111 [P] [US7] Add PDF export functionality for amortization schedule
- [x] T112 [P] [US7] Create calculator API endpoint in app/api/calculator/emi/route.ts
- [x] T113 [US7] Test calculator accuracy against RBI formulas
- [x] T114 [US7] Verify amortization schedule calculations

**Checkpoint**: EMI calculator should be fully functional with accurate calculations

---

## Phase 10: User Story 8 - Branch and ATM Locator (Priority: P3)

**Goal**: Implement interactive maps showing all branches and ATMs with complete details

**Independent Test**: Can be fully tested by interacting with the map and verifying: all branches display as pins, clicking pins shows complete information, filters work correctly, and directions links function properly

### Implementation for User Story 8

- [x] T115 [P] [US8] Create Branch Locator page in app/tools/branch-locator/page.tsx
- [x] T116 [P] [US8] Create ATM Locator page in app/tools/atm-locator/page.tsx
- [x] T117 [P] [US8] Create Locate Us overview page in app/tools/locate-us/page.tsx
- [x] T118 [P] [US8] Create IFSC Codes page in app/tools/ifsc-codes/page.tsx
- [x] T119 [P] [US8] Implement interactive map component in components/maps/InteractiveMap.tsx
- [x] T120 [P] [US8] Create branch/ATM popup component in components/maps/LocationPopup.tsx
- [x] T121 [P] [US8] Add map filtering functionality (All/Branches/ATMs)
- [x] T122 [P] [US8] Create branch/ATM database models and seed data
- [x] T123 [P] [US8] Implement locations API endpoint in app/api/locations/route.ts
- [x] T124 [P] [US8] Add Google Maps or Mapbox integration
- [x] T125 [P] [US8] Test map functionality, filters, and directions

**Checkpoint**: Branch and ATM locator should be fully functional with interactive maps

---

## Phase 11: Homepage System Implementation

**Goal**: Implement complete homepage with all BRD-specified components

- [x] T126 [P] Create Homepage page in app/page.tsx
- [x] T127 [P] Create Homepage Carousel component in components/homepage/Carousel.tsx
- [x] T128 [P] Create What's New section component in components/homepage/WhatsNew.tsx
- [x] T129 [P] Create Product/Services Cards component in components/homepage/ProductCards.tsx
- [x] T130 [P] Create Quick Links Bar component in components/homepage/QuickLinks.tsx
- [x] T131 [P] Create Fraud Awareness Banner component in components/homepage/FraudBanner.tsx
- [x] T132 [P] Implement CMS integration for homepage content
- [x] T133 [P] Add homepage content management API endpoints
- [x] T134 [P] Test all homepage components and responsiveness

---

## Phase 12: About Us Section Implementation

**Goal**: Implement all About Us pages with management information

- [x] T135 [P] Create About Us page in app/about-us/page.tsx
- [x] T136 [P] Create Board of Directors page in app/about-us/board-of-directors/page.tsx
- [x] T137 [P] Create Committees page in app/about-us/committees/page.tsx
- [x] T138 [P] Create Management Team page in app/about-us/management/page.tsx
- [x] T139 [P] Create Annual Reports page in app/about-us/annual-reports/page.tsx
- [x] T140 [P] Create Membership page in app/about-us/membership/page.tsx
- [x] T141 [P] Create Careers page in app/about-us/careers/page.tsx
- [x] T142 [P] Add management content management functionality
- [x] T143 [P] Test all About Us pages and content

---

## Phase 13: CMS Integration Implementation

**Goal**: Implement headless CMS integration for content management

- [x] T144 [P] Setup headless CMS client (Strapi/Sanity/Contentful)
- [x] T145 [P] Create CMS API integration in lib/cms.ts
- [x] T146 [P] Implement content caching and optimization
- [x] T147 [P] Create CMS content types and schemas
- [x] T148 [P] Add multilingual content management in CMS
- [x] T149 [P] Implement content validation and error handling
- [x] T150 [P] Create CMS admin interface components
- [x] T151 [P] Test CMS integration and content updates

---

## Phase 14: Final Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T152 [P] Implement SEO optimization (meta tags, sitemap.xml)
- [x] T153 [P] Add structured data (LocalBusiness, BreadcrumbList)
- [x] T154 [P] Implement performance optimization (image optimization, lazy loading)
- [x] T155 [P] Add Google Analytics 4 tracking
- [x] T156 [P] Implement comprehensive accessibility testing
- [x] T157 [P] Add security headers and HTTPS enforcement
- [x] T158 [P] Create comprehensive error pages (404, 500)
- [x] T159 [P] Add loading states and skeleton screens
- [x] T160 [P] Implement comprehensive logging and monitoring
- [x] T161 [P] Add comprehensive testing coverage
- [x] T162 [P] Create deployment configuration and documentation
- [x] T163 [P] Run final validation against BRD requirements

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-10)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (US1 → US2 → US3 → US4 → US5 → US6 → US7 → US8)
- **Homepage (Phase 11)**: Depends on US1 (navigation) and US3 (products)
- **About Us (Phase 12)**: Depends on US1 (navigation)
- **CMS Integration (Phase 13)**: Depends on content pages being ready
- **Polish (Phase 14)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (US1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (US2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (US3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable
- **User Story 4 (US4)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 5 (US5)**: Can start after Foundational (Phase 2) - May integrate with US1/US3 but should be independently testable
- **User Story 6 (US6)**: Can start after Foundational (Phase 2) - Applies globally to all pages
- **User Story 7 (US7)**: Can start after Foundational (Phase 2) - May integrate with US3 but should be independently testable
- **User Story 8 (US8)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable

### Within Each User Story

- Components can be developed in parallel where marked [P]
- Pages depend on components being ready
- API endpoints depend on database models
- Integration tasks depend on individual components

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All components within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all header components together:
Task: "Create Global Header component in components/layout/Header.tsx"
Task: "Create Global Footer component in components/layout/Footer.tsx"
Task: "Implement dual-tab navigation in components/layout/Navigation.tsx"

# Launch all page creation tasks together:
Task: "Create all 77 basic page files with placeholder content"
Task: "Implement navigation routing for all Personal Banking pages"
Task: "Implement navigation routing for all Business Banking pages"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Complete Navigation System)
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Add User Story 5 → Test independently → Deploy/Demo
7. Add User Story 6 → Test independently → Deploy/Demo
8. Add User Story 7 → Test independently → Deploy/Demo
9. Add User Story 8 → Test independently → Deploy/Demo
10. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 + Homepage
   - Developer B: User Story 2 + User Story 3
   - Developer C: User Story 4 + User Story 5
3. Stories complete and integrate independently
4. Later phases: User Story 6, 7, 8 + CMS integration

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing (if tests are included)
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence

---

## Final Validation Checklist

- [ ] All 77 pages from BRD are implemented
- [ ] All 18 loan products have KFS panels
- [ ] All compliance pages are functional
- [ ] Navigation system works completely
- [ ] Multilingual support is complete
- [ ] CMS integration is functional
- [ ] Performance targets met (PageSpeed ≥ 90)
- [ ] Accessibility compliance achieved (WCAG 2.1 AA)
- [ ] All user stories independently testable
- [ ] Zero BRD requirements missing
