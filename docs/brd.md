**BUSINESS & PRODUCT REQUIREMENTS DOCUMENT**

**Website Enhancement Initiative**

Mahanagar Nagrik Sahakari Bank Ltd., Bhopal

_mnsbankbhopal.com_

| **Document ID**    | BRD/PRD-MNS-2026-01                                                               |
| ------------------ | --------------------------------------------------------------------------------- |
| **Version**        | 1.0                                                                               |
| **Date**           | March 2026                                                                        |
| **Derived From**   | PVD-MNS-2026-01 · FRS-MNS-2026-03 · Design Brief MNS-Website-Design-New-2026.xlsx |
| **Reference Site** | <https://tjsbbank.co.in/> (UX design reference per client brief)                  |
| **Classification** | Confidential - Internal Use Only                                                  |
| **Prepared By**    | Digital Enhancement Team                                                          |
| **Spec Kit Input** | Yes - structured for direct handoff to development tooling                        |

_BRD/PRD-MNS-2026-01 · Confidential · March 2026_

| **1** | **Executive Summary** |
| ----- | --------------------- |

## 1.1 Purpose

This Business & Product Requirements Document (BRD/PRD) defines the complete scope, goals, user stories, page inventory, component specifications, and technical requirements for the redesign and enhancement of the Mahanagar Nagrik Sahakari Bank (MNS Bank) website at mnsbankbhopal.com. It is the single source of truth for all design, development, and QA work on this project and is structured for direct input to Spec Kit or equivalent specification tooling.

## 1.2 Business Problem

MNS Bank's current website fails on three dimensions critical to a cooperative bank in 2026:

- Functional incompleteness - 10+ navigation items lead to empty or broken pages, including all Digital Services pages and several Loan product pages.
- Regulatory non-compliance - The DEAF/Unclaimed Deposits page is blank (a mandatory RBI disclosure). No Grievance Redressal page with RBI Ombudsman link exists. No KFS (Key Facts Statement) on loan pages. Multiple RBI-mandated policy documents are absent.
- Trust & credibility gap - Stale copyright (2021), typos on the homepage, a non-standard HTTPS port for Net Banking (8444), and no Annual Reports or membership information undermine customer confidence.

## 1.3 Strategic Objectives

The enhanced website must achieve the following strategic objectives:

- Complete every product and service page with accurate, benefit-led content.
- Achieve full RBI compliance for UCB digital disclosure requirements as of March 2026.
- Deliver a modern, mobile-first visual design modelled on the reference template (tjsbbank.co.in) using MNS Bank's own brand identity.
- Enable digital customer acquisition via inline inquiry forms and self-service tools.
- Establish SEO foundations and local search presence for Bhopal.
- Support both English and Hindi languages across all pages.

## 1.4 Document Lineage

| **Document**                          | **ID**                           | **Role in this Project**                                     |
| ------------------------------------- | -------------------------------- | ------------------------------------------------------------ |
| Product Vision Document               | PVD-MNS-2026-01                  | Strategic goals, user personas, phased roadmap               |
| Design Brief                          | MNS-Website-Design-New-2026.xlsx | Site structure (SP/CP), feature list, reference template     |
| Functional Requirements Specification | FRS-MNS-2026-03                  | Complete FR/NFR set, IA tree, use cases, acceptance criteria |
| **This Document**                     | **BRD/PRD-MNS-2026-01**          | User stories, page inventory, component specs, dev handoff   |

| **2** | **Users & Personas** |
| ----- | -------------------- |

The following personas represent the primary and secondary users of the MNS Bank website. All user stories and UX decisions must be validated against at least one of these personas.

| **Persona**                                     | **Profile**                                                                   | **Goals on Website**                                                     | **Pain Points (Current Site)**                                                   | **Key FRs**                            |
| ----------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | -------------------------------------- |
| **P1 - Priya**<br><br>_34, Account seeker_      | First-time customer. Researches banks online before visiting. Mobile-first.   | Find savings account details, compare rates, understand opening process. | Can't find product content - all loan and deposit pages are empty or broken.     | FR-ACC-01, FR-DEP-02, FR-PROD-03       |
| **P2 - Ramesh**<br><br>_52, Existing member_    | Long-standing account holder. Wants home loan. Checks rates on desktop.       | Check deposit rates, apply for loan, calculate EMI.                      | Rates page exists but differential rates missing. EMI calculator is a dead link. | FR-DEP-03, FR-CALC-01, FR-LOAN-02      |
| **P3 - Sunita**<br><br>_45, Business owner_     | Runs a shop in TT Nagar. Needs working capital. Uses both mobile and desktop. | Find business loan options, understand eligibility, contact branch.      | No Business banking section with clear product pages. Contact info incomplete.   | FR-BIZ-LOAN-01, FR-CONN-03, FR-CONN-07 |
| **P4 - Suresh**<br><br>_48, Hindi-first user_   | Local resident, more comfortable in Hindi. Uses mobile only.                  | Browse products in Hindi, fill inquiry form in Hindi.                    | No Hindi support. Site is English-only.                                          | FR-NAV-08, NFR-10                      |
| **P5 - Meena**<br><br>_42, Complaint filer_     | Account holder with an unresolved service complaint. Wants to escalate.       | Find grievance process, escalate to RBI Ombudsman if needed.             | No grievance page. No RBI Ombudsman link anywhere on site.                       | FR-GRP-01 to FR-GRP-07                 |
| **P6 - Vikram**<br><br>_35, Prospective member_ | Community member curious about joining the cooperative.                       | Understand membership benefits, eligibility, how to join.                | No membership section exists anywhere on the site.                               | FR-MEM-01 to FR-MEM-04                 |
| **P7 - Rajesh**<br><br>_60, Legal heir_         | Legal heir searching for a deceased relative's dormant bank account.          | Search DEAF list, understand claim process.                              | DEAF page exists but has zero data and broken search.                            | FR-DEAF-01 to FR-DEAF-08               |
| **P8 - Arjun**<br><br>_19, Student_             | Student seeking education loan for engineering college in Bhopal.             | Find education loan details, check eligibility, calculate EMI.           | No education loan page exists.                                                   | FR-LOAN-01, FR-LOAN-06                 |

| **3** | **User Stories** |
| ----- | ---------------- |

User stories follow the format: As a \[persona\], I want to \[goal\], so that \[benefit\]. Each story includes acceptance criteria and maps to the FRS-MNS-2026-03.

