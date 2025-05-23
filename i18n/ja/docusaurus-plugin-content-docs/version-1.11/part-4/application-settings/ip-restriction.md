---
title: "IP制限"
slug: "ip-restriction"
description: "特定のIPアドレスからのみSaaSus PlatformコンソールやAPIにアクセスできるよう制限する機能です。対象プラン、申請方法、制限後の挙動を説明します。"
excerpt: ""
hidden: false
createdAt: "Mon Mar 25 2024 14:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Mar 25 2024 14:00:00 GMT+0000 (Coordinated Universal Time)"
---

> 特定のIPアドレスからのみSaaSus PlatformコンソールやAPIにアクセスできるよう制限する機能です。対象プラン、申請方法、制限後の挙動を説明します。

IP制限機能は、SaaSus PlatformコンソールおよびAPIへのリクエストにIP制限を行う機能です。

:::info
IP制限機能はアドバンスドプラン以上のお客様のみご利用いただけます。
:::

## IP制限申請

### 申請方法

Intercomからお問い合わせください。

### 申請内容

SaaSus PlatformコンソールとAPIそれぞれに対して、許可したいIPのCIDRリストをお送りください。

  SaaSus Platformコンソール
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

   ![ip-restriction-1](/ja/img/part-4/application-settings/ip-restriction/ip-restriction-1.png)

2. **対象外のIPからAPIアクセスしようとした場合**

   APIのレスポンスボディは以下のようになります。
   ```
   {
       "message": "IP address: xxx.xxx.xxx.xxx is not allowed",
       "type": "ip_restricted"
   }
   ```