---
title: "料金プランの作成手順"
slug: "pricing-plan-creation"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

このページでは、**Free / Basic / Enterprise** の 3 プランを例に  
SaaS開発コンソールで必要な 4 要素（メーター単位 → 計測単位 → 機能メニュー → 料金プラン）を順番に設定します。

---

## 1 . メーター単位の作成

まずは、利用量を計測する **メーター単位** を登録します。

| メーター単位名 | 表示名   | 説明       |
|---------------|---------|-----------|
| `comment_count` | コメント数 | コメント数 |

![メーター単位設定](/ja/img/part-4/pricing-and-billing/pricing-plan-creation/setting-measurement-units-function-menus-and-price-plans-07.png)

:::info
Stripe 連携を行っている場合は「使用量の集計」で `sum`／`max` を選択できます。  
詳細 → [メーター単位設定](/docs/part-4/pricing-and-billing/usage-metering)
:::

---

## 2 . 計測単位の作成

### 2-1 . Free プラン用（使用量ユニット）

| 計測単位名 | 表示名 | タイプ | 対象メーター | 単位金額 | 上限 | 通貨 |
|-----------|-------|-------|--------------|---------|-----|-----|
| `free_comment` | Freeプランコメント数 | **使用量ユニット** | コメント数 | 0 | 10 | JPY |

![Free 計測単位](/ja/img/part-4/pricing-and-billing/pricing-plan-creation/setting-measurement-units-function-menus-and-price-plans-02.png)

---

### 2-2 . Basic プラン用（段階ユニット＋固定ユニット）

<div className="table-scroll">
<table className="nowrap-table">
  <thead>
    <tr>
      <th>計測単位名</th>
      <th>表示名</th>
      <th>タイプ</th>
      <th>対象メーター</th>
      <th>料金設定</th>
      <th>通貨</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>basic_base</code></td>
      <td>Basicプラン基本料金</td>
      <td><strong>固定ユニット</strong></td>
      <td className="text-center">―</td>
      <td className="text-right">500 / 月</td>
      <td className="text-right">JPY</td>
    </tr>
    <tr>
      <td><code>basic_comment</code></td>
      <td>Basicプランのコメント数</td>
      <td><strong>段階ユニット</strong></td>
      <td>コメント数</td>
      <td className="text-right no-p-margin">
        0-10=500<br />
        11-50=1,000<br />
        51-100=1,500
      </td>
      <td className="text-right">JPY</td>
    </tr>
  </tbody>
</table>
</div>

![Basic 計測単位 固定ユニット](/ja/img/part-4/pricing-and-billing/pricing-plan-creation/setting-measurement-units-function-menus-and-price-plans-01.png)
![Basic 計測単位 段階ユニット](/ja/img/part-4/pricing-and-billing/pricing-plan-creation/setting-measurement-units-function-menus-and-price-plans-03.png)

---

### 2-3 . Enterprise プラン用（段階的使用量ユニット）

<div className="table-scroll">
<table className="nowrap-table">
  <thead>
    <tr>
      <th>計測単位名</th>
      <th>表示名</th>
      <th>タイプ</th>
      <th>対象メーター</th>
      <th>段階別単位金額</th>
      <th>通貨</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>enterprise_comment</code></td>
      <td>Enterpriseプランのコメント数</td>
      <td><strong>段階的使用量ユニット</strong></td>
      <td>コメント数</td>
      <td className="text-right no-p-margin">
    0-1,000=50 / 件<br />
    1,001-5,000=40 / 件<br />
    5,001〜=30 / 件
      </td>
      <td className="text-right">JPY</td>
    </tr>
  </tbody>
</table>
</div>

![Enterprise 計測単位](/ja/img/part-4/pricing-and-billing/pricing-plan-creation/setting-measurement-units-function-menus-and-price-plans-08.png)

---

## 3 . 機能メニューの作成

| 機能メニュー名 | 表示名 | 含まれる計測単位 |
|---------------|-------|-----------------|
| `free_menu` | Freeプラン基本メニュー | Freeプランコメント数 |
| `basic_menu` | Basicプラン基本メニュー | Basicプラン基本料金<br />Basicプランのコメント数 |
| `enterprise_menu` | Enterpriseプラン基本メニュー | Enterpriseプランのコメント数 |

![機能メニュー設定](/ja/img/part-4/pricing-and-billing/pricing-plan-creation/setting-measurement-units-function-menus-and-price-plans-05.png)

Basicプラン、EnterpriseプランもFreeプランと同様に設定を行なってください。

---

## 4 . 料金プランの作成

| 料金プラン名 | 表示名 | 機能メニュー |
|-------------|-------|-------------|
| `free_plan` | Freeプラン | Freeプラン基本メニュー |
| `basic_plan` | Basicプラン | Basicプラン基本メニュー |
| `enterprise_plan` | Enterpriseプラン | Enterpriseプラン基本メニュー |

![料金プラン設定](/ja/img/part-4/pricing-and-billing/pricing-plan-creation/setting-measurement-units-function-menus-and-price-plans-06.png)

Basicプラン、EnterpriseプランもFreeプランと同様に設定を行なってください。

---

これで **Free / Basic / Enterprise** の 3 プランが作成できました。
