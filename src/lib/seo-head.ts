import { metaFor } from "@/data/seo";

export const SITE_URL = "https://mwgroupllc.net";

// Shared head tags for every indexable route. Title and description come only from src/data/seo.ts.
export function seoHead(path: string) {
  const { title, description } = metaFor(path);
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
