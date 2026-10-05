import { seoHead } from "@/lib/seo-head";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Home } from "@/components/home/Home";


const seo = seoHead("/");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seo.meta,
    links: seo.links,
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
