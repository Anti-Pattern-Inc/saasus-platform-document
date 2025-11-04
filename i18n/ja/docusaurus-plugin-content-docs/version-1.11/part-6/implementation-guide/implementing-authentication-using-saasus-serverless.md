---
title: "SaaSus Platformを使った実装（サーバレス）"
slug: "implementing-authentication-using-saasus-serverless"
excerpt: "SaaSus Platformのサーバレス方式を使用したSaaSアプリケーションの実装ガイド"
hidden: false
createdAt: "Mon Jul 31 2023 03:24:01 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SaaSus Platformを使ったサーバレス方式でのSaaSアプリケーション実装例です。
認証、テナント管理、ユーザー管理など、SaaSに必要な機能をサーバレス環境で動かしながら学習できます。

### 主な特徴
- **サーバレス構成**: AWS Lambdaなどのサーバレスサービスを活用
- **React + TypeScript**: フロントエンドにReactを使用
- **JWT認証**: ブラウザのローカルストレージでトークン管理
- **CDK対応**: AWS CDKを使用したインフラ構築

## 実装方式について

このサンプルアプリケーションは、**サーバレス版**として実装されています。

### サーバレス版の特徴

バックエンドをサーバレスで構成する実装方式で、以下のような特徴があります：
- SaaSus Platformの認証情報となるトークン（JWT）を、ブラウザのローカルストレージに保管
- SaaS Platform利用者はJWTを使って本人確認を行う
- フロントエンドはReactで実装
- バックエンドはLambdaなどのサーバレスサービスを利用し実装

:::info
**フロントエンドの配置について**
このサンプルアプリでは、フロントエンドはローカル環境（`http://localhost:3000`）で動作します。実際の運用では、フロントエンドをS3 + CloudFrontなどの静的ホスティングサービスにデプロイすることも可能です。
:::

**処理フロー（ログイン〜ユーザ一覧表示）**

![サーバレス版の処理フロー](/ja/img/part-6/implementation-guide/implementing-authentication-using-saasus-serverless/image-01.png)

## 実装されている画面・機能一覧

### 認証関連画面

#### [`Callback.tsx`](https://github.com/saasus-platform/implementation-sample-front-react-serverless/blob/main/src/pages/Callback.tsx) - 認証後遷移先画面

- SaaSus Platformからの認証情報を受け取り
- JWTトークンをローカルストレージに保存
- ユーザーのロールに応じて適切な画面に自動遷移
- ※リダイレクト処理のため、ユーザーには表示されません

#### [`SelfSignUp.tsx`](https://github.com/saasus-platform/implementation-sample-front-react-serverless/blob/main/src/pages/SelfSignUp.tsx) - セルフサインアップ画面

- 新規ユーザーが自分でテナント作成
- テナント名の入力
- ユーザー属性・テナント属性の設定
- 属性タイプ別の入力フィールド（文字列、数値、真偽値、日付）

### ユーザー・テナント管理画面

#### [`TenantList.tsx`](https://github.com/saasus-platform/implementation-sample-front-react-serverless/blob/main/src/pages/TenantList.tsx) - テナント一覧画面

- 複数テナントに所属するユーザー向け
- テナント属性の表示（設定済み/未設定の表示）
- 各テナントのユーザー一覧画面への遷移

#### [`UserPage.tsx`](https://github.com/saasus-platform/implementation-sample-front-react-serverless/blob/main/src/pages/UserPage.tsx) - ユーザー一覧画面（メイン画面）

- **ログインユーザー情報表示**: テナント名、名前、メールアドレス、ロール
- **ユーザー一覧テーブル**: テナント内の全ユーザー表示
- **ユーザー属性表示**: カスタム属性の動的表示

## フロントエンド実装

### 認証後遷移先画面（Callback）

SaaSus Platformが生成するログイン画面からログインを実施すると、認証後遷移先で設定したURLが呼び出されます。

本実装サンプルを使って動作確認を行うためには、  
`http://localhost:3000/callback`　と設定してください。

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

### JWT取得API

以下のリンク先に、本APIの実装が含まれています。
関数名または定義を検索して、該当箇所をご確認ください。

