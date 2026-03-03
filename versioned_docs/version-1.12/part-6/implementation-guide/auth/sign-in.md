---
title: "Sign-in Implementation"
slug: "sign-in"
excerpt: "Frontend and backend implementation guide for sign-in using SaaSus Authentication API"
hidden: false
createdAt: "Tue Mar 03 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Mar 03 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
---

This document explains the implementation of sign-in functionality using the Authentication API sample application.

:::info
For an overview of the Authentication API and its flow, see [Authentication API Implementation Guide Overview](/docs/part-6/implementation-guide/auth/overview).
:::

## Frontend Implementation

### Login Screen Component

The login screen implements the following elements:

- **Email address (or ID) input field**: Enter the user identifier
- **Password input field**: Enter the user password
- **Login button**: Initiate the sign-in process
- **Error message area**: Display authentication error messages

<!-- TODO: Add login screen screenshot -->

### Login Flow

The frontend login flow is implemented as follows:

#### 1. Initiate Sign-in

Send the user-entered email address (or ID) and password to the backend `POST /sign-in` endpoint.

```typescript
// Login form submission handler
const handleLogin = async (identifier: string, password: string) => {
  try {
    const response = await fetch("/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await response.json();

    if (data.challenge_name) {
      // Challenge returned, proceed to next step
      await handleChallenge(data);
    }
  } catch (error) {
    setErrorMessage("Login failed");
  }
};
```

#### 2. Handle Challenge Response

Using the challenge parameters returned from the backend, send the challenge response to the backend `POST /sign-in/challenge`.

```typescript
const handleChallenge = async (challengeData: ChallengeResponse) => {
  if (challengeData.challenge_name === "NEW_PASSWORD_REQUIRED") {
    // First login: navigate to new password setting page
    navigateToNewPasswordPage(challengeData);
    return;
  }

  // For PASSWORD_VERIFIER: send challenge response
  const response = await fetch("/sign-in/challenge", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      challenge_name: challengeData.challenge_name,
      // Forward challenge parameters received from backend
      ...challengeData.challenge_parameters,
    }),
  });

  if (response.ok) {
    // Login successful: tokens are automatically saved in HttpOnly cookies
    navigateToMainPage();
  }
};
```

#### 3. New Password Setting (First Login)

When a `NEW_PASSWORD_REQUIRED` challenge is returned, prompt the user for a new password and send it to the backend.

```typescript
const handleNewPassword = async (
  newPassword: string,
  session: string
) => {
  const response = await fetch("/sign-in/challenge", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      challenge_name: "NEW_PASSWORD_REQUIRED",
      new_password: newPassword,
      session: session,
    }),
  });

  if (response.ok) {
    // Navigate to main page after successful password change
    navigateToMainPage();
  }
};
```

#### 4. Post-Login Navigation

After token storage is complete, navigate to the main page (e.g., user list page). Since tokens are stored in HttpOnly Cookies, there is no need to handle tokens directly on the frontend.

## Backend Implementation

The backend receives requests from the frontend, communicates with the SaaSus Auth API, and processes the sign-in flow.

### POST /sign-in Endpoint

Calls the SaaSus Auth API `/sign-in` using the email address (or ID) and password received from the frontend.

#### Processing Flow

1. Extract email address (or ID) and password from the request body
2. **ID/Email conversion**: If the input doesn't contain `@`, append a dummy domain to convert to email format
3. Calculate SRP_A and call the SaaSus Auth API `/sign-in`
4. Return the challenge response (`PASSWORD_VERIFIER`, etc.) to the frontend

```go
// POST /sign-in handler
func signIn(c echo.Context) error {
    var req SignInRequest
    if err := c.Bind(&req); err != nil {
        return c.JSON(http.StatusBadRequest, map[string]string{"error": "invalid request"})
    }

    // ID/email conversion
    email := req.Identifier
    if !strings.Contains(req.Identifier, "@") {
        // For ID format, append dummy domain
        email = req.Identifier + "@example.auth"
    }

    // Call SaaSus Auth API /sign-in
    // Calculates and sends SRP_A
    resp, err := authClient.SignIn(email, req.Password)
    if err != nil {
        return c.JSON(http.StatusUnauthorized, map[string]string{"error": "authentication failed"})
    }

    // Return challenge parameters to frontend
    return c.JSON(http.StatusOK, resp)
}
```

:::tip ID Conversion Note
When using ID-based login, ensure the dummy domain matches the one used when registering users in SaaSus Platform. It is recommended to manage this via environment variables.
:::

### POST /sign-in/challenge Endpoint

Calls the SaaSus Auth API `/sign-in/challenge` using the challenge response received from the frontend. Processes are branched based on the challenge type.

#### PASSWORD_VERIFIER Case

The standard password verification flow. Send the challenge response to obtain tokens.

