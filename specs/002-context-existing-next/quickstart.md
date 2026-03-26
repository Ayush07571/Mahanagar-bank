# Quickstart: Banking System Enhancement

This document provides instructions for local development and testing of the 002-context-existing-next feature.

## Prerequisites

- **Node.js**: v20 or v22 (LTS)
- **Git**: v2.40+
- **Prisma**: installed as a dev dependency
- **Docker**: (Optional) for local PostgreSQL database

## Local Setup

1. **Clone and Branch**:
   ```bash
   git checkout 002-context-existing-next
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Database Setup**:
   - Ensure a local PostgreSQL instance is running.
   - Configure `.env` with `DATABASE_URL`.
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Environment Variables**:
   - Copy `.env.example` to `.env`.
   - Set `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY`.

5. **Start Development Server**:
   ```bash
   npm run dev
   ```

## Key Test Scenarios

### 1. Navigation & Redirects
- Navigate to `/personal-banking/home-loan`.
- **Expected**: 301 Redirect to `/home-loan`.

### 2. i18n Toggling
- Click the language toggle (EN/HI) in the header.
- **Expected**: UI and product content update to Hindi; preference persists after refresh.

### 3. EMI Calculator
- Open `/emi-calculator` or any loan page.
- Input: ₹1,000,000 @ 10% for 120 months.
- **Expected**: EMI = ₹13,215 (verify against RBI standard).

### 4. DEAF Search
- Open `/compliance/deaf-unclaimed-deposits`.
- Enter a search term in the filter input.
- **Expected**: Results filter in real-time or show "No records found."

### 5. Accessibility Toolbar
- Click the "Contrast" button in the toolbar.
- **Expected**: Background/Foreground colors update sitewide for AA compliance.
