import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { GradedImage } from "@/components/site/GradedImage";
import { MaskedLines } from "@/components/site/MaskedLines";
import { WipeImage } from "@/components/site/WipeImage";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ResultsRail } from "@/components/home/ResultsRail";
import { ConcernRows } from "@/components/home/ConcernRows";
import { useInView } from "@/hooks/use-in-view";
import heroAsset from "@/assets/hero.png.asset.json";
import providerPortrait from "@/assets/provider-portrait.jpg.asset.json";
import heroMobileAsset from "@/assets/rin-hero-mobile.png.asset.json";
import heroTabletAsset from "@/assets/rin-hero-tablet.png.asset.json";
import { practice } from "@/data/site";
import {
  bookingBand,
  concernsSection,
  hero,
  provider,
  resultsSection,
  signature,
  testimonials,
  testimonialsMeta,
} from "@/data/home";

const container = "relative mx-auto max-w-[1240px] px-6 md:px-10";
const grid = "grid grid-cols-12 gap-x-6";
const heading =
  "font-body font-extralight text-[30px] md:text-[46px] tracking-[-0.03em] leading-[1.08] text-ink";
const body =
  "pretty measure-body font-body text-[17px] font-light leading-[1.8] text-walnut";
const btn = "btn-label rounded-[2px]";

export function Home() {
  const { ref: bandRef, inView: bandIn } = useInView<HTMLDivElement>("0px 0px -20% 0px");

  return (
    <>
      <section className="relative bg-ivory md:flex md:items-center md:justify-center lg:h-[85vh] lg:min-h-[520px] lg:overflow-hidden">
        <picture className="hero-settle is-in aspect-[4/3] block w-full md:aspect-[3/2] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
          <source media="(min-width: 1024px)" srcSet={heroAsset.url} />
          <source media="(min-width: 768px)" srcSet={heroTabletAsset.url} />
          <img
            src={heroMobileAsset.url}
            alt={hero.imageAlt}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </picture>
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
          <MaskedLines
            as="h1"
            lines={["Medical aesthetics", "in Charlottesville"]}
            delay={200}
            className="hidden font-body text-[26px] font-light leading-[1.3] text-ivory md:block md:max-w-[24ch] lg:text-[44px] lg:font-extralight lg:tracking-[-0.02em] lg:leading-[1.15]"
          />
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

      <section className={`${container} pt-[96px] pb-[80px] md:pt-[140px] md:pb-[120px]`}>
        <SectionLabel>{concernsSection.eyebrow}</SectionLabel>
        <div className={grid}>
          <MaskedLines
            lines={concernsSection.headingLines as unknown as string[]}
            className={`${heading} col-span-12 md:col-span-7`}
          />
          <p className={`${body} col-span-12 mt-6 md:col-start-2 md:col-span-6`}>
            {concernsSection.intro}
          </p>
        </div>
        <ConcernRows />
      </section>

      <section className="relative pb-[80px] md:pb-[120px]">
        <div className={container}>
          <SectionLabel>{resultsSection.eyebrow}</SectionLabel>
          <div className={grid}>
            <MaskedLines
              lines={resultsSection.headingLines as unknown as string[]}
              className={`${heading} col-span-12 md:col-span-6`}
            />
            <p className={`${body} col-span-12 mt-6 md:col-start-2 md:col-span-5`}>
              {resultsSection.intro}
            </p>
          </div>
        </div>
        <div className="mt-14 w-full overflow-x-clip pl-6 md:pl-[max(2.5rem,calc((100%-1240px)/2+2.5rem))]">
          <ResultsRail
            count={resultsSection.count}
            label={resultsSection.placeholderLabel}
          />
        </div>
        <div className={`${container} mt-10`}>
          <Link
            to="/results"
            className="eyebrow inline-block border-b border-champagne pb-1 text-ink transition-transform duration-[400ms] hover:translate-x-[3px]"
          >
            {resultsSection.linkLabel}
          </Link>
        </div>
      </section>

      <section ref={bandRef} className="relative isolate overflow-hidden">
        <div
          className={`curtain absolute inset-0 -z-10 bg-ink ${bandIn ? "is-in" : ""}`}
          aria-hidden="true"
        />
        <div className={`${container} py-[96px] md:py-[140px]`}>
          <p className="eyebrow text-champagne">{signature.label}</p>
          <div className={`${grid} mt-8`}>
            <MaskedLines
              lines={signature.headingLines as unknown as string[]}
              delay={700}
              className="col-span-12 font-body text-[34px] font-extralight leading-[1.08] tracking-[-0.03em] text-ivory md:col-span-7 md:text-[56px]"
            />
            <p className="pretty col-span-12 mt-8 max-w-[62ch] font-body text-[17px] font-light leading-[1.8] text-greige md:col-start-2 md:col-span-6">
              {signature.body}{" "}
              <span className="whitespace-nowrap font-extralight tracking-[-0.02em] text-champagne md:text-[32px]">
                {signature.price}
              </span>
            </p>
          </div>
          <Link
            to="/treatments"
            className={`${btn} mt-12 inline-block border border-greige px-8 py-4 text-ivory transition-colors duration-[400ms] hover:border-champagne`}
          >
            {signature.cta}
          </Link>
        </div>
      </section>

      <section className="relative pt-[110px] pb-[80px] md:pt-[160px] md:pb-[120px]">
        <div className={container}>
          <p className="eyebrow">{provider.heading}</p>
        </div>
        <div className={`${grid} mx-auto mt-10 w-full max-w-[1400px] items-start`}>
          <div className="col-span-12 pl-0 lg:col-span-5 lg:sticky lg:top-[120px]">
            <WipeImage from="bottom">
              <GradedImage
                src={providerPortrait.url}
                alt={provider.portraitAlt}
                width={960}
                height={1280}
                className="aspect-[3/4] w-full"
              />
            </WipeImage>
          </div>
          <div className="col-span-12 px-6 lg:col-span-6 lg:col-start-7 lg:-ml-10 lg:px-0">
            <MaskedLines
              as="h3"
              lines={[provider.name]}
              className="font-body text-[30px] font-extralight leading-[1.08] tracking-[-0.03em] text-ink md:text-[46px]"
            />
            {provider.paragraphs.map((paragraph, i) => (
              <p key={i} className={`${body} mt-8`}>
                {paragraph}
              </p>
            ))}
            <Link
              to="/about"
              className="eyebrow mt-10 inline-block border-b border-champagne pb-1 text-ink transition-transform duration-[400ms] hover:translate-x-[3px]"
            >
              {provider.linkLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className={`${container} pb-[80px] md:pb-[120px]`}>
        <SectionLabel>{testimonialsMeta.eyebrow}</SectionLabel>
        <MaskedLines
          lines={testimonialsMeta.headingLines as unknown as string[]}
          className={`${heading} md:w-7/12`}
        />
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex flex-col">
              <div className="flex gap-[2px]" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="#C9A961"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="hanging-quote pretty mt-6 max-w-[30ch] font-body text-[19px] font-light leading-[1.6] text-ink">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-8 font-body text-[14px] font-light tracking-[0.06em] text-walnut">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Reveal as="section" className="border-t border-greige bg-ivory">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-8 px-6 py-[80px] text-center md:py-[100px] md:px-10">
          <div className="flex flex-col items-center">
            <h2 className={`${heading} balance`}>{bookingBand.heading}</h2>
            <p className={`${body} mt-5`}>{bookingBand.body}</p>
          </div>
          <div className="flex flex-col items-center gap-6 sm:flex-row">
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
              className={`${btn} border border-ink bg-ink px-8 py-4 text-ivory transition-colors duration-[400ms] hover:bg-walnut`}
            >
              {bookingBand.cta}
            </a>
          </div>
        </div>
      </Reveal>
    </>
  );
}