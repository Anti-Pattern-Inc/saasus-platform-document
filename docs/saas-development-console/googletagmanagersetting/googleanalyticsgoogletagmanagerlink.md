---
title: "Google AnalyticsとGoogle Tag Managerを連携する"
slug: "googleanalyticsgoogletagmanagerlink"
excerpt: ""
hidden: false
createdAt: "Mon Dec 11 2023 02:34:11 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Dec 22 2023 06:01:24 GMT+0000 (Coordinated Universal Time)"
---
Google AnalyticsのタグをGoogle Tag Managerに設定し、ログイン画面へアクセスしたユーザーの分析をします。

# 1. Google Analyticsの測定IDを確認

1. <a href="https://analytics.google.com/analytics/web" target="_blank">Google Analytics</a>にアクセス
2. 左下の歯車から「管理」画面に移動
3. 「データの収集と修正」内の「データ ストリーム」を押す
4. 対象のストリームを選択
5. 測定IDが表示されるので確認する

   ![googleanalyticsgoogletagmanagerlink-1](/img/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink-1.png)

# 2. Google Tag ManagerでGoogle Analyticsを設定

1. <a href="https://tagmanager.google.com/?hl=JA" target="_blank">Google Tag Managerのホームページ</a>にアクセス
2. 「新しいタグを追加」を押す

   ![googleanalyticsgoogletagmanagerlink-2](/img/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink-2.png)
3. 「タグの設定」から「Googleアナリティクス」> 「Googleタグ」を選択

   ![googleanalyticsgoogletagmanagerlink-3](/img/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink-3.png)
4. タグIDにGoogle Analyticsの測定IDを入力

   ![googleanalyticsgoogletagmanagerlink-4](/img/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink-4.png)
5. トリガーにInitialization - All Pagesを選択

   ![googleanalyticsgoogletagmanagerlink-5](/img/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink-5.png)
6. 左上の入力項目にタグの名前を入力し、保存を押す
7. コンテナページ右上の公開を押す

   ![googleanalyticsgoogletagmanagerlink-6](/img/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink-6.png)
8. バージョンの公開と作成の項目を入力し公開を押す

   ![googleanalyticsgoogletagmanagerlink-7](/img/saas-development-console/googletagmanagersetting/googleanalyticsgoogletagmanagerlink-7.png)

   - バージョン名：任意（未入力での可能）
   - バージョンの説明：任意（未入力での可能）

以上でGoogle AnalyticsとGoogle Tag Managerが連携されましたので、ログイン画面にアクセスするとGoogle Analyticsに情報が反映されます。

なお、Google Analyticsへの反映は24~48時間かかる場合があります。詳細は<a href="https://support.google.com/analytics/answer/7084038?hl=ja&sjid=9555982415879226311-AP#zippy=%2C%E3%81%93%E3%81%AE%E8%A8%98%E4%BA%8B%E3%81%AE%E5%86%85%E5%AE%B9" target="_blank">Google Analyticsのドキュメント</a>をご確認ください。
