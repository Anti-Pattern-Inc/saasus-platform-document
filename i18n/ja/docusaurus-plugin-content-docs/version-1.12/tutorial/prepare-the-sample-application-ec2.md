---
sidebar_position: 1
title: "サンプルアプリケーションの準備(EC2)"
slug: "prepare-the-sample-application-ec2"
excerpt: "Let's turn a simple web chat application into SaaS"
hidden: false
createdAt: "Fri Jul 19 2024 06:12:42 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Jul 19 2024 06:12:42 GMT+0000 (Coordinated Universal Time)"
---

EC2 や Cloud9 を利用して、Blade 版の動作環境を作成する場合はこちらの手順で行ってください。

## サンプルアプリケーションの準備

EC2 作成時のパラメータ
| 項目 | 設定値 |
| --- | --- |
| AMI | Amazon Linux 2023 AMI |
| キーペア | キーを配布できるように端末ごとに新規キーペアを作成する
| サブネット | パブリックサブネットに配置
| パブリック IP の自動割り当て | 有効化
| インターネットからの HTTP トラフィックを許可 | チェックを入れる
| ストレージ設定 | 20GB

:::info

SSH で EC2 にアクセスする場合は、ポート 22（SSH）のインバウンド通信の許可が必要です。  
Cloud9 の場合、初期状態のディスク容量では空き容量が足りなくなるので 20G になるようディスク容量追加が必要です

:::

セッションマネージャ、もしくは SSH で EC2 に接続  
SSH の場合

```
chmod 600 xxx.pem
ssh -i xxx.pem ec2-user@[EC2のグローバルIP]
```

EC2 上で実行するコマンド

```
sudo su -

# dockerインストール
dnf update
dnf install -y docker
systemctl start docker
systemctl enable docker

# docker composeインストール
mkdir -p /usr/local/lib/docker/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose
chmod +x /usr/local/lib/docker/cli-plugins/docker-compose

# gitインストール
dnf install -y git

# チュートリアル資材取得
git clone https://github.com/saasus-platform/sampleapp-basic-chat

# チュートリアル資材ビルド
cd sampleapp-basic-chat/php/laravel
./init.sh

# storageディレクトリの権限不足対応
chmod -R 777 api/storage/
```

上記コマンドが実行出来たら、以下の URL にアクセスして試してみましょう。

URL: http<dummy>://</dummy>[EC2 のグローバル IP]/board  
認証用 Email: <dummy>user</dummy>@example.com  
Password: password

![サンプル](/ja/img/tutorial/prepare-the-sample-application/prepare-the-sample-application-01.png)

このような形で、ユーザが好きに書き込みができます。
