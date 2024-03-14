---
sidebar_position: 1
title: "サンプルアプリケーションの準備"
slug: "prepare-the-sample-application"
excerpt: "シンプルなWebチャットアプリケーションをSaaS化してみましょう"
hidden: false
createdAt: "Wed Jan 11 2023 03:12:42 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

このチュートリアルでは、普通のWebアプリケーションとして作成された簡易チャットシステムを、SaaSus Platformを使用してSaaS（Software as a Service）化します。

## サンプルアプリケーションの準備

まず、今回のサンプルアプリケーションを起動します。

この簡易チャットシステムは、PHP 8とLaravel 9、そしてPostgreSQL 13をバックエンドに使用しています。

フロントエンドは、Laravel with BladeとNext.jsで作成されたSPA（Single Page Application）の2つが含まれています。

前提条件<br/>
- PHP 8がインストールされていること。<br/>
- Composerがインストールされていること。<br/>
- PostgreSQL 13がインストールされ、適切に設定されていること。<br/>
- Node.jsおよびnpmがインストールされていること。

まずは、下記リポジトリからサンプルアプリケーションを clone してきます。

[https://github.com/saasus-platform/sampleapp-basic-chat](https://github.com/saasus-platform/sampleapp-basic-chat)

clone後、下記ディレクトリに移動し、コマンドを実行します。  
※ PHP の場合`sampleapp-basic-chat/php/laravel`配下  
※ Next.js の場合`sampleapp-basic-chat/node/express`配下

```shell
./init.sh
```

アプリケーションがローカルで起動されました。

起動したら、以下の URL にアクセスして試してみましょう。

Blade 版

URL: [http://localhost/board](http://localhost/board)
認証用 Email: [user@example.com](mailto:user@example.com)  
Password: password

![サンプル](/ja/img/tutorial/prepare-the-sample-application/prepare-the-sample-application-01.png)

Next.js 版

URL: [http://localhost:80/login/](http://localhost:80/login/)
認証用 Email: [user@example.com](mailto:user@example.com)  
Password: password

※ Next.js 版は、ビルドに数分掛かる可能性があります。表示できない場合は、数分待ってから再度表示してみてください。

![サンプル](/ja/img/tutorial/prepare-the-sample-application/prepare-the-sample-application-02.png)

ユーザが自由に投稿できるように、現在はLaravelの標準認証モジュールを使用してユーザを識別しています。

しかし、Laravelの標準認証モジュールはセキュリティが強固とは言い難く、また、このシンプルなWebアプリケーションにはテナントの概念や役割の概念、さらには料金プランなどが存在しません。

このようなシンプルなWebアプリケーションをSaaS化していきましょう。

※チュートリアル開始時点と完了時点でのソースコードの差分は  
PHP  
[https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files](https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files)

Next.js  
[https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files](https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files)

こちらになりますので、参考にしてみてください。
