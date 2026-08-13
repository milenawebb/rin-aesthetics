import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Placeholder } from "@/components/site/Placeholder";
import heroAsset from "@/assets/hero.png.asset.json";
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
const heading =
  "display-tight font-display opsz-md font-normal text-[28px] md:text-[34px] text-ink";
const body = "measure font-body text-[16px] font-light leading-[1.75] text-walnut";
const btn = "btn-label rounded-[2px]";

export function Home() {
  return (
    <>
      <section className="relative bg-ivory md:flex md:h-[85vh] md:min-h-[520px] md:items-center md:justify-center md:overflow-hidden">
        <img
          src={heroAsset.url}
          alt={hero.imageAlt}
          className="aspect-[4/3] w-full object-cover object-[65%_center] md:absolute md:inset-0 md:h-full md:w-full md:object-center"
        />
        <div className="absolute inset-0 hidden bg-ink/45 md:block" aria-hidden="true" />
        <div
          className="absolute inset-0 hidden md:block"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(13,13,12,0.45) 0%, rgba(13,13,12,0) 55%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 py-12 md:absolute md:left-0 md:top-0 md:bottom-0 md:w-[38%] md:max-w-[420px] md:flex md:flex-col md:justify-center md:px-6 md:py-0 md:text-left lg:static lg:mx-auto lg:w-full lg:max-w-[1240px] lg:px-10 lg:py-0">
          <h1 className="font-body text-[26px] font-light leading-[1.3] text-ink md:hidden">
            Medical aesthetics in Charlottesville
          </h1>
          <h1 className="hidden font-body text-[26px] font-light leading-[1.3] text-ivory md:block md:max-w-[24ch] lg:text-[30px]">
            Medical aesthetics
            <br />
            in Charlottesville
          </h1>
          <div className="mt-10 flex flex-col gap-[10px] md:items-start md:gap-3 lg:flex-row lg:items-start lg:gap-[28px]">
            <a
              href={practice.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className={`${btn} w-full border border-transparent bg-ink px-8 py-[14px] text-ivory transition-colors hover:bg-walnut md:w-auto md:px-6 md:py-4 md:bg-ivory md:text-ink md:hover:bg-champagne lg:px-8 lg:py-4`}
            >
              {hero.primaryCta}
            </a>
            <Link
              to="/find-your-treatment"
              className={`${btn} w-full border border-ink px-8 py-[14px] text-ink transition-colors hover:border-champagne hover:text-champagne md:w-auto md:px-6 md:py-4 md:border-greige md:text-ivory lg:px-8 lg:py-4`}
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <Reveal as="section" className={section}>
        <h2 className={heading}>{concernsSection.heading}</h2>
        <p className={`${body} mt-5`}>{concernsSection.intro}</p>
        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {concerns.map((concern) => (
            <li key={concern.slug}>
              <Link
                to="/concerns/$slug"
                params={{ slug: concern.slug }}
                className="flex h-full flex-col justify-between rounded-[2px] border border-greige bg-white p-7 transition-colors hover:border-champagne md:p-8"
              >
                <span className="label-xs text-olive">{concern.label}</span>
                <span className="mt-10 font-body text-[19px] font-medium leading-[1.35] text-ink">
                  {concern.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className={section}>
        <h2 className={heading}>{resultsSection.heading}</h2>
        <p className={`${body} mt-5`}>{resultsSection.intro}</p>
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
          <h2 className="display-tight opsz-md mt-6 font-display text-[30px] font-normal text-ivory md:text-[36px]">
            {signature.heading}
          </h2>
          <p className="measure mt-6 font-body text-[16px] font-light leading-[1.75] text-greige">
            {signature.body}
          </p>
          <p className="display-tight opsz-md mt-8 font-display text-[30px] font-normal text-champagne">
            {signature.price}
          </p>
          <Link
            to="/treatments"
            className={`${btn} mt-10 inline-block border border-greige px-8 py-4 text-ivory transition-colors hover:border-champagne hover:text-champagne`}
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
            <h3 className="display-tight opsz-md font-display text-[28px] font-normal text-ink md:text-[34px]">
              {provider.name}
            </h3>
            {provider.paragraphs.map((paragraph, i) => (
              <p key={i} className={`${body} mt-6`}>
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
              <blockquote className="opsz-md font-display text-[28px] font-normal leading-[1.3] text-ink">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5 font-body text-[13px] tracking-[0.06em] text-walnut">
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
            <p className={`${body} mt-5`}>{bookingBand.body}</p>
          </div>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a
              href={practice.phoneHref}
              className="font-body text-[20px] font-light text-ink transition-colors hover:text-champagne"
            >
              {practice.phone}
            </a>
            <a
              href={practice.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className={`${btn} bg-ink px-8 py-4 text-ivory transition-colors hover:bg-walnut`}
            >
              {bookingBand.cta}
            </a>
          </div>
        </div>
      </Reveal>
    </>
  );
}