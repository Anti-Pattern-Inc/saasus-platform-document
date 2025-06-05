---
title: "多要素認証の実装（APIサーバ）"
slug: "implementing-multi-factor-authentication-apiserver"
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

MFAの認証設定を管理するために、以下のコンポーネントを追加。

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
<TabItem value="go" label="Go" default>

`e.GET("/mfa_status", getMfaStatus, authMiddleware)`

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

<TabItem value="python" label="Python">

`@app.get("/mfa_status")`

```python
# MFAの状態を取得
def get_mfa_status(auth_user: dict = Depends(fastapi_auth), request: Request = None):
    try:
        # SaaSus の API を使用してユーザーの MFA 設定を取得
        response = SaasUserApi(api_client=api_client).get_user_mfa_preference(user_id=auth_user.id)
        # MFA の有効/無効の状態を返す
        return {"enabled": response.enabled}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=str(e))
```

</TabItem>

<TabItem value="java" label="Java">

`@GetMapping(value = "/mfa_status", produces = "application/json")`

```java
    /**
     * MFAの状態を取得 (有効/無効の確認)
     */
    public ResponseEntity<?> getMfaStatus(HttpServletRequest request) {
        try {
            // SaaSus APIクライアントを初期化
            AuthApiClient apiClient = new Configuration().getAuthApiClient();
            apiClient.setReferer(request.getHeader("X-Saasus-Referer"));

            // ユーザー情報を取得
            UserInfoApi userInfoApi = new UserInfoApi(apiClient);
            UserInfo userInfo = userInfoApi.getUserInfo(getIDToken(request));

            // MFAの有効状態を取得
            SaasUserApi saasUserApi = new SaasUserApi(apiClient);
            Boolean enabled = saasUserApi.getUserMfaPreference(userInfo.getId()).getEnabled();

            Map<String, Boolean> result = new HashMap<>();
            result.put("enabled", enabled);
            return ResponseEntity.ok(result);
        } catch (ApiException e) {
            System.err.println("API Exception: " + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        } catch (Exception e) {
            System.err.println("Unexpected Exception: " + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        }
    }
```

</TabItem>

<TabItem value="csharp" label="C#(.Net8)">

`app.MapGet("/mfa_status")`
```csharp
            app.MapGet("/mfa_status", async (HttpContext context) =>
            {
                // AuthorizationヘッダーからBearerトークンを取得
                var token = GetBearerToken(context);
                if (string.IsNullOrEmpty(token))
                {
                    return Results.Unauthorized();
                }

                try
                {
                    // APIクライアントを初期化し、ユーザー情報を取得
                    var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig(), context);
                    var userInfoApi = new UserInfoApi(authApiClientConfig);
                    var userInfo = await userInfoApi.GetUserInfoAsync(token);

                    // MFAステータスを取得
                    var saasUserApi = new SaasUserApi(authApiClientConfig);
                    var mfaPref = await saasUserApi.GetUserMfaPreferenceAsync(userInfo.Id);

                    // JSON形式で返却
                    return Results.Json(new { enabled = mfaPref.Enabled });
                }
                catch (Exception ex)
                {
                    return HandleApiException(ex);
                }
            });
```

</TabItem>

<TabItem value="csharp(.Netfw4.8)" label="C#(.Netfw4.8)">

`[HttpGet, Route("mfa_status")]`

```csharp
        // MFA ステータス確認エンドポイント
        public async Task<IHttpActionResult> GetMfaStatus()
        {
            try
            {
                // IDトークン（Bearerトークン）を取得
                var token = GetBearerToken(Request);

                // 認証APIクライアントを初期化
                var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig());

                // ユーザー情報を取得
                var userInfoApi = new UserInfoApi(authApiClientConfig);
                var userInfo = await userInfoApi.GetUserInfoAsync(token);

                // MFA設定を取得
                var saasUserApi = new SaasUserApi(authApiClientConfig);
                var mfaPref = await saasUserApi.GetUserMfaPreferenceAsync(userInfo.Id);

                // MFAの有効状態を返す
                return Ok(new { enabled = mfaPref.Enabled });
            }
            catch (Exception ex)
            {
                return HandleApiException(ex);
            }
        }
```

