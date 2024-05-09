---
title: "段階ユニット、段階的使用量ユニットの料金計算の違いについて"
slug: "tiered_unit"
excerpt: ""
hidden: false
createdAt: "Fri Oct 06 2023 05:47:21 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
計測単位設定では料金計算の基礎となる最小の計測単位を設定します。  
「段階ユニット」は、携帯電話のパケット料金のように、使用量の各段階で一定の料金が発生する単位、  
「段階的使用量ユニット」は、ボリュームディスカウントのように、使用量に応じて一単位あたりの料金が変動する単位となります。

それぞれに以下の定義を適用し、15件コメントをした場合の料金計算方法を説明します。

| 単位〜(以上) | 〜単位まで(以下) | 単位金額 | 備考                    |
| ------- | --------- | ---- | --------------------- |
| 1       | 10        | 100円 | 1〜10 件の範囲は、１コメント 100円 |
| 11      | 20        | 90円  | 11〜20 件の範囲は、１コメント 90円 |
| 21      | 30        | 80円  | 21〜30 件の範囲は、１コメント 80円 |
| 31      | ♾️        | 70円  | 31〜 件以降は、１コメント 70円    |

## 段階ユニット

15 件 \* 90 円 =  **1350 円**

段階ユニット は 1350 円 の請求を行うこととなります

## 段階的使用量ユニット

10 件 \* 100 円 =  1000 円  
5 件 \*  90 円 =  450 円

1000 円 + 450 円 = **1450 円**

段階的使用量ユニット は 1450 円 の請求を行うこととなります。