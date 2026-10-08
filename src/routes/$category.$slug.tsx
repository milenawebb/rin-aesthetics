import { providerName, providerCredential, providerCredentialTitle } from "@/data/provider";
import { consultation, consultationFeeLine } from "@/data/consultation";
import { seoHead } from "@/lib/seo-head";
import { BookingBand } from "@/components/site/BookingBand";
import { resultsNotice } from "@/data/gallery";
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { PageShell } from "@/components/site/PageShell";
import { GradedImage } from "@/components/site/GradedImage";
import { portraitColor, portraitSrc, portraitJpgSrcSet, portraitWebpSrcSet } from "@/lib/portrait";
import { treatingColor, TREATING_PHOTO_SERVICE_IDS, treatingAlt, treatingHeight, treatingJpgSrcSet, treatingSrc, treatingWebpSrcSet, treatingWidth } from "@/lib/treating";
import { practice } from "@/data/site";
import { redirects } from "@/data/redirects";
import { ProductList } from "@/components/site/ProductList";
import { products } from "@/data/products";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryForService } from "@/data/gallery";
import { bookingActions, serviceBookingUrl } from "@/data/services";
import { concerns } from "@/data/concerns";
import { hasContent, pageGroups, seriesById, type CareGroup, type CareSeries } from "@/data/careEmails";
import { keepBrandTogether } from "@/data/lookup";
import { serviceMedia, technologyLead, technologyMedia } from "@/data/service-media";
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
  head: ({ params }) => seoHead(`/${params.category}/${params.slug}`),
  component: ServicePage,
});

const btnPrimary =
  "btn-label inline-flex items-center justify-center rounded-[2px] bg-ink px-8 py-4 text-ivory transition-colors hover:bg-walnut";
const h2 = "type-h2 text-ink";
const section = "section-space site-container";

