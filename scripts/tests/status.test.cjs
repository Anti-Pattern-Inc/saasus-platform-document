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

function renderPage({ locale, ready = true, error = false, flag = { enabled: false } }) {
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
    '../data/status/incidents': { ...registry, publicIncidents: [resolvedIncident()] },
    './status.module.css': {},
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
    assert.ok(html.includes('<article id="INC-20261002-001">'));
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
}
