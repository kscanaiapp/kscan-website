"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";

type Status = "idle" | "restoring" | "restored" | "restored_pending_unban" | "failed" | "resending";

export default function AccountRestoreClient() {
  const searchParams = useSearchParams();
  const token = useMemo(() => (searchParams.get("token") || "").trim(), [searchParams]);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    let cancelled = false;
    async function run() {
      if (!token || token.length < 32) {
        setStatus("failed");
        setMessage("This restoration link is missing or invalid.");
        return;
      }

      // P2-8: strip the token from the visible URL and browser history now
      // that it's been captured, so it does not linger in the address bar,
      // history, or any subsequently-sent Referer header. Deliberately runs
      // AFTER `token` is confirmed valid (not in an independent mount-time
      // effect): this page is statically prerendered, so useSearchParams()
      // resolves the real URL asynchronously on the client. An unconditional
      // history.replaceState() on mount can race ahead of that resolution
      // and overwrite window.location before Next's router has captured the
      // original token-bearing URL, permanently losing the token. Scrubbing
      // here, after `token` is already captured in component state, cannot
      // race the value we still need.
      if (typeof window !== "undefined" && window.location.search.includes("token=")) {
        const clean = `${window.location.pathname}${window.location.hash}`;
        window.history.replaceState(null, "", clean);
      }

      setStatus("restoring");
      try {
        const response = await fetch("/api/account/restore", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const payload = await response.json().catch(() => ({}));
        if (cancelled) return;
        if (response.ok && payload.status === "restored") {
          setStatus("restored");
          setMessage(
            payload.message ||
              "Your account has been restored. Sign in again in the K Scan AI app.",
          );
          return;
        }
        if (response.status === 202 && payload.status === "restored_pending_unban") {
          setStatus("restored_pending_unban");
          setMessage(
            payload.message ||
              "Your account data has been restored, but re-enabling sign-in is taking longer than expected. Please try again shortly.",
          );
          return;
        }
        setStatus("failed");
        setMessage("This restoration link is invalid, expired, or already used.");
      } catch {
        if (cancelled) return;
        setStatus("failed");
        setMessage("Unable to restore right now. Try again later.");
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [token]);

  async function onResend(event: FormEvent) {
    event.preventDefault();
    const normalized = email.trim().toLowerCase();
    if (!normalized || !normalized.includes("@")) {
      setMessage("Enter the email on your account to request a new restoration link.");
      return;
    }
    setStatus("resending");
    try {
      const response = await fetch("/api/account/restore", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: normalized }),
      });
      const payload = await response.json().catch(() => ({}));
      setMessage(
        payload.message ||
          "If an eligible deletion request exists for that email, a restoration message has been sent.",
      );
      setStatus("failed");
    } catch {
      setMessage("Unable to resend right now. Try again later.");
      setStatus("failed");
    }
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#0B0B0F] text-[#F8FAFC]">
      <SiteNav />
      <section className="mx-auto max-w-xl px-6 py-16 md:px-10 md:py-24">
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-cyan-300/80">Account</p>
        <h1 className="mb-4 text-3xl font-medium tracking-tight">Restore your K Scan AI account</h1>
        <p className="mb-8 text-base leading-7 text-slate-300">
          Deletion requests keep your cloud data for 30 days. Use the emailed link once before that
          deadline. After restore, sign in again — previous sessions stay signed out.
        </p>

        {(status === "restoring" || status === "resending") && (
          <p className="mb-6 text-sm text-cyan-200">Working…</p>
        )}
        {status === "restored_pending_unban" && (
          <p className="mb-6 text-sm text-cyan-200">
            This can take a few minutes. No need to request a new link.
          </p>
        )}
        {message && <p className="mb-6 text-sm leading-6 text-slate-100">{message}</p>}

        {status === "restored" && (
          <Link
            href="https://kscan.app"
            className="inline-flex rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-black"
          >
            Open K Scan AI
          </Link>
        )}

        {status === "failed" && (
          <form onSubmit={onResend} className="mt-8 space-y-3">
            <label className="block text-sm text-slate-200" htmlFor="restore-email">
              Need a new link?
            </label>
            <input
              id="restore-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@email.com"
              className="w-full rounded-md border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none ring-cyan-300/40 focus:ring"
            />
            <button
              type="submit"
              className="rounded-md border border-cyan-300 px-5 py-3 text-sm font-semibold text-cyan-200"
            >
              Resend restoration email
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
