---
title: "Authentication API Implementation Guide Overview"
slug: "overview"
excerpt: "Overview of implementing custom login UI using SaaSus Platform Authentication API"
hidden: false
createdAt: "Tue Mar 03 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Mar 03 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
---

This document provides an overview of implementing sign-in functionality using the SaaSus Platform Authentication API with a custom login UI.

:::info
For detailed implementation code, see [Sign-in Implementation](/docs/part-6/implementation-guide/auth/sign-in).
:::

## What is the Authentication API?

The Authentication API allows SaaS providers to implement login functionality from their own custom-built UI, without using the standard hosted login screen provided by SaaSus Platform.

By calling the SaaSus Auth API (`/sign-in` and `/sign-in/challenge`) from your server-side application, you can obtain ID tokens, access tokens, and refresh tokens for subsequent API calls and authorization.

This document explains how to implement the sign-in flow: "Custom Login UI → Server-side → SaaSus Auth API".

## What You Can Do with the Authentication API

### Custom Login UI with Email + Password Authentication

Perform login from your own branded UI without using the SaaSus standard login screen. You have full control over the login screen design and UX.

### Sign-in for Users Registered in SaaSus

Authenticate users registered through the SaaSus admin console or your own management interface via the API.

### Token Acquisition (ID / Access / Refresh Tokens)

Upon successful authentication, tokens are returned that can be used for SaaSus API calls and in-app authorization.

### Support for Use Cases Difficult with Standard Login

Implement flexible login methods such as login using dummy email format IDs, tailored to your SaaS requirements.

## Authentication Flow and Architecture

The Authentication API is based on a **two-step authentication flow** using the Secure Remote Password (SRP) protocol. Instead of simply sending a password, it performs authentication securely through a challenge-and-response mechanism.

### Authentication Flow Overview

```
Frontend (React)            Backend (Go)               SaaSus Auth API
     |                           |                           |
     | 1. email + password       |                           |
     |-------------------------->|                           |
     |                           | 2. POST /sign-in          |
     |                           |  (Calculate & send SRP_A) |
     |                           |-------------------------->|
     |                           |                           |
     |                           | 3. Challenge response      |
     |                           |  (PASSWORD_VERIFIER, etc.) |
     |                           |<--------------------------|
     | 4. Challenge parameters   |                           |
     |<--------------------------|                           |
     |                           |                           |
     | 5. Send challenge response|                           |
     |-------------------------->|                           |
     |                           | 6. POST /sign-in/challenge |
     |                           |-------------------------->|
     |                           |                           |
     |                           | 7. Return tokens          |
     |                           |<--------------------------|
     | 8. Tokens (Cookie)        |                           |
     |<--------------------------|                           |
```

### Flow Details

1. **Authentication Start**: The frontend sends the email address (or ID) and password to the backend.
2. **SRP Calculation**: The backend calculates SRP_A and calls the SaaSus Auth API `/sign-in`.
3. **Challenge Received**: A challenge (e.g., `PASSWORD_VERIFIER`) is returned from the SaaSus Auth API.
4. **Challenge Forwarded**: The backend returns the challenge parameters to the frontend.
5. **Challenge Response**: The frontend sends the challenge response (e.g., `PASSWORD_CLAIM_SIGNATURE`) to the backend.
6. **Challenge Verification**: The backend calls the SaaSus Auth API `/sign-in/challenge`.
7. **Token Issued**: Upon successful authentication, ID token, access token, and refresh token are returned.
8. **Token Storage**: The backend returns the tokens to the frontend via HttpOnly Cookies.

:::info Benefits of SRP Protocol
The SRP (Secure Remote Password) protocol never transmits the password in plaintext over the network. Authentication is performed through hashing and SRP calculations, making it secure even against man-in-the-middle attacks. Since completing SRP calculations on the frontend alone is complex, a backend-mediated architecture for SaaSus API communication is recommended.
:::

### Challenge Types and Branching Logic

The following challenge types may be returned from the SaaSus Auth API:

| Challenge Name | Description | Action |
|---|---|---|
| `PASSWORD_VERIFIER` | Standard password verification | Send challenge response to obtain tokens |
| `NEW_PASSWORD_REQUIRED` | Password change required on first login | Prompt for new password and send challenge again |

## Hybrid Login with ID and Email Address

SaaSus Platform requires **email address format** as user identifiers, but your SaaS may need to support login with "Employee IDs" or "User IDs" (e.g., `employee001`).

This sample application implements a conversion logic on the backend to enable **hybrid authentication with either "ID or email address"**.

### Conversion Logic Overview

1. Parse the login ID string entered by the user
2. **Email format** (contains `@`) → Send directly to SaaSus API
3. **ID format** (no `@`) → Append a system-defined dummy domain (e.g., `@example.auth`) to convert to email format, then send to SaaSus API

This allows end users to log in with just an ID without being aware of the underlying email format.

:::tip Implementation Note
When using ID-based login, users must also be registered in SaaSus Platform with the same dummy domain appended to their email address. Login will fail if the domain doesn't match between registration and authentication.
:::

## Sample Application Structure

The sample application in this implementation guide is built with the following stack:

| Component | Technology |
|---|---|
| Frontend | React + TypeScript |
| Backend | Go |
| Token Management | HttpOnly Cookie |
| Security | CSRF Protection |

### Implemented Screens and Features

- **Login Screen**: Email address (or ID) + password input form
- **New Password Screen**: Password change on first login
- **Sign-in API**: SRP authentication flow with SaaSus Auth API
- **Token Management**: Secure token storage via HttpOnly Cookies
- **Logout**: Session termination via cookie clearing

For detailed implementation, see [Sign-in Implementation](/docs/part-6/implementation-guide/auth/sign-in).
