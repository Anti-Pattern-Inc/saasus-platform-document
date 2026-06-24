---
title: "Multi-Factor Authentication"
slug: "multi-factor-authentication"
excerpt: "Implementation samples for Multi-Factor Authentication (MFA) in SaaS applications"
hidden: false
createdAt: "Fri Feb 28 2025 09:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 09 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

This page explains how to implement Multi-Factor Authentication (MFA) functionality using the SaaSus Auth API, based on the sample application's MFA settings feature.

Below is a screenshot of the multi-factor authentication settings dialog.

![](/img/part-6/implementation-guide/sample-application/multi-factor-authentication/mfa-setting-dialog.png)
※This QR code is dummy data for demonstration purposes. It cannot be used for actual authentication.

The MFA functionality provides the following features:

- Check MFA settings status
- Register authentication applications (Google Authenticator, etc.)
- Enable/disable MFA
- Easy setup with QR codes

## Frontend Implementation

### Example Implementations

The following links point to repositories that include implementations of the frontend.

- **React**: [`UserMfaSettingDialog.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/components/dialogs/UserMfaSettingDialog.tsx) - MFA Settings Dialog Component
- **React**: [`HeaderUserbox.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/components/header/HeaderUserbox.tsx) - Header User Menu

## Backend Implementation

### Endpoint Summary

<div className="table-scroll">
  <table className="nowrap-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Method &amp; Path</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MFA Status Check</td>
        <td><code>GET /mfa_status</code></td>
        <td>Retrieves the user's MFA enabled/disabled status.</td>
      </tr>
      <tr>
        <td>MFA Setup</td>
        <td><code>GET /mfa_setup</code></td>
        <td>Generates QR code URL for authentication app registration.</td>
      </tr>
      <tr>
        <td>MFA Code Verification</td>
        <td><code>POST /mfa_verify</code></td>
        <td>Verifies authentication code from authentication app and registers MFA.</td>
      </tr>
      <tr>
        <td>MFA Enable</td>
        <td><code>POST /mfa_enable</code></td>
        <td>Enables MFA for the user.</td>
      </tr>
      <tr>
        <td>MFA Disable</td>
        <td><code>POST /mfa_disable</code></td>
        <td>Disables MFA for the user.</td>
      </tr>
    </tbody>
  </table>
</div>

:::info
The following code samples assume Go for the backend.
:::

### MFA Status Check Endpoint

<Tabs>
<TabItem value="go" label="Go" default>

```go
// Retrieve MFA status (enabled/disabled)
func getMfaStatus(c echo.Context) error {
	// Retrieve user information from context
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		c.Logger().Error("Failed to get user info")
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	// Use the SaaSus API to get the user's MFA status
	response, err := authClient.GetUserMfaPreferenceWithResponse(context.Background(), userInfo.Id)
	if err != nil || response.JSON200 == nil {
		c.Logger().Errorf("failed to get MFA status: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve MFA status"})
	}

	// Return MFA enabled/disabled status
	return c.JSON(http.StatusOK, map[string]bool{"enabled": response.JSON200.Enabled})
}
```

</TabItem>
</Tabs>

#### Implementation Example Links

The following links contain implementations of this endpoint.
Search for the function name to find the relevant section.

