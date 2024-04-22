---
title: "ドメイン名の設定"
slug: "domain-name-preference"
excerpt: ""
hidden: false
createdAt: "Wed Apr 03 2024 14:18:38 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Apr 03 2024 14:18:38 GMT+0000 (Coordinated Universal Time)"
---

# ドメイン名の設定

※ドメイン名をお持ちで無い方は、ドメイン取得後に設定をしてください。

1. SaaS開発コンソールにログインします。
1. サイドメニューから「ドメイン」を選択します。
1. ドメイン登録画面が表示されますので、そこで利用したいドメイン名を登録します。このドメイン名は、ログイン画面やメール送信の際のベースドメインとして使用されます。<br/>
登録した後、DNSレコードを作成する必要がありますので、**ご自身で操作可能なドメイン名**を登録してください。

![01](/ja/img/saas-development-console/domain-name-preference-01.png)

以上がドメイン名を登録する手順となります。

ドメイン名を登録すると、数秒後に画面下部にCNAMEレコードが表示されます。

このCNAMEレコードは、所有しているドメイン名を確認するためのDNS検証を行うためのものです。

お使いのDNSにこのCNAMEレコードの値を登録してください。

![02](/ja/img/saas-development-console/domain-name-preference-02.png)

例えば、Value Domain でドメインを管理している場合、下記の画像のような設定を行います。

![03](/ja/img/saas-development-console/domain-name-preference-03.png)

ご自身のDNSに登録していただいた後、数分後に検証が完了し、「以下のDNS情報が検証され、正常に動作中です。」と表示されます。

これにより、SaaS Platformの設定をするための前準備が整います。

![04](/ja/img/saas-development-console/domain-name-preference-04.png)

SaaSus Platformは、このドメインをベースにしてログイン画面を自動生成します。