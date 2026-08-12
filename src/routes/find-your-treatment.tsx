import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PageShell";

const title = "Find your treatment — RIN Aesthetic Practice";
const description =
  "A short guided path from what you notice to the treatment that suits you.";

export const Route = createFileRoute("/find-your-treatment")({
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
      title="Find your treatment"
      blurb="A guided path to the right treatment is being built. Until then, a consultation is the best place to start."
    />
  ),
});
