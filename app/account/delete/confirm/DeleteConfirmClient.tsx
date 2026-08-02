"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type Result = "idle" | "submitting" | "deactivated" | "error";

export default function DeleteConfirmClient({ csrfToken }: { csrfToken: string }) {
  const [accepted, setAccepted] = useState(false);
  const [result, setResult] = useState<Result>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function confirm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accepted || result === "submitting" || result === "deactivated") return;
    setResult("submitting");
    setMessage(null);
    try {
      const response = await fetch("/api/account/delete/confirm", {
        method: "POST",
        headers: { "content-type": "application/json", "x-csrf-token": csrfToken },
        body: JSON.stringify({ confirm: true }),
        cache: "no-store",
      });
      const payload = await response.json().catch(() => ({}));
      if (response.ok && payload.status === "deactivated") {
        setResult("deactivated");
        setMessage(
          payload.alreadyRequested
            ? "Your account was already deactivated and remains in its recovery window."
            : "Your account is deactivated. Check your email for the restoration link and recovery deadline.",
        );
        window.history.replaceState(null, "", "/account/delete/confirm");
        return;
      }
      setResult("error");
      setMessage(
        response.status === 401
          ? "Your secure session expired. Request a new link and try again."
          : "We could not complete the request. Your account has not been reported as deleted; try again safely.",
      );
    } catch {
      setResult("error");
      setMessage("The network request failed. It is safe to retry; duplicate requests are handled idempotently.");
    }
  }

  return (
    <div>
      <div className="mb-8 space-y-4 text-sm leading-6 text-slate-300">
        <p>Confirmation immediately deactivates the account, revokes active sessions, and starts a 30-day recovery window.</p>
        <p>During that window you can restore the account using the emailed single-use restoration link. After the window, eligible account data is permanently purged subject to documented legal and security holds.</p>
      </div>
      {result !== "deactivated" && (
        <form onSubmit={confirm} className="space-y-5">
          <label className="flex items-start gap-3 rounded-md border border-white/15 bg-white/[0.03] p-4 text-sm leading-6 text-slate-200">
            <input className="mt-1" type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} />
            <span>I understand that my account will be deactivated now and permanently purged after the 30-day recovery window unless I restore it.</span>
          </label>
          <button type="submit" disabled={!accepted || result === "submitting"} className="rounded-md bg-rose-400 px-5 py-3 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-50">
            {result === "submitting" ? "Deactivating account…" : "Deactivate my account"}
          </button>
        </form>
      )}
      {message && <p role="status" className="mt-7 rounded-md border border-white/15 p-4 text-sm leading-6 text-slate-100">{message}</p>}
      {result === "deactivated" && <Link className="mt-5 inline-flex text-sm font-semibold text-cyan-200 underline" href="/support">Contact support</Link>}
    </div>
  );
}

