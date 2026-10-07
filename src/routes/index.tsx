import { seoHead } from "@/lib/seo-head";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Home } from "@/components/home/Home";
import heroAsset from "@/assets/hero.png.asset.json";
import heroMobileAsset from "@/assets/rin-hero-mobile.png.asset.json";
import heroTabletAsset from "@/assets/rin-hero-tablet.png.asset.json";


const seo = seoHead("/");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seo.meta,
    links: [
      ...seo.links,
      // Only the hero crop that this screen width paints is preloaded.
      { rel: "preload", as: "image", href: heroMobileAsset.url, media: "(max-width: 767px)", fetchPriority: "high" },
      { rel: "preload", as: "image", href: heroTabletAsset.url, media: "(min-width: 768px) and (max-width: 1023px)", fetchPriority: "high" },
      { rel: "preload", as: "image", href: heroAsset.url, media: "(min-width: 1024px)", fetchPriority: "high" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Home />
    </PageShell>
  );
}
