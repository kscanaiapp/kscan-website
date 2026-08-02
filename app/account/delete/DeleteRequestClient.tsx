"use client";

import { FormEvent, useState } from "react";
import { SiteNav } from "@/components/ui/SiteNav";

const GENERIC_MESSAGE =
  "If that email belongs to a K Scan account, a secure confirmation link will arrive shortly.";

export default function DeleteRequestClient() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setMessage(null);
    try {
      await fetch("/api/account/delete/start", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
        cache: "no-store",
      });
    } catch {
      // Preserve the anti-enumeration contract. A retry remains safe and cannot
      // deactivate an account; this endpoint only requests authentication.
    } finally {
      setMessage(GENERIC_MESSAGE);
      setSubmitting(false);
    }
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#08090D] text-[#F8FAFC]">
      <SiteNav />
      <section className="mx-auto max-w-xl px-6 py-16 md:px-10 md:py-24">
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-cyan-300/80">Account security</p>
        <h1 className="mb-4 text-3xl font-medium tracking-tight">Request account deletion</h1>
        <p className="mb-8 text-base leading-7 text-slate-300">
          Enter the email used for K Scan. We will send a single-use authentication link. Entering
          an email here does not deactivate or delete any account.
        </p>

        <form onSubmit={submit} className="space-y-4" aria-describedby="delete-request-help">
          <label className="block text-sm text-slate-200" htmlFor="delete-email">
            Account email
          </label>
          <input
            id="delete-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={320}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-md border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none ring-cyan-300/40 focus:ring"
          />
          <p id="delete-request-help" className="text-xs leading-5 text-slate-400">
            For privacy, the response is the same whether or not an account exists.
          </p>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Sending secure link…" : "Send secure link"}
          </button>
        </form>

        {message && (
          <p role="status" className="mt-7 rounded-md border border-cyan-300/20 bg-cyan-300/5 p-4 text-sm leading-6 text-cyan-100">
            {message}
          </p>
        )}
      </section>
    </main>
  );
}
