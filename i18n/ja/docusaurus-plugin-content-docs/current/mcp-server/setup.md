---
title: "SaaSus API MCP Server 設定ガイド"
slug: "setup"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:47:47 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed May 22 2024 15:16:11 GMT+0000 (Coordinated Universal Time)"
---

# SaaSus API MCP Server 設定ガイド

## 概要
SaaSus API MCP Serverは、Model Context Protocol (MCP) サーバーとして動作し、SaaSus Platform APIをClaude DesktopやCursorなどのMCP互換クライアントから利用できるようにします。

## 前提条件
- Node.js（v16以上必須、v20以上推奨）
- npm（Nodeに含まれています）

## インストール手順

### 1. リポジトリのクローン
以下のコマンドでプロジェクトをクローンしてください。

```bash
git clone https://github.com/saasus-platform/saasus-api-mcp-server.git
cd saasus-api-mcp-server
```

### 2. 依存関係のインストール
プロジェクトのルートディレクトリで以下のコマンドを実行してください。

```bash
npm install
```

### 3. 利用可能なツールの確認
生成されたツールの説明とパラメータを確認するには、以下のコマンドを実行してください。

```bash
node index.js tools
```

実行例：
```
Available Tools:
Workspace: saasus-auth-api-schema
  Collection: get-basic-configurations.js
    get_basic_configurations
      Description: Get basic configurations including domain name and CNAME records.
      Parameters:
    [...]
```

## Claude Desktop での設定

### 1. ローカル環境の確認

nodeのパスを確認します
```bash
which node
```

mcpServer.jsのパスを確認します
```bash
realpath mcpServer.js
```

### 2. SaaSus Platform のAPIキー情報の取得

SaaSus API MCP Serverを使用するには、以下の環境変数を設定する必要があります
これらの値は、SaaSus Platform のSaaS開発コンソールから取得できます。

- `SAASUS_PLATFORM_SAASID`: SaaS ID
- `SAASUS_PLATFORM_APIKEY`: API キー
- `SAASUS_PLATFORM_SECRETKEY`: シークレットキー

### 3. MCP Server の設定
手順１、２で取得した情報を設定ファイルに追加します：

```json
{
  "mcpServers": {
    "saasusapis": {
      "command": "node のパス",
      "args": ["mcpServer.js のパス"],
      "env": {
        "SAASUS_PLATFORM_SAASID": "SaaS ID",
        "SAASUS_PLATFORM_APIKEY": "API キー",
        "SAASUS_PLATFORM_SECRETKEY": "シークレットキー"
      }
    }
  }
}
```

**注意:** `mcpServer.js のパス` の部分は、実際にクローンしたディレクトリのフルパスに置き換えてください。

### 4. Claude Desktop の再起動
設定を反映するため、Claude Desktopを再起動します。

### 5. Claude Desktop での動作確認
``SaaSusの基本情報を取得してください``とお願いしてください。  
正常に基本情報が取得できたら設定は完了です。

## 利用可能な機能

SaaSus API MCP Serverでは、SaaSus Platform の全APIエンドポイントが利用できます。  
主な機能には以下が含まれます

### 認証API (Auth API)
- 基本設定の取得・更新
- ユーザー管理
- テナント管理
- 認証設定

### 課金API (Billing API)
- 料金プラン管理
- メータリング
- 税率設定

### 価格設定API (Pricing API)
- 価格単位管理
- 価格メニュー管理
- 価格プラン管理

### その他のAPI
- 通信API (Communication API)
- APIログAPI (API Log API)
- AWS Marketplace API
- 統合API (Integration API)

## トラブルシューティング

### よくある問題

#### 1. サーバーが起動しない
- Node.jsのバージョンを確認してください（v16以上が必要、v20以上推奨）
- 依存関係が正しくインストールされているか確認してください
- 環境変数が正しく設定されているか確認してください

#### 2. APIキーエラー
- SaaSus Platform のAPIキーが正しく設定されているか確認してください
- APIキーの権限が適切に設定されているか確認してください
- SaaS IDが正しく設定されているか確認してください

#### 3. MCP接続エラー
- Claude Desktop または Cursor の設定ファイルのパスが正しいか確認してください
- 設定ファイルのJSON形式が正しいか確認してください
- アプリケーションを再起動してください

### ツール一覧の確認
利用可能なツールを確認するには：

```bash
node index.js tools
```

このコマンドで、すべての利用可能なAPIエンドポイントとそのパラメータを確認できます。
