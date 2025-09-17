import React, { useEffect, useRef } from 'react';
import SearchBar from '@theme-original/SearchBar';
import { SearchIntegration } from '../../components/AskAIClient/SearchIntegration.js';

export default function CustomSearchBar(props) {
  const searchIntegrationRef = useRef(null);

  useEffect(() => {
    // SearchIntegrationインスタンスを作成
    searchIntegrationRef.current = new SearchIntegration();
    
    // 検索入力の監視を開始
    const cleanup = searchIntegrationRef.current.startSearchInputMonitoring();
    
    // クリーンアップ関数を返す
    return cleanup;
  }, []);

  return <SearchBar {...props} />;
}
