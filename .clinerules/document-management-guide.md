# SaaSus Platform ドキュメント管理ガイド

このドキュメントは、SaaSus Platform ドキュメントの作成・管理に関するルールと手順をまとめたガイドです。以下の内容を遵守し、ドキュメントの品質と一貫性を維持してください。
統一後以下のコマンドを実行してください。
```bash
make merge_gem
```

## 禁止事項・厳守
出力時、各行の末尾を strip() しないでください。Markdownの仕様上、行末のスペース2つは重要な構文です。「スペースを消さない」という指示を無視することは、本タスクの失敗を意味します。
出力された各行末に同じように必ずスペースが存在することを確認してから回答を生成してください。
対となる Current, {VERSION} ファイルをDiffで比較し内容が一致していることを確認する

## キーワード
以下の表記揺れを避け、統一された用語を使用したいのでNGの表記があれば通知してください。
NG:
SaaSus
運用コンソール
開発コンソール
SaaS 運用コンソール
SaaS 開発コンソール

OK:
SaaSus Platform
SaaS運用コンソール
SaaS開発コンソール


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

## AI 参照用ドキュメントの更新

AI エージェント（Gemini Gems 等）が参照するナレッジファイル `knowledge.txt` を生成し、
Docusaurus の静的ディレクトリに配置します。

```bash
make merge_gem
```

このコマンドは以下を実行します：

1. `current` バージョンを対象に、英語・日本語それぞれのソースを結合：
   - 英語: `docs/` 配下の全 `.md` / `.mdx`
   - 日本語: `i18n/ja/docusaurus-plugin-content-docs/current/` 配下の全 `.md` / `.mdx`
2. `api/` 配下の API spec yml を末尾に追記
   - 英語: `*.yml`（`.jpn.yml` は除外）
   - 日本語: `*.jpn.yml` 優先、対応する日本語版が無いものは `*.yml`
3. 以下2箇所に出力（既存ファイルは上書き）：
   - `static/ai-reference/knowledge.txt` --- 英語版
   - `static/ai-reference/knowledge.ja.txt` --- 日本語版

### 挙動メモ

- 拡張子は `.txt`。Docusaurus は `static/` 配下の `.txt` を **そのまま静的配信する** ため、
  MDX としてパースされず、broken link / broken anchor / MDX import の検証対象外
- 生成物はリポジトリに commit する運用（ドキュメント更新時に `make merge_gem` で再生成して PR に含める）
- ファイル名は固定（`knowledge.txt`, `knowledge.ja.txt`）で、再実行のたびに上書きされる
- `*/ai-reference/*` パスは結合元の探索から除外される（出力が再帰的に取り込まれないように）
- URL アクセス例（dev / build とも同パス）：
  - `http://localhost:3001/ai-reference/knowledge.txt`
  - `http://localhost:3001/ai-reference/knowledge.ja.txt`
- 検証は `bash scripts/verify_merge_gem.sh` で再現可能（exit code 連動）

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

- ファイルを更新する際は、対応する全ての言語版で`updatedAt`を同期してください
- `createdAt`：**変更しない**（元の作成日時を維持）
- `updatedAt`：現在時刻を設定し同じファイル名は全て同じ値を設定する
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
- 日本語ファイル、英語ファイル間での日時の不一致がないように注意する
