import { NextRequest, NextResponse } from "next/server";

const GPC_COOKIE = "kscan_gpc_opt_out";
const GPC_COOKIE_MAX_AGE = 60 * 60 * 24 * 395; // ~13 months

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

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
