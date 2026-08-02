import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";
import { DELETE_CSRF_COOKIE } from "@/lib/accountDeleteSecurity";
import { createAccountDeletePageClient } from "@/lib/accountDeleteSupabase";
import DeleteConfirmClient from "./DeleteConfirmClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "Confirm K Scan Account Deletion | K Scan AI" },
  description: "Authenticated confirmation for a K Scan AI account deletion request.",
  robots: { index: false, follow: false, nocache: true },
  referrer: "no-referrer",
};

export default async function AccountDeleteConfirmPage() {
  const cookieStore = await cookies();
  const csrfToken = cookieStore.get(DELETE_CSRF_COOKIE)?.value ?? "";
  const supabase = createAccountDeletePageClient(cookieStore);
  const userResult = supabase ? await supabase.auth.getUser() : null;
  const authenticated = Boolean(userResult?.data.user && !userResult.error && csrfToken);

  return (
    <main id="main-content" className="min-h-screen bg-[#08090D] text-[#F8FAFC]">
      <SiteNav />
      <section className="mx-auto max-w-xl px-6 py-16 md:px-10 md:py-24">
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-rose-300/80">Authenticated action</p>
        <h1 className="mb-4 text-3xl font-medium tracking-tight">Confirm account deletion</h1>
        {!authenticated ? (
          <div className="space-y-5 text-slate-300">
            <p>Your secure link is invalid, expired, already used, or was opened in a different browser.</p>
            <Link className="inline-flex rounded-md border border-cyan-300 px-5 py-3 text-sm font-semibold text-cyan-200" href="/account/delete">
              Request a new secure link
            </Link>
          </div>
        ) : (
          <DeleteConfirmClient csrfToken={csrfToken} />
        )}
      </section>
    </main>
  );
}
