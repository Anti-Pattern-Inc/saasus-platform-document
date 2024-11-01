---
title: "税率設定"
slug: "tax-rates"
excerpt: ""
hidden: false
createdAt: "Fri Sep 08 2023 02:07:14 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
税率設定は各テナントに適用される料金プランに適用する税金の比率や種類を設定します。

:::info
請求書に表示する消費税について
2023年10月1日からインボイス制度が始まります。この「インボイス」とは、事業者間でやり取りされる消費税額等が記載された請求書や領収書のことで、事業者が消費税の納税額を計算する際に必要となるものです。  
<a href="https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm" target="_blank">https\://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm</a>
:::

## 税率設定

1. **SaaS 開発コンソールから`料金プランｰ>税率設定`を選択**

![tax-rates-1](/ja/img/saas-development-console/tax-rates-1.png)

1. **`税率の作成`をクリック**

![tax-rates-2](/ja/img/saas-development-console/tax-rates-2.png)

2. `税率の作成`で税率を設定  
    税率名　　：プログラムで識別するための定義を決めます。重複した名前は作成できません  
    表示名　　：税率の名前を決めます。Stripe と連携している場合は Stripe で作成される請求書に表示します  
    説明　　　：人がわかりやすい税率の説明を設定  
    パーセント：徴収する税率を示す数値  
    国　　　　：税率が適用される国を設定します  
    内税／外税：設定した税率が金額に含まれるか、含まれないかを設定します

   :::caution
   税率は一度作成すると変更・削除ができませんのでご注意ください。
   :::

    上記内容を設定し作成ボタンをクリックします。

![tax-rates-3](/ja/img/saas-development-console/tax-rates-3.png)

![tax-rates-4](/ja/img/saas-development-console/tax-rates-4.png)

## テナントへの料金プラン(税率)設定

1. **請求先の住所設定**

テナントへの料金プラン設定前に請求先の情報を入力します。  
SaaS 運用コンソールのテナント管理画面を開き対象のテナントの編集ボタンをクリックします

![tax-rates-5](/ja/img/saas-development-console/tax-rates-5.png)

請求情報編集にて請求先の情報を入力して保存

![tax-rates-6](/ja/img/saas-development-console/tax-rates-6.png)

2. **SaaS 運用コンソールから`料金プラン設定`を選択**

![tax-rates-7](/ja/img/saas-development-console/tax-rates-7.png)

3. **料金プラン設定でテナントへ`プラン設定`をクリック**

![tax-rates-8](/ja/img/saas-development-console/tax-rates-8.png)

4. **テナントへ`プラン`/`税率`を設定**  
   料金プラン設定画面で料金プランとSaaS 開発コンソールで設定した消費税率を設定し保存します。

![tax-rates-9](/ja/img/saas-development-console/tax-rates-9.png)

## Stripe連携した税率設定

1. **Stripe へ連携した税率設定**

SaaS 開発コンソールで設定した以下情報がStripeの各項目へ連携されます

| Stripe | SaaS 運用コンソール | 説明                     |
| ------ | ------------ | ---------------------- |
| -      | 税率名          | プログラムで識別するための定義        |
| タイプ    | 表示名          | 税率の名前                  |
| 説明     | 説明           | 率の説明                   |
| 率      | パーセント        | 徴収する税率を示す数値            |
| 地域     | 国            | 税率が適用される国              |
| 率      | 内税／外税        | 設定した税率が金額に含まれるか、含まれないか |

![tax-rates-10](/ja/img/saas-development-console/tax-rates-10.png)

## Stripeで発行した請求書のサンプル

内税、外税、設定無しのパターンにおいて、請求書のサンプルを掲載します。  
どのような内容で請求書が作成されるかご確認ください。  

1. **発行した請求書 内税**

**インボイス**

![tax-rates-11](/ja/img/saas-development-console/tax-rates-11.png)


**請求書 PDF**

![tax-rates-12](/ja/img/saas-development-console/tax-rates-12.png)

1. **発行した請求書 外税**

**インボイス**

![tax-rates-13](/ja/img/saas-development-console/tax-rates-13.png)


**請求書 PDF**

![tax-rates-14](/ja/img/saas-development-console/tax-rates-14.png)

1. **発行した請求書 設定無し**

**インボイス**

![tax-rates-15](/ja/img/saas-development-console/tax-rates-15.png)


**請求書 PDF**

![tax-rates-16](/ja/img/saas-development-console/tax-rates-16.png)
