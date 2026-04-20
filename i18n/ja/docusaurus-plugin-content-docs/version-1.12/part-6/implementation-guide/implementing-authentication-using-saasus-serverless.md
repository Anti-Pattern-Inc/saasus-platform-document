---
title: "SaaSus Platformを使った実装（サーバレス）"
slug: "implementing-authentication-using-saasus-serverless"
excerpt: "SaaSus Platformのサーバレス方式を使用したSaaSアプリケーションの実装ガイド"
hidden: false
createdAt: "Mon Jul 31 2023 03:24:01 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Apr 14 2026 01:13:00 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SaaSus Platformを使ったサーバレス方式でのSaaSアプリケーション実装例です。
認証、テナント管理、ユーザー管理など、SaaSに必要な機能をサーバレス環境で動かしながら学習できます。

### 主な特徴
- **サーバレス構成**: AWS Lambda + CloudFront + S3 を活用
- **React + TypeScript**: フロントエンドにReactを使用
- **JWT認証**: ブラウザのローカルストレージでトークン管理
- **CDK対応**: AWS CDKを使用したインフラ一括構築・デプロイ
- **モノリポ**: フロントエンドとバックエンドを1つのリポジトリで管理

## 実装方式について

このサンプルアプリケーションは、**サーバレス版**として実装されています。

### サーバレス版の特徴

バックエンドをサーバレスで構成する実装方式で、以下のような特徴があります：
- SaaSus Platformの認証情報となるトークン（JWT）を、ブラウザのローカルストレージに保管
- SaaS Platform利用者はJWTを使って本人確認を行う
- フロントエンドはReactで実装、S3 + CloudFrontでホスティング
- バックエンドはLambda上で動作するAPIサーバとして実装

### アーキテクチャ

```
ブラウザ
  │
  ▼
CloudFront (*.cloudfront.net)
  ├── /*         → S3（React フロントエンド）
  └── /api/*     → Lambda Function URL (Hono API)
                     ※ Lambda リソースポリシーで特定の CloudFront Distribution のみ許可
```

フロントエンドも API も同じ CloudFront ドメインから配信されるため、クロスドメイン問題なしに Cookie を利用できます。

**処理フロー（ログイン〜ユーザ一覧表示）**

![サーバレス版の処理フロー](/ja/img/part-6/implementation-guide/implementing-authentication-using-saasus-serverless/image-01.png)

## 実装されている画面・機能一覧

### 認証関連画面

#### [`Callback.tsx`](https://github.com/saasus-platform/implementation-sample-serverless/blob/main/frontend/src/pages/Callback.tsx) - 認証後遷移先画面

- SaaSus Platformからの認証情報を受け取り
- JWTトークンをローカルストレージに保存
- ユーザーのロールに応じて適切な画面に自動遷移
- ※リダイレクト処理のため、ユーザーには表示されません

#### [`SelfSignUp.tsx`](https://github.com/saasus-platform/implementation-sample-serverless/blob/main/frontend/src/pages/SelfSignUp.tsx) - セルフサインアップ画面

- 新規ユーザーが自分でテナント作成
- テナント名の入力
- ユーザー属性・テナント属性の設定
- 属性タイプ別の入力フィールド（文字列、数値、真偽値、日付）

### ユーザー・テナント管理画面

#### [`TenantList.tsx`](https://github.com/saasus-platform/implementation-sample-serverless/blob/main/frontend/src/pages/TenantList.tsx) - テナント一覧画面

- 複数テナントに所属するユーザー向け
- テナント属性の表示（設定済み/未設定の表示）
- 各テナントのユーザー一覧画面への遷移

#### [`UserPage.tsx`](https://github.com/saasus-platform/implementation-sample-serverless/blob/main/frontend/src/pages/UserPage.tsx) - ユーザー一覧画面（メイン画面）

- **ログインユーザー情報表示**: テナント名、名前、メールアドレス、ロール
- **ユーザー一覧テーブル**: テナント内の全ユーザー表示
- **ユーザー属性表示**: カスタム属性の動的表示

## フロントエンド実装

### 認証後遷移先画面（Callback）

SaaSus Platformが生成するログイン画面からログインを実施すると、認証後遷移先で設定したURLが呼び出されます。

