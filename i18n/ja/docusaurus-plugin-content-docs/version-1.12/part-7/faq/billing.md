---
title: "請求関連のFAQ"
slug: "billing"
excerpt: ""
hidden: false
createdAt: "Mon Apr 15 2025 08:20:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 05 2026 05:09:00 GMT+0000 (Coordinated Universal Time)"
---

**Q. メータ単位の「使用量の集計」設定（sum/max）はどのような機能でしょうか？**  
A. メータ単位の「使用量の集計」設定は、メータリングデータの集計方法を指定する機能です。

Stripe連携を有効にしている場合にUI上で設定できる「使用量の集計」方法（sumまたはmax）は、Stripeへの請求額を計算するだけでなく、メータリング関連APIで取得できるcountの値の計算方法も決定します。

なお、Stripe連携を有効にしていない場合、この設定項目はUI上に表示されませんが、集計方法はデフォルトでsum（合計）となります。

具体的には、以下のAPIで返されるcountの値が集計設定に応じて変わります。

- [指定した日付のメータリングユニットカウントを取得](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountByTenantIdAndUnitNameAndDate)  
- [当日のメータリングユニットカウントを取得](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountByTenantIdAndUnitNameToday)  
- [当月のメータリングユニットカウントを取得](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth)  
- [指定月のメータリングユニットカウントを取得](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth)  
- [指定日の全メータリングユニットカウントを取得](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitDateCountsByTenantIdAndDate)  
- [指定月の全メータリングユニットカウントを取得](/docs/reference/pricing-api#tag/metering/operation/GetMeteringUnitMonthCountsByTenantIdAndMonth)  

**集計方法によるcountの値の違い**

- **sum（合計）を設定した場合**: APIは、指定された期間内（日次または月次）に記録されたメータリングの値を合計したcountを返します。
- **max（最大）を設定した場合**: APIは、指定された期間内（日次または月次）に記録されたメータリングの値の最大値をcountとして返します。

---

**Q. SaaSus PlatformとStripeの役割分担はどうなっていますか？**  
A. SaaSus Platformは「利用プラン」の管理を行い、Stripeは「決済・請求実務」を担います。販売モデル（セルフサーブ型／セールス主導型）によって、SaaSusの機能をどこまで活用できるかが異なります。

- **セルフサーブ型（自動化推奨）**: SaaSusの料金プラン定義に基づき、サブスクリプションの作成や更新を自動実行できます。
- **セールス主導型（手動対応）**: SaaSusでは顧客ID（Stripe Customer）の紐付けのみを行い、具体的な請求書作成や複雑な料金設定はStripeダッシュボードから直接行います。

---

**Q. 請求先情報（社名や住所）の登録・管理はどうすればよいですか？**  
A. 販売モデルによって登録経路が異なりますが、情報はSaaSus経由でStripeへ同期されます。なお、セキュリティリスクを最小限にするため、クレジットカード情報はSaaSus側では保持せず、Stripeの画面で直接入力させる仕組みとなっています。

- **セルフサーブ型**: エンドユーザーがアプリ上の入力画面から登録します。
- **セールス主導型**: 営業担当者が「SaaS運用コンソール」から代理入力します。

---

**Q. 3Dセキュア（本人認証）などの決済画面はSaaSusで提供されますか？**  
A. いいえ、SaaSusは決済用の認証画面（ポップアップ等）を表示する機能を一切持っていません。バックエンドでの決済作成指示は行いますが、ブラウザ上での認証が必要な場合は、Stripeの提供する機能（Hosted Invoice Page等）を組み込んで対応いただく必要があります。

---

**Q. 決済完了時にサンクスメールを送りたいのですが、SaaSusからWebhookは通知されますか？**  
A. いいえ、SaaSus PlatformはStripeのWebhookイベントを中継しません。決済完了時の即時メール送信や、返金検知などのリアルタイム処理が必要な場合は、自社サーバーでStripe Webhookを直接受信する実装が必要となります。

---

**Q. 返金処理や請求書の再発行、クーポン適用はコンソールから行えますか？**  
A. いいえ、それらのイレギュラーな操作や個別対応は、直接Stripeダッシュボードで行う必要があります。

- **返金・請求書再発行**: SaaSusには機能がないため、Stripe側で直接操作してください。
- **請求書払い**: クレジットカード決済以外（銀行振込等）の請求書送付も、Stripe側で行う必要があります。
- **クーポン（割引）**: 特定のテナントへの個別割引は、Stripeダッシュボードにて対象のCustomerやサブスクリプションに紐付けてください。

---
