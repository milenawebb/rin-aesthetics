import { Link } from "@tanstack/react-router";
import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { practice } from "@/data/site";
import {
  bookingBand,
  concerns,
  concernsSection,
  hero,
  provider,
  resultsSection,
  signature,
  testimonials,
  testimonialsSection,
} from "@/data/home";

const section = "mx-auto max-w-[1240px] px-6 py-[72px] md:px-10 md:py-[120px]";
const heading = "font-display font-light text-[26px] md:text-[34px] leading-[1.2] text-ink";

export function Home() {
  return (
    <>
      <section className="relative flex h-[82vh] min-h-[520px] items-center justify-center overflow-hidden">
        <Placeholder
          label={hero.placeholderLabel}
          alt={hero.imageAlt}
          className="absolute inset-0 h-full w-full rounded-none"
        />
        <div className="absolute inset-0 bg-ink/45" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-[1240px] px-6 text-center">
          <h1 className="font-display text-[34px] font-light leading-[1.15] text-ivory md:text-[56px]">
            {hero.headline}
          </h1>
          <p className="mt-6 text-[14px] tracking-[0.06em] text-greige">{practice.location}</p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={practice.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-[2px] bg-ivory px-8 py-4 text-[12px] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-champagne sm:w-auto"
            >
              {hero.primaryCta}
            </a>
            <Link
              to="/find-your-treatment"
              className="w-full rounded-[2px] border border-greige px-8 py-4 text-[12px] uppercase tracking-[0.16em] text-ivory transition-colors hover:border-champagne hover:text-champagne sm:w-auto"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <Reveal as="section" className={section}>
        <h2 className={heading}>{concernsSection.heading}</h2>
        <p className="measure mt-5 text-[16px] leading-[1.7] text-walnut">
          {concernsSection.intro}
        </p>
        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {concerns.map((concern) => (
            <li key={concern.slug}>
              <Link
                to="/concerns/$slug"
                params={{ slug: concern.slug }}
                className="flex h-full flex-col justify-between rounded-[2px] border border-greige bg-white p-6 transition-colors hover:border-champagne md:p-8"
              >
                <span className="label-xs text-olive">{concern.label}</span>
                <span className="mt-10 font-display text-[20px] font-light leading-[1.25] text-ink">
                  {concern.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className={section}>
        <h2 className={heading}>{resultsSection.heading}</h2>
        <p className="measure mt-5 text-[16px] leading-[1.7] text-walnut">{resultsSection.intro}</p>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: resultsSection.count }).map((_, i) => (
            <Placeholder
              key={i}
              label={resultsSection.placeholderLabel}
              alt={`Before and after treatment photograph ${i + 1}`}
              className="aspect-square"
            />
          ))}
        </div>
        <Link
          to="/results"
          className="label-xs mt-10 inline-block border-b border-champagne pb-1 text-ink transition-colors hover:text-champagne"
        >
          {resultsSection.linkLabel}
        </Link>
      </Reveal>

      <Reveal as="section" className="bg-ink">
        <div className="mx-auto max-w-[1240px] px-6 py-[72px] md:px-10 md:py-[120px]">
          <p className="label-xs text-champagne">{signature.label}</p>
          <h2 className="mt-6 font-display text-[26px] font-light leading-[1.2] text-ivory md:text-[34px]">
            {signature.heading}
          </h2>
          <p className="measure mt-6 text-[16px] leading-[1.7] text-greige">{signature.body}</p>
          <p className="mt-8 font-display text-[26px] font-light text-champagne">
            {signature.price}
          </p>
          <Link
            to="/treatments"
            className="mt-10 inline-block rounded-[2px] border border-greige px-8 py-4 text-[12px] uppercase tracking-[0.16em] text-ivory transition-colors hover:border-champagne hover:text-champagne"
          >
            {signature.cta}
          </Link>
        </div>
      </Reveal>

      <Reveal as="section" className={section}>
        <h2 className={heading}>{provider.heading}</h2>
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <Placeholder
            label={provider.portraitLabel}
            alt={provider.portraitAlt}
            className="aspect-[3/4] w-full"
          />
          <div className="self-center">
            <h3 className="font-display text-[26px] font-light text-ink md:text-[34px]">
              {provider.name}
            </h3>
            {provider.paragraphs.map((paragraph, i) => (
              <p key={i} className="measure mt-6 text-[16px] leading-[1.7] text-walnut">
                {paragraph}
              </p>
            ))}
            <Link
              to="/about"
              className="label-xs mt-10 inline-block border-b border-champagne pb-1 text-ink transition-colors hover:text-champagne"
            >
              {provider.linkLabel}
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className={section}>
        <h2 className={heading}>{testimonialsSection.heading}</h2>
        <div className="mt-14 grid gap-14 md:grid-cols-3 md:gap-12">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name}>
              <blockquote className="font-display text-[20px] font-light leading-[1.5] text-ink">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5 text-[13px] tracking-[0.06em] text-walnut">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-greige bg-ivory">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-8 px-6 py-[72px] md:flex-row md:items-end md:justify-between md:px-10 md:py-[120px]">
          <div>
            <h2 className={heading}>{bookingBand.heading}</h2>
            <p className="measure mt-5 text-[16px] leading-[1.7] text-walnut">{bookingBand.body}</p>
          </div>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a
              href={practice.phoneHref}
              className="font-display text-[26px] font-light text-ink transition-colors hover:text-champagne"
            >
              {practice.phone}
            </a>
            <a
              href={practice.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-[2px] bg-ink px-8 py-4 text-[12px] uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-walnut"
            >
              {bookingBand.cta}
            </a>
          </div>
        </div>
      </Reveal>
    </>
  );
}