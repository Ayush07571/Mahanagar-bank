# Data Model: Banking System Enhancement

This document defines the key entities and data structures for the 002-context-existing-next feature.

## Entity: Product

Represents a banking product (Loan, Deposit, or Digital Service).

| Field | Type | Description |
|-------|------|-------------|
| `id` | `UUID` | Primary key |
| `slug` | `string` | URL identifier (root-level, e.g., "gold-loan") |
| `type` | `enum` | LOAN, DEPOSIT, SERVICE, COMPLIANCE |
| `category` | `enum` | PERSONAL, BUSINESS |
| `title` | `i18n` | Product name in EN/HI |
| `description` | `i18n` | Short summary in EN/HI |
| `content` | `JSON` | Structured content for tabs (Overview, Features, etc.) |
| `kfs` | `JSON` | Key Facts Statement data (for loans) |
| `updatedAt` | `DateTime` | Last content update |

## Entity: Inquiry

Captures customer interest from inline forms.

| Field | Type | Description |
|-------|------|-------------|
| `id` | `UUID` | Primary key |
| `fullName` | `string` | Customer name (required) |
| `mobile` | `string` | 10-digit Indian mobile number (validated) |
| `email` | `string?` | Optional contact email |
| `productId` | `UUID` | Reference to the Product entity |
| `branch` | `string` | Preferred branch (from dropdown) |
| `message` | `text?` | Optional message (max 250 chars) |
| `status` | `enum` | NEW, PROCESSING, COMPLETED, ARCHIVED |
| `createdAt` | `DateTime` | Submission timestamp |

## Entity: DEAFRecord

An entry in the Depositor Education and Awareness Fund table.

| Field | Type | Description |
|-------|------|-------------|
| `id` | `UUID` | Primary key |
| `customerName` | `string` | Name of the account holder |
| `address` | `string` | Registered address |
| `amount` | `decimal` | Unclaimed deposit amount |
| `transactionDate` | `Date` | Last active date |
| `accountNumber` | `string` | Masked or partial account number |
| `state` | `string` | State of the branch |

## Entity: Translation (i18n)

Key-value pairs for localized UI and content.

| Field | Type | Description |
|-------|------|-------------|
| `namespace` | `string` | e.g., "common", "navigation", "loans" |
| `key` | `string` | e.g., "apply_now", "home_loan_title" |
| `en` | `text` | English value |
| `hi` | `text` | Hindi value |
