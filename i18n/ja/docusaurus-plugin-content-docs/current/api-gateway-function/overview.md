---
title: "Smart API Gateway 機能"
slug: "overview"
excerpt: ""
hidden: false
createdAt: "Thu Oct 07 2024 19:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 07 2024 19:00:00 GMT+0000 (Coordinated Universal Time)"
---

### Smart API Gateway 機能概要

API の開発では通常、認証・認可やスロットリング、外部からの攻撃対策、API スキーマの管理、API ドキュメントの公開と更新など、ビジネスロジック実装の他に考えることがたくさんあります。  
また、API を公開するためのエンドポイントの維持や運用も必要になります。  
SaaSus Platform の Smart API Gateway 機能は、既存の Web 版パッケージソフトウェアやスタンドアロン Web アプリケーションを SaaS 化する際に、これらの API 構築の知識・管理のノウハウが少なくても容易に開発・構築をできるようにするための機能です。  
Smart API Gateway により、API エンドポイントの管理、エンドユーザーへの提供がシンプルになります。なお、Smart API Gateway 機能 は SaaSus Platform の**全てのプラン**で利用可能です。

:::info
サンプルデモ動画の視聴や Smart API Gateway 機能のデモンストレーション、チュートリアルのサポート、導入検討のための情報収集、実装に関する技術相談をご希望の方は、以下のサポート申請フォームよりお問い合わせください。

[Smart API Gateway by SaaSus Platform サポート申請フォーム](https://forms.gle/XhFD9fCQv1zVGyRT9)<br/>
:::

### Smart API Gateway を使用しない場合のイメージ

API に必要な API 定義や認証認可、スロットリングに加えて、API 自体の開発も必要となります。

![api-gateway-function/api-gateway-function-2](/ja/img/api-gateway-function/api-gateway-function-2.png)

### Smart API Gateway アーキテクチャ

API に必要な機能を提供し、既存の処理をほぼそのまま API としてセキュアに公開することができます。

![api-gateway-function/api-gateway-function-1](/ja/img/api-gateway-function/api-gateway-function-1.png)

### 前提条件

- **API 実装をする対象のアプリケーションは、AWS 上で動作している Java の Web アプリケーション**であること。
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
