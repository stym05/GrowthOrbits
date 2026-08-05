import type { MetadataRoute } from "next";
import { contentPages } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...contentPages.map((page) => ({
      url: `${baseUrl}/${page.path}`,
      lastModified: now,
      changeFrequency: page.path.startsWith("resources/") ? ("weekly" as const) : ("monthly" as const),
      priority: page.path.startsWith("services/") ? 0.8 : 0.6,
    })),
  ];
}