function Label({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return <p className={`label-xs ${onDark ? "text-champagne" : "text-champagne-light"}`}>{children}</p>;
}

function LineList({ items }: { items: string[] }) {
  return (
    <ul className="rule-list mt-8 space-y-5">
      {items.map((item) => (
        <li key={item} className="font-body text-[16px] font-light leading-[1.75] text-walnut">
          {item}
        </li>
      ))}
    </ul>
  );
}

function careLines(series: CareSeries | undefined): CareGroup[] {
  if (!series || !hasContent(series)) return [];
  return pageGroups(series);
}

function CareTimeline({ groups, id }: { groups: CareGroup[]; id: string }) {
  const [expanded, setExpanded] = useState(false);
  const [first, ...rest] = groups;
  if (!first) return null;
  if (groups.length === 1) return <CareBullets items={first.bullets} className="mt-8" />;
  const remaining = rest.reduce((n, g) => n + g.bullets.length, 0);
  const restId = `care-rest-${id}`;
  const renderGroup = (g: CareGroup, i: number) => (
    <div key={`${g.offsetHours}-${i}`} className="mt-8">
      <p className="label-xs text-walnut">{g.label}</p>
      <CareBullets items={g.bullets} className="mt-4" />
    </div>
  );
  return (
    <>
      {first ? renderGroup(first, 0) : null}
      <div id={restId} hidden={!expanded}>
        {rest.map((g, i) => renderGroup(g, i + 1))}
      </div>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={restId}
        onClick={() => setExpanded((v) => !v)}
        className="btn-label mt-8 border-b border-champagne pb-1 text-ink"
      >
        {expanded ? "Show less" : `See the full timeline (${remaining} more)`}
      </button>
    </>
  );
}

function CareBullets({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`rule-list space-y-5 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="font-body text-[16px] font-light leading-[1.75] text-walnut">
          {item}
        </li>
      ))}
    </ul>
  );
}

function ServicePage() {
  const { category, slug } = Route.useParams();
  const service = getServiceByPath(category, slug);
  if (!service) return null;

  // A service with a captioned device photo in its technology band shows the device there only.
  const media = technologyLead[service.id] ? undefined : serviceMedia[service.id];
  const eyebrow = service.eyebrow ?? service.category;
  const subtitle = service.tagline ?? service.shortDescription;
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


  const hasNotes = service.options.some((o) => o.note.trim().length > 0);
  const hasOptionLinks = service.options.some((o) => o.bookingUrl);
  const basisLines = service.options.filter((o) => o.basis).map((o) => `${o.price} ${o.basis}`);
  const facts = [
    { label: "Price", value: basisLines[0] ?? service.priceDisplay },
    { label: "Downtime", value: downtimeLabel[service.downtime] },
    { label: "Sessions", value: service.sessionsDisplay ?? sessionsLabel(service.seriesSessions) },
    ...(followUp
      ? [{ label: "Follow-up", value: followUp.priceDisplay === "Free" ? "Complimentary" : followUp.priceDisplay }]
      : []),
  ].filter((fact) => fact.value.trim().length > 0);

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
        <div className={`site-container pt-[56px] md:pt-[96px] ${media ? "pb-[56px] md:pb-[80px]" : "pb-0"}`}>
          {eyebrow ? <Label>{eyebrow}</Label> : null}
          <h1 className="type-h1 mt-6 max-w-[22ch] text-ink">
            <span>{keepBrandTogether(service.displayName ?? service.name)}</span>
          </h1>
          {subtitle ? (
            <p className="measure mt-5 font-body text-[20px] font-extralight leading-[1.4] text-walnut">
              {subtitle}
            </p>
          ) : null}
          {facts.length ? (
            <dl className={`mt-12 grid grid-cols-1 border-l border-t border-greige ${facts.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
              {facts.map((fact) => (
                <div key={fact.label} className="min-w-0 border-b border-r border-greige px-6 py-7 md:px-4 lg:px-6">
                  <dt className="label-xs text-walnut">{fact.label}</dt>
                  <dd className="mt-3 font-body text-[19px] font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
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
        <section className="site-container pb-[56px] md:pb-[88px]">
          <div className="flex aspect-[16/9] w-full items-center justify-center bg-ivory p-10">
            <img src={media.src} alt={media.alt} width={media.width} height={media.height} loading="eager" fetchPriority="high" className="h-full w-auto max-w-full object-contain" />
          </div>
        </section>
      ) : null}

      {/* 3. Intro and actions */}
      <section
        className={`site-container pb-[56px] md:pb-[88px] ${media ? "pt-0" : "pt-12"}`}
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
              {service.bookLabel ?? "Book this treatment"}
            </a>
            <a
              href={consultation.bookingUrl}
              target="_blank"
              rel="noopener"
              className="btn-label inline-flex items-center justify-center rounded-[2px] border border-greige px-8 py-4 text-ink transition-colors hover:border-ink"
            >
              Book a consultation
            </a>
          </div>
          <p className="-mt-3 font-body text-[14px] font-light leading-[1.6] text-walnut">{consultationFeeLine}</p>
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
                {hasNotes ? <th>Note</th> : null}
                {hasOptionLinks ? <th>Book</th> : null}
              </tr>
            </thead>
            <tbody>
              {service.options.map((o) => (
                <tr key={o.name} className="grid gap-2 border-b border-greige py-6 md:table-row">
                  <td className="font-body text-[19px] font-medium text-ink md:w-[30%] md:py-6">{o.name}</td>
                  <td className="font-body text-[17px] text-ink md:w-[15%] md:py-6">{o.price}</td>
                  {hasNotes ? (
                    <td className="font-body text-[15px] font-light leading-[1.7] text-walnut md:py-6">{o.note}</td>
                  ) : null}
                  {hasOptionLinks ? (
                    <td className="md:py-6 md:pl-6 md:text-right md:whitespace-nowrap">
                      {o.bookingUrl ? (
                        <a
                          href={o.bookingUrl}
                          target="_blank"
                          rel="noopener"
                          className="font-body text-[15px] font-medium text-ink underline decoration-greige underline-offset-4 transition-colors hover:decoration-champagne"
                        >
                          Book {o.name.charAt(0).toLowerCase() + o.name.slice(1)}
                        </a>
                      ) : null}
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : null}

      {service.technologies && service.technologies.length ? (
        <section className="mb-[72px] bg-ink md:mb-[112px]">
          <div className="site-container band-space">
            <div className={technologyLead[service.id] ? "md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center md:gap-12 lg:gap-16" : undefined}>
              <div>
                <Label onDark>What's in it</Label>
                {service.technologiesHeading ? (
                  <h2 className="type-h2 mt-6 text-ivory">
                    {service.technologiesHeading}
                  </h2>
                ) : null}
                {service.technologiesIntro ? (
                  <p className="measure mt-6 font-body text-[16px] font-light leading-[1.75] text-greige">
                    {service.technologiesIntro}
                  </p>
                ) : null}
              </div>
              {technologyLead[service.id] ? (
                <figure className="-mx-6 mt-12 md:mx-0 md:mt-0 md:w-full">
                  <img
                    src={technologyLead[service.id]!.src}
                    alt={technologyLead[service.id]!.alt}
                    width={1000}
                    height={1170}
                    loading="lazy"
                    className="block h-auto w-full md:rounded-[2px]"
                  />
                  <figcaption className="label-xs mt-3 px-6 text-left text-greige md:px-0">{technologyLead[service.id]!.caption}</figcaption>
                </figure>
              ) : null}
            </div>
            <div className="mt-14 grid border-t border-walnut md:grid-cols-2 lg:grid-cols-4">
              {service.technologies.map((tech, i) => {
                const image = technologyMedia[service.id]?.[i];
                return (
                  <div
                    key={`${tech.badge}-${tech.name}`}
                    className="border-b border-walnut px-0 py-10 md:px-8 md:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
                  >
                    <p className="label-xs text-champagne">{tech.badge}</p>
                    <h3 className="mt-4 font-body text-[19px] font-medium text-ivory">{tech.name}</h3>
                    <p className="mt-3 font-body text-[15px] font-light leading-[1.75] text-greige">
                      {tech.description}
                    </p>
                    {tech.bullets.length ? (
                      <ul className="rule-list mt-5 space-y-2">
                        {tech.bullets.map((b) => (
                          <li key={b} className="font-body text-[14px] font-light leading-[1.6] text-greige">
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {image ? (
                      <picture>
                        <source type="image/webp" srcSet={image.webp} />
                        <img
                          src={image.jpg}
                          alt={`${tech.name} in use`}
                          width={522}
                          height={294}
                          loading="lazy"
                          className="mt-7 block aspect-[16/9] w-full object-cover object-center"
                        />
                      </picture>
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
              <li key={step.title} className="grid gap-2 border-t border-greige py-8 md:grid-cols-[20px_minmax(0,1fr)] md:gap-x-6 md:gap-y-0 lg:grid-cols-[120px_1fr] lg:gap-10">
                <span className="step-number label-xs text-champagne-light" aria-hidden />
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
                <CareTimeline groups={col.items} id={col.heading === "Before your visit" ? "pre" : "after"} />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* 9. Results */}
      {results.length ? (
        <section className={section}>
          <div className="site-container">
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
            {TREATING_PHOTO_SERVICE_IDS.has(service.id) ? (
              <GradedImage
                src={treatingSrc}
                srcSet={treatingJpgSrcSet}
                webpSrcSet={treatingWebpSrcSet}
                sizes="(min-width: 1280px) 480px, (min-width: 768px) 40vw, calc(100vw - 48px)"
                alt={treatingAlt}
                color={treatingColor}
                width={treatingWidth}
                height={treatingHeight}
                className="aspect-[3/4] w-full"
              />
            ) : (
              <GradedImage
                src={portraitSrc}
                srcSet={portraitJpgSrcSet}
                webpSrcSet={portraitWebpSrcSet}
                sizes="(min-width: 1280px) 480px, (min-width: 768px) 40vw, calc(100vw - 48px)"
                alt={`${providerName}, ${providerCredential}, at RIN Aesthetic Practice`}
                color={portraitColor}
                width={1123}
                height={1401}
                className="aspect-[3/4] w-full"
              />
            )}
            <div>
              <h2 className={h2}>{service.howJylApproachesHeading ?? "How Jyl approaches this"}</h2>
              <p className="measure mt-6 font-body text-[16px] font-light leading-[1.75] text-walnut">
                {service.howJylApproaches}
              </p>
              <Link to="/about" className="label-xs mt-8 inline-block text-champagne-light transition-colors hover:text-ink">
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
                  <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 px-4 py-8 transition-colors duration-300 group-hover:bg-white md:px-6 lg:grid lg:grid-cols-[200px_1fr_auto] lg:gap-10">
                    <span className="label-xs w-full text-olive-light lg:w-auto">{item.category}</span>
                    <span className="contents lg:flex lg:flex-row lg:items-baseline lg:gap-10">
                      <span className="font-body text-[22px] font-extralight leading-[1.25] tracking-[-0.02em] text-ink transition-transform duration-300 group-hover:translate-x-2 min-w-0 lg:min-w-[280px]">
                        {item.shortName}
                      </span>
                      <span className="order-last w-full font-body text-[15px] font-light leading-[1.7] text-walnut lg:order-none lg:w-auto">
                        {item.shortDescription}
                      </span>
                    </span>
                    <span className="ml-auto whitespace-nowrap font-body text-[15px] font-light text-ink lg:ml-0 lg:whitespace-normal lg:text-right">
                      {item.priceDisplay}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>) : null}
          {relatedProducts.length ? (
            <div className="mt-12">
              <p className="label-xs mb-6 text-olive-light">Daily care</p>
              <ProductList items={relatedProducts} />
            </div>
          ) : null}
        </section>
      ) : null}

      <BookingBand treatment={{ name: service.name, price: service.priceDisplay, priceLines: basisLines.length ? basisLines : undefined, bookingUrl: serviceBookingUrl(service), bookLabel: service.bookLabel }} />
    </PageShell>
  );
}
