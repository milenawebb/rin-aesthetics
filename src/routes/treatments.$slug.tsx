import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { services } from "@/data/services";

// Legacy /treatments/<slug> URLs move permanently to the category URL.
export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const match = services.find((s) => s.slug.split("/")[1] === params.slug);
    if (!match) throw notFound();
    throw redirect({ href: `/${match.slug}`, statusCode: 301 });
  },
  component: LegacyTreatment,
});

function LegacyTreatment() {
  return null;
}