```go
// POST /sign-in/challenge handler
func signInChallenge(c echo.Context) error {
    var req ChallengeRequest
    if err := c.Bind(&req); err != nil {
        return c.JSON(http.StatusBadRequest, map[string]string{"error": "invalid request"})
    }

    // Call SaaSus Auth API /sign-in/challenge
    resp, err := authClient.RespondToChallenge(req)
    if err != nil {
        return c.JSON(http.StatusUnauthorized, map[string]string{"error": "challenge failed"})
    }

    switch resp.ChallengeName {
    case "":
        // Authentication complete: set tokens in HttpOnly cookies
        setTokenCookies(c, resp.Tokens)
        return c.JSON(http.StatusOK, map[string]string{"status": "authenticated"})

    case "NEW_PASSWORD_REQUIRED":
        // First login: new password setting required
        return c.JSON(http.StatusOK, map[string]interface{}{
            "challenge_name":       "NEW_PASSWORD_REQUIRED",
            "session":              resp.Session,
            "challenge_parameters": resp.ChallengeParameters,
        })

    default:
        return c.JSON(http.StatusBadRequest, map[string]string{"error": "unsupported challenge"})
    }
}
```

#### NEW_PASSWORD_REQUIRED Case

Handles the case where a password change is required on first login. Receives the new password and sends it to the SaaSus Auth API.

```go
// New password setting handler
// Called when challenge_name is NEW_PASSWORD_REQUIRED
func handleNewPasswordRequired(c echo.Context, req ChallengeRequest) error {
    // Send new password to SaaSus Auth API
    resp, err := authClient.RespondToNewPasswordChallenge(
        req.Session,
        req.NewPassword,
    )
    if err != nil {
        return c.JSON(http.StatusBadRequest, map[string]string{"error": "password change failed"})
    }

    // Set tokens in HttpOnly cookies after successful password change
    setTokenCookies(c, resp.Tokens)
    return c.JSON(http.StatusOK, map[string]string{"status": "authenticated"})
}
```

:::caution Note for ID-based Login
Even in the `NEW_PASSWORD_REQUIRED` flow, if the user logged in with an ID format, you need to correctly handle the email address with the appended dummy domain. It is recommended to persist the converted value in the session from the initial sign-in step.
:::

## Security Implementation

### Token Management with HttpOnly Cookies

Store obtained tokens in **HttpOnly Cookies**. Compared to storing in localStorage, this reduces the risk of token theft through XSS (Cross-Site Scripting) attacks.

```go
// Function to set tokens in HttpOnly cookies
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

#### Cookie Attribute Configuration

| Attribute | Value | Description |
|---|---|---|
| `HttpOnly` | `true` | Prevents JavaScript access, protecting tokens from XSS attacks |
| `Secure` | `true` | Only sends cookies over HTTPS connections (required in production) |
| `SameSite` | `Strict` | Prevents cookie transmission in cross-site requests |
| `Path` | `/` | Makes cookies available across the entire application |

:::info Development Environment Note
In local development environments (`http://localhost`), you may need to set the `Secure` attribute to `false`. It is recommended to make this configurable via environment variables.
:::

### CSRF Protection

When using HttpOnly Cookies, CSRF (Cross-Site Request Forgery) protection is required. This sample combines the following measures:

1. **SameSite Cookie Attribute**: Set `SameSite=Strict` to prevent cookie transmission from cross-site requests
2. **CSRF Token**: Generate a CSRF token on the server side, pass it to the frontend, and verify it in the request header

```go
// CSRF middleware configuration example
e.Use(middleware.CSRFWithConfig(middleware.CSRFConfig{
    TokenLookup: "header:X-CSRF-Token",
    CookiePath:  "/",
}))
```

### Logout

On logout, clear all tokens stored in HttpOnly Cookies.

```go
// POST /sign-out handler
func signOut(c echo.Context) error {
    // Delete each token cookie (set MaxAge to -1)
    for _, name := range []string{"access_token", "refresh_token", "id_token"} {
        c.SetCookie(&http.Cookie{
            Name:     name,
            Value:    "",
            Path:     "/",
            HttpOnly: true,
            Secure:   true,
            SameSite: http.SameSiteStrictMode,
            MaxAge:   -1, // Delete cookie immediately
        })
    }

    return c.JSON(http.StatusOK, map[string]string{"status": "signed_out"})
}
```

Frontend logout call:

```typescript
const handleLogout = async () => {
  await fetch("/sign-out", { method: "POST" });
  // Navigate to login page
  navigateToLoginPage();
};
```

## Summary

This document explained the implementation of sign-in functionality using the SaaSus Authentication API. Key points:

- **SRP protocol-based two-step authentication flow**: Obtain a challenge via `/sign-in` and respond via `/sign-in/challenge`
- **Hybrid ID/Email login**: Implement conversion logic with a dummy domain on the backend
- **`NEW_PASSWORD_REQUIRED` handling**: Implement the password change flow for first-time login
- **Secure token management with HttpOnly Cookies**: Store tokens in cookies as XSS protection
- **CSRF protection and logout**: Protection via SameSite attribute and CSRF tokens, session termination via cookie clearing
