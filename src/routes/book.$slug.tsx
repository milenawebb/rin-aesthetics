import { CancellationNote } from "@/components/site/CancellationNote";
import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { getBookingAction } from "@/data/lookup";
import { consultation, consultationFeeLine } from "@/data/consultation";
import { seoHead } from "@/lib/seo-head";
import { PageShell } from "@/components/site/PageShell";

// Booking actions are not pages, except the consultation: it states the fee before the Vagaro handoff.
// Every other slug sends the visitor to the treatments directory.
export const Route = createFileRoute("/book/$slug")({
  loader: ({ params }) => {
    if (!getBookingAction(params.slug)) throw notFound();
    if (params.slug !== "consultation") throw redirect({ to: "/treatments", statusCode: 302 });
    return null;
  },
  head: ({ params }) => {
    if (params.slug !== "consultation") return {};
    const seo = seoHead("/book/consultation");
    return { meta: seo.meta, links: seo.links };
  },
  component: ConsultationPage,
});

function ConsultationPage() {
  return (
    <PageShell>
      <div className="page-head site-container">
        <h1 className="type-h1 text-ink">Book a consultation</h1>
        <p className="mt-6 font-body text-[22px] font-light leading-[1.5] text-ink md:text-[26px]">
          {consultationFeeLine}
        </p>
        <a
          href={consultation.bookingUrl}
          target="_blank"
          rel="noopener"
          className="btn-label mt-8 inline-flex w-full items-center justify-center rounded-[2px] bg-ink px-8 py-4 text-ivory transition-colors hover:bg-walnut md:w-auto"
        >
          Continue to booking
        </a>
        <CancellationNote className="mt-3" />
      </div>
    </PageShell>
  );
}