- **TypeScript (Lambda)**: [`credentials.ts`](https://github.com/saasus-platform/implementation-sample-api-lambda/blob/main/lambda/auth/credentials.ts)

<Tabs>
<TabItem value="typescript" label="TypeScript">

```typescript
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { AuthClient } from 'saasus-sdk';
import {
  createSuccessResponse,
  createErrorResponse,
  createOptionsResponse,
  getQueryParameter,
  getHttpMethod,
  getReferer,
  getXSaaSusReferer,
  logRequest,
  logError,
  logSuccess,
} from '../../shared/utils';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  logRequest('credentials', event);

  // OPTIONSリクエスト（プリフライト）の処理
  if (getHttpMethod(event) === 'OPTIONS') {
    return createOptionsResponse();
  }

  // GETメソッドのみ許可
  if (getHttpMethod(event) !== 'GET') {
    return createErrorResponse('Method not allowed', 405);
  }

  try {
    // クエリパラメータから認証コードを取得
    const code = getQueryParameter(event.queryStringParameters, 'code');
    if (!code) {
      logError('credentials', 'Authorization code not found in query parameters');
      return createErrorResponse('Authorization code not found', 400);
    }

    // RefererとX-SaaSus-Refererヘッダーを取得
    const referer = getReferer(event.headers);
    const xSaaSusReferer = getXSaaSusReferer(event.headers);

    // SaaSus認証クライアントを初期化
    // @ts-ignore - AuthClientコンストラクタはrefererとxSaaSusRefererを受け取る
    const authClient = new AuthClient(referer, xSaaSusReferer);
    
    // 認証情報を取得
    const credentialsResponse = await authClient.credentialApi.getAuthCredentials(code);

    const credentials = credentialsResponse.data;
    logSuccess('credentials', 'Successfully retrieved credentials');

    // レスポンスにSet-Cookieヘッダーを追加
    const response = createSuccessResponse(credentials);
    
    // リフレッシュトークンをクッキーに設定
    if (credentials.refresh_token) {
      const maxAge = 30 * 24 * 60 * 60; // 30日
      response.headers = {
        ...response.headers,
        'Set-Cookie': `SaaSusRefreshToken=${credentials.refresh_token}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=${maxAge}`,
      };
    }

    return response;
  } catch (error) {
    logError('credentials', error);
    return createErrorResponse(
      'Failed to get credentials',
      500,
      error instanceof Error ? error.message : 'Unknown error'
    );
  }
};
```

</TabItem>
</Tabs>

### ユーザ情報取得API

以下のリンク先に、本APIの実装が含まれています。
関数名または定義を検索して、該当箇所をご確認ください。

- **TypeScript (Lambda)**: [`userinfo.ts`](https://github.com/saasus-platform/implementation-sample-api-lambda/blob/main/lambda/auth/userinfo.ts)

<Tabs>
<TabItem value="typescript" label="TypeScript">

```typescript
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { AuthClient } from 'saasus-sdk';
import {
  createSuccessResponse,
  createErrorResponse,
  createOptionsResponse,
  extractTokenFromHeader,
  getHttpMethod,
  getReferer,
  getXSaaSusReferer,
  logRequest,
  logError,
  logSuccess,
} from '../../shared/utils';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  logRequest('userinfo', event);

  // OPTIONSリクエスト（プリフライト）の処理
  if (getHttpMethod(event) === 'OPTIONS') {
    return createOptionsResponse();
  }

  // GETメソッドのみ許可
  if (getHttpMethod(event) !== 'GET') {
    return createErrorResponse('Method not allowed', 405);
  }

  try {
    // Authorizationヘッダーからトークンを取得
    const token = extractTokenFromHeader(event.headers);
    if (!token) {
      logError('userinfo', 'No valid authorization header found');
      return createErrorResponse('No valid authorization header found', 401);
    }

    // RefererとX-SaaSus-Refererヘッダーを取得
    const referer = getReferer(event.headers);
    const xSaaSusReferer = getXSaaSusReferer(event.headers);

    // SaaSus認証クライアントを初期化
    // @ts-ignore - AuthClientコンストラクタはrefererとxSaaSusRefererを受け取る
    const authClient = new AuthClient(referer, xSaaSusReferer);
    
    // ユーザー情報を取得
    const userInfoResponse = await authClient.userInfoApi.getUserInfo(token);
    const userInfo = userInfoResponse.data;

    logSuccess('userinfo', 'Successfully retrieved user info');
    return createSuccessResponse(userInfo);
  } catch (error) {
    logError('userinfo', error);
    return createErrorResponse(
      'Failed to get user info',
      500,
      error instanceof Error ? error.message : 'Unknown error'
    );
  }
};
```
</TabItem>
</Tabs>

### セルフサインアップAPI

以下のリンク先に、本APIの実装が含まれています。
関数名または定義を検索して、該当箇所をご確認ください。

- **TypeScript (Lambda)**: [`self-sign-up.ts`](https://github.com/saasus-platform/implementation-sample-api-lambda/blob/main/lambda/tenant/self-sign-up.ts)

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
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { AuthClient } from 'saasus-sdk';
import {
  CreateTenantUserParam,
  CreateTenantUserRolesParam,
  TenantProps,
} from 'saasus-sdk/dist/generated/Auth';
import {
  createSuccessResponse,
  createErrorResponse,
  createOptionsResponse,
  parseRequestBody,
  convertAttributeValues,
  getHttpMethod,
  getReferer,
  getXSaaSusReferer,
  logRequest,
  logError,
  logSuccess,
} from '../../shared/utils';
import { SelfSignUpRequest } from '../../shared/types';
import { getAuthenticatedUserInfo } from '../../shared/auth-utils';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  logRequest('self-sign-up', event);

  // OPTIONSリクエスト（プリフライト）の処理
  if (getHttpMethod(event) === 'OPTIONS') {
    return createOptionsResponse();
  }

  // POSTメソッドのみ許可
  if (getHttpMethod(event) !== 'POST') {
    return createErrorResponse('Method not allowed', 405);
  }

  try {
    // リクエストボディをパース
    const requestData = parseRequestBody<SelfSignUpRequest>(event.body);
    if (!requestData || !requestData.tenantName) {
      return createErrorResponse('Missing required fields', 400);
    }

    const { tenantName, tenantAttributeValues, userAttributeValues } = requestData;

    // 統一された認証処理
    const userInfo = await getAuthenticatedUserInfo(event.headers);

    // RefererとX-SaaSus-Refererヘッダーを取得
    const referer = getReferer(event.headers);
    const xSaaSusReferer = getXSaaSusReferer(event.headers);

    // SaaSus認証クライアントを初期化
    // @ts-ignore - AuthClientコンストラクタはrefererとxSaaSusRefererを受け取る
    const authClient = new AuthClient(referer, xSaaSusReferer);

    // テナント属性情報の取得と型変換
    const tenantAttributesResponse = await authClient.tenantAttributeApi.getTenantAttributes();
    const tenantAttributes = tenantAttributesResponse.data.tenant_attributes;
    const convertedTenantAttributeValues = convertAttributeValues(
      tenantAttributeValues || {},
      tenantAttributes
    );

    // テナントを作成
    const tenantProps: TenantProps = {
      name: tenantName,
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
      userAttributeValues || {},
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

    logSuccess('self-sign-up', `Successfully created tenant: ${tenantName}`);
    return createSuccessResponse({
      message: 'User successfully signed up to the tenant',
      tenantId: tenantId,
      tenantName: tenantName,
    });
  } catch (error) {
    logError('self-sign-up', error);
    
    // 認証エラーの場合は401を返す
    if (error instanceof Error && error.message.includes('authorization')) {
      return createErrorResponse('Authentication failed', 401, error.message);
    }
    
    return createErrorResponse(
      'Failed to sign up',
      500,
      error instanceof Error ? error.message : 'Unknown error'
    );
  }
};
```

</TabItem>
</Tabs>

### ユーザ一覧取得API

以下のリンク先に、本APIの実装が含まれています。
関数名または定義を検索して、該当箇所をご確認ください。

- **TypeScript (Lambda)**: [`users.ts`](https://github.com/saasus-platform/implementation-sample-api-lambda/blob/main/lambda/user/users.ts)

APIリクエストがSaaSus Platformにログインしたユーザからのものであることを確認するため、
ユーザ情報取得を実施してログイン確認を必ず行ってください

<Tabs>
<TabItem value="typescript" label="TypeScript">

```typescript
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { AuthClient } from 'saasus-sdk';
import {
  createSuccessResponse,
  createErrorResponse,
  createOptionsResponse,
  getQueryParameter,
  getHttpMethod,
  getReferer,
  getXSaaSusReferer,
  logRequest,
  logError,
  logSuccess,
} from '../../shared/utils';
import { getAuthenticatedUserInfo, belongingTenant } from '../../shared/auth-utils';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  logRequest('users', event);

  // OPTIONSリクエスト（プリフライト）の処理
  if (getHttpMethod(event) === 'OPTIONS') {
    return createOptionsResponse();
  }

  // GETメソッドのみ許可
  if (getHttpMethod(event) !== 'GET') {
    return createErrorResponse('Method not allowed', 405);
  }

  try {
    // 統一された認証処理
    const userInfo = await getAuthenticatedUserInfo(event.headers);

    if (!userInfo.tenants) {
      return createErrorResponse('No tenants found for the user', 400);
    }

    // クエリパラメータからテナントIDを取得
    const tenantId = getQueryParameter(event.queryStringParameters, 'tenant_id');
    if (!tenantId) {
      return createErrorResponse('TenantId not found', 400);
    }

    // ユーザーがテナントに所属しているかチェック
    if (!belongingTenant(userInfo.tenants, tenantId)) {
      return createErrorResponse('Tenant that does not belong', 403);
    }

    // RefererとX-SaaSus-Refererヘッダーを取得
    const referer = getReferer(event.headers);
    const xSaaSusReferer = getXSaaSusReferer(event.headers);

    // SaaSus認証クライアントを初期化
    // @ts-ignore - AuthClientコンストラクタはrefererとxSaaSusRefererを受け取る
    const authClient = new AuthClient(referer, xSaaSusReferer);
    
    // テナントユーザー一覧を取得
    const usersResponse = await authClient.tenantUserApi.getTenantUsers(tenantId);
    const users = usersResponse.data.users;

    logSuccess('users', `Successfully retrieved ${users?.length || 0} users`);
    return createSuccessResponse(users);
  } catch (error) {
    logError('users', error);
    
    // 認証エラーの場合は401を返す
    if (error instanceof Error && error.message.includes('authorization')) {
      return createErrorResponse('Authentication failed', 401, error.message);
    }
    
    return createErrorResponse(
      'Failed to get users',
      500,
      error instanceof Error ? error.message : 'Unknown error'
    );
  }
};
```

</TabItem>
</Tabs>

## セットアップ手順

### 前提条件
- **Node.js**: 16以上
- **AWS CLI**: 設定済み
- **SaaSus Platform**: アカウントとプロジェクト設定

### セットアップ手順

#### 1. SaaSus Platformの設定
1. SaaS開発コンソールで認証後遷移先URLを設定（`http://localhost:3000/callback`）
2. 必要な設定値を取得：
   - ログイン画面のURL
   - APIキー等の認証情報

#### 2. バックエンドのデプロイ（Lambda使用）

##### 2.1. AWS認証情報設定
```bash
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"
# 一時的な認証情報を使用する場合は以下も設定
# export AWS_SESSION_TOKEN="your-session-token"
```

##### 2.2. バックエンドのセットアップ
```bash
# リポジトリのクローン
git clone https://github.com/saasus-platform/implementation-sample-api-lambda.git
cd implementation-sample-api-lambda

# 依存関係のインストール
npm install

# SaaSus環境変数設定
cp .env.example .env
# .envファイルにSaaSusの環境変数を設定
```

##### 2.3. デプロイ
```bash
./deploy.sh
```

#### 3. フロントエンドのセットアップ

##### 3.1. AWS認証情報設定
```bash
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"
# 一時的な認証情報を使用する場合は以下も設定
# export AWS_SESSION_TOKEN="your-session-token"
```

##### 3.2. フロントエンドのインストール
```bash
# リポジトリのクローン
git clone https://github.com/saasus-platform/implementation-sample-front-react-serverless.git
cd implementation-sample-front-react-serverless

# 依存関係のインストール
npm install
```

##### 3.3. 環境変数設定
```bash
# Lambda URLの設定
./scripts/setup-lambda-urls.sh
```

生成された `.env.production` ファイルを `.env` にコピーし、`REACT_APP_LOGIN_URL` を設定：

```env
REACT_APP_LOGIN_URL=https://auth.xxxxxxxxxx.com
```

##### 3.4. 起動
```bash
npm start
```

アプリは `http://localhost:3000` で起動します。

#### 4. 動作確認
1. [フロントエンド](http://localhost:3000)にアクセス
2. ログイン機能の動作確認
3. 各機能の動作確認

詳細なセットアップ手順は各リポジトリのREADMEをご参照ください：
- **フロントエンド**: [セットアップ手順](https://github.com/saasus-platform/implementation-sample-front-react-serverless/blob/main/README.md)
- **バックエンド**: [セットアップ手順](https://github.com/saasus-platform/implementation-sample-api-lambda/blob/main/README.md)

### その他の実装方式
APIサーバ版の実装については、以下のドキュメントをご参照ください：
- [サンプルアプリケーション概要](/docs/part-6/implementation-guide/sample-application/overview)