| **ID** | **Story / Persona**                              | **Description**                                                                                                                                                                                       | **Acceptance Criteria**                                                                                                                            | **Pri.**   | **Phase** |
| ------ | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------- |
| US-001 | **Fix All Navigation**<br><br>_All personas_     | As any site visitor, I want every menu link to open a real page, so that I can find the information I need without dead ends.                                                                         | All nav items resolve to content pages. Zero 404s or blank pages.                                                                                  | **High**   | 1         |
| US-002 | **Language Toggle**<br><br>_P4 - Suresh_         | As a Hindi-first user, I want to switch the site to Hindi, so that I can read all content in my preferred language.                                                                                   | EN/HI toggle in header. All UI strings and product content available in Hindi. Translation reviewed by native speaker.                             | **High**   | 2         |
| US-003 | **Persistent Quick Nav**<br><br>_P2 - Ramesh_    | As an existing member on a long page, I want a sticky navigation shortcut, so that I can jump to key sections without scrolling back to the top.                                                      | Sticky or floating quick nav visible on all pages with working links to key sections.                                                              | **Medium** | 2         |
| US-004 | **Homepage Carousel**<br><br>_All personas_      | As a site visitor, I want to see relevant, up-to-date promotional content on the homepage, so that I am aware of new products and offers.                                                             | Carousel shows 3+ unique, relevant images with correct overlay text. No duplicate placeholders.                                                    | **High**   | 2         |
| US-005 | **What's New Section**<br><br>_All personas_     | As a customer, I want to see recent bank news and updates on the homepage, so that I know the bank is active and current.                                                                             | Min. 3 entries visible. CMS-editable by non-technical staff. Date-stamped.                                                                         | **High**   | 2         |
| US-006 | **Trust Bar**<br><br>_P1 - Priya_                | As a prospective customer, I want to see trust signals on the homepage, so that I know the bank is legitimate and my deposits are safe.                                                               | DICGC badge, RBI membership, NPCI/RuPay logo visible. Each links to the respective organisation.                                                   | **High**   | 2         |
| US-007 | **Fraud Awareness Banner**<br><br>_All personas_ | As a digital banking user, I want to be warned about common scams, so that I can protect myself from UPI fraud, phishing, and OTP theft.                                                              | Persistent banner/notice on homepage and digital service pages. Links to full Cyber Awareness page.                                                | **High**   | 2         |
| US-008 | **Featured Deposit Rates**<br><br>_P2 - Ramesh_  | As a customer, I want to see current deposit rates on the homepage, so that I can quickly compare without navigating deep into the site.                                                              | Rates displayed with tenure labels. Rates are editable via CMS. Rate disclaimer present.                                                           | **High**   | 1         |
| US-009 | **Product Page Tabs**<br><br>_All personas_      | As a customer browsing a loan or deposit product, I want the information organised in clear tabs (Overview / Features / Eligibility / Documents / Apply), so that I can jump directly to what I need. | Internal tabs present on all product SPs. Tab switching does not require page reload.                                                              | **High**   | 2         |
| US-010 | **Related Products**<br><br>_P1 - Priya_         | As a customer on a product page, I want to see related products recommended at the bottom of the page, so that I can discover other relevant offerings.                                               | 3-4 related items shown per page. Auto-generated by category where possible.                                                                       | **High**   | 2         |
| US-011 | **Inline Inquiry Form**<br><br>_All personas_    | As a customer interested in a product, I want to submit my interest directly from the product page, so that I don't have to navigate to a separate form.                                              | Inline form on every product/service SP. Fields validated. CAPTCHA present. Confirmation shown on submit.                                          | **High**   | 2         |
| US-012 | **Key Facts Statement**<br><br>_P2 - Ramesh_     | As a loan applicant, I want to see a Key Facts Statement on every loan page, so that I can understand the total cost of the loan before applying, as required by RBI.                                 | KFS section visible on all 18 loan SPs. Shows: rate, processing fee, repayment summary, total cost of credit.                                      | **High**   | 2         |
| US-013 | **Savings Account Page**<br><br>_P1 - Priya_     | As a prospective account holder, I want a complete Savings Account page, so that I understand features, rates, and how to open an account.                                                            | SP live with all content tabs. Inline form. Download link for account opening form.                                                                | **High**   | 2         |
| US-014 | **Interest Rates Table**<br><br>_P2 - Ramesh_    | As an existing member, I want a comprehensive interest rates table, so that I can find the rate for my deposit tenure including senior citizen and staff differentials.                               | Rates CP accessible from both tabs. All products and tenures covered. All differential categories shown. Disclaimer present.                       | **High**   | 1         |
| US-015 | **Personal Loan Pages**<br><br>_P1 - Priya_      | As a prospective borrower, I want dedicated pages for all 12 personal loan types, so that I can understand each product in detail.                                                                    | All 12 personal loan SPs live with tabs, KFS, inline form, and EMI calculator link.                                                                | **High**   | 2         |
| US-016 | **Education Loan Page**<br><br>_P8 - Arjun_      | As a student, I want an Education Loan page, so that I can understand eligibility, moratorium period, and applicable courses.                                                                         | SP live with full content including moratorium period, courses, institutions, and repayment details.                                               | **High**   | 2         |
| US-017 | **Business Loan Pages**<br><br>_P3 - Sunita_     | As a business owner, I want dedicated pages for all 6 business loan products, so that I can find a product that fits my working capital needs.                                                        | All 6 business loan SPs live with tabs, KFS, and inline form.                                                                                      | **High**   | 2         |
| US-018 | **EMI Calculator**<br><br>_P2 - Ramesh_          | As a loan applicant, I want a real-time EMI calculator, so that I can determine my monthly repayment before applying.                                                                                 | Calculator takes Loan Amount, Rate, Tenure. Updates in real-time. Shows EMI, total interest, total payable, and amortisation schedule.             | **High**   | 2         |
| US-019 | **Fix Net Banking Link**<br><br>_All personas_   | As a customer wanting to log in to Net Banking, I want a link that works without port errors, so that I can access my account securely.                                                               | Net Banking link uses standard HTTPS (port 443). No port 8444 in any user-facing URL.                                                              | **High**   | 1         |
| US-020 | **UPI / QR Code Page**<br><br>_All personas_     | As a digital banking customer, I want a UPI page, so that I can understand and use MNS Bank's UPI services.                                                                                           | UPI/QR SP live with VPA details, how-to guide, and app download links.                                                                             | **High**   | 2         |
| US-021 | **BBPS Page**<br><br>_P3 - Sunita_               | As a business customer, I want to pay utility bills through the bank, so that I can manage all payments in one place.                                                                                 | BBPS SP live with list of supported billers, how-to guide, and access link.                                                                        | **Medium** | 2         |
| US-022 | **Branch & ATM Locator**<br><br>_P3 - Sunita_    | As a customer, I want an interactive map showing all branches and ATMs, so that I can find the nearest one with opening hours.                                                                        | Interactive map live with min. 3 branches (Bairagarhi HO, TT Nagar, Karond). Each pin shows address, phone, and hours.                             | **Medium** | 3         |
| US-023 | **Contact Us Page**<br><br>_All personas_        | As a customer needing to reach the bank, I want a complete Contact Us page, so that I can find the right phone, email, or address for my query.                                                       | All branch contacts live. General inquiry form with validation. Page live by Phase 1.                                                              | **High**   | 1         |
| US-024 | **Grievance Redressal**<br><br>_P5 - Meena_      | As a customer with an unresolved complaint, I want a clear escalation path, so that I know exactly how to escalate to the RBI Ombudsman if the bank does not resolve my issue.                        | Grievance page with 3-level escalation matrix. Nodal Officer details. RBI CMS link (cms.rbi.org.in). Toll-free 14448. Policy PDF downloadable.     | **High**   | 1         |
| US-025 | **Membership Page**<br><br>_P6 - Vikram_         | As a community member, I want to learn how to join the cooperative, so that I can become a shareholder and participate in the bank's governance.                                                      | Membership SP live with eligibility, share capital, member rights, downloadable application form.                                                  | **High**   | 2         |
| US-026 | **Annual Reports**<br><br>_All personas_         | As a depositor or member, I want to see the bank's annual reports, so that I can review its financial health before trusting it with my money.                                                        | Annual Reports CP live with min. 3 years of reports. Key financial highlights summary on page. CRAR and tier classification shown.                 | **High**   | 2         |
| US-027 | **DEAF Page Compliance**<br><br>_P7 - Rajesh_    | As a legal heir, I want to search a complete and accurate DEAF list, so that I can identify and claim my deceased relative's unclaimed deposits.                                                      | URL corrected. Table populated or explicit 'no accounts' statement shown. Search works. Instructions section live. Last Updated timestamp present. | **High**   | 1         |
| US-028 | **Policy Centre**<br><br>_All personas_          | As a customer or regulator, I want to access all bank policies in one place, so that I can review the bank's commitments and compliance posture.                                                      | Policy Centre page live with: Fair Practices Code, KYC/CKYC Policy, Penal Charges, Citizens' Charter, KFS templates - all downloadable.            | **High**   | 2         |
| US-029 | **Cyber Awareness Page**<br><br>_All personas_   | As a digital banking user, I want to learn how to protect myself from online fraud, so that I can safely use the bank's digital channels.                                                             | Cyber Awareness SP live with phishing, UPI fraud, OTP safety, Report Fraud section, cybercrime.gov.in link.                                        | **High**   | 2         |
| US-030 | **Positive Pay System**<br><br>_P2 - Ramesh_     | As a customer issuing large cheques, I want to understand Positive Pay, so that I can protect my high-value cheques from fraud.                                                                       | PPS SP live with threshold amount, how-to register (Net Banking / Mobile / branch), and RBI circular link.                                         | **Medium** | 2         |

