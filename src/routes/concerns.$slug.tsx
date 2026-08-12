import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PageShell";
import { concerns } from "@/data/home";

export const Route = createFileRoute("/concerns/$slug")({
  head: ({ params }) => {
    const concern = concerns.find((c) => c.slug === params.slug);
    const name = concern?.name ?? "Concern";
    const title = `${name} — RIN Aesthetic Practice`;
    const description = `How RIN Aesthetic Practice in Charlottesville approaches ${name.toLowerCase()}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ConcernPage,
});

function ConcernPage() {
  const { slug } = Route.useParams();
  const concern = concerns.find((c) => c.slug === slug);
  return (
    <PlaceholderPage
      title={concern?.name ?? "Concern"}
      blurb="This page is being written. It will cover the cause, the treatments we consider, and what to expect."
    />
  );
}
