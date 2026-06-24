---
title: "サンプルアプリケーション概要"
slug: "overview"
excerpt: "SaaSus Platformを活用したSaaSアプリケーションの実装サンプルについて説明します"
hidden: false
createdAt: "Thu Oct 09 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 09 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SaaSus Platformを使った実際のSaaSアプリケーションの実装例です。
認証、テナント管理、課金機能など、SaaSに必要な機能を動かしながら学習できます。

### 主な特徴
- **実践的**: 実際のSaaSで使われる機能を網羅
- **React + TypeScript**: フロントエンドにReactを使用
- **多言語対応**: Go、Python、Java、C#の実装例

## 実装方式について

このサンプルアプリケーションは、**APIサーバ版**として実装されています。

### APIサーバ版の特徴

バックエンドをAPIサーバで構成する実装方式で、以下のような特徴があります：
- SaaSus Platformの認証情報となるトークン（JWT）を、ブラウザのローカルストレージに保管
- SaaS Platform利用者はJWTを使って本人確認を行う
- フロントエンドはReactで実装
- バックエンドのAPIサーバはGo / Python / Java / C#で実装例を提供

**処理フロー（ログイン〜ユーザ一覧表示）**

![APIサーバ版の処理フロー](/ja/img/part-6/implementation-guide/sample-application/overview/SaaSus_PlatformAPI.png)

## 実装されている画面・機能一覧

### 認証関連画面

#### [`Callback.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/Callback.tsx) - 認証後遷移先画面

- SaaSus Platformからの認証情報を受け取り
- JWTトークンをローカルストレージに保存
- ユーザーのロールに応じて適切な画面に自動遷移
- ※リダイレクト処理のため、ユーザーには表示されません

#### [`SelfSignUp.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/SelfSignUp.tsx) - セルフサインアップ画面

![セルフサインアップ画面](/img/part-6/implementation-guide/sample-application/overview/self-signup.png)

- 新規ユーザーが自分でテナント作成
- テナント名の入力
- ユーザー属性・テナント属性の設定
- 属性タイプ別の入力フィールド（文字列、数値、真偽値、日付）

### ユーザー・テナント管理画面

#### [`TenantList.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/TenantList.tsx) - テナント一覧画面

![テナント一覧画面](/img/part-6/implementation-guide/sample-application/overview/tenant-list.png)

- 複数テナントに所属するユーザー向け
- テナント属性の表示（設定済み/未設定の表示）
- 各テナントのユーザー一覧画面への遷移

#### [`UserPage.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/UserPage.tsx) - ユーザー一覧画面（メイン画面）

![ユーザー一覧画面](/img/part-6/implementation-guide/sample-application/overview/user-page.png)

- **ログインユーザー情報表示**: テナント名、名前、メールアドレス、ロール、料金プラン
- **ユーザー一覧テーブル**: テナント内の全ユーザー表示
- **ユーザー属性表示**: カスタム属性の動的表示
- **管理者機能リンク**: 管理者のみ表示される機能へのリンク
- **ユーザー削除機能**: 管理者権限でのユーザー削除

### ユーザー管理機能

#### [`UserRegister.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/UserRegister.tsx) - ユーザー新規登録画面

![ユーザー新規登録画面](/img/part-6/implementation-guide/sample-application/overview/user-register.png)

- メールアドレス・パスワード入力
- ユーザー属性の設定
- 属性タイプ別の入力フィールド対応

#### [`UserInvitation.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/UserInvitation.tsx) - ユーザー招待画面

![ユーザー招待画面](/img/part-6/implementation-guide/sample-application/overview/user-invitation.png)

- メールアドレスでの招待送信
- 招待一覧の表示（メール、招待リンク、役割、ステータス、有効期限）
- 招待ステータスの管理

#### [`DeleteUserLog.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/DeleteUserLog.tsx) - ユーザー削除ログ画面

![ユーザー削除ログ画面](/img/part-6/implementation-guide/sample-application/overview/delete-user-log.png)

- 削除されたユーザーの履歴表示
- テナントID、ユーザーID、メールアドレス、削除日時

### 課金・メータリング機能

#### [`PlanSettings.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/PlanSettings.tsx) - プラン設定画面

![プラン設定画面](/img/part-6/implementation-guide/sample-application/overview/plan-settings.png)

