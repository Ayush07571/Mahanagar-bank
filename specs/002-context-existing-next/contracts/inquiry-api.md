# Contract: Inquiry API

This document defines the interface for submitting customer inquiries.

## Endpoint: POST /api/inquiries/submit

**Authentication**: Public (Protected by Google reCAPTCHA v3)

### Request Structure (JSON)

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `fullName` | `string` | Yes | Min 2, Max 100 characters |
| `mobile` | `string` | Yes | Regex: `^[6-9]\d{9}$` (Indian 10-digit mobile) |
| `email` | `string` | No | Valid email format |
| `productId` | `UUID` | Yes | Must exist in Product entity |
| `branch` | `string` | Yes | One of: `BAIRAGARHI_HO`, `TT_NAGAR`, `KAROND` |
| `message` | `string` | No | Max 250 characters |
| `captchaToken` | `string` | Yes | reCAPTCHA v3 verification token |

### Success Response (201 Created)

```json
{
  "success": true,
  "referenceNumber": "MNS-2026-XXXXX",
  "message": "Inquiry submitted successfully."
}
```

### Error Responses

- **400 Bad Request**: Validation failure (e.g., invalid mobile, missing fields).
- **429 Too Many Requests**: Rate limit exceeded for IP/Mobile.
- **500 Internal Server Error**: Database or routing failure.
