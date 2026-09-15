import type { MetadataRoute } from "next";

const BASE = "https://www.bluehorizoncharleston.com";

/** Lets the integration page be found without linking it from the marketing homepage. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/integrations/docusign`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
