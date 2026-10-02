const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const root = path.resolve(__dirname, '../..');

// Transpile the page for server rendering with deterministic external SDK state.
function loadModule(relativePath, imports = {}) {
  const filename = path.join(root, relativePath);
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.React,
      esModuleInterop: true,
    },
  });
  const module = { exports: {} };
  vm.runInNewContext(outputText, {
    module,
    exports: module.exports,
    require: (name) => imports[name] ?? require(name),
  }, { filename });
  return module.exports;
}

const registry = loadModule('src/data/status/incidents.ts');
const message = { ja: 'テスト通知', en: 'Test notification' };

function resolvedIncident() {
  return {
    id: 'INC-20261002-001',
    title: { ja: 'テストインシデント', en: 'Test incident' },
    severity: 'major',
    affectedComponents: [registry.statusComponents[0]],
    impact: message,
    startedAt: '2026-10-02T00:00:00Z',
    resolvedAt: '2026-10-02T01:00:00Z',
    isTest: true,
    updates: [
      { status: 'investigating', publishedAt: '2026-10-02T00:05:00Z', message },
      { status: 'monitoring', publishedAt: '2026-10-02T01:02:00Z', message },
      { status: 'resolved', publishedAt: '2026-10-02T01:05:00Z', message },
    ],
  };
}

function renderPage({ locale, ready = true, error = false, flag = { enabled: false }, records = [resolvedIncident()] }) {
  let stateIndex = 0;
  const state = [ready, error];
  const passthrough = ({ children }) => React.createElement(React.Fragment, null, children);
  const page = loadModule('src/pages/status.tsx', {
    react: {
      ...React,
      useEffect: () => {},
      useMemo: (fn) => fn(),
      useState: () => [state[stateIndex++], () => {}],
    },
    '@theme/Layout': passthrough,
    '@docusaurus/Translate': {
      __esModule: true,
      default: ({ id, children }) => {
        const translations = require('../../i18n/ja/code.json');
        return React.createElement(React.Fragment, null,
          locale === 'ja' ? translations[id]?.message ?? children : children);
      },
      translate: ({ message }) => message,
    },
    '@docusaurus/useDocusaurusContext': () => ({
      i18n: { currentLocale: locale },
      siteConfig: { customFields: { ldClientId: 'test-client' } },
    }),
    'launchdarkly-react-client-sdk': {
      LDProvider: passthrough,
      useLDClient: () => undefined,
      useFlags: () => ({ saasusPlatformMaintenancemode: flag }),
    },
    'lucide-react': { CheckCircle2: () => null, Clock3: () => null, XCircle: () => null },
    '../data/status/incidents': { ...registry, publicIncidents: records },
    './status.module.css': new Proxy({}, {
      get: (_, key) => key === '__esModule' ? false : key,
    }),
  });
  return renderToStaticMarkup(React.createElement(page.default));
}

test('accepts monitoring and recovery notices published after actual recovery', () => {
  assert.equal(registry.validateIncidentRecords([resolvedIncident()]).length, 0);
});

test('rejects a recovery notice published before actual recovery', () => {
  const record = resolvedIncident();
  record.updates.splice(1, 1);
  record.updates[1].publishedAt = '2026-10-02T00:59:00Z';
  assert.ok(registry.validateIncidentRecords([record]).some(
    (error) => error.includes('must not be before resolvedAt')));
});

test('still rejects duplicate IDs and backwards notification times', () => {
  const record = resolvedIncident();
  record.updates[1].publishedAt = '2026-10-02T00:04:00Z';
  const errors = registry.validateIncidentRecords([record, record]);
  assert.ok(errors.some((error) => error.includes('id is duplicated')));
  assert.ok(errors.some((error) => error.includes('strictly ascending order')));
});

test('rejects impossible calendar dates in all registry timestamps', () => {
  for (const field of ['startedAt', 'resolvedAt', 'publishedAt']) {
    const record = resolvedIncident();
    const target = field === 'publishedAt' ? record.updates[0] : record;
    target[field] = '2026-02-30T12:00:00Z';
    assert.ok(registry.validateIncidentRecords([record]).some(
      (error) => error.includes(`${field} must be an ISO 8601 UTC timestamp`)));
  }
  for (const value of ['2026-02-29T00:00:00Z', '2026-04-31T00:00:00Z', '2026-01-01T24:00:00Z']) {
    assert.equal(registry.isIsoUtc(value), false);
  }
  for (const value of ['2024-02-29T23:59:59Z', '2024-02-29T23:59:59.123Z']) {
    assert.equal(registry.isIsoUtc(value), true);
  }
});

test('validates the calendar date in permanent incident IDs', () => {
  for (const id of ['INC-20260230-001', 'INC-20260229-001', 'INC-20261301-001', 'INC-20260431-001']) {
    assert.ok(registry.validateIncidentRecords([{ ...resolvedIncident(), id }]).some(
      (error) => error.includes('.id must contain a valid calendar date')));
  }
  assert.equal(registry.validateIncidentRecords([
    { ...resolvedIncident(), id: 'INC-20240229-001' },
  ]).length, 0);
});