| **4** | **Information Architecture & Page Inventory** |
| ----- | --------------------------------------------- |

The following complete page inventory is derived from the client design brief (MNS-Website-Design-New-2026.xlsx, Structure sheet) and the benchmark analysis in FRS-MNS-2026-03. SP = Separate Page (unique URL). CP = Combined Page (shared URL, tabbed content).

_All SP pages require unique, SEO-friendly URL slugs. All CP pages must serve both Personal and Business contexts via clearly labelled tabs or sections._

### Navigation Architecture

The site uses a dual top-level tab structure. Each tab exposes five consistent sub-navigation categories:

- Tab 1: Personal Banking → Accounts · Deposits · Loans · Services · Stay Connected
- Tab 2: Business Banking → Accounts · Deposits · Loans · Services · Stay Connected
- Shared sections: About Us · Other Services · Compliance & Footer

### Complete Page Inventory

| **URL Slug**                                   | **Page Title**                   | **Type** | **Phase** | **Content Owner / Notes**                                                                                                  |
| ---------------------------------------------- | -------------------------------- | -------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| **ABOUT US**                                   |                                  |          |           |                                                                                                                            |
| /about-us                                      | About Us                         | CP       | 2         | Management - Bank history, milestones, chairman's note                                                                     |
| /board-of-directors                            | Board of Directors               | CP       | 2         | Management - Names, designations, photos                                                                                   |
| /committees                                    | Committees                       | CP       | 2         | Management - Committee listings                                                                                            |
| /management                                    | Management Team                  | CP       | 2         | Management - Senior leadership listing                                                                                     |
| /annual-reports                                | Annual Reports & Financials      | CP       | 2         | Admin - Min. 3 years of PDFs + key financial highlights                                                                    |
| /membership                                    | Membership / Shareholding        | SP       | 2         | Legal - Eligibility, share capital, application form                                                                       |
| /careers                                       | Careers                          | SP       | 1         | HR - Open positions, descriptions, application process                                                                     |
| **PERSONAL BANKING**                           |                                  |          |           |                                                                                                                            |
| /savings-account                               | Savings Account                  | SP       | 2         | Content - Features, rates, min. balance, opening process                                                                   |
| /double-deposit                                | Double Deposit                   | SP       | 2         | Content - Features, rate, tenure, opening process                                                                          |
| /time-deposit                                  | Time Deposit                     | SP       | 2         | Content - Features, rate table, FD maturity details                                                                        |
| /recurring-deposit                             | Recurring Deposit                | SP       | 2         | Content - Features, rate, instalment details                                                                               |
| /gold-loan                                     | Gold Loan                        | SP       | 2         | Content - Features, LTV, eligibility, KFS, inline form                                                                     |
| /car-loan                                      | Car Loan                         | SP       | 2         | Content - Features, eligibility, KFS, inline form                                                                          |
| /consumer-loan                                 | Consumer Loan                    | SP       | 2         | Content - Features, eligibility, KFS, inline form                                                                          |
| /personal-loan                                 | Personal Loan                    | SP       | 2         | Content - Features, eligibility, KFS, inline form                                                                          |
| /festival-loan                                 | Festival Loan                    | SP       | 2         | Content - Features, seasonal terms, KFS, inline form                                                                       |
| /education-loan                                | Education Loan                   | SP       | 2         | Content - Eligibility, courses, moratorium, KFS - NEW                                                                      |
| /home-loan                                     | House Purchase Loan              | SP       | 2         | Content - Features, LTV, eligibility, KFS, inline form                                                                     |
| /house-construction-loan                       | House Construction Loan          | SP       | 2         | Content - Features, drawdown schedule, KFS, inline form                                                                    |
| /loan-against-fd                               | Loan Against FD/RI/RD            | SP       | 2         | Content - LTV%, eligible instruments, KFS                                                                                  |
| /loan-against-nsc                              | Loan Against NSC/LIC/KVP         | SP       | 2         | Content - Eligible instruments, LTV%, KFS                                                                                  |
| /loan-against-property                         | Loan Against Property            | SP       | 2         | Content - LTV%, eligibility, KFS, inline form                                                                              |
| /mortgage-overdraft                            | Mortgage Overdraft               | SP       | 2         | Content - Features, eligibility, limit, KFS                                                                                |
| /interest-rates                                | Interest Rates                   | CP       | 1         | Content - Shared with Business. All products by tenure + differentials                                                     |
| /service-charges                               | Service Charges                  | CP       | 1         | Content - Shared with Business. All fee categories in tables                                                               |
| /emi-calculator                                | EMI Calculator                   | CP       | 2         | Dev - Shared with Business. Real-time calc + amortisation                                                                  |
| /offers                                        | Offers                           | CP       | 2         | Content - Shared with Business. Date-limited promotions                                                                    |
| **BUSINESS BANKING**                           |                                  |          |           |                                                                                                                            |
| /current-account                               | Current Account                  | SP       | 2         | Content - Features, eligibility, charges, opening process                                                                  |
| /biz-double-deposit                            | Business Double Deposit          | SP       | 2         | Content - Business-specific terms where different                                                                          |
| /biz-time-deposit                              | Business Time Deposit            | SP       | 2         | Content - Business-specific terms where different                                                                          |
| /biz-recurring-deposit                         | Business Recurring Deposit       | SP       | 2         | Content - Business-specific terms where different                                                                          |
| /working-capital-loan                          | Working Capital Loan             | SP       | 2         | Content - Features, eligibility, KFS, inline form                                                                          |
| /transport-loan                                | Transport Loan                   | SP       | 2         | Content - Features, eligibility, KFS, inline form                                                                          |
| /professional-loan                             | Professional Loan                | SP       | 2         | Content - Features, eligibility, KFS, inline form                                                                          |
| /micro-finance                                 | Micro Finance                    | SP       | 2         | Content - Features, SHG/JLG details, KFS, inline form                                                                      |
| /self-employed-loan                            | Self Employed Loan               | SP       | 2         | Content - Features, eligibility, KFS, inline form                                                                          |
| /overdraft-facility                            | Overdraft Facility               | SP       | 2         | Content - Features, limits, eligibility, KFS                                                                               |
| **DIGITAL SERVICES**                           |                                  |          |           |                                                                                                                            |
| /net-banking                                   | Net Banking                      | SP       | 1         | IT - Standard HTTPS link. Port 8444 MUST be retired                                                                        |
| /mobile-banking                                | Mobile Banking                   | SP       | 1         | IT - Verified Play Store + App Store links                                                                                 |
| /atm                                           | ATM Services                     | SP       | 2         | Content - ATM network, usage guide, limits                                                                                 |
| /debit-cards                                   | Debit Cards                      | SP       | 2         | Content - Card variants, RuPay network, controls                                                                           |
| /upi-qr                                        | UPI / QR Code                    | SP       | 2         | Content/IT - VPA, QR guide, how-to - NEW                                                                                   |
| /imps                                          | IMPS                             | SP       | 2         | Content - Limits, timings, charges                                                                                         |
| /bbps                                          | BBPS - Bill Payments             | SP       | 2         | Content - Supported billers, how-to - NEW                                                                                  |
| /sms-banking                                   | SMS Banking                      | SP       | 2         | Content - SMS commands, registration - NEW                                                                                 |
| /pan                                           | PAN Services                     | SP       | 2         | Content - PAN application via bank                                                                                         |
| /locker                                        | Locker Services                  | SP       | 2         | Content - Sizes, charges, how to apply                                                                                     |
| /neft-rtgs                                     | NEFT / RTGS                      | SP       | 2         | Content - Limits, timings, charges                                                                                         |
| /pm-jeevan-yojana                              | PM Jeevan Bima Yojana            | SP       | 2         | Content - Scheme details, premium, coverage, enrolment                                                                     |
| /pm-suraksha-yojana                            | PM Suraksha Bima Yojana          | SP       | 2         | Content - Scheme details, premium, coverage, enrolment                                                                     |
| **OTHER SERVICES (conditional - if licensed)** |                                  |          |           |                                                                                                                            |
| /insurance                                     | Insurance (Bancassurance)        | SP       | 3         | Legal - Only if licensed. Partner insurer, products, SEBI/IRDAI disclaimer                                                 |
| /mutual-funds                                  | Mutual Funds                     | SP       | 3         | Legal - Only if empanelled AMC. AMFI disclaimer mandatory                                                                  |
| /demat                                         | Demat Account                    | SP       | 3         | Content - Only if offered. Charges, how to open                                                                            |
| /asba                                          | ASBA / IPO Services              | SP       | 3         | Content - Only if offered. Eligible accounts, process                                                                      |
| **STAY CONNECTED**                             |                                  |          |           |                                                                                                                            |
| /locate-us                                     | Locate Us                        | CP       | 3         | Content - HO, branches, ATMs overview with map links                                                                       |
| /branch-locator                                | Branch Locator                   | CP       | 3         | Dev - Interactive map. Min. 3 branches with full details                                                                   |
| /atm-locator                                   | ATM Locator                      | CP       | 3         | Dev - Interactive map. All MNS Bank ATMs                                                                                   |
| /ifsc-codes                                    | IFSC Codes                       | CP       | 2         | Content - All branch IFSC codes in searchable table                                                                        |
| /tenders                                       | Tenders                          | CP       | 1         | Admin - Active tenders with closing dates + download links                                                                 |
| /feedback                                      | Feedback / Complaint             | CP       | 3         | Dev - Structured form with reference number generation                                                                     |
| /contact-us                                    | Contact Us                       | CP       | 1         | Content - All branch contacts, general inquiry form                                                                        |
| **COMPLIANCE & LEGAL (footer-linked)**         |                                  |          |           |                                                                                                                            |
| /deaf-unclaimed-deposits                       | DEAF / Unclaimed Deposits        | SP       | 1         | IT/Compliance - 301 redirect from deef-inactive-accounts.php. Populated table or explicit nil statement. Search must work. |
| /privacy-policy                                | Privacy Policy                   | SP       | 1         | Legal - Data handling, PDPB compliance                                                                                     |
| /grievance-redressal                           | Grievance Redressal              | SP       | 1         | Legal - Escalation matrix, Nodal Officer, RBI CMS link, 14448                                                              |
| /policy-centre                                 | Policy Centre                    | CP       | 2         | Legal - Fair Practices Code, KYC, Penal Charges, Citizens' Charter, KFS templates                                          |
| /kyc-ckyc                                      | KYC / CKYC                       | SP       | 2         | Content - KYC process, documents, CKYC number                                                                              |
| /cyber-awareness                               | Cyber Security & Fraud Awareness | SP       | 2         | Content/IT - Phishing, UPI fraud, OTP safety, cybercrime.gov.in link                                                       |
| /positive-pay                                  | Positive Pay System              | SP       | 2         | Content/IT - PPS threshold, how to register, RBI circular link                                                             |
| /download-forms                                | Download Forms                   | CP       | 1         | Admin - All customer forms as PDFs                                                                                         |
| /sitemap                                       | Sitemap                          | SP       | 2         | Dev - Full site map, auto-generated or maintained                                                                          |