</TabItem>
</Tabs>

#### **２．１．２．認証アプリケーション登録用のシークレットコード作成API**

<Tabs>
<TabItem value="go" label="Go" default>

`e.GET("/mfa_setup", getMfaSetup, authMiddleware)`

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

<TabItem value="python" label="Python">

`@app.get("/mfa_setup")`

```python
# MFAのセットアップ情報を取得 (QRコードを発行)
# フロントエンドアプリは、リクエストヘッダーに X-Access-Token を含める必要があります
def get_mfa_setup(request: Request, auth_user: dict = Depends(fastapi_auth)):
    # リクエストヘッダーから X-Access-Token を取得
    access_token = request.headers.get("X-Access-Token")
    if not access_token:
        # アクセストークンがない場合は、認証エラーを返す
        raise HTTPException(status_code=401, detail="Access token is missing")

    try:
        create_secret_code_param = CreateSecretCodeParam(access_token=access_token)
        # SaaSus API を使用して 認証アプリケーション登録用のシークレットコードを作成
        response = SaasUserApi(api_client=api_client).create_secret_code(user_id=auth_user.id, create_secret_code_param=create_secret_code_param)
        # Google Authenticator などで使用する QR コード URL を生成
        qr_code_url = f"otpauth://totp/SaaSusPlatform:{auth_user.email}?secret={response.secret_code}&issuer=SaaSusPlatform"
        # QR コード URL を返す
        return {"qrCodeUrl": qr_code_url}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=str(e))
```

</TabItem>

<TabItem value="java" label="Java">

`@GetMapping(value = "/mfa_setup", produces = "application/json")`

```java
    /**
     * MFAセットアップ情報の取得（QRコード発行）
     */
    public ResponseEntity<?> getMfaSetup(HttpServletRequest request) {
        try {
            // リクエストヘッダーからアクセストークンを取得
            String accessToken = request.getHeader("X-Access-Token");
            if (accessToken == null || accessToken.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Access token is missing");
            }

            // SaaSus APIクライアントとユーザー情報を取得
            AuthApiClient apiClient = new Configuration().getAuthApiClient();
            apiClient.setReferer(request.getHeader("X-Saasus-Referer"));
            UserInfoApi userInfoApi = new UserInfoApi(apiClient);
            UserInfo userInfo = userInfoApi.getUserInfo(getIDToken(request));

            // シークレットコードを生成
            SaasUserApi saasUserApi = new SaasUserApi(apiClient);
            SoftwareTokenSecretCode code = saasUserApi.createSecretCode(
                userInfo.getId(),
                new CreateSecretCodeParam().accessToken(accessToken)
            );

            // Google Authenticator用のQRコードURLを作成
            String qrCodeUrl = "otpauth://totp/SaaSusPlatform:" + userInfo.getEmail() +
                    "?secret=" + code.getSecretCode() + "&issuer=SaaSusPlatform";
                    
            Map<String, String> result = new HashMap<>();
            result.put("qrCodeUrl", qrCodeUrl);
            return ResponseEntity.ok(result);
        } catch (ApiException e) {
            System.err.println("API Exception: " + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        } catch (Exception e) {
            System.err.println("Unexpected Exception: " + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        }
    }
```

</TabItem>

<TabItem value="csharp" label="C#(.Net8)">

`app.MapGet("/mfa_setup")`

```csharp
            app.MapGet("/mfa_setup", async (HttpContext context) =>
            {
                // アクセストークン（X-Access-Token）とIDトークン（Authorization）を取得
                var token = GetBearerToken(context);
                var accessToken = context.Request.Headers["X-Access-Token"].FirstOrDefault();
                if (string.IsNullOrEmpty(token) || string.IsNullOrEmpty(accessToken))
                {
                    return Results.Unauthorized();
                }

                try
                {
                    // ユーザー情報を取得
                    var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig(), context);
                    var userInfoApi = new UserInfoApi(authApiClientConfig);
                    var userInfo = await userInfoApi.GetUserInfoAsync(token);

                    // シークレットコードを作成
                    var saasUserApi = new SaasUserApi(authApiClientConfig);
                    var secretCode = await saasUserApi.CreateSecretCodeAsync(
                        userInfo.Id,
                        new CreateSecretCodeParam(accessToken)
                    );

                    // QRコードURLを生成（Google Authenticator形式）
                    var qrCodeUrl = $"otpauth://totp/SaaSusPlatform:{userInfo.Email}?secret={secretCode.SecretCode}&issuer=SaaSusPlatform";

                    return Results.Json(new { qrCodeUrl });
                }
                catch (Exception ex)
                {
                    return HandleApiException(ex);
                }
            });
```

