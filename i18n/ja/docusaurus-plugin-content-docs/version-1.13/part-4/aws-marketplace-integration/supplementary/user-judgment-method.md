---
title: "AWS Marketplaceから購入したユーザーの判定方法"
slug: "user-judgment-method"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Jun 23 2026 03:39:00 GMT+0000 (Coordinated Universal Time)"
---

<!-- aws-mp-freeze-notice -->
:::danger AWS Marketplace 連携機能は現在ご利用いただけません

2026年6月より AWS Marketplace のインテグレーション仕様が変更されました。本機能（AWS Marketplace への出品・掲載）は新しい仕様に未対応のため、現在この手順では出品（掲載）を完了できません。新規のご利用を停止しております。

仕様対応の目処が立ち次第、提供再開の時期について改めてご案内いたします。

最新の出品プロセスや掲載手順については、新しいサービス解説サイト（[https://docs.deshima.cloud](https://docs.deshima.cloud)）をご参照ください。

:::

SAASUS AWS MARKETPLACE APIを利用します。

[GetCustomers](/docs/reference/awsmarketplace-api#tag/awsMarketplace/operation/GetCustomers)というエンドポイントを利用します。仕様はドキュメントを参照してください。

## 判定までの流れ

1. getUserInfoで取得したtenant_idを、GetCustomersのパラメーターtenant_idsに設定し実行する
2. 返却値が空であるかをチェックする
3. 空でない場合は、AWS Marketplaceから購入したユーザーであると判定することができます。