| **5** | **Component Specifications** |
| ----- | ---------------------------- |

The following component specifications define the required UI building blocks. These are designed as reusable components for the design system and map directly to development tickets in Spec Kit.

## 5.1 Global Components

### C-001 Global Header

| **Property**     | **Specification**                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Elements         | Logo (left) · Language Toggle EN/HI (right of logo) · Net Banking CTA button (far right) · Primary navigation tabs (Personal / Business) · Hamburger menu on mobile |
| Sticky behaviour | Header must remain fixed to the top of the viewport on scroll (position: sticky). On mobile, collapses to hamburger with full-screen drawer.                        |
| Language Toggle  | Toggles between EN and HI. Persists via localStorage. Applies i18n strings to all visible UI elements and content blocks.                                           |
| Net Banking CTA  | Distinct button style (filled, gold). Links to standard HTTPS portal URL. Must NOT link to port 8444.                                                               |
| Accessibility    | Accessibility toolbar widget adjacent to header: zoom in/out, contrast, invert, greyscale, word spacing, reset.                                                     |
| FR References    | FR-NAV-01, FR-NAV-02, FR-NAV-08, FR-SVC-02, NFR-07                                                                                                                  |

### C-002 Global Footer

| **Property**     | **Specification**                                                                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Columns          | Column 1: About Us links · Column 2: Personal Banking links · Column 3: Business Banking links · Column 4: Compliance & Legal links · Column 5: Contact info + social icons |
| Trust bar        | Row above footer: DICGC insured badge, RBI membership, NPCI/RuPay logo, Years of service. Each badge links to the respective body's website.                                |
| Social Icons     | Facebook, Instagram, Twitter/X, LinkedIn, YouTube. All open in new tab.                                                                                                     |
| Compliance links | Privacy Policy, Grievance Redressal, DEAF/Unclaimed Deposits, Sitemap, Download Forms. All must resolve.                                                                    |
| Copyright        | Auto-updates to current year via JavaScript: © {new Date().getFullYear()} Mahanagar Nagrik Sahakari Bank Ltd.                                                               |
| FR References    | FR-NAV-07, FR-HOME-07, FR-HOME-09, FR-COMP-02                                                                                                                               |

