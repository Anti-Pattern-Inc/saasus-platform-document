---
title: "料金プランの設定"
slug: "manage-rate-plans"
excerpt: ""
hidden: false
pagination_next: tutorial/implementation-of-authorization-based-on-tenant-information
createdAt: "Wed Jan 11 2023 03:13:15 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Dec 08 2023 02:28:54 GMT+0000 (Coordinated Universal Time)"
---
## 料金プランの構成と用語の整理

SaaSus Platformででは、料金プランは以下のような**階層構造**で構成されます。


![](/ja/img/tutorial/manage-rate-plans/manage-rate-plans-05.png)

- **メーター単位**：コメント数やユーザー数など、利用量を測るための項目です。
- **計測単位**：料金のベースとなる最小の単位を設定します。
  - **固定ユニット**：毎月など一定の期間ごとに固定金額が発生する単位。
  - **使用量ユニット**：使用量に応じて一定の単価が発生する単位。
  - **段階ユニット**：携帯電話の段階的パケット料金のように、利用量の段階ごとに一定の料金が発生する単位。
  - **段階的使用量ユニット**：ボリュームディスカウントのように、利用量に応じて1単位あたりの料金が変化していく単位。
- **機能メニュー**：計測単位を複数まとめて、1つの機能として定義します。ここで定義した機能メニューを複数組み合わせて、1つの料金プランを構成します。
- **料金プラン**：テナントに設定する最上位の料金のまとまりです。
  - 機能メニューを複数まとめて構成します。
  - 各テナントは定義された料金プランを選んで使います。特定のテナント向けに専用プラン（プライベートプライシング）を作ることもできます。

## SaaS開発コンソール を使った料金プランの作成

SaaSus Platformでは、サブスクリプション型および従量課金のモデルに対応した料金プランの作成が可能です。

このチュートリアルでは、以下のような2種類の料金プランを例に設定方法を解説します。

### 作成する料金プラン例

- **Free プラン**
  - コメント数 Max 10
- **Basic プラン**
  - 固定料金 500円
  - コメント数 段階課金
    - 10コメントまで、 500円
    - 11コメント〜50コメントまで、 1000円 
    - Max 100コメントまで、 1500円

<div className="table-scroll">
<table className="nowrap-table">
  <thead>
    <tr>
      <th>プラン</th>
      <th>基本料金</th>
      <th>コメント数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Free</strong></td>
      <td className="text-center">―</td>
      <td>最大 10 コメント</td>
    </tr>
    <tr>
      <td><strong>Basic</strong></td>
      <td className="text-right">500 円</td>
      <td className="no-p-margin">
        段階課金（最大 100 コメント）<br />
        0–10 件 = 500 円<br />
        11–50 件 = 1,000 円<br />
        51–100 件 = 1,500 円
      </td>
    </tr>
  </tbody>
</table>
</div>

## Freeプランの構成

Freeプランは、コメント数が10件まで無料で利用できるシンプルなプランです。

![](/ja/img/tutorial/manage-rate-plans/manage-rate-plans-06.png)

## Basicプランの構成

Basicプランは、固定料金と段階的な従量課金の2種類を組み合わせたプランです。

![](/ja/img/tutorial/manage-rate-plans/manage-rate-plans-07.png)

このように、計測単位は複数作成可能で、それぞれの単位が必要に応じてメーター単位と結びつきます（固定課金は不要）。


この構成を元に、実際にSaaS開発コンソールを使って、各要素（メーター単位・計測単位・機能メニュー・料金プラン）を設定していきます。

設定画面の具体的な入力手順については、以下の手順ページをご覧ください。

[料金プラン設定の手順(画像)はこちらを参照](./setting-measurement-units-function-menus-and-price-plans) 

## テナントへの料金プランの適用

SaaS運用コンソールにログインし、「料金プラン設定」をクリックします。

![](/ja/img/tutorial/manage-rate-plans/manage-rate-plans-02.png)

各テナントのプラン設定をクリックし、料金プランを変更します。

テナントサンプルその１はFreeプランを、サンプルアプリテナント２はBasicプランを設定してみましょう。

![](/ja/img/tutorial/manage-rate-plans/manage-rate-plans-03.png)

これで、テナントに紐付いた料金プランが変更されます。Stripeと連携している場合は、Stripe側に顧客情報が作成され、サブスクリプションも作成されます。

![](/ja/img/tutorial/manage-rate-plans/manage-rate-plans-04.png)

:::info
Stripe との連携設定については、以下のSaaS開発コンソールのドキュメントを参照してください。  
[Stripeとの連携設定](/docs/part-4/pricing-and-billing/stripe-integration)
:::

では、ここまで設定した、料金プランやメーターの情報の情報を活かして、アプリケーションに認可処理の一歩目を実装してみましょう。
