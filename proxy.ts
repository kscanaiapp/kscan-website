import { NextRequest, NextResponse } from "next/server";

const GPC_COOKIE = "kscan_gpc_opt_out";
const GPC_COOKIE_MAX_AGE = 60 * 60 * 24 * 395; // ~13 months

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // P2-8: the /account/restore page's server-rendered HTML embeds the
  // one-time restoration token in its React Server Components hydration
  // payload. next.config.ts's headers() cannot override Next's own internal
  // Cache-Control default for dynamically-rendered pages (confirmed via curl:
  // it stays "no-cache, must-revalidate", which still permits a shared/disk
  // cache to STORE the response pending revalidation) -- proxy (formerly
  // "middleware") runs ahead of that internal logic and reliably wins.
  if (request.nextUrl.pathname === "/account/restore") {
    response.headers.set("Cache-Control", "no-store");
    response.headers.set("Referrer-Policy", "no-referrer");
  }

  const gpc = request.headers.get("sec-gpc");
  if (gpc === "1") {
    // Propagate as a response header (informational, consumed by server components).
    response.headers.set("x-gpc-signal", "1");

    // Persist the GPC signal as a first-party cookie so the client-side
    // /do-not-sell-or-share page can detect it on any page load, including
    // browsers whose navigator.globalPrivacyControl is unavailable or not yet
    // exposed (e.g., certain extension-based implementations).
    response.cookies.set(GPC_COOKIE, "1", {
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: GPC_COOKIE_MAX_AGE,
    });
  }

  return response;
}

export const config = {
  matcher: [
    // Exclude Next.js internals and static assets; match all other paths.
    "/((?!_next/static|_next/image|favicon\\.ico|apple-icon|icon).*)",
  ],
};
