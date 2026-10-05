import type React from "react";
import { BookingBand } from "@/components/site/BookingBand";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { MaskedLines } from "@/components/site/MaskedLines";
import { Reveal } from "@/components/site/Reveal";
import { concerns } from "@/data/concerns";
import { concernPathSlug, priceValue, servicesFor } from "@/data/lookup";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConcernsIndex,
});

const display = "display-tight font-display text-[30px] font-extralight text-ink md:text-[46px]";

function ConcernsIndex() {
  return (
    <PageShell>
      <section className="relative mx-auto max-w-[1240px] px-6 pt-[56px] pb-[56px] md:px-10 md:pt-[104px] md:pb-[80px]">
        <p className="eyebrow">Concerns</p>
        <div className="mt-6 max-w-[860px]">
          <MaskedLines as="h1" lines={["Concerns"]} className={display} />
          <p className="measure mt-8 font-body text-[19px] font-light leading-[1.7] text-ink">
            Start with what you notice. Each concern lists the treatments that address it.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]">
        <div className="grid grid-cols-1 lg:grid-flow-col lg:grid-rows-6 lg:gap-x-16">
          {concerns.map((concern, i) => {
            const treatments = servicesFor(concern);
            const shown = treatments.slice(0, 4).map((s) => s.shortName);
            const more = treatments.length > 4;
            const prices = treatments.map((s) => priceValue(s.priceDisplay)).filter(Number.isFinite);
            const count = `${treatments.length} ${treatments.length === 1 ? "treatment" : "treatments"}`;
            // One treatment with a price shows the price alone; "from $X" only when at least two are priced.
            const onlyPrice = treatments.length === 1 ? prices.at(0) : undefined;
            const summary =
              onlyPrice !== undefined
                ? `${count}, $${onlyPrice.toLocaleString("en-US")}`
                : prices.length >= 2
                  ? `${count}, from $${Math.min(...prices).toLocaleString("en-US")}`
                  : count;
            // Reserved for a single 88px square result image per concern, once real photos exist.
            const thumbnail: React.ReactNode = null;
            return (
              <Reveal key={concern.id} delay={i * 40}>
                <div className={`flex gap-6 border-b border-greige py-7 md:py-8 ${i === 0 ? "border-t" : ""} ${i === 6 ? "lg:border-t" : ""}`}>
                  {thumbnail ? <div className="aspect-square w-[88px] shrink-0">{thumbnail}</div> : null}
                  <div className="min-w-0">
                    <Link
                      to="/concerns/$slug"
                      params={{ slug: concernPathSlug(concern) }}
                      className="font-body text-[19px] font-medium leading-[1.35] text-ink underline decoration-greige underline-offset-[6px] transition-colors hover:decoration-champagne"
                    >
                      {concern.h1}
                    </Link>
                    {treatments.length ? <p className="label-xs mt-3 text-walnut">{summary}</p> : null}
                    {shown.length ? (
                      <p className="measure mt-2 font-body text-[16px] font-light leading-[1.75] text-walnut">
                        {shown.join(", ")}
                        {more ? ", and more" : ""}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <BookingBand />
    </PageShell>
  );
}
