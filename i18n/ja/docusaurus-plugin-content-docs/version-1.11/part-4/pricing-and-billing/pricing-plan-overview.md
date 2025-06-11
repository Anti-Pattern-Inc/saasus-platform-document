---
title: "料金プランの概要と種類"
slug: "pricing-plan-overview"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (UTC)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (UTC)"
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

