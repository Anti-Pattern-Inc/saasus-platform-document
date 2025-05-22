# SaaSus Platform ドキュメント管理ガイド

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