</TabItem>

<TabItem value="csharp(.Netfw4.8)" label="C#(.Netfw4.8)">

`[HttpGet, Route("mfa_setup")]`

```csharp
        // MFA シークレット作成エンドポイント
        public async Task<IHttpActionResult> SetupMfa()
        {
            try
            {
                // トークンの取得
                var token = GetBearerToken(Request);
                var accessToken = HttpContext.Current.Request.Headers.Get("X-Access-Token");

                if (string.IsNullOrEmpty(accessToken))
                {
                    return Content(HttpStatusCode.Unauthorized, "Missing X-Access-Token header");
                }

                // APIクライアント初期化
                var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig());

                // ユーザー情報取得
                var userInfoApi = new UserInfoApi(authApiClientConfig);
                var userInfo = await userInfoApi.GetUserInfoAsync(token);

                // シークレットコード生成
                var saasUserApi = new SaasUserApi(authApiClientConfig);
                var secretCode = await saasUserApi.CreateSecretCodeAsync(
                    userInfo.Id,
                    new CreateSecretCodeParam(accessToken)
                );

                // QRコード形式のURL生成
                var qrCodeUrl = $"otpauth://totp/SaaSusPlatform:{userInfo.Email}?secret={secretCode.SecretCode}&issuer=SaaSusPlatform";

                return Ok(new { qrCodeUrl });
            }
            catch (Exception ex)
            {
                return HandleApiException(ex);
            }
        }
```

</TabItem>
</Tabs>

#### **２．１．３．認証アプリケーション登録API**

<Tabs>
<TabItem value="go" label="Go" default>

`e.POST("/mfa_verify", verifyMfa, authMiddleware)`

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

<TabItem value="python" label="Python">

`@app.post("/mfa_verify")`

```python
# ユーザーのMFA認証コードを検証
# フロントエンドアプリは、リクエストヘッダーに X-Access-Token を含める必要があります
def verify_mfa(request: Request, mfa_request: VerifyMfaRequest, auth_user: dict = Depends(fastapi_auth)):
    # リクエストヘッダーから X-Access-Token を取得
    access_token = request.headers.get("X-Access-Token")
    if not access_token:
        # アクセストークンがない場合は、認証エラーを返す
        raise HTTPException(status_code=401, detail="Access token is missing")

    try:
        update_software_token_param = UpdateSoftwareTokenParam(
            access_token=access_token,
            verification_code=mfa_request.verification_code
        )

        # SaaSus API を使用して 認証アプリケーションを登録
        SaasUserApi(api_client=api_client).update_software_token(
            user_id=auth_user.id, 
            update_software_token_param=update_software_token_param
        )

        return {"message": "MFA verification successful"}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=str(e))
```

</TabItem>

<TabItem value="java" label="Java">

`@PostMapping(value = "/mfa_verify", produces = "application/json")`

