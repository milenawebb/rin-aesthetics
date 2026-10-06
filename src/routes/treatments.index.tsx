import { seoHead } from "@/lib/seo-head";
import { BookingBand } from "@/components/site/BookingBand";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { MaskedLines } from "@/components/site/MaskedLines";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";
import { services, serviceBookingUrl } from "@/data/services";
import { downtimeLabel, priceValue, splitSlug } from "@/data/lookup";


const categoryOrder = ["Injectables", "Device & Laser", "Skin Treatments", "Hydrafacials"];

const categoryIds: Record<string, string> = {
  Injectables: "injectables",
  "Device & Laser": "device-and-laser",
  "Skin Treatments": "skin-treatments",
  Hydrafacials: "hydrafacials",
};

const seo = seoHead("/treatments");

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: seo.meta,
    links: seo.links,
  }),
  component: TreatmentsIndex,
});

const display = "type-h1 text-ink";

function TreatmentsIndex() {
  const groups = categoryOrder
    .map((category) => ({
      category,
      items: services
        .filter((s) => s.category === category)
        .sort((a, b) => priceValue(a.priceDisplay) - priceValue(b.priceDisplay)),
    }))
    .filter((g) => g.items.length);

  return (
    <PageShell>
      <section className="page-head relative mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="mt-6 max-w-[860px]">
          <MaskedLines as="h1" lines={["Treatments"]} className={display} />
          <p className="measure mt-8 font-body text-[19px] font-light leading-[1.7] text-ink">
            Prices are shown on every treatment. If you are not sure which applies to you, start
            with a{" "}
            <Link
              to="/book/$slug"
              params={{ slug: "consultation" }}
              className="underline decoration-greige underline-offset-[6px] transition-colors hover:decoration-champagne"
            >
              consultation
            </Link>
            .
          </p>
        </div>
      </section>

      {groups.map((group) => (
        <section
          key={group.category}
          id={categoryIds[group.category]}
          className="section-space scroll-mt-20"
        >
          <SectionLabel label={group.category} contentClassName="px-6 md:px-10 xl:px-0">
          <div className="xl:mt-8" role="table" aria-label={group.category}>
            <div
              role="row"
              className="hidden border-b border-greige pb-4 md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,1.6fr)_minmax(0,1.4fr)_minmax(0,0.8fr)] md:gap-8"
            >
              {["Treatment", "What it does", "Price", "Downtime", ""].map((h) => (
                <span key={h} role="columnheader" className="label-xs text-walnut">
                  {h}
                </span>
              ))}
            </div>
            {group.items.map((item, i) => {
              const p = splitSlug(item.slug);
              return (
                <Reveal key={item.id} delay={i * 60}>
                  <div
                    role="row"
                    className={`grid gap-4 border-greige py-7 ${i === 0 ? "border-t md:border-t-0" : "border-t"} md:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,1.6fr)_minmax(0,1.4fr)_minmax(0,0.8fr)] md:items-baseline md:gap-8 md:py-8`}
                  >
                    <div role="cell">
                      <Link
                        to="/$category/$slug"
                        params={{ category: p.category, slug: p.slug }}
                        className="font-body text-[19px] font-medium leading-[1.35] text-ink decoration-greige underline-offset-[6px] transition-colors hover:underline hover:decoration-champagne"
                      >
                        {item.name}
                      </Link>
                    </div>
                    <p role="cell" className="font-body text-[16px] font-light leading-[1.75] text-walnut">
                      {item.shortDescription}
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-4 md:contents">
                      <Fact label="Price" value={item.priceDisplay} />
                      <Fact label="Downtime" value={downtimeLabel[item.downtime]} />
                    </div>
                    <div role="cell" className="md:text-right">
                      <a
                        href={serviceBookingUrl(item)}
                        target="_blank"
                        rel="noopener"
                        aria-label={`Book ${item.name}`}
                        className="font-body text-[15px] font-medium text-ink decoration-champagne underline-offset-4 transition-colors hover:text-walnut hover:underline"
                      >
                        Book
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          </SectionLabel>
        </section>
      ))}
      <BookingBand />
    </PageShell>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div role="cell">
      <span className="label-xs block text-walnut md:hidden">{label}</span>
      <span className="mt-1 block font-body text-[15px] text-ink md:mt-0 md:text-[16px]">{value}</span>
    </div>
  );
}
