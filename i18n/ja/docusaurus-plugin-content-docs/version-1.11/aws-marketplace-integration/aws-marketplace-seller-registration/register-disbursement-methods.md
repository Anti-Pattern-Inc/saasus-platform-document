---
title: "支払い方法の設定"
slug: "register-disbursement-methods"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Wed May 17 2023 01:10:33 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Jul 06 2023 01:27:22 GMT+0000 (Coordinated Universal Time)"
---

:::caution
あらかじめ銀行口座の設定が完了していることをご確認ください。
まだお済みでない場合は、[銀行口座の設定](/docs/aws-marketplace-integration/aws-marketplace-seller-registration/register-bank-account)を参考に設定を行ってください。
:::

`Payment Information`より`Add disbursement method`を押下してください。  

![new-register-disbursement-methods-1](/ja/img/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-1.png)

最初に、支払われる通貨を選択します。利用可能な通貨は[公式ドキュメント](https://docs.aws.amazon.com/ja_jp/marketplace/latest/userguide/disbursement.html#currency)を参照してください。

![new-register-disbursement-methods-2](/ja/img/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-2.png)

次に、支払いを受け取る銀行口座を選択します。[銀行口座の設定](/docs/aws-marketplace-integration/aws-marketplace-seller-registration/register-bank-account)で追加した銀行口座の中で、直前に選択した通貨に対応している銀行口座が選択肢として選べるようになっています。

![new-register-disbursement-methods-3](/ja/img/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-3.png)

最後に支払いスケジュールを設定してください。AWSが販売者の銀行口座に支払うスケジュールになります。
以下のスクショは、毎月1日に支払われる設定になります。`Daily`を選択する場合は、出品者は支払いを受け取るために残高がプラスである必要があります。

![new-register-disbursement-methods-4](/ja/img/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-4.png)

全ての入力を終えたら、`Add disbursement method`を押下します。

![new-register-disbursement-methods-5](/ja/img/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-5.png)

問題なければ、`Payment Information`にて追加した支払い方法をご確認いただけます。

![new-register-disbursement-methods-6](/ja/img/aws-marketplace-integration/register-disbursement-methods/new-register-disbursement-methods-6.png)

:::warning
Public OfferではUSDのみ対応しているため、通貨がUSDの支払い方法を必ず設定する必要があります。
Private Offerを日本円のみで作成することを想定しているお客様でもUSD、JPYの2種類の支払い方法が設定されている状態にしてください。
:::

以上で、出品手続きを始めるために必要な設定は完了になります。