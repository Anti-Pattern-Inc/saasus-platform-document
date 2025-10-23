---
title: "Developer SDK/API Overview"
slug: "developer-sdk-api-overview"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

## 1. SaaSus SDK / API Capabilities and Use Cases

| Domain                  | Primary Use Case                                                             |
|-------------------------|------------------------------------------------------------------------------|
| **Auth API**            | Obtain ID/access tokens, manage users/tenants, configure roles/attributes   |
| **Billing API**         | Configure Stripe integration                                                 |
| **Pricing API**         | Manage rate plans, tax rates, and metering definitions                      |
| **Communication API**   | Submit and retrieve user feedback                                            |
| **Apilog API**          | Retrieve API call logs                                                       |
| **Awsmarketplace API**  | Configure AWS Marketplace integration                                        |
| **Integration API**     | Configure Amazon EventBridge integration                                     |
| **ApiGateway API**      | Configure the Smart API Gateway                                              |

## 2. How to Retrieve and Use Authentication Information

All SaaSus API requests require the `SAASUSSIGV1` signature header.  
Use the following flow to generate the signature and obtain the `id_token`.

### 2.1 Generating the `SAASUSSIGV1` Signature Header

The signature algorithm is explained in detail in the [Getting Started](/docs/reference/getting-started-with-your-api) guide.  
Below is the basic header format:

```
Authorization: SAASUSSIGV1 Sig=<signature>, SaaSID=<SaaS ID>, APIKey=<API Key>
```

#### When Using the SDK

- The SDK **automatically adds the signature header** before sending requests.
- You do not need to manually implement code to generate `Sig`.

### 2.2 Obtaining and Using an ID Token (`id_token`)

1. Send a signed request to **`GET /v1/auth/credentials`** to retrieve the `id_token`, `client_id`, and `client_secret`.
2. The `id_token` is in **JWT format** and should be stored in browser `localStorage` or similar.
3. Pass the `id_token` as a parameter in user-related API calls like `GET /v1/auth/user-info`.

```bash
# 1) Retrieve id_token using a temporary code
TEMP_CODE="69e732d6-8ecc-45c4-c2eb-8438f7ffe775"
curl https://api.saasus.io/v1/auth/credentials?code=${TEMP_CODE} \
     -H "Authorization: SAASUSSIGV1 Sig=..., SaaSID=..., APIKey=..."
```

:::info
The temporary code `code` is included as a query parameter during login redirection.
:::

See the SDK example in  
[Implementing JWT Retrieval API](/docs/part-6/implementation-guide/sample-application/authentication#jwt-retrieval-api)

```bash
# 2) Use id_token to retrieve user info
curl https://api.saasus.io/v1/auth/userinfo?id_token=<ID_TOKEN> \
     -H "Authorization: SAASUSSIGV1 Sig=..., SaaSID=..., APIKey=..."
```

See the SDK example in  
[User Info Retrieval API Example](/docs/part-6/implementation-guide/sample-application/authentication#user-information-retrieval-api)

## 3. Use Case Reference Links

| Use Case             | API Reference                                                                                   | Tutorial Link                                                                 |
|----------------------|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| **Create Tenant**     | [Auth API – CreateTenant](/docs/reference/auth-api#tag/tenant/operation/CreateTenant)      | [Creating a Tenant](/docs/part-6/usecase/about-saas-user-accounts/create-tenant) |
| **Create User**       | [Auth API – CreateSaasUser](/docs/reference/auth-api#tag/saasUser/operation/CreateSaasUser) | [Implementation: Creating Users in SaaS App](/docs/part-6/usecase/about-saas-user-accounts#32-implementation-for-the-case-where-saas-have-user-creation-feature) |
| **Metering-related** | [Pricing API – metering tag list](/docs/reference/pricing-api#tag/metering)                 | [Metering API Implementation Samples](/docs/part-6/implementation-guide/sample-application/metering-api) |

## 4. SDK List

| Language    | SDK Repository Link |
|-------------|---------------------|
| Python      | [Python SDK GitHub](https://github.com/saasus-platform/saasus-sdk-python) |
| JavaScript  | [JavaScript SDK GitHub](https://github.com/saasus-platform/saasus-sdk-javascript) |
| Go          | [Go SDK GitHub](https://github.com/saasus-platform/saasus-sdk-go) |
| Java        | [Java SDK GitHub](https://github.com/saasus-platform/saasus-sdk-java) |
| PHP         | [PHP SDK GitHub](https://github.com/saasus-platform/saasus-sdk-php) |
| C#          | [C# SDK GitHub](https://github.com/saasus-platform/saasus-sdk-csharp) |
