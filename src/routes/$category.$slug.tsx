import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageShell } from "@/components/site/PageShell";
import { GradedImage } from "@/components/site/GradedImage";
import { BookingBand } from "@/components/site/BookingBand";
import providerPortrait from "@/assets/jyl-portrait-3x4.jpg.asset.json";
import { practice } from "@/data/site";
import { redirects } from "@/data/redirects";
import { serviceMedia } from "@/data/service-media";
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

function ServicePage() {
  const { category, slug } = Route.useParams();
  const service = getServiceByPath(category, slug);
  if (!service) return null;

  const media = serviceMedia[service.id];
  const chips = concernsForService(service);
  const related = service.pairsWith
    .map((id) => getServiceById(id))
    .filter((s) => s !== undefined);

  const facts = [
    { label: "Price", value: service.priceDisplay },
    { label: "Downtime", value: downtimeLabel[service.downtime] },
    { label: "Sessions", value: sessionsLabel(service.seriesSessions) },
    ...(service.repeatWeeks
      ? [{ label: "Repeat", value: `Every ${service.repeatWeeks} weeks` }]
      : []),
  ];

  const hasHelps = service.helpsWith.length > 0;
  const hasWho = service.whoItsFor.length > 0 || service.notFor !== "";

  return (
    <PageShell>
      {service.faqs.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: service.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            }),
          }}
        />
      ) : null}

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-6 py-[56px] md:grid-cols-12 md:gap-16 md:px-10 md:py-[96px]">
          <div className={media ? "md:col-span-7" : "md:col-span-9"}>
            <Label>{service.category}</Label>
            <h1 className="display-tight mt-6 max-w-[18ch] font-display text-[34px] font-extralight text-ink md:text-[44px]">
              {service.name}
            </h1>
            <p className="measure mt-5 font-body text-[20px] font-extralight leading-[1.4] text-walnut">
              {service.shortDescription}
            </p>
            {service.intro.length ? (
              <div className="measure mt-8 space-y-6">
                {service.intro.map((p, i) => (
                  <p key={i} className="font-body text-[18px] font-light leading-[1.75] text-walnut">
                    {p}
                  </p>
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
          </div>
          {media ? (
            <div className="flex items-center justify-center p-10 md:col-span-5">
              <img
                src={media.src}
                alt={media.alt}
                className="mx-auto h-auto max-h-[420px] w-auto max-w-full object-contain md:max-h-[620px]"
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-[56px] md:px-10 md:py-[80px]">
        {chips.length ? (
          <ul className="flex flex-wrap gap-2">
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
        <dl className="mt-12 grid grid-cols-2 border-l border-t border-greige md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="border-b border-r border-greige px-6 py-7">
              <dt className="label-xs text-walnut">{fact.label}</dt>
              <dd className="mt-3 font-body text-[19px] font-medium text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

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
                  <p className="mt-8 font-body text-[15px] font-light leading-[1.7] text-walnut">
                    {service.notFor}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {service.steps.length ? (
        <section className={section}>
          <h2 className={h2}>What to expect</h2>
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
              <h2 className={h2}>How Jyl approaches it</h2>
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

      {related.length ? (
        <section className={section}>
          <h2 className={h2}>Often considered alongside</h2>
          <div className="mt-12 border-t border-greige">
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
                        {item.name}
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
          </div>
        </section>
      ) : null}

      <BookingBand />
    </PageShell>
  );
}
