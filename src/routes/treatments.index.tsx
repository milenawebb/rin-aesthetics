import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PageShell";

const title = "Treatments — RIN Aesthetic Practice";
const description =
  "Injectables, laser and light, and skin health treatments at RIN Aesthetic Practice in Charlottesville, Virginia.";

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: () => (
    <PlaceholderPage
      title="Treatments"
      blurb="The full treatment menu is being prepared. In the meantime, call the practice and we will walk you through the options."
    />
  ),
});
