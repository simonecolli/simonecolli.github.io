import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync(new URL('../worker/contact.ts', import.meta.url), 'utf8');
const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const module = { exports: {} };
new Function('module', 'exports', code)(module, module.exports);
const { parseRequest, buildEmail } = module.exports;

const valid = {
  area: 'dev',
  source: 'Sviluppo',
  name: 'Mario Rossi',
  email: 'mario@example.com',
  phone: '',
  website: '',
  answers: [
    { label: 'Cosa vorresti migliorare?', value: 'Le commesse\nsu Excel' },
    { label: 'Entro quando?', value: '' },
  ],
};
const parse = (changes) => parseRequest(JSON.stringify({ ...valid, ...changes }));

test('a valid request becomes an email to the inbox of its area', () => {
  const email = buildEmail(parse({}), 'dev-inbox@example.org');
  assert.equal(email.to, 'dev-inbox@example.org');
  assert.equal(email.from, 'modulo.dev@simonecolli.com');
  assert.equal(email.replyTo, 'mario@example.com');
  assert.equal(email.subject, '[Sviluppo] Sviluppo - Mario Rossi');
  // Empty answers and an empty phone leave no line behind.
  assert.equal(email.text, 'Nome: Mario Rossi\nEmail: mario@example.com\nPagina: Sviluppo\n\nCosa vorresti migliorare?\nLe commesse\nsu Excel');
});

test('photography requests use the photography sender and label', () => {
  const email = buildEmail(parse({ area: 'photo', source: 'Fotografia', phone: '333 123' }), 'photo-inbox@example.org');
  assert.equal(email.from, 'modulo.photo@simonecolli.com');
  assert.match(email.subject, /^\[Fotografia\] /);
  assert.match(email.text, /Telefono: 333 123/);
});

test('line breaks cannot reach the subject', () => {
  const request = parse({ name: 'Mario\r\nBcc: someone@example.org' });
  assert.equal(request.name, 'Mario Bcc: someone@example.org');
  assert.doesNotMatch(buildEmail(request, 'x@example.org').subject, /[\r\n]/);
});

test('the hidden field marks a bot without rejecting the request', () => {
  assert.equal(parse({}).trap, false);
  assert.equal(parse({ website: 'http://spam.example' }).trap, true);
});

test('malformed or oversized requests are rejected', () => {
  assert.equal(parseRequest('not json'), null);
  assert.equal(parseRequest('null'), null);
  assert.equal(parse({ area: 'other' }), null);
  assert.equal(parse({ name: '' }), null);
  assert.equal(parse({ email: 'not-an-email' }), null);
  assert.equal(parse({ email: 'a@b.it, c@d.it' }), null);
  assert.equal(parse({ name: 'x'.repeat(101) }), null);
  assert.equal(parse({ answers: [] }), null);
  assert.equal(parse({ answers: [{ label: 'Q', value: '' }] }), null);
  assert.equal(parse({ answers: Array.from({ length: 13 }, () => ({ label: 'Q', value: 'A' })) }), null);
  assert.equal(parse({ answers: [{ label: 'Q', value: 'x'.repeat(4001) }] }), null);
  assert.equal(parse({ answers: 'text' }), null);
});

// The Worker entry point, transpiled the same way, with ./contact wired in.
const workerCode = ts.transpileModule(readFileSync(new URL('../worker/index.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const workerModule = { exports: {} };
new Function('module', 'exports', 'require', workerCode)(workerModule, workerModule.exports, () => module.exports);
const worker = workerModule.exports.default;

const env = (changes = {}) => ({
  EMAIL: { send: async () => {} },
  DEV_TO: 'dev-inbox@example.org',
  PHOTO_TO: 'photo-inbox@example.org',
  RATE_LIMIT: { limit: async () => ({ success: true }) },
  ...changes,
});
const post = (headers = {}, body = JSON.stringify(valid)) =>
  new Request('https://www.simonecolli.com/api/contatto', { method: 'POST', headers: { Origin: 'https://www.simonecolli.com', ...headers }, body });

test('the site origin gets through and the email goes out', async () => {
  assert.equal((await worker.fetch(post(), env())).status, 204);
});

test('a localhost origin is refused unless .dev.vars allows it', async () => {
  const local = { Origin: 'http://localhost:5173' };
  assert.equal((await worker.fetch(post(local), env())).status, 403);
  assert.equal((await worker.fetch(post(local), env({ ALLOW_LOCALHOST: 'true' }))).status, 204);
});

test('an address over the rate limit gets 429 and sends nothing', async () => {
  let sent = false;
  const limited = env({ RATE_LIMIT: { limit: async () => ({ success: false }) }, EMAIL: { send: async () => { sent = true; } } });
  assert.equal((await worker.fetch(post(), limited)).status, 429);
  assert.equal(sent, false);
});

test('a declared oversized body is refused before it is read', async () => {
  assert.equal((await worker.fetch(post({ 'Content-Length': '20001' }), env())).status, 413);
});
