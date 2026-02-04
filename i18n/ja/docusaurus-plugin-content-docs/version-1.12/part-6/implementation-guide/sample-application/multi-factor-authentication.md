---
title: "多要素認証の実装"
slug: "multi-factor-authentication"
excerpt: "SaaSアプリケーションでの多要素認証（MFA）機能の実装サンプル"
hidden: false
createdAt: "Fri Feb 28 2025 09:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 09 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

サンプルアプリのMFA設定機能を題材に、SaaSus Auth APIを使用して多要素認証（MFA）機能を実装する方法を解説します。

以下は多要素認証設定ダイアログのスクリーンショットです。

![](/ja/img/part-6/implementation-guide/sample-application/multi-factor-authentication/mfa-setting-dialog.png)
※このQRコードはデモンストレーション用のダミーデータです。実際の認証には使用できません。

MFA機能では以下の機能を提供します：

- MFA設定状態の確認
- 認証アプリケーション（Google Authenticator等）の登録
- MFAの有効化・無効化
- QRコードによる簡単なセットアップ


## フロントエンド実装

### 実装例リンク

以下のリンク先に、フロントエンドの実装が含まれています。

- **React**: [`UserMfaSettingDialog.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/components/dialogs/UserMfaSettingDialog.tsx) - MFA設定ダイアログコンポーネント
- **React**: [`HeaderUserbox.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/components/header/HeaderUserbox.tsx) - ヘッダーユーザーメニュー

## バックエンド実装

### エンドポイント一覧

<div className="table-scroll">
  <table className="nowrap-table">
    <thead>
      <tr>
        <th>種別</th>
        <th>メソッド &amp; パス</th>
        <th>説明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MFA状態確認</td>
        <td><code>GET /mfa_status</code></td>
        <td>ユーザーのMFA有効/無効状態を取得します。</td>
      </tr>
      <tr>
        <td>MFAセットアップ</td>
        <td><code>GET /mfa_setup</code></td>
        <td>認証アプリ登録用のQRコードURLを生成します。</td>
      </tr>
      <tr>
        <td>MFA認証コード検証</td>
        <td><code>POST /mfa_verify</code></td>
        <td>認証アプリからの認証コードを検証し、MFAを登録します。</td>
      </tr>
      <tr>
        <td>MFA有効化</td>
        <td><code>POST /mfa_enable</code></td>
        <td>ユーザーのMFAを有効化します。</td>
      </tr>
      <tr>
        <td>MFA無効化</td>
        <td><code>POST /mfa_disable</code></td>
        <td>ユーザーのMFAを無効化します。</td>
      </tr>
    </tbody>
  </table>
</div>

:::info
以下のコードサンプルはバックエンドがGoを前提としています。
:::

### MFA状態確認エンドポイント

<Tabs>
<TabItem value="go" label="Go" default>

```go
// MFAの状態を取得 (有効/無効の確認)
func getMfaStatus(c echo.Context) error {
	// コンテキストからユーザー情報を取得
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		c.Logger().Error("Failed to get user info")
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	// SaaSus の API を使用してユーザーの MFA 設定を取得
	response, err := authClient.GetUserMfaPreferenceWithResponse(context.Background(), userInfo.Id)
	if err != nil || response.JSON200 == nil {
		c.Logger().Errorf("failed to get MFA status: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve MFA status"})
	}

	// MFA の有効/無効の状態を返す
	return c.JSON(http.StatusOK, map[string]bool{"enabled": response.JSON200.Enabled})
}
```

</TabItem>
</Tabs>

#### 実装例リンク

以下のリンク先に、本エンドポイントの実装が含まれています。  
関数名で検索して該当箇所をご確認ください。

