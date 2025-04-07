---
title: "Implementing Multi-Factor Authentication (API Server)"
slug: "implementing-multi-factor-authentication-apiserver"
excerpt: ""
hidden: false
createdAt: "Fri Feb 28 2025 09:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Feb 28 2025 09:00:00 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

This document provides sample implementations for Multi-Factor Authentication (MFA) in a SaaS application.

For detailed API specifications, please refer to the API Documentation.

# **MFA Implementation Samples**

## **1. Frontend Implementation**

### **1.1. Added Components**

To manage MFA authentication settings, the following components have been added.

#### **1.1.1. MFA Settings Dialog**
- [React Sample Implementation](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/components/dialogs/UserMfaSettingDialog.tsx)  
  → A dialog component that allows users to enable/disable MFA and check MFA status.

#### **1.1.2. Header User Menu**
- [React Sample Implementation](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/components/header/HeaderUserbox.tsx)  
  → Added an item to open the MFA settings dialog in the user menu.

### 1.2. How to Use the Sample Implementation

- <a href="https://github.com/saasus-platform/implementation-sample-front-react/blob/main/README.md" target="_blank">React</a>

## **2. Backend Implementation**

To implement MFA functionality, the following endpoints have been added.

### **2.1. Added Endpoints**

#### **2.1.1. Get MFA Status API**

<Tabs>
<TabItem value="go" label="Go" default>

`e.GET("/mfa_status", getMfaStatus, authMiddleware)`

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
		c.Logger().Errorf("Failed to get MFA status: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve MFA status"})
	}

	// Return MFA enabled/disabled status
	return c.JSON(http.StatusOK, map[string]bool{"enabled": response.JSON200.Enabled})
}
```

</TabItem>
<TabItem value="python" label="Python">

**Python (FastAPI) sample implementation (In preparation)**

</TabItem>
<TabItem value="java" label="Java">

**Java (Maven) sample implementation (In preparation)**

</TabItem>
</Tabs>

#### **2.1.2. Generate Secret Code for MFA App Registration API**

<Tabs>
<TabItem value="go" label="Go" default>

`e.GET("/mfa_setup", getMfaSetup, authMiddleware)`

```go
// Retrieve MFA setup information (generate QR code)
// The frontend application must include X-Access-Token in the request header
func getMfaSetup(c echo.Context) error {
	// Retrieve X-Access-Token from the request header
	accessToken := c.Request().Header.Get("X-Access-Token")
	if accessToken == "" {
		return c.JSON(http.StatusUnauthorized, map[string]string{"error": "Access token is missing"})
	}

	// Retrieve user information from context
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		c.Logger().Error("Failed to get user info")
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	// Use the SaaSus API to generate a secret code for MFA authentication app registration
	response, err := authClient.CreateSecretCodeWithResponse(context.Background(), userInfo.Id, authapi.CreateSecretCodeJSONRequestBody{
		AccessToken: accessToken,
	})
	if err != nil || response.JSON201 == nil {
		c.Logger().Errorf("Failed to create secret code: %v", err)
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
<TabItem value="python" label="Python">

**Python (FastAPI) sample implementation (In preparation)**

</TabItem>
<TabItem value="java" label="Java">

**Java (Maven) sample implementation (In preparation)**

</TabItem>
</Tabs>

#### **2.1.3. Verify MFA Authentication Code API**

<Tabs>
<TabItem value="go" label="Go" default>

`e.POST("/mfa_verify", verifyMfa, authMiddleware)`

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
<TabItem value="python" label="Python">

**Python (FastAPI) sample implementation (In preparation)**

</TabItem>
<TabItem value="java" label="Java">

**Java (Maven) sample implementation (In preparation)**

</TabItem>
</Tabs>

#### **2.1.4. Enable MFA API**

<Tabs>
<TabItem value="go" label="Go" default>

`e.POST("/mfa_enable", enableMfa, authMiddleware)`

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
<TabItem value="python" label="Python">

**Python (FastAPI) sample implementation (In preparation)**

</TabItem>
<TabItem value="java" label="Java">

**Java (Maven) sample implementation (In preparation)**

</TabItem>
</Tabs>

#### **2.1.5. Disable MFA API**

<Tabs>
<TabItem value="go" label="Go" default>

`e.POST("/mfa_disable", disableMfa, authMiddleware)`

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
<TabItem value="python" label="Python">

**Python (FastAPI) sample implementation (In preparation)**

</TabItem>
<TabItem value="java" label="Java">

**Java (Maven) sample implementation (In preparation)**

</TabItem>
</Tabs>

## **3. How to Use the Sample Implementation**

- [Go (Echo)](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/README.md)
- Python (FastAPI) sample implementation (In preparation)
- Java (Maven) sample implementation (In preparation)
