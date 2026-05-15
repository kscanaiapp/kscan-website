-- ============================================================
-- Migration: public.website_sale_share_opt_out_requests
-- Date:      2026-05-14
-- Purpose:   Browser-level anonymous sale/share opt-out records
--            for public website visitors. Writes occur only via
--            the public-sale-share-opt-out Edge Function using
--            the service-role key. No public SELECT or INSERT
--            policies are created — all access is service-role.
-- ============================================================

-- 1. Create the table
CREATE TABLE IF NOT EXISTS public.website_sale_share_opt_out_requests (
  id               uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  preference_id    uuid        NOT NULL,
  opt_out_of_sale  boolean     NOT NULL DEFAULT true,
  gpc_signal       boolean     NOT NULL DEFAULT false,
  request_source   text        NOT NULL DEFAULT 'website_toggle'
    CONSTRAINT website_opt_out_request_source_check
      CHECK (request_source IN ('website_toggle', 'gpc_client', 'gpc_header')),
  user_email       text        NULL,
  user_agent       text        NULL,
  created_at       timestamptz NOT NULL DEFAULT now(),
  updated_at       timestamptz NOT NULL DEFAULT now()
);

-- 2. Unique index on preference_id (one row per browser preference cookie)
CREATE UNIQUE INDEX IF NOT EXISTS website_opt_out_preference_id_idx
  ON public.website_sale_share_opt_out_requests (preference_id);

-- 3. Supporting indexes for reporting queries
CREATE INDEX IF NOT EXISTS website_opt_out_created_at_idx
  ON public.website_sale_share_opt_out_requests (created_at DESC);

CREATE INDEX IF NOT EXISTS website_opt_out_gpc_signal_idx
  ON public.website_sale_share_opt_out_requests (gpc_signal);

CREATE INDEX IF NOT EXISTS website_opt_out_opt_out_of_sale_idx
  ON public.website_sale_share_opt_out_requests (opt_out_of_sale);

-- 4. Enable Row-Level Security
ALTER TABLE public.website_sale_share_opt_out_requests
  ENABLE ROW LEVEL SECURITY;

-- 5. Service-role policy only — anon and authenticated are implicitly denied
DROP POLICY IF EXISTS "allow_service_role_all"
  ON public.website_sale_share_opt_out_requests;

CREATE POLICY "allow_service_role_all"
  ON public.website_sale_share_opt_out_requests
  AS PERMISSIVE
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- 6. updated_at trigger function (CREATE OR REPLACE is safe if it already
--    exists from the privacy_settings migration)
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 7. Attach the trigger
DROP TRIGGER IF EXISTS set_website_opt_out_updated_at
  ON public.website_sale_share_opt_out_requests;

CREATE TRIGGER set_website_opt_out_updated_at
  BEFORE UPDATE ON public.website_sale_share_opt_out_requests
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ============================================================
-- Verification query (run manually in Supabase SQL Editor):
--
--   SELECT schemaname, tablename, policyname, roles, cmd
--   FROM   pg_policies
--   WHERE  tablename = 'website_sale_share_opt_out_requests';
--
-- Expected: one row — allow_service_role_all / {service_role}
-- ============================================================
