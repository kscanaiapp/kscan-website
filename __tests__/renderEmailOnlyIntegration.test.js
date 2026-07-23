/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const ROOT = path.resolve(__dirname, '..');
const route = fs.readFileSync(path.join(ROOT, 'app/api/waitlist/route.ts'), 'utf8');
const caller = fs.readFileSync(path.join(ROOT, 'lib/renderTransactionalEmail.ts'), 'utf8');
const migration = fs.readFileSync(path.join(ROOT, 'supabase/migrations/20260722000000_waitlist_email_delivery_state.sql'), 'utf8');

test('waitlist row is persisted before the welcome email is dispatched', () => {
  assert.ok(route.indexOf('.insert({') < route.indexOf('dispatchWaitlistWelcome({'));
  assert.match(route, /\.select\("id,email_delivery_status,email_delivery_attempts"\)/);
});

test('duplicate/retry uses the stable row UUID and does not resend a sent email', () => {
  assert.match(route, /email_delivery_status === "pending"/);
  assert.match(route, /email_delivery_status === "failed_retryable"/);
  assert.doesNotMatch(route, /email_delivery_status === "sent"/);
  assert.match(caller, /idempotencyKey: `waitlist:\$\{waitlistId\}`/);
  assert.match(migration, /email_delivery_status in \('pending', 'sent', 'failed_retryable', 'failed_permanent'\)/);
});

test('only the waitlist welcome flow calls Render', () => {
  assert.match(caller, /\/internal\/email\/waitlist-welcome/);
  assert.match(caller, /x-kscan-email-secret/);
  assert.doesNotMatch(caller, /\/api\/(?:analyze|search|scanner|elise|stylechat)/i);
  assert.equal((route.match(/dispatchWaitlistWelcome/g) || []).length, 2);
});

test('temporary email failure cannot roll back a stored signup', () => {
  assert.ok(route.indexOf('dispatchWaitlistWelcome({') < route.lastIndexOf('NextResponse.json('));
  assert.match(caller, /failed_retryable/);
});

test('Render URL handling normalizes whitespace and any trailing slashes', () => {
  assert.match(caller, /\.trim\(\)\.replace\(\/\\\/\+\$\/, ""\)/);
  assert.match(caller, /new URL\(WAITLIST_EMAIL_PATH, parsed\)/);
  assert.match(caller, /parsed\.protocol !== "https:"/);
});

test('Render failures retain sanitized diagnostics without logging credentials', () => {
  assert.match(caller, /RENDER_EMAIL_FETCH_FAILED/);
  assert.match(caller, /correlationId/);
  assert.match(caller, /causeCode/);
  assert.match(caller, /causeMessage/);
  assert.match(caller, /internalSecretConfigured/);
  assert.doesNotMatch(caller, /console\.(?:log|info|error)\([^\n]*internalSecret/);
});

test('the email request is bounded with an AbortController timeout', () => {
  assert.match(caller, /new AbortController\(\)/);
  assert.match(caller, /setTimeout\(\(\) => controller\.abort\(\), EMAIL_TIMEOUT_MS\)/);
  assert.match(caller, /clearTimeout\(timeout\)/);
});
