---
title: "ユーザー一括登録手順"
slug: "bulk-user-registration"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:47:47 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed May 22 2024 15:16:11 GMT+0000 (Coordinated Universal Time)"
---

# SaaSus Platform ユーザー一括登録手順

## 概要
CSVファイルから複数のユーザーを効率的に一括登録する手順書です。複数テナント・複数ロールの組み合わせに対応し、必要なリソースの自動作成も含めて完全自動化されています。

## 前提条件
- SaaSus API MCP Serverが設定済みであること

## CSVファイル形式

### ファイル構造
```csv
email,tenant_name,role,name
user1@example.com,company_a,admin,田中太郎
user1@example.com,company_a,user,田中太郎
user2@example.com,company_a,user,佐藤花子
user3@example.com,company_b,user,鈴木次郎
user4@example.com,company_a,user,山田三郎
user4@example.com,company_a,viewer,山田三郎
user5@example.com,company_b,admin,高橋美咲
user5@example.com,company_a,user,高橋美咲
user5@example.com,company_b,user,高橋美咲
```

### 列の説明
- **email**: ユーザーのメールアドレス（必須）
- **tenant_name**: 所属するテナント名（必須、複数テナントの場合は行を分ける）
- **role**: 割り当てるロール（単一ロール、複数ロールの場合は行を分ける）
- **name**: ユーザーの名前（属性として設定）

### 複数テナント・複数ロールの扱い
- **複数ロール**: 同一ユーザーが複数のロールを持つ場合は、行を分けて記載
- **複数テナント**: 同一ユーザーが複数のテナントに所属する場合は、行を分けて記載
- **組み合わせ**: 複数テナント×複数ロールの場合は、すべての組み合わせを行で記載

## MCP Serverへの依頼文言

### 基本的な依頼文
```
users.csvファイルを読み込んで、SaaSus MCPサーバーを使用してユーザーの一括登録を実行してください。

【重要】以下の処理をすべて自動で実行してください：

1. CSVファイルの読み込み
   - email: メールアドレス
   - tenant_name: テナント名（複数テナントの場合は行を分ける）
   - role: ロール（単一ロール、複数ロールの場合は行を分ける）
   - name: 名前（属性として設定）

2. 必要なリソースの確認と自動作成
   - CSVに記載されているテナント名が存在するか確認し、存在しない場合は新規作成
   - CSVに記載されているロールが存在するか確認し、存在しない場合は新規作成
   - ユーザー属性「name」が定義されているか確認し、存在しない場合は新規作成

3. ユーザーの一括登録（修正版）
   - 事前処理: CSVファイル全体を読み込み、emailごとにデータをグループ化
   - ユーザー作成: 各emailについて初回出現時にSaaSユーザーを作成（パスワードなし、メール通知）
   - テナント処理: 各emailの各テナントについて初回出現時にテナントユーザーを作成し、name属性を設定
   - ロール処理: 各行ごとに指定されたロールを割り当て（env_id=3を使用）
   - 重複回避: 既存のSaaSユーザー・テナントユーザーは作成をスキップし、ロール追加のみ実行

4. 結果の報告
   - 作成されたテナント、ロール、属性の一覧
   - 登録成功/失敗したユーザーの詳細
   - エラーがあった場合の詳細情報

すべての処理を自動で実行し、最後に詳細なレポートを提供してください。
```
