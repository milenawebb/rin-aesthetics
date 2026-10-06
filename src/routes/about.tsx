import { seoHead, SITE_URL } from "@/lib/seo-head";
import { BookingBand } from "@/components/site/BookingBand";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { MaskedLines } from "@/components/site/MaskedLines";
import { WipeImage } from "@/components/site/WipeImage";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { portraitSrc, portraitJpgSrcSet, portraitWebpSrcSet } from "@/lib/portrait";

const ABOUT_PORTRAIT_SIZES = "(min-width: 1280px) 580px, (min-width: 1024px) 46vw, (min-width: 768px) 460px, calc(100vw - 48px)";
import bp640w from "@/assets/rin-blueprints-640.webp.asset.json";
import bp1000w from "@/assets/rin-blueprints-1000.webp.asset.json";
import bp640 from "@/assets/rin-blueprints-640.jpg.asset.json";
import bp1000 from "@/assets/rin-blueprints-1000.jpg.asset.json";
import { GOOGLE_REVIEWS_URL, practice } from "@/data/site";


import { providerSchema } from "@/data/person-schema";

function stripEmpty<T extends Record<string, unknown>>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => {
      if (typeof v === "string") return v.length > 0;
      if (Array.isArray(v)) return v.length > 0;
      return v !== null && v !== undefined;
    }),
  ) as Partial<T>;
}

const personSchema = stripEmpty({
  ...providerSchema,
  image: new URL(portraitSrc, SITE_URL).href,
});

const seo = seoHead("/about");

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: seo.meta,
    links: [
      ...seo.links,
      {
        rel: "preload",
        as: "image",
        href: portraitSrc,
        imageSrcSet: portraitWebpSrcSet,
        imageSizes: ABOUT_PORTRAIT_SIZES,
        type: "image/webp",
        fetchPriority: "high",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(personSchema) }],
  }),
  component: AboutPage,
});

// One grid for every section on this page: 1 col mobile, 6 tablet, 12 desktop.
const wrap =
  "grid w-full grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-6 md:gap-y-8 lg:grid-cols-12 lg:gap-y-10";
const pad = "section-space";
const h2 = "type-h2 text-ink";
const body = "pretty measure-body font-body text-[17px] font-light leading-[1.8] text-walnut";

