import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PageShell";

const title = "About Jyl — RIN Aesthetic Practice";
const description =
  "Meet Jyl, the provider behind RIN Aesthetic Practice in Charlottesville, Virginia.";

export const Route = createFileRoute("/about")({
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
      title="About"
      blurb="A longer account of Jyl's training, philosophy and the practice itself is in progress."
    />
  ),
});