### C-003 Product Page Shell

Every product and service SP must use this standard shell layout:

- Section 1: Hero banner - page title, breadcrumb, short description, Apply/Enquire CTA
- Section 2: Internal tab bar - Overview · Features · Eligibility · Documents · Apply
- Section 3: Tab content panels (swapped on tab click, no page reload)
- Section 4: Key Facts Statement panel (loan pages only) - rate, fee, total cost, repayment summary
- Section 5: Inline inquiry form (collapsed/expandable or always visible)
- Section 6: Related Products grid - 3-4 cards auto-generated from same category

_Tab format and related products are mandatory on all SPs per FR-PROD-01 and FR-PROD-02._

### C-004 Inline Inquiry Form

| **Property**  | **Specification**                                                                                                                                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fields        | Full Name (required) · Mobile Number (required, 10-digit Indian validation) · Email (optional) · Product/Service (pre-filled from page context, dropdown) · Preferred Branch (dropdown: Bairagarhi HO / TT Nagar / Karond) · Message (optional, 250 char max) |
| Validation    | Client-side + server-side validation. Mobile: regex ^\[6-9\]\\d{9}\$. All required fields highlighted on empty submit.                                                                                                                                        |
| CAPTCHA       | Google reCAPTCHA v3 (invisible) or equivalent. No bare honeypot-only solution.                                                                                                                                                                                |
| Submission    | On success: on-screen confirmation with reference number. Email/SMS confirmation to customer. Submission routed to designated bank email or CRM endpoint.                                                                                                     |
| PII handling  | No PII stored in browser localStorage, sessionStorage, or cookies. All form data sent via HTTPS POST only.                                                                                                                                                    |
| FR References | FR-FORM-01 to FR-FORM-06, FR-PROD-03, NFR-15                                                                                                                                                                                                                  |

## 5.2 Homepage Components

### C-005 Homepage Carousel

- Minimum 3 slides. Each slide: unique full-width image, headline, sub-headline, optional CTA button.
- Auto-play with 5 second interval. Manual prev/next controls. Swipe on mobile.
- All slide content must be CMS-editable by non-technical staff.
- FR Reference: FR-HOME-01

