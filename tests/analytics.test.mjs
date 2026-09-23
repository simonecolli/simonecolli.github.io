import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function setup({ hostname = 'www.simonecolli.com', activated = true, production = true } = {}) {
  const source = readFileSync(new URL('../src/lib/analytics.ts', import.meta.url), 'utf8')
    .replace(/import .*siteConfig.*;/, 'const DEV_EMAIL="info.dev@simonecolli.com", PHOTO_EMAIL="info.photo@simonecolli.com", SITE_URL="https://www.simonecolli.com";')
    .replace(/import .*data\/projects.*;/, 'const projects = [{slug: "public-project"}];')
    .replace(/import .*data\/talks.*;/, 'const talks = [{slug: "public-talk"}];')
    .replace('import.meta.env.VITE_ANALYTICS_ENABLED', JSON.stringify(activated ? 'true' : 'false'))
    .replace('import.meta.env.PROD', String(production));
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const storage = new Map();
  const timers = new Map();
  const scripts = [];
  const cookies = [];
  let reloads = 0, timerId = 0, now = Date.UTC(2026, 8, 16, 12);
  class Clock extends Date { static now() { return now; } }
  const document = {
    referrer: 'https://example.org/private?email=secret@example.org',
    head: { appendChild: script => scripts.push(script) },
    createElement: () => ({}),
    getElementById: () => ({ remove() {} }),
    get cookie() { return '_ga=abc; _ga_BVG3YZR5C5=def; unrelated=keep'; },
    set cookie(value) { cookies.push(value); },
  };
  class Element {
    constructor(href, service) { this.href = href; this.dataset = { analyticsService: service }; }
    closest(selector) { return selector === 'a' ? this : null; }
    getAttribute() { return this.href; }
  }
  const context = { exports: {}, Date: Clock, URL, Element, Event, document,
    setTimeout: (fn, delay) => { timers.set(++timerId, {fn, delay}); return timerId; },
    clearTimeout: id => timers.delete(id),
    location: { hostname, pathname: '/photography/degree' },
    localStorage: { getItem: k => storage.get(k) ?? null, setItem: (k,v) => storage.set(k,v), removeItem: k => storage.delete(k) },
    window: { location: { reload: () => reloads++ }, dispatchEvent() {} },
  };
  vm.runInNewContext(code, context);
  return { api: context.exports, context, scripts, storage, cookies, timers,
    setNow: value => { now = value; }, reloads: () => reloads,
    commands: () => (context.window.dataLayer || []).map(x => Array.from(x)) };
}

function accept(s) { assert.equal(s.api.saveConsent(true), true); s.api.startAnalytics(); }

test('no consent or explicit refusal means no Google script or events', () => {
  const s = setup();
  s.api.startAnalytics(); s.api.trackPage('/development');
  s.api.saveConsent(false); s.api.startAnalytics(); s.api.stopAnalytics();
  assert.equal(s.scripts.length, 0);
  assert.equal(s.context.window.gtag, undefined);
  assert.equal(s.reloads(), 0);
});

test('six calendar months are honoured, including month ends and leap years', () => {
  const s = setup();
  for (const [start, end] of [
    ['2026-03-16T12:00:00Z', '2026-09-16T12:00:00Z'],
    ['2026-08-31T12:00:00Z', '2027-02-28T12:00:00Z'],
    ['2027-08-31T12:00:00Z', '2028-02-29T12:00:00Z'],
  ]) assert.equal(s.api.consentExpiry(Date.parse(start)), Date.parse(end));
  s.setNow(Date.parse('2026-03-16T12:00:00Z')); s.api.saveConsent(false);
  s.setNow(Date.parse('2026-09-15T12:00:00Z')); assert.equal(s.api.readConsent().accepted, false);
  s.setNow(Date.parse('2026-09-16T12:00:00Z')); assert.equal(s.api.readConsent(), null);
});

test('corrupt, future, old-policy and forged expiry records are not consent', () => {
  const s = setup(); s.api.saveConsent(true);
  const valid = s.api.readConsent();
  assert.equal(valid.policyVersion, s.api.POLICY_VERSION);
  for (const value of [null, {}, {...valid, timestamp: Date.UTC(2030,0,1)}, {...valid, version:1}, {...valid, policyVersion:'old'}, {...valid, expiresAt:valid.expiresAt+1}]) {
    s.storage.set(s.api.CONSENT_KEY, JSON.stringify(value)); assert.equal(s.api.readConsent(), null);
  }
  s.storage.set(s.api.CONSENT_KEY, '{'); assert.equal(s.api.readConsent(), null);
});

