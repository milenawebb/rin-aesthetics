import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PageShell";

const title = "Results — RIN Aesthetic Practice";
const description =
  "Unretouched before and after photography from the treatment room at RIN Aesthetic Practice.";

export const Route = createFileRoute("/results")({
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
      title="Results"
      blurb="A fuller gallery of consented before and after photography is coming soon."
    />
  ),
});