- **Go (Echo)**: [`getMfaStatus`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`get_mfa_status`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`getMfaStatus`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapGet("/mfa_status"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`GetMfaStatus`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

### MFAセットアップエンドポイント

<Tabs>
<TabItem value="go" label="Go" default>

```go
// MFAのセットアップ情報を取得 (QRコードを発行)
// フロントエンドアプリは、リクエストヘッダーに X-Access-Token を含める必要があります
func getMfaSetup(c echo.Context) error {
	// リクエストヘッダーから X-Access-Token を取得
	accessToken := c.Request().Header.Get("X-Access-Token")
	if accessToken == "" {
		// アクセストークンがない場合は、認証エラーを返す
		return c.JSON(http.StatusUnauthorized, map[string]string{"error": "Access token is missing"})
	}

	// コンテキストからユーザー情報を取得
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		c.Logger().Error("failed to get user info")
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	// SaaSus API を使用して 認証アプリケーション登録用のシークレットコードを作成
	response, err := authClient.CreateSecretCodeWithResponse(context.Background(), userInfo.Id, authapi.CreateSecretCodeJSONRequestBody{
		AccessToken: accessToken,
	})
	if err != nil || response.JSON201 == nil {
		c.Logger().Errorf("failed to create secret code: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to generate QR code"})
	}

	// Google Authenticator などで使用する QR コード URL を生成
	qrCodeUrl := "otpauth://totp/SaaSusPlatform:" + userInfo.Email + "?secret=" + response.JSON201.SecretCode + "&issuer=SaaSusPlatform"

	// QR コード URL を返す
	return c.JSON(http.StatusOK, map[string]string{
		"qrCodeUrl": qrCodeUrl,
	})
}
```

</TabItem>
</Tabs>

#### 実装例リンク

以下のリンク先に、本エンドポイントの実装が含まれています。  
関数名で検索して該当箇所をご確認ください。

- **Go (Echo)**: [`getMfaSetup`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`get_mfa_setup`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`getMfaSetup`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapGet("/mfa_setup"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`SetupMfa`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

### MFA認証コード検証エンドポイント

<Tabs>
<TabItem value="go" label="Go" default>

```go
// ユーザーのMFA認証コードを検証
// フロントエンドアプリは、リクエストヘッダーに X-Access-Token を含める必要があります
func verifyMfa(c echo.Context) error {
	// コンテキストからユーザー情報を取得
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		c.Logger().Error("Failed to get user info")
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	// リクエストヘッダーから X-Access-Token を取得
	accessToken := c.Request().Header.Get("X-Access-Token")
	if accessToken == "" {
		return c.JSON(http.StatusUnauthorized, map[string]string{"error": "Access token is missing"})
	}

	// リクエストボディから認証コードを取得
	var requestBody struct {
		VerificationCode string `json:"verification_code"`
	}
	if err := c.Bind(&requestBody); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid request: malformed JSON or incorrect parameters"})
	}
	if requestBody.VerificationCode == "" {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Verification code is required"})
	}

	// SaaSus API を使用して 認証アプリケーションを登録
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

#### 実装例リンク

以下のリンク先に、本エンドポイントの実装が含まれています。  
関数名で検索して該当箇所をご確認ください。

- **Go (Echo)**: [`verifyMfa`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`verify_mfa`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`verifyMfa`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapPost("/mfa_verify"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`VerifyMfa`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

### MFA有効化エンドポイント

<Tabs>
<TabItem value="go" label="Go" default>

```go
// MFAを有効化する
func enableMfa(c echo.Context) error {
	// コンテキストからユーザー情報を取得
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	// MFA を有効化するためのリクエストボディを作成
	method := authapi.SoftwareToken
	requestBody := authapi.UpdateUserMfaPreferenceJSONRequestBody{
		Enabled: true,
		Method:  &method,
	}

	// SaaSus API を使用して MFA を有効化
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

#### 実装例リンク

以下のリンク先に、本エンドポイントの実装が含まれています。  
関数名で検索して該当箇所をご確認ください。

- **Go (Echo)**: [`enableMfa`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`enable_mfa`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`enableMfa`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapPost("/mfa_enable"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`EnableMfa`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

### MFA無効化エンドポイント

<Tabs>
<TabItem value="go" label="Go" default>

```go
// MFAを無効化する
func disableMfa(c echo.Context) error {
	// コンテキストからユーザー情報を取得
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	// MFA を無効化するためのリクエストボディを作成
	method := authapi.SoftwareToken
	requestBody := authapi.UpdateUserMfaPreferenceJSONRequestBody{
		Enabled: false,
		Method:  &method,
	}

	// SaaSus API を使用して MFA を無効化
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

#### 実装例リンク

以下のリンク先に、本エンドポイントの実装が含まれています。  
関数名で検索して該当箇所をご確認ください。

- **Go (Echo)**: [`disableMfa`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`disable_mfa`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`disableMfa`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapPost("/mfa_disable"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`DisableMfa`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

