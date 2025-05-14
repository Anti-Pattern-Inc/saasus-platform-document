/**
 * generated-index ページの title / description を
 * 日本語ロケール（/ja/）のときだけ上書きするための定義マップ。
 *
 * - sidebar.js は英語のまま管理しつつ、
 *   表示のみ日本語化したいという要件に対応。
 * - キーは generated-index の permalink（/ja/docs を除いた英語ベース）
 * - 各ロケールごとに title / description を定義可能（現在は ja のみ）
 *
 * 使用箇所: src/theme/DocCategoryGeneratedIndexPage/index.js
 */
export const generatedIndexOverrides = {
    '/part-4/application-settings': {
      ja: {
        title: 'アプリケーションの登録と設定',
        description: 'SaaSus アプリケーション構築に必要な設定をまとめたセクションです。',
      }
    },
    '/part-4/user-authz-settings': {
      ja: {
        title: 'ユーザー認証・認可の設定',
        description: 'ログイン方式、ユーザー属性、環境、ロールなど、ユーザー認証に関する設定をまとめます。',
      }
    },
    "/part-4/pricing-and-billing": {
      ja: {
        title: "料金プランと課金設定",
        description:
          "料金体系の設計、従量課金単位、税率、Stripe連携など、課金に関する全体の設定方法をまとめます。",
      },
    },
    '/part-4/account-settings': {
      ja: {
        title: 'アカウント設定',
        description: 'アカウント名やSaaSus Platformの料金プランの変更、SaaSusユーザーの招待を行えます。',
      }
    },
    '/part-5/user-management': {
      ja: {
        title: 'ユーザー管理',
        description: 'ユーザーの検索、作成、編集、削除、操作履歴の確認方法をまとめたセクションです。',
      }
    },
    '/part-7/faq': {
      ja: {
        title: 'よくある質問（FAQ）',
        description: 'SaaSus に関する各種よくある質問をカテゴリ別にまとめています。',
      }
    },
  };
  