import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { MaskedLines } from "@/components/site/MaskedLines";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";
import { BookingBand } from "@/components/site/BookingBand";
import { ResultsRail } from "@/components/home/ResultsRail";
import { getResultCasesByTags } from "@/data/results";
import { ProductList } from "@/components/site/ProductList";
import { products } from "@/data/products";
import { redirects } from "@/data/redirects";
import {
  concernPathSlug,
  downtimeLabel,
  getConcernBySlug,
  relatedConcerns,
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

const btnLight =
  "btn-label inline-flex items-center justify-center rounded-[2px] bg-ivory px-8 py-4 text-ink transition-colors hover:bg-champagne";
const display = "display-tight font-display text-[30px] font-extralight text-ink md:text-[46px]";

function ConcernPage() {
  const { slug } = Route.useParams();
  const concern = getConcernBySlug(slug);
  if (!concern) return null;

  const treatments = servicesFor(concern);
  const related = relatedConcerns(concern);
  const concernProducts = products.filter((p) => p.concernTags.some((t) => concern.tags.includes(t)));
  const results = getResultCasesByTags(concern.tags);

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

      <section className="relative mx-auto max-w-[1240px] px-6 pt-[56px] pb-[72px] md:px-10 md:pt-[104px] md:pb-[96px]">
        <p className="eyebrow">Concern</p>
        <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <MaskedLines as="h1" lines={[concern.h1]} className={display} />
            {concern.intro || concern.body.length ? (
              <div className="measure mt-8 space-y-6">
                {[concern.intro, ...concern.body].filter(Boolean).map((p, i) => (
                  <p key={i} className="font-body text-[17px] font-light leading-[1.8] text-walnut">
                    {p}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
          <dl className="border-t border-greige lg:col-span-5 lg:col-start-8 lg:border-t-0">
            <div className="flex items-baseline justify-between gap-6 border-b border-greige py-5 lg:border-t">
              <dt className="label-xs text-walnut">Treatments that address it</dt>
              <dd className="font-body text-[19px] font-medium text-ink">{treatments.length}</dd>
            </div>
            {treatments[0] ? (
              <div className="flex items-baseline justify-between gap-6 border-b border-greige py-5">
                <dt className="label-xs text-walnut">Starting from</dt>
                <dd className="font-body text-[19px] font-medium text-ink">
                  {treatments[0].priceDisplay.replace(/^From /, "")}
                </dd>
              </div>
            ) : null}
          </dl>
        </div>
      </section>

      {treatments.length ? (
        <section className="relative mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]">
          <SectionLabel>Treatments</SectionLabel>
          <MaskedLines as="h2" lines={["Treatments that", "address it"]} className={display} />
          <div className="mt-12 border-t border-greige">
            {treatments.map((item, i) => {
              const p = splitSlug(item.slug);
              return (
                <Reveal key={item.id} delay={i * 60}>
                  <Link
                    to="/$category/$slug"
                    params={{ category: p.category, slug: p.slug }}
                    className="group grid items-baseline gap-3 border-b border-greige py-7 transition-colors hover:bg-white md:grid-cols-12 md:gap-8 md:py-8"
                  >
                    <div className="md:col-span-4">
                      <span className="block font-body text-[19px] font-medium leading-[1.35] text-ink transition-colors group-hover:text-walnut">
                        {item.name}
                      </span>
                      <span className="label-xs mt-2 block text-champagne">{item.category}</span>
                    </div>
                    <p className="font-body text-[16px] font-light leading-[1.75] text-walnut md:col-span-5">
                      {item.shortDescription}
                    </p>
                    <div className="md:col-span-3 md:text-right">
                      <span className="block font-body text-[17px] text-ink">{item.priceDisplay}</span>
                      <span className="mt-2 block font-body text-[14px] font-light text-walnut">
                        Downtime: {downtimeLabel[item.downtime]}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>
      ) : null}

      {concernProducts.length ? (
        <section className="relative mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]">
          <SectionLabel>Daily care</SectionLabel>
          <MaskedLines as="h2" lines={["Products for this"]} className={display} />
          <div className="mt-12">
            <ProductList items={concernProducts} />
          </div>
        </section>
      ) : null}

      <section className="w-full bg-ink">
        <div className="mx-auto max-w-[1240px] px-6 py-[96px] md:px-10 md:py-[140px]">
          <div className="max-w-[760px]">
            <MaskedLines
              as="h2"
              lines={["Not sure which of these", "is right for you?"]}
              className="display-tight font-display text-[30px] font-extralight text-ivory md:text-[46px]"
            />
            <p className="measure mt-8 font-body text-[17px] font-light leading-[1.8] text-greige">
              Six short questions about downtime, budget and timing will narrow these options down
              to a plan we can talk through together.
            </p>
            <Link to="/find-your-treatment" className={`mt-10 ${btnLight}`}>
              Find your treatment
            </Link>
          </div>
        </div>
      </section>

      {results.length ? (
        <section className="relative overflow-x-clip py-[72px] md:py-[120px]">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <SectionLabel>Results</SectionLabel>
            <MaskedLines as="h2" lines={["Results"]} className={display} />
            <p className="measure mt-6 font-body text-[17px] font-light leading-[1.8] text-walnut">
              Unretouched photography from our own treatment room. Individual results vary.
            </p>
          </div>
          <div className="mt-12 w-full pl-6 md:pl-10">
            <ResultsRail cases={results} />
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
        <section className="mx-auto max-w-[1240px] px-6 py-[72px] md:px-10 md:py-[96px]">
          <h2 className="label-xs text-walnut">Related concerns</h2>
          <ul className="mt-6 flex flex-col gap-4 md:flex-row md:gap-10">
            {related.map((item) => (
              <li key={item.id}>
                <Link
                  to="/concerns/$slug"
                  params={{ slug: concernPathSlug(item) }}
                  className="font-body text-[19px] font-light text-ink underline decoration-greige underline-offset-[6px] transition-colors hover:decoration-champagne"
                >
                  {item.h1}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <BookingBand />
    </PageShell>
  );
}
