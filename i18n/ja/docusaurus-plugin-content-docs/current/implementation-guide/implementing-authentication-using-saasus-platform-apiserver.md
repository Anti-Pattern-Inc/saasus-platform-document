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
・フロントエンドはReact、Vue.jsなどで実装  
・バックエンドのAPIサーバはPHP / TypeScript / Go / Python / C# / JAVAなどで実装

# 処理フロー（ログイン〜ユーザ一覧表示）

![](/img/metering-api-sample/SaaSus_PlatformAPI.drawio.svg)


# 実装サンプル

## １．フロントエンド実装

### １．１．実装サンプルの説明

#### １．１．１．認証後遷移先画面

- <a href="https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/Callback.tsx" target="_blank">Reactの実装サンプル</a>
- <a href="https://github.com/saasus-platform/implementation-sample-front-vue/blob/main/src/views/Callback.vue" target="_blank">Vue.jsの実装サンプル</a>

SaaSus Platformが生成するログイン画面からログインを実施すると、認証後遷移先で設定したURLが呼び出されます。

本実装サンプルを使って動作確認を行うためには、  
`http://localhost:3000/callback`　と設定してください。

![](/img/metering-api-sample/image-02.png)

認証後遷移先にはクエリパラメータ(code=xxxxx)で、認証情報取得に必要な一時コードが渡される仕様となってます。一時コードを使ってJWTを取得、ローカルストレージに保存する実装を行ってください。

#### １．１．２．セルフサインアップ画面

- Reactの実装サンプル（準備中）

ユーザがログインしていることのチェックをする必要があるので、ユーザ情報取得のAPIをコールしログインしていることを確認します。  
APIコール時にはローカルストレージに保存したJWTを利用します。  
ユーザ情報が取得出来ることにより、ユーザがログイン状態であることを確認できます。

セルフサインアップの処理は、セルフサインアップの要否に合わせて実装します。  
セルフサインアップを使わない場合、セルフサインアップ用の画面は不要となります。

セルフサインアップを使う場合、初回ログイン時のみサインアップ用の処理を実行することになります。  
初回ログインかどうかの判断は、ログインユーザがテナントに紐づいているかで判断できます。

#### １．１．３．ユーザ一覧画面（トップページ）

- <a href="https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/UserPage.tsx" target="_blank">Reactの実装サンプル</a>
- <a href="https://github.com/saasus-platform/implementation-sample-front-vue/blob/main/src/views/UserPage.vue" target="_black">Vue.jsの実装サンプル</a>

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

- <a href="https://github.com/saasus-platform/implementation-sample-front-react/blob/main/README.md" target="_blank">React</a>
- <a href="https://github.com/saasus-platform/implementation-sample-front-vue/blob/main/README.md" target="_blank">Vue.js</a>

## ２．バックエンド実装

### ２．１．実装サンプルの説明

#### ２．１．１．JWT取得API

- <a href="https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go#L82" target="_blank">Go(echo)の実装サンプル</a>  
  `e.GET("/credentials", getCredentials)`
- <a href="https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py#L48" target="_blank">Python(FastAPI)の実装サンプル</a>  
  `@app.get("/credentials")`
- <a href="https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java#L36" target="_blank">Java(Maven)の実装サンプル</a>  
  `@GetMapping(value = "/credentials", produces = "application/json")`

#### ２．１．２．ユーザ情報取得API

- <a href="https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go#L144" target="_black">Go(echo)の実装サンプル</a>  
  `e.GET("/userinfo", getMe, authMiddleware)`
- <a href="https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py#L53" target="_blank">Python(FastAPI)の実装サンプル</a>  
  `@app.get("/userinfo")`
- <a href="https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java#L82" target="_blank">Java(Maven)の実装サンプル</a>  
  `@GetMapping(value = "/userinfo", produces = "application/json")`

#### 

#### ２．１．３．セルフサインアップAPI

- Go(echo)の実装サンプル（準備中）
- Pythonの実装サンプル（準備中）

APIリクエストがSaaSus Platformにログインしたユーザからのものであることを確認するため、  
ユーザ情報取得を実施してログイン確認を必ず行ってください

セルフサインアップ処理は以下の流れになります  
前提）セルフサインアップしたユーザが新規テナントの管理者となる場合

a. テナント作成  
b. ログインユーザを作成したテナントに紐づけ  
c. ログインユーザをテナントの管理者に設定

#### ２．１．４．ユーザ一覧取得API

- <a href="https://github.com/saasus-platform/implementation-sample-api-go/blob/main/main.go#L156" target="_blank">Go(echo)の実装サンプル</a>  
  `e.GET("/users", getUsers, authMiddleware)`
- <a href="https://github.com/saasus-platform/implementation-sample-api-python/blob/main/main.py#L58" target="_blank">Python(FastAPI)の実装サンプル</a>  
  `@app.get("/users")`
- <a href="https://github.com/saasus-platform/implementation-sample-api-java/blob/main/src/main/java/implementsample/controller/SampleController.java#L82" target="_blank">Java(Maven)の実装サンプル</a>  
  `@GetMapping(value = "/users", produces = "application/json")`

#### 

APIリクエストがSaaSus Platformにログインしたユーザからのものであることを確認するため、  
ユーザ情報取得を実施してログイン確認を必ず行ってください

### ２．２．実装サンプルの使い方

- <a href="https://github.com/saasus-platform/implementation-sample-api-go/blob/main/README.md" target="_blank">Go(echo)</a>

- <a href="https://github.com/saasus-platform/implementation-sample-api-python" target="_blank">Python(FastAPI)</a>

- <a href="https://github.com/saasus-platform/implementation-sample-api-java"
  target="_blank">Java(Maven)</a>

#### 
