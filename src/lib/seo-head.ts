import { metaFor } from "@/data/seo";

// Single source for the site's public URL. Override with VITE_SITE_URL; the
// fallback is the live domain so a launch can never ship preview canonicals.
export const SITE_URL: string =
  import.meta.env["VITE_SITE_URL"] ?? "https://rinaestheticsva.com";

// Shared head tags for every indexable route. Title and description come only from src/data/seo.ts.
// The share image is the site's own static file, one og:image per page.
const SHARE_IMAGE_URL = `${SITE_URL}/media/rin-share.jpg`;
const SHARE_IMAGE_ALT =
  "The reception at RIN Aesthetic Practice, with the gold RIN sign";

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
      { property: "og:site_name", content: "RIN Aesthetic Practice" },
      { property: "og:url", content: url },
      { property: "og:image", content: SHARE_IMAGE_URL },
      { property: "og:image:secure_url", content: SHARE_IMAGE_URL },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: SHARE_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SHARE_IMAGE_URL },
      { name: "twitter:image:alt", content: SHARE_IMAGE_ALT },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
