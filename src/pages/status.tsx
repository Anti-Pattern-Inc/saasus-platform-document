import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { LDProvider, useFlags, useLDClient } from 'launchdarkly-react-client-sdk';
import { CheckCircle2, XCircle } from 'lucide-react';
import styles from './status.module.css';

interface IncidentFlag {
  enabled?: boolean;
  startTimeJa?: string;
  startTimeEn?: string;
  affectedServicesJa?: string;
  affectedServicesEn?: string;
  statusTextJa?: string;
  statusTextEn?: string;
}

function StatusContent() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const ldClient = useLDClient();
  const { saasusPlatformMaintenancemode } = useFlags();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!ldClient) return;
    ldClient.waitForInitialization().then(() => setIsReady(true));
  }, [ldClient]);

  const incident: IncidentFlag | null | undefined = !isReady ? undefined : saasusPlatformMaintenancemode?.enabled ? saasusPlatformMaintenancemode : null;

  const locale = currentLocale === 'ja' ? 'ja' : 'en';

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>
        <Translate id="status.heading">SaaSus Platform Status</Translate>
      </h1>
      <p className={styles.subheading}>
        <Translate id="status.subheading">Check the current status of our systems.</Translate>
      </p>

      {incident === undefined ? (
        <div className={styles.loading}>Loading...</div>
      ) : incident === null ? (
        <div className={styles.operationalCard}>
          <CheckCircle2 size={32} color="#16a34a" />
          <div className={styles.operationalText}>
            <Translate id="status.operational">All systems are operational.</Translate>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.outageCard}>
            <XCircle size={32} color="#dc2626" />
            <div className={styles.outageText}>
              <Translate id="status.outage">We are experiencing issues with some systems.</Translate>
            </div>
          </div>

          <div className={styles.incidentCard}>
            <div className={styles.incidentTitle}>
              <Translate id="status.incident.title">Incident Report</Translate>
            </div>
            <p className={styles.incidentMessage}>
              <Translate id="status.incident.message">
                Some services are currently experiencing issues. Our engineering team is working on a fix and will restore normal operations as soon as possible. We apologize for the inconvenience.
              </Translate>
            </p>
            <div className={styles.incidentDetails}>
              <p>
                <strong><Translate id="status.incident.startTime">Start Time:</Translate></strong>{' '}
                {locale === 'ja' ? (incident.startTimeJa ?? '') : (incident.startTimeEn ?? '')}
              </p>
              <p>
                <strong><Translate id="status.incident.affectedServices">Affected Services:</Translate></strong>{' '}
                {locale === 'ja' ? (incident.affectedServicesJa ?? '') : (incident.affectedServicesEn ?? '')}
              </p>
              <p>
                <strong><Translate id="status.incident.statusText">Status:</Translate></strong>{' '}
                {locale === 'ja' ? (incident.statusTextJa ?? '') : (incident.statusTextEn ?? '')}
              </p>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default function StatusPage() {
  const { siteConfig } = useDocusaurusContext();
  const ldClientId = siteConfig.customFields?.ldClientId as string;

  return (
    <Layout
      title={translate({ id: 'status.title', message: 'Status' })}
      description={translate({ id: 'status.description', message: 'SaaSus Platform Service Status' })}
    >
      <LDProvider clientSideID={ldClientId}>
        <StatusContent />
      </LDProvider>
    </Layout>
  );
}
