import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
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

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
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
