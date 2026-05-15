"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// ─── Constants ─────────────────────────────────────────────────────────────

const PREFERENCE_ID_COOKIE = "kscan_privacy_preference_id";
const GPC_COOKIE = "kscan_gpc_opt_out";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 395; // ~13 months

// ─── Types ─────────────────────────────────────────────────────────────────

type LoadStatus = "loading" | "loaded" | "error";
type SaveStatus = "idle" | "saving" | "saved" | "error";
type GpcSaveStatus = "idle" | "saving" | "saved" | "error";

// ─── Cookie helpers ────────────────────────────────────────────────────────

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${name}=([^;]*)`),
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, maxAge: number): void {
  const secure =
    typeof location !== "undefined" && location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; SameSite=Lax; Max-Age=${maxAge}${secure}`;
}

// ─── Accessible Toggle Switch ──────────────────────────────────────────────

function Toggle({
  id,
  checked,
  onChange,
  disabled = false,
  label,
}: {
  id: string;
  checked: boolean;
  onChange: (val: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      id={id}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={[
        "relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent",
        "transition-colors duration-200 ease-in-out",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF8]",
        checked ? "bg-indigo-600" : "bg-stone-200",
        disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
      ].join(" ")}
    >
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0",
          "transition-transform duration-200 ease-in-out",
          checked ? "translate-x-5" : "translate-x-0",
        ].join(" ")}
      />
    </button>
  );
}

// ─── Main Client Component ─────────────────────────────────────────────────