function AboutPage() {
  return (
    <PageShell>
      <div>
      <section className={`${pad} relative scroll-mt-[104px] pt-[56px] md:pt-[104px]`}>
        <SectionLabel label="About" contentClassName={wrap}>
          <div className="col-span-full lg:col-span-8">
            <MaskedLines
              as="h1"
              lines={["Jyl"]}
              className="type-h1 mt-3 text-ink"
            />
            <p className="mt-5 font-body text-[20px] font-light text-walnut">
              Founder and nurse injector
            </p>
          </div>
          <div className="col-span-full mt-6 md:max-w-[460px] md:mt-8 lg:sticky lg:top-[120px] lg:col-span-6 lg:max-w-none lg:mt-10">
            <WipeImage from="bottom">
              <picture className="block overflow-hidden rounded-[2px]">
                <source type="image/webp" srcSet={portraitWebpSrcSet} sizes={ABOUT_PORTRAIT_SIZES} />
                <img
                  src={portraitSrc}
                  srcSet={portraitJpgSrcSet}
                  sizes={ABOUT_PORTRAIT_SIZES}
                  width={1123}
                  height={1401}
                  loading="eager"
                  fetchPriority="high"
                  alt="Jyl, founder and nurse injector at RIN Aesthetic Practice"
                  className="aspect-[4/5] w-full object-cover object-[50%_30%]"
                />
              </picture>
            </WipeImage>
          </div>
          <div className="col-span-full lg:col-span-5 lg:col-start-8 lg:mt-10">
            <Reveal>
              <p className="pretty max-w-[62ch] md:max-lg:max-w-none font-body text-[17px] font-light leading-[1.8] text-walnut">
                Jyl is an accomplished nurse injector with a career spanning over a decade in
                healthcare, focusing initially on perioperative services before making a seamless
                transition to aesthetic medicine in 2020. Trained by some of the leading injectors
                on the East Coast, she has developed an exceptional understanding of facial
                anatomy, which enhances her skills as an injector.
              </p>
              <p className="pretty max-w-[62ch] md:max-lg:max-w-none font-body text-[17px] font-light leading-[1.8] text-walnut mt-4">
                As founder of RIN Aesthetic Practice, Jyl is driven by a passion for aesthetic
                medicine and a commitment to achieving outstanding patient outcomes. She places a
                strong emphasis on continuous education and safety, ensuring that her clients
                receive the highest standard of care in their aesthetic journeys.
              </p>
            </Reveal>
            <Reveal className="mt-8">
              <p className="eyebrow">Away from the practice</p>
              <p className="pretty max-w-[62ch] md:max-lg:max-w-none font-body text-[17px] font-light leading-[1.8] text-walnut mt-3">
                In her free time, Jyl enjoys spending time with her family, whether on a beach or
                in a mineral spring, traveling, and reading healthcare articles.
              </p>
            </Reveal>
            <Reveal className="mt-10 mb-6">
              <p className="pretty font-body text-[20px] [font-weight:200] leading-[1.35] text-ink md:text-[22px] md:leading-[1.4] lg:text-[24px] lg:leading-[1.35]">
                Conservative by design. Built on anatomy and on the long view, rather than the
                trend of the season.
              </p>
            </Reveal>
            <Reveal>
              <p className="pretty max-w-[62ch] md:max-lg:max-w-none font-body text-[17px] font-light leading-[1.8] text-walnut">
                Jyl treats one person at a time, without rushing, and will tell you plainly when
                the answer is to do less. Most clients arrive on a recommendation from someone
                they trust, and stay for years.
              </p>
            </Reveal>
          </div>
        </SectionLabel>
      </section>

      <section className={`${pad} relative`}>
        <SectionLabel label="Why RIN" contentClassName={`${wrap} items-center`}>
          <div className="col-span-full lg:col-span-6">
            <WipeImage from="left">
              <picture className="block overflow-hidden rounded-[2px]">
                <source
                  type="image/webp"
                  srcSet={`${bp640w.url} 640w, ${bp1000w.url} 1000w`}
                  sizes="(max-width: 1023px) 100vw, 560px"
                />
                <img
                  src={bp1000.url}
                  srcSet={`${bp640.url} 640w, ${bp1000.url} 1000w`}
                  sizes="(max-width: 1023px) 100vw, 560px"
                  width={1000}
                  height={750}
                  loading="lazy"
                  alt="Jyl during the renovation of RIN Aesthetic Practice"
                  className="aspect-[4/3] w-full object-cover object-[50%_45%]"
                />
              </picture>
            </WipeImage>
          </div>
          <div className="col-span-full lg:col-span-5 lg:col-start-8">
            <MaskedLines lines={["Building the practice"]} className={`mt-3 ${h2}`} />
            <Reveal>
              <p className="pretty max-w-[62ch] md:max-lg:max-w-none font-body text-[17px] font-light leading-[1.8] text-walnut mt-5">
                RIN is named for my daughter, Korynne. We call her Ryn. She is my why, and the
                reason I wanted to build something of my own rather than keep working the way
                everyone else does.
              </p>
              <p className="pretty max-w-[62ch] md:max-lg:max-w-none font-body text-[17px] font-light leading-[1.8] text-walnut mt-4">
                Her name became the standard I hold myself to.
              </p>
              <div className="mt-8">
                <p className="font-body text-[22px] font-extralight leading-[1.3] text-ink md:text-[28px]">
                  Refined.
                </p>
                <p className="font-body text-[22px] font-extralight leading-[1.3] text-ink md:text-[28px]">
                  Intentional.
                </p>
                <p className="font-body text-[22px] font-extralight leading-[1.3] text-ink md:text-[28px]">
                  Natural.
                </p>
                <p className="mt-8 font-body text-[11px] font-medium uppercase tracking-[0.16em] text-walnut">
                  Jyl
                </p>
              </div>
            </Reveal>
          </div>
        </SectionLabel>
      </section>

      <section className={`bg-ivory ${pad} relative`}>
        <SectionLabel label="The space" contentClassName={wrap}>
          <div className="col-span-full">
            <MaskedLines lines={["Where you will be"]} className={`mt-3 ${h2}`} />
            <p className="mt-5 font-body text-[16px] font-light text-walnut">
              A quiet suite in Charlottesville, built to feel unhurried.
            </p>
          </div>
          <div className="rail col-span-full -mr-6 overflow-x-auto md:mr-0 md:overflow-visible">
            <div className="flex gap-3 md:grid md:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="flex aspect-[4/5] w-[78%] shrink-0 items-center justify-center rounded-[2px] bg-greige md:w-auto"
                >
                  <span className="eyebrow text-walnut">Practice photo</span>
                </div>
              ))}
            </div>
          </div>
        </SectionLabel>
      </section>

      <section className={`${pad} relative`}>
        <SectionLabel label="In their words" contentClassName={wrap}>
          <div className="col-span-full">
            <MaskedLines lines={["What clients say about Jyl"]} className={`mt-3 ${h2}`} />
          </div>
        <div className="col-span-full grid gap-14 lg:grid-cols-2">
          {aboutReviews.map((r) => (
            <Reveal key={r.name} as="figure" className="flex flex-col border-t border-greige pt-8">
              <div className="flex gap-[2px]" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" className="fill-champagne">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="hanging-quote pretty mt-6 font-body text-[17px] font-light leading-[1.75] text-ink">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-8">
                <span className="block font-body text-[14px] font-light text-walnut">{r.name}</span>
                {r.source ? (
                  <span className="mt-1 block font-body text-[12px] font-light text-greige">
                    {r.source}
                  </span>
                ) : null}
              </figcaption>
            </Reveal>
          ))}
        </div>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener"
          className="col-span-full justify-self-start font-body text-[14px] font-light text-walnut underline underline-offset-4 transition-colors hover:text-ink"
        >
          Read more reviews on Google
        </a>
        </SectionLabel>
      </section>

      <section className="section-space">
        <SectionLabel contentClassName={wrap}>
        <Reveal className="col-span-full rounded-[2px] border border-greige bg-white p-8">
          <p className="eyebrow text-olive">Medical oversight</p>
          <p className="pretty mt-6 font-body text-[15px] font-light leading-[26px] text-walnut">
            All clinical providers at RIN Aesthetic Practice operate under the oversight of our
            Medical Director in accordance with Virginia requirements. To contact our Medical
            Director for any reason, please email our office at{" "}
            <a
              href={`mailto:${practice.email}`}
              className="border-b border-champagne text-ink transition-colors hover:text-champagne"
            >
              {practice.email}
            </a>
            . We will respond within 72 hours.
          </p>
        </Reveal>
        </SectionLabel>
      </section>

      <BookingBand />
    </div>
    </PageShell>
  );
}

const aboutReviews: { quote: string; name: string; source?: string }[] = [
  {
    quote:
      "I've been getting aesthetic treatments done for almost 10 years at just about every med spa in Charlottesville and was never truly satisfied until I went to Jyl! Her knowledge about the face is unmatched and I wouldn't trust anyone else! She takes her time and really studies your face before doing anything.",
    name: "Brooke Hutton",
    source: "via Google",
  },
  {
    quote:
      "I have been seeing Jyl at RIN for years now and I won't go anywhere else. … She is really passionate about doing continued ed and if I want to try something she doesn't think will look right she gives me that advice rather than just accepting my money. She really cares about her work.",
    name: "Julia Gilchrist",
    source: "via Google",
  },
];