### C-006 What's New Section

- Displays minimum 3 most recent entries (news articles, rate changes, announcements).
- Each entry: date, category tag, headline, 2-line excerpt, Read More link.
- Entries managed via CMS. Oldest entries automatically hidden when new ones are added.
- FR Reference: FR-HOME-02, FR-HOME-06

### C-007 Product/Services Cards

- Visually boxed cards in a 3-4 column grid (responsive: 2 on tablet, 1 on mobile).
- Each card: icon/image, product name, one-line description, CTA button.
- Two card sets: Personal products, Business products. Visible simultaneously or tabbed.
- FR Reference: FR-HOME-03

### C-008 Quick Links Bar

- Horizontal row of icon + label links: EMI Calculator · Interest Rates · Branch Locator · Download Forms · Contact Us · Grievance Redressal.
- Visible on homepage. May also persist as a floating widget on product pages.
- FR Reference: FR-HOME-04

### C-009 Fraud Awareness Banner

- Persistent yellow/amber banner near top of homepage and all Digital Services pages.
- Message: warning about phishing, UPI fraud, OTP scams. Dismiss button allowed.
- Links to /cyber-awareness page. Re-appears on next session if dismissed.
- FR Reference: FR-HOME-10, FR-CYBER-04

## 5.3 Self-Service Tool Components

### C-010 EMI Calculator

| **Property**  | **Specification**                                                                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inputs        | Loan Amount: slider + numeric field (₹10,000 - ₹50,00,000). Interest Rate: slider + field (6% - 24%). Tenure: slider + field with toggle (Months / Years, 1-30 years). |
| Outputs       | Monthly EMI (large display). Total Interest Payable. Total Amount Payable. All update in real-time on input change.                                                    |
| Amortisation  | Year-wise table: Year, Principal Paid, Interest Paid, Total Paid, Outstanding Balance. Exportable to PDF (optional, Phase 3).                                          |
| Formula       | EMI = \[P × R × (1+R)^N\] / \[(1+R)^N - 1\] where P = Principal, R = monthly rate, N = tenure in months. Must match RBI standard formula.                              |
| CTA           | 'Apply for This Loan' button below results - links to inline inquiry form for the relevant product (or generic loan inquiry form from calculator standalone page).     |
| FR References | FR-CALC-01 to FR-CALC-04, US-018                                                                                                                                       |

### C-011 Branch / ATM Locator Map

- Google Maps embed (or Mapbox alternative). Pins for each branch and ATM.
- On pin click: popup with branch name, full address, phone, email, business hours, Get Directions link.
- Filter toggle: All · Branches · ATMs.
- FR Reference: FR-CONN-03, FR-CONN-04

## 5.4 Compliance Components

### C-012 KFS Panel (Loan Pages)

- Displayed as a prominently boxed panel on the Apply tab of every loan product SP.
- Fields: Loan Type · Indicative Interest Rate (% p.a.) · Processing Fee · Repayment Tenure · Estimated Monthly EMI (for a standard example amount) · Total Cost of Credit (example) · Prepayment charges.
- Static disclaimer: 'Rates are indicative. Actual terms determined at sanction based on applicant profile.'
- FR Reference: FR-PROD-07, FR-LOAN-03, FR-BIZ-LOAN-02

### C-013 DEAF Search Table

- Searchable HTML table. Filter input above table: searches Account Name, Account Number, Customer ID in real-time.
- Columns: S.No., Customer ID, GL Code, New AC Number, DEAF New AC No., Account Name, Address, State, District, Transaction Date, DEAF Amount.
- If zero records: explicit message 'No accounts have been transferred to the DEAF fund as of \[date\].'
- Last Updated timestamp displayed prominently above the table.
- FR Reference: FR-DEAF-01 to FR-DEAF-08

### C-014 Grievance Escalation Matrix

- Visual three-level matrix displayed as a step diagram or table:
  - Level 1 - Branch Manager: Contact details, resolution TAT (e.g. 7 working days).
  - Level 2 - Nodal Officer / Head Office: Contact details, resolution TAT (e.g. 15 working days).
  - Level 3 - RBI Integrated Ombudsman: cms.rbi.org.in, toll-free 14448, available if Level 2 unresolved within 30 days.
- Nodal Officer name, designation, phone, and email must be displayed inline.
- FR Reference: FR-GRP-01 to FR-GRP-07

| **6** | **Non-Functional Requirements** |
| ----- | ------------------------------- |

| **ID** | **Category**  | **Requirement**                                                                                                                                                                        | **Acceptance Metric**             |
| ------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| NFR-01 | Performance   | Homepage Google PageSpeed Insights score ≥ 90 on mobile.                                                                                                                               | PageSpeed score ≥ 90              |
| NFR-02 | Performance   | All pages must fully load within 3 seconds on a standard 4G mobile connection (simulated throttling).                                                                                  | LCP < 3s on simulated 4G          |
| NFR-03 | Availability  | Site must maintain 99.5% uptime per month, excluding communicated maintenance windows.                                                                                                 | 99.5% monthly uptime              |
| NFR-04 | Security      | All pages served over HTTPS with valid SSL certificate. HTTP must 301-redirect to HTTPS.                                                                                               | SSL Labs: A-grade                 |
| NFR-05 | Security      | No non-standard HTTPS port (e.g. 8444) in any user-facing link. Net Banking must use port 443.                                                                                         | Zero instances in codebase        |
| NFR-06 | Accessibility | All pages must conform to WCAG 2.1 Level AA guidelines.                                                                                                                                | WCAG audit: 0 critical errors     |
| NFR-07 | Accessibility | An on-page accessibility toolbar must be present sitewide: zoom in/out, contrast toggle, invert, greyscale, word spacing, reset.                                                       | Toolbar QA pass on 5 browsers     |
| NFR-08 | Responsive    | All pages must render correctly and be fully functional at: 320px, 480px, 768px, 1024px, and 1440px breakpoints.                                                                       | Visual QA at 5 breakpoints        |
| NFR-09 | Browser       | Must function correctly on: Chrome, Firefox, Safari, Edge (latest 2 versions each), Chrome for Android.                                                                                | Cross-browser QA checklist        |
| NFR-10 | i18n          | All UI strings, product content, and compliance notices must be available in English and Hindi. Hindi translations reviewed by native speaker before go-live.                          | Translation review sign-off       |
| NFR-11 | SEO           | Every page must have a unique &lt;title&gt; (max 60 chars) and &lt;meta description&gt; (max 160 chars). sitemap.xml submitted to Google Search Console.                               | SEO audit tool score ≥ 80         |
| NFR-12 | SEO           | LocalBusiness structured data (JSON-LD) with correct NAP for each branch. BreadcrumbList schema on all inner pages.                                                                    | Google Rich Results Test: pass    |
| NFR-13 | CMS           | All product content, rates, charges, news, and policy documents must be editable by non-technical staff via CMS admin panel without developer involvement.                             | Content update time < 15 min      |
| NFR-14 | Analytics     | Google Analytics 4 (or equivalent) installed on all pages. Events tracked: pageview, form_submit, cta_click, calculator_use, language_toggle. Verified before go-live.                 | GA4 debug mode: all events firing |
| NFR-15 | Privacy       | Forms must not store PII in browser cookies, localStorage, or sessionStorage. All form submissions via HTTPS POST. CAPTCHA on all public forms.                                        | Security code review pass         |
| NFR-16 | Design        | All pages must adhere to the defined design system (colours, typography, spacing, component library). No ad-hoc inline styling deviating from the system.                              | Design review sign-off per page   |
| NFR-17 | Compliance    | Website UI must not employ dark patterns (pre-ticked checkboxes, hidden fees, misleading CTAs, bundled consents) per Draft RBI Responsible Business Conduct Amendment Directions 2026. | Legal + design review sign-off    |

