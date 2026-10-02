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
  isIsoUtc,
  publicIncidents,
  statusComponents,
} from '../data/status/incidents';
import styles from './status.module.css';

interface IncidentFlag {
  enabled: boolean;
  isTest?: boolean;
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

function normalizeIncidentFlag(value: unknown): IncidentFlag | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const raw = value as Record<string, unknown>;
  if (typeof raw.enabled !== 'boolean') return null;
  const text = (key: string): string | undefined => {
    const field = raw[key];
    return typeof field === 'string' && field.trim() ? field.trim() : undefined;
  };
  return {
    enabled: raw.enabled,
    isTest: raw.isTest === true,
    incidentId: text('incidentId'),
    currentStatus: isIncidentStatus(raw.currentStatus) ? raw.currentStatus : undefined,
    updatedAt: text('updatedAt'),
    startTimeJa: text('startTimeJa'),
    startTimeEn: text('startTimeEn'),
    affectedServicesJa: text('affectedServicesJa'),
    affectedServicesEn: text('affectedServicesEn'),
    statusTextJa: text('statusTextJa'),
    statusTextEn: text('statusTextEn'),
  };
}

function formatTimestamp(timestamp: unknown, locale: Locale): string {
  if (!isIsoUtc(timestamp)) return '-';
  const date = new Date(timestamp);

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
  isTest,
}: {
  locale: Locale;
  affectedComponentIds: readonly string[] | null;
  activeStatus: IncidentStatus;
  isTest: boolean;
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
                  isUnknown || isTest
                    ? styles.componentUnknown
                    : isAffected
                      ? styles.componentAffected
                      : styles.componentOperational
                }
              >
                {isTest && <><Translate id="status.incident.test">Test</Translate>{': '}</>}
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
  const isTest = incident.isTest || record?.isTest;
  const isResolved = activeStatus === 'resolved';

  return (
    <section id={record?.id} className={styles.currentIncidentSection} aria-labelledby="current-incident">
      <div className={`${styles.incidentCard} ${isTest || isResolved ? styles.inactiveIncidentCard : ''}`}>
        <h2 id="current-incident" className={styles.incidentTitle}>
          {record ? localized(record.title, locale) : (
            <Translate id="status.incident.title">Incident Report</Translate>
          )}
        </h2>
        {isTest && (
          <span className={styles.testBadge}>
            <Translate id="status.incident.test">Test</Translate>
          </span>
        )}
        <p className={styles.incidentMessage}>
          {record
            ? localized(record.impact, locale)
            : isTest ? (
              <Translate id="status.test.message">This is a test incident notification.</Translate>
            ) : isResolved ? (
              <Translate id="status.resolved.message">The incident has been resolved.</Translate>
            ) : (
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
          {record && (
            <div>
              <dt><Translate id="status.incident.severity">Severity</Translate></dt>
              <dd>{severityLabel(record.severity, locale)}</dd>
            </div>
          )}
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
  hasCurrentIncident,
}: {
  records: readonly IncidentRecord[];
  locale: Locale;
  hasCurrentIncident: boolean;
}) {
  return (
    <section className={styles.historySection} aria-labelledby="incident-history">
      <h2 id="incident-history" className={styles.sectionHeading}>
        <Translate id="status.history.heading">Incident history</Translate>
      </h2>
      {records.length === 0 ? (
        <p className={styles.emptyHistory}>
          {hasCurrentIncident ? (
            <Translate id="status.history.noOther">No other incidents have been published.</Translate>
          ) : (
            <Translate id="status.history.empty">No incidents have been published.</Translate>
          )}
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

  const flag = normalizeIncidentFlag(saasusPlatformMaintenancemode);
  const liveStatusUnavailable = hasInitializationError || flag === null;
  const incident = isReady && !liveStatusUnavailable && flag?.enabled ? flag : null;

  const locale: Locale = currentLocale === 'ja' ? 'ja' : 'en';
  const currentIncidentRecord = incident?.incidentId
    ? publicIncidents.find((record) => record.id === incident.incidentId)
    : undefined;
  const currentIncidentId = currentIncidentRecord?.id;
  const historicalIncidents = useMemo(
    () => publicIncidents.filter((record) => record.id !== currentIncidentId).sort(
      (left, right) => Date.parse(right.startedAt) - Date.parse(left.startedAt),
    ),
    [currentIncidentId],
  );
  const activeStatus =
    incident && isIncidentStatus(incident.currentStatus)
      ? incident.currentStatus
      : currentIncidentRecord
        ? latestUpdate(currentIncidentRecord).status
        : 'investigating';
  const isResolved = activeStatus === 'resolved';
  const isTest = Boolean(incident?.isTest || currentIncidentRecord?.isTest);
  const affectedComponentIds = incident && !isResolved
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
      ) : liveStatusUnavailable ? (
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
          {isTest ? (
            <div className={styles.unknownCard} role="status">
              <Clock3 size={32} aria-hidden="true" />
              <strong><Translate id="status.test.message">This is a test incident notification.</Translate></strong>
            </div>
          ) : incident === null || isResolved ? (
            <div className={styles.operationalCard} role="status">
              <CheckCircle2 size={32} aria-hidden="true" />
              <div className={styles.operationalText}>
                <Translate id="status.operational">All systems are operational.</Translate>
              </div>
            </div>
          ) : (
            <div className={styles.outageCard} role="alert">
              <XCircle size={32} aria-hidden="true" />
              <div className={styles.outageText}>
                <Translate id="status.outage">We are experiencing issues with some systems.</Translate>
              </div>
            </div>
          )}
          {incident && (
            <CurrentIncidentCard
              incident={incident}
              record={currentIncidentRecord}
              locale={locale}
            />
          )}

          <ComponentStatusList
            locale={locale}
            affectedComponentIds={affectedComponentIds}
            activeStatus={activeStatus}
            isTest={isTest}
          />
        </>
      )}
      <IncidentHistory records={historicalIncidents} locale={locale} hasCurrentIncident={Boolean(currentIncidentRecord)} />
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
