import { BookingBand } from "@/components/site/BookingBand";
import { resultsNotice } from "@/data/gallery";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { MaskedLines } from "@/components/site/MaskedLines";
import { WipeImage } from "@/components/site/WipeImage";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ResultsRail } from "@/components/home/ResultsRail";
import { featured } from "@/data/gallery";
import { ConcernRows } from "@/components/home/ConcernRows";
import { useInView } from "@/hooks/use-in-view";
import heroAsset from "@/assets/hero.png.asset.json";
import jyl4x5Webp480 from "@/assets/jyl-4x5-480.webp.asset.json";
import jyl4x5Webp720 from "@/assets/jyl-4x5-720.webp.asset.json";
import jyl4x5Webp960 from "@/assets/jyl-4x5-960.webp.asset.json";
import jyl4x5Jpg480 from "@/assets/jyl-4x5-480.jpg.asset.json";
import jyl4x5Jpg720 from "@/assets/jyl-4x5-720.jpg.asset.json";
import jyl4x5Jpg960 from "@/assets/jyl-4x5-960.jpg.asset.json";
import heroMobileAsset from "@/assets/rin-hero-mobile.png.asset.json";
import heroTabletAsset from "@/assets/rin-hero-tablet.png.asset.json";
import { GOOGLE_REVIEWS_URL, practice } from "@/data/site";
import { getServiceById, splitSlug } from "@/data/lookup";
import {
  concernsSection,
  hero,
  provider,
  resultsSection,
  signature,
  testimonials,
  testimonialsMeta,
} from "@/data/home";

const signatureService = getServiceById(signature.serviceId);
const signaturePath = signatureService ? splitSlug(signatureService.slug) : null;
const signatureLines = signatureService
  ? signatureService.name.endsWith(" by RIN")
    ? [signatureService.name.slice(0, -7), "by RIN"]
    : [signatureService.name]
  : [];
const featuredResults = featured();


const container = "relative mx-auto max-w-[1240px] px-6 md:px-10";
const grid = "grid grid-cols-12 gap-x-6";
const heading =
  "font-body font-extralight text-[30px] md:text-[46px] tracking-[-0.03em] leading-[1.16] text-ink";

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
            Medical aesthetics in Charlottesville, VA
          </h1>
          <MaskedLines
            as="h1"
            lines={["Medical aesthetics", "in Charlottesville, VA"]}
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
          </div>
        </div>
      </section>

      <section>
        <SectionLabel
          label={concernsSection.eyebrow}
          className="pt-[96px] pb-[80px] md:pt-[140px] md:pb-[120px]"
          contentClassName="px-6 md:px-10 xl:px-0"
        >
          <div className={grid}>
            <MaskedLines
              lines={concernsSection.headingLines as unknown as string[]}
              className={`${heading} col-span-12`}
            />
            <p className={`${body} col-span-12 mt-6`}>
              {concernsSection.intro}
            </p>
          </div>
          <ConcernRows />
        </SectionLabel>
      </section>

      <section className="relative pb-[80px] md:pb-[120px]">
        <SectionLabel label={resultsSection.eyebrow} contentClassName="px-6 md:px-10 xl:px-0">
          <div className={grid}>
            <MaskedLines
              lines={resultsSection.headingLines as unknown as string[]}
              className={`${heading} col-span-12`}
            />
            {resultsNotice(featuredResults) ? (
              <p className={`${body} col-span-12 mt-6`}>
                {resultsNotice(featuredResults)}
              </p>
            ) : null}
          </div>
        </SectionLabel>
        <div className="mt-14 w-full overflow-x-clip pl-6 md:pl-[max(2.5rem,calc((100%-1240px)/2+2.5rem))]">
          <ResultsRail cases={featuredResults} />
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
              lines={signatureLines}
              delay={700}
              className="col-span-12 font-body text-[34px] font-extralight leading-[1.16] tracking-[-0.03em] text-ivory md:text-[56px]"
            />

            <p className="pretty col-span-12 mt-8 max-w-[62ch] font-body text-[17px] font-light leading-[1.8] text-greige">
              {signatureService?.shortDescription}
            </p>
            <p className="col-span-12 mt-7 font-body text-[32px] font-extralight text-champagne">
              {signatureService?.priceDisplay}
            </p>

          </div>
          <Link
            to="/$category/$slug"
            params={{ category: signaturePath?.category ?? "", slug: signaturePath?.slug ?? "" }}
            className={`${btn} mt-10 inline-block border border-greige px-8 py-4 text-ivory transition-colors duration-[400ms] hover:border-champagne`}
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
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${jyl4x5Webp480.url} 480w, ${jyl4x5Webp720.url} 720w, ${jyl4x5Webp960.url} 960w`}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <img
                  src={jyl4x5Jpg720.url}
                  srcSet={`${jyl4x5Jpg480.url} 480w, ${jyl4x5Jpg720.url} 720w, ${jyl4x5Jpg960.url} 960w`}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  alt="Jyl Carter, aesthetic nurse practitioner, in the treatment suite at RIN Aesthetic Practice"
                  width={960}
                  height={1200}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-[50%_25%]"
                />
              </picture>
            </WipeImage>
          </div>
          <div className="col-span-12 self-center px-6 lg:col-span-6 lg:col-start-7 lg:-ml-10 lg:px-0">
            <MaskedLines
              as="h3"
              lines={[provider.name]}
              className="font-body text-[30px] font-extralight leading-[1.16] tracking-[-0.03em] text-ink md:text-[46px]"
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

      <section>
        <SectionLabel
          label={testimonialsMeta.eyebrow}
          className="pb-[80px] md:pb-[120px]"
          contentClassName="px-6 md:px-10 xl:px-0"
        >
          <MaskedLines
            lines={testimonialsMeta.headingLines as unknown as string[]}
            className={`${heading}`}
          />
          <div className="mt-14 grid grid-cols-1 items-stretch gap-12 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex h-full flex-col border-t border-greige pt-6">
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
              <blockquote className="hanging-quote mt-6 min-h-[60.8px] font-body text-[19px] font-light leading-[1.6] text-ink [text-wrap:pretty]">
                “{testimonial.quote}”
              </blockquote>
              <div className="flex-1" aria-hidden="true" />
              <figcaption className="pt-8 font-body text-[14px] font-light tracking-[0.06em] text-walnut">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
          </div>
          <div className="mt-12 flex w-full flex-col items-center text-center">
          <p className="font-body text-[13px] font-light text-walnut">Reviews from Google</p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener"
            className="mt-2 font-body text-[14px] font-light text-walnut underline underline-offset-4 transition-colors hover:text-ink"
          >
            Read all reviews on Google
          </a>
          </div>
        </SectionLabel>
      </section>

      <BookingBand />
    </>
  );
}