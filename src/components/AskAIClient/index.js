/**
 * SaaSus Ask AI Client Library - エントリーポイント
 * 統合されたAskAIClientクラスを再エクスポート
 */

// 統合されたAskAIClientクラスをインポート
export { AskAIClient } from './AskAIClient.js';

// グローバルに公開（開発用）
if (typeof window !== 'undefined') {
  import('./AskAIClient.js').then(({ AskAIClient }) => {
    window.SaaSusAskAI = AskAIClient;
  });
}
