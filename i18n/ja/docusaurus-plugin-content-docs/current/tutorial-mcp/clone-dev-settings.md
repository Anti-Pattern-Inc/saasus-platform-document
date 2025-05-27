---
title: "Lastly"
slug: "clone-dev-settings"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:47:47 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed May 22 2024 15:16:11 GMT+0000 (Coordinated Universal Time)"
---

# SaaSus Platform 環境情報取得手順書

## 概要
SaaSus Platformの各種設定情報を包括的に取得し、JSON形式で出力する手順書です。

## 前提条件
- SaaSus API MCP Serverが設定済みであること
- 適切なAPIアクセス権限があること


## MCP Serverへの依頼文言

### 基本的な依頼文
```
SaaSusの設定を取得して、JSON形式で一つのファイルに出力してください。

以下の情報を含めてください：
- ドメイン設定
- 認証後遷移先
- 認証詳細設定（基本設定）
- 認証詳細設定（画面設定）
- 認証詳細設定（認証設定）
- 認証詳細設定（メール通知内容）
- ユーザー属性定義
- テナント属性定義
- ユーザー環境定義
- 役割定義
- メーター単位設定
- 計測単位設定
- 機能メニュー設定
- 料金プラン設定
- 税率設定
- 請求情報
- イベント連携
- AWS Marketplace情報
```
## 出力ファイル構造

```json
{
  "domain": { ... },
  "callback_url": "...",
  "auth_basic_settings": { ... },
  "auth_page_settings": { ... },
  "auth_identity_providers": { ... },
  "notification_messages": { ... },
  "user_attributes": [ ... ],
  "tenant_attributes": [ ... ],
  "environments": [ ... ],
  "roles": [ ... ],
  "metering_units": [ ... ],
  "pricing_units": [ ... ],
  "pricing_menus": [ ... ],
  "pricing_plans": [ ... ],
  "tax_rates": [ ... ],
  "billing_info": { ... },
  "event_bridge_settings": { ... },
  "aws_marketplace": { ... }
}
```
