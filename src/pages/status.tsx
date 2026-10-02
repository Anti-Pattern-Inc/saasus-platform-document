import React, { useEffect, useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { LDProvider, useFlags, useLDClient } from 'launchdarkly-react-client-sdk';
import { CheckCircle2, Clock3, XCircle } from 'lucide-react';
import {
  IncidentRecord,
  IncidentStatus,
  Locale,
  publicIncidents,
  statusComponents,
} from '../data/status/incidents';
import styles from './status.module.css';

interface IncidentFlag {
  enabled?: boolean;
  incidentId?: string;
  currentStatus?: IncidentStatus;
  updatedAt?: string;
  startTimeJa?: string;
  startTimeEn?: string;
  affectedServicesJa?: string;
  affectedServicesEn?: string;
  statusTextJa?: string;
  statusTextEn?: string;
}

const localized = (text: { ja: string; en: string }, locale: Locale) =>
  text[locale];

const latestUpdate = (record: IncidentRecord) =>
  record.updates[record.updates.length - 1];

const incidentStatuses: readonly IncidentStatus[] = [
  'investigating',
  'identified',
  'monitoring',
  'resolved',
];

function isIncidentStatus(value: unknown): value is IncidentStatus {
  return (
    typeof value === 'string' &&
    incidentStatuses.includes(value as IncidentStatus)
  );
}

function formatTimestamp(timestamp: unknown, locale: Locale): string {
  const date = typeof timestamp === 'string' ? new Date(timestamp) : null;
  if (!date || Number.isNaN(date.getTime())) return '-';

  return `${new Intl.DateTimeFormat(locale === 'ja' ? 'ja-JP' : 'en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Tokyo',
  }).format(date)} JST`;
}

function statusLabel(status: IncidentStatus, locale: Locale): string {
  const labels: Record<IncidentStatus, { ja: string; en: string }> = {
    investigating: { ja: '調査中', en: 'Investigating' },
    identified: { ja: '原因特定済み', en: 'Identified' },
    monitoring: { ja: '監視中', en: 'Monitoring' },
    resolved: { ja: '復旧済み', en: 'Resolved' },
  };
  return localized(labels[status], locale);
}

function severityLabel(
  severity: IncidentRecord['severity'],
  locale: Locale,
): string {
  const labels: Record<IncidentRecord['severity'], { ja: string; en: string }> = {
    minor: { ja: '軽微', en: 'Minor' },
    major: { ja: '重大', en: 'Major' },
    critical: { ja: '緊急', en: 'Critical' },
  };
  return localized(labels[severity], locale);
}

function ComponentStatusList({
  locale,
  affectedComponentIds,
  activeStatus,
}: {
  locale: Locale;
  affectedComponentIds: readonly string[] | null;
  activeStatus: IncidentStatus;
}) {
  return (
    <section className={styles.componentsSection} aria-labelledby="status-components">
      <h2 id="status-components" className={styles.sectionHeading}>
        <Translate id="status.components.heading">Services</Translate>
      </h2>
      <ul className={styles.componentList}>
        {statusComponents.map((component) => {
          const isAffected = affectedComponentIds?.includes(component.id) ?? false;
          const isUnknown = affectedComponentIds === null;
          const status = isUnknown
            ? locale === 'ja'
              ? '状況を更新中'
              : 'Updating'
            : isAffected
              ? statusLabel(activeStatus, locale)
              : locale === 'ja'
                ? '正常'
                : 'Operational';

          return (
            <li className={styles.componentItem} key={component.id}>
              <span>{localized(component.name, locale)}</span>
              <span
                className={
                  isUnknown
                    ? styles.componentUnknown
                    : isAffected
                      ? styles.componentAffected
                      : styles.componentOperational
                }
              >
                {status}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function IncidentTimeline({
  record,
  locale,
}: {
  record: IncidentRecord;
  locale: Locale;
}) {
  return (
    <ol className={styles.timeline}>
      {record.updates.map((update) => (
        <li className={styles.timelineItem} key={`${record.id}-${update.publishedAt}`}>
          <div className={styles.timelineMeta}>
            <span className={styles.timelineStatus}>
              {statusLabel(update.status, locale)}
            </span>
            <time dateTime={update.publishedAt}>
              {formatTimestamp(update.publishedAt, locale)}
            </time>
          </div>
          <p>{localized(update.message, locale)}</p>
        </li>
      ))}
    </ol>
  );
}

function CurrentIncidentCard({
  incident,
  record,
  locale,
}: {
  incident: IncidentFlag;
  record?: IncidentRecord;
  locale: Locale;
}) {
  const fallbackStatus = record ? latestUpdate(record).status : 'investigating';
  const activeStatus = isIncidentStatus(incident.currentStatus)
    ? incident.currentStatus
    : fallbackStatus;
  const startTime = record
    ? formatTimestamp(record.startedAt, locale)
    : locale === 'ja'
      ? incident.startTimeJa
      : incident.startTimeEn;
  const affectedServices = record
    ? record.affectedComponents
        .map((component) => localized(component.name, locale))
        .join(locale === 'ja' ? '、' : ', ')
    : locale === 'ja'
      ? incident.affectedServicesJa
      : incident.affectedServicesEn;
  const currentStatusText =
    locale === 'ja' ? incident.statusTextJa : incident.statusTextEn;

  return (
    <section className={styles.currentIncidentSection} aria-labelledby="current-incident">
      <div className={styles.incidentCard}>
        <h2 id="current-incident" className={styles.incidentTitle}>
          {record ? localized(record.title, locale) : (
            <Translate id="status.incident.title">Incident Report</Translate>
          )}
        </h2>
        {record?.isTest && (
          <span className={styles.testBadge}>
            <Translate id="status.incident.test">Test</Translate>
          </span>
        )}
        <p className={styles.incidentMessage}>
          {record
            ? localized(record.impact, locale)
            : (
              <Translate id="status.incident.message">
                Some services are currently experiencing issues. Our engineering team is working on a fix and will restore normal operations as soon as possible. We apologize for the inconvenience.
              </Translate>
            )}
        </p>
        <dl className={styles.incidentDetails}>
          <div>
            <dt><Translate id="status.incident.id">Incident ID</Translate></dt>
            <dd>
              {incident.incidentId ?? (
                <Translate id="status.incident.pendingId">Pending publication</Translate>
              )}
            </dd>
          </div>
          <div>
            <dt><Translate id="status.incident.startTime">Start Time</Translate></dt>
            <dd>{startTime || '-'}</dd>
          </div>
          <div>
            <dt><Translate id="status.incident.affectedServices">Affected Services</Translate></dt>
            <dd>{affectedServices || '-'}</dd>
          </div>
          <div>
            <dt><Translate id="status.incident.statusText">Status</Translate></dt>
            <dd>{currentStatusText || statusLabel(activeStatus, locale)}</dd>
          </div>
          {incident.updatedAt && (
            <div>
              <dt><Translate id="status.incident.updatedAt">Last Updated</Translate></dt>
              <dd>{formatTimestamp(incident.updatedAt, locale)}</dd>
            </div>
          )}
        </dl>
        {record ? (
          <IncidentTimeline record={record} locale={locale} />
        ) : (
          <p className={styles.updatePending}>
            <Translate id="status.incident.historyPending">
              The detailed incident history is being updated.
            </Translate>
          </p>
        )}
      </div>
    </section>
  );
}

function IncidentHistory({
  records,
  locale,
}: {
  records: readonly IncidentRecord[];
  locale: Locale;
}) {
  return (
    <section className={styles.historySection} aria-labelledby="incident-history">
      <h2 id="incident-history" className={styles.sectionHeading}>
        <Translate id="status.history.heading">Incident history</Translate>
      </h2>
      {records.length === 0 ? (
        <p className={styles.emptyHistory}>
          <Translate id="status.history.empty">
            No incidents have been published.
          </Translate>
        </p>
      ) : (
        <div className={styles.historyList}>
          {records.map((record) => (
            <article className={styles.historyCard} key={record.id} id={record.id}>
              <div className={styles.historyHeader}>
                <div>
                  <h3>{localized(record.title, locale)}</h3>
                  <p className={styles.historyMeta}>
                    <Translate id="status.incident.id">Incident ID</Translate>
                    {': '}{record.id}
                    {' · '}
                    {severityLabel(record.severity, locale)}
                    {' · '}
                    {formatTimestamp(record.startedAt, locale)}
                  </p>
                </div>
                {record.isTest && (
                  <span className={styles.testBadge}>
                    <Translate id="status.history.test">Test</Translate>
                  </span>
                )}
              </div>
              <p>{localized(record.impact, locale)}</p>
              <IncidentTimeline record={record} locale={locale} />
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function StatusContent() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const ldClient = useLDClient();
  const { saasusPlatformMaintenancemode } = useFlags();
  const [isReady, setIsReady] = useState(false);
  const [hasInitializationError, setHasInitializationError] = useState(false);

  useEffect(() => {
    if (!ldClient) return undefined;

    let mounted = true;
    ldClient.waitForInitialization().then(() => {
      if (mounted) {
        setHasInitializationError(false);
        setIsReady(true);
      }
    }).catch(() => {
      if (mounted) {
        setHasInitializationError(true);
        setIsReady(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, [ldClient]);

  const incident: IncidentFlag | null | undefined = !isReady
    ? undefined
    : saasusPlatformMaintenancemode?.enabled
      ? saasusPlatformMaintenancemode
      : null;

  const locale: Locale = currentLocale === 'ja' ? 'ja' : 'en';
  const historicalIncidents = useMemo(
    () => [...publicIncidents].sort(
      (left, right) => Date.parse(right.startedAt) - Date.parse(left.startedAt),
    ),
    [],
  );
  const currentIncidentRecord = incident?.incidentId
    ? publicIncidents.find((record) => record.id === incident.incidentId)
    : undefined;
  const activeStatus =
    incident && isIncidentStatus(incident.currentStatus)
      ? incident.currentStatus
      : currentIncidentRecord
        ? latestUpdate(currentIncidentRecord).status
        : 'investigating';
  const affectedComponentIds = incident
    ? currentIncidentRecord?.affectedComponents.map((component) => component.id) ?? null
    : [];

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>
        <Translate id="status.heading">SaaSus Platform Status</Translate>
      </h1>
      <p className={styles.subheading}>
        <Translate id="status.subheading">Check the current status of our systems.</Translate>
      </p>

      {!isReady ? (
        <div className={styles.loading} role="status">
          <Clock3 size={20} aria-hidden="true" />
          <Translate id="status.loading">Loading status information...</Translate>
        </div>
      ) : hasInitializationError ? (
        <div className={styles.unknownCard} role="alert">
          <XCircle size={32} aria-hidden="true" />
          <div>
            <strong>
              <Translate id="status.unavailable.title">Status information is temporarily unavailable.</Translate>
            </strong>
            <p>
              <Translate id="status.unavailable.message">
                Please check again shortly.
              </Translate>
            </p>
          </div>
        </div>
      ) : (
        <>
          {incident === null ? (
            <div className={styles.operationalCard} role="status">
              <CheckCircle2 size={32} aria-hidden="true" />
              <div className={styles.operationalText}>
                <Translate id="status.operational">All systems are operational.</Translate>
              </div>
            </div>
          ) : incident && (
            <>
              <div className={styles.outageCard} role="alert">
                <XCircle size={32} aria-hidden="true" />
                <div className={styles.outageText}>
                  <Translate id="status.outage">We are experiencing issues with some systems.</Translate>
                </div>
              </div>
              <CurrentIncidentCard
                incident={incident}
                record={currentIncidentRecord}
                locale={locale}
              />
            </>
          )}

          <ComponentStatusList
            locale={locale}
            affectedComponentIds={affectedComponentIds}
            activeStatus={activeStatus}
          />
        </>
      )}
      <IncidentHistory records={historicalIncidents} locale={locale} />
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
