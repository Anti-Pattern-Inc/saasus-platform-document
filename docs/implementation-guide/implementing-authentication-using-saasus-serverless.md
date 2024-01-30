---
title: "SaaSus Platformを使った実装（サーバレス）"
slug: "implementing-authentication-using-saasus-serverless"
excerpt: ""
hidden: false
createdAt: "Mon Jul 31 2023 03:24:01 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

バックエンドをサーバレスで構成する場合、以下のような実装が必要となります  
・SaaSusの認証情報となるトークン（JWT）を、ブラウザのローカルストレージに保管  
・SaaS利用者はJWTを使って本人確認を行う  
・フロントエンドはReact、Vue.jsなどで実装  
・バックエンドはLambdaなどのサーバレスサービスを利用し実装

# フロー（JWT取得〜テナントオンボーディング）

![](/img/metering-api-sample/image-01.png)

# 実装サンプル

## １．フロントエンド実装

### １．１．実装サンプルの説明

#### １．１．１．認証後遷移先画面

SaaSusが生成するログイン画面からログインを実施すると、認証後遷移先で設定したURLが呼び出されます。

本実装サンプルを使って動作確認を行うためには、  
`http://localhost:3000/callback`　と設定してください。

![](/img/metering-api-sample/image-02.png)

認証後遷移先にはクエリパラメータ(code=xxxxx)で、認証情報取得に必要な一時コードが渡される仕様となってます。一時コードを使ってJWTを取得、ローカルストレージに保存する実装を行ってください。

- <a href="https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/Callback.tsx" target="_blank">Reactの実装サンプル</a>

#### １．１．２．テナントオンボーディング画面

ユーザがログインしていることのチェックをする必要がありますので、以下のように実装してください。  
`jwttoken`にはローカルストレージに保存したJWTを設定します。  
dataが取得出来ることでユーザがログインしていることを確認できます。

ログインが確認できたら、画面自体はセルフサインアップの要否に合わせて実装してください。  
　セルフサインアップ有効：テナントオンボーディング用の画面を実装  
　セルフサインアップ無効：ログイン後に表示する画面を実装


<Tabs>
<TabItem value="jsx" label="React">

```jsx
try {
  const jwtToken = window.localStorage.getItem('SaaSusIdToken');
  const apiConfig = new Configuration({
    accessToken: jwtToken || 'dummyToken',
    basePath: 'https://xxxxx.lambda-url.ap-northeast-1.on.aws',
  });

  const userInfoApi = new UserInfoApi(apiConfig);
  const { data } = await userInfoApi.getLoginUser();
  return data;
} catch (e: any) {
  return thunkAPI.rejectWithValue(e);
}

```

</TabItem>
</Tabs>

#### １．１．３．ユーザ一覧画面（トップページ）

- <a href="https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/UserPage.tsx" target="_blank">Reactの実装サンプル</a>

### １．２．実装サンプルの使い方

- <a href="https://github.com/saasus-platform/implementation-sample-front-react/blob/main/README.md" target="_blank">React</a>

## ２．バックエンド実装

### ２．１．実装サンプルの説明

#### ２．１．１．JWT取得API

<Tabs>
<TabItem value="typescript" label="TypeScript">

```typescript
import { AuthClient } from "saasus-sdk";

export const handler = async (event: any): Promise<any> => {
  const authClient = new AuthClient();

  const code = event.queryStringParameters.code;

  const res = await authClient.credentialApi.getAuthCredentials(code);
  const token = res.data.id_token;

  return {
    statusCode: res.status,
    body: JSON.stringify({
      id_token: await token,
    }),
  };
};
```

</TabItem>
</Tabs>

### ２．１．２．ユーザ情報取得API

<Tabs>
<TabItem value="typescript" label="TypeScript">

```typescript
import { AuthClient } from "saasus-sdk";

export const handler = async (event: any): Promise<any> => {
  const authClient = new AuthClient();

  const token = event.headers.authorization.replace("Bearer ", "");
  const userinfo = await authClient.userInfoApi.getUserInfo(token);

  let response = "";
  if (userinfo.data.tenants.length == 0) {
    response = JSON.stringify({
      id: await userinfo.data.id,
      email: await userinfo.data.email,
      completed_sign_up: false,
    });
  } else {
    response = JSON.stringify({
      completed_sign_up: true,
    });
  }

  return {
    statusCode: userinfo.status,
    body: response,
  };
};
```
</TabItem>
</Tabs>

### ２．１．３．テナントオンボーディングAPI

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
import { AuthClient } from "saasus-sdk";

export const handler = async (event: any): Promise<any> => {
  const body = JSON.parse(event.body);

  const authClient = new AuthClient();

  const token = event.headers.authorization.replace("Bearer ", "");
  const userinfo = await authClient.userInfoApi.getUserInfo(token);

  // テナント作成
  // テナント名：画面で入力されたテナント名
  // バックオフィススタッフemail：ログインしている人のメールアドレス
  // ConnectインスタンスID：画面で入力されたConnectインスタンスID
  // AWSアカウントID：画面で入力されたAWSアカウントID
  // IAMロールARN：画面で入力されたIAMロールARN
  const tenantProps: TenantProps = {
    name: body.tenant_name,
    back_office_staff_email: userinfo.data.email,
    attributes: {
      connect_instance_id: body.connect_instance_id,
      aws_account_id: body.aws_account_id,
      iam_role_arn_for_cdk: body.iam_role_arn_for_cdk,
    },
  };
  const createTenant = await authClient.tenantApi.createTenant(tenantProps);

  // テナントにユーザ紐付け
  // ConnectユーザID：画面で入力されたConnectユーザID
  const createTenantUserParam: CreateTenantUserParam = {
    attributes: { connect_user_id: body.connect_user_id },
    email: userinfo.data.email,
  };
  await authClient.tenantUserApi.createTenantUser(
    createTenant.data.id,
    createTenantUserParam
  );

  // ロール設定
  const createTenantUserRolesParam: CreateTenantUserRolesParam = {
    role_names: ["admin"],
  };
  await authClient.tenantUserApi.createTenantUserRoles(
    createTenant.data.id,
    userinfo.data.id,
    3,
    createTenantUserRolesParam
  );

  return {
    statusCode: userinfo.status,
    body: "",
  };
};
```

</TabItem>
</Tabs>

#### ２．１．４．ユーザ一覧取得API

APIリクエストがSaaSus Platformにログインしたユーザからのものであることを確認するため、  
ユーザ情報取得を実施してログイン確認を必ず行ってください

- Reactの実装サンプル（準備中）

### ２．２．実装サンプル

- React（準備中）