| **7** | **Phased Delivery Plan** |
| ----- | ------------------------ |

The project is structured across three phases. Each phase has a defined scope, delivery checklist, and sign-off criteria. Phase 1 is focused on compliance and critical fixes; Phases 2 and 3 build the full product.

## 7.1 Phase 1 - Fix & Foundation (Weeks 1-4)

_Goal: Remove all regulatory violations and critical usability failures. Site must be legally compliant by end of Phase 1._

| **Deliverable**                                                                                                  | **Owner**     | **Acceptance Test**                      |
| ---------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------- |
| Zero broken navigation links - all menu items resolve to content pages                                           | Dev           | Automated link checker: 0 errors         |
| Net Banking link uses standard HTTPS port 443 - port 8444 retired                                                | IT            | Curl request to port 8444 returns error  |
| Homepage typos corrected (Priviledges, Mahanager)                                                                | Content       | Manual proofreading sign-off             |
| Google Play Store link verified and active                                                                       | IT            | Link resolves to live app listing        |
| Footer copyright auto-updates to current year                                                                    | Dev           | JavaScript renders correct year          |
| Interest Rates page live with all differential categories                                                        | Content       | All tenures, all differentials visible   |
| Service Charges page live with complete fee table                                                                | Content       | All fee categories present               |
| DEAF page URL corrected with 301 redirect                                                                        | Dev           | 301 redirect verified                    |
| DEAF table populated OR explicit nil statement displayed                                                         | IT/Compliance | No blank table without message           |
| DEAF search function operational                                                                                 | Dev           | Search filters table in real-time        |
| Grievance Redressal page live - escalation matrix, Nodal Officer, RBI CMS link (cms.rbi.org.in), toll-free 14448 | Legal/Content | All elements verified on page            |
| Careers page live with current openings                                                                          | HR            | At least 1 live posting                  |
| Tenders page live with active tenders                                                                            | Admin         | Active tenders listed with closing dates |
| Download Forms page live with all current forms as PDFs                                                          | Admin         | All forms downloadable                   |
| Privacy Policy page live                                                                                         | Legal         | Legal sign-off obtained                  |

## 7.2 Phase 2 - Redesign & Content (Weeks 5-10)

_Goal: Full visual redesign, all product pages live, all tools operational, all compliance content published._

- Dual tab navigation (Personal / Business) implemented per IA - 5 sub-nav categories per tab
- All 12 personal loan SPs live with tabs, KFS, inline form, EMI calculator link
- All 6 business loan SPs live with tabs, KFS, and inline form
- All deposit SPs live: 3 Personal + 3 Business
- Savings Account and Current Account SPs live
- All 13 digital services SPs live including UPI/QR, BBPS, SMS Banking
- EMI Calculator live and verified against RBI formula
- Homepage redesigned: carousel, What's New, Product Cards, Quick Links, trust bar, fraud banner
- Language toggle (EN/HI) in header sitewide - Hindi translations reviewed
- Accessibility toolbar live and functional on all pages
- Social media links live for all 5 platforms
- DICGC badge sitewide
- Membership / Shareholding SP live
- Annual Reports CP live with minimum 3 years of reports
- Policy Centre CP live: Fair Practices Code, KYC/CKYC, Penal Charges, Citizens' Charter, KFS templates
- Cyber Security & Fraud Awareness SP live
- DEAF instructions section live with claim process
- Positive Pay System SP live
- KFS panel visible on all 18 loan product pages
- PageSpeed Insights mobile score ≥ 90
- WCAG 2.1 AA audit passed
- Zero dark patterns confirmed in design review

## 7.3 Phase 3 - Grow & Acquire (Weeks 11-16)

_Goal: Add customer acquisition flows, locators, SEO, analytics, and optional value-added services._

- Branch Locator interactive map live - min. 3 branches correctly pinned
- ATM Locator interactive map live
- Feedback / Complaint form live with reference number generation
- Loan Inquiry Form live with CRM routing and email/SMS confirmation
- All pages have unique &lt;title&gt; and &lt;meta description&gt; tags
- sitemap.xml submitted to Google Search Console and indexed
- LocalBusiness structured data passes Google Rich Results Test
- GA4 live and tracking pageviews, form_submit, cta_click, calculator_use, language_toggle events
- What's New / News section: minimum 4 published posts
- Insurance, Mutual Funds pages live if bank is licensed
- Site search functional in header

| **8** | **Risks & Mitigations** |
| ----- | ----------------------- |

