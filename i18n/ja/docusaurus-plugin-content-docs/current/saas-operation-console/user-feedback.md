---
title: "ユーザーフィードバック"
slug: "user-feedback"
excerpt: ""
hidden: false
createdAt: "Tue Mar 12 2024 00:47:10 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Mar 12 2024 00:47:10 GMT+0000 (Coordinated Universal Time)"
---

## 概要説明
ユーザーからフィードバックを得るための機能です。  
実際にSaaSを利用しているユーザーから意見を収集することで、サービスの改善に役立てることができます。  

## 使用方法
この機能を使うためには、[Communication API](/docs/reference/communication-api)を使用してフィードバックを操作する機能をSaaSに実装する必要があります。

例えば以下のようなAPIを使用します。

* [CreateFeedback](/docs/reference/communication-api#tag/feedback/operation/CreateFeedback)
  * フィードバックを作成できます
* [GetFeedbacks](/docs/reference/communication-api#tag/feedback/operation/GetFeedbacks)
  * 作成されたフィードバックを取得します
* [CreateVoteUser](/docs/reference/communication-api#tag/feedback/operation/CreateVoteUser)
  * フィードバックに対して、他のユーザーが投票することができます

これらのAPIを用いてフィードバック機能を実装します。

フィードバックは以下のステータスを持っています。  
0: 新規  
1: 検討中  
2: 実装中  
3: 実装済み  

得られたフィードバックはSaaS運用コンソールで確認することができます。
![feedback-list](/ja/img/saas-operation-console/user-feedback/feedback-list.png)

ステータスの変更やコメントの追加ができます。
![feedback-edit](/ja/img/saas-operation-console/user-feedback/feedback-edit.png)
