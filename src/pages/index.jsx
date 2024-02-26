import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function Home() {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // 現在のパスを取得
    const path = location.pathname;
    // 言語コードがURLに含まれているかチェック
    const languagePathMatch = path.match(/\/(ja|en|es|fr|de)\//);
    // 言語コードがあれば、そのコードを保持してリダイレクトパスを設定
    const redirectPath = languagePathMatch
      ? `/saasus-platform-document${languagePathMatch[0]}docs/saasus-platform-document`
      : '/saasus-platform-document/docs/saasus-platform-document';

    // クライアントサイドでのリダイレクト
    if (typeof window !== 'undefined') {
      window.location.href = redirectPath;
    }
  }, [location.pathname]);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div>Redirecting...</div>
    </Layout>
  );
}

export default Home;