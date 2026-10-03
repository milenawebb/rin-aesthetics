import { BookingBand } from "@/components/site/BookingBand";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { MaskedLines } from "@/components/site/MaskedLines";
import { WipeImage } from "@/components/site/WipeImage";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import j480w from "@/assets/jyl-4x5-480.webp.asset.json";
import j720w from "@/assets/jyl-4x5-720.webp.asset.json";
import j960w from "@/assets/jyl-4x5-960.webp.asset.json";
import j480 from "@/assets/jyl-4x5-480.jpg.asset.json";
import j720 from "@/assets/jyl-4x5-720.jpg.asset.json";
import j960 from "@/assets/jyl-4x5-960.jpg.asset.json";
import bp640w from "@/assets/rin-blueprints-640.webp.asset.json";
import bp1000w from "@/assets/rin-blueprints-1000.webp.asset.json";
import bp640 from "@/assets/rin-blueprints-640.jpg.asset.json";
import bp1000 from "@/assets/rin-blueprints-1000.jpg.asset.json";
import { GOOGLE_REVIEWS_URL, practice } from "@/data/site";

const title = "About Jyl | RIN Aesthetic Practice";
const description =
  "Jyl is an accomplished nurse injector with a career spanning over a decade in healthcare, focusing initially on perioperative services before making a seamless transition to aesthetic medicine in 2020.";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jyl",
  jobTitle: "Nurse Injector",
  worksFor: { "@type": "MedicalBusiness", name: "RIN Aesthetic Practice" },
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        type: "image/webp",
        href: j720w.url,
        imageSrcSet: `${j480w.url} 480w, ${j720w.url} 720w, ${j960w.url} 960w`,
        imageSizes: "(max-width: 768px) 100vw, 40vw",
        fetchPriority: "high",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(personSchema) }],
  }),
  component: AboutPage,
});

// One grid for every section on this page: 1 col mobile, 6 tablet, 12 desktop.
const wrap =
  "mx-auto grid max-w-[1240px] grid-cols-1 gap-x-8 gap-y-6 md:gap-y-8 lg:gap-y-10 px-6 md:grid-cols-6 md:px-8 lg:grid-cols-12 lg:px-16";
const pad = "py-12 md:py-16 lg:py-[88px]";
const h2 = "font-body text-[32px] font-extralight leading-[1.16] tracking-[-0.02em] text-ink";
const body = "pretty measure-body font-body text-[17px] font-light leading-[1.8] text-walnut";

function AboutPage() {
  return (
    <PageShell>
      <div className="md:max-lg:pb-24">
      <section className={`${pad} relative scroll-mt-[104px] md:max-lg:pt-[104px]`}>
        <div className={`${wrap} relative`}>
          <SectionLabel>About</SectionLabel>
          <div className="col-span-full lg:col-span-8">
            <MaskedLines
              as="h1"
              lines={["Jyl"]}
              className="mt-3 font-body text-[34px] font-extralight leading-[1.16] tracking-[-0.03em] text-ink md:text-[56px]"
            />
            <p className="mt-5 font-body text-[20px] font-light text-walnut">
              Founder and nurse injector
            </p>
          </div>
        </div>
        <div className={`${wrap} mt-6 items-start md:mt-8 lg:mt-10`}>
          <div className="col-span-full md:max-w-[460px] lg:max-w-none lg:sticky lg:top-[120px] lg:col-span-5">
            <WipeImage from="bottom">
              <picture className="block overflow-hidden rounded-[2px]">
                <source
                  type="image/webp"
                  srcSet={`${j480w.url} 480w, ${j720w.url} 720w, ${j960w.url} 960w`}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 460px, 480px"
                />
                <img
                  src={j720.url}
                  srcSet={`${j480.url} 480w, ${j720.url} 720w, ${j960.url} 960w`}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 460px, 480px"
                  width={720}
                  height={900}
                  loading="eager"
                  fetchPriority="high"
                  alt="Jyl, founder and nurse injector at RIN Aesthetic Practice"
                  className="aspect-[4/5] w-full object-cover object-[50%_30%]"
                />
              </picture>
            </WipeImage>
          </div>
          <div className="col-span-full lg:col-span-6 lg:col-start-7">
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
        </div>
      </section>

      <section className={`${pad} relative`}>
        <div className={`${wrap} relative items-center`}>
          <SectionLabel>Why RIN</SectionLabel>
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
        </div>
      </section>

      <section className={`bg-ivory ${pad} relative`}>
        <div className={`${wrap} relative`}>
          <SectionLabel>The space</SectionLabel>
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
        </div>
      </section>

      <section className={`${pad} relative`}>
        <div className={`${wrap} relative`}>
          <SectionLabel>In their words</SectionLabel>
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
        </div>
      </section>

      <section className="pb-12 md:pb-16 lg:pb-[88px]">
        <div className={wrap}>
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
        </div>
      </section>

      <BookingBand padding="px-6 md:px-8 lg:px-16" />
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
