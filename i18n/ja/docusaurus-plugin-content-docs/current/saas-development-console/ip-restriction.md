---
title: "IP制限"
slug: "ip-restriction"
excerpt: ""
hidden: false
createdAt: "Mon Mar 25 2024 14:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 25 2024 14:00:00 GMT+0000 (Coordinated Universal Time)"
---

IP制限機能は、SaaSus コンソールおよびAPIへのリクエストにIP制限を行う機能です。

:::info
IP制限機能はアドバンスドプラン以上のお客様のみご利用いただけます。
:::

## IP制限申請

### 申請方法

Intercomからお問い合わせください。

### 申請内容

SaaSusコンソールとAPIそれぞれに対して、許可したいIPのCIDRリストをお送りください。

  SaaSusコンソール
  ```
  xxx.xxx.xxx.xxx/32, yyy.yyy.yyy.yyy/24
  ```
  API
  ```
  aaa.aaa.aaa.aaa/32, bbb.bbb.bbb.bbb/24
  ```

## IP制限設定後の挙動

IP制限設定後は、以下のようにアクセスが制限されます。

1. **対象外のIPからログインしようとした場合**

   ![ip-restriction-1](/ja/img/saas-development-console/ip-restriction-1.png)

2. **対象外のIPからAPIアクセスしようとした場合**

   APIのレスポンスボディは以下のようになります。
   ```
   {
       "message": "IP address: xxx.xxx.xxx.xxx is not allowed",
       "type": "ip_restricted"
   }
   ```