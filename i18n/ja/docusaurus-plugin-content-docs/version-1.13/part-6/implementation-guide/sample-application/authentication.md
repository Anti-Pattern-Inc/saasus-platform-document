---
title: "認証フローの実装"
slug: "authentication"
excerpt: "SaaSus PlatformのAPIサーバ方式を使用した認証フローの実装ガイド"
hidden: false
createdAt: "Sun Aug 06 2023 02:41:08 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 09 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
---
サンプルアプリの認証機能を題材に、SaaSus Platform APIサーバ版での認証フローの実装方法を解説します。

:::info
実装方式の比較や全体的な処理フローについては、[サンプルアプリ概要](/docs/part-6/implementation-guide/sample-application/overview)をご参照ください。
:::

## フロントエンド実装

### 認証後遷移先画面（Callback）

- [Callback.tsx](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/Callback.tsx)

SaaSus Platformが生成するログイン画面からログインを実施すると、認証後遷移先で設定したURLが呼び出されます。

本実装サンプルを使って動作確認を行うためには、  
`http://localhost:3000/callback`　と設定してください。

![](/ja/img/part-6/implementation-guide/sample-application/authentication/image-02.png)

認証後遷移先にはクエリパラメータ(code=xxxxx)で、認証情報取得に必要な一時コードが渡される仕様となってます。一時コードを使ってJWTを取得、ローカルストレージに保存する実装を行ってください。

#### 認証後の画面遷移ロジック

サンプルアプリでは、JWT取得後にユーザー情報を確認し、以下のロジックで適切な画面に遷移させています：

1. **テナント未所属の場合**: セルフサインアップ画面へ遷移
2. **複数テナント所属の場合**: テナント一覧画面へ遷移
3. **単一テナント所属の場合**: ユーザー一覧画面（メイン画面）へ遷移

この遷移ロジックにより、ユーザーの状況に応じて最適な画面を表示できます。

### セルフサインアップ画面

- [SelfSignUp.tsx](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/SelfSignUp.tsx)

ユーザがログインしていることのチェックをする必要があるので、ユーザ情報取得のAPIをコールしログインしていることを確認します。  
APIコール時にはローカルストレージに保存したJWTを利用します。  
ユーザ情報が取得出来ることにより、ユーザがログイン状態であることを確認できます。

セルフサインアップの処理は、セルフサインアップの要否に合わせて実装します。  
セルフサインアップを使わない場合、セルフサインアップ用の画面は不要となります。

セルフサインアップを使う場合、初回ログイン時のみサインアップ用の処理を実行することになります。  
初回ログインかどうかの判断は、ログインユーザがテナントに紐づいているかで判断できます。

### ユーザ一覧画面（トップページ）

- [UserPage.tsx](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/UserPage.tsx)

ユーザー一覧画面では、認証済みユーザーの情報とテナント内の全ユーザーを表示します。この画面は、ユーザー管理の中心となる画面です。

## バックエンド実装

### JWT取得API

以下のリンク先に、本APIの実装が含まれています。
関数名または定義を検索して、該当箇所をご確認ください。

- **Go (Echo)**: [`getCredentials`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`get_credentials`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`getCredentials`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapGet("/credentials"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`GetCredentials`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

### ユーザ情報取得API

以下のリンク先に、本APIの実装が含まれています。
関数名または定義を検索して、該当箇所をご確認ください。

- **Go (Echo)**: [`getMe`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`get_user_info`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`getMe`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapGet("/userinfo"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`GetUserInfo`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

このAPIは内部でSaaSus APIの[ユーザ情報取得](https://docs.saasus.io/ja/docs/reference/auth-api#tag/userInfo)を呼び出しています。レスポンスデータの詳細な活用方法については、[SaaSus API ユーザ情報取得 レスポンスデータ](#saasus-api-ユーザ情報取得-レスポンスデータ)をご参照ください。

### セルフサインアップAPI

以下のリンク先に、本APIの実装が含まれています。
関数名または定義を検索して、該当箇所をご確認ください。

- **Go (Echo)**: [`selfSignup`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`self_signup`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`selfSignUp`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapPost("/self_sign_up"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`SelfSignUp`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

APIリクエストがSaaSus Platformにログインしたユーザからのものであることを確認するため、  
ユーザ情報取得を実施してログイン確認を必ず行ってください

セルフサインアップ処理は以下の流れになります  
前提）セルフサインアップしたユーザが新規テナントの管理者となる場合

a. テナント作成  
b. ログインユーザを作成したテナントに紐づけ  
c. ログインユーザをテナントの管理者に設定

### ユーザ一覧取得API

以下のリンク先に、本APIの実装が含まれています。
関数名または定義を検索して、該当箇所をご確認ください。

- **Go (Echo)**: [`getUsers`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`get_tenant_users`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`getUsers`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapGet("/users"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`GetUsers`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

APIリクエストがSaaSus Platformにログインしたユーザからのものであることを確認するため、
ユーザ情報取得を実施してログイン確認を必ず行ってください

## SaaSus API ユーザ情報取得 レスポンスデータ

[ユーザ情報取得API](https://docs.saasus.io/ja/docs/reference/auth-api#tag/userInfo)のレスポンスには、テナント情報（tenants）、環境情報（envs）、役割情報（roles）がそれぞれ配列として含まれており、
これらの情報の処理方法を理解することは、画面遷移ロジックやアクセス制御を実装する上で重要です。

**tenants配列：**  
　お客様のSaaSの設計において、  
　1ユーザ1テナント固定の場合は、`tenants[0]`固定とする。  
　1ユーザ複数テナント所属の場合は、どのテナントとして利用するのか判断が必要。  
　例）複数テナントに紐づいているユーザは、ログイン後にテナント選択画面が表示されテナントを選択する。  

**envs配列：**  
　id(name)【1(dev)、2(stg)、3(prod)】  
　dev、stg、prodはお客様のSaaSの環境を指しているものではありません。  
　　例）お客様のSaaSの本番環境の中で、サンドボックスとして利用者がテストユーザを使う場合に、1(dev)、2(stg)を利用します。通常は3(prod)を利用します。

**roles配列：**  
　お客様のSaaSの設計において、  
　1ユーザ1ロールの場合は、`roles[0]`固定とする  
　1ユーザ複数ロールの場合は、すべてのロールを確認する実装が必要。  
　　例）一般ユーザかつ管理者という2つの権限付与が可能な設計の場合、  
　　　管理者のみ表示可能な管理画面を表示する際、すべてのロールを参照する実装が必要です。