test('acceptance loads once, with all Ads consents denied before config', () => {
  const s = setup(); accept(s); s.api.startAnalytics();
  assert.equal(s.scripts.length, 1);
  assert.equal(s.scripts[0].referrerPolicy, 'origin');
  const commands = s.commands();
  assert.equal(commands[0][0], 'consent'); assert.equal(commands[1][0], 'consent');
  for (const c of commands.filter(x => x[0] === 'consent')) {
    for (const key of ['ad_storage', 'ad_user_data', 'ad_personalization']) assert.equal(c[2][key], 'denied');
  }
  const config = commands.find(x => x[0] === 'config')[2];
  assert.equal(config.send_page_view, false);
  assert.equal(config.page_referrer, 'https://example.org');
  assert.equal(config.allow_google_signals, false);
  assert.equal(config.cookie_update, false);
});

test('routes are deduplicated, query/hash removed and unknown paths redacted', () => {
  const s = setup(); accept(s);
  for (const path of ['/development?email=secret#private', '/development', '/photography', '/projects/public-project', '/projects/private@example.org', '/talks/public-talk']) s.api.trackPage(path);
  const events = s.commands().filter(x => x[0] === 'event');
  assert.equal(events.length, 5);
  assert.equal(events[0][2].area, 'dev'); assert.equal(events[1][2].area, 'photo');
  assert.equal(events[2][2].page_location, 'https://www.simonecolli.com/projects/public-project');
  assert.equal(events[3][2].page_location, 'https://www.simonecolli.com/404');
  assert.equal(JSON.stringify(events).includes('secret'), false);
  assert.equal(JSON.stringify(events).includes('private@'), false);
});

test('english routes keep their /en prefix and unknown ones are still redacted', () => {
  const s = setup(); accept(s);
  for (const path of ['/en/', '/en/photography/', '/en/projects/public-project/', '/en/projects/private@example.org', '/english']) s.api.trackPage(path);
  const events = s.commands().filter(x => x[0] === 'event');
  assert.deepEqual(Array.from(events, x => x[2].page_location), [
    'https://www.simonecolli.com/en',
    'https://www.simonecolli.com/en/photography',
    'https://www.simonecolli.com/en/projects/public-project',
    'https://www.simonecolli.com/404',
  ]);
  assert.equal(events[1][2].area, 'photo'); assert.equal(events[2][2].area, 'dev');
});

test('contact events exclude mail contents and only allow known service labels', () => {
  const s = setup(); accept(s);
  for (const [email, service] of [['photo', 'party'], ['dev', 'private@example.org']]) {
    s.api.trackContact({target: new s.context.Element(`mailto:info.${email}@simonecolli.com?body=private-message`, service)});
  }
  const events = s.commands().filter(x => x[1] === 'contact_click');
  assert.equal(events[0][2].service, 'party'); assert.equal(events[1][2].service, 'software');
  assert.equal(events[1][2].area, 'dev');
  assert.equal(JSON.stringify(events).includes('private'), false);
});

test('revocation clears cookies on root and nested paths and stops collection', () => {
  const s = setup(); accept(s); s.api.saveConsent(false); s.api.stopAnalytics(); s.api.trackPage('/development');
  assert.equal(s.commands().length, 0);
  assert.equal(s.context.window['ga-disable-G-BVG3YZR5C5'], true);
  assert.equal(s.reloads(), 1);
  assert.ok(s.cookies.some(x => x.includes('path=/photography/degree;')));
  assert.ok(s.cookies.every(x => !x.startsWith('unrelated=')));
});

test('storage failure blocks acceptance and does not revive a stale grant on revocation', () => {
  const s = setup(); accept(s);
  s.context.localStorage.setItem = () => { throw new Error('unavailable'); };
  assert.equal(s.api.saveConsent(false), false);
  assert.equal(s.api.readConsent(), null);
  s.api.stopAnalytics(false); s.api.stopAnalytics(); s.api.startAnalytics();
  assert.equal(s.reloads(), 0); assert.equal(s.scripts.length, 1); assert.equal(s.commands().length, 0);
  assert.equal(s.api.saveConsent(true), false); s.api.startAnalytics(); assert.equal(s.scripts.length, 1);
});

test('expiry and cross-tab revocation are checked again before emitting', () => {
  for (const mode of ['expiry', 'revoked']) {
    const s = setup(); accept(s);
    if (mode === 'expiry') s.setNow(s.api.readConsent().expiresAt);
    else s.storage.delete(s.api.CONSENT_KEY);
    s.api.trackPage('/development');
    assert.equal(s.commands().length, 0); assert.equal(s.reloads(), 1);
  }
});

test('a timer expires consent even without a route change', () => {
  const s = setup(); accept(s);
  assert.ok([...s.timers.values()].every(x => x.delay <= 2_147_000_000));
  const expiry = s.api.readConsent().expiresAt;
  const callback = [...s.timers.values()][0].fn;
  s.setNow(expiry); callback();
  assert.equal(s.reloads(), 1); assert.equal(s.context.window['ga-disable-G-BVG3YZR5C5'], true);
});

test('production gate and local/development builds block GA despite acceptance', () => {
  for (const options of [{activated:false}, {hostname:'localhost'}, {production:false}]) {
    const s = setup(options); accept(s); s.api.trackPage('/'); assert.equal(s.scripts.length, 0);
  }
});
