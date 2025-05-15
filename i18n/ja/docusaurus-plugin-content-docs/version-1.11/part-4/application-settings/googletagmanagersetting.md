---
title: "Google Tag Managerの設定"
slug: "googletagmanagersetting"
description: "認証画面に Google Tag Manager を埋め込み、Google Analytics などの外部ツールを連携させる方法を解説します。"
excerpt: ""
hidden: false
createdAt: "Thu Dec 07 2023 05:40:29 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Dec 22 2023 06:01:24 GMT+0000 (Coordinated Universal Time)"
---

> 認証画面に Google Tag Manager を埋め込み、Google Analytics などの外部ツールを連携させる方法を解説します。

Google Tag Managerを設定することで、ログイン画面にGoogle Tag Managerのタグが埋め込まれGoogle Analyticsなどが設定可能です。

SaaSの運用にはマーケティング活動が重要になるので、ユーザーの情報や流入元などの情報を取得するために設定していきましょう。

まずは、Google Tag Managerのアカウントとコンテナを作ります。

[Google Tag Managerのアカウントとコンテナの作成](/docs/part-4/application-settings/googletagmanagersetting/googletagmanagercreateaccountandcontainer)

Google Tag Managerのアカウントとコンテナの作成が完了したら、実際にSaaSにGoogle Tag Managerを設定します。

[Google Tag Manager コンテナ IDを設定](/docs/part-4/application-settings/googletagmanagersetting/googletagmanagercontaineridsetting)

以上で、ログイン画面にGoogle Tag Managerのタグがログイン画面に埋め込まれるようになりましたので、Google Analyticsと連携してユーザー行動を取得していきます。

Google Analyticsのアカウント作成がまだの方は以下のリンク先ドキュメントをご確認ください。

[Google Analyticsアカウント作成](/docs/part-4/application-settings/googletagmanagersetting/creategoogleanalyticsaccount)

Google Analyticsのアカウント作成済みの方ないしアカウント作成が完了した方は、以下のドキュメントからGoogle AnalyticsとGoogle Tag Managerを設定しましょう。

[Google AnalyticsとGoogle Tag Managerを連携する](/docs/part-4/application-settings/googletagmanagersetting/googleanalyticsgoogletagmanagerlink)

今回はGoogle Analyticsを使用しましたが、Google Tag Managerがサポートしているタグその他のタグや第三者によって提供されているテンプレート等で様々なタグの利用が可能です。

詳細は以下のリンク先をご確認ください。

<a href="https://support.google.com/tagmanager/answer/6106924" target="_blank">Google Tag Managerがサポートしているタグ</a>

<a href="https://tagmanager.google.com/gallery" target="_blank">Google Tag Manager Community Template Gallery</a>

<a href="https://support.google.com/tagmanager/answer/9334084" target="_blank">カスタムテンプレートについて</a>

<a href="https://support.google.com/tagmanager/answer/6107167" target="_blank">カスタムタグについて</a>
