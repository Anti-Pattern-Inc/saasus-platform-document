---
title: "シングルテナント管理"
slug: "single-tenant-management"
excerpt: ""
hidden: false
createdAt: "Thu May 08 2024 14:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu May 08 2024 14:00:00 GMT+0000 (Coordinated Universal Time)"
---

## 概要

SaaSのアーキテクチャとして、「シングルテナント」と「マルチテナント」があります。

シングルテナントアーキテクチャとは、SaaSを利用する顧客（テナント）毎に異なるサーバー・DBを持つようなアーキテクチャです。
各テナントは完全に分離された環境を持ちます。

マルチテナントアーキテクチャとは、複数のテナントが共通のサーバー・DBを持つようなアーキテクチャです。
データはテナントごとに区分されていますが、物理的なリソースは共有されます。

シングルテナント管理機能は、SaaSus PlatformでシングルテナントアーキテクチャのSaaSの構築をサポートするための機能です。

:::info
シングルテナント管理機能はアドバンスドプラン以上のお客様のみご利用いただけます。
:::

シングルテナントアーキテクチャでは各テナントのデータは物理的に分離されているため、データ漏洩のリスクが減る等のメリットがあります。
一方で、テナント毎にサーバーやDBを用意する必要があるため、管理コストが大きくなるというデメリットがあります。

シングルテナント管理機能では、SaaSusにテナントを作成した時に自動でお客様のAWS環境に対してサーバーやDBを用意します。
これによって管理・運用コストを下げることができます。

## 設定方法

### SaaSus Platformからのアクセス許可

テナントオンボーディングする際、SaaSusからお客様のAWS環境へアクセスが必要なため、その権限をSaaSusに付与する必要があります。

画面の指示に従ってIAM Roleを作成し、生成したロールの情報を登録してください、

![settings-role](/ja/img/saas-development-console/single-tenant-management/settings-role.png)

### Cloud Formationテンプレート

SaaSusにテナントを作成した時、お客様のAWS環境に対してCloud Formationを実行し、テナント毎に環境を作成します。その時に使用するCloud Formationテンプレートを登録する必要があります。

Cloud FormationのOutputsとして、以下の項目を指定する必要があります。

| Logical ID       | Value |
| :--------------- | :----------- |
| AccountId        | Cloud Formationを実行する環境のAWSアカウント |
| SubnetIds        | DBインスタンスに設定したサブネットのID |
| SecurityGroupIds | DBインスタンスに設定したセキュリティグループのID |
| DbUser           | DBに接続するためのユーザー |
| DbPass           | DBに接続するためのパスワード |
| DbHost           | DBに接続するためのホスト (IPアドレス) |
| DbPort           | DBに接続するためのポート番号 |
| DbName           | DBの名前 |
| DbType           | DBの種類 (`mysql` または `postgres`) |

## SQLファイル

Cloud Formationによって作成されたDBに対して実行するSQLを登録します。DBのテーブル定義や初期データを保存するためのSQLを登録してください。
