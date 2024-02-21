import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const history = useHistory();
  const {siteConfig} = useDocusaurusContext();

  // コンポーネントがマウントされたら/docs/introへリダイレクト
  useEffect(() => {
    history.push('/saasus-platform-document/docs/saasus-platform-document');
  }, [history]);

  // リダイレクトの実装中は、オプショナルでローディング表示などを行うこともできます。
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* リダイレクト中に表示する内容 */}
      <div>Redirecting...</div>
    </Layout>
  );
}
