---
title: "料金プランの概要と種類"
slug: "pricing-plan-overview"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (UTC)"
updatedAt: "Mon Oct 26 2026 02:35:42 GMT+0000 (UTC)"
---

## 1. 料金プランを構成する 4 階層

料金プランは **次の 4 階層** の組み合わせで定義します。

| 階層 | 役割 | キーとなる設定例 |
|------|------|------------------|
| **メーター単位** | 利用量を測るカウンタ | コメント数 / アクティブユーザー数 … |
| **計測単位** | 課金ロジックの“最小単位” | 固定／使用量／段階／段階的使用量 |
| **機能メニュー** | 複数の計測単位を束ねた「機能パッケージ」 | Free メニュー / Pro メニュー など |
| **料金プラン** | テナントに割り当てる最上位プラン | Free / Basic / Enterprise … |

![料金プラン階層図](/ja/img/part-4/pricing-and-billing/pricing-plan-overview/manage-rate-plans-05.png)

## 2. 計測単位 ― 4 つの課金モデル

<div className="table-scroll">
<table className="nowrap-table">
  <thead>
    <tr>
      <th>タイプ</th>
      <th>イメージ</th>
      <th>主なユースケース</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>固定ユニット</strong></td>
      <td>毎月 500 円 などの定額</td>
      <td>月額基本料、保守費用</td>
    </tr>
    <tr>
      <td><strong>使用量ユニット</strong></td>
      <td>1 API リクエスト = 0.1 円</td>
      <td>シンプルな従量課金</td>
    </tr>
    <tr>
      <td><strong>段階ユニット</strong></td>
      <td className="no-p-margin">
        0–10 件 = 500 円<br />
        11–50 件 = 1,000 円<br />
        など
      </td>
      <td>ステップ課金（携帯パケット従量など）</td>
    </tr>
    <tr>
      <td><strong>段階的使用量ユニット</strong></td>
      <td className="no-p-margin">
        0–10 件 = 100 円/件<br />
        11–20 件 = 90 円/件<br />
        など
      </td>
      <td>ボリュームディスカウント</td>
    </tr>
  </tbody>
</table>
</div>

:::info
**詳細な計算パターン** は  
[段階ユニット、段階的使用量ユニットの料金計算の違いについて](/ja/docs/part-4/pricing-and-billing/tiered-unit) を参照してください。
:::

## 3. 「メーター単位」と「計測単位」の関係

| 計測単位タイプ | メーター単位の参照 | 典型的な課金ロジック |
|---------------|--------------------|--------------|
| 固定ユニット | **参照しない** | 定額課金 |
| 使用量ユニット | 参照（1 つ） | 利用量 × 単価 |
| 段階ユニット | 参照（1 つ） | 利用量が属する **段階の固定額** を請求 |
| 段階的使用量ユニット | 参照（1 つ） | **各段階ごとに単価 × 利用量を合算** |

:::info
**固定ユニット** はメーター単位を参照しません。  
そのため、利用量に左右されない **基本料金（月額〇〇円など）** を表現したいときに使います。
:::

## 4. モデル別サンプル（Free / Basic / Enterprise）

<div className="table-scroll">
<table className="nowrap-table">
  <thead>
    <tr>
      <th>プラン</th>
      <th>基本料金</th>
      <th>コメント数課金</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Free</strong></td>
      <td className="text-right">0 円</td>
      <td>10 件まで無料</td>
    </tr>
    <tr>
      <td><strong>Basic</strong></td>
      <td className="text-right">500 円</td>
      <td className="no-p-margin">
        段階課金<br />
        0–10 件 = 500 円<br />
        11–50 件 = 1,000 円<br />
        51–100 件 = 1,500 円
      </td>
    </tr>
    <tr>
      <td><strong>Enterprise</strong></td>
      <td className="text-right">0 円</td>
      <td className="no-p-margin">
        段階的使用量課金<br />
        0–1,000 件 = 50 円/件<br />
        1,001–5,000 件 = 40 円/件<br />
        5,001〜 = 30 円/件
      </td>
    </tr>
  </tbody>
</table>
</div>

### Free プランの構成
![Free プラン構成図](/ja/img/part-4/pricing-and-billing/pricing-plan-overview/manage-rate-plans-06.png)

### Basic プランの構成
![Basic プラン構成図](/ja/img/part-4/pricing-and-billing/pricing-plan-overview/manage-rate-plans-07.png)

### Enterprise プランの構成
![Enterprise プラン構成図](/ja/img/part-4/pricing-and-billing/pricing-plan-overview/manage-rate-plans-08.png)


## 5. 計測単位を使った機能・上限の判定

アプリケーションで機能の可否や利用量の上限を判定するときは、料金プランに含まれる計測単位の設定を参照する方法をおすすめします。
料金プランの ID ごとに条件分岐すると、新しいプランに同じ機能を提供する場合も、条件の追加と再デプロイが必要になります。

```js
// 料金プランの ID ごとにコメント数の上限を定義する例
let commentLimit = 0;
if (pricingPlanId === "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx") {
  commentLimit = 10;
}
```

料金プラン取得 API（`GetPricingPlan`）のレスポンスには、機能メニューの配列 `pricing_menus` と、各メニューに含まれる計測単位の配列 `units` があります。
使用量ユニットなどでは、対象のメーター単位を `metering_unit_name`、上限を `upper_count` で参照できます。
次の例では、コメント数を測るメーター単位を `comment_count` とし、そのメーター単位に紐づく計測単位がプラン内に 1 つだけある構成を想定しています。
`plan` は、テナントが利用する料金プランの取得結果です。

```js
// プランに含まれる計測単位からコメント数の上限を取得する例
const commentUnit = plan.pricing_menus
  .flatMap((menu) => menu.units)
  .find((unit) => unit.metering_unit_name === "comment_count");

// 対象の計測単位がない場合は、この例ではコメント機能を無効にする
const commentLimit = commentUnit?.upper_count ?? 0;
const canUseComments = commentLimit > 0;
```

この構成なら、同じメーター単位に紐づく計測単位を新しい料金プランに含めることで、料金プラン ID の条件を追加せずにコメント機能と上限を判定できます。
機能メニューは計測単位をまとめる階層であり、メーター単位は利用量を測るカウンタです。
固定ユニットには `metering_unit_name` と `upper_count` がないため、この例の判定対象には含まれません。

:::info
設定を反映するには、アプリケーションでテナントの料金プランを取得し、機能の可否や上限を判定する処理を実装してください。
取得結果をキャッシュする場合は、料金プランの切り替えや設定変更に合わせて更新します。
上限を超える操作を拒否する処理も、アプリケーション側で実装します。
:::
