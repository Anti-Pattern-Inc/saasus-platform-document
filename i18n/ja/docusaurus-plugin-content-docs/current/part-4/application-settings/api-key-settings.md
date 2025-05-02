---
title: "APIキーの確認"
slug: "apy-key"
description: "SaaSus SDK / APIを連携するために必要なキーを確認・管理します。"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---

> SaaSus SDK / APIを連携するために必要なキーを確認・管理します。

このページでは、SaaSus SDK や API の利用時に必要となる「SaaS ID」「APIキー」「クライアントシークレット」の確認・再発行手順を説明します。  
いずれもサイドメニューの「APIキー」から確認・操作できます。

## SaaS ID の確認・再発行

**SaaS ID** は、SaaSを一意に識別するための ID です。

- SaaS ID は通常変更の必要はありません。
- 必要に応じて「SaaS ID の再発行」ボタンから再発行が可能です。

## APIキーの確認・発行

**APIキー** は、SDK や API を用いたリクエストにおいて必要な認証情報です。

- 最大 2 件まで発行可能で、**キーのローテーション利用が推奨**されます。
- 「APIキーの発行」ボタンをクリックすると、新しいキーが生成されます。
- セキュリティの観点から、**キーの漏洩や不正利用に注意**してください。

## クライアントシークレットの再発行

**クライアントシークレット** は、リクエストの署名に使用される機密情報です。ネットワーク上に送信されることはありません。

- API コール時の署名生成に使用されます。
- 「クライアントシークレットの再発行」ボタンをクリックして、新しいシークレットを取得できます。


![APIキー画面](/ja/img/part-4/application-settings/api-key-settings/api-key.png)

