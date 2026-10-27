---
title: "機能一覧"
slug: "saasus-platform-features"
excerpt: "SaaSus Platform の機能と、設定・組み込みに利用する画面やAPIの概要。"
hidden: true
createdAt: "Tue Oct 20 2026 06:43:54 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Oct 27 2026 01:08:45 GMT+0000 (Coordinated Universal Time)"
---

SaaSus Platform は、認証、テナント管理、料金プラン管理など、SaaS の開発・運用で使う機能を提供します。  
各分類の説明から必要な機能を探せます。機能名のリンク先では、機能の詳細、関連API、設定や実装の参考になるガイドを確認できます。

## [認証・ログイン](/ja/docs/part-3/saasus-platform-features/authentication)

<div className="feature-overview-table">

| 機能 | 説明 |
| --- | --- |
| [ログイン・ユーザー登録](/ja/docs/part-3/saasus-platform-features/authentication#ログインユーザー登録) | SaaSの利用者向けに、アカウントの新規登録と、登録済みアカウントでのログインを提供する機能です。<br />ログイン画面、またはSaaSus APIを組み込んだ独自ログイン画面を利用できます。ログイン画面では、仮パスワードの再送や、パスワードを忘れた場合の再設定も行えます。 |
| [外部IDプロバイダー](/ja/docs/part-3/saasus-platform-features/authentication#外部idプロバイダー) | GoogleやSAMLに対応した外部IDプロバイダーを使ってログインするための機能です。<br />Googleログインは通常のログイン画面から、SAMLログインはテナント専用のログインURLから開始します。<br />どちらも連携先のIDプロバイダーで認証します。 |
| [多要素認証（MFA）](/ja/docs/part-3/saasus-platform-features/authentication#多要素認証mfa) | パスワードに加えて、認証アプリやメールの確認コードで本人確認を行う機能です。<br />認証アプリの登録やMFAの設定画面はSaaSアプリケーションに実装し、ログイン時のコード入力にはログイン画面を利用できます。 |
| [デバイス認証](/ja/docs/part-3/saasus-platform-features/authentication#デバイス認証) | 利用者のデバイスを記憶し、次回以降のログインでMFAの認証コード入力を省略するための機能です。<br />SaaS 開発コンソールで「常に記憶する」「ユーザーオプトイン」（利用者が選んだ場合だけ記憶する）「記憶しない」から選択します。 |
| [トークン・認証情報](/ja/docs/part-3/saasus-platform-features/authentication#トークン認証情報) | ログインしたユーザーの認証情報を取得し、ログイン状態を維持・管理する機能です。<br />ログイン画面から渡される一時コードをトークンに交換し、トークンの更新やリフレッシュトークンの失効を行えます。 |

</div>

## [ユーザー管理](/ja/docs/part-3/saasus-platform-features/user-management)

<div className="feature-overview-table">

| 機能 | 説明 |
| --- | --- |
| [SaaSユーザー](/ja/docs/part-3/saasus-platform-features/user-management#saasユーザー) | サービスに登録されたユーザーのログイン情報や属性を管理する機能です。<br />日々の管理はSaaS 運用コンソールで行い、SaaSアプリケーションに管理画面や利用者向けの情報変更機能を作る場合にAPIを組み込みます。<br />利用者自身の登録にはログイン画面のセルフサインアップ、管理者による登録にはユーザー作成機能を使います。 |
| [SaaSユーザーをテナントへ追加・削除](/ja/docs/part-3/saasus-platform-features/user-management#saasユーザーをテナントへ追加削除) | 登録済みのSaaSユーザーをテナントに追加し、テナントごとのユーザー情報を管理するための機能です。<br />テナントへの追加・テナントからの削除はSaaS 運用コンソールで行え、SaaSアプリケーションで管理機能を提供する場合はAPIを組み込みます。<br />取得したテナントや役割の情報を使った画面・機能の利用可否の判定は、SaaSアプリケーションで実装します。 |

</div>

## [テナント管理](/ja/docs/part-3/saasus-platform-features/tenant-management)

<div className="feature-overview-table">

| 機能 | 説明 |
| --- | --- |
| [テナント](/ja/docs/part-3/saasus-platform-features/tenant-management#テナント) | テナントを作成し、基本情報・属性・請求先情報を管理する機能です。<br />SaaS 運用コンソールでは基本情報・追加属性・請求先情報を設定でき、申込時のテナント作成などを自動化する場合はAPIを組み込みます。 |
| [招待](/ja/docs/part-3/saasus-platform-features/tenant-management#招待) | ユーザーをテナントに招待する機能です。<br />招待の作成・一覧表示などの管理機能はSaaSアプリケーションに組み込み、招待された利用者の登録・ログイン・受諾にはログイン画面を利用できます。<br />招待を作成できる利用者や付与できる役割の制御は、SaaSアプリケーションで実装します。 |

</div>

## [役割・属性・環境の定義](/ja/docs/part-3/saasus-platform-features/authorization)

<div className="feature-overview-table">

| 機能 | 説明 |
| --- | --- |
| [役割（ロール）定義](/ja/docs/part-3/saasus-platform-features/authorization#役割ロール定義) | SaaSの利用者に管理者・一般利用者などの役割を定義し、テナント・環境ごとに付与するための機能です。<br />役割の定義はSaaS 開発コンソール、ユーザーへの付与・解除はSaaS 運用コンソールで行えます。<br />役割に応じた画面・機能のアクセス制御は、SaaSアプリケーションで実装します。 |
| [属性定義](/ja/docs/part-3/saasus-platform-features/authorization#属性定義) | ユーザーやテナントに、名前・部署・メモなどの追加情報を持たせるための属性項目を定義する機能です。<br />テナントユーザー属性とテナント属性はSaaS 開発コンソールで定義でき、SaaSユーザー属性はSaaSus APIで定義します。<br />属性項目の定義と、ユーザーやテナントごとの属性値の更新は別の操作です。 |
| [ユーザー環境定義](/ja/docs/part-3/saasus-platform-features/authorization#ユーザー環境定義) | ユーザーが利用できる環境と、環境ごとの役割を定義する機能です。例えば、テスト用では管理者、本番用では一般利用者として設定し、SaaSアプリケーション側で操作権限を判定します。<br />SaaSus Platform コンソールで切り替える環境とは別の設定です。 |

</div>

## [SaaSの設定](/ja/docs/part-3/saasus-platform-features/authentication-settings)

<div className="feature-overview-table">

| 機能 | 説明 |
| --- | --- |
| [基本設定](/ja/docs/part-3/saasus-platform-features/authentication-settings#基本設定) | ログイン画面や通知メールに使うドメイン名、ログイン後の遷移先URL、SaaSus APIの呼び出しに使う接続情報を設定する機能です。<br />SaaS 開発コンソールで、ドメイン名や遷移先URLの設定、SaaS ID・APIキー・クライアントシークレットの確認・管理を行えます。 |
| [認証詳細設定](/ja/docs/part-3/saasus-platform-features/authentication-settings#認証詳細設定) | ログイン画面の見た目やリンク、パスワード要件、セルフサインアップの許可、通知メールを設定する機能です。<br />表示に関する設定はログイン画面を対象とし、パスワード要件と登録許可は認証・登録処理にも適用されます。<br />通知メールは、送信元・返信先と、新規登録・パスワード再設定・MFAなどの種類ごとの件名・本文を設定できます。 |

</div>

## [料金プラン・利用量・請求](/ja/docs/part-3/saasus-platform-features/pricing-billing)

<div className="feature-overview-table">

| 機能 | 説明 |
| --- | --- |
| [料金体系の設計](/ja/docs/part-3/saasus-platform-features/pricing-billing#料金体系の設計) | 月額基本料金や、API実行回数に応じた従量料金を組み合わせて、料金プランを作成する機能です。<br />利用量を記録する「メーター単位」、料金を設定する「計測単位」、計測単位をまとめる「機能メニュー」を使って料金プランを構成します。作成した料金プランと税率をテナントに適用します。 |
| [利用量の記録・取得](/ja/docs/part-3/saasus-platform-features/pricing-billing#利用量の記録取得) | テナントごとの利用量をメーター単位に記録し、日別・月別・期間別に取得する機能です。<br />SaaSアプリケーションで計測対象の操作に合わせて記録APIを呼び出し、取得結果を利用状況の表示や課金額の計算に利用します。 |
| [テナントの契約](/ja/docs/part-3/saasus-platform-features/pricing-billing#テナントの契約) | テナントに適用する料金プラン・税率と、適用時期を管理する機能です。<br />SaaS 運用コンソールで設定するほか、SaaSアプリケーションにプラン選択や変更の処理を組み込めます。 |

</div>

## [外部サービス連携](/ja/docs/part-3/saasus-platform-features/external-integrations)

<div className="feature-overview-table">

| 機能 | 説明 |
| --- | --- |
| [Stripe連携](/ja/docs/part-3/saasus-platform-features/external-integrations#stripe連携) | SaaSus Platform で管理する料金プラン、税率、テナント、利用量をStripeと連携し、課金・請求に利用する機能です。<br />SaaS 開発コンソールで接続を設定すると、プラン適用や利用量の記録に応じた連携処理が行われます。<br />Stripeを利用しない場合は、取得した料金・契約・利用量の情報を使い、自社側で請求処理を用意します。 |
| [Amazon EventBridge](/ja/docs/part-3/saasus-platform-features/external-integrations#amazon-eventbridge) | ユーザーやテナントの作成など、SaaSus Platformで発生したイベントを自社のAWSアカウントへ配信する機能です。<br />SaaS 開発コンソールで送信先を設定し、Amazon EventBridgeのイベントバス・ルール・処理先を自社側で用意します。 |
| [AWS Marketplace](/ja/docs/part-3/saasus-platform-features/external-integrations#aws-marketplace) | AWS Marketplaceの販売プラン、購入者、テナントを関連付ける機能です。<br />購入者の新規登録はログイン画面で処理し、既存テナントとの紐付けはSaaSアプリケーションに組み込みます。 |

</div>

:::caution 新規利用停止中

既存ガイドでは、AWS Marketplaceの仕様変更に未対応のため、新規利用を停止している旨を案内しています。  
提供状況は[AWS Marketplace 連携機能について](/ja/docs/part-4/aws-marketplace-integration/aws-marketplace-integration)を確認してください。

:::

## [ログ・分析・フィードバック](/ja/docs/part-3/saasus-platform-features/logs-analytics-feedback)

<div className="feature-overview-table">

| 機能 | 説明 |
| --- | --- |
| [API実行ログ](/ja/docs/part-3/saasus-platform-features/logs-analytics-feedback#api実行ログ) | SaaSus APIの呼び出し履歴と、各呼び出しの詳細を確認する機能です。<br />APIでエラーが発生したときの原因調査や、呼び出し内容の確認に利用できます。 |
| [利用状況の分析](/ja/docs/part-3/saasus-platform-features/logs-analytics-feedback#利用状況の分析) | ユーザー行動履歴、ユーザー数、期間ごとの集計指標やページ別の利用統計を取得する機能です。<br />SaaSアプリケーションの利用状況を確認し、利用者の動向を把握するために利用できます。 |
| [フィードバック](/ja/docs/part-3/saasus-platform-features/logs-analytics-feedback#フィードバック) | SaaS利用者からの質問・要望を収集し、対応状況、投票、コメントを管理する機能です。<br />利用者向けの投稿・閲覧画面はSaaSアプリケーションに実装し、SaaS 運用コンソールで確認や対応を行います。 |

</div>

## [Smart API Gateway・Smart MCP Server](/ja/docs/part-3/saasus-platform-features/smart-api-gateway)

<div className="feature-overview-table">

| 機能 | 説明 |
| --- | --- |
| [API公開設定](/ja/docs/part-3/saasus-platform-features/smart-api-gateway#api公開設定) | 接続先のSaaSアプリケーションや公開する処理を設定し、APIを公開する機能です。<br />SaaS 開発コンソールで設定・公開し、SaaSアプリケーションには参考ガイドに従ってSDKやアノテーションを組み込みます。 |
| [アクセス制御](/ja/docs/part-3/saasus-platform-features/smart-api-gateway#アクセス制御) | 公開APIを利用できるユーザー・テナント、呼び出し回数の上限、アクセス元のIPアドレスを制限する機能です。<br />APIキーやユーザーに付与された役割を使い、公開する処理に応じてアクセスを制御します。 |
| [Smart MCP Server](/ja/docs/part-3/saasus-platform-features/smart-api-gateway#smart-mcp-server) | Smart API Gatewayで公開したAPIをMCPツールとして提供する機能です。<br />APIを公開するとMCP Serverも自動で利用可能になり、AIクライアントに接続先と認証情報を設定して呼び出せます。 |

</div>

## [SaaSインフラ管理](/ja/docs/part-3/saasus-platform-features/saas-infrastructure)

<div className="feature-overview-table">

| 機能 | 説明 |
| --- | --- |
| [構築設定](/ja/docs/part-3/saasus-platform-features/saas-infrastructure#構築設定) | 自動構築の有効・無効、AWSへのアクセス権限、構築・初期化に使うファイルを管理する機能です。<br />AWS CloudFormationテンプレートと初期化SQLは、自社SaaSの構成に合わせて用意します。 |
| [テナントのオンボーディング](/ja/docs/part-3/saasus-platform-features/saas-infrastructure#テナントのオンボーディング) | テナント作成をきっかけに、そのテナント専用のアプリケーション実行環境を構築し、データベースを初期化する機能です。<br />SaaS 運用コンソールのテナント管理画面で、テナント属性の`TenantOnboardingStatus`から構築状況を確認できます。 |

</div>

## [SaaSus Platformの管理](/ja/docs/part-3/saasus-platform-features/development-administration)

<div className="feature-overview-table">

| 機能 | 説明 |
| --- | --- |
| [SaaSus Platformの管理](/ja/docs/part-3/saasus-platform-features/development-administration) | SaaSus Platformを利用するユーザー、自分のアカウント、SaaSus Platformの契約を管理する機能です。<br />主にSaaS 開発コンソールのアカウント設定と、各コンソールのユーザーメニューから操作します。 |

</div>
