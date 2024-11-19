---
title: "銀行口座の設定"
slug: "register-bank-account"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Wed May 17 2023 01:10:33 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Jul 06 2023 01:27:22 GMT+0000 (Coordinated Universal Time)"
---
続いて`Payment Information`より`Add bank account`を押下してください。  

![new-register-bank-account-1](/ja/img/aws-marketplace-integration/register-bank-account/new-register-bank-account-1.png)

最初に、支払い方法を選択する必要があります。米国ベースのACHアカウント、SWIFTアカウント、またはHyperwalletアカウントを選択できます。SWIFTアカウントは、対応するすべての通貨（AUD、EUR、GBP、JPY、USD）で使用できますが、米国ベースのACHおよびHyperwalletアカウントはUSDのみ使用可能です。

:::info
日本の銀行口座を設定したい場合は、海外送金・外貨送金の受け取りが可能な銀行口座をご用意いただき
SWIFTアカウントによる支払い方法を選択する必要があります。
:::

本ドキュメントでは、SWIFTアカウントによる設定手順を解説いたします。
まず、`Payment Method`の選択肢から`SWIFT account`を選択してください。

![new-register-bank-account-2](/ja/img/aws-marketplace-integration/register-bank-account/new-register-bank-account-2.png)

SWIFTアカウントでは、以下の三つの項目を入力します。SWIFT codeはご利用の銀行に問い合わせください。
- Bank account holder name
- BIC (SWIFT code)
- Account number

![new-register-bank-account-3](/ja/img/aws-marketplace-integration/register-bank-account/new-register-bank-account-3.png)


次に、請求先住所を入力します。

![new-register-bank-account-4](/ja/img/aws-marketplace-integration/register-bank-account/new-register-bank-account-4.png)

全ての入力を終えたら、`Add bank account`を押下します。

![new-register-bank-account-5](/ja/img/aws-marketplace-integration/register-bank-account/new-register-bank-account-5.png)

問題なければ、`Payment Information`にて追加した銀行口座をご確認いただけます。

![new-register-bank-account-6](/ja/img/aws-marketplace-integration/register-bank-account/new-register-bank-account-6.png)

:::caution
この時点では、まだ出品に必要な設定が完了していません。
次ページの`支払い方法の設定`をご確認ください。
:::