import React, { useEffect } from 'react';
import { AskAIClient } from '../../components/AskAIClient';

export default function Root({ children }) {
  useEffect(() => {
    // 既にAsk AIクライアントが読み込まれているかチェック
    if (window.SaaSusAskAI) {
      return;
    }

    // ES6モジュールから直接グローバルに公開
    window.SaaSusAskAI = AskAIClient;
    
    // グローバルイベントを発火して読み込み完了を通知
    window.dispatchEvent(new CustomEvent('askAIClientLoaded'));

  }, []);

  return <>{children}</>;
}
