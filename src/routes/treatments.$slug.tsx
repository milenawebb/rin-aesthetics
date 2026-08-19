import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Placeholder } from "@/components/site/Placeholder";
import { GradedImage } from "@/components/site/GradedImage";
import providerPortrait from "@/assets/provider-portrait.jpg.asset.json";
import { practice } from "@/data/site";
import { getService, products, serviceSummaries } from "@/data/services";

function firstSentence(text: string) {
  const match = text.match(/^.*?[.!?](\s|$)/);
  return (match ? match[0] : text).trim();
}

export const Route = createFileRoute("/treatments/$slug")({
  head: ({ params }) => {
    const service = getService(params.slug);
    if (!service) {
      return { meta: [{ title: "Treatment not found — RIN Aesthetic Practice" }] };
    }
    const title = `${service.name} in Charlottesville, VA | RIN Aesthetic Practice`;
    const description = firstSentence(service.intro[0] ?? service.name);
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
    if (!getService(params.slug)) throw notFound();
  },
  component: ServicePage,
});

const btnPrimary =
  "btn-label inline-flex items-center justify-center rounded-[2px] bg-ink px-8 py-4 text-ivory transition-colors hover:bg-walnut";

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="label-xs text-champagne">{children}</p>;
}

function ServicePage() {
  const { slug } = Route.useParams();
  const service = getService(slug);
  if (!service) return null;

  const relatedServices = service.relatedServiceIds
    .map((id) => serviceSummaries.find((s) => s.id === id))
    .filter((s): s is (typeof serviceSummaries)[number] => Boolean(s));
  const relatedProducts = service.relatedProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is (typeof products)[number] => Boolean(p));

  const facts = [
    { label: "Price", value: service.priceDisplay },
    { label: "Downtime", value: service.downtime },
    { label: "Sessions", value: service.sessions },
    { label: "Follow-up", value: service.followUp ?? "On request" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
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

      {/* Header block */}
      <section className="mx-auto max-w-[1240px] px-6 pt-[56px] md:px-10 md:pt-[96px]">
        <SectionLabel>
          {service.eyebrow ?? `${service.category}${service.isSignature ? " · Signature treatment" : ""}`}
        </SectionLabel>
        <h1 className="display-tight mt-6 max-w-[18ch] font-display text-[34px] font-extralight text-ink md:text-[44px]">
          {service.headingSuffix ? `${service.name} ${service.headingSuffix}` : `${service.name} in Charlottesville, VA`}
        </h1>

        {service.standfirst ? (
          <p className="mt-5 font-body text-[20px] font-extralight leading-[1.4] text-walnut">
            {service.standfirst}
          </p>
        ) : null}

        {service.concernTags.length ? (
          <ul className="mt-8 flex flex-wrap gap-2">
            {service.concernTags.map((tag) => (
              <li key={tag.slug}>
                <Link
                  to="/concerns/$slug"
                  params={{ slug: tag.slug }}
                  className="label-xs inline-block rounded-[2px] border border-greige px-4 py-2 text-walnut transition-colors hover:border-champagne hover:text-ink"
                >
                  {tag.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}

        <dl className="mt-12 grid grid-cols-2 border-l border-t border-greige md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="border-b border-r border-greige px-6 py-7">
              <dt className="label-xs text-walnut">{fact.label}</dt>
              <dd className="mt-3 font-body text-[19px] font-medium text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Hero image */}
      <section className="mx-auto mt-12 max-w-[1240px] px-6 md:mt-16 md:px-10">
        {service.heroImage ? (
          <GradedImage
            src={service.heroImage}
            alt={`${service.name} at RIN Aesthetic Practice in Charlottesville, Virginia`}
            className="aspect-[16/9] w-full"
          />
        ) : (
          <Placeholder
            label="Treatment photography"
            alt={`Photography of ${service.name} to follow`}
            labelPosition="bottom-left"
            className="aspect-[16/9] w-full"
          />
        )}
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-[1240px] px-6 py-[72px] md:px-10 md:py-[120px]">
        <div className="measure space-y-6">
          {service.intro.map((paragraph, i) => (
            <p key={i} className="font-body text-[18px] font-light leading-[1.75] text-walnut">
              {paragraph}
            </p>
          ))}
        </div>
        {service.promises && service.promises.length ? (
          <div className="mt-16 grid border-t border-greige md:grid-cols-4">
            {service.promises.map((promise) => (
              <div
                key={promise.label}
                className="border-b border-greige py-7 md:border-b-0 md:border-r md:px-8 md:pb-0 md:pt-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <p className="label-xs text-ink">{promise.label}</p>
                <p className="mt-3 font-body text-[15px] font-light leading-[1.7] text-walnut">
                  {promise.body}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-10 flex flex-col items-start gap-6">
          <a href={practice.bookingUrl} target="_blank" rel="noreferrer" className={btnPrimary}>
            Book a consultation
          </a>
          <Link
            to="/find-your-treatment"
            className="font-body text-[15px] text-walnut underline decoration-greige underline-offset-4 transition-colors hover:text-ink hover:decoration-champagne"
          >
            Not sure this is the right one? Take the treatment finder
          </Link>
        </div>
      </section>

      {/* Two columns */}
      <section className="mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="display-tight font-display text-[28px] font-extralight text-ink md:text-[34px]">
              What it helps with
            </h2>
            <ul className="mt-8">
              {service.helpsWith.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-greige py-4 font-body text-[16px] font-light leading-[1.75] text-walnut"
                >
                  <span aria-hidden className="mt-[13px] h-px w-4 shrink-0 bg-champagne" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display-tight font-display text-[28px] font-extralight text-ink md:text-[34px]">
              Who it's for
            </h2>
            <ul className="mt-8">
              {service.suitableFor.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-greige py-4 font-body text-[16px] font-light leading-[1.75] text-walnut"
                >
                  <span aria-hidden className="mt-[13px] h-px w-4 shrink-0 bg-champagne" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {service.notSuitableNote ? (
              <p className="mt-8 font-body text-[15px] font-light leading-[1.7] text-walnut">
                {service.notSuitableNote}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* Variants band */}
      {service.variants && service.variants.length ? (
        <section className="bg-ink">
          <div className="mx-auto max-w-[1240px] px-6 py-[72px] md:px-10 md:py-[120px]">
            {service.variantsLabel ? (
              <SectionLabel>{service.variantsLabel}</SectionLabel>
            ) : null}
            {service.variantsHeading ? (
              <h2 className="display-tight mt-6 font-display text-[28px] font-extralight text-ivory md:text-[34px]">
                {service.variantsHeading}
              </h2>
            ) : null}
            {service.variantsIntro ? (
              <p className="measure mt-6 font-body text-[16px] font-light leading-[1.75] text-greige">
                {service.variantsIntro}
              </p>
            ) : null}
            <div className="mt-14 grid border-t border-walnut md:grid-cols-2 lg:grid-cols-4">
              {service.variants.map((variant) => (
                <div
                  key={`${variant.marker}-${variant.title}`}
                  className="border-b border-walnut px-0 py-10 md:border-r md:px-8 md:first:pl-0 lg:border-b-0 lg:last:border-r-0 lg:last:pr-0 md:[&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:pr-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(2)]:pr-8 lg:[&:nth-child(3)]:pl-8"
                >
                  <p className="label-xs text-champagne">
                    {variant.marker}
                  </p>
                  <h3 className="mt-4 font-body text-[19px] font-medium text-ivory">
                    {variant.title}
                  </h3>
                  <p className="mt-3 font-body text-[15px] font-light leading-[1.75] text-greige">
                    {variant.body}
                  </p>
                  {variant.points && variant.points.length ? (
                    <ul className="mt-5 space-y-2">
                      {variant.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 font-body text-[14px] font-light leading-[1.6] text-greige"
                        >
                          <span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-champagne" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {variant.placeholderImage ? (
                    <figure className="mt-7">
                      <img
                        src={variant.placeholderImage}
                        alt={`${variant.title} in use — low-resolution reference image`}
                        loading="lazy"
                        className="aspect-[16/9] w-full rounded-[2px] border border-walnut object-cover"
                      />
                      <figcaption className="label-xs mt-3 text-walnut">
                        Placeholder image
                      </figcaption>
                    </figure>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* What to expect */}
      <section className="mx-auto max-w-[1240px] px-6 py-[72px] md:px-10 md:py-[120px]">
        <h2 className="display-tight font-display text-[28px] font-extralight text-ink md:text-[34px]">
          What to expect
        </h2>
        <ol className="step-counter mt-12">
          {service.steps.map((step) => (
            <li key={step.title} className="grid gap-2 border-t border-greige py-8 md:grid-cols-[120px_1fr] md:gap-10">
              <span className="step-number label-xs text-champagne" aria-hidden />
              <div>
                <h3 className="font-body text-[19px] font-medium text-ink">{step.title}</h3>
                <p className="measure mt-3 font-body text-[16px] font-light leading-[1.75] text-walnut">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Care columns */}
      <section className="mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]">
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { heading: "Before your visit", items: service.preCare },
            { heading: "After your treatment", items: service.postCare },
          ].map((panel) => (
            <div key={panel.heading} className="rounded-[2px] border border-greige bg-white p-8 md:p-10">
              <h2 className="font-body text-[19px] font-medium text-ink">{panel.heading}</h2>
              {panel.items.length ? (
                <ul className="mt-6 space-y-4">
                  {panel.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 font-body text-[16px] font-light leading-[1.75] text-walnut"
                    >
                      <span aria-hidden className="mt-[13px] h-px w-4 shrink-0 bg-champagne" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-6 font-body text-[15px] font-light italic text-greige">
                  Instructions to be supplied by the provider
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]">
        <SectionLabel>Results</SectionLabel>
        <h2 className="display-tight mt-6 font-display text-[28px] font-extralight text-ink md:text-[34px]">
          Before and after
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {[1, 2, 3, 4].map((n) => (
            <Placeholder
              key={n}
              label={`Result ${n}`}
              alt={`Before and after result ${n} for ${service.name}`}
              className="aspect-square w-full"
            />
          ))}
        </div>
      </section>

      {/* Provider */}
      {service.providerParagraphs && service.providerParagraphs.length ? (
        <section className="mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]">
          <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1fr] md:gap-20">
            <GradedImage
              src={providerPortrait.url}
              alt="Portrait of Jyl, provider at RIN Aesthetic Practice"
              width={960}
              height={1280}
              className="aspect-[3/4] w-full"
            />
            <div>
              <h2 className="display-tight font-display text-[28px] font-extralight text-ink md:text-[34px]">
                {service.providerHeading ?? "Your provider"}
              </h2>
              <div className="measure mt-6 space-y-5">
                {service.providerParagraphs.map((paragraph, i) => (
                  <p key={i} className="font-body text-[16px] font-light leading-[1.75] text-walnut">
                    {paragraph}
                  </p>
                ))}
              </div>
              <Link
                to="/about"
                className="label-xs mt-8 inline-block text-champagne transition-colors hover:text-ink"
              >
                More about Jyl
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      {service.faqs.length ? (
        <section className="mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]">
          <h2 className="display-tight font-display text-[28px] font-extralight text-ink md:text-[34px]">
            Questions
          </h2>
          <div className="mt-12 border-t border-greige">
            {service.faqs.map((faq) => (
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

      {/* Related */}
      {relatedServices.length || relatedProducts.length ? (
        <section className="mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]">
          <h2 className="display-tight font-display text-[28px] font-extralight text-ink md:text-[34px]">
            Often considered together
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {relatedServices.map((item) => (
              <Link
                key={item.id}
                to="/treatments/$slug"
                params={{ slug: item.slug }}
                className="flex flex-col rounded-[2px] border border-greige bg-white p-7 transition-colors hover:border-champagne"
              >
                <span className="label-xs text-champagne">{item.category}</span>
                <span className="mt-4 font-body text-[19px] font-medium leading-[1.35] text-ink">
                  {item.name}
                </span>
                <span className="mt-3 font-body text-[15px] font-light leading-[1.7] text-walnut">
                  {item.description}
                </span>
                <span className="mt-6 font-body text-[15px] text-ink">{item.priceDisplay}</span>
              </Link>
            ))}
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-[2px] border border-greige bg-white p-7"
              >
                <span className="label-xs text-champagne">{item.category}</span>
                <span className="mt-4 font-body text-[19px] font-medium leading-[1.35] text-ink">
                  {item.name}
                </span>
                <span className="mt-3 font-body text-[15px] font-light leading-[1.7] text-walnut">
                  {item.description}
                </span>
                <span className="mt-6 font-body text-[15px] text-ink">{item.priceDisplay}</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Booking band */}
      <section className="border-y border-greige bg-white">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-[72px] md:flex-row md:items-center md:justify-between md:px-10 md:py-[96px]">
          <h2 className="display-tight max-w-[20ch] font-display text-[28px] font-extralight text-ink md:text-[34px]">
            Book a consultation with Jyl
          </h2>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <a href={practice.bookingUrl} target="_blank" rel="noreferrer" className={btnPrimary}>
              Book now
            </a>
            <a
              href={practice.phoneHref}
              className="font-body text-[16px] text-walnut transition-colors hover:text-ink"
            >
              {practice.phone}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
