---
title: "認証セキュリティ・ポリシーの実装"
slug: "security"
excerpt: "認証APIで取得したトークンの安全な管理とCSRF対策の実装"
hidden: false
createdAt: "Tue Mar 03 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 13 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
---

認証APIで取得したトークンを安全に管理するためのセキュリティ実装について解説します。

:::info
認証APIの全体像については [認証API実装ガイド](/docs/part-6/implementation-guide/auth/overview) を、ログイン処理の実装については [認証APIを利用した基本実装](/docs/part-6/implementation-guide/auth/basic-sign-in) をご参照ください。
:::

## HttpOnly Cookie によるトークン管理

取得したトークンは、**HttpOnly Cookie** に保存します。ローカルストレージに保存する方法と比較して、XSS（クロスサイトスクリプティング）攻撃によるトークン窃取のリスクを低減できます。

```go
// トークンを HttpOnly Cookie にセットする関数
func setTokenCookies(c echo.Context, tokens Tokens) {
    // アクセストークン
    c.SetCookie(&http.Cookie{
        Name:     "access_token",
        Value:    tokens.AccessToken,
        Path:     "/",
        HttpOnly: true,
        Secure:   true, // HTTPS 環境では必ず true
        SameSite: http.SameSiteStrictMode,
        MaxAge:   3600, // 1時間
    })

    // リフレッシュトークン
    c.SetCookie(&http.Cookie{
        Name:     "refresh_token",
        Value:    tokens.RefreshToken,
        Path:     "/",
        HttpOnly: true,
        Secure:   true,
        SameSite: http.SameSiteStrictMode,
        MaxAge:   86400 * 30, // 30日
    })

    // ID トークン
    c.SetCookie(&http.Cookie{
        Name:     "id_token",
        Value:    tokens.IDToken,
        Path:     "/",
        HttpOnly: true,
        Secure:   true,
        SameSite: http.SameSiteStrictMode,
        MaxAge:   3600, // 1時間
    })
}
```

### Cookie 属性の設定ポイント

| 属性 | 設定値 | 説明 |
|---|---|---|
| `HttpOnly` | `true` | JavaScript からのアクセスを禁止し、XSS 攻撃からトークンを保護 |
| `Secure` | `true` | HTTPS 接続時のみ Cookie を送信（本番環境では必須） |
| `SameSite` | `Strict` | クロスサイトリクエストでの Cookie 送信を防止 |
| `Path` | `/` | アプリケーション全体で Cookie を利用可能に |

:::info 開発環境での注意
ローカル開発環境（`http://localhost`）では、`Secure` 属性を `false` に設定する必要がある場合があります。環境変数で切り替えられるようにしておくことを推奨します。
:::

## CSRF 対策

HttpOnly Cookie を使用する場合、CSRF（クロスサイトリクエストフォージェリ）対策が必要です。本サンプルでは、以下の対策を組み合わせて実装しています：

1. **SameSite Cookie 属性**: `SameSite=Strict` を設定し、クロスサイトからの Cookie 送信を防止
2. **CSRF トークン**: サーバー側で生成した CSRF トークンをフロントエンドに渡し、リクエスト時にヘッダーに含めて検証

```go
// CSRF ミドルウェアの設定例
e.Use(middleware.CSRFWithConfig(middleware.CSRFConfig{
    TokenLookup: "header:X-CSRF-Token",
    CookiePath:  "/",
}))
```