```java
    /**
     * ユーザーのMFA認証コードを検証
     */
    public ResponseEntity<?> verifyMfa(@RequestBody Map<String, String> requestBody, HttpServletRequest request) {
        try {
            // アクセストークンと認証コードを取得
            String accessToken = request.getHeader("X-Access-Token");
            if (accessToken == null || accessToken.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Access token is missing");
            }

            String verificationCode = requestBody.get("verification_code");
            if (verificationCode == null || verificationCode.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Verification code is required");
            }

            // ユーザー情報を取得
            AuthApiClient apiClient = new Configuration().getAuthApiClient();
            apiClient.setReferer(request.getHeader("X-Saasus-Referer"));
            UserInfoApi userInfoApi = new UserInfoApi(apiClient);
            UserInfo userInfo = userInfoApi.getUserInfo(getIDToken(request));

            // 検証処理の実行
            SaasUserApi saasUserApi = new SaasUserApi(apiClient);
            saasUserApi.updateSoftwareToken(
                userInfo.getId(),
                new UpdateSoftwareTokenParam()
                    .accessToken(accessToken)
                    .verificationCode(verificationCode)
            );

            Map<String, String> successResponse = new HashMap<>();
            successResponse.put("message", "MFA verification successful");
            return ResponseEntity.ok(successResponse);
        } catch (ApiException e) {
            System.err.println("API Exception: " + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        } catch (Exception e) {
            System.err.println("Unexpected Exception: " + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        }
    }
```

</TabItem>

<TabItem value="csharp" label="C#(.Net8)">

`app.MapPost("/mfa_verify")`

```csharp
            app.MapPost("/mfa_verify", async ([FromBody] MfaVerifyRequest requestBody, HttpContext context) =>
            {
                // トークンと認証コードを取得
                var token = GetBearerToken(context);
                var accessToken = context.Request.Headers["X-Access-Token"].FirstOrDefault(); 
                string verificationCode = requestBody.VerificationCode;

                if (string.IsNullOrEmpty(token) || string.IsNullOrEmpty(accessToken) || string.IsNullOrEmpty(verificationCode))
                {
                    return Results.BadRequest("Missing required information.");
                }

                try
                {
                    // ユーザー情報取得
                    var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig(), context);
                    var userInfoApi = new UserInfoApi(authApiClientConfig);
                    var userInfo = await userInfoApi.GetUserInfoAsync(token);

                    // 認証コードを検証してソフトウェアトークンを有効化
                    var saasUserApi = new SaasUserApi(authApiClientConfig);
                    await saasUserApi.UpdateSoftwareTokenAsync(
                        userInfo.Id,
                        new UpdateSoftwareTokenParam(accessToken, verificationCode)
                    );

                    return Results.Ok(new { message = "MFA verification successful" });
                }
                catch (Exception ex)
                {
                    return HandleApiException(ex);
                }
            });
```

</TabItem>

<TabItem value="csharp(.Netfw4.8)" label="C#(.Netfw4.8)">

`[HttpPost, Route("mfa_verify")]`

```csharp
        // MFA 認証コード検証エンドポイント
        public async Task<IHttpActionResult> VerifyMfa([FromBody] MfaVerifyRequest request)
        {
            try
            {
                // トークンとX-Access-Tokenを取得
                var token = GetBearerToken(Request);
                var accessToken = HttpContext.Current.Request.Headers.Get("X-Access-Token");
                var verificationCode = request.VerificationCode;

                if (string.IsNullOrEmpty(accessToken) || string.IsNullOrEmpty(verificationCode))
                {
                    return BadRequest("Missing accessToken or verificationCode");
                }

                // APIクライアント初期化とユーザー取得
                var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig());
                var userInfoApi = new UserInfoApi(authApiClientConfig);
                var userInfo = await userInfoApi.GetUserInfoAsync(token);

                // トークンを使って検証APIを実行
                var saasUserApi = new SaasUserApi(authApiClientConfig);
                await saasUserApi.UpdateSoftwareTokenAsync(
                    userInfo.Id,
                    new UpdateSoftwareTokenParam(accessToken, verificationCode)
                );

                return Ok(new { message = "MFA verification successful" });
            }
            catch (Exception ex)
            {
                return HandleApiException(ex);
            }
        }
```

</TabItem>
</Tabs>

#### **２．１．４．MFA設定更新API(有効)**

<Tabs>
<TabItem value="go" label="Go" default>

`e.POST("/mfa_enable", enableMfa, authMiddleware)`

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

<TabItem value="python" label="Python">

`@app.post("/mfa_enable")`

