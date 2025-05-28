---
title: "Smart MCP Server 機能"
slug: "smart-mcp-server-overview"
excerpt: ""
hidden: false
createdAt: "Sun May 26 2025 07:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Sun May 26 2025 07:00:00 GMT+0000 (Coordinated Universal Time)"
---

Smart MCP Server機能は、Smart API Gateway機能で公開したAPIを、Model Context Protocol（MCP）サーバーとして自動的に提供する革新的な機能です。  
AIエージェントやLLM（大規模言語モデル）がAPIを直接呼び出すことができるリモートMCPサーバーを、SaaSus Platformのコンソールから簡単な設定だけで公開できます。  
これにより、既存のAPIをAIエージェントが利用可能な形式で即座に提供し、AI駆動のアプリケーション開発を加速させることができます。なお、Smart MCP Server機能は SaaSus Platform の**全てのプラン**で利用可能です。

:::info
サンプルデモ動画の視聴や Smart MCP Server 機能のデモンストレーション、チュートリアルのサポート、導入検討のための情報収集、実装に関する技術相談をご希望の方は、以下のサポート申請フォームよりお問い合わせください。

[Smart MCP Server by SaaSus Platform サポート申請フォーム](https://forms.gle/DVDqrcNc525E9GG68)<br/>
:::

## Smart MCP Server アーキテクチャ

Smart MCP Server機能では、これらの複雑な実装を自動化し、シンプルな設定だけでMCPサーバーを提供します：



### アーキテクチャの構成要素

#### 1. Smart API Gateway Layer
- **API管理**: 既存のSmart API Gateway機能で管理されたAPI
- **認証・認可**: 統一されたAPI Key認証システム
- **スロットリング**: レート制限とトラフィック制御
- **監査ログ**: 全てのAPI呼び出しの記録と追跡

#### 2. MCP Protocol Adapter
- **自動スキーマ変換**: APIスキーマからMCPツール定義への自動変換
- **リアルタイム同期**: API変更の即時反映
- **エラーハンドリング**: APIエラーのMCP形式への変換
- **パフォーマンス最適化**: 効率的なデータ転送とキャッシング

## Model Context Protocol（MCP）について

### MCPの概要

Model Context Protocol（MCP）は、Anthropic社が主導して開発されたオープンスタンダードで、AIエージェントが外部データソースやツールと安全かつ効率的に接続するためのプロトコルです。

## 前提条件

Smart MCP Server機能を利用するための前提条件は以下の通りです：

### 技術的前提条件

#### 1. Smart API Gateway機能の設定完了
- **APIの公開**: 少なくとも1つのAPIエンドポイントが公開済み
- **認証設定**: API Key認証が適切に設定済み
- **権限設定**: 必要なロールと権限が定義済み

#### 2. SaaSus Platform環境
- **開発コンソールアクセス**: 管理者または開発者権限
- **テナント設定**: 有効なテナントが作成済み
- **課金設定**: 有効な課金プランが設定済み

#### 3. ネットワーク環境
- **HTTPS通信**: SSL/TLS証明書が適切に設定済み
- **ファイアウォール**: 必要なポートが開放済み
- **DNS設定**: ドメイン名が適切に解決可能

### 運用面の前提条件

#### 1. セキュリティポリシー
- **API Key管理**: 適切なキーローテーション戦略
- **アクセス制御**: 最小権限の原則に基づいた設定
- **監査ログ**: ログ記録と監視体制の整備

#### 2. 運用体制
- **監視体制**: システム監視とアラート設定
- **インシデント対応**: 障害発生時の対応手順
- **バックアップ**: データバックアップと復旧手順

:::info
Smart MCP Server機能は、Smart API Gateway機能の拡張機能として提供されます。<br/>
まずSmart API Gateway機能でAPIを公開してから、本機能をご利用ください。

詳細な設定手順については、[Smart API Gateway セットアップガイド](./manual.mdx)をご参照ください。
:::

## 主な機能

Smart MCP Server機能は、AIエージェントとAPIの連携を簡素化する包括的な機能セットを提供します：

### 1. 自動同時展開

#### シームレスな自動公開
- **同時展開**: Smart API GatewayでAPIが公開されると、MCPサーバーも自動的に同時展開
- **追加設定不要**: Smart API Gateway機能の設定完了と同時にMCPサーバーが利用可能
- **即座の利用開始**: APIの公開完了後すぐにAIエージェントからアクセス可能

#### OpenAPI から MCP への変換
Smart API Gatewayで定義されたOpenAPIスキーマを、MCPツール定義に自動変換します：

### 2. リアルタイム同期

#### 自動反映メカニズム
Smart API Gatewayでの変更が即座にMCPサーバーに反映されます

- **スキーマ更新**: API定義の変更が自動でMCPツールに反映
- **権限変更**: アクセス権限の更新が即座に適用

:::tip
具体的な設定方法、実装手順については、以下のチュートリアルページで詳しく解説しています：

- [Smart MCP Server チュートリアル](../tutorial/smart-mcp-server-tutorial.md) - 基本的な設定から実装まで

まずは基本チュートリアルから始めて、段階的に高度な機能をご活用ください。
:::