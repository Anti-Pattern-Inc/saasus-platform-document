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

[Smart MCP Server by SaaSus Platform サポート申請フォーム](https://forms.gle/XhFD9fCQv1zVGyRT9)<br/>
:::

## AI エージェントとAPIの連携における課題

従来のAIエージェントがAPIを利用する際には、以下のような課題がありました：

### 技術的複雑さ

- **カスタムプラグイン開発**: 各APIに対して専用のプラグインやアダプターを開発する必要
- **認証実装**: OAuth、API Key、JWTなど複数の認証方式への対応
- **エラーハンドリング**: APIエラーのAIエージェントへの適切な伝達
- **データ変換**: APIレスポンスのAIエージェントが理解可能な形式への変換

### 運用面の負担

- **APIスキーマの維持**: APIの変更に合わせたプラグインの更新
- **セキュリティ管理**: 各プラグインのセキュリティ監査と脆弱性対応
- **パフォーマンス最適化**: AIエージェントとAPIの通信速度向上
- **バージョン管理**: 複数のAPIバージョンへの対応

### スケーラビリティの問題

- **複数AIエージェント対応**: 異なるAIエージェントプラットフォームへの個別対応
- **大量リクエスト処理**: AIエージェントからの高頻度アクセスへの対応
- **リソース管理**: AI用途での予期せぬAPIコール増加への対応

## Smart MCP Server を使用しない場合のイメージ

MCPサーバーを手動で構築する場合、以下の開発・運用作業が必要になります：



### 手動実装に必要な作業

#### 1. MCPプロトコル実装
```typescript
// MCPサーバーの基本実装例
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

class CustomMCPServer {
  private server: Server;
  
  constructor() {
    this.server = new Server(
      {
        name: "custom-api-server",
        version: "1.0.0"
      },
      {
        capabilities: {
          tools: {}
        }
      }
    );
    
    // ツールの手動登録
    this.setupTools();
  }
  
  private setupTools() {
    // 各APIエンドポイントのツール定義を手動作成
    this.server.setRequestHandler('tools/list', async () => {
      return {
        tools: [
          {
            name: "get_inventory",
            description: "在庫情報を取得",
            inputSchema: {
              type: "object",
              properties: {
                tenantId: { type: "string" },
                productId: { type: "string" }
              }
            }
          }
          // 他のツールも手動定義...
        ]
      };
    });
  }
}
```

#### 2. API認証・認可の実装
```typescript
// 認証処理の実装
class AuthenticationHandler {
  async validateApiKey(apiKey: string): Promise<boolean> {
    // API Keyの検証ロジック
    const response = await fetch('/api/validate-key', {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    return response.ok;
  }
  
  async getTenantFromApiKey(apiKey: string): Promise<string> {
    // テナント情報の取得
    // 複雑な認証フローの実装が必要
  }
}
```

#### 3. スキーマ変換とデータマッピング
```typescript
// APIレスポンスのMCP形式への変換
class ResponseTransformer {
  transformInventoryResponse(apiResponse: any): MCPToolResult {
    // APIレスポンスをMCPツール結果に変換
    return {
      content: [
        {
          type: "text",
          text: this.formatInventoryData(apiResponse)
        }
      ]
    };
  }
  
  private formatInventoryData(data: any): string {
    // データフォーマットの変換ロジック
    // APIの仕様変更に合わせた継続的な更新が必要
  }
}
```

### 手動実装のデメリット

- **開発工数**: 初期実装に数週間から数ヶ月
- **保守コスト**: API変更のたびにMCPサーバーの更新が必要
- **品質リスク**: 手動実装によるバグやセキュリティ脆弱性
- **拡張性の限界**: 新しいAPIの追加や変更への対応が困難

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

#### 3. AI Agent Interface
- **標準MCPプロトコル**: 業界標準に準拠したインターフェース
- **複数エージェント対応**: Claude、GPT-4、カスタムエージェントとの互換性
- **セキュアな通信**: HTTPS暗号化とAPI Key認証
- **リアルタイム応答**: 低レイテンシでの高速処理

## Model Context Protocol（MCP）について

### MCPの概要

Model Context Protocol（MCP）は、Anthropic社が主導して開発されたオープンスタンダードで、AIエージェントが外部データソースやツールと安全かつ効率的に接続するためのプロトコルです。

### MCPの設計原則

#### 1. セキュリティファースト
- **権限分離**: 各ツールに最小限の権限のみを付与
- **暗号化通信**: 全ての通信がHTTPS/TLSで保護
- **認証制御**: 強力な認証メカニズムによるアクセス制御

#### 2. 相互運用性
- **標準化されたAPI**: 異なるAIエージェント間での互換性
- **プラットフォーム非依存**: 特定のAIプラットフォームに依存しない設計
- **拡張可能**: 新しい機能やツールの追加が容易

#### 3. パフォーマンス
- **効率的なプロトコル**: 最小限のオーバーヘッドで高速通信
- **並行処理**: 複数のツール呼び出しの同時実行
- **キャッシング**: 頻繁にアクセスされるデータの効率的な管理

### MCPの主要コンポーネント

#### ツール（Tools）
AIエージェントが実行できる個別の機能または操作です。

```json
{
  "name": "get_inventory",
  "description": "指定されたテナントの在庫情報を取得します",
  "inputSchema": {
    "type": "object",
    "properties": {
      "tenantId": {
        "type": "string",
        "description": "テナントの一意識別子"
      },
      "productId": {
        "type": "string", 
        "description": "製品の一意識別子（省略可能）"
      },
      "includeHistory": {
        "type": "boolean",
        "description": "履歴データを含めるかどうか",
        "default": false
      }
    },
    "required": ["tenantId"]
  }
}
```

#### リソース（Resources）
AIエージェントがアクセスできるデータソースや情報です。

```json
{
  "uri": "saasus://inventory/tenant-123",
  "name": "テナント123の在庫データ",
  "description": "リアルタイムの在庫情報と履歴データ",
  "mimeType": "application/json"
}
```

#### プロンプト（Prompts）
事前定義されたテンプレートやコンテキストです。

```json
{
  "name": "inventory_analysis",
  "description": "在庫分析レポートの生成",
  "arguments": [
    {
      "name": "period",
      "description": "分析期間（日数）",
      "required": true
    }
  ]
}
```

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

### 1. ワンクリック公開

#### 簡単な有効化プロセス
- **トグルスイッチ**: SaaSus Platformコンソールで設定をONにするだけ
- **自動設定**: 必要なインフラが自動的に構築
- **即座の利用開始**: 設定完了後すぐにMCPサーバーが利用可能

#### 設定の簡素化
```yaml
# 従来の手動設定（数百行の設定が必要）
mcp_server:
  name: "custom-api-server"
  version: "1.0.0"
  tools:
    - name: "get_inventory"
      endpoint: "/api/inventory"
      method: "GET"
      authentication:
        type: "api_key"
        header: "x-api-key"
      # ... 詳細な設定が続く

# Smart MCP Server（設定不要）
smart_mcp_server:
  enabled: true  # これだけで完了
```

### 2. 自動スキーマ変換

#### OpenAPI から MCP への変換
Smart API Gatewayで定義されたOpenAPIスキーマを、MCPツール定義に自動変換します：

```yaml
# OpenAPI定義（入力）
/api/inventory:
  get:
    summary: "在庫情報取得"
    parameters:
      - name: tenantId
        in: query
        required: true
        schema:
          type: string
    responses:
      '200':
        description: "成功"
        content:
          application/json:
            schema:
              type: object
              properties:
                products:
                  type: array
                  items:
                    $ref: '#/components/schemas/Product'
```

```json
// MCP ツール定義（自動生成）
{
  "name": "get_inventory",
  "description": "在庫情報取得",
  "inputSchema": {
    "type": "object",
    "properties": {
      "tenantId": {
        "type": "string",
        "description": "テナントID"
      }
    },
    "required": ["tenantId"]
  }
}
```

#### 複雑なデータ型の対応
- **ネストしたオブジェクト**: 階層構造を持つデータの適切な変換
- **配列とコレクション**: リスト形式データの効率的な処理
- **カスタム型**: 独自定義された複合データ型の変換
- **条件付きフィールド**: オプショナル項目と必須項目の適切な区別

### 3. 認証統合

#### 統一認証システム
既存のSmart API Gateway認証システムとシームレスに統合：

- **API Key継承**: 既存のAPI Keyがそのまま利用可能
- **テナント分離**: マルチテナント環境での適切な権限分離
- **ロールベースアクセス**: 細かい権限制御の継承
- **セッション管理**: 安全なセッション管理とタイムアウト制御

### 4. リアルタイム同期

#### 自動反映メカニズム
Smart API Gatewayでの変更が即座にMCPサーバーに反映：

- **スキーマ更新**: API定義の変更が自動でMCPツールに反映
- **権限変更**: アクセス権限の更新が即座に適用
- **エンドポイント追加**: 新しいAPIの自動追加
- **非推奨化対応**: 古いAPIの段階的な廃止管理

### 5. セキュアな接続

#### 通信セキュリティ
- **TLS 1.3暗号化**: 最新の暗号化プロトコルによる通信保護
- **証明書検証**: 正当なクライアントのみの接続を許可
- **中間者攻撃対策**: 証明書ピンニングによる高度なセキュリティ
- **データ完全性**: メッセージの改ざん検出と防止

## 利用シーン

Smart MCP Server機能は、様々なビジネスシーンでAIエージェントの活用を可能にします：

### 1. AIエージェント統合

#### Claude Desktop での活用
```json
{
  "mcpServers": {
    "business-api": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-fetch", "https://mcp.saasus.io/your-saas-id"],
      "env": {
        "MCP_API_KEY": "your-business-api-key"
      }
    }
  }
}
```

**活用例**:
- **営業支援**: 顧客データの即座取得と分析
- **カスタマーサポート**: 問い合わせ内容の自動分類と回答生成
- **レポート作成**: ビジネスデータからの自動レポート生成

### 2. データ取得自動化

#### リアルタイムビジネス分析
```typescript
// AIエージェントによる自動データ分析
interface BusinessAnalysis {
  // 売上データの自動取得
  getSalesData(period: string): Promise<SalesMetrics>;
  
  // 在庫レベルの監視
  monitorInventory(): Promise<InventoryAlert[]>;
  
  // 顧客行動の分析
  analyzeCustomerBehavior(segment: string): Promise<BehaviorInsights>;
  
  // 予測分析の実行
  generateForecasts(metrics: string[]): Promise<ForecastResults>;
}
```

### 3. ワークフロー自動化

#### 業務プロセスの自動化
```yaml
# 自動化ワークフローの例
workflow_name: "new_customer_onboarding"
trigger: "customer_signup_event"
steps:
  - name: "create_tenant"
    tool: "create_new_tenant"
    inputs:
      company_name: "{{event.company_name}}"
      admin_email: "{{event.admin_email}}"
  
  - name: "setup_initial_plan"
    tool: "assign_pricing_plan"
    inputs:
      tenant_id: "{{steps.create_tenant.tenant_id}}"
      plan_type: "starter"
```

### 4. インテリジェントダッシュボード

#### AI駆動の動的レポート
AI がリアルタイムでビジネスデータを分析し、洞察と推奨アクションを自動生成します。

## 注意事項

Smart MCP Server機能の利用にあたり、以下の重要な点にご注意ください：

### システム要件と制限事項

#### 1. MCPサーバーエンドポイント
- **新規エンドポイント作成**: 専用のMCPサーバーエンドポイントが新たに作成されます
- **追加料金なし**: MCPサーバー機能自体に追加の料金は発生しません
- **ドメイン要件**: HTTPS必須、独自ドメインの設定推奨
- **可用性**: 99.9%のSLA保証（Smart API Gatewayと同等）

#### 2. API利用料金
- **従量課金**: MCPサーバー経由でのAPI呼び出しも、通常のAPI利用と同じ料金体系が適用
- **課金単位**: API呼び出し回数、データ転送量に基づく課金
- **予算管理**: SaaSus Platform コンソールでの使用量監視と予算アラート設定可能

#### 3. レート制限とスロットリング
- **継承設定**: Smart API Gatewayで設定されたスロットリング設定がMCPサーバーにも適用
- **AIエージェント考慮**: AI特有の高頻度アクセスパターンに対応した調整可能
- **動的制限**: リアルタイムでの制限値調整とバースト対応

### セキュリティ考慮事項

#### 1. API Key管理
- **専用キー推奨**: MCP用途専用のAPI Keyの作成を強く推奨
- **最小権限**: 必要最小限の権限のみを付与
- **定期ローテーション**: セキュリティ向上のため定期的なキー更新
- **監査ログ**: 全てのAPI Key使用状況の詳細ログ記録

#### 2. データプライバシー
- **データ暗号化**: 転送時・保存時ともに暗号化
- **ログ管理**: 個人情報を含むログの適切な管理と保持期間設定
- **GDPR対応**: EU地域での利用時のGDPR準拠設定
- **地域制限**: 特定地域からのアクセス制限機能

### パフォーマンス最適化

#### 1. キャッシング戦略
- **レスポンスキャッシュ**: 頻繁にアクセスされるデータの効率的なキャッシング
- **TTL設定**: データの鮮度に応じた適切なTime-To-Live設定
- **キャッシュ無効化**: データ更新時の即座なキャッシュクリア

#### 2. 並行処理制限
- **同時接続数**: AIエージェントからの並行リクエスト数の制限
- **リソース保護**: システムリソースの適切な分散と保護
- **優先度制御**: 重要な処理の優先実行設定

### 運用監視項目

#### 1. 必須監視メトリクス
- **可用性**: MCPサーバーの稼働時間とAPI応答時間
- **パフォーマンス**: リクエストスループットとレスポンスレイテンシ
- **セキュリティ**: 認証失敗や不審なアクセスパターンの検出
- **ビジネス**: API使用量の増加とコスト効率の監視

#### 2. アラート設定
- **即座対応**: 重大な障害やセキュリティインシデントの即座通知
- **予防保守**: 性能劣化やリソース不足の事前警告
- **利用状況**: 使用量急増や予算上限接近の通知