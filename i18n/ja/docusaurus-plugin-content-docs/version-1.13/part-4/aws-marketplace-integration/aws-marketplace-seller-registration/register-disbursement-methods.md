---
title: "支払い方法の設定"
slug: "register-disbursement-methods"
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


:::caution
あらかじめ銀行口座の設定が完了していることをご確認ください。
まだお済みでない場合は、[銀行口座の設定](/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration/register-bank-account)を参考に設定を行ってください。
:::

`Payment Information`より`Add disbursement method`を押下してください。

![new-register-disbursement-methods-1](/ja/img/part-4/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-1.png)

最初に、支払われる通貨を選択します。利用可能な通貨は[公式ドキュメント](https://docs.aws.amazon.com/ja_jp/marketplace/latest/userguide/disbursement.html#currency)を参照してください。

![new-register-disbursement-methods-2](/ja/img/part-4/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-2.png)

次に、支払いを受け取る銀行口座を選択します。[銀行口座の設定](/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration/register-bank-account)で追加した銀行口座の中で、直前に選択した通貨に対応している銀行口座が選択肢として選べるようになっています。

![new-register-disbursement-methods-3](/ja/img/part-4/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-3.png)

最後に支払いスケジュールを設定してください。AWS が販売者の銀行口座に支払うスケジュールになります。
以下のスクショは、毎月 1 日に支払われる設定になります。`Daily`を選択する場合は、出品者は支払いを受け取るために残高がプラスである必要があります。

![new-register-disbursement-methods-4](/ja/img/part-4/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-4.png)

全ての入力を終えたら、`Add disbursement method`を押下します。

![new-register-disbursement-methods-5](/ja/img/part-4/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-5.png)

問題なければ、`Payment Information`にて追加した支払い方法をご確認いただけます。

![new-register-disbursement-methods-6](/ja/img/part-4/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-6.png)

:::warning
Public Offer では USD のみ対応しているため、通貨が USD の支払い方法を必ず設定する必要があります。
Private Offer を日本円のみで作成することを想定しているお客様でも USD、JPY の 2 種類の支払い方法が設定されている状態にしてください。
:::

以上で、出品手続きを始めるために必要な設定は完了になります。
