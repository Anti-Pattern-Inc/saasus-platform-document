---
title: "API統合が完了した後に実施する連携確認の例"
slug: "integration-test"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Jun 17 2026 03:39:00 GMT+0000 (Coordinated Universal Time)"
---

<!-- aws-mp-freeze-notice -->
:::danger AWS Marketplace 連携機能は現在ご利用いただけません

2026年6月より AWS Marketplace のインテグレーション仕様が変更されました。本機能（AWS Marketplace への出品・掲載）は新しい仕様に未対応のため、現在この手順では出品（掲載）を完了できません。新規のご利用を停止しております。

仕様対応の目処が立ち次第、提供再開の時期について改めてご案内いたします。

最新の出品プロセスや掲載手順については、新しいサービス解説サイト（[https://docs.deshima.cloud](https://docs.deshima.cloud)）をご参照ください。

:::

事前にAWS Marketplace上に限定公開されている製品ページのURLを確認してください。

### 製品ページURLの確認方法

1. AWS Marketplace Management Portalへログインする。
2. こちらの<a href="https://aws.amazon.com/marketplace/management/products/saas?#" target="_blank">リンク</a>
3. 限定公開状態のSaaS製品の一覧が表示されるので確認したいSaaS製品を選択する。
4. 詳細ページが表示されますので、ページ右上の「View on AWS Marketplace」のボタンから製品ページのURLを確認することができます。

![integration-test-1](/ja/img/part-4/aws-marketplace-integration/supplementary/integration-test-1.png)


## 連携確認方法について

AWS Marketplaceとの連携を確認するには、全部で3つのユースケースを実施する必要があります。

### 購入後、サインアップをして新規アカウントを作った場合

サインアップ後に生成されるアカウントに対して、正しく購入した契約が同期されていることを確認してください。

確認例

1. テストアカウントで、AWS Marketplace上の製品ページへアクセス
2. 特定の契約を選択し購入する

<!----->

1. 購入後に表示される動線から、SaaSのサインアップ画面へ遷移
2. SaaSのサインアップを実施後そのアカウントでSaaSへログインする
3. 契約情報を確認できるページへ移動して、契約内容を確認する

### 購入後、既存ユーザーでサインインをした場合

既にSaaSにアカウントを持っているユーザーが、購入した際に正しく契約が同期されていることを確認してください。

確認例

1. 既にSaaS上にアカウントを持っているテストアカウントで、AWS Marketplace上の製品ページへアクセス
2. 特定の契約を選択し購入する
3. 購入後に表示される動線から、SaaSのサインアップ画面→サインイン画面と遷移する
4. SaaSのサインインを実施後そのアカウントでSaaSへログインする
5. 契約情報を確認できるページへ移動して、契約内容を確認する

### 購入後、AWS Marketplaceの製品契約ページで契約を変更した場合

既にAWS Marketplace上で契約していた場合、製品契約ページで契約を変更した際に正しく契約が同期されることを確認してください。

確認例

1. AWS Marketplace上の製品契約ページへアクセス
2. 特定の契約を選択し、契約を更新する
3. SaaSにログインする
4. 契約情報を確認できるページへ移動して、契約内容を確認する
