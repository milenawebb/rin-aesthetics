import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PageShell";

const title = "Concerns | RIN Aesthetic Practice";
const description =
  "Start with what you notice: lines, tone, texture, volume, lips or the under-eye area.";

export const Route = createFileRoute("/concerns/")({
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
      title="Concerns"
      blurb="Concern pages are on the way. Each will explain what causes it, what we can do, and what a realistic result looks like."
    />
  ),
});
