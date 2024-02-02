---
title: "FAQ"
slug: "faq"
excerpt: ""
hidden: false
createdAt: "Mon Aug 08 2022 11:55:56 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Jan 23 2024 10:06:14 GMT+0000 (Coordinated Universal Time)"
---
■ よくある質問  
Q: SaaSus Platformを利用すると何ができますか？  
A: Webコンソールを使って、SaaSの基本的な機能の設定ができます。お客様が構築したWebアプリケーションにSaaSus SDK/APIを組み込んでいただくことにより、Webコンソールで設定した内容をもとにSaaSの基本的な機能がお客様のSaaSに組み込まれます。そのため、SaaSの基本的な機能に関する、開発と継続的な運用コストが削減できます。

Q: SaaSの基本的な機能はどのようなものがありますか？  
A: 2024年10月現在では、マルチテナントSaaSを前提にしたテナント管理機能、ユーザ管理機能、ログイン画面作成機能、役割（ロール）管理機能、料金プラン機能、請求（Stripe連携）機能、メータリング機能、Amazon EventBridge連携機能、AWS Marketplaceへの連携がご利用いただけます。

Q: 今後はどのような機能が実装される予定ですか？  
A: <a href="https://github.com/orgs/saasus-platform/projects/1" target="_black">こちらのパブリックロードマップ</a>をご参照ください。

Q: Webコンソールの内容は日本語ですか？  
A: 日本語版と英語版をご用意しており、Web コンソールから言語を切り替えることが可能です。

Q: 対応しているブラウザは何がありますか？  
A: 現状は Mac Google Chromeでの動作を保証しております。近日、他のブラウザに関しても動作検証していく予定となります。

Q: SaaSを作るのがはじめてなのですが、大丈夫でしょうか？  
A: 一般的なWebアプリケーションが作成できれば、SaaSの知識がなくても使い始めることが可能です。SaaS特有の部分に関しては、Webコンソールと操作マニュアルを読んでいただくと理解が進むような設計にしております。

Q: SDKはどのようなプログラミング言語で利用できますか？  
A: 現在提供中のものは、PHP(Laravel)、TypeScript(Node.js)、Java、Go、Python向けのものになります。今後、Ruby、C#用のSDKの提供を予定しております。

Q: SDKをどのように使って自社のSaaSに組み込むのでしょうか？  
A: <a href="https://www.youtube.com/watch?v=deSkPJ-zTgw" target="_blank">こちらのデモ動画</a>および、<a href="./tutorial/prepare-sample-application" target="_black">チュートリアル</a>をご実施ください。チュートリアルでは、普通のWebチャットアプリケーションに実際にSaaSus SDKのコードを組み込んでいただき、SaaSus Platformを用いてマルチテナントSaaS化することをご体験いただけます。

Q: APIはどのようなものが用意されていますでしょうか？  
A: <a href="./reference/getting-started-with-your-api" target="_black">こちらのAPIマニュアル</a>をご参照ください。

Q: 機能開発要望はどのように伝えれば良いですか？  
A: Webコンソールから、機能開発要望フォームにアクセスできるようになっております。そちらからご送信お願いします。

Q: SaaSus Platformはマルチテナントですか？  
A: はい。マルチテナントSaaSになります。SaaSus Platform自体がSaaSus Platformを利用して作成されています。

Q: SaaSus Platformでデータはどのように保護していますか？  
A: SaaSus Platformではインフラストラクチャとしてアマゾン ウェブ サービス(AWS)の日本国内リージョンを利用しています。SaaSus Platformご利用のお客様のアカウントは、完全に個別のAWSアカウントを利用するようにデザインされており、AWSアカウントレベルでデータも分離されています。また、保存時にはデータの暗号化を行っています。そのため、SaaSus Platformにセルフサインアップしていただいた際には、AWSアカウントの準備を自動的に行うため最短でも１時間のお時間をいただいております。セルフサインアップが混雑している場合はさらに準備にお時間がかかる可能性があります。

Q: 開発用のアカウントと本番用のアカウントを分けて利用することは可能ですか？  
A: フリープランでは、開発用のアカウント１つのみが払い出されます。スタンダードプランでは、SaaSus Platformご利用アカウントごとに、開発、ステージング、本番、と３つの環境が払い出されます。

Q: SaaSus Platformの解約を行いたい場合はどうすればよいですか？  
A: Webコンソール上から解約フォームに記入いただき送信していただくことで解約が完了します。解約されたお客様アカウント用のAWSアカウントはクローズされます。

Q: SaaSus Platformの解約を行った時にデータを引き出すことはできますか？  
A: SaaSus APIを利用して引き出すことが可能です。また、SaaSus Platform卒業プランとして、お客様アカウント用のAWSアカウントの所有権をデータが入ったままの状態でお客様に移管させていただくプランも検討しております。そのため、SaaSus Platformの成長速度よりもお客様SaaSの成長速度のほうが大幅に速い場合、SaaSus Platformでカバーしていた部分をご自身の実装に切り替えていただくことが可能です。