| **ID** | **Risk**                                                                                        | **Impact** | **Prob.** | **Mitigation**                                                                                                                                                                | **Owner**        |
| ------ | ----------------------------------------------------------------------------------------------- | ---------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| R-01   | Content bottleneck - product rates and eligibility data not supplied by bank management in time | **High**   | High      | Appoint single content approver. Create content brief templates. Set hard deadlines with management. Unblocked content = blocked development.                                 | Management       |
| R-02   | Net Banking port 8444 requires infrastructure change outside website team control               | **High**   | Medium    | Use reverse proxy or subdomain redirect (netbanking.mnsbankbhopal.com) on main domain as short-term fix while infrastructure is updated.                                      | IT               |
| R-03   | DEAF table data unavailable from CBS - compliance gap persists post Phase 1                     | **High**   | Medium    | Display explicit nil statement immediately. IT to provide CBS data extract within Phase 1 window. Escalate to compliance officer if blocked.                                  | IT/Compliance    |
| R-04   | RBI compliance review required for online forms (bancassurance, mutual funds)                   | **Medium** | High      | Scope Phase 3 value-added services as inquiry/interest forms only - not full applications. Legal sign-off required before any financial product form goes live.               | Legal            |
| R-05   | Hindi translations delayed or quality insufficient                                              | **Medium** | Medium    | Engage Hindi translator at start of Phase 2, not end. Provide EN content 2 weeks before Phase 2 deadline. Native speaker review is mandatory gate for launch.                 | Content          |
| R-06   | Design-development misalignment across pages                                                    | **Medium** | Medium    | Define design system (colours, typography, spacing tokens, component library) before coding any pages. All components built from system, not bespoke per page.                | Designer/Dev     |
| R-07   | Annual Reports unavailable or not approved for publication                                      | **Medium** | Medium    | Legal and management to review and approve reports for web publication at project kickoff. Start with most recent year if older reports are in dispute.                       | Management/Legal |
| R-08   | CMS platform decision delayed - blocks content editability                                      | **Medium** | High      | CMS decision must be made in Week 1 of the project. Recommended: headless CMS (Strapi/Sanity) or WordPress with custom theme. No custom PHP without admin panel.              | IT               |
| R-09   | Google PageSpeed target (90) not met on mobile due to image-heavy homepage                      | **Low**    | Medium    | Use WebP format, lazy loading, CDN for all images. Defer non-critical JS. Test with PageSpeed throughout Phase 2, not only at end.                                            | Dev              |
| R-10   | Brand identity unclear - no brand guidelines provided                                           | **Low**    | Medium    | Request vector logo, brand colour codes, and approved font(s) at project kickoff. If none available, design team to create minimal brand style guide as Phase 2 prerequisite. | Designer         |

| **9** | **Assumptions, Dependencies & Constraints** |
| ----- | ------------------------------------------- |

## 9.1 Assumptions

- The bank holds rights to all images, logos, and content to be published on the website.
- All interest rates and fees published will be approved by bank management and comply with RBI guidelines before publication.
- A designated content approver will be nominated by bank management before Phase 2 begins to review and sign off all product page content.
- Online loan applications (full digital processing) are out of scope. Phase 3 covers inquiry/interest forms only, pending RBI compliance review for cooperative banks.
- The existing domain (mnsbankbhopal.com) and hosting contract will be retained for the project duration.
- 'Other Services' pages (Insurance, Mutual Funds, Demat, ASBA) will only be built and published for services MNS Bank is currently licensed or empanelled to offer.
- The Grievance Redressal Policy document exists internally and will be provided by the Legal/Compliance team for web publication by end of Week 1.
- The reference design template (tjsbbank.co.in) is a UX/layout reference only. MNS Bank's own brand identity will be used throughout.

## 9.2 Dependencies

- Bank management: all product interest rates, eligibility criteria, board/leadership info, branch photos, vector logo assets, social media account URLs, and Annual Report PDFs.
- IT team: Net Banking port 8444 resolution or proxy before Phase 1 sign-off; verified Google Play Store app link; DEAF account data export from CBS.
- Legal/Compliance team: review and approval of rate disclosures, DEAF page, Privacy Policy, Grievance Redressal Policy, Fair Practices Code, KYC Policy, KFS templates, Citizens' Charter, and all bancassurance/mutual fund disclaimers.
- CMS/hosting platform decision: must be finalised in Week 1 before Phase 2 development begins.
- Hindi translator: engaged and briefed by start of Phase 2.

## 9.3 Constraints

- All financial disclosures must comply with RBI guidelines for Urban Cooperative Banks (Tier 1 / Tier 2 as applicable).
- Website must not make representations about guaranteed returns or violate RBI advertising regulations.
- Full digital KYC / online account opening is excluded from scope until regulatory compliance is confirmed.
- Any collection of customer PII via forms must comply with applicable Indian data protection legislation (DPDP Act 2023).
- All UI/UX must comply with the Draft RBI Responsible Business Conduct Amendment Directions 2026 - no dark patterns, no bundled consents, no misleading CTAs.
- Insurance and mutual fund pages may only be published with prior IRDAI/SEBI/AMFI compliance sign-off.

| **10** | **Sign-Off & Approvals** |
| ------ | ------------------------ |

This BRD/PRD requires sign-off from the following stakeholders before development commences. Phase-specific sign-offs are required before each phase begins.

## 10.1 Document Sign-Off

| **Stakeholder** | **Role**           | **Signature** | **Date** |
| --------------- | ------------------ | ------------- | -------- |
| \[Name\]        | Bank CEO / MD      |               |          |
| \[Name\]        | IT Head            |               |          |
| \[Name\]        | Content Approver   |               |          |
| \[Name\]        | Legal / Compliance |               |          |
| \[Name\]        | Project Manager    |               |          |

## 10.2 Phase Sign-Off Gates

| **Phase** | **Gate Condition**                                                                                   | **Approver**          | **Sign-off Date** |
| --------- | ---------------------------------------------------------------------------------------------------- | --------------------- | ----------------- |
| Phase 1   | All Phase 1 acceptance criteria met (Section 7.1). Zero RBI compliance violations outstanding.       | CEO + IT Head + Legal |                   |
| Phase 2   | All Phase 2 acceptance criteria met. PageSpeed ≥ 90. WCAG AA passed. Zero dark patterns.             | CEO + PM + Designer   |                   |
| Phase 3   | All Phase 3 acceptance criteria met. GA4 tracking verified. SEO audit ≥ 80. Forms routing confirmed. | CEO + PM + IT Head    |                   |

_Mahanagar Nagrik Sahakari Bank Ltd. · Bhopal · BRD/PRD-MNS-2026-01 · Confidential · March 2026_