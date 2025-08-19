---
title: "シングルテナント管理"
slug: "single-tenant-management"
excerpt: ""
hidden: false
createdAt: "Thu May 08 2024 14:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu May 08 2024 14:00:00 GMT+0000 (Coordinated Universal Time)"
---

## 概要

SaaS のアーキテクチャとして、「シングルテナント」と「マルチテナント」があります。

シングルテナントアーキテクチャとは、SaaS を利用する顧客（テナント）毎に異なるサーバー・DB を持つようなアーキテクチャです。
各テナントは完全に分離された環境を持ちます。

マルチテナントアーキテクチャとは、複数のテナントが共通のサーバー・DB を持つようなアーキテクチャです。
データはテナントごとに区分されていますが、物理的なリソースは共有されます。

シングルテナント管理機能は、SaaSus Platform でシングルテナントアーキテクチャの SaaS の構築をサポートするための機能です。

:::info
シングルテナント管理機能はアドバンスドプラン以上のお客様のみご利用いただけます。
:::

シングルテナントアーキテクチャでは各テナントのデータは物理的に分離されているため、データ漏洩のリスクが減る等のメリットがあります。
一方で、テナント毎にサーバーや DB を用意する必要があるため、管理コストが大きくなるというデメリットがあります。

シングルテナント管理機能では、SaaSus にテナントを作成した時に自動でお客様の AWS 環境に対してサーバーや DB を用意します。
これによって管理・運用コストを下げることができます。

## 設定方法

### SaaSus Platform からのアクセス許可

テナントオンボーディングする際、SaaSus からお客様の AWS 環境へアクセスが必要なため、その権限を SaaSus に付与する必要があります。

画面の指示に従って IAM Role を作成し、生成したロールの情報を登録してください、

![settings-role](/ja/img/saas-development-console/single-tenant-management/settings-role.png)

### Cloud Formation テンプレート

<a download="singletenant-cf-sample.yml" href="/ja/file/singletenant-cf-sample.yml"> Cloud Formation テンプレートのサンプル </a>

SaaSus にテナントを作成した時、お客様の AWS 環境に対して Cloud Formation を実行し、テナント毎に環境を作成します。その時に使用する Cloud Formation テンプレートを登録する必要があります。

Cloud Formation の Outputs として、以下の項目を指定する必要があります。

| Logical ID       | Value                                              |
| :--------------- | :------------------------------------------------- |
| AccountId        | Cloud Formation を実行する環境の AWS アカウント    |
| SubnetIds        | DB インスタンスに設定したサブネットの ID           |
| SecurityGroupIds | DB インスタンスに設定したセキュリティグループの ID |
| DbUser           | DB に接続するためのユーザー                        |
| DbPass           | DB に接続するためのパスワード                      |
| DbHost           | DB に接続するためのホスト (IP アドレス)            |
| DbPort           | DB に接続するためのポート番号                      |
| DbName           | DB の名前                                          |
| DbType           | DB の種類 (`mysql` または `postgres`)              |

### SQL ファイル

<a download="singletenant-sample.sql" href="/ja/file/singletenant-sample.sql"> SQL ファイルのサンプル </a>

Cloud Formation によって作成された DB に対して実行する SQL を登録します。DB のテーブル定義や初期データを保存するための SQL を登録してください。

### シングルテナント管理 の進行状況を確認する方法

SaaS 運用コンソール - テナント管理画面 で対象テナントを表示し、TenantOnboardingStatus の値で進行情報の確認ができます。

| TenantOnboardingStatus | Situation                                  |
| :--------------------- | :----------------------------------------- |
| setup_cfn_in_progress  | Cloud Formation の実行準備中               |
| setup_cfn_db_ready     | Cloud Formation で DB インスタンス作成済み |
| setup_cfn_completed    | Cloud Formation の終了                     |
| setup_db_in_progress   | SQL 実行中                                 |
| all_completed          | 全ての処理が正常に完了                     |
| error                  | 異常終了（サポートにお問い合わせください） |

### 注意事項

テナントオンボーディング処理は、東京リージョン(ap-northeast-1)に実施されます
テナントオフボーディング処理は、サポートしていません。
