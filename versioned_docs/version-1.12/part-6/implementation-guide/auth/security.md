---
title: "Authentication Security & Policy Implementation"
slug: "security"
excerpt: "Secure token management and CSRF protection for tokens obtained via the Auth API"
hidden: false
createdAt: "Tue Mar 03 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 13 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
---

This document explains how to implement security for tokens obtained via the Auth API.

:::info
For an overview of the Auth API, see [Auth API Implementation Guide](/docs/part-6/implementation-guide/auth/overview). For login implementation, see [Basic Implementation Using the Auth API](/docs/part-6/implementation-guide/auth/basic-sign-in).
:::

## Token Management with HttpOnly Cookies

Store the obtained tokens in **HttpOnly Cookies**. Compared to storing tokens in local storage, this reduces the risk of token theft from XSS (cross-site scripting) attacks.

```go
// Function to set tokens in HttpOnly Cookies
func setTokenCookies(c echo.Context, tokens Tokens) {
    // Access token
    c.SetCookie(&http.Cookie{
        Name:     "access_token",
        Value:    tokens.AccessToken,
        Path:     "/",
        HttpOnly: true,
        Secure:   true, // Always true in HTTPS environments
        SameSite: http.SameSiteStrictMode,
        MaxAge:   3600, // 1 hour
    })

    // Refresh token
    c.SetCookie(&http.Cookie{
        Name:     "refresh_token",
        Value:    tokens.RefreshToken,
        Path:     "/",
        HttpOnly: true,
        Secure:   true,
        SameSite: http.SameSiteStrictMode,
        MaxAge:   86400 * 30, // 30 days
    })

    // ID token
    c.SetCookie(&http.Cookie{
        Name:     "id_token",
        Value:    tokens.IDToken,
        Path:     "/",
        HttpOnly: true,
        Secure:   true,
        SameSite: http.SameSiteStrictMode,
        MaxAge:   3600, // 1 hour
    })
}
```

### Cookie attribute settings

| Attribute | Value | Description |
|---|---|---|
| `HttpOnly` | `true` | Prevents JavaScript access; protects tokens from XSS |
| `Secure` | `true` | Sends Cookies only over HTTPS (required in production) |
| `SameSite` | `Strict` | Prevents Cookie sending on cross-site requests |
| `Path` | `/` | Allows Cookie use across the entire application |

:::info Note for development environments
In local development (`http://localhost`), you may need to set `Secure` to `false`. We recommend making this switchable via environment variables.
:::

## CSRF Protection

When using HttpOnly Cookies, CSRF (cross-site request forgery) protection is required. The sample application combines the following measures:

1. **SameSite Cookie attribute**: `SameSite=Strict` to prevent Cookies from being sent across sites
2. **CSRF token**: A server-issued CSRF token sent to the frontend and verified via a request header

```go
// Example CSRF middleware configuration
e.Use(middleware.CSRFWithConfig(middleware.CSRFConfig{
    TokenLookup: "header:X-CSRF-Token",
    CookiePath:  "/",
}))
```