```python
# MFAを有効化する
def enable_mfa(auth_user: dict = Depends(fastapi_auth)):
    try:
        # MFA を有効化するためのリクエストボディを作成
        body = MfaPreference(enabled=True, method='softwareToken')

        # SaaSus API を使用して MFA を有効化
        SaasUserApi(api_client=api_client).update_user_mfa_preference(user_id=auth_user.id, body=body)

        return {"message": "MFA has been enabled"}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=str(e))
```

</TabItem>

<TabItem value="java" label="Java">

`@PostMapping(value = "/mfa_enable", produces = "application/json")`

```java
    /**
     * MFAを有効化する
     */
    public ResponseEntity<?> enableMfa(HttpServletRequest request) {
        try {
            // ユーザー情報取得
            AuthApiClient apiClient = new Configuration().getAuthApiClient();
            apiClient.setReferer(request.getHeader("X-Saasus-Referer"));
            UserInfoApi userInfoApi = new UserInfoApi(apiClient);
            UserInfo userInfo = userInfoApi.getUserInfo(getIDToken(request));

            // MFA有効化設定をリクエスト
            MfaPreference mfaPreference = new MfaPreference()
                .enabled(true)
                .method(MfaPreference.MethodEnum.SOFTWARETOKEN);

            SaasUserApi saasUserApi = new SaasUserApi(apiClient);
            saasUserApi.updateUserMfaPreference(userInfo.getId(), mfaPreference);

            Map<String, String> successResponse = new HashMap<>();
            successResponse.put("message", "MFA has been enabled");
            return ResponseEntity.ok(successResponse);
        } catch (ApiException e) {
            System.err.println("API Exception: " + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        } catch (Exception e) {
            System.err.println("Unexpected Exception: " + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        }
    }
```

</TabItem>

<TabItem value="csharp" label="C#(.Net8)">

`app.MapPost("/mfa_enable")`

```csharp
            app.MapPost("/mfa_enable", async (HttpContext context) =>
            {
                // IDトークン取得
                var token = GetBearerToken(context);
                if (string.IsNullOrEmpty(token))
                {
                    return Results.Unauthorized();
                }

                try
                {
                    // ユーザー情報取得
                    var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig(), context);
                    var userInfoApi = new UserInfoApi(authApiClientConfig);
                    var userInfo = await userInfoApi.GetUserInfoAsync(token);

                    // MFAを有効化する設定を送信
                    var saasUserApi = new SaasUserApi(authApiClientConfig);
                    var mfaPreference = new MfaPreference(enabled: true, method: MfaPreference.MethodEnum.SoftwareToken);
                    await saasUserApi.UpdateUserMfaPreferenceAsync(userInfo.Id, mfaPreference);

                    return Results.Ok(new { message = "MFA has been enabled" });
                }
                catch (Exception ex)
                {
                    return HandleApiException(ex);
                }
            });
```

</TabItem>

<TabItem value="csharp(.Netfw4.8)" label="C#(.Netfw4.8)">

`[HttpPost, Route("mfa_enable")]`

```csharp
        // MFA 有効化エンドポイント
        public async Task<IHttpActionResult> EnableMfa()
        {
            try
            {
                var token = GetBearerToken(Request);
                var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig());
                var userInfoApi = new UserInfoApi(authApiClientConfig);
                var userInfo = await userInfoApi.GetUserInfoAsync(token);

                var saasUserApi = new SaasUserApi(authApiClientConfig);
                var mfaPreference = new MfaPreference(enabled: true, method: MfaPreference.MethodEnum.SoftwareToken);
                await saasUserApi.UpdateUserMfaPreferenceAsync(userInfo.Id, mfaPreference);

                return Ok(new { message = "MFA has been enabled" });
            }
            catch (Exception ex)
            {
                return HandleApiException(ex);
            }
        }
```

</TabItem>
</Tabs>

#### **２．１．５．MFA設定更新API(無効)**

<Tabs>
<TabItem value="go" label="Go" default>

`e.POST("/mfa_disable", disableMfa, authMiddleware)`

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

<TabItem value="python" label="Python">

