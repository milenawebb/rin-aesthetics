import { BookingBand } from "@/components/site/BookingBand";
import { resultsNotice } from "@/data/gallery";
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageShell } from "@/components/site/PageShell";
import { GradedImage } from "@/components/site/GradedImage";
import providerPortrait from "@/assets/jyl-portrait-3x4.jpg.asset.json";
import { practice } from "@/data/site";
import { redirects } from "@/data/redirects";
import { ProductList } from "@/components/site/ProductList";
import { products } from "@/data/products";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryForService } from "@/data/gallery";
import { bookingActions, serviceBookingUrl } from "@/data/services";
import { concerns } from "@/data/concerns";
import { hasContent, pageBullets, seriesById, type CareSeries } from "@/data/careEmails";
import { serviceMedia, technologyMedia } from "@/data/service-media";
import {
  concernPathSlug,
  concernsForService,
  downtimeLabel,
  getServiceById,
  getServiceByPath,
  sessionsLabel,
  splitSlug,
} from "@/data/lookup";

export const Route = createFileRoute("/$category/$slug")({
  loader: ({ params }) => {
    const path = `/${params.category}/${params.slug}`;
    const target = redirects[path];
    if (target) throw redirect({ href: target, statusCode: 301 });
    if (!getServiceByPath(params.category, params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const service = getServiceByPath(params.category, params.slug);
    if (!service) return { meta: [{ title: "Unavailable | RIN Aesthetic Practice" }] };
    const title = `${service.name} in Charlottesville, VA | RIN Aesthetic Practice`;
    return {
      meta: [
        { title },
        { name: "description", content: service.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: service.shortDescription },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServicePage,
});

const btnPrimary =
  "btn-label inline-flex items-center justify-center rounded-[2px] bg-ink px-8 py-4 text-ivory transition-colors hover:bg-walnut";
const h2 = "display-tight font-display text-[28px] font-extralight text-ink md:text-[34px]";
const section = "mx-auto max-w-[1240px] px-6 pb-[72px] md:px-10 md:pb-[120px]";

function Label({ children }: { children: ReactNode }) {
  return <p className="label-xs text-champagne">{children}</p>;
}

function LineList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-4 border-b border-greige py-4 font-body text-[16px] font-light leading-[1.75] text-walnut"
        >
          <span aria-hidden className="mt-[13px] h-px w-4 shrink-0 bg-champagne" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function careLines(series: CareSeries | undefined) {
  if (!series || !hasContent(series)) return [];
  return pageBullets(series);
}

function ServicePage() {
  const { category, slug } = Route.useParams();
  const service = getServiceByPath(category, slug);
  if (!service) return null;

  const media = serviceMedia[service.id];
  const chips = concernsForService(service);
  const firstConcern = service.concernTags.length
    ? concerns.find((c) => c.tags.includes(service.concernTags[0]!))
    : undefined;
  const related = service.pairsWith.map((id) => getServiceById(id)).filter((s) => s !== undefined);
  const relatedProducts = service.pairsWith
    .map((id) => products.find((p) => p.id === id))
    .filter((p) => p !== undefined);
  const followUp = service.pairsWith
    .map((id) => bookingActions.find((b) => b.id === id))
    .find((b) => b !== undefined);
  const results = galleryForService(service.id);

  const pre = careLines(seriesById(service.precareId));
  const after = careLines(seriesById(service.aftercareId));
  const careColumns = [
    { heading: "Before your visit", items: pre },
    { heading: "After your treatment", items: after },
  ].filter((c) => c.items.length > 0);

  const facts = [
    { label: "Price", value: service.priceDisplay },
    { label: "Downtime", value: downtimeLabel[service.downtime] },
    { label: "Sessions", value: sessionsLabel(service.seriesSessions) },
    ...(followUp
      ? [{ label: "Follow-up", value: followUp.priceDisplay === "Free" ? "Complimentary" : followUp.priceDisplay }]
      : []),
  ];

  const hasHelps = service.helpsWith.length > 0;
  const hasWho = service.whoItsFor.length > 0 || service.notFor !== "";
  const approvedFaqs = service.faqs.filter((f) => !f.answer.startsWith("NEEDS APPROVAL"));

  return (
    <PageShell>
      {approvedFaqs.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: approvedFaqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            }),
          }}
        />
      ) : null}

      {/* 1. Header */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1240px] px-6 pt-[56px] pb-[56px] md:px-10 md:pt-[96px] md:pb-[80px]">
          <Label>{service.eyebrow ?? service.category}</Label>
          <h1 className="display-tight mt-6 max-w-[28ch] font-display text-[34px] font-extralight text-ink md:text-[44px]">
            <span>{service.name}</span>
            <span className="inline-block whitespace-nowrap md:block">in Charlottesville, VA</span>
          </h1>
          <p className="measure mt-5 font-body text-[20px] font-extralight leading-[1.4] text-walnut">
            {service.tagline ?? service.shortDescription}
          </p>
          <dl className={`mt-12 grid grid-cols-2 border-l border-t border-greige ${facts.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-r border-greige px-6 py-7">
                <dt className="label-xs text-walnut">{fact.label}</dt>
                <dd className="mt-3 font-body text-[19px] font-medium text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
          {chips.length ? (
            <ul className="mt-8 flex flex-wrap gap-2">
              {chips.map((c) => (
                <li key={c.id}>
                  <Link
                    to="/concerns/$slug"
                    params={{ slug: concernPathSlug(c) }}
                    className="label-xs inline-block rounded-[2px] border border-greige px-4 py-2 text-walnut transition-colors hover:border-champagne hover:text-ink"
                  >
                    {c.h1}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {/* 2. Hero image */}
      {media ? (
        <section className="mx-auto max-w-[1240px] px-6 pt-[56px] md:px-10 md:pt-[88px]">
          <div className="flex aspect-[16/9] w-full items-center justify-center bg-ivory p-10">
            <img src={media.src} alt={media.alt} className="h-full w-auto max-w-full object-contain" />
          </div>
        </section>
      ) : null}

      {/* 3. Intro and actions */}
      <section
        className={`mx-auto max-w-[1240px] px-6 md:px-10 ${media || service.intro.length ? "py-[56px] md:py-[88px]" : "pt-0 pb-[56px] md:pb-[88px]"}`}
      >
        {service.intro.length ? (
          <div className="measure mb-10 space-y-6">
            {service.intro.map((p, i) => (
              <p key={i} className="font-body text-[18px] font-light leading-[1.75] text-walnut">
                {p}
              </p>
            ))}
          </div>
        ) : null}
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={serviceBookingUrl(service)} target="_blank" rel="noopener" className={btnPrimary}>
              Book this treatment
            </a>
            <a
              href={practice.bookingUrl}
              target="_blank"
              rel="noopener"
              className="btn-label inline-flex items-center justify-center rounded-[2px] border border-greige px-8 py-4 text-ink transition-colors hover:border-ink"
            >
              Book a consultation
            </a>
          </div>
          {firstConcern ? (
            <Link
              to="/concerns/$slug"
              params={{ slug: concernPathSlug(firstConcern) }}
              className="font-body text-[15px] text-walnut underline decoration-greige underline-offset-4 transition-colors hover:text-ink hover:decoration-champagne"
            >
              Not sure this is right? See what else treats this
            </Link>
          ) : null}
        </div>
      </section>

      {service.promises && service.promises.length ? (
        <section className={section}>
          <div className="grid border-t border-greige md:grid-cols-4">
            {service.promises.map((promise) => (
              <div
                key={promise.label}
                className="border-b border-greige py-7 md:border-b-0 md:border-r md:px-8 md:pb-0 md:pt-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <p className="label-xs text-ink">{promise.label}</p>
                <p className="mt-3 font-body text-[15px] font-light leading-[1.7] text-walnut">{promise.text}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* 4 and 5. Helps with, who it's for */}
      {hasHelps || hasWho ? (
        <section className={section}>
          <div className="grid gap-14 md:grid-cols-2 md:gap-20">
            {hasHelps ? (
              <div>
                <h2 className={h2}>What it helps with</h2>
                <LineList items={service.helpsWith} />
              </div>
            ) : null}
            {hasWho ? (
              <div>
                <h2 className={h2}>Who it's for</h2>
                {service.whoItsFor.length ? <LineList items={service.whoItsFor} /> : null}
                {service.notFor ? (
                  <p className="mt-8 font-body text-[15px] font-light leading-[1.7] text-walnut">{service.notFor}</p>
                ) : null}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* 6. Options */}
      {service.options.length ? (
        <section className={section}>
          <h2 className={h2}>Options</h2>
          <table className="mt-10 w-full border-t border-greige text-left">
            <thead className="sr-only">
              <tr>
                <th>Option</th>
                <th>Price</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {service.options.map((o) => (
                <tr key={o.name} className="grid gap-2 border-b border-greige py-6 md:table-row">
                  <td className="font-body text-[19px] font-medium text-ink md:w-[30%] md:py-6">{o.name}</td>
                  <td className="font-body text-[17px] text-ink md:w-[15%] md:py-6">{o.price}</td>
                  <td className="font-body text-[15px] font-light leading-[1.7] text-walnut md:py-6">{o.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : null}

      {service.technologies && service.technologies.length ? (
        <section className="mb-[72px] bg-ink md:mb-[120px]">
          <div className="mx-auto max-w-[1240px] px-6 py-[72px] md:px-10 md:py-[120px]">
            <Label>What's in it</Label>
            {service.technologiesHeading ? (
              <h2 className="display-tight mt-6 font-display text-[28px] font-extralight text-ivory md:text-[34px]">
                {service.technologiesHeading}
              </h2>
            ) : null}
            {service.technologiesIntro ? (
              <p className="measure mt-6 font-body text-[16px] font-light leading-[1.75] text-greige">
                {service.technologiesIntro}
              </p>
            ) : null}
            <div className="mt-14 grid border-t border-walnut md:grid-cols-2 lg:grid-cols-4">
              {service.technologies.map((tech, i) => {
                const image = technologyMedia[service.id]?.[i];
                return (
                  <div
                    key={`${tech.badge}-${tech.name}`}
                    className="border-b border-walnut px-0 py-10 md:border-r md:px-8 md:first:pl-0 lg:border-b-0 lg:last:border-r-0 lg:last:pr-0 md:[&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:pr-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(2)]:pr-8 lg:[&:nth-child(3)]:pl-8"
                  >
                    <p className="label-xs text-champagne">{tech.badge}</p>
                    <h3 className="mt-4 font-body text-[19px] font-medium text-ivory">{tech.name}</h3>
                    <p className="mt-3 font-body text-[15px] font-light leading-[1.75] text-greige">
                      {tech.description}
                    </p>
                    {tech.bullets.length ? (
                      <ul className="mt-5 space-y-2">
                        {tech.bullets.map((b) => (
                          <li key={b} className="flex gap-3 font-body text-[14px] font-light leading-[1.6] text-greige">
                            <span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-champagne" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {image ? (
                      <figure className="mt-7">
                        <img
                          src={image}
                          alt={`${tech.name} in use`}
                          loading="lazy"
                          className="aspect-[16/9] w-full rounded-[2px] border border-walnut object-cover"
                        />
                        <figcaption className="label-xs mt-3 text-walnut">Placeholder image</figcaption>
                      </figure>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {/* 7. What to expect */}
      {service.steps.length ? (
        <section className={section}>
          <h2 className={h2}>What to expect</h2>
          <ol className="step-counter mt-12">
            {service.steps.map((step) => (
              <li key={step.title} className="grid gap-2 border-t border-greige py-8 md:grid-cols-[120px_1fr] md:gap-10">
                <span className="step-number label-xs text-champagne" aria-hidden />
                <div>
                  <h3 className="font-body text-[19px] font-medium text-ink">{step.title}</h3>
                  <p className="measure mt-3 font-body text-[16px] font-light leading-[1.75] text-walnut">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {/* 8. Care, read from the same records as the care emails */}
      {careColumns.length ? (
        <section className={section}>
          <div className="grid gap-14 md:grid-cols-2 md:gap-20">
            {careColumns.map((col) => (
              <div key={col.heading}>
                <h2 className={h2}>{col.heading}</h2>
                <LineList items={col.items} />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* 9. Results */}
      {results.length ? (
        <section className={section}>
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <h2 className={h2}>Results</h2>
            {resultsNotice(results) ? (
              <p className="measure mt-6 font-body text-[16px] font-light leading-[1.75] text-walnut">
                {resultsNotice(results)}
              </p>
            ) : null}
          </div>
          <div className="mt-12">
            <GalleryGrid items={results} />
          </div>
        </section>
      ) : null}

      {service.howJylApproaches ? (
        <section className={section}>
          <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1fr] md:gap-20">
            <GradedImage
              src={providerPortrait.url}
              alt="Jyl Carter, aesthetic nurse practitioner, at RIN Aesthetic Practice"
              width={960}
              height={1280}
              className="aspect-[3/4] w-full"
            />
            <div>
              <h2 className={h2}>{service.howJylApproachesHeading ?? "How Jyl approaches this"}</h2>
              <p className="measure mt-6 font-body text-[16px] font-light leading-[1.75] text-walnut">
                {service.howJylApproaches}
              </p>
              <Link to="/about" className="label-xs mt-8 inline-block text-champagne transition-colors hover:text-ink">
                More about Jyl
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {service.faqs.length ? (
        <section className={section}>
          <h2 className={h2}>Questions</h2>
          <div className="mt-12 border-t border-greige">
            {service.faqs.map((faq) => (
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

      {related.length || relatedProducts.length ? (
        <section className={section}>
          <h2 className={h2}>Often considered alongside</h2>
          {related.length ? (<div className="mt-12 border-t border-greige">
            {related.map((item) => {
              const p = splitSlug(item.slug);
              return (
                <Link
                  key={item.id}
                  to="/$category/$slug"
                  params={{ category: p.category, slug: p.slug }}
                  className="group -mx-4 block border-b border-greige md:-mx-6"
                >
                  <div className="grid grid-cols-1 items-baseline gap-2 px-4 py-8 transition-colors duration-300 group-hover:bg-white md:grid-cols-[200px_1fr_auto] md:gap-10 md:px-6">
                    <span className="label-xs text-olive">{item.category}</span>
                    <span className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-10">
                      <span className="font-body text-[22px] font-extralight leading-[1.25] tracking-[-0.02em] text-ink transition-transform duration-300 group-hover:translate-x-2 md:min-w-[280px]">
                        {item.shortName}
                      </span>
                      <span className="font-body text-[15px] font-light leading-[1.7] text-walnut">
                        {item.shortDescription}
                      </span>
                    </span>
                    <span className="font-body text-[15px] font-light text-ink md:text-right">
                      {item.priceDisplay}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>) : null}
          {relatedProducts.length ? (
            <div className="mt-12">
              <p className="label-xs mb-6 text-olive">Daily care</p>
              <ProductList items={relatedProducts} />
            </div>
          ) : null}
        </section>
      ) : null}

      <BookingBand treatment={{ name: service.name, price: service.priceDisplay, bookingUrl: serviceBookingUrl(service) }} />
    </PageShell>
  );
}
