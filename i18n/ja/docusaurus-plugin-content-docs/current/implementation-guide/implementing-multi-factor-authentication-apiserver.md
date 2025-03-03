---
title: "多要素認証の実装（APIサーバ）"
slug: "implementing-mfa-apiserver"
excerpt: ""
hidden: false
createdAt: "Fri Feb 28 2025 09:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Feb 28 2025 09:00:00 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

SaaSアプリケーションへの多要素認証（MFA）の実装サンプルについて説明します。

それぞれのAPIの詳細はAPIドキュメントをご確認ください。

# **MFAの実装サンプル**

## **１．フロントエンド実装**

### **１．１．追加コンポーネント**

MFAの認証設定を管理するために、以下のコンポーネントを追加しました。

#### **１．１．１．MFA設定ダイアログ**
- [Reactの実装サンプル](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/components/dialogs/UserMfaSettingDialog.tsx)  
  → ユーザーがMFAを有効化・無効化し、MFAのステータスを確認するダイアログコンポーネント。

#### **１．１．２．ヘッダーユーザーメニュー** 
- [Reactの実装サンプル](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/components/header/HeaderUserbox.tsx)  
  → ユーザーメニュー内にMFA設定ダイアログを開くための項目を追加。

### １．２．実装サンプルの使い方

- <a href="https://github.com/saasus-platform/implementation-sample-front-react/blob/main/README.md" target="_blank">React</a>

## **２．バックエンド実装**

MFA機能を実装するために、以下のエンドポイントを追加しました。

### **２．１．追加したエンドポイント**

#### **２．１．１．MFA設定取得API**

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

**Python(FastAPI)の実装サンプル（準備中）**

</TabItem>
<TabItem value="java" label="Java (Maven)">

**Java(Maven)の実装サンプル（準備中）**

</TabItem>
</Tabs>

#### **２．１．２．認証アプリケーション登録用のシークレットコード作成API**

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

**Python(FastAPI)の実装サンプル（準備中）**

</TabItem>
<TabItem value="java" label="Java (Maven)">

**Java(Maven)の実装サンプル（準備中）**

</TabItem>
</Tabs>

#### **２．１．３．認証アプリケーション登録API**

<Tabs>
<TabItem value="go" label="Go (Echo)" default>

`e.POST("/mfa_verify", verifyMfa, authMiddleware)`

```go
func verifyMfa(c echo.Context) error {
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		c.Logger().Error("Failed to get user info")
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	accessToken := c.Request().Header.Get("X-Access-Token")
	if accessToken == "" {
		return c.JSON(http.StatusUnauthorized, map[string]string{"error": "Access token is missing"})
	}

	var requestBody struct {
		VerificationCode string `json:"verification_code"`
	}
	if err := c.Bind(&requestBody); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid request: malformed JSON or incorrect parameters"})
	}
	if requestBody.VerificationCode == "" {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Verification code is required"})
	}

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
<TabItem value="python" label="Python (FastAPI)">

**Python(FastAPI)の実装サンプル（準備中）**

</TabItem>
<TabItem value="java" label="Java (Maven)">

**Java(Maven)の実装サンプル（準備中）**

</TabItem>
</Tabs>

#### **２．１．４．MFA設定更新API(有効)**

<Tabs>
<TabItem value="go" label="Go (Echo)" default>

`e.POST("/mfa_enable", enableMfa, authMiddleware)`

```go
func enableMfa(c echo.Context) error {
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	method := authapi.SoftwareToken
	requestBody := authapi.UpdateUserMfaPreferenceJSONRequestBody{
		Enabled: true,
		Method:  &method,
	}

	_, err := authClient.UpdateUserMfaPreferenceWithResponse(context.Background(), userInfo.Id, requestBody)
	if err != nil {
		c.Logger().Errorf("Failed to enable MFA: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to enable MFA"})
	}

	return c.JSON(http.StatusOK, map[string]string{"message": "MFA has been enabled"})
}
```

</TabItem>
<TabItem value="python" label="Python (FastAPI)">

**Python(FastAPI)の実装サンプル（準備中）**

</TabItem>
<TabItem value="java" label="Java (Maven)">

**Java(Maven)の実装サンプル（準備中）**

</TabItem>
</Tabs>

#### **２．１．５．MFA設定更新API(無効)**

<Tabs>
<TabItem value="go" label="Go (Echo)" default>

`e.POST("/mfa_disable", disableMfa, authMiddleware)`

```go
func disableMfa(c echo.Context) error {
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	method := authapi.SoftwareToken
	requestBody := authapi.UpdateUserMfaPreferenceJSONRequestBody{
		Enabled: false,
		Method:  &method,
	}

	_, err := authClient.UpdateUserMfaPreferenceWithResponse(context.Background(), userInfo.Id, requestBody)
	if err != nil {
		c.Logger().Errorf("Failed to disable MFA: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to disable MFA"})
	}

	return c.JSON(http.StatusOK, map[string]string{"message": "MFA has been disabled"})
}
```

</TabItem>
<TabItem value="python" label="Python (FastAPI)">

**Python(FastAPI)の実装サンプル（準備中）**

</TabItem>
<TabItem value="java" label="Java (Maven)">

**Java(Maven)の実装サンプル（準備中）**

</TabItem>
</Tabs>

## **３．実装サンプルの使い方**

- [Go(echo)](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/README.md)
- Python(FastAPI)の実装サンプル（準備中）
- Java(Maven)の実装サンプル（準備中）