for (const locale of ['en', 'ja']) {
  test(`${locale}: malformed flag timestamps preserve the incident page`, () => {
    for (const updatedAt of ['not-a-timestamp', {}, 123, true]) {
      const html = renderPage({ locale, flag: { enabled: true, updatedAt } });
      assert.ok(html.includes('<dd>-</dd>'));
      assert.ok(html.includes('INC-20261002-001'));
    }
  });

  test(`${locale}: valid flag timestamps still display JST`, () => {
    const html = renderPage({
      locale,
      flag: { enabled: true, updatedAt: '2026-10-02T01:05:00Z' },
    });
    assert.match(html, /<dd>[^<]+ JST<\/dd>/);
  });

  test(`${locale}: resolved history exposes an incident ID and stable anchor`, () => {
    const html = renderPage({ locale });
    assert.match(html, /<article[^>]*id="INC-20261002-001"/);
    assert.ok(html.includes(': INC-20261002-001'));
    assert.ok(html.includes(locale === 'ja' ? '復旧済み' : 'Resolved'));
  });

  test(`${locale}: history remains accessible during loading and initialization failure`, () => {
    for (const state of [{ ready: false }, { error: true }]) {
      const html = renderPage({ locale, ...state });
      assert.ok(html.includes('id="incident-history"'));
      assert.ok(html.includes(': INC-20261002-001'));
      assert.ok(!html.includes('All systems are operational.'));
      assert.ok(!html.includes('すべてのシステムが正常に稼働しています'));
      const expected = state.error
        ? locale === 'ja'
          ? 'ステータス情報を一時的に取得できません。'
          : 'Status information is temporarily unavailable.'
        : locale === 'ja'
          ? '稼働状況を読み込んでいます…'
          : 'Loading status information...';
      assert.ok(html.includes(expected));
    }
  });

  test(`${locale}: malformed optional remote fields cannot become React children`, () => {
    for (const value of [{ nested: 'bad' }, ['bad'], true, 12]) {
      const flag = { enabled: true };
      for (const field of ['incidentId', 'startTimeJa', 'startTimeEn', 'affectedServicesJa',
        'affectedServicesEn', 'statusTextJa', 'statusTextEn', 'currentStatus']) flag[field] = value;
      const html = renderPage({ locale, flag });
      assert.ok(html.includes('class="outageCard"'));
      assert.ok(html.includes('id="incident-history"'));
      assert.ok(!html.includes('[object Object]'));
    }
  });

  test(`${locale}: malformed flag envelopes show unavailable rather than operational`, () => {
    for (const flag of [null, [], true, 'false', {}, { enabled: 'false' }, { enabled: 1 }]) {
      const html = renderPage({ locale, flag });
      assert.ok(html.includes('class="unknownCard"'));
      assert.ok(!html.includes('class="operationalCard"'));
      assert.ok(html.includes('id="incident-history"'));
    }
  });

  test(`${locale}: a linked current incident appears once and keeps its anchor`, () => {
    const record = resolvedIncident();
    const flag = { enabled: true, incidentId: record.id, currentStatus: 'investigating' };
    const html = renderPage({ locale, flag });
    assert.equal(html.split(record.title[locale]).length - 1, 1);
    assert.equal(html.split(`id="${record.id}"`).length - 1, 1);
    assert.ok(!html.includes('<article'));
    assert.ok(html.includes(locale === 'ja' ? '<dd>重大</dd>' : '<dd>Major</dd>'));
    const inactive = renderPage({ locale, flag: { ...flag, enabled: false } });
    assert.match(inactive, /<article[^>]*id="INC-20261002-001"/);
    const unavailable = renderPage({ locale, flag, error: true });
    assert.match(unavailable, /<article[^>]*id="INC-20261002-001"/);
  });

  test(`${locale}: test notifications do not announce a real outage`, () => {
    for (const currentStatus of ['investigating', 'identified', 'monitoring', 'resolved']) {
      for (const link of [{ incidentId: resolvedIncident().id }, { isTest: true }]) {
        const html = renderPage({ locale, flag: { enabled: true, currentStatus, ...link } });
        assert.ok(!html.includes('class="outageCard"'));
        assert.ok(!html.includes('class="componentAffected"'));
        assert.ok(html.includes(locale === 'ja'
          ? 'これはテスト用のインシデント通知です。' : 'This is a test incident notification.'));
        assert.ok(html.includes('class="incidentCard inactiveIncidentCard"'));
      }
    }
  });

  test(`${locale}: a recovery notice remains visible with operational service status`, () => {
    const record = { ...resolvedIncident(), isTest: false };
    for (const flag of [
      { enabled: true, currentStatus: 'resolved' },
      { enabled: true, incidentId: record.id },
    ]) {
      const html = renderPage({ locale, flag, records: [record] });
      assert.ok(html.includes('class="operationalCard"'));
      assert.ok(!html.includes('class="outageCard"'));
      assert.ok(!html.includes('class="componentAffected"'));
      assert.equal(html.split('class="componentOperational"').length - 1, 3);
      assert.ok(html.includes('id="current-incident"'));
    }
  });
}
