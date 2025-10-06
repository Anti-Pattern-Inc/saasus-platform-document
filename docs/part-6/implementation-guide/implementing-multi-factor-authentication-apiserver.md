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

`@app.get("/mfa_status")`

```python
# Retrieve MFA status (enabled/disabled)
def get_mfa_status(auth_user: dict = Depends(fastapi_auth), request: Request = None):
    try:
        # Use the SaaSus API to retrieve the user's MFA preference
        response = SaasUserApi(api_client=api_client).get_user_mfa_preference(user_id=auth_user.id)
        # Return the MFA enabled/disabled status
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
     * Retrieve MFA status (enabled/disabled)
     */
    public ResponseEntity<?> getMfaStatus(HttpServletRequest request) {
        try {
            // Initialize the SaaSus API client
            AuthApiClient apiClient = new Configuration().getAuthApiClient();
            apiClient.setReferer(request.getHeader("X-Saasus-Referer"));

            // Retrieve user information
            UserInfoApi userInfoApi = new UserInfoApi(apiClient);
            UserInfo userInfo = userInfoApi.getUserInfo(getIDToken(request));

            // Retrieve MFA status
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
                // Get bearer token from Authorization header
                var token = GetBearerToken(context);
                if (string.IsNullOrEmpty(token))
                {
                    return Results.Unauthorized();
                }

                try
                {
                    // Initialize SaaSus API client and retrieve user info
                    var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig(), context);
                    var userInfoApi = new UserInfoApi(authApiClientConfig);
                    var userInfo = await userInfoApi.GetUserInfoAsync(token);

                    // Retrieve MFA preference
                    var saasUserApi = new SaasUserApi(authApiClientConfig);
                    var mfaPref = await saasUserApi.GetUserMfaPreferenceAsync(userInfo.Id);

                    // Return result in JSON
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
        // Retrieve MFA status (enabled/disabled)
        public async Task<IHttpActionResult> GetMfaStatus()
        {
            try
            {
                // Get bearer token from Authorization header
                var token = GetBearerToken(Request);

                // Initialize the SaaSus API client
                var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig());

                // Retrieve user information
                var userInfoApi = new UserInfoApi(authApiClientConfig);
                var userInfo = await userInfoApi.GetUserInfoAsync(token);

                // Retrieve MFA preference
                var saasUserApi = new SaasUserApi(authApiClientConfig);
                var mfaPref = await saasUserApi.GetUserMfaPreferenceAsync(userInfo.Id);

                // Return result
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

`@app.get("/mfa_setup")`

```python
# Retrieve MFA setup information (generate QR code)
# The frontend application must include X-Access-Token in the request header
def get_mfa_setup(request: Request, auth_user: dict = Depends(fastapi_auth)):
    # Get X-Access-Token from request headers
    access_token = request.headers.get("X-Access-Token")
    if not access_token:
        # Return 401 if access token is missing
        raise HTTPException(status_code=401, detail="Access token is missing")

    try:
        create_secret_code_param = CreateSecretCodeParam(access_token=access_token)
        # Use the SaaSus API to generate a secret code for MFA authentication app registration
        response = SaasUserApi(api_client=api_client).create_secret_code(user_id=auth_user.id, create_secret_code_param=create_secret_code_param)
        # Generate a QR code URL for Google Authenticator and other authentication apps
        qr_code_url = f"otpauth://totp/SaaSusPlatform:{auth_user.email}?secret={response.secret_code}&issuer=SaaSusPlatform"
        # Return the QR code URL
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
     * Retrieve MFA setup information (generate QR code)
     */
    public ResponseEntity<?> getMfaSetup(HttpServletRequest request) {
        try {
            // Get access token from request header
            String accessToken = request.getHeader("X-Access-Token");
            if (accessToken == null || accessToken.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Access token is missing");
            }

            // Initialize the SaaSus API client and retrieve user info
            AuthApiClient apiClient = new Configuration().getAuthApiClient();
            apiClient.setReferer(request.getHeader("X-Saasus-Referer"));
            UserInfoApi userInfoApi = new UserInfoApi(apiClient);
            UserInfo userInfo = userInfoApi.getUserInfo(getIDToken(request));

            // Generate secret code
            SaasUserApi saasUserApi = new SaasUserApi(apiClient);
            SoftwareTokenSecretCode code = saasUserApi.createSecretCode(
                userInfo.getId(),
                new CreateSecretCodeParam().accessToken(accessToken)
            );

            // Generate a QR code URL for Google Authenticator and other authentication apps
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
                // Get access token and ID token
                var token = GetBearerToken(context);
                var accessToken = context.Request.Headers["X-Access-Token"].FirstOrDefault();
                if (string.IsNullOrEmpty(token) || string.IsNullOrEmpty(accessToken))
                {
                    return Results.Unauthorized();
                }

                try
                {
                    // Initialize API client and retrieve user info
                    var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig(), context);
                    var userInfoApi = new UserInfoApi(authApiClientConfig);
                    var userInfo = await userInfoApi.GetUserInfoAsync(token);

                    // Generate secret code
                    var saasUserApi = new SaasUserApi(authApiClientConfig);
                    var secretCode = await saasUserApi.CreateSecretCodeAsync(
                        userInfo.Id,
                        new CreateSecretCodeParam(accessToken)
                    );

                    // Generate a QR code URL for Google Authenticator and other authentication apps
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
        // Retrieve MFA setup information (generate QR code)
        public async Task<IHttpActionResult> SetupMfa()
        {
            try
            {
                // Get token and access token
                var token = GetBearerToken(Request);
                var accessToken = HttpContext.Current.Request.Headers.Get("X-Access-Token");

                if (string.IsNullOrEmpty(accessToken))
                {
                    return Content(HttpStatusCode.Unauthorized, "Missing X-Access-Token header");
                }

                // Initialize API client
                var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig());

                // Retrieve user info
                var userInfoApi = new UserInfoApi(authApiClientConfig);
                var userInfo = await userInfoApi.GetUserInfoAsync(token);

                // Generate secret code
                var saasUserApi = new SaasUserApi(authApiClientConfig);
                var secretCode = await saasUserApi.CreateSecretCodeAsync(
                    userInfo.Id,
                    new CreateSecretCodeParam(accessToken)
                );

                // Generate a QR code URL for Google Authenticator and other authentication apps
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

`@app.post("/mfa_verify")`

```python
# Verify the user's MFA authentication code
# The frontend application must include X-Access-Token in the request header
def verify_mfa(request: Request, mfa_request: VerifyMfaRequest, auth_user: dict = Depends(fastapi_auth)):
    # Get X-Access-Token from request headers
    access_token = request.headers.get("X-Access-Token")
    if not access_token:
        # Return 401 if access token is missing
        raise HTTPException(status_code=401, detail="Access token is missing")

    try:
        update_software_token_param = UpdateSoftwareTokenParam(
            access_token=access_token,
            verification_code=mfa_request.verification_code
        )

        # Use the SaaSus API to register the authentication application
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
     * Verify the user's MFA authentication code
     */
    public ResponseEntity<?> verifyMfa(@RequestBody Map<String, String> requestBody, HttpServletRequest request) {
        try {
            // Get access token and verification code
            String accessToken = request.getHeader("X-Access-Token");
            if (accessToken == null || accessToken.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Access token is missing");
            }

            String verificationCode = requestBody.get("verification_code");
            if (verificationCode == null || verificationCode.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Verification code is required");
            }

            // Initialize the SaaSus API client and retrieve user info
            AuthApiClient apiClient = new Configuration().getAuthApiClient();
            apiClient.setReferer(request.getHeader("X-Saasus-Referer"));
            UserInfoApi userInfoApi = new UserInfoApi(apiClient);
            UserInfo userInfo = userInfoApi.getUserInfo(getIDToken(request));

            // Use the SaaSus API to verify the code and register the software token
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
                // Get tokens and verification code
                var token = GetBearerToken(context);
                var accessToken = context.Request.Headers["X-Access-Token"].FirstOrDefault(); 
                string verificationCode = requestBody.VerificationCode;

                if (string.IsNullOrEmpty(token) || string.IsNullOrEmpty(accessToken) || string.IsNullOrEmpty(verificationCode))
                {
                    return Results.BadRequest("Missing required information.");
                }

                try
                {
                    // Initialize API client and retrieve user info
                    var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig(), context);
                    var userInfoApi = new UserInfoApi(authApiClientConfig);
                    var userInfo = await userInfoApi.GetUserInfoAsync(token);

                    // Use the SaaSus API to verify the code and register the software token
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
        // Verify the user's MFA authentication code
        public async Task<IHttpActionResult> VerifyMfa([FromBody] MfaVerifyRequest request)
        {
            try
            {
                // Get token and access token
                var token = GetBearerToken(Request);
                var accessToken = HttpContext.Current.Request.Headers.Get("X-Access-Token");
                var verificationCode = request.VerificationCode;

                if (string.IsNullOrEmpty(accessToken) || string.IsNullOrEmpty(verificationCode))
                {
                    return BadRequest("Missing accessToken or verificationCode");
                }

                // Initialize API client and retrieve user info
                var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig());
                var userInfoApi = new UserInfoApi(authApiClientConfig);
                var userInfo = await userInfoApi.GetUserInfoAsync(token);

                // Use the SaaSus API to verify the code and register the software token
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

`@app.post("/mfa_enable")`

```python
# Enable MFA for the user
def enable_mfa(auth_user: dict = Depends(fastapi_auth)):
    try:
        # Create request body to enable MFA
        body = MfaPreference(enabled=True, method='softwareToken')

        # Use the SaaSus API to enable MFA
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
     * Enable MFA for the user
     */
    public ResponseEntity<?> enableMfa(HttpServletRequest request) {
        try {
            // Initialize the SaaSus API client and retrieve user info
            AuthApiClient apiClient = new Configuration().getAuthApiClient();
            apiClient.setReferer(request.getHeader("X-Saasus-Referer"));
            UserInfoApi userInfoApi = new UserInfoApi(apiClient);
            UserInfo userInfo = userInfoApi.getUserInfo(getIDToken(request));

            // Create request body to enable MFA
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
                // Retrieve ID token
                var token = GetBearerToken(context);
                if (string.IsNullOrEmpty(token))
                {
                    return Results.Unauthorized();
                }

                try
                {
                    // Initialize API client and retrieve user info
                    var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig(), context);
                    var userInfoApi = new UserInfoApi(authApiClientConfig);
                    var userInfo = await userInfoApi.GetUserInfoAsync(token);

                    // Send request to enable MFA
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
        // Enable MFA endpoint
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

`@app.post("/mfa_disable")`
```python
# Disable MFA for the user
def disable_mfa(auth_user: dict = Depends(fastapi_auth)):
    try:
        # Create request body to disable MFA
        body = MfaPreference(enabled=False, method='softwareToken')

        # Use the SaaSus API to disable MFA
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
     * Disable MFA for the user
     */
    public ResponseEntity<?> disableMfa(HttpServletRequest request) {
        try {
            // Initialize the SaaSus API client and retrieve user info
            AuthApiClient apiClient = new Configuration().getAuthApiClient();
            apiClient.setReferer(request.getHeader("X-Saasus-Referer"));
            UserInfoApi userInfoApi = new UserInfoApi(apiClient);
            UserInfo userInfo = userInfoApi.getUserInfo(getIDToken(request));

            // Create request body to disable MFA
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
                // Retrieve ID token
                var token = GetBearerToken(context);
                if (string.IsNullOrEmpty(token))
                {
                    return Results.Unauthorized();
                }

                try
                {
                    // Initialize API client and retrieve user info
                    var authApiClientConfig = CreateClientConfiguration(c => c.GetAuthApiClientConfig(), context);
                    var userInfoApi = new UserInfoApi(authApiClientConfig);
                    var userInfo = await userInfoApi.GetUserInfoAsync(token);

                    // Send request to disable MFA
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
        // Disable MFA endpoint
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

## **3. How to Use the Sample Implementation**

- [Go (Echo)](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/README.md)
- [Python(FastAPI)](https://github.com/saasus-platform/implementation-sample-api-python)
- [Java(Spring)](https://github.com/saasus-platform/implementation-sample-api-java)
- [C#(.NET 8)](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/README.md)
- [C#(.NET Framework 4.8)](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/README.md)
