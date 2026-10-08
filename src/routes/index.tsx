import { seoHead } from "@/lib/seo-head";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Home } from "@/components/home/Home";
import { heroDesktop, heroDesktopMedia, heroMobile, heroMobileMedia, heroSizes, heroTablet, heroTabletMedia } from "@/lib/hero";

const seo = seoHead("/");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seo.meta,
    links: [
      ...seo.links,
      // Only the hero crop that this screen width paints is preloaded, at the size it needs.
      { rel: "preload", as: "image", type: "image/webp", imageSrcSet: heroMobile.webp, imageSizes: heroSizes, media: heroMobileMedia, fetchPriority: "high" },
      { rel: "preload", as: "image", type: "image/webp", imageSrcSet: heroTablet.webp, imageSizes: heroSizes, media: heroTabletMedia, fetchPriority: "high" },
      { rel: "preload", as: "image", type: "image/webp", imageSrcSet: heroDesktop.webp, imageSizes: heroSizes, media: heroDesktopMedia, fetchPriority: "high" },
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
