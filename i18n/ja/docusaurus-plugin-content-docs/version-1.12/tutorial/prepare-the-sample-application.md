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

:::info

AWS の EC2 や Cloud9 を利用して、Blade 版の動作環境を作成する場合は、[サンプルアプリケーションの準備(EC2)](https://docs.saasus.io/ja/docs/tutorial/prepare-the-sample-application-ec2/)の手順で行ってください。

:::

この簡易チャットシステムは、以下の2種類の構成が用意されています。

1. **Laravel + Blade**（PHP 8 / Laravel 9 / PostgreSQL 13）
2. **Express + EJS**（Node.js / Express 4.16.x / PostgreSQL 13）

どちらの構成でも、設定によってNext.jsをフロントエンドとして利用可能ですが、このチュートリアルではNext.jsは使用しません。

### 前提条件
- PHP 8がインストールされていること（Laravel + Bladeの場合）。
- Composerがインストールされていること（Laravel + Bladeの場合）。
- PostgreSQL 13がインストールされ、適切に設定されていること。
- Node.jsおよびnpmがインストールされていること（Express + EJSの場合）。

まずは、下記リポジトリからサンプルアプリケーションを clone してきます。

```git
git clone https://github.com/saasus-platform/sampleapp-basic-chat
```

clone後、使用するアプリケーションのディレクトリに移動し、初期設定を行います。

- **Laravel + Blade の場合**: `sampleapp-basic-chat/php/laravel`
- **Express + EJS の場合**: `sampleapp-basic-chat/node/express`

```shell
./init.sh
```

アプリケーションがローカルで起動されました。

起動したら、以下の URL にアクセスして試してみましょう。

### Laravel + Blade 版

URL: [http://localhost/board](http://localhost/board)  
認証情報  
　Email: [user@example.com](mailto:user@example.com)  
　Password: password

![サンプル](/ja/img/tutorial/prepare-the-sample-application/prepare-the-sample-application-01.png)

### Express + EJS 版

URL: [http://localhost/login/](http://localhost/login/)  
認証情報  
　Email: [user@example.com](mailto:user@example.com)  
　Password: password

:::caution
Express + EJS 版のビルドには時間がかかることがあります。表示できない場合は、数分待ってから再度試してください。
:::

![サンプル](/ja/img/tutorial/prepare-the-sample-application/prepare-the-sample-application-02.png)

現在、ユーザが自由に投稿できるように、Laravel 版では Laravel の標準認証モジュール、Express 版では独自の認証機能を使用してユーザを識別しています。

SaaSus Platformを導入し、ユーザー認証をSaaSus Platform経由で行うことにより、ユーザーの識別やユーザーに紐づいているテナント情報の取得を簡単に行うことができるようになります。

テナントのデータ設計や情報管理をSaaSアプリケーション側が行う必要はありません。

また、料金プランもSaaSus Platformで設定を行えば、すぐに利用ができるようになります。

SaaSus Platformが持つ情報は、APIを経由してSaaSアプリケーションでも登録・取得・更新ができるようになります。

このようなシンプルなWebアプリケーションをSaaS化していきましょう。

※チュートリアル開始時点と完了時点でのソースコードの差分は以下を参考にしてください。

**Laravel + Blade**  
[https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files](https://github.com/saasus-platform/sampleapp-basic-chat/pull/10/files)

**Express + EJS**  
[https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files](https://github.com/saasus-platform/sampleapp-basic-chat/pull/11/files)

※ これらの差分には、Next.js を使用した場合の修正も含まれています。
