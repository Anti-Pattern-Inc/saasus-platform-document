# SaaSus Platform ドキュメント管理ガイド

## ドキュメントの更新ルール
- Markdownの改行構文である **行末の半角スペース2つ** を、最適化やトリミングによって削除しないでください。全ての行末の空白を厳密に維持してください。
- 最後に`updatedAt`フィールドを現在時刻に更新してください。

## ディレクトリ構造

```
saasus-platform-document/
├── docs/                          # 英語版ドキュメント
├── i18n/
│   └── ja/
│       └── docusaurus-plugin-content-docs/
│           ├── version-{VERSION}  # バージョン管理された日本語ドキュメント
│           └── current/           # 最新の日本語ドキュメント
└── versioned_docs/                # バージョン管理された英語ドキュメント
    └── version-{VERSION}/
```

## 新規ドキュメントの作成

新しいドキュメントを作成する際は、以下のコマンドを使用します：

```bash
make create_new_file TARGET_FILE=path/to/new-file.md
```

このコマンドは以下の処理を実行します：

1. 日本語版（`i18n/ja/docusaurus-plugin-content-docs/current/`）にファイルを作成
2. 英語版（`docs/`）に対応するファイルを作成

## サイドバー設定の更新

サイドバーの設定を日本語版に反映させる場合：

```bash
make ja_sidebar
```

この処理により：

1. `sidebars.js`の設定が日本語版に反映されます
2. 翻訳ファイルが自動的に更新されます

## API ドキュメントの更新

API ドキュメントを更新する場合：

```bash
make update_api_files
```

このコマンドは以下の処理を実行します：

1. 最新の API 定義ファイルをコピー
2. 日本語版の API 定義ファイルを生成（swagger-i18n-extension を使用）

## バージョン管理

### 新しいバージョンの作成

```bash
make create_new_version VERSION=1.x
```

この処理により：

1. 現在のドキュメントが指定したバージョンとして保存されます
2. バージョン管理用のディレクトリ構造が自動的に作成されます

### バージョンの削除

```bash
make remove_version VERSION=1.x
```

この処理により：

1. 指定したバージョンのドキュメントが削除されます
2. `versions.json`から該当バージョンが削除されます

### バージョンの上書き

```bash
make override_version VERSION=1.x
```

この処理により：

1. 既存のバージョンを削除
2. 新しいバージョンとして現在のドキュメントを保存

## ローカル開発環境

### 環境のセットアップ

```bash
make init
```

このコマンドは以下の処理を実行します：

1. Docker コンテナの起動
2. 必要なパッケージのインストール
3. 開発サーバーの起動（英語版）

### 言語切り替え

- 英語版の起動：`make run_en`
- 日本語版の起動：`make run_ja`

### 環境の停止

```bash
make down
```

このコマンドで Docker コンテナを停止します。

## ファイルメタデータ管理

### ファイルヘッダーの管理ルール

全てのMarkdownファイルは、以下のYAMLフロントマター形式でメタデータを管理してください：

```yaml
---
title: "ドキュメントタイトル"
slug: "url-slug"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
---
```

### createdAt / updatedAt の更新ルール

#### 新規ファイル作成時

- ファイルを追加する際は、対応する全ての言語版で`createdAt`を同期してください
- `createdAt`：同じファイル名は全て同じ現在時刻を設定する
- `updatedAt`：`createdAt`と同じ値を設定
- 形式：`"[Day] [Month] [Date] [Year] [Time] GMT+0000 (Coordinated Universal Time)"`
- 例：`"Wed Feb 05 2026 03:50:00 GMT+0000 (Coordinated Universal Time)"`

#### 既存ファイル更新時

- ファイルを更新する際は、対応する全ての言語版で`createdAt`を同期してください
- `createdAt`：**変更しない**（元の作成日時を維持）
- `updatedAt`：現在時刻を設定する
- 軽微な修正（誤字脱字修正など）でも`updatedAt`は更新する

#### 多言語版の同期

ファイルを更新する際は、対応する全ての言語版で`updatedAt`を同期してください：

1. **英語版**：`docs/`配下のファイル
2. **日本語版（現在）**：`i18n/ja/docusaurus-plugin-content-docs/current/`配下のファイル
3. **日本語版（バージョン管理）**：`i18n/ja/docusaurus-plugin-content-docs/version-{VERSION}/`配下のファイル
4. **英語版（バージョン管理）**：`versioned_docs/version-{VERSION}/`配下のファイル

#### 注意事項

- 日時は常にUTC（GMT+0000）で記録する
- 手動で文字列を作成するのではなく、可能な限り自動化ツールを使用する
- コンテンツの実質的な変更がない場合でも、ファイル構造や形式を変更した場合は`updatedAt`を更新する
- バージョン間でのファイル移動や複製時は、適切に日時を設定する

## 禁止事項・厳守
出力時、各行の末尾を strip() しないでください。Markdownの仕様上、行末のスペース2つは重要な構文です。「スペースを消さない」という指示を無視することは、本タスクの失敗を意味します。 出力されたコードブロックの各行末に必ずスペースが2つ存在することを確認してから回答を生成してください。