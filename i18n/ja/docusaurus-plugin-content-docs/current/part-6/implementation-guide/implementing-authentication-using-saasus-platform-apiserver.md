---
title: "SaaSus Platformを使った実装（APIサーバ）"
slug: "implementing-authentication-using-saasus-platform-apiserver"
excerpt: ""
hidden: false
createdAt: "Sun Aug 06 2023 02:41:08 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Jan 17 2024 08:25:52 GMT+0000 (Coordinated Universal Time)"
---
バックエンドをAPIサーバで構成する場合、以下のような実装が必要となります  
・SaaSus Platformの認証情報となるトークン（JWT）を、ブラウザのローカルストレージに保管  
・SaaS Platform利用者はJWTを使って本人確認を行う  
・フロントエンドはReactなどで実装  
・バックエンドのAPIサーバはPHP / TypeScript / Go / Python / C# / JAVAなどで実装

# 処理フロー（ログイン〜ユーザ一覧表示）

![](/ja/img/part-6/implementation-guide/implementing-authentication-using-saasus-platform-apiserver/SaaSus_PlatformAPI.png)


# 実装サンプル

## １．フロントエンド実装

### １．１．実装サンプルの説明

#### １．１．１．認証後遷移先画面

- [Reactの実装サンプル](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/Callback.tsx)

SaaSus Platformが生成するログイン画面からログインを実施すると、認証後遷移先で設定したURLが呼び出されます。

本実装サンプルを使って動作確認を行うためには、  
`http://localhost:3000/callback`　と設定してください。

![](/ja/img/part-6/implementation-guide/implementing-authentication-using-saasus-platform-apiserver/image-02.png)

認証後遷移先にはクエリパラメータ(code=xxxxx)で、認証情報取得に必要な一時コードが渡される仕様となってます。一時コードを使ってJWTを取得、ローカルストレージに保存する実装を行ってください。

#### １．１．２．セルフサインアップ画面

- [Reactの実装サンプル](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/SelfSignUp.tsx)

ユーザがログインしていることのチェックをする必要があるので、ユーザ情報取得のAPIをコールしログインしていることを確認します。  
APIコール時にはローカルストレージに保存したJWTを利用します。  
ユーザ情報が取得出来ることにより、ユーザがログイン状態であることを確認できます。

セルフサインアップの処理は、セルフサインアップの要否に合わせて実装します。  
セルフサインアップを使わない場合、セルフサインアップ用の画面は不要となります。

セルフサインアップを使う場合、初回ログイン時のみサインアップ用の処理を実行することになります。  
初回ログインかどうかの判断は、ログインユーザがテナントに紐づいているかで判断できます。

#### １．１．３．ユーザ一覧画面（トップページ）

- [Reactの実装サンプル](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/UserPage.tsx)

エンドポイント /userinfo から取得しているユーザ情報の利用について

tenants配列：  
　お客様のSaaSの設計において、  
　1ユーザ1テナント固定の場合は、`tenants[0]`固定とする。  
　1ユーザ複数テナント所属の場合は、どのテナントとして利用するのか判断が必要。  
　　例）複数テナントに紐づいているユーザは、ログイン後にテナント選択画面が表示されテナントを選択する。

envs配列：  
　id(name)【1(dev)、2(stg)、3(prod)】  
　dev、stg、prodはお客様のSaaSの環境を指しているものではありません。  
　　例）お客様のSaaSの本番環境の中で、サンドボックスとして利用者がテストユーザを使う場合に、1(dev)、2(stg)を利用します。通常は3(prod)を利用します。

roles配列：  
　お客様のSaaSの設計において、  
　1ユーザ1ロールの場合は、`roles[0]`固定とする  
　1ユーザ複数ロールの場合は、すべてのロールを確認する実装が必要。  
　　例）一般ユーザかつ管理者という2つの権限付与が可能な設計の場合、  
　　　　管理者のみ表示可能な管理画面を表示する際、すべてのロールを参照する実装が必要です。

### １．２．実装サンプルの使い方

- [React](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/README.md)

## ２．バックエンド実装

### ２．１．実装サンプルの説明

#### ２．１．１．JWT取得API

以下のリンク先に、本APIの実装が含まれています。  
関数名または定義を検索して、該当箇所をご確認ください。

- **Go (Echo)**: [`getCredentials`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`get_credentials`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`getCredentials`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapGet("/credentials"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`GetCredentials`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

#### ２．１．２．ユーザ情報取得API

以下のリンク先に、本APIの実装が含まれています。  
関数名または定義を検索して、該当箇所をご確認ください。

- **Go (Echo)**: [`getMe`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`get_user_info`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`getMe`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapGet("/userinfo"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`GetUserInfo`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

#### 

#### ２．１．３．セルフサインアップAPI

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

#### ２．１．４．ユーザ一覧取得API

以下のリンク先に、本APIの実装が含まれています。  
関数名または定義を検索して、該当箇所をご確認ください。

- **Go (Echo)**: [`getUsers`](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go)
- **Python (FastAPI)**: [`get_tenant_users`](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py)
- **Java (Spring)**: [`getUsers`](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java)
- **C# (.NET 8)**: [`app.MapGet("/users"`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet8/Program.cs)
- **C# (.NET Framework 4.8)**: [`GetUsers`](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/SampleWebAppDotNet48/Controllers/MainController.cs)

#### 

APIリクエストがSaaSus Platformにログインしたユーザからのものであることを確認するため、  
ユーザ情報取得を実施してログイン確認を必ず行ってください

### ２．２．実装サンプルの使い方

- [Go(echo)](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/README.md)
- [Python(FastAPI)](https://github.com/saasus-platform/implementation-sample-api-python)
- [Java(Spring)](https://github.com/saasus-platform/implementation-sample-api-java)
- [C#(.NET 8)](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/README.md)
- [C#(.NET Framework 4.8)](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/README.md)

#### 
