import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PageShell";

const title = "Contact — RIN Aesthetic Practice";
const description =
  "340 Towncenter Ln, Suite 200B, Charlottesville, VA 22911. Call (434) 217-5300 to book a consultation.";

export const Route = createFileRoute("/contact")({
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
      title="Contact"
      blurb="Full contact details, hours and policies will live here. For now, call the practice or book online."
    />
  ),
});
