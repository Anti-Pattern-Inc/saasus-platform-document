---
title: "多要素認証の実装"
slug: "multi-factor-authentication"
excerpt: "SaaSアプリケーションでの多要素認証（MFA）機能の実装サンプル"
hidden: false
createdAt: "Fri Feb 28 2025 09:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Jul 16 2026 01:15:00 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

サンプルアプリのMFA設定機能を題材に、SaaSus Auth APIを使用して多要素認証（MFA）機能を実装する方法を解説します。

サンプルアプリでは、以下の2つの認証方式を選択できます。

- **認証アプリ（TOTP）**: Google AuthenticatorやAuthyなどの認証アプリで生成されるワンタイムコードを使用
- **メール認証**: ログイン時に登録メールアドレスへ認証コードを送信

以下は多要素認証設定ダイアログのスクリーンショットです。

![](/ja/img/part-6/implementation-guide/sample-application/multi-factor-authentication/mfa-setting-dialog.png)

MFA機能では以下の操作を提供します。

- MFA設定状態と認証方式の確認
- 認証方式の選択（認証アプリ / メール認証）
- 認証アプリケーション（Google Authenticator等）の登録
- MFAの有効化・無効化
- QRコードによる認証アプリのセットアップ
- 認証方式の切り替え

:::info 前提条件
メール認証を利用するには、SaaSus Platform でドメイン名の設定とメール送信ドメイン認証（DKIM）が完了している必要があります。
設定方法は [ドメイン・メール送信ドメイン認証・遷移先の設定](/docs/part-4/application-settings/domain-and-redirect-settings) を参照してください。
:::


## フロントエンド実装

### 認証方式選択のUIフロー

フロントエンドでは、ステートマシンによりMFA設定ダイアログの表示を管理しています。

1. ダイアログを開くと `GET /mfa_status` でMFA状態を取得
2. 未設定の場合は方式選択画面を表示（認証アプリ / メール認証のカード選択）
3. 認証アプリを選択した場合はQRコード表示と認証コード入力へ遷移
4. メール認証を選択した場合は確認画面を表示し、有効化を実行
5. 設定済みの場合は現在の方式を表示し、別の方式への切り替えや無効化が可能

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
        <td>ユーザーのMFA有効/無効状態と認証方式を取得します。</td>
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
        <td>MFA有効化（認証アプリ）</td>
        <td><code>POST /mfa_enable</code></td>
        <td>認証アプリ方式でMFAを有効化します。</td>
      </tr>
      <tr>
        <td>MFA有効化（メール認証）</td>
        <td><code>POST /mfa_email_enable</code></td>
        <td>メール認証方式でMFAを有効化します。</td>
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

`GET /mfa_status` は、MFAの有効/無効状態に加えて、現在設定されている認証方式（`softwareToken` または `email`）を返します。

<Tabs>
<TabItem value="go" label="Go" default>

```go
// MFAの状態を取得 (有効/無効の確認と認証方式)
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

	// MFA の有効/無効の状態と認証方式を返す
	result := map[string]interface{}{
		"enabled": response.JSON200.Enabled,
	}
	if response.JSON200.Method != nil {
		result["method"] = string(*response.JSON200.Method)
	}
	return c.JSON(http.StatusOK, result)
}
```

</TabItem>
</Tabs>

レスポンス例:

```json
{ "enabled": true, "method": "softwareToken" }
```

```json
{ "enabled": true, "method": "email" }
```

```json
{ "enabled": false }
```

#### 実装例リンク

以下のリンク先に、本エンドポイントの実装が含まれています。  
関数名で検索して該当箇所をご確認ください。

- **Go (Echo)**: [`getMfaStatus`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`get_mfa_status`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`getMfaStatus`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapGet("/mfa_status"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`GetMfaStatus`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

### MFAセットアップエンドポイント

認証アプリ方式でMFAを設定する際に使用します。
QRコードURLを生成し、ユーザーが認証アプリでスキャンしてTOTPデバイスを登録します。

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

認証アプリで生成された6桁のコードを検証し、TOTPデバイスを登録します。

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

### MFA有効化エンドポイント（認証アプリ）

認証コードの検証が成功した後に呼び出し、認証アプリ方式でMFAを有効化します。

<Tabs>
<TabItem value="go" label="Go" default>

```go
// MFAを有効化する（認証アプリ）
func enableMfa(c echo.Context) error {
	// コンテキストからユーザー情報を取得
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	// MFA を認証アプリで有効化するためのリクエストボディを作成
	method := authapi.MfaPreferenceMethodSoftwareToken
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

### MFA有効化エンドポイント（メール認証）

メール認証方式でMFAを有効化します。
認証アプリ方式と異なり、デバイス登録（setup/verify）は不要です。
有効化すると、次回ログイン時に登録メールアドレスへ認証コードが送信されます。

<Tabs>
<TabItem value="go" label="Go" default>

```go
// MFAをメール認証で有効化する
func enableMfaEmail(c echo.Context) error {
	// コンテキストからユーザー情報を取得
	userInfo, ok := c.Get(string(ctxlib.UserInfoKey)).(*authapi.UserInfo)
	if !ok {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to retrieve user information"})
	}

	// メール認証で MFA を有効化するためのリクエストボディを作成
	method := authapi.MfaPreferenceMethodEmail
	requestBody := authapi.UpdateUserMfaPreferenceJSONRequestBody{
		Enabled: true,
		Method:  &method,
	}

	// SaaSus API を使用して MFA をメール認証で有効化
	_, err := authClient.UpdateUserMfaPreferenceWithResponse(context.Background(), userInfo.Id, requestBody)
	if err != nil {
		c.Logger().Errorf("Failed to enable email MFA: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to enable email MFA"})
	}

	return c.JSON(http.StatusOK, map[string]string{"message": "Email MFA has been enabled"})
}
```

</TabItem>
</Tabs>

#### 実装例リンク

以下のリンク先に、本エンドポイントの実装が含まれています。  
関数名で検索して該当箇所をご確認ください。

- **Go (Echo)**: [`enableMfaEmail`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: SDKのメール認証方式対応後に追加予定
- **Java (Spring)**: [`enableMfaEmail`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: SDKのメール認証方式対応後に追加予定
- **C# (.NET Framework 4.8)**: SDKのメール認証方式対応後に追加予定

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
	method := authapi.MfaPreferenceMethodSoftwareToken
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
