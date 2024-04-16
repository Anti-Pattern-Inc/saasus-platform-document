---
sidebar_position: 1
title: "はじめに"
slug: "tutorial-introduction"
excerpt: "本チュートリアルの流れについて"
hidden: false
createdAt: "Wed Mar 11 2024 03:12:42 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Mar 07 2024 01:25:35 GMT+0000 (Coordinated Universal Time)"
---

このチュートリアルは5つのステップで構成されています。

Step1からStep5までの手順を実施することで、簡易なチャットシステムがSaaSモデルに変換され、マルチテナントをサポートし、料金プランで制御できるようになります。

各ステップで適用される具体的な内容は、以下の図に示す順序でアプリケーションに組み込まれます。

![サンプル](/ja/img/tutorial/tutorial-introduction/tutorial-introduction-01.png)

これにより、マルチテナント対応や料金プランによる柔軟な制御など、幅広いユーザーのニーズに対応する高度なチャットシステムが開発されます。

チュートリアル実施前と実施後のアーキテクチャの違いを図で確認します。

チュートリアル実施前
![サンプル](/ja/img/tutorial/tutorial-introduction/tutorial-introduction-02.png)

チュートリアル実施後
![サンプル](/ja/img/tutorial/tutorial-introduction/tutorial-introduction-03.png)

ユーザー情報とテナント情報の保持移行:<br/>
SaaSus Platformがユーザー情報とユーザー情報に紐づくテナント情報を管理します。そのため、チャットシステム側ではこれらの情報を保持する必要がなくなります。

ユーザー認証の外部委譲:<br/>
ユーザー認証はSaaSus Platformに委譲されます。チャットシステム側はSaaSus PlatformからのCallbackを受け取り、必要な処理を行うだけでログイン機能を実装できます。

データモデルの変更:<br/>
チャットシステムが保持していたデータモデルに、tenant_idカラムを追加します。これにより、マルチテナント対応が可能となります。

以上の手順により、SaaSus Platformを活用してチャットシステムをSaaS化することができます。