-- ============================================================
-- Migration: Enable RLS on waitlist_signups
-- Date:      2026-04-18
-- Purpose:   Lock the waitlist table so only the server-side
--            service_role (used in /api/waitlist) can write to
--            it.  The anon and authenticated roles are blocked
--            entirely, preventing any direct client-side access.
-- ============================================================

-- 1. Enable Row-Level Security.
--    Once enabled, every role that does NOT have the BYPASSRLS
--    attribute is denied unless a policy explicitly permits it.
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- 2. Drop any pre-existing catch-all policies to avoid conflicts
--    (safe to run even if they don't exist).
DROP POLICY IF EXISTS "allow_service_role_all" ON public.waitlist_signups;
DROP POLICY IF EXISTS "anon_insert"             ON public.waitlist_signups;
DROP POLICY IF EXISTS "public_insert"           ON public.waitlist_signups;

-- 3. Create an explicit service_role policy.
--    In Supabase, the service_role JWT carries BYPASSRLS, so it
--    would already skip RLS — but being explicit here makes the
--    intent clear in the Supabase dashboard and prevents future
--    confusion when the policy list is audited.
CREATE POLICY "allow_service_role_all"
  ON public.waitlist_signups
  AS PERMISSIVE
  FOR ALL                  -- SELECT, INSERT, UPDATE, DELETE
  TO service_role
  USING (true)
  WITH CHECK (true);

-- 4. Verify: anon and authenticated have NO permissive policy,
--    so they are implicitly denied all operations.
--    To confirm, you can run in the Supabase SQL editor:
--
--    SELECT schemaname, tablename, policyname, roles, cmd
--    FROM   pg_policies
--    WHERE  tablename = 'waitlist_signups';
--
--    You should see exactly one row: allow_service_role_all / {service_role}.
