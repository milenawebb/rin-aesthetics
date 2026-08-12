import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Home } from "@/components/home/Home";

const title = "RIN Aesthetic Practice — Refined. Intentional. Natural.";
const description =
  "Medical aesthetics in Charlottesville, Virginia. Injectables, laser and skin health, delivered with restraint and a natural result.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
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
