---
title: "Smart API Gateway 機能(β版)"
slug: "overview"
excerpt: ""
hidden: false
createdAt: "Thu Oct 07 2024 19:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 07 2024 19:00:00 GMT+0000 (Coordinated Universal Time)"
---

### Smart API Gateway 機能概要

SaaSus Platform の Smart API Gateway 機能は、従来のパッケージソフトウェアやスタンドアロンアプリケーションを SaaS 化する際に、API の公開や管理を容易にするための機能です。Smart API Gateway により、API エンドポイントの管理、エンドユーザーへの提供がシンプルになります。なお、Smart API Gateway 機能 β 版は SaaSus Platform の**全てのプラン**で利用可能です。

### 前提条件

- **Java のアプリケーション**であること。
- **Application Load Balancer 配下でアプリケーションが起動**していること。

:::info
現在、本機能は Java SDK でのみご利用いただけます。<br/>
他の SDK については、今後順次対応を予定しております。
:::

### 注意事項

この Smart API Gateway 機能の利用にあたり、お客様の SaaS 環境に以下の AWS リソースが作成されるため、別途 AWS の料金が発生します。

- **Network Load Balancer**

  - 1 ロードバランサー x 0.0243 USD x 730 時間 (1 か月) = 17.74 USD
  - **追加料金**: LCU あたりの料金が発生します。

- **PrivateLink (VPC エンドポイント)**
  - 1 VPC エンドポイント x 2 VPC エンドポイントあたりの ENI x 730 時間 (1 か月) x 0.014 USD = 20.44 USD (エンドポイント ENI の 1 か月あたりの料金)
  - **追加料金**: データ転送量に応じた料金が発生します。