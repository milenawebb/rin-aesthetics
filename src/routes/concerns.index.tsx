import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { MaskedLines } from "@/components/site/MaskedLines";
import { Reveal } from "@/components/site/Reveal";
import { concerns } from "@/data/concerns";
import { concernPathSlug, servicesFor } from "@/data/lookup";

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
        <div className="border-t border-greige">
          {concerns.map((concern, i) => {
            const treatments = servicesFor(concern);
            const shown = treatments.slice(0, 4).map((s) => s.name);
            const more = treatments.length > 4;
            return (
              <Reveal key={concern.id} delay={i * 40}>
                <div className="border-b border-greige py-7 md:py-8">
                  <Link
                    to="/concerns/$slug"
                    params={{ slug: concernPathSlug(concern) }}
                    className="font-body text-[19px] font-medium leading-[1.35] text-ink underline decoration-greige underline-offset-[6px] transition-colors hover:decoration-champagne"
                  >
                    {concern.h1}
                  </Link>
                  {shown.length ? (
                    <p className="measure mt-3 font-body text-[16px] font-light leading-[1.75] text-walnut">
                      {shown.join(", ")}
                      {more ? ", and more" : ""}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
