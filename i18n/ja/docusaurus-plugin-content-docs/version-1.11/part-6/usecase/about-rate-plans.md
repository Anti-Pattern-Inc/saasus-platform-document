---
title: "複雑な料金プランについて"
slug: "about-rate-plans"
excerpt: ""
hidden: false
createdAt: "Fri Apr 26 2023 10:25:55 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Apr 26 2023 10:25:55 GMT+0000 (Coordinated Universal Time)"
---

# 複雑な料金プランについて

SaaSus Platformでは、サブスクリプション型および従量課金のモデルを利用して複雑な料金プランを設定することもできます。

- Individual プラン
  - 固定料金 3,000円
  - コメント数 段階的使用量課金
    - 10コメントまで、 1コメントあたり 5円
    - 11コメント〜100コメントまで、 1コメントあたり 2円
    - 101コメント〜 1コメントあたり 1円
- Enterprise プラン
  - 固定料金 50,000円
  - コメント数 Free

<div className="table-scroll">
<table className="nowrap-table">
  <thead>
    <tr>
      <th>プラン</th>
      <th className="text-right">基本料金</th>
      <th>コメント数課金</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Individual</td>
      <td className="text-right">3,000 円</td>
      <td className="no-p-margin">
        段階的使用量課金（1コメントあたり）<br />
        0–10 件 = 5 円/件<br />
        11–100 件 = 2 円/件<br />
        101 件〜 = 1 円/件
      </td>
    </tr>
    <tr>
      <td>Enterprise</td>
      <td className="text-right">50,000 円</td>
      <td>無制限</td>
    </tr>
  </tbody>
</table>
</div>

※今回は一例として、複雑な料金プランになっていますが、深い理由がない場合はこのような複雑な料金プラン設定は行わないでください。
SaaSの利用料は原価をベースに考えるのではなく、お客様がどれくらいの価値を享受できるかをベースに考えるべきです。
そのため、複雑な料金設定はお客様に複雑な計算と予測を強いることになり、SaaSを使うことでお客様の負担を減らす一方で、料金計算や予測に対する負担を与えることになります。
なるべくシンプルでわかりやすい料金プランを作成するべきです。

[Individual プラン、Enterprise プランのメーター単位・計測単位・機能メニュー・料金プランの設定の設定内容(画像)はこちらを参照](/ja/docs/part-6/usecase/about-rate-plans/basic-charge-preference) 

## メーター単位

### 設定内容（コメント数）
| メーター単位名    | メーター単位の表示名   | メーター単位の説明 |
|:-----------|:-------------|:----------|
| comment_count | コメント数 | コメント数     |

## 計測単位

### 基本料金設定
計測単位：固定ユニット計測単位

| 計測単位名           | 計測単位の表示名          | 計測単位の説明           | 金額    | 繰り返しの期間 | 通貨  |
| :-------------- | :---------------- | :---------------- | :---- | :------ | :-- |
| individual_base   | Individualプラン基本料金   | Individualプラン基本料金   | 3000  | 月       | JPY |
| enterprise_base | Enterpriseプラン基本料金 | Enterpriseプラン基本料金 | 50000 | 月       | JPY |

### Individual プラン用の計測単位

計測単位：段階的使用量ユニット計測単位

| 計測単位名            | 計測単位の表示名          | 計測単位の説明           | 対象メーター名       | 通貨  | 範囲    | 上限 |
| :--------------- | :---------------- | :---------------- | :------------ | :-- | :---- | -: |
| individual_comment | Individualプランのコメント数 | Individualプランのコメント数 | コメント数 | JPY | 以下表参照 |  0 |

|  以上 |  以下 | 単位金額 | 固定金額 |
| --: | --: | ---: | ---: |
|   0 |  10 |    5 |    0 |
|  11 | 100 |    2 |    0 |
| 101 |     |    1 |    0 |

### Enterprise プラン用の計測単位

計測単位：使用量ユニット計測単位

| 計測単位名              | 計測単位の表示名            | 計測単位の説明             | 対象メーター名      | 単位使用量あたりの金額 | 上限 | 通貨  |
| :----------------- | :------------------ | :------------------ | :----------- | :---------- | :- | :-- |
| enterprise_comment | Enterpriseプランコメント数  | Enterpriseプランコメント数  | コメント数 | 0           | 0  | JPY |

## 機能メニュー
| 機能メニュー名         | 機能メニューの表示名          | 機能メニューの説明           | 計測単位                                                            |
| :-------------- | :------------------ | :------------------ | :-------------------------------------------------------------- |
| individual_menu   | Individualプラン基本メニュー   | Individualプラン基本メニュー   | Individualプラン基本料金<br />Individualプランのコメント数       |
| enterprise_menu | Enterpriseプラン基本メニュー | Enterpriseプラン基本メニュー | Enterpriseプラン基本料金<br />Enterpriseプランのコメント数 |

## 料金プラン
| 料金プラン名        | 料金プランの表示名     | 料金プランの説明      | 機能メニュー              |
| :------------ | :------------ | :------------ | :------------------ |
| individual_plan   | Individualプラン   | Individualプラン   | Individualプラン基本メニュー   |
| enterprise_plan | Enterpriseプラン | Enterpriseプラン | Enterpriseプラン基本メニュー |