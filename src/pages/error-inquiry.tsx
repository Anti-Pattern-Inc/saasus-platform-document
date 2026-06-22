import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './inquiry-result.module.css';

const FALLBACK_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdh4CXgzABUQ_J8kDi3PafB3E6r898SuiQonVfOwVSarHAXug/viewform';

export default function ErrorInquiryPage(): JSX.Element {
  const heroSrc = useBaseUrl('/img/inquiry/hero-error.webp');

  return (
    <Layout
      title={translate({
        id: 'inquiry.error.title',
        message: 'An unexpected error occurred',
      })}
      description={translate({
        id: 'inquiry.error.description',
        message: 'An error occurred while submitting your inquiry.',
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
        <h1 className={`${styles.heading} ${styles.errorHeading}`}>
          <Translate id="inquiry.error.heading">
            An unexpected error occurred while submitting your inquiry.
          </Translate>
        </h1>
        <p className={styles.message}>
          <Translate
            id="inquiry.error.message"
            values={{
              fallback: (
                <a
                  href={FALLBACK_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.errorLink}
                >
                  <Translate id="inquiry.error.fallbackLink">
                    alternative inquiry form
                  </Translate>
                </a>
              ),
            }}
          >
            {
              'Sorry for the inconvenience. Please try again later, or contact us via the {fallback}.'
            }
          </Translate>
        </p>
        <div className={styles.actions}>
          <a href={useBaseUrl('/')} className={styles.primaryLink}>
            <Translate id="inquiry.error.returnHome">
              Return to documentation
            </Translate>
          </a>
        </div>
      </main>
    </Layout>
  );
}
