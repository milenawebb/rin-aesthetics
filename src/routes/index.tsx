import { seoHead } from "@/lib/seo-head";
import { createFileRoute } from "@tanstack/react-router";
import { businessJsonLd } from "@/lib/business-schema";
import { PageShell } from "@/components/site/PageShell";
import { Home } from "@/components/home/Home";
import { heroDesktop, heroDesktopMedia, heroMobile, heroMobileMedia, heroSizes, heroTablet, heroTabletMedia } from "@/lib/hero";

const seo = seoHead("/");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      ...seo.meta,
      // Video link preview for iMessage and similar apps. Home only; the
      // shared og:image stays as the still-image fallback.
      { property: "og:video", content: "https://rinaestheticsva.com/media/rin-preview.mp4" },
      { property: "og:video:secure_url", content: "https://rinaestheticsva.com/media/rin-preview.mp4" },
      { property: "og:video:type", content: "video/mp4" },
      { property: "og:video:width", content: "1280" },
      { property: "og:video:height", content: "720" },
    ],
    links: [
      ...seo.links,
      // Only the hero crop that this screen width paints is preloaded, at the size it needs.
      { rel: "preload", as: "image", type: "image/webp", imageSrcSet: heroMobile.webp, imageSizes: heroSizes, media: heroMobileMedia, fetchPriority: "high" },
      { rel: "preload", as: "image", type: "image/webp", imageSrcSet: heroTablet.webp, imageSizes: heroSizes, media: heroTabletMedia, fetchPriority: "high" },
      { rel: "preload", as: "image", type: "image/webp", imageSrcSet: heroDesktop.webp, imageSizes: heroSizes, media: heroDesktopMedia, fetchPriority: "high" },
    ],
    scripts: [businessJsonLd],
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
