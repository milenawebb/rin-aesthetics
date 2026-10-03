import { BookingBand } from "@/components/site/BookingBand";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { MaskedLines } from "@/components/site/MaskedLines";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/data/services";
import { downtimeLabel, priceValue, splitSlug } from "@/data/lookup";

const title = "Treatments | RIN Aesthetic Practice";
const description =
  "Injectables, laser and light, and skin health treatments at RIN Aesthetic Practice in Charlottesville, Virginia.";

const categoryOrder = ["Injectables", "Device & Laser", "Skin Treatments", "Hydrafacials"];

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TreatmentsIndex,
});

const display = "display-tight font-display text-[30px] font-extralight text-ink md:text-[46px]";

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
      <section className="relative mx-auto max-w-[1240px] px-6 pt-[56px] pb-[56px] md:px-10 md:pt-[104px] md:pb-[80px]">
        <p className="eyebrow">Treatments</p>
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
          className="relative mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]"
        >
          <SectionLabel>{group.category}</SectionLabel>
          <div className="mt-8" role="table" aria-label={group.category}>
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
                    className="grid gap-4 border-b border-greige py-7 md:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,1.6fr)_minmax(0,1.4fr)_minmax(0,0.8fr)] md:items-baseline md:gap-8 md:py-8"
                  >
                    <div role="cell">
                      <Link
                        to="/$category/$slug"
                        params={{ category: p.category, slug: p.slug }}
                        className="font-body text-[19px] font-medium leading-[1.35] text-ink underline decoration-greige underline-offset-[6px] transition-colors hover:decoration-champagne"
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
                  </div>
                </Reveal>
              );
            })}
          </div>
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
