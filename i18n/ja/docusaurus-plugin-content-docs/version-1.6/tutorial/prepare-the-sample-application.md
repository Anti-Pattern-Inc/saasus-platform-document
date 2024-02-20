---
sidebar_position: 1
title: "サンプルアプリケーションの準備"
slug: "prepare-the-sample-application"
excerpt: "シンプルなWebチャットアプリケーションをSaaS化してみましょう"
hidden: false
createdAt: "Wed Jan 11 2023 03:12:42 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

シンプルな Web チャットアプリケーションを SaaS 化してみましょう

このチュートリアルでは、いわゆる普通の Web アプリケーションとして作成されている簡易チャットシステムを、SaaSus Platform を利用して SaaS 化していきます。

## サンプルアプリケーションの準備

まず、今回のサンプルアプリケーションを起動してみましょう！

この簡易チャットシステムは、バックエンドは PHP8 + Laravel9 + PostgreSQL13 にて作成されています。  
フロントエンドは Laravel with Blade にて作成されたものと、 Next.js にて SPA として作成されたものの２種類が入っています。

まずは、こちらを動作確認してみましょう！

[https://github.com/saasus-platform/sampleapp-basic-chat](https://github.com/saasus-platform/sampleapp-basic-chat)

上記リポジトリを clone したディレクトリにて、  
※ PHP の場合`sampleapp-basic-chat/php/laravel`配下  
※ Next.js の場合`sampleapp-basic-chat/node/express`配下

```shell
./init.sh
```

でアプリケーションをローカルで起動できます。

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

このような形で、ユーザが好きに書き込みができます。

現状では、ユーザを識別するために Laravel 標準の認証モジュールを利用しています。

しかし、Laravel 標準の認証モジュールなのでセキュリティが強力とは言いづらいです。そして、シンプルな Web アプリケーションなので、もちろんテナントの概念がありません。役割(ロール)の概念もありませんし、料金プランなどはもちろんありません。

この状態のシンプルな Web アプリケーションを SaaS 化していきましょう！

※チュートリアル開始時点と完了時点でのソースコードの差分は  
PHP  
[https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files](https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files)

Next.js  
[https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files](https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files)

こちらになりますので、参考にしてみてください
