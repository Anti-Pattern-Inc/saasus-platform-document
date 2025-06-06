---
title: "AWS Marketplace 連携機能について"
slug: "aws-marketplace-integration"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---
AWS Marketplace 連携機能は、「SaaSus Platform を利用して作られた SaaS」が実施する「AWS Marketplace への出品プロセス」をサポートする機能です。

:::caution
SaaSus Platform 内の操作だけで出品が完了するものではないのであらかじめご了承ください。
:::

# SaaSus Platform による出品手続きの流れ

出品手続きでは、3つのサービスで画面操作が必要になります。どのサービスで手続きを行うか注意しながら進めてください。

- AWS
- AWS Marketplace Management Portal
- SaaSus Platform

まず、AWS上でセラー登録という手続きを行ってください。セラー登録にはAWSアカウントが必要なため、あらかじめご用意ください。  
登録後、AWS Marketplace Management Portal（AMMP）にアクセスできるようになるので、公開するプロフィールや振込先の銀行口座を設定します。  
以上の手続きが完了したら、SaaSus PlatformでAWS Marketplace連携機能を使って出品手続きを進めることになります。

以降は、SaaSus Platformが提供するステージング環境、本番環境を介した手続きとなります。  
文章ではイメージしずらいと思いますので、ここからは出品までの流れを全体図と関連ドキュメントと共に紹介します。

![the whole picture](/ja/img/part-4/aws-marketplace-integration/the-whole-picture.png)



### 出品手順全体の流れ

1. セラー登録(AWS)
   1. [セラー登録ガイド](/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration/aws-marketplace-seller-registration)

2. Public profileと支払い方法の設定(AMMP)

   1. [Public profileの設定ガイド](/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration/public-profile-settings)
   2. [銀行口座・支払い方法設定の始め方](/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration/tax-information-interview)

   ***

   ===**テストフェーズ開始**===

3. テスト用SaaS製品の準備(SaaSus Platform::ステージング環境)

4. テスト用SaaS製品の登録(AMMP)
   1. [登録の始め方](/docs/part-4/aws-marketplace-integration/product-submission)

5. API統合の準備(SaaSus Platform::ステージング環境)

6. AWS Marketplaceとの連携確認(AWS)

   1. [連携確認の例](/docs/part-4/aws-marketplace-integration/supplementary/integration-test)

   ===**テストフェーズ終了**===

  :::info
  テストフェーズでは、出品直前の連携確認環境を作ることになります。  
  プロダクションフェーズでも同様の環境を作ることにはなりますが、こちらの環境は出品手続きが完了しても、そのままテストに利用できるため、追加機能の開発や不具合発生時の調査にご利用いただくことができます。
  :::
   ***

   ===**プロダクションフェーズ開始**===

7. 本番用SaaS製品の準備(SaaSus Platform::本番環境)

8. 本番用SaaS製品の登録(AMMP)

9. API統合の準備(SaaSus Platform::本番環境)

10.  AWS Marketplaceとの連携確認  
    ===**プロダクションフェーズ終了**===
    :::info
  プロダクションフェーズでは、本番環境で出品に必要な環境を作ることになります。テストフェーズでの連携確認が済んでいれば、スムーズに進めることが出来ます。出品手続きが完了すると実際に料金が発生するようになるため、もし本番環境で動作確認したい場合はSaaS製品を非公開にする必要があります。
  :::
   ***

11.   本番用SaaS製品の最終レビュー依頼
      1. [依頼方法](/docs/part-4/aws-marketplace-integration/supplementary/final-review-request)

12.   本番用SaaS製品の公開依頼
      1. [依頼方法](/docs/part-4/aws-marketplace-integration/supplementary/public-request)

# 出品におけるSaaS製品の基準

AWS MarketplaceへSaaS製品を出品するための基準が設けられており、公式ドキュメントにて公開されていますので  
あらかじめご確認ください。

[SaaS 製品ガイドライン](https://docs.aws.amazon.com/ja_jp/marketplace/latest/userguide/saas-guidelines.html)

## SaaSus Platform のチェック

SaaS製品ガイドラインを踏まえて、SaaSus Platformからも基準を満たしているかチェック致します。  
AWS Marketplace連携機能を利用時にチェックする形になっていますが、ドキュメントにも掲載しておきますのでご確認ください。

・SaaSus Platformの認証詳細設定でセルフサインアップを有効にしている ([参考](/docs/part-4/aws-marketplace-integration/supplementary/self-up-setting))  
・ユーザー自身がSaaS上で契約しているプランを確認できるようになっている  
・ユーザー自身がSaaS上でサポートへ問い合わせできる動線が配置されている  
・既にアカウントを持っているユーザーがSaaSを購入した時のマルチテナントの考慮を実装している ([参考](/docs/part-4/aws-marketplace-integration/embedding-products))  
・AWS Marketplaceから購入したユーザーは、SaaS上ではプランの変更、退会をできないようにしている ([参考](/docs/part-4/aws-marketplace-integration/supplementary/user-judgment-method))