- **Go (Echo)**: [`getMfaStatus`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`get_mfa_status`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`getMfaStatus`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapGet("/mfa_status"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`GetMfaStatus`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

### MFA Setup Endpoint

<Tabs>
<TabItem value="go" label="Go" default>

```go
// Retrieve MFA setup information (generate QR code)
// The frontend application must include X-Access-Token in the request header
func getMfaSetup(c echo.Context) error {
	// Retrieve X-Access-Token from the request header
	accessToken := c.Request().Header.Get("X-Access-Token")
	if accessToken == "" {
		// Return authentication error if access token is missing
		return c.JSON(http.StatusUnauthorized, map[string]string{"error": "Access token is missing"})
	}

	// Retrieve user information from context
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		c.Logger().Error("failed to get user info")
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	// Use the SaaSus API to generate a secret code for MFA authentication app registration
	response, err := authClient.CreateSecretCodeWithResponse(context.Background(), userInfo.Id, authapi.CreateSecretCodeJSONRequestBody{
		AccessToken: accessToken,
	})
	if err != nil || response.JSON201 == nil {
		c.Logger().Errorf("failed to create secret code: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to generate QR code"})
	}

	// Generate a QR code URL for Google Authenticator and other authentication apps
	qrCodeUrl := "otpauth://totp/SaaSusPlatform:" + userInfo.Email + "?secret=" + response.JSON201.SecretCode + "&issuer=SaaSusPlatform"

	// Return the QR code URL
	return c.JSON(http.StatusOK, map[string]string{
		"qrCodeUrl": qrCodeUrl,
	})
}
```

</TabItem>
</Tabs>

#### Implementation Example Links

The following links contain implementations of this endpoint.
Search for the function name to find the relevant section.

- **Go (Echo)**: [`getMfaSetup`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`get_mfa_setup`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`getMfaSetup`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapGet("/mfa_setup"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`SetupMfa`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

### MFA Authentication Code Verification Endpoint

<Tabs>
<TabItem value="go" label="Go" default>

```go
// Verify the user's MFA authentication code
// The frontend application must include X-Access-Token in the request header
func verifyMfa(c echo.Context) error {
	// Retrieve user information from context
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		c.Logger().Error("Failed to get user info")
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	// Retrieve X-Access-Token from the request header
	accessToken := c.Request().Header.Get("X-Access-Token")
	if accessToken == "" {
		return c.JSON(http.StatusUnauthorized, map[string]string{"error": "Access token is missing"})
	}

	// Retrieve the verification code from the request body
	var requestBody struct {
		VerificationCode string `json:"verification_code"`
	}
	if err := c.Bind(&requestBody); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid request: malformed JSON or incorrect parameters"})
	}
	if requestBody.VerificationCode == "" {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Verification code is required"})
	}

	// Use the SaaSus API to register the authentication application
	response, err := authClient.UpdateSoftwareTokenWithResponse(context.Background(), userInfo.Id, authapi.UpdateSoftwareTokenJSONRequestBody{
		AccessToken:      accessToken,
		VerificationCode: requestBody.VerificationCode,
	})
	if err != nil || response.StatusCode() != http.StatusOK {
		c.Logger().Errorf("MFA verification failed: Status Code %d, Response %s", response.StatusCode(), string(response.Body))
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "MFA verification failed"})
	}

	return c.JSON(http.StatusOK, map[string]string{"message": "MFA verification successful"})
}
```

</TabItem>
</Tabs>

#### Implementation Example Links

The following links contain implementations of this endpoint.
Search for the function name to find the relevant section.

- **Go (Echo)**: [`verifyMfa`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`verify_mfa`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`verifyMfa`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapPost("/mfa_verify"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`VerifyMfa`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

### MFA Enable Endpoint

<Tabs>
<TabItem value="go" label="Go" default>

```go
// Enable MFA for the user
func enableMfa(c echo.Context) error {
	// Retrieve user information from context
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	// Create request body to enable MFA
	method := authapi.SoftwareToken
	requestBody := authapi.UpdateUserMfaPreferenceJSONRequestBody{
		Enabled: true,
		Method:  &method,
	}

	// Use the SaaSus API to enable MFA
	_, err := authClient.UpdateUserMfaPreferenceWithResponse(context.Background(), userInfo.Id, requestBody)
	if err != nil {
		c.Logger().Errorf("Failed to enable MFA: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to enable MFA"})
	}

	return c.JSON(http.StatusOK, map[string]string{"message": "MFA has been enabled"})
}
```

</TabItem>
</Tabs>

#### Implementation Example Links

The following links contain implementations of this endpoint.
Search for the function name to find the relevant section.

- **Go (Echo)**: [`enableMfa`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`enable_mfa`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`enableMfa`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapPost("/mfa_enable"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`EnableMfa`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

### MFA Disable Endpoint

<Tabs>
<TabItem value="go" label="Go" default>

```go
// Disable MFA for the user
func disableMfa(c echo.Context) error {
	// Retrieve user information from context
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	// Create request body to disable MFA
	method := authapi.SoftwareToken
	requestBody := authapi.UpdateUserMfaPreferenceJSONRequestBody{
		Enabled: false,
		Method:  &method,
	}

	// Use the SaaSus API to disable MFA
	_, err := authClient.UpdateUserMfaPreferenceWithResponse(context.Background(), userInfo.Id, requestBody)
	if err != nil {
		c.Logger().Errorf("Failed to disable MFA: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to disable MFA"})
	}

	return c.JSON(http.StatusOK, map[string]string{"message": "MFA has been disabled"})
}
```

</TabItem>
</Tabs>

#### Implementation Example Links

The following links contain implementations of this endpoint.
Search for the function name to find the relevant section.

- **Go (Echo)**: [`disableMfa`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`disable_mfa`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`disableMfa`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapPost("/mfa_disable"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`DisableMfa`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)