本実装サンプルを使って動作確認を行うためには、  
`http://localhost:3000/callback`（ローカル開発）または CloudFront デプロイ後の `https://xxxxxxxxxx.cloudfront.net/callback` と設定してください。

![](/ja/img/part-6/implementation-guide/implementing-authentication-using-saasus-serverless/image-02.png)

認証後遷移先にはクエリパラメータ(code=xxxxx)で、認証情報取得に必要な一時コードが渡される仕様となってます。一時コードを使ってJWTを取得、ローカルストレージに保存する実装を行ってください。

#### 認証後の画面遷移ロジック

サンプルアプリでは、JWT取得後にユーザー情報を確認し、以下のロジックで適切な画面に遷移させています：

1. **テナント未所属の場合**: セルフサインアップ画面へ遷移
2. **複数テナント所属の場合**: テナント一覧画面へ遷移
3. **単一テナント所属の場合**: ユーザー一覧画面（メイン画面）へ遷移

この遷移ロジックにより、ユーザーの状況に応じて最適な画面を表示できます。

### セルフサインアップ画面

ユーザがログインしていることのチェックをする必要があるので、ユーザ情報取得のAPIをコールしログインしていることを確認します。  
APIコール時にはローカルストレージに保存したJWTを利用します。  
ユーザ情報が取得出来ることにより、ユーザがログイン状態であることを確認できます。

### テナント一覧画面

複数テナントに所属するユーザー向けの画面です。ユーザーが所属するテナントの一覧を表示し、各テナントのユーザー一覧画面への遷移を提供します。

### ユーザ一覧画面（トップページ）

ユーザー一覧画面では、認証済みユーザーの情報とテナント内の全ユーザーを表示します。

## バックエンド実装

バックエンドは単一のLambda Function上で複数のAPIエンドポイントを提供します（WebフレームワークにはHonoを使用）。すべてのエンドポイントは `/api` プレフィックス配下に配置されています。

### JWT取得API

以下のリンク先に、本APIの実装が含まれています。

