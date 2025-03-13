---
title: "Smart API Gateway 機能(β版)"
slug: "overview"
excerpt: ""
hidden: false
createdAt: "Thu Oct 07 2024 19:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 07 2024 19:00:00 GMT+0000 (Coordinated Universal Time)"
---

### Smart API Gateway 機能概要

API の開発では通常、認証・認可やスロットリング、外部からの攻撃対策、 API スキーマの管理、APIドキュメントの公開と更新など、ビジネスロジック実装の他に考えることがたくさんあります。  
また、APIを公開するためのエンドポイントの維持や運用も必要になります。  
SaaSus Platform の Smart API Gateway 機能は、既存のWeb版パッケージソフトウェアやスタンドアロンWebアプリケーションを SaaS 化する際に、これらのAPI 構築の知識・管理のノウハウが少なくても容易に開発・構築をできるようにするための機能です。  
Smart API Gateway により、API エンドポイントの管理、エンドユーザーへの提供がシンプルになります。なお、Smart API Gateway 機能 β 版は SaaSus Platform の**全てのプラン**で利用可能です。

### 前提条件

- **API実装をする対象のアプリケーションは、AWS上で動作しているJavaのWebアプリケーション**であること。
- **アプリケーションは、Application Load Balancer 配下で動作**していること。

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
