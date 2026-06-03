# Backend Environment Variable Map

Maps each server-side feature to its Supabase project, required env vars, and key tables/RPCs.

---

## Shared Rooms / App Data

| Field         | Value |
|---------------|-------|
| Route         | `/api/rooms/[token]` |
| Env vars      | `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` |
| Project ref   | `yzqjvdfgefveprobvvyw` (app / shared-room project) |
| Config helper | `lib/serverSupabaseEnv.ts` → `getSupabaseServerConfig()` |
| Required tables / RPCs | dressing_rooms, room_shares, public preview RPC |

---

## Waitlist Signups

| Field         | Value |
|---------------|-------|
| Route         | `/api/waitlist` |
| Env vars      | `WAITLIST_SUPABASE_URL`, `WAITLIST_SUPABASE_SERVICE_ROLE_KEY` |
| Project ref   | `wyyuqfdxucjksghsmhry` (waitlist project) |
| Config helper | `lib/waitlistSupabaseEnv.ts` → `getWaitlistSupabaseConfig()` |
| Required table | `public.waitlist_signups` |

**Temporary legacy fallback:** `getWaitlistSupabaseConfig()` falls back to `SUPABASE_URL` /
`SUPABASE_SERVICE_ROLE_KEY` if the dedicated vars are absent. This fallback is intentional
during migration and must be removed once `WAITLIST_SUPABASE_*` is configured in Vercel
Production and Preview and verified for 48 hours.

See the TODO comment in `lib/waitlistSupabaseEnv.ts` for the removal cue.

---

## Investor Inquiry

| Field         | Value |
|---------------|-------|
| Route         | `/api/investor-inquiry` |
| Env vars      | `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (generic — **pending migration**) |
| Config helper | `lib/serverSupabaseEnv.ts` → `getSupabaseServerConfig()` |
| Required table | `public.investor_inquiries` |

**Note:** `investor-inquiry` currently uses the generic `SUPABASE_*` vars. Depending on which
Supabase project holds `investor_inquiries`, it may need to be migrated to `WAITLIST_SUPABASE_*`
(if `investor_inquiries` lives in the waitlist project) or left on `SUPABASE_*` (if it lives in
the app project). Confirm table ownership before migrating.

---

## Adding New Backends

Follow this pattern:
1. Add dedicated env vars: `<FEATURE>_SUPABASE_URL` and `<FEATURE>_SUPABASE_SERVICE_ROLE_KEY`.
2. Create a config helper in `lib/<feature>SupabaseEnv.ts` modelled on `waitlistSupabaseEnv.ts`.
3. Import `"server-only"` at the top.
4. Add a row to this file.
