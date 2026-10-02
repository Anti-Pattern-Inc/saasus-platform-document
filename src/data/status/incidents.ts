export type Locale = 'ja' | 'en';

export type IncidentStatus =
  | 'investigating'
  | 'identified'
  | 'monitoring'
  | 'resolved';

export type IncidentSeverity = 'minor' | 'major' | 'critical';

export type LocalizedText = Readonly<Record<Locale, string>>;

export interface StatusComponent {
  id: string;
  name: LocalizedText;
}

export interface IncidentUpdate {
  status: IncidentStatus;
  publishedAt: string;
  message: LocalizedText;
}

export interface IncidentRecord {
  id: string;
  title: LocalizedText;
  severity: IncidentSeverity;
  affectedComponents: readonly StatusComponent[];
  impact: LocalizedText;
  startedAt: string;
  /** Actual recovery time, which may precede publication of the recovery notice. */
  resolvedAt?: string;
  isTest: boolean;
  updates: readonly IncidentUpdate[];
}

/**
 * Keep this list small and stable. Component IDs are referenced by incident
 * records, so changing an ID would make existing public history ambiguous.
 */
export const statusComponents: readonly StatusComponent[] = [
  {
    id: 'api',
    name: { ja: 'API', en: 'API' },
  },
  {
    id: 'authentication',
    name: { ja: '認証', en: 'Authentication' },
  },
  {
    id: 'console',
    name: { ja: '管理画面', en: 'Management Console' },
  },
];

const statusComponentIds = new Set(statusComponents.map((component) => component.id));

/**
 * Public incident history. Keep this empty until a real incident or an
 * explicitly labelled test/training record is approved for publication.
 */
export const publicIncidents: readonly IncidentRecord[] = [];

const INCIDENT_ID_PATTERN = /^INC-\d{8}-\d{3}$/;
const ISO_UTC_PATTERN =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/;
const STATUS_ORDER: Record<IncidentStatus, number> = {
  investigating: 0,
  identified: 1,
  monitoring: 2,
  resolved: 3,
};

function isNonEmptyLocalizedText(value: LocalizedText): boolean {
  return Boolean(value.ja.trim()) && Boolean(value.en.trim());
}

function isIsoUtc(value: string): boolean {
  return ISO_UTC_PATTERN.test(value) && !Number.isNaN(Date.parse(value));
}

/**
 * Validate the append-only public registry at build time. Returning errors
 * instead of throwing here keeps the function reusable in tests and scripts.
 */
export function validateIncidentRecords(
  records: readonly IncidentRecord[],
): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();

  records.forEach((record, recordIndex) => {
    const prefix = `incidents[${recordIndex}]`;

    if (!INCIDENT_ID_PATTERN.test(record.id)) {
      errors.push(`${prefix}.id must match INC-YYYYMMDD-NNN`);
    }
    if (ids.has(record.id)) {
      errors.push(`${prefix}.id is duplicated: ${record.id}`);
    }
    ids.add(record.id);

    if (!isNonEmptyLocalizedText(record.title)) {
      errors.push(`${prefix}.title must contain Japanese and English text`);
    }
    if (!isNonEmptyLocalizedText(record.impact)) {
      errors.push(`${prefix}.impact must contain Japanese and English text`);
    }
    if (!isIsoUtc(record.startedAt)) {
      errors.push(`${prefix}.startedAt must be an ISO 8601 UTC timestamp`);
    }
    if (record.resolvedAt && !isIsoUtc(record.resolvedAt)) {
      errors.push(`${prefix}.resolvedAt must be an ISO 8601 UTC timestamp`);
    }
    if (
      record.resolvedAt &&
      isIsoUtc(record.startedAt) &&
      Date.parse(record.resolvedAt) < Date.parse(record.startedAt)
    ) {
      errors.push(`${prefix}.resolvedAt must not be before startedAt`);
    }

    const componentIds = new Set<string>();
    if (record.affectedComponents.length === 0) {
      errors.push(`${prefix}.affectedComponents must not be empty`);
    }
    record.affectedComponents.forEach((component, componentIndex) => {
      if (componentIds.has(component.id)) {
        errors.push(
          `${prefix}.affectedComponents[${componentIndex}].id is duplicated: ${component.id}`,
        );
      }
      componentIds.add(component.id);
      if (!component.id.trim() || !isNonEmptyLocalizedText(component.name)) {
        errors.push(
          `${prefix}.affectedComponents[${componentIndex}] must contain an ID and localized name`,
        );
      } else if (!statusComponentIds.has(component.id)) {
        errors.push(
          `${prefix}.affectedComponents[${componentIndex}].id is not registered in statusComponents: ${component.id}`,
        );
      }
    });

    if (record.updates.length === 0) {
      errors.push(`${prefix}.updates must contain at least one notification`);
      return;
    }

    let previousStatusOrder = -1;
    let previousPublishedAt: number | undefined;
    let hasResolvedUpdate = false;
    record.updates.forEach((update, updateIndex) => {
      const updatePrefix = `${prefix}.updates[${updateIndex}]`;
      const publishedAt = isIsoUtc(update.publishedAt)
        ? Date.parse(update.publishedAt)
        : Number.NaN;
      const statusOrder = STATUS_ORDER[update.status];

      if (!isIsoUtc(update.publishedAt)) {
        errors.push(`${updatePrefix}.publishedAt must be an ISO 8601 UTC timestamp`);
      }
      if (!isNonEmptyLocalizedText(update.message)) {
        errors.push(`${updatePrefix}.message must contain Japanese and English text`);
      }
      if (statusOrder < previousStatusOrder) {
        errors.push(`${updatePrefix}.status moves backwards in the timeline`);
      }
      if (
        !Number.isNaN(publishedAt) &&
        previousPublishedAt !== undefined &&
        publishedAt <= previousPublishedAt
      ) {
        errors.push(`${updatePrefix}.publishedAt must be in strictly ascending order`);
      }
      if (isIsoUtc(record.startedAt) && publishedAt < Date.parse(record.startedAt)) {
        errors.push(`${updatePrefix}.publishedAt must not be before startedAt`);
      }
      if (
        record.resolvedAt &&
        isIsoUtc(record.resolvedAt) &&
        update.status === 'resolved' &&
        !Number.isNaN(publishedAt) &&
        publishedAt < Date.parse(record.resolvedAt)
      ) {
        errors.push(`${updatePrefix}.publishedAt must not be before resolvedAt for a resolved update`);
      }

      previousStatusOrder = statusOrder;
      if (!Number.isNaN(publishedAt)) {
        previousPublishedAt = publishedAt;
      }
      hasResolvedUpdate ||= update.status === 'resolved';
    });

    if (hasResolvedUpdate && !record.resolvedAt) {
      errors.push(`${prefix}.resolvedAt is required for a resolved incident`);
    }
    if (record.resolvedAt && !hasResolvedUpdate) {
      errors.push(`${prefix}.resolvedAt requires a resolved update`);
    }
  });

  return errors;
}

const registryErrors = validateIncidentRecords(publicIncidents);
if (registryErrors.length > 0) {
  throw new Error(`Invalid public incident registry:\n${registryErrors.join('\n')}`);
}