- **現在のプラン表示**: プラン名、税率、変更予約情報
- **プラン変更機能**: 新しいプラン選択、税率設定
- **反映日設定**: 即時反映（5分後）または日時指定
- **プラン解除機能**: 現在のプランの解除
- **予約管理**: プラン変更予約の取り消し
- **編集制限**: 変更予定が近い場合の編集ロック

#### [`BillingDashboard.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/pages/BillingDashboard.tsx) - 課金情報ダッシュボード

![課金情報ダッシュボード](/img/part-6/implementation-guide/sample-application/overview/billing-dashboard.png)

- **課金サマリー**: 通貨別合計金額、計測単位数
- **料金プラン情報**: プラン詳細、税率情報
- **期間選択**: 月次/年次の請求期間選択
- **計測単位別課金情報**: 使用量と課金額の詳細表示
- **リアルタイムメータ更新**: インライン編集（+/-ボタン）
- **メータ更新モーダル**: 任意の値での増減、履歴補正

### セキュリティ機能

#### [`UserMfaSettingDialog.tsx`](https://github.com/saasus-platform/implementation-sample-front-react/blob/main/src/components/dialogs/UserMfaSettingDialog.tsx) - 多要素認証設定ダイアログ

![多要素認証設定ダイアログ](/img/part-6/implementation-guide/sample-application/overview/mfa-setting-dialog.png)
※このQRコードはデモンストレーション用のダミーデータです。実際の認証には使用できません。

- **MFA状態確認**: 有効/無効の確認
- **QRコード生成**: Google Authenticator等のQRコード表示
- **認証コード検証**: 認証アプリで生成される6桁コードの検証
- **MFA有効化/無効化**: 設定の切り替え
- **デバイス再登録**: 新しいデバイスでの設定


## 実装されている機能

### カスタム属性機能
- ユーザー・テナント属性の柔軟な設定と表示
- 文字列、数値、真偽値、日付など様々な属性タイプに対応
- 属性値の自動バリデーション

### メータリング
- 使用量のリアルタイム更新
- インライン編集による簡単な増減操作
- 過去の使用量データの修正機能

### 権限制御
- ロール別の機能制限と表示制御
- 管理者のみアクセス可能な機能の実装
- ユーザーの権限に応じた画面表示の切り替え

### 行動履歴ログ
- `X-SaaSus-Referer`ヘッダーによる詳細な行動追跡
- ページ表示とアクション実行の区別

## セットアップ手順

### 前提条件
- **Node.js**: 16以上
- **開発環境**: 各言語の開発環境（Go, Python, Java, C#）
- **SaaSus Platform**: アカウントとプロジェクト設定

### セットアップ手順

#### 1. SaaSus Platformの設定
1. SaaS開発コンソールで認証後遷移先URLを設定（`http://localhost:3000/callback`）
2. 必要な設定値を取得：
   - ログイン画面のURL
   - APIキー等の認証情報

#### 2. フロントエンドのセットアップ
```bash
# リポジトリのクローン
git clone https://github.com/saasus-platform/implementation-sample-front-react.git
cd implementation-sample-front-react

# 環境変数の設定
cp .env.example .env
vi .env
```

`.env`ファイルで以下の設定を行います：
```bash
# SaaSus Platform管理コンソールで取得したログインURLを設定
REACT_APP_LOGIN_URL=https://auth.xxxxxxxxxx.com
```

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm start
```

#### 3. バックエンドのセットアップ
各言語のリポジトリから適切なものを選択してセットアップしてください。
詳細なセットアップ手順は各リポジトリのREADMEをご参照ください：

- **Go (Echo)**: [セットアップ手順](https://github.com/saasus-platform/implementation-sample-api-go/blob/main/README.md)
- **Python (FastAPI)**: [セットアップ手順](https://github.com/saasus-platform/implementation-sample-api-python/blob/main/README.md)
- **Java (Spring)**: [セットアップ手順](https://github.com/saasus-platform/implementation-sample-api-java/blob/main/README.md)
- **C# (.NET)**: [セットアップ手順](https://github.com/saasus-platform/implementation-sample-api-csharp/blob/main/README.md)

#### 4. 動作確認
1. [フロントエンド](http://localhost:3000)にアクセス
2. ログイン機能の動作確認
3. 各機能の動作確認

### その他の実装方式
サーバーレス版の実装については、以下のドキュメントをご参照ください：
- [SaaSus Platformを使った実装（サーバレス）](/docs/part-6/implementation-guide/implementing-authentication-using-saasus-serverless)
