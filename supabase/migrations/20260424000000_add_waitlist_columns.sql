-- Migration: Add missing columns to waitlist_signups
-- Date:      2026-04-24
-- Reason:    Initial table only had id, email, created_at.
--            The /api/waitlist route inserts source, page, name, referrer.
--            Without these columns Postgres returns 42703 and the API 500s.

ALTER TABLE public.waitlist_signups
  ADD COLUMN IF NOT EXISTS source     text NOT NULL DEFAULT 'homepage',
  ADD COLUMN IF NOT EXISTS page       text,
  ADD COLUMN IF NOT EXISTS name       text,
  ADD COLUMN IF NOT EXISTS referrer   text;

-- Ensure default is set even if column pre-existed without one
ALTER TABLE public.waitlist_signups
  ALTER COLUMN source SET DEFAULT 'homepage';
