---
title: "開発者向けSDK/API概要"
slug: "developer-sdk-api-overview"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

## 1. SaaSus SDK / API の提供機能と利用用途

| ドメイン                   | 主な用途                                 |
| ---------------------- | ------------------------------------ |
| **Auth API**           | ID・アクセストークン取得、ユーザー / テナント管理、ロール・属性設定 |
| **Billing API**        | Stripe 連携設定                        |
| **Pricing API**        | 料金プラン・税率・メータリングの設定                   |
| **Communication API**  | ユーザーフィードバックの送信・取得                    |
| **Apilog API**         | API 呼び出しログの取得                        |
| **Awsmarketplace API** | AWS Marketplace 連携設定                 |
| **Integration API**    | Amazon EventBridge 連携設定              |
| **ApiGateway API**     | Smart API Gateway 設定    |


## 2. 認証情報の取得と利用方法

SaaSus API では **すべてのリクエストで `SAASUSSIGV1` 署名ヘッダーが必須**です。以下のフローで署名を生成し、ID トークン（`id_token`）を取得・利用します。

### 2.1 署名ヘッダー `SAASUSSIGV1` の作り方

署名アルゴリズムは[Getting Started](/ja/docs/reference/getting-started-with-your-api) にまとまっています。ここでは最低限のフォーマットだけ示します。

```text
Authorization: SAASUSSIGV1 Sig=<署名>, SaaSID=<SaaS ID>, APIKey=<API Key>
```

#### SDK を利用する場合

* SDKは **リクエスト送信前に署名ヘッダーを自動付与**します。
* ユーザー側で `Sig` を生成するコードを書く必要はありません。

### 2.2 ID トークン (`id_token`) の取得と利用

1. 署名付きで **`GET /v1/auth/credentials`** を呼び、`id_token`・`client_id`・`client_secret` を取得します。
2. `id_token` は **JWT 形式**。ブラウザの `localStorage` などに保存します。
3. **ユーザー情報 API** (`GET /v1/auth/user-info` など) で `id_token` をパラメータとして渡します。

````bash
# 1) id_token の取得（`code` を使う場合）
TEMP_CODE="69e732d6-8ecc-45c4-c2eb-8438f7ffe775"
curl https://api.saasus.io/v1/auth/credentials?code=${TEMP_CODE} \
     -H "Authorization: SAASUSSIGV1 Sig=..., SaaSID=..., APIKey=..."
````

> 一時コード `code` はログインリダイレクト時にクエリパラメータとして渡されます。

SDK 例は [JWT 取得 API 実装例](/ja/docs/part-6/implementation-guide/implementing-authentication-using-saasus-platform-apiserver#２１１jwt取得api) を参照。

```bash
# 2) id\_token を使ったユーザー情報取得
curl https://api.saasus.io/v1/auth/userinfo?id_token=<ID_TOKEN> \
     -H "Authorization: SAASUSSIGV1 Sig=..., SaaSID=..., APIKey=..."
```

SDK 例は [ユーザー情報取得 API 実装例](/ja/docs/part-6/implementation-guide/implementing-authentication-using-saasus-platform-apiserver#２１２ユーザ情報取得api) を参照。

## 3. 代表ユースケース別リンク集

| ユースケース       | API リファレンス                                                                                     | 学習用リンク                                                         |
| ------------ | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **テナント作成**   | [Auth API – CreateTenant](/ja/docs/reference/auth-api#tag/tenant/operation/CreateTenant)      | [テナントの作成](/ja/docs/part-6/usecase/about-saas-user-accounts/create-tenant)   |
| **ユーザー作成**   | [Auth API – CreateSaasUser](/ja/docs/reference/auth-api#tag/saasUser/operation/CreateSaasUser)                | [SaaSにユーザー作成機能が実装されているケースの実装](/ja/docs/part-6/usecase/about-saas-user-accounts#%EF%BC%93%EF%BC%92saas%E3%81%AB%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E4%BD%9C%E6%88%90%E6%A9%9F%E8%83%BD%E3%81%8C%E5%AE%9F%E8%A3%85%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%82%B1%E3%83%BC%E3%82%B9%E3%81%AE%E5%AE%9F%E8%A3%85)              |
| **メータリング関連** | [Pricing API – metering タグ一覧](/ja/docs/reference/pricing-api#tag/metering) | [メータリングAPIの実装サンプルと使用例(Laravel)](/ja/docs/part-6/implementation-guide/metering-api-sample) |


## 4. SDK リスト

| 言語 | SDK リンク |
|------|------------------|
| Python | [Python SDK GitHub](https://github.com/saasus-platform/saasus-sdk-python) |
| JavaScript | [JavaScript SDK GitHub](https://github.com/saasus-platform/saasus-sdk-javascript) |
| Go | [Go SDK GitHub](https://github.com/saasus-platform/saasus-sdk-go) |
| Java | [Java SDK GitHub](https://github.com/saasus-platform/saasus-sdk-java) |
| PHP | [PHP SDK GitHub](https://github.com/saasus-platform/saasus-sdk-php) |
| C# | [C# SDK GitHub](https://github.com/saasus-platform/saasus-sdk-csharp) |
