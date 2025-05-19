---
title: "The difference in rate calculation between Tiered units and Tiered usage units"
slug: "tiered-unit"
excerpt: ""
hidden: false
createdAt: "Fri Oct 06 2023 05:47:21 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 07 2023 01:25:35 GMT+0000 (Coordinated Universal Time)"
---
In unit measurement settings, you set the smallest unit of measurement which serves as the basis for rate calculation. 
'Tiered units' are like mobile phone packet charges, where a fixed fee is incurred at each usage stage, 
'Tiered usage units' are like volume discounts, where the unit price fluctuates according to usage.

Applying the respective definitions, I will explain the method for calculating charges in the case of making 15 comments.

| Unit~(and above) | Up to ~ units (or less) | Unit price | Remarks |
| ------- | --------- | ---- | --------------------- |
| 1       | 10        | 100 yen | For the range of 1 ~ 10 comments, each comment costs 100 yen. |
| 11      | 20        | 90 yen  | For the range of 11 ~ 20 comments, each comment costs 90 yen. |
| 21      | 30        | 80 yen  | For the range of 21 ~ 30 comments, each comment costs 80 yen. |
| 31      | ♾️        | 70 yen  | For 31 comments and above, each comment costs 70 yen. |

## Tiered Units

15 items \* 90 yen = ***1350 yen***

With Tiered Units, you will be billed 1350 yen. 

## Tiered usage Units

10 items \* 100 yen = 1000 yen

5 items \* 90 yen = 450 yen

1000 yen + 450 yen = ***1450 yen***

With Tiered usage Units, you will be billed 1450 yen. 
