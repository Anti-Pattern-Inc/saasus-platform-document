---
title: "Basic Implementation Using the Auth API"
slug: "basic-sign-in"
excerpt: "Frontend and backend implementation of sign-in and sign-out using the SaaSus Platform Auth API"
hidden: false
createdAt: "Tue Mar 03 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 13 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
---

This document explains how to implement sign-in and sign-out from a custom login UI, based on the Auth API sample application.

:::info
For an overview of the Auth API and its flow, see [Auth API Implementation Guide](/docs/part-6/implementation-guide/auth/overview).
:::

## Frontend

### Login Screen Component

The login screen implements the following elements:

- **Email (or ID) input field**: Enter the user's identifier
- **Password input field**: Enter the user's password
- **Login button**: Start the login process
- **Error message area**: Display authentication errors

<!-- TODO: Add a screenshot of the login screen -->

### Login Processing Flow

The frontend login is implemented in the following sequence:

#### 1. Start sign-in

Send the email (or ID) and password entered by the user to the backend's `POST /sign-in` endpoint.

```typescript
// Login form submission
const handleLogin = async (identifier: string, password: string) => {
  try {
    const response = await fetch("/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await response.json();

    if (data.challenge_name) {
      // If a challenge is returned, proceed to the next step
      await handleChallenge(data);
    }
  } catch (error) {
    setErrorMessage("Login failed");
  }
};
```

#### 2. Handle challenge response

Use the challenge parameters returned from the backend to send the challenge response to `POST /sign-in/challenge`.

```typescript
const handleChallenge = async (challengeData: ChallengeResponse) => {
  if (challengeData.challenge_name === "NEW_PASSWORD_REQUIRED") {
    // First login: navigate to the new password screen
    navigateToNewPasswordPage(challengeData);
    return;
  }

  // PASSWORD_VERIFIER: send the challenge response
  const response = await fetch("/sign-in/challenge", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      challenge_name: challengeData.challenge_name,
      // Forward the challenge parameters received from the backend
      ...challengeData.challenge_parameters,
    }),
  });

  if (response.ok) {
    // On success: tokens are saved automatically in HttpOnly Cookies
    navigateToMainPage();
  }
};
```

#### 3. Set new password (first login)

When the `NEW_PASSWORD_REQUIRED` challenge is returned, prompt the user for a new password and send it to the backend.

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
    // After password change, navigate to the main screen
    navigateToMainPage();
  }
};
```

#### 4. Navigate after login

Once tokens are saved, navigate to the main screen (e.g., user list). Tokens are stored in HttpOnly Cookies, so the frontend does not need to handle them directly.

## Backend

The backend receives requests from the frontend and communicates with the SaaSus Platform Auth API to perform login.

### POST /sign-in endpoint

Use the email (or ID) and password received from the frontend to call the SaaSus Platform Auth API's `/sign-in`.

#### Processing flow

1. Get the email (or ID) and password from the request body
2. **ID/email conversion**: If the input does not contain `@`, append a dummy domain to convert it into email format
3. Compute SRP_A and call the SaaSus Platform Auth API's `/sign-in`
4. Return the challenge response (e.g., `PASSWORD_VERIFIER`) to the frontend

```go
// POST /sign-in handler
func signIn(c echo.Context) error {
    var req SignInRequest
    if err := c.Bind(&req); err != nil {
        return c.JSON(http.StatusBadRequest, map[string]string{"error": "invalid request"})
    }

    // ID / email conversion
    email := req.Identifier
    if !strings.Contains(req.Identifier, "@") {
        // For ID format, append a dummy domain
        email = req.Identifier + "@example.auth"
    }

    // Call the SaaSus Platform Auth API /sign-in
    // Compute and send SRP_A
    resp, err := authClient.SignIn(email, req.Password)
    if err != nil {
        return c.JSON(http.StatusUnauthorized, map[string]string{"error": "authentication failed"})
    }

    // Return challenge parameters to the frontend
    return c.JSON(http.StatusOK, resp)
}
```

:::tip ID conversion tips
When using ID-style login, make sure this dummy domain matches the domain used when registering users on SaaSus Platform. Managing it via environment variables is recommended.
:::

### POST /sign-in/challenge endpoint

Use the challenge response received from the frontend to call the SaaSus Platform Auth API's `/sign-in/challenge`. Branch handling based on the challenge type.

#### PASSWORD_VERIFIER

A normal password verification flow. Send the challenge response and obtain tokens.

```go
// POST /sign-in/challenge handler
func signInChallenge(c echo.Context) error {
    var req ChallengeRequest
    if err := c.Bind(&req); err != nil {
        return c.JSON(http.StatusBadRequest, map[string]string{"error": "invalid request"})
    }

    // Call the SaaSus Platform Auth API /sign-in/challenge
    resp, err := authClient.RespondToChallenge(req)
    if err != nil {
        return c.JSON(http.StatusUnauthorized, map[string]string{"error": "challenge failed"})
    }

    switch resp.ChallengeName {
    case "":
        // Authentication complete: set tokens in HttpOnly Cookies
        setTokenCookies(c, resp.Tokens)
        return c.JSON(http.StatusOK, map[string]string{"status": "authenticated"})

    case "NEW_PASSWORD_REQUIRED":
        // First login: a new password is required
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

#### NEW_PASSWORD_REQUIRED

This is the case where a password change is required on first login. Receive the new password and send it to the SaaSus Platform Auth API.

```go
// New password handling
// Called when challenge_name is NEW_PASSWORD_REQUIRED
func handleNewPasswordRequired(c echo.Context, req ChallengeRequest) error {
    // Send the new password to the SaaSus Platform Auth API
    resp, err := authClient.RespondToNewPasswordChallenge(
        req.Session,
        req.NewPassword,
    )
    if err != nil {
        return c.JSON(http.StatusBadRequest, map[string]string{"error": "password change failed"})
    }

    // After successful password change, set tokens in HttpOnly Cookies
    setTokenCookies(c, resp.Tokens)
    return c.JSON(http.StatusOK, map[string]string{"status": "authenticated"})
}
```

:::caution Notes for ID login
Even in the `NEW_PASSWORD_REQUIRED` flow, when a user logs in with ID format, you must correctly handle the email constructed with the dummy domain. We recommend persisting the converted value (e.g., in session state) at sign-in start.
:::

## Sign-out

On sign-out, clear all tokens stored in HttpOnly Cookies.

### Backend

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
            MaxAge:   -1, // Delete the cookie immediately
        })
    }

    return c.JSON(http.StatusOK, map[string]string{"status": "signed_out"})
}
```

### Frontend

```typescript
const handleLogout = async () => {
  await fetch("/sign-out", { method: "POST" });
  // Navigate to the login screen
  navigateToLoginPage();
};
```
