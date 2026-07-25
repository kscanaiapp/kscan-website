import type { MetadataRoute } from "next";

const siteUrl = "https://kscan.app";

const publicRoutes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/beta", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/demo", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/security", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/legal/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/legal/terms", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/legal/terms-summary", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/do-not-sell-or-share", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/support", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/legal/delete-account", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/legal/delete-policy", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/legal/vulnerability-response", changeFrequency: "yearly" as const, priority: 0.3 },
];

const lastModified = new Date().toISOString().split("T")[0];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
