# Account-delete website dependency advisory triage

Date: 2026-08-02  
Scope: `codex/account-delete-intake-v1` website worktree  
Method: `npm audit --json`, dependency-tree review, targeted version changes, no `npm audit fix`

## Result

The original lockfile reported 11 vulnerable packages: 1 low, 4 moderate, 5 high, and 1 critical. The controlled update now reports 0 vulnerabilities. Account-delete contract tests, ESLint, TypeScript through the Next build, and the Next 16.2.12 production build pass.

| Package | Relationship | Install scope | Reachability and affected component | Severity | Fixed version used / available | Compatibility risk | Action |
|---|---|---|---|---|---|---|---|
| `@babel/core` | Transitive through ESLint React hooks | Development | Lint-time source-map parsing only; not in deployed intake runtime | Low | 7.29.7 (>7.29.0) | Low, patch | Pinned with an override and re-ran lint |
| `brace-expansion` | Transitive through minimatch | Development | Glob expansion in lint/type tooling; no account-delete request input reaches it | High | 1.1.18 and 5.0.9 | Low with line-specific overrides | Overrode each affected major line; lint/build pass |
| `js-yaml` | Transitive through ESLint config | Development | ESLint configuration parsing only; no deployed YAML parser | High | 4.3.1 (>=4.3.0) | Low, compatible minor | Updated ESLint 9.39.5 / eslintrc dependency |
| `next` | Direct | Production | Reachable request/runtime framework for authenticated deletion routes | High | 16.2.12 plus safe transitive overrides | Medium; framework patch with runtime surface | Updated 16.2.2 -> 16.2.12; full build and route inventory pass |
| `postcss` | Transitive through Next and Tailwind | Production/build | CSS build pipeline; Next carried an affected nested version | High | 8.5.25 (>=8.5.18) | Low-to-medium; cross-tool override | Updated Tailwind PostCSS and pinned safe PostCSS; lint/build pass |
| `resend` | Direct | Production | Reachable by waitlist/investor email routes, not the account-delete PKCE routes | Moderate | 6.18.1 (>6.12.2) | Low, same major | Updated; build/type checks pass |
| `sharp` | Transitive/optional through Next | Production | Reachable by Next image optimization and the icon-generation script | High | 0.35.3 (>=0.35.0) | Medium; newer optional native package | Pinned safe release; Next image/icon routes compile in production build |
| `supabase` CLI | Direct dev dependency | Development | CLI only; not bundled into the deployed website | Moderate aggregate | 2.111.0 (>2.98.2) | Low-to-medium; CLI update | Updated; removed vulnerable tar-based packaging chain |
| `svix` | Transitive through Resend | Production dependency tree | Current code sends email and does not execute Svix webhook verification | Moderate | Removed by Resend 6.18.1 | Low | Updated Resend; package no longer present |
| `tar` | Transitive through old Supabase CLI | Development | Archive handling by CLI only; not deployed, but critical if fed a crafted archive | Critical | Removed by Supabase CLI 2.111.0 (otherwise >=7.5.20) | Low | Updated CLI; package no longer present |
| `uuid` | Transitive through Svix | Production dependency tree | Vulnerable buffer API is not called by current routes | Moderate | Removed by Resend 6.18.1 (otherwise >=11.1.1) | Low | Updated Resend; package no longer present |

## Exact validation

```text
npm audit --json
0 total vulnerabilities

npm run test:account-delete
4 passed, 0 failed

npm run lint
passed

npm run build
Next.js 16.2.12 production build passed
/account/delete, /account/delete/auth/callback, /account/delete/confirm,
and both account-delete API routes remained dynamic
```

The lockfile changed only through the explicit package and override decisions recorded above.

