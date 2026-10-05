import { metaFor } from "@/data/seo";

// Single source for the site's public URL. Override with VITE_SITE_URL; the
// fallback is the live domain so a launch can never ship preview canonicals.
export const SITE_URL: string =
  import.meta.env.VITE_SITE_URL ?? "https://rinaestheticsva.com";

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
