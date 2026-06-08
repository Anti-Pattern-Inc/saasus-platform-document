import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './inquiry-result.module.css';

export default function ThanksInquiryPage(): JSX.Element {
  const heroSrc = useBaseUrl('/img/inquiry/hero-thanks.webp');

  return (
    <Layout
      title={translate({
        id: 'inquiry.thanks.title',
        message: 'Thank you for your inquiry',
      })}
      description={translate({
        id: 'inquiry.thanks.description',
        message: 'Thank you for contacting SaaSus Platform.',
      })}
    >
      <main className={styles.main}>
        <div className={styles.heroWrapper}>
          <img
            src={heroSrc}
            alt=""
            className={styles.hero}
            width={570}
            height={350}
          />
        </div>
        <h1 className={styles.heading}>
          <Translate id="inquiry.thanks.heading">
            Thank you for contacting us.
          </Translate>
        </h1>
        <p className={styles.message}>
          <Translate id="inquiry.thanks.message">
            We have received your inquiry. Our team will get back to you shortly.
          </Translate>
        </p>
        <div className={styles.actions}>
          <a href={useBaseUrl('/')} className={styles.primaryLink}>
            <Translate id="inquiry.thanks.returnHome">
              Return to documentation
            </Translate>
          </a>
        </div>
      </main>
    </Layout>
  );
}