`@app.post("/mfa_disable")`
```python
# MFAを無効化する
def disable_mfa(auth_user: dict = Depends(fastapi_auth)):
    try:
        # MFA を無効化するためのリクエストボディを作成
        body = MfaPreference(enabled=False, method='softwareToken')

        # SaaSus API を使用して MFA を無効化
        SaasUserApi(api_client=api_client).update_user_mfa_preference(user_id=auth_user.id, body=body)

        return {"message": "MFA has been disabled"}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=str(e))
```

</TabItem>

<TabItem value="java" label="Java">

`@PostMapping(value = "/mfa_disable", produces = "application/json")`

```java
    /**
     * MFAを無効化する
     */
    public ResponseEntity<?> disableMfa(HttpServletRequest request) {
        try {
            // ユーザー情報取得
            AuthApiClient apiClient = new Configuration().getAuthApiClient();
            apiClient.setReferer(request.getHeader("X-Saasus-Referer"));
            UserInfoApi userInfoApi = new UserInfoApi(apiClient);
            UserInfo userInfo = userInfoApi.getUserInfo(getIDToken(request));

            // MFA無効化設定をリクエスト
            MfaPreference mfaPreference = new MfaPreference()
                .enabled(false)
                .method(MfaPreference.MethodEnum.SOFTWARETOKEN);

            SaasUserApi saasUserApi = new SaasUserApi(apiClient);
            saasUserApi.updateUserMfaPreference(userInfo.getId(), mfaPreference);

            Map<String, String> successResponse = new HashMap<>();
            successResponse.put("message", "MFA has been disabled");
            return ResponseEntity.ok(successResponse);
        } catch (ApiException e) {
            System.err.println("API Exception: " + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        } catch (Exception e) {
            System.err.println("Unexpected Exception: " + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
        }
    }
```

</TabItem>

<TabItem value="csharp" label="C#(.Net8)">

`app.MapPost("/mfa_disable")`

```csharp
            app.MapPost("/mfa_disable", async (HttpContext context) =>
            {
                // IDトークン取得
                var token = GetBearerToken(context);
                if (string.IsNullOrEmpty(token))
                {
                    return Results.Unauthorized();
                }

                try
                {
                    // ユーザー情報取得
                    var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig(), context);
                    var userInfoApi = new UserInfoApi(authApiClientConfig);
                    var userInfo = await userInfoApi.GetUserInfoAsync(token);

                    // MFAを無効化する設定を送信
                    var saasUserApi = new SaasUserApi(authApiClientConfig);
                    var mfaPreference = new MfaPreference(enabled: false, method: MfaPreference.MethodEnum.SoftwareToken);
                    await saasUserApi.UpdateUserMfaPreferenceAsync(userInfo.Id, mfaPreference);

                    return Results.Ok(new { message = "MFA has been disabled" });
                }
                catch (Exception ex)
                {
                    return HandleApiException(ex);
                }
            });
```

</TabItem>

<TabItem value="csharp(.Netfw4.8)" label="C#(.Netfw4.8)">

`[HttpPost, Route("mfa_disable")]`

```csharp
        // MFA 無効化エンドポイント
        public async Task<IHttpActionResult> DisableMfa()
        {
            try
            {
                var token = GetBearerToken(Request);
                var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig());
                var userInfoApi = new UserInfoApi(authApiClientConfig);
                var userInfo = await userInfoApi.GetUserInfoAsync(token);

                var saasUserApi = new SaasUserApi(authApiClientConfig);
                var mfaPreference = new MfaPreference(enabled: false, method: MfaPreference.MethodEnum.SoftwareToken);
                await saasUserApi.UpdateUserMfaPreferenceAsync(userInfo.Id, mfaPreference);

                return Ok(new { message = "MFA has been disabled" });
            }
            catch (Exception ex)
            {
                return HandleApiException(ex);
            }
        }
```

</TabItem>
</Tabs>

## **３．実装サンプルの使い方**

- [Go(echo)](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/README.md)
- [Python(FastAPI)](https://github.com/saasus-platform/implementation-sample-api-python)
- [Java(Maven)](https://github.com/saasus-platform/implementation-sample-api-java)
- [C#(.NET 8)](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/README.md)
- [C#(.NET Framework 4.8)](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/README.md)
