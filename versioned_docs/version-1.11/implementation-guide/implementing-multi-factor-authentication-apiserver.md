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
<TabItem value="go" label="Go (Echo)" default>

`e.GET("/mfa_status", getMfaStatus, authMiddleware)`

```go
func getMfaStatus(c echo.Context) error {
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		c.Logger().Error("Failed to get user info")
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	accessToken := c.Request().Header.Get("X-Access-Token")
	if accessToken == "" {
		return c.JSON(http.StatusUnauthorized, map[string]string{"error": "Access token is missing"})
	}

	response, err := authClient.GetUserMfaPreferenceWithResponse(context.Background(), userInfo.Id)
	if err != nil || response.JSON200 == nil {
		c.Logger().Errorf("failed to get MFA status: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve MFA status"})
	}

	return c.JSON(http.StatusOK, map[string]bool{"enabled": response.JSON200.Enabled})
}
```

</TabItem>
<TabItem value="python" label="Python (FastAPI)">

**Python (FastAPI) sample implementation (In preparation)**

</TabItem>
<TabItem value="java" label="Java (Maven)">

**Java (Maven) sample implementation (In preparation)**

</TabItem>
</Tabs>

#### **2.1.2. Generate Secret Code for MFA App Registration API**

<Tabs>
<TabItem value="go" label="Go (Echo)" default>

`e.GET("/mfa_setup", getMfaSetup, authMiddleware)`

```go
func getMfaSetup(c echo.Context) error {
	accessToken := c.Request().Header.Get("X-Access-Token")
	if accessToken == "" {
		return c.JSON(http.StatusUnauthorized, map[string]string{"error": "Access token is missing"})
	}

	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		c.Logger().Error("failed to get user info")
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	response, err := authClient.CreateSecretCodeWithResponse(context.Background(), userInfo.Id, authapi.CreateSecretCodeJSONRequestBody{
		AccessToken: accessToken,
	})
	if err != nil || response.JSON201 == nil {
		c.Logger().Errorf("failed to create secret code: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to generate QR code"})
	}

	qrCodeUrl := "otpauth://totp/SaaSusPlatform:" + userInfo.Email + "?secret=" + response.JSON201.SecretCode + "&issuer=SaaSusPlatform"

	return c.JSON(http.StatusOK, map[string]string{
		"secretKey": response.JSON201.SecretCode,
		"qrCodeUrl": qrCodeUrl,
	})
}
```

</TabItem>
<TabItem value="python" label="Python (FastAPI)">

**Python (FastAPI) sample implementation (In preparation)**

</TabItem>
<TabItem value="java" label="Java (Maven)">

**Java (Maven) sample implementation (In preparation)**

</TabItem>
</Tabs>

#### **2.1.3. Verify MFA Authentication Code API**

<Tabs>
<TabItem value="go" label="Go (Echo)" default>

`e.POST("/mfa_verify", verifyMfa, authMiddleware)`

```go
func verifyMfa(c echo.Context) error {
	// Implementation here
}
```

</TabItem>
<TabItem value="python" label="Python (FastAPI)">

**Python (FastAPI) sample implementation (In preparation)**

</TabItem>
<TabItem value="java" label="Java (Maven)">

**Java (Maven) sample implementation (In preparation)**

</TabItem>
</Tabs>

## **3. How to Use the Sample Implementation**

- [Go (Echo)](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/README.md)
- Python (FastAPI) sample implementation (In preparation)
- Java (Maven) sample implementation (In preparation)
