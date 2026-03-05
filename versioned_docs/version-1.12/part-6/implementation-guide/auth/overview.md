---
title: "Login API Implementation Guide Overview"
slug: "overview"
excerpt: "Overview of implementing custom login UI using SaaSus Platform Login API"
hidden: false
createdAt: "Tue Mar 03 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Mar 05 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
---

This document provides an overview of implementing login functionality using the SaaSus Platform Login API with a custom login UI.

:::info
For detailed implementation code, see [Login Implementation](/docs/part-6/implementation-guide/auth/sign-in).
:::

## What is the Login API?

The Login API allows SaaS providers to implement login functionality from their own custom-built UI, without using the standard hosted login screen provided by SaaSus Platform.

By calling the SaaSus Platform Auth API (`/sign-in` and `/sign-in/challenge`) from your server-side application, you can obtain ID tokens, access tokens, and refresh tokens for subsequent API calls and authorization.

This document explains how to implement login functionality using a custom login UI with the Login API.

## What You Can Do with the Login API

### Custom Login UI with Email + Password Authentication

Perform login from your own branded UI without using the SaaSus Platform standard login screen. You have full control over the login screen design and UX.

### Token Acquisition (ID / Access / Refresh Tokens)

Upon successful authentication, you can obtain the tokens required for SaaSus Platform API calls.

## Authentication Flow and Architecture

The Login API is based on a **two-step authentication flow** using the Secure Remote Password (SRP) protocol. Instead of simply sending a password, it performs authentication securely through a challenge-and-response mechanism.

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

The following challenge types may be returned from the SaaSus Platform Auth API:

| Challenge Name | Description | Action |
|---|---|---|
| `PASSWORD_VERIFIER` | Standard password verification | Send challenge response to obtain tokens |
| `NEW_PASSWORD_REQUIRED` | Password change required on first login | Prompt for new password and send challenge again |

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
- **Login API**: SRP authentication flow with SaaSus Platform Auth API
- **Token Management**: Secure token storage via HttpOnly Cookies
- **Logout**: Session termination via cookie clearing

For detailed implementation, see [Login Implementation](/docs/part-6/implementation-guide/auth/sign-in).
