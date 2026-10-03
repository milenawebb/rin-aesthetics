import { resultsNotice } from "@/data/gallery";
import { serviceBookingUrl } from "@/data/services";
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { MaskedLines } from "@/components/site/MaskedLines";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";
import { practice } from "@/data/site";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryForConcern } from "@/data/gallery";
import { ProductList } from "@/components/site/ProductList";
import { products } from "@/data/products";
import { redirects } from "@/data/redirects";
import {
  concernPathSlug,
  downtimeLabel,
  getConcernBySlug,
  getServiceById,
  relatedConcerns,
  sessionsLabel,
  servicesFor,
  splitSlug,
} from "@/data/lookup";

export const Route = createFileRoute("/concerns/$slug")({
  loader: ({ params }) => {
    const target = redirects[`/concerns/${params.slug}`];
    if (target) throw redirect({ href: target, statusCode: 301 });
    if (!getConcernBySlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const concern = getConcernBySlug(params.slug);
    if (!concern) return { meta: [{ title: "Unavailable | RIN Aesthetic Practice" }] };
    const title = `${concern.h1} treatment in Charlottesville, VA | RIN Aesthetic Practice`;
    const description =
      concern.intro ||
      `Treatments for ${concern.h1.toLowerCase()} at RIN Aesthetic Practice in Charlottesville, Virginia.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ConcernPage,
});

const display = "display-tight font-display text-[30px] font-extralight text-ink md:text-[46px]";

function ConcernPage() {
  const { slug } = Route.useParams();
  const concern = getConcernBySlug(slug);
  if (!concern) return null;

  const treatments = servicesFor(concern);
  const concernProducts = products.filter((p) => p.concernTags.some((t) => concern.tags.includes(t)));
  const results = galleryForConcern(
    concern.tags,
    (serviceId) => getServiceById(serviceId)?.concernTags ?? [],
  );
  const related = relatedConcerns(concern);

  return (
    <PageShell>
      {concern.faqs.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: concern.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            }),
          }}
        />
      ) : null}

      <section className="relative mx-auto max-w-[1240px] px-6 pt-[56px] pb-[56px] md:px-10 md:pt-[104px] md:pb-[80px]">
        <p className="eyebrow">Concern</p>
        <div className="mt-6 max-w-[860px]">
          <MaskedLines as="h1" lines={[concern.h1]} className={display} />
          {concern.intro ? (
            <p className="measure mt-8 font-body text-[19px] font-light leading-[1.7] text-ink">{concern.intro}</p>
          ) : null}
        </div>
      </section>

      {concern.body.length ? (
        <section className="relative mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[96px]">
          <div className="measure space-y-6">
            {concern.body.map((para, i) => (
              <p key={i} className="font-body text-[17px] font-light leading-[1.8] text-walnut">
                {para}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {treatments.length ? (
        <section className="relative mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]">
          <SectionLabel>Treatments for this</SectionLabel>
          <MaskedLines
            as="h2"
            lines={[treatments.length === 1 ? "The treatment we recommend" : "Compare your options"]}
            className={display}
          />
          <div className="mt-12" role="table" aria-label={`Treatments for ${concern.h1}`}>
            <div
              role="row"
              className="hidden border-b border-greige pb-4 md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,1.6fr)_minmax(0,1.4fr)_minmax(0,1.5fr)_minmax(0,0.8fr)] md:gap-8"
            >
              {["Treatment", "What it does", "Price", "Downtime", "Sessions", ""].map((h) => (
                <span key={h} role="columnheader" className="label-xs text-walnut">
                  {h}
                </span>
              ))}
            </div>
            {treatments.map((item, i) => {
              const p = splitSlug(item.slug);
              return (
                <Reveal key={item.id} delay={i * 60}>
                  <div
                    role="row"
                    className="grid gap-4 border-b border-greige py-7 md:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,1.6fr)_minmax(0,1.4fr)_minmax(0,1.5fr)_minmax(0,0.8fr)] md:items-baseline md:gap-8 md:py-8"
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
                    <div className="mt-2 grid grid-cols-3 gap-4 md:contents">
                      <Fact label="Price" value={item.priceDisplay} />
                      <Fact label="Downtime" value={downtimeLabel[item.downtime]} />
                      <Fact label="Sessions" value={sessionsLabel(item.seriesSessions)} />
                    </div>
                    <div role="cell" className="md:text-right">
                      <a
                        href={serviceBookingUrl(item)}
                        target="_blank"
                        rel="noopener"
                        aria-label={`Book ${item.name}`}
                        className="font-body text-[15px] font-medium text-ink underline decoration-champagne underline-offset-4 transition-colors hover:text-walnut"
                      >
                        Book
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      ) : null}

      {concernProducts.length ? (
        <section className="relative mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]">
          <h2 className="label-xs text-walnut">Products for this</h2>
          <div className="mt-8">
            <ProductList items={concernProducts} />
          </div>
        </section>
      ) : null}

      {results.length ? (
        <section className="relative mx-auto max-w-[1240px] px-6 py-[72px] md:px-10 md:py-[120px]">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <SectionLabel>Results</SectionLabel>
            <MaskedLines as="h2" lines={["Results"]} className={display} />
            <p className="measure mt-6 font-body text-[17px] font-light leading-[1.8] text-walnut">
              {resultsNotice(results)}
            </p>
          </div>
          <div className="mt-12">
            <GalleryGrid items={results} />
          </div>
        </section>
      ) : null}

      {concern.faqs.length ? (
        <section className="relative mx-auto max-w-[1240px] px-6 py-[72px] md:px-10 md:py-[120px]">
          <SectionLabel>Questions</SectionLabel>
          <MaskedLines as="h2" lines={["Questions"]} className={display} />
          <div className="mt-12 border-t border-greige">
            {concern.faqs.map((faq) => (
              <details key={faq.question} className="faq group border-b border-greige">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-6">
                  <h3 className="font-body text-[17px] font-medium text-ink">{faq.question}</h3>
                  <span aria-hidden className="mt-1 shrink-0 font-body text-[18px] font-light text-champagne">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="measure pb-7 font-body text-[16px] font-light leading-[1.75] text-walnut">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {related.length ? (
        <section className="mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[96px]">
          <h2 className="label-xs text-walnut">Also look at</h2>
          <p className="mt-4 font-body text-[15px] font-light leading-[1.8] text-walnut">
            {related.map((other, i) => (
              <span key={other.id}>
                {i > 0 ? ", " : ""}
                <Link
                  to="/concerns/$slug"
                  params={{ slug: concernPathSlug(other) }}
                  className="underline decoration-greige underline-offset-[4px] transition-colors hover:decoration-champagne"
                >
                  {other.h1}
                </Link>
              </span>
            ))}
          </p>
        </section>
      ) : null}

      <section className="bg-ink">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-[72px] md:flex-row md:items-end md:justify-between md:gap-20 md:px-10 md:py-[96px]">
          <div>
            <h2 className="display-tight max-w-[22ch] font-display text-[30px] font-extralight text-ivory md:text-[38px]">
              Not sure which of these is right?
            </h2>
            <p className="measure mt-5 font-body text-[16px] font-light leading-[1.75] text-greige">
              Jyl will look at your skin and tell you which of these is worth doing, and which is not. The consultation fee goes toward whatever you book.
            </p>
          </div>
          <a
            href={practice.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-label inline-flex shrink-0 items-center justify-center self-start rounded-[2px] bg-champagne px-8 py-4 text-ink transition-colors hover:bg-ivory md:self-auto"
          >
            Book a consultation
          </a>
        </div>
      </section>
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