- **TypeScript (Lambda)**: [`lambda/routes/auth.ts`](https://github.com/saasus-platform/implementation-sample-serverless/blob/main/lambda/routes/auth.ts)

<Tabs>
<TabItem value="typescript" label="TypeScript">

```typescript
// GET /api/credentials - 認証コードから認証情報を取得
auth.get('/credentials', async (c) => {
  try {
    const code = c.req.query('code');
    if (!code) {
      return c.json({ error: 'Authorization code not found' }, 400);
    }

    const { referer, xSaaSusReferer } = getRefererHeaders(c);
    const authClient = createAuthClient(referer, xSaaSusReferer);
    
    const credentialsResponse = await authClient.credentialApi.getAuthCredentials(code);
    const credentials = credentialsResponse.data;

    // リフレッシュトークンをクッキーに設定
    if (credentials.refresh_token) {
      setCookie(c, 'SaaSusRefreshToken', credentials.refresh_token, {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'Strict',
        maxAge: 30 * 24 * 60 * 60, // 30日
      });
    }

    return c.json(credentials);
  } catch (error) {
    console.error('[credentials] Error:', error);
    return c.json({
      error: 'Failed to get credentials',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});
```

</TabItem>
</Tabs>

### ユーザ情報取得API

以下のリンク先に、本APIの実装が含まれています。

- **TypeScript (Lambda)**: [`lambda/routes/auth.ts`](https://github.com/saasus-platform/implementation-sample-serverless/blob/main/lambda/routes/auth.ts)

<Tabs>
<TabItem value="typescript" label="TypeScript">

```typescript
// GET /api/userinfo - ユーザー情報を取得
auth.get('/userinfo', async (c) => {
  try {
    const authHeader = c.req.header('X-Id-Token');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return c.json({ error: 'No valid authorization header found' }, 401);
    }

    const token = authHeader.replace('Bearer ', '');
    const { referer, xSaaSusReferer } = getRefererHeaders(c);
    const authClient = createAuthClient(referer, xSaaSusReferer);
    
    const userInfoResponse = await authClient.userInfoApi.getUserInfo(token);
    return c.json(userInfoResponse.data);
  } catch (error) {
    console.error('[userinfo] Error:', error);
    return c.json({
      error: 'Failed to get user info',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});
```
</TabItem>
</Tabs>

### セルフサインアップAPI

以下のリンク先に、本APIの実装が含まれています。

- **TypeScript (Lambda)**: [`lambda/routes/tenant.ts`](https://github.com/saasus-platform/implementation-sample-serverless/blob/main/lambda/routes/tenant.ts)

APIリクエストがSaaSus Platformにログインしたユーザからのものであることを確認するため、  
ユーザ情報取得を実施してログイン確認を必ず行ってください

セルフサインアップ処理は以下の流れになります  
前提）セルフサインアップしたユーザが新規テナントの管理者となる場合

a. テナント作成  
b. ログインユーザを作成したテナントに紐づけ  
c. ログインユーザをテナントの管理者に設定

<Tabs>
<TabItem value="typescript" label="TypeScript">

```typescript
// POST /api/self_sign_up - セルフサインアップ
tenant.post('/self_sign_up', async (c) => {
  try {
    const body = await c.req.json<SelfSignUpRequest>();
    
    if (!body.tenantName) {
      return c.json({ error: 'tenantName is required' }, 400);
    }

    const headers = headersToObject(c);
    const userInfo = await getAuthenticatedUserInfo(headers);
    const { referer, xSaaSusReferer } = getRefererHeaders(c);
    const authClient = createAuthClient(referer, xSaaSusReferer);

    // テナント属性情報の取得と型変換
    const tenantAttributesResponse = await authClient.tenantAttributeApi.getTenantAttributes();
    const tenantAttributes = tenantAttributesResponse.data.tenant_attributes;
    const convertedTenantAttributeValues = convertAttributeValues(
      body.tenantAttributeValues || {},
      tenantAttributes
    );

    // テナントを作成
    const tenantProps: TenantProps = {
      name: body.tenantName,
      attributes: convertedTenantAttributeValues,
      back_office_staff_email: userInfo.email,
    };

    const createdTenantResponse = await authClient.tenantApi.createTenant(tenantProps);
    const createdTenant = createdTenantResponse.data;
    const tenantId = createdTenant.id;

    // ユーザー属性情報の取得と型変換
    const userAttributesResponse = await authClient.userAttributeApi.getUserAttributes();
    const userAttributes = userAttributesResponse.data.user_attributes;
    const convertedUserAttributeValues = convertAttributeValues(
      body.userAttributeValues || {},
      userAttributes
    );

    // テナントユーザー登録用のパラメータを作成
    const createTenantUserParam: CreateTenantUserParam = {
      email: userInfo.email,
      attributes: convertedUserAttributeValues,
    };

    // SaaSユーザーをテナントユーザーに追加
    const tenantUserResponse = await authClient.tenantUserApi.createTenantUser(
      tenantId,
      createTenantUserParam
    );
    const tenantUser = tenantUserResponse.data;

    // ロール設定用のパラメータを作成（管理者として設定）
    const createTenantUserRolesParam: CreateTenantUserRolesParam = {
      role_names: ['admin'],
    };

    // 作成したテナントユーザーにロールを設定
    await authClient.tenantUserApi.createTenantUserRoles(
      tenantId,
      tenantUser.id,
      3, // 実利用環境のID
      createTenantUserRolesParam
    );

    return c.json({
      message: 'User successfully signed up to the tenant',
      tenantId: tenantId,
      tenantName: body.tenantName,
    });
  } catch (error) {
    console.error('[self_sign_up] Error:', error);
    return c.json({
      error: 'Failed to sign up',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});
```

</TabItem>
</Tabs>

### ユーザ一覧取得API

以下のリンク先に、本APIの実装が含まれています。

- **TypeScript (Lambda)**: [`lambda/routes/user.ts`](https://github.com/saasus-platform/implementation-sample-serverless/blob/main/lambda/routes/user.ts)

APIリクエストがSaaSus Platformにログインしたユーザからのものであることを確認するため、
ユーザ情報取得を実施してログイン確認を必ず行ってください

<Tabs>
<TabItem value="typescript" label="TypeScript">

```typescript
// GET /api/users - ユーザー一覧を取得
user.get('/users', async (c) => {
  try {
    const headers = headersToObject(c);
    const userInfo = await getAuthenticatedUserInfo(headers);
    
    // テナントIDをクエリパラメータから取得
    const tenantId = c.req.query('tenant_id');
    if (!tenantId) {
      return c.json({ error: 'tenant_id is required' }, 400);
    }

    // テナント所属チェック
    if (!userInfo.tenants || !belongingTenant(userInfo.tenants, tenantId)) {
      return c.json({ error: 'User does not belong to the specified tenant' }, 403);
    }

    const { referer, xSaaSusReferer } = getRefererHeaders(c);
    const authClient = createAuthClient(referer, xSaaSusReferer);
    
    const usersResponse = await authClient.tenantUserApi.getTenantUsers(tenantId);
    return c.json(usersResponse.data.users || []);
  } catch (error) {
    console.error('[users] Error:', error);
    return c.json({
      error: 'Failed to get users',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});
```

</TabItem>
</Tabs>

## セットアップ手順

### 前提条件
- **Node.js**: 18以上
- **AWS CLI**: 設定済み
- **AWS CDK**: インストール済み（`npm install -g aws-cdk`）
- **SaaSus Platform**: アカウントとプロジェクト設定

### セットアップ手順

#### 1. リポジトリのクローンと依存関係のインストール

```bash
git clone https://github.com/saasus-platform/implementation-sample-serverless.git
cd implementation-sample-serverless

# バックエンド依存関係のインストール
npm install

# フロントエンド依存関係のインストール
npm run frontend:install
```

#### 2. 環境変数の設定

```bash
cp .env.example .env
```

`.env` に SaaSus の認証情報を設定してください：

```
SAASUS_SAAS_ID=your-saas-id
SAASUS_API_KEY=your-api-key
SAASUS_SECRET_KEY=your-secret-key
SAASUS_AUTH_MODE="api"
```

フロントエンドの環境変数も設定してください:

```bash
cp frontend/.env.example frontend/.env
```

```
# SaaSus Platform管理コンソールで取得したログインURLを設定
REACT_APP_LOGIN_URL=https://auth.xxxxxxxxxx.com
REACT_APP_API_ENDPOINT=/api
```

#### 3. AWS 認証情報の設定

プロファイルを使用する場合は、後述の CDK コマンドに `--profile your-profile` を付けて実行してください。アクセスキーを使用する場合は事前に環境変数を設定してください。

```bash
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"
# 一時的な認証情報を使用する場合は以下も設定
# export AWS_SESSION_TOKEN="your-session-token"
```

#### 4. デプロイ

```bash
# 初回のみ（AWS アカウント・リージョンごとに必要）
npx cdk bootstrap

# フロントエンドビルド → CDK デプロイ を一括実行
npm run deploy
```

プロファイルを指定する場合（`npm run deploy` は `--profile` を渡せないため個別に実行）:

```bash
# 初回のみ
npx cdk bootstrap --profile your-profile

npm run frontend:build
npx cdk deploy --profile your-profile
```

デプロイ完了後、出力される `CloudFrontUrl` がアクセス先の URL です。

```
Outputs:
  CloudFrontUrl      = https://xxxxxxxxxx.cloudfront.net
  FrontendBucketName = ...
  DistributionId     = ...
```

#### 5. SaaSus 開発コンソールの設定

デプロイ後、[SaaSus 開発コンソール](https://settings.console.saasus.io/) の 基本設定 > 認証後遷移先 に Callback URL を登録してください。

| 環境 | Callback URL |
|------|-------------|
| 本番（CloudFront） | `https://xxxxxxxxxx.cloudfront.net/callback` |
| ローカル | `http://localhost:3000/callback` |

#### 6. 動作確認
1. CloudFront URL にアクセス
2. ログイン機能の動作確認
3. 各機能の動作確認

### ローカル開発

```bash
# フロントエンドの環境変数を設定
cp frontend/.env.example frontend/.env
# REACT_APP_API_ENDPOINT をローカル用に切り替える（frontend/.env を編集）

# ターミナル1：バックエンドを起動（http://localhost:3001/api）
npm run dev

# ターミナル2：フロントエンドを起動（http://localhost:3000）
npm run frontend:start
```

### その他の実装方式
APIサーバ版の実装については、以下のドキュメントをご参照ください：
- [サンプルアプリケーション概要](/docs/part-6/implementation-guide/sample-application/overview)
