---
title: "AWS Marketplaceから購入したユーザーの判定方法"
slug: "user-judgment-method"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---
SAASUS AWS MARKETPLACE APIを利用します。

[GetCustomers](/docs/reference/awsmarketplace-api#tag/awsMarketplace/operation/GetCustomers)というエンドポイントを利用します。仕様はドキュメントを参照してください。

## 判定までの流れ

1. getUserInfoで取得したtenant_idを、GetCustomersのパラメーターtenant_idsに設定し実行する
2. 返却値が空であるかをチェックする
3. 空でない場合は、AWS Marketplaceから購入したユーザーであると判定することができます。
