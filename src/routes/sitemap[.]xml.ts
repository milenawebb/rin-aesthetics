import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/data/seo";
import { redirects } from "@/data/redirects";
import { getServiceByPath } from "@/data/lookup";
import { SITE_URL } from "@/lib/seo-head";

const SERVICE_PREFIXES = ["/concerns/", "/policies/"];

// Canonical routes only: pageMeta minus the 404 entry, any redirect source,
// and any treatment path with no live service page behind it.
export function sitemapRoutes(): string[] {
  return Object.keys(pageMeta).filter((route) => {
    if (route === "/404") return false;
    if (route in redirects) return false;
    const parts = route.split("/").filter(Boolean);
    const isServicePath =
      parts.length === 2 && !SERVICE_PREFIXES.some((p) => route.startsWith(p));
    if (isServicePath && !getServiceByPath(parts[0], parts[1])) return false;
    return true;
  });
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = sitemapRoutes()
          .map((r) => `  <url>\n    <loc>${SITE_URL}${r === "/" ? "/" : r}</loc>\n  </url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
