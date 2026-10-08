import type { MetadataRoute } from "next";
import { siteConfig } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: "2026-10-08",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}