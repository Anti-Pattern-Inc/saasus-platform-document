---
title: "Trace ID によるリクエスト追跡ガイド"
slug: "trace-id-log-analysis"
excerpt: "Trace ID を利用した API リクエストの追跡・分析方法"
hidden: false
createdAt: "Sun May 04 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Sun May 04 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## 概要

SaaS アプリケーションでは、ユーザーの1つの操作が複数の API リクエストを発生させることがあります。例えば、管理画面のトップページを表示するだけでも、認証・ユーザー情報取得・MFA 状態確認など複数の SaaSus API が呼び出されます。

Trace ID（`X-SaaSus-Trace-Id`）を利用することで、これらの関連する API リクエストに共通の ID を割り当て、後からログを一括で追跡・分析できるようになります。

## アーキテクチャ

```
┌─────────────┐     X-SaaSus-Trace-Id     ┌─────────────┐     X-SaaSus-Trace-Id     ┌─────────────┐
│             │ ────────────────────────> │             │ ────────────────────────> │             │
│ フロントエンド │                           │ バックエンド   │                           │  SaaSus API │
│             │                           │             │                           │             │
└─────────────┘                           └─────────────┘                           └─────────────┘
   UUID 生成                               context に格納                             ログに記録
```

:::tip ポイント
バックエンドで context にセットすれば、SDK が全ての SaaSus API リクエストに `X-SaaSus-Trace-Id` を自動伝播します。アプリケーション側で API コールごとにヘッダーを個別設定する必要はありません。
:::

## 実装方法

### フロントエンド: Trace ID の生成と付与

フロントエンド側で UUID を生成し、バックエンドへのリクエストヘッダーに `X-SaaSus-Trace-Id` として付与します。

<Tabs>
<TabItem value="typescript" label="TypeScript" default>

```typescript
// UUID を生成
const traceId = crypto.randomUUID();

// バックエンドへのリクエストに付与
await fetch('/api/endpoint', {
  headers: {
    'Authorization': `Bearer ${jwtToken}`,
    'X-SaaSus-Trace-Id': traceId
  }
});
```

</TabItem>
</Tabs>

:::info Trace ID の生成粒度
ページ遷移単位・ユーザー操作単位など、分析したい粒度に合わせて生成タイミングを決定してください。同一の `trace_id` を複数リクエストで共有することで、一連の操作をグルーピングできます。
:::

### バックエンド: ミドルウェアによる context への格納

#### 標準 net/http の場合（SDK 提供ミドルウェアを使用）

SDK が提供する `middleware.ExtractTraceId` をそのまま利用できます。

<Tabs>
<TabItem value="go" label="Go" default>

```go
import (
    "github.com/saasus-platform/saasus-sdk-go/middleware"
)

// SDK 提供のミドルウェアを使用
mux := http.NewServeMux()
handler := middleware.ExtractTraceId(mux)
http.ListenAndServe(":8080", handler)
```

</TabItem>
</Tabs>

#### Echo などのフレームワークを使用する場合

フレームワーク固有のミドルウェア形式に合わせて context への格納処理を実装します。

<Tabs>
<TabItem value="go" label="Go" default>

```go
import (
    "context"

    "github.com/labstack/echo/v4"
    "github.com/saasus-platform/saasus-sdk-go/middleware"
)

// カスタムミドルウェア実装例
func SaaSusTraceIDMiddleware() echo.MiddlewareFunc {
    return func(next echo.HandlerFunc) echo.HandlerFunc {
        return func(c echo.Context) error {
            traceID := c.Request().Header.Get("X-SaaSus-Trace-Id")
            if traceID != "" {
                ctx := context.WithValue(c.Request().Context(), middleware.XSaaSusTraceIdKey, traceID)
                c.SetRequest(c.Request().WithContext(ctx))
            }
            return next(c)
        }
    }
}
```

</TabItem>
</Tabs>

Echo サーバーへの登録:

<Tabs>
<TabItem value="go" label="Go" default>

```go
e := echo.New()
e.Use(SaaSusTraceIDMiddleware())
```

</TabItem>
</Tabs>

### SDK 内部の自動伝播（実装不要）

SDK 内部では、各モジュール（auth, pricing, billing 等）の `RequestEditorFn` で `client.SetTraceID()` が呼ばれます。context に `XSaaSusTraceIdKey` が格納されていれば、SaaSus API へのリクエストヘッダーに `X-SaaSus-Trace-Id` が自動付与されます。

:::note 補足
`SetTraceID()` は `SetReferer()` とは独立した関数として提供されています。Referer の伝播と Trace ID の伝播はそれぞれ単一の責務を持ちます。
:::

## ログの確認・分析方法

Trace ID が伝播されると、SaaSus 側の API ログに `trace_id` フィールドとして記録されます。

### SaaSus コンソールでの確認

SaaSus 管理コンソールの「活動履歴ログ」から、`trace_id` でフィルタリングすることで関連する API リクエストを一覧表示できます。

### API ログの取得・分析

SaaSus API からログをプログラムで取得し、`trace_id` でフィルタリングすることも可能です。

#### ログレスポンス例

同一の `trace_id: 3564e3c3-...` によって、3つの API コールが 1つのユーザー操作に紐づいていることが確認できます。

| タイムスタンプ | API パス | Trace ID |
|:---|:---|:---|
| 2024-05-01 10:00:01 | /auth/credentials | 3564e3c3-... |
| 2024-05-01 10:00:02 | /auth/mfa | 3564e3c3-... |
| 2024-05-01 10:00:03 | /auth/mfa/secret | 3564e3c3-... |

## 分析ユースケース

| ユースケース | 方法 |
|:---|:---|
| エラー原因の特定 | エラーが発生したリクエストの `trace_id` で検索し、直前のリクエストや関連する API 呼び出しを確認 |
| ユーザー動線の分析 | 同一 `trace_id` のログを時系列で並べ、ユーザーがどのような操作フローを辿ったかを可視化 |
| パフォーマンス調査 | 同一 `trace_id` 内のリクエストの `created_at` を比較し、どの処理にどれだけ時間がかかっているかを特定 |

## まとめ

| 実装箇所 | 必要な作業 |
|:---|:---|
| フロントエンド | UUID を生成し `X-SaaSus-Trace-Id` ヘッダーに付与 |
| バックエンド | ミドルウェアでヘッダーを context に格納（SDK 標準 or フレームワーク用を選択） |
| SDK → SaaSus API | 自動（実装不要）。`SetTraceID()` が context から取得して伝播 |
| ログ分析 | SaaSus コンソールまたは API ログで `trace_id` によるフィルタリング |

## 参考リンク

- [行動履歴ログの実装](./activity-history-log)
- [SaaSus SDK Go リポジトリ](https://github.com/saasus-platform/saasus-sdk-go)
