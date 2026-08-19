import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Placeholder } from "@/components/site/Placeholder";
import { GradedImage } from "@/components/site/GradedImage";
import { MaskedLines } from "@/components/site/MaskedLines";
import { SectionLabel } from "@/components/site/SectionLabel";
import { WipeImage } from "@/components/site/WipeImage";
import { Reveal } from "@/components/site/Reveal";
import { ResultsRail } from "@/components/home/ResultsRail";
import { practice } from "@/data/site";
import {
  getConcern,
  getConcernProducts,
  getConcernResultsCount,
  getConcernTreatments,
  getRelatedConcerns,
  lowestPrice,
} from "@/data/concerns";

function firstSentence(text: string) {
  const match = text.match(/^.*?[.!?](\s|$)/);
  return (match ? match[0] : text).trim();
}

export const Route = createFileRoute("/concerns/$slug")({
  head: ({ params }) => {
    const concern = getConcern(params.slug);
    if (!concern) {
      return { meta: [{ title: "Concern not found — RIN Aesthetic Practice" }] };
    }
    const title = `${concern.label} treatment in Charlottesville, VA | RIN Aesthetic Practice`;
    const description = firstSentence(concern.intro[0] ?? concern.label);
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
  loader: ({ params }) => {
    if (!getConcern(params.slug)) throw notFound();
  },
  component: ConcernPage,
});

const btnLight =
  "btn-label inline-flex items-center justify-center rounded-[2px] bg-ivory px-8 py-4 text-ink transition-colors hover:bg-champagne";
const btnDark =
  "btn-label inline-flex items-center justify-center rounded-[2px] bg-ink px-8 py-4 text-ivory transition-colors hover:bg-walnut";

function ConcernPage() {
  const { slug } = Route.useParams();
  const concern = getConcern(slug);
  if (!concern) return null;

  const treatments = getConcernTreatments(concern);
  const productList = getConcernProducts(concern);
  const related = getRelatedConcerns(concern);
  const resultsCount = getConcernResultsCount(concern);
  const cheapest = lowestPrice(treatments);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: concern.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Header */}
      <section className="relative mx-auto max-w-[1240px] px-6 pt-[56px] pb-[72px] md:px-10 md:pt-[104px] md:pb-[96px]">
        <p className="eyebrow">Concern</p>
        <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <MaskedLines
              as="h1"
              lines={[concern.h1]}
              className="display-tight font-display text-[30px] font-extralight text-ink md:text-[46px]"
            />
            <div className="measure mt-8 space-y-6">
              {concern.intro.map((paragraph, i) => (
                <p key={i} className="font-body text-[17px] font-light leading-[1.8] text-walnut">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <dl className="border-t border-greige lg:col-span-5 lg:col-start-8 lg:border-t-0">
            <div className="flex items-baseline justify-between gap-6 border-b border-greige py-5 lg:border-t">
              <dt className="label-xs text-walnut">Treatments that address it</dt>
              <dd className="font-body text-[19px] font-medium text-ink">{treatments.length}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 border-b border-greige py-5">
              <dt className="label-xs text-walnut">Starting from</dt>
              <dd className="font-body text-[19px] font-medium text-ink">
                {cheapest ? cheapest.priceDisplay : "On consultation"}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 border-b border-greige py-5">
              <dt className="label-xs text-walnut">Results on file</dt>
              <dd className="font-body text-[19px] font-medium text-ink">{resultsCount}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 2. Hero image */}
      <section className="w-full">
        <WipeImage from="left" className="w-full">
          {concern.heroImage ? (
            <GradedImage
              src={concern.heroImage}
              alt={`${concern.label} treatment at RIN Aesthetic Practice in Charlottesville, Virginia`}
              className="aspect-[3/2] w-full lg:aspect-[21/9]"
            />
          ) : (
            <Placeholder
              label="Concern photography"
              alt={`Photography for ${concern.label} to follow`}
              labelPosition="bottom-left"
              className="aspect-[3/2] w-full lg:aspect-[21/9]"
            />
          )}
        </WipeImage>
      </section>

      {/* 3. What causes it */}
      {concern.whatCauses && concern.whatCauses.length ? (
        <section className="relative mx-auto max-w-[1240px] px-6 py-[72px] md:px-10 md:py-[120px]">
          <SectionLabel>Causes</SectionLabel>
          <MaskedLines
            as="h2"
            lines={["What causes it"]}
            className="display-tight font-display text-[30px] font-extralight text-ink md:text-[46px]"
          />
          <ul className="mt-12 grid border-t border-greige md:grid-cols-2 md:gap-x-20">
            {concern.whatCauses.map((item) => (
              <li
                key={item}
                className="flex gap-4 border-b border-greige py-5 font-body text-[17px] font-light leading-[1.8] text-walnut"
              >
                <span aria-hidden className="mt-[15px] h-px w-4 shrink-0 bg-champagne" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* 4. Treatments */}
      <section className="relative mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]">
        <SectionLabel>Treatments</SectionLabel>
        <MaskedLines
          as="h2"
          lines={["Treatments that", "address it"]}
          className="display-tight font-display text-[30px] font-extralight text-ink md:text-[46px]"
        />
        <div className="mt-12 border-t border-greige">
          {treatments.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <Link
                to="/treatments/$slug"
                params={{ slug: item.slug }}
                className="group grid items-baseline gap-3 border-b border-greige py-7 transition-colors hover:bg-white md:grid-cols-12 md:gap-8 md:py-8"
              >
                <div className="md:col-span-4">
                  <span className="block font-body text-[19px] font-medium leading-[1.35] text-ink transition-colors group-hover:text-walnut">
                    {item.name}
                  </span>
                  <span className="label-xs mt-2 block text-champagne">{item.category}</span>
                </div>
                <p className="font-body text-[16px] font-light leading-[1.75] text-walnut md:col-span-5">
                  {item.description}
                </p>
                <div className="md:col-span-3 md:text-right">
                  <span className="block font-body text-[17px] text-ink">{item.priceDisplay}</span>
                  <span className="mt-2 block font-body text-[14px] font-light text-walnut">
                    Downtime: {item.downtime}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
          {treatments.length === 0 ? (
            <p className="border-b border-greige py-8 font-body text-[16px] font-light text-walnut">
              Treatments for this concern are planned in consultation.
            </p>
          ) : null}
        </div>
      </section>

      {/* 5. Refine band */}
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
            <Link
              to="/find-your-treatment"
              search={{ concern: concern.tag }}
              className={`mt-10 ${btnLight}`}
            >
              Find your treatment
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Products */}
      {productList.length ? (
        <section className="relative mx-auto max-w-[1240px] px-6 py-[72px] md:px-10 md:py-[120px]">
          <SectionLabel>Routine</SectionLabel>
          <MaskedLines
            as="h2"
            lines={["Products that help"]}
            className="display-tight font-display text-[30px] font-extralight text-ink md:text-[46px]"
          />
          <div className="mt-12 border-t border-greige">
            {productList.map((item) => (
              <div
                key={item.id}
                className="grid gap-2 border-b border-greige py-7 md:grid-cols-12 md:gap-8"
              >
                <span className="label-xs text-champagne md:col-span-3">
                  {item.brand ?? item.category}
                </span>
                <span className="font-body text-[19px] font-medium leading-[1.35] text-ink md:col-span-4">
                  {item.name}
                </span>
                <p className="font-body text-[16px] font-light leading-[1.75] text-walnut md:col-span-5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* 7. Results */}
      {resultsCount > 0 ? (
        <section className="relative overflow-x-clip pb-[72px] md:pb-[120px]">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <SectionLabel>Results</SectionLabel>
            <MaskedLines
              as="h2"
              lines={["Results"]}
              className="display-tight font-display text-[30px] font-extralight text-ink md:text-[46px]"
            />
            <p className="measure mt-6 font-body text-[17px] font-light leading-[1.8] text-walnut">
              Unretouched, consented photography from our own treatment room.
            </p>
          </div>
          <div className="mt-12 w-full pl-6 md:pl-10">
            <ResultsRail count={resultsCount} label="Before / after" />
          </div>
        </section>
      ) : null}

      {/* 8. FAQ */}
      {concern.faqs.length ? (
        <section className="relative mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]">
          <SectionLabel>Questions</SectionLabel>
          <MaskedLines
            as="h2"
            lines={["Questions"]}
            className="display-tight font-display text-[30px] font-extralight text-ink md:text-[46px]"
          />
          <div className="mt-12 border-t border-greige">
            {concern.faqs.map((faq) => (
              <details key={faq.q} className="faq group border-b border-greige">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-6">
                  <h3 className="font-body text-[17px] font-medium text-ink">{faq.q}</h3>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 font-body text-[18px] font-light text-champagne"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="measure pb-7 font-body text-[16px] font-light leading-[1.75] text-walnut">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {/* 9. Related concerns */}
      {related.length ? (
        <section className="mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]">
          <h2 className="label-xs text-walnut">Related concerns</h2>
          <ul className="mt-6 flex flex-col gap-4 md:flex-row md:gap-10">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/concerns/$slug"
                  params={{ slug: item.slug }}
                  className="font-body text-[19px] font-light text-ink underline decoration-greige underline-offset-[6px] transition-colors hover:decoration-champagne"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* 10. Booking band */}
      <section className="border-y border-greige bg-white">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-[72px] md:flex-row md:items-center md:justify-between md:px-10 md:py-[96px]">
          <h2 className="display-tight max-w-[20ch] font-display text-[28px] font-extralight text-ink md:text-[34px]">
            Start with a conversation about {concern.label.toLowerCase()}.
          </h2>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <a href={practice.bookingUrl} target="_blank" rel="noreferrer" className={btnDark}>
              Book now
            </a>
            <a
              href={practice.phoneHref}
              className="font-body text-[15px] text-walnut transition-colors hover:text-ink"
            >
              {practice.phone}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
