import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

test("email intake authenticates only and preserves the anti-enumeration contract", () => {
  const route = read("app/api/account/delete/start/route.ts");
  assert.match(route, /signInWithOtp/);
  assert.match(route, /shouldCreateUser:\s*false/);
  assert.match(route, /status:\s*202/);
  assert.match(route, /If that email belongs/);
  assert.doesNotMatch(route, /handle-user-deletion/);
});

test("PKCE callback validates state, exchanges once, and redirects to a scrubbed URL", () => {
  const route = read("app/account/delete/auth/callback/route.ts");
  assert.match(route, /constantTimeTokenEqual/);
  assert.match(route, /exchangeCodeForSession/);
  assert.match(route, /\/account\/delete\/confirm/);
  assert.doesNotMatch(route, /successUrl\.searchParams/);
});

test("confirmation requires session, CSRF, and explicit consent before bearer invocation", () => {
  const route = read("app/api/account/delete/confirm/route.ts");
  assert.match(route, /isSameOriginMutation/);
  assert.match(route, /x-csrf-token/);
  assert.match(route, /z\.literal\(true\)/);
  assert.match(route, /auth\.getUser\(\)/);
  assert.match(route, /Authorization:\s*`Bearer \$\{accessToken\}`/);
  assert.match(route, /x-deletion-request-source.*external_web/s);
  assert.doesNotMatch(route, /SERVICE_ROLE/);
});

test("sensitive account routes are dynamically rendered and never cache or refer", () => {
  const config = read("next.config.ts");
  const start = read("app/api/account/delete/start/route.ts");
  const confirmPage = read("app/account/delete/confirm/page.tsx");
  assert.match(config, /\/account\/delete\/:path\*/);
  assert.match(config, /private, no-store/);
  assert.match(config, /no-referrer/);
  assert.match(start, /force-dynamic/);
  assert.match(confirmPage, /force-dynamic/);
});

