import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function Home() {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const path = location.pathname;
    const userLang = navigator.language || navigator.userLanguage;
    // 言語コードがURLに含まれているかチェック
    const languagePathMatch = path.match(/\/(ja)\//);

    let redirectPath = '/docs/part-1/purpose-and-overview';

    if (languagePathMatch) {
      redirectPath = `${languagePathMatch[0]}docs/part-1/purpose-and-overview`;
    } else if (path.includes('/docs/')) {
      redirectPath = '/docs/part-1/purpose-and-overview';
    } else {
      // その他の場合はブラウザの言語設定に基づいてリダイレクト
      if (userLang.startsWith("ja")) {
        redirectPath = '/ja/docs/part-1/purpose-and-overview';
      } else {
        // ブラウザの言語設定が英語またはその他の場合
        redirectPath = '/docs/part-1/purpose-and-overview';
      }
    }

    // クライアントサイドでのリダイレクト
    if (typeof window !== 'undefined') {
      window.location.href = redirectPath;
    }
  }, [location.pathname]);
}

export default Home;