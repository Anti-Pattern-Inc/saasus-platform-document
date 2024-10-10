---
sidebar_position: 1
title: "サンプルアプリケーションの準備"
slug: "prepare-the-sample-application"
excerpt: "シンプルなWebチャットアプリケーションをSaaS化してみましょう"
hidden: false
createdAt: "Wed Jan 11 2023 03:12:42 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

このチュートリアルでは、文字列の投稿ができるWebアプリケーションとして作成された簡易チャットシステムを、SaaSus Platformを使用してSaaS（Software as a Service）化します。

## サンプルアプリケーションの準備

まず、今回のサンプルアプリケーションを起動します。

<<<<<<< HEAD
この簡易チャットシステムは、PHP 8とLaravel 9、そしてPostgreSQL 13をバックエンドに使用しています。
=======
:::info

AWS の EC2 や Cloud9 を利用して、Blade 版の動作環境を作成する場合は、[サンプルアプリケーションの準備(EC2)](https://docs.saasus.io/ja/docs/tutorial/prepare-the-sample-application-ec2/)の手順で行ってください。

:::

この簡易チャットシステムは、バックエンドは PHP8 + Laravel9 + PostgreSQL13 にて作成されています。  
フロントエンドは Laravel with Blade にて作成されたものと、 Next.js にて SPA として作成されたものの２種類が入っています。
>>>>>>> main

フロントエンドは、Laravel with BladeとNext.jsで作成されたSPA（Single Page Application）の2つが含まれています。

前提条件<br/>
- PHP 8がインストールされていること。<br/>
- Composerがインストールされていること。<br/>
- PostgreSQL 13がインストールされ、適切に設定されていること。<br/>
- Node.jsおよびnpmがインストールされていること。

まずは、下記リポジトリからサンプルアプリケーションを clone してきます。

```git
git clone https://github.com/saasus-platform/sampleapp-basic-chat
```

clone後、下記ディレクトリに移動し、コマンドを実行します。  
※ PHP の場合`sampleapp-basic-chat/php/laravel`配下  
※ Next.js の場合`sampleapp-basic-chat/node/express`配下

```shell
./init.sh
```

アプリケーションがローカルで起動されました。

起動したら、以下の URL にアクセスして試してみましょう。

Blade 版

URL: [http://localhost/board](http://localhost/board)<br/>
認証用 Email: [user@example.com](mailto:user@example.com)<br/>
Password: password

![サンプル](/ja/img/tutorial/prepare-the-sample-application/prepare-the-sample-application-01.png)

Next.js 版

URL: [http://localhost:80/login/](http://localhost:80/login/)<br/>
認証用 Email: [user@example.com](mailto:user@example.com)<br/>
Password: password

:::caution
Next.js 版は、ビルドに数分掛かる可能性があります。表示できない場合は、数分待ってから再度表示してみてください。
:::

![サンプル](/ja/img/tutorial/prepare-the-sample-application/prepare-the-sample-application-02.png)

ユーザが自由に投稿できるように、現在はLaravelの標準認証モジュールを使用してユーザを識別しています。

SaaSus Platformを導入しユーザー認証をSaaSus Platform経由で行うことにより、ユーザーの識別やユーザーに紐づいているテナント情報の取得を簡単に行うことができるようになります。

テナントのデータ設計や情報管理をSaaSアプリケーション側が行う必要はありません。

また、料金プランもSaaSus Platformで設定を行えば、すぐに利用ができるようになります。

SaaSus Platformが持つ情報は、APIを経由してSaaSアプリケーションでも登録・取得・更新ができるようになります。

このようなシンプルなWebアプリケーションをSaaS化していきましょう。

※チュートリアル開始時点と完了時点でのソースコードの差分は以下を参考にしてください。<br/>
PHP  
[https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files](https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files)

Next.js  
[https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files](https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files)