export function PrivacyControlsClient() {
  const [mounted, setMounted] = useState(false);
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [loadStatus, setLoadStatus] = useState<LoadStatus>("loading");
  const [gpcDetected, setGpcDetected] = useState(false);
  const [optOut, setOptOut] = useState(false);
  // True once a server-side opt-out record exists (from GET or after successful POST).
  const [savedServerSide, setSavedServerSide] = useState(false);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [gpcSaveStatus, setGpcSaveStatus] = useState<GpcSaveStatus>("idle");

  const supabaseUrl = process.env.NEXT_PUBLIC_PRIVACY_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_PRIVACY_SUPABASE_ANON_KEY;
  const edgeFnUrl = `${supabaseUrl}/functions/v1/public-sale-share-opt-out`;

  // ─── Mount: detect GPC, resolve preference_id, load server state ─────────
  useEffect(() => {
    setMounted(true);

    // GPC detection: check proxy-set cookie first, fall back to navigator API.
    const gpcCookie = getCookie(GPC_COOKIE);
    const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
    const isGpc = gpcCookie === "1" || nav.globalPrivacyControl === true;
    setGpcDetected(isGpc);
    if (isGpc) setOptOut(true);

    // Resolve or generate the anonymous preference identifier.
    let pid = getCookie(PREFERENCE_ID_COOKIE);
    if (!pid) {
      pid = crypto.randomUUID();
      setCookie(PREFERENCE_ID_COOKIE, pid, COOKIE_MAX_AGE);
    }
    setPreferenceId(pid);

    // Fetch current server-side state for this browser.
    fetch(
      `${edgeFnUrl}?preference_id=${encodeURIComponent(pid)}`,
      {
        headers: {
          apikey: anonKey ?? "",
        },
      },
    )
      .then(async (res) => {
        if (!res.ok) {
          setLoadStatus("error");
          return;
        }
        const data = (await res.json()) as {
          found: boolean;
          opt_out_of_sale?: boolean;
          gpc_signal?: boolean;
        };
        if (data.found && data.opt_out_of_sale === true) {
          setOptOut(true);
          setSavedServerSide(true);
        }
        setLoadStatus("loaded");
      })
      .catch(() => setLoadStatus("error"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── Auto-record GPC opt-out once server state is known ──────────────────
  // Fires when: mounted + GPC detected + preference_id ready + GET completed
  // with no existing opt-out record. Uses "gpc_client" as the request_source.
  useEffect(() => {
    if (
      !mounted ||
      !gpcDetected ||
      !preferenceId ||
      loadStatus !== "loaded" ||
      savedServerSide ||
      gpcSaveStatus !== "idle"
    )
      return;

    setGpcSaveStatus("saving");
    fetch(edgeFnUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: anonKey ?? "",
      },
      body: JSON.stringify({
        preference_id: preferenceId,
        opt_out_of_sale: true,
        gpc_signal: true,
        request_source: "gpc_client",
      }),
    })
      .then(async (res) => {
        if (!res.ok) {
          setGpcSaveStatus("error");
          return;
        }
        setSavedServerSide(true);
        setGpcSaveStatus("saved");
      })
      .catch(() => setGpcSaveStatus("error"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, gpcDetected, preferenceId, loadStatus, savedServerSide]);

  // ─── Manual save ─────────────────────────────────────────────────────────
  async function handleSave() {
    if (!preferenceId || saveStatus === "saving") return;
    setSaveStatus("saving");
    try {
      const res = await fetch(edgeFnUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: anonKey ?? "",
        },
        body: JSON.stringify({
          preference_id: preferenceId,
          opt_out_of_sale: true,
          gpc_signal: false,
          request_source: "website_toggle",
        }),
      });
      if (!res.ok) {
        setSaveStatus("error");
        return;
      }
      setSavedServerSide(true);
      setSaveStatus("saved");
    } catch {
      setSaveStatus("error");
    }
  }

  // ─── Shared link class ────────────────────────────────────────────────────
  const linkCls =
    "text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500";

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <>
      <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
        Do Not Sell or Share My Personal Information
      </h1>

      <div className="mt-8 space-y-12 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">

        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <div className="space-y-4">
          <p>
            K Scan AI may use, sell, share, license, or disclose certain non-sensitive commercial, analytics,
            preference, marketing, and inference data where permitted by law and subject to applicable privacy
            rights, consent requirements, and opt-out controls.
          </p>
          <p>
            Raw uploaded scans and images are not sold. K Scan does not use uploaded scan content for facial
            recognition or biometric surveillance.
          </p>
        </div>

        {/* ── GPC Banner ────────────────────────────────────────────────── */}
        {mounted && gpcDetected && (
          <div
            role="status"
            aria-live="polite"
            className="space-y-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-5 py-4"
          >
            <p className="text-[13px] font-medium text-indigo-800">
              Your browser is sending a Global Privacy Control signal. Where required by law, K Scan treats
              this as an opt-out request.
            </p>
            {gpcSaveStatus === "saved" && (
              <p className="text-[12px] text-indigo-700">
                Your Global Privacy Control opt-out has been recorded for this browser.
              </p>
            )}
            {gpcSaveStatus === "error" && (
              <p className="text-[12px] text-red-600">
                Your browser is sending a Global Privacy Control signal. We detected the signal, but could not
                record the browser preference at this time.
              </p>
            )}
          </div>
        )}

        {/* ── Privacy Choices ───────────────────────────────────────────── */}
        <section aria-labelledby="privacy-choices-heading">
          <h2
            id="privacy-choices-heading"
            className="text-[11px] font-semibold uppercase tracking-widest text-stone-400"
          >
            Privacy Choices
          </h2>

          <div className="mt-5 overflow-hidden rounded-xl border border-stone-200/80 bg-white shadow-sm">

            {/* Sale/share opt-out row */}
            <div className="flex items-start gap-4 px-6 py-5">
              <div className="min-w-0 flex-1">
                <label
                  htmlFor="toggle-opt-out"
                  className="block cursor-pointer text-[14px] font-medium leading-snug text-stone-800"
                >
                  Opt out of sale or sharing of my personal information
                </label>

                {/* Sub-label changes based on state */}
                {mounted && gpcDetected ? (
                  <p className="mt-1 text-[12px] text-stone-400">
                    This preference is controlled by your browser&apos;s Global Privacy Control signal.
                  </p>
                ) : mounted && savedServerSide ? (
                  <p className="mt-1 text-[12px] text-stone-400">
                    Your sale/share opt-out is currently active for this browser. To change this preference,{" "}
                    <a
                      href="mailto:kscanai.app@gmail.com?subject=Do%20Not%20Sell%20or%20Share%20Request"
                      className={linkCls}
                    >
                      contact us
                    </a>
                    .
                  </p>
                ) : (
                  <p className="mt-1 text-[12px] text-stone-400">
                    Applies to non-sensitive commercial, analytics, preference, and inference data where
                    permitted by applicable law.
                  </p>
                )}
              </div>

              <div className="shrink-0 pt-0.5">
                {/* Pulse placeholder while server state is loading */}
                {!mounted || loadStatus === "loading" ? (
                  <div
                    aria-hidden="true"
                    className="h-6 w-11 animate-pulse rounded-full bg-stone-100"
                  />
                ) : (
                  <Toggle
                    id="toggle-opt-out"
                    checked={optOut}
                    onChange={setOptOut}
                    disabled={savedServerSide || gpcDetected || loadStatus !== "loaded"}
                    label="Opt out of sale or sharing of my personal information"
                  />
                )}
              </div>
            </div>

            <div className="border-t border-stone-100" />

            {/* Sensitive processing — manual contact only */}
            <div className="px-6 py-5">
              <p className="text-[14px] font-medium leading-snug text-stone-800">
                Limit sensitive personal information processing where applicable
              </p>
              <p className="mt-1 text-[12px] text-stone-400">
                This request is handled manually. Email{" "}
                <a
                  href="mailto:kscanai.app@gmail.com?subject=Limit%20Sensitive%20Processing%20Request"
                  className={linkCls}
                >
                  kscanai.app@gmail.com
                </a>{" "}
                to submit.
              </p>
            </div>
          </div>

          {/* GET error */}
          {mounted && loadStatus === "error" && (
            <p role="alert" className="mt-4 text-[13px] text-amber-700">
              Unable to load saved browser privacy choices right now.
            </p>
          )}

          {/* Save button — only shown when not yet saved and no GPC lock */}
          {mounted && loadStatus === "loaded" && !savedServerSide && !gpcDetected && (
            <div className="mt-5 space-y-3">
              <button
                type="button"
                onClick={handleSave}
                disabled={!optOut || saveStatus === "saving"}
                className={[
                  "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-[13px] font-medium",
                  "transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
                  optOut && saveStatus !== "saving"
                    ? "cursor-pointer bg-indigo-600 text-white hover:bg-indigo-700"
                    : "cursor-not-allowed bg-stone-100 text-stone-400",
                ].join(" ")}
              >
                {saveStatus === "saving" ? "Saving…" : "Save Privacy Choices"}
              </button>

              {!optOut && saveStatus === "idle" && (
                <p className="text-[12px] text-stone-400">
                  Enable the toggle above to record your opt-out for this browser.
                </p>
              )}

              {saveStatus === "error" && (
                <p role="alert" className="text-[13px] text-red-600">
                  We could not save your browser privacy choice. Please try again or{" "}
                  <a
                    href="mailto:kscanai.app@gmail.com?subject=Do%20Not%20Sell%20or%20Share%20Request"
                    className="underline hover:text-red-800"
                  >
                    contact us
                  </a>
                  .
                </p>
              )}
            </div>
          )}

          {/* Success notice after manual save */}
          {saveStatus === "saved" && (
            <p role="status" aria-live="polite" className="mt-4 text-[13px] text-emerald-700">
              Your opt-out choice has been saved for this browser. Where applicable, your information will be
              excluded from sale/share-based partner reporting and commercial trend analysis.
            </p>
          )}

          {/* Already-active notice on page load (not after a just-completed save) */}
          {mounted &&
            loadStatus === "loaded" &&
            savedServerSide &&
            saveStatus !== "saved" &&
            !gpcDetected && (
              <p className="mt-4 text-[13px] text-stone-500">
                Your sale/share opt-out is currently active for this browser.
              </p>
            )}
        </section>

        {/* ── Request Data Deletion ──────────────────────────────────────── */}
        <section aria-labelledby="deletion-heading">
          <h2
            id="deletion-heading"
            className="text-[11px] font-semibold uppercase tracking-widest text-stone-400"
          >
            Request Data Deletion
          </h2>

          <div className="mt-5 overflow-hidden rounded-xl border border-stone-200/80 bg-white px-6 py-5 shadow-sm space-y-4">
            <p>
              You may request deletion of your account or personal information, subject to legal, security,
              fraud-prevention, backup, and operational retention requirements.
            </p>
            <p className="text-[14px]">
              To submit a deletion request, email{" "}
              <a
                href="mailto:kscanai.app@gmail.com?subject=Data%20Deletion%20Request"
                className={linkCls}
              >
                kscanai.app@gmail.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* ── Related Legal Documents ────────────────────────────────────── */}
        <section aria-labelledby="legal-links-heading">
          <h2
            id="legal-links-heading"
            className="text-[11px] font-semibold uppercase tracking-widest text-stone-400"
          >
            Related Legal Documents
          </h2>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            <Link href="/privacy" className={linkCls}>
              Privacy Summary
            </Link>
            <a
              href="/docs/kscan-privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Full Privacy Policy
            </a>
            <Link href="/legal/terms-summary" className={linkCls}>
              Terms Summary
            </Link>
          </div>
          <p className="mt-4 text-[14px] text-stone-500">
            For any privacy-related requests, contact us at{" "}
            <a
              href="mailto:kscanai.app@gmail.com?subject=Privacy%20Request"
              className={linkCls}
            >
              kscanai.app@gmail.com
            </a>
            .
          </p>
        </section>

        {/* ── Page footer ────────────────────────────────────────────────── */}
        <div className="border-t border-stone-100 pt-8 text-[13px] text-stone-400">
          <p>&copy; 2026 K SCAN AI. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
