import React from 'react';
import DefaultGeneratedIndexPage from '@theme-original/DocCategoryGeneratedIndexPage';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { generatedIndexOverrides } from '../../constants/i18nGeneratedIndexOverrides';
/**
 * Docusaurus の generated-index ページ表示用テーマコンポーネントをオーバーライド。
 *
 * このカスタムでは、sidebar.js を英語ベースのまま維持しつつ、
 * /ja/ ロケールでアクセスされた場合に限って title / description を日本語に差し替える。
 *
 * 本処理では props.categoryGeneratedIndex から metadata を取得し、
 * permalink をキーに override マップを参照して title / description を動的に置き換える。
 *
 * 想定対象:
 * - type: "generated-index" を使っている sidebar カテゴリ
 * - slug に対応する override エントリがある場合のみ上書き
 * NOTE: ページ下部の「前へ／次へ」のタイトルが翻訳できない（Issue: https://github.com/facebook/docusaurus/issues/8118）
 */
export default function DocCategoryGeneratedIndexPage(props) {
    // generated-index ページの metadata は props.categoryGeneratedIndex に存在
    const metadata = props.categoryGeneratedIndex;
  
    // URLが /ja/ から始まっているかどうかで日本語表示を判定
    let isJa = false;
    if (ExecutionEnvironment.canUseDOM) {
      isJa = window.location.pathname.startsWith('/ja/');
    }
  
    // permalink（例: /ja/docs/part-4/...）から /ja/docs を除去して英語ベースのキーに変換
    const cleanedPermalink = metadata?.permalink?.replace(/^\/ja\/docs/, '');
  
    // マップに該当する日本語設定があれば取得
    const override = isJa ? generatedIndexOverrides[cleanedPermalink]?.ja : null;
  
    // 必要な場合のみ title / description を上書き
    const patchedMetadata =
      override && metadata
        ? {
            ...metadata,
            title: override.title ?? metadata.title,
            description: override.description ?? metadata.description,
          }
        : metadata;
  
    return <DefaultGeneratedIndexPage {...props} categoryGeneratedIndex={patchedMetadata} />;  
}
