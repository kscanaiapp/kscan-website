import type { MetadataRoute } from "next";

const siteUrl = "https://kscan.app";

const publicRoutes = [
  {
    path: "",
    priority: 1,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/demo",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/privacy",
    priority: 0.2,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/legal/terms-summary",
    priority: 0.2,
    changeFrequency: "yearly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
