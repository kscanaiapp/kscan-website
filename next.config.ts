import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "media-src 'self' blob: data: https: https://*.vercel.app",
  "connect-src 'self' https://*.supabase.co https://api.resend.com https://*.vercel.app",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

// Headers required for Android App Links (Digital Asset Links) and iOS
// Universal Links (apple-app-site-association) verification. These files must
// be served as application/json with permissive CORS, regardless of the
// extensionless filename Apple requires for AASA. Listed AFTER the broad
// securityHeaders rule so Content-Type / CORS override the default mime
// detection for /public/.well-known/* static assets.
const wellKnownJsonHeaders = [
  { key: "Content-Type", value: "application/json" },
  { key: "Access-Control-Allow-Origin", value: "*" },
  { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
];

// P2-8 hardening: the restoration page's server-rendered HTML embeds the
// one-time token in its React Server Components hydration payload (Next.js
// serializes the requested URL, including ?token=..., into a <script> tag —
// not visible text, not sent to any third party, but present in the raw
// response body). The site-wide Cache-Control default is absent here (Next
// falls back to "no-cache, must-revalidate", which still permits a shared or
// disk cache to STORE the response pending revalidation) and the site-wide
// Referrer-Policy is the weaker "strict-origin-when-cross-origin". This route
// needs the strictest values so the token-bearing response is never cached
// anywhere and the page's own Referrer-Policy HTTP header matches its
// <meta name="referrer" content="no-referrer"> tag rather than relying on
// meta/header precedence rules.
const restorePageHeaders = [
  { key: "Cache-Control", value: "no-store" },
  { key: "Referrer-Policy", value: "no-referrer" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/account/restore",
        headers: restorePageHeaders,
      },
      {
        source: "/.well-known/assetlinks.json",
        headers: wellKnownJsonHeaders,
      },
      {
        source: "/.well-known/apple-app-site-association",
        headers: wellKnownJsonHeaders,
      },
    ];
  },
};

export default nextConfig;
