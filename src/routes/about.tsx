import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { MaskedLines } from "@/components/site/MaskedLines";
import { WipeImage } from "@/components/site/WipeImage";
import { Reveal } from "@/components/site/Reveal";
import j480w from "@/assets/jyl-480.webp.asset.json";
import j720w from "@/assets/jyl-720.webp.asset.json";
import j960w from "@/assets/jyl-960.webp.asset.json";
import j480 from "@/assets/jyl-480.jpg.asset.json";
import j720 from "@/assets/jyl-720.jpg.asset.json";
import j960 from "@/assets/jyl-960.jpg.asset.json";
import jylSquare from "@/assets/jyl-square.jpg.asset.json";
import bp640w from "@/assets/rin-blueprints-640.webp.asset.json";
import bp1000w from "@/assets/rin-blueprints-1000.webp.asset.json";
import bp640 from "@/assets/rin-blueprints-640.jpg.asset.json";
import bp1000 from "@/assets/rin-blueprints-1000.jpg.asset.json";
import { practice } from "@/data/site";

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

const container = "mx-auto max-w-[1240px] px-6 md:px-10";
const body = "pretty measure-body font-body text-[17px] font-light leading-[1.8] text-walnut";

function AboutPage() {
  return (
    <PageShell>
      <section className={`${container} pt-[72px] md:pt-[120px]`}>
        <p className="eyebrow">About</p>
        <MaskedLines
          as="h1"
          lines={["Jyl"]}
          className="mt-6 font-body text-[34px] font-extralight leading-[1.16] tracking-[-0.03em] text-ink md:text-[56px]"
        />
        <p className="mt-4 font-body text-[20px] font-light text-walnut">
          Founder and nurse injector
        </p>
      </section>

      <section className="pt-[56px] md:pt-[96px]">
        <div className="grid grid-cols-12 items-start gap-x-6 gap-y-12">
          <div className="col-span-12 lg:sticky lg:top-[100px] lg:col-span-5">
            <WipeImage from="bottom">
              <picture className="block overflow-hidden lg:rounded-r-[2px]">
                <source
                  type="image/webp"
                  srcSet={`${j480w.url} 480w, ${j720w.url} 720w, ${j960w.url} 960w`}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <img
                  src={j720.url}
                  srcSet={`${j480.url} 480w, ${j720.url} 720w, ${j960.url} 960w`}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  width={720}
                  height={960}
                  loading="eager"
                  fetchPriority="high"
                  alt="Jyl, founder and nurse injector at RIN Aesthetic Practice"
                  className="aspect-[3/4] w-full object-cover lg:aspect-auto lg:h-[min(86vh,880px)]"
                />
              </picture>
            </WipeImage>
          </div>
          <div className="col-span-12 px-6 md:px-10 lg:col-span-7 lg:pl-10 lg:pr-[max(2.5rem,calc((100vw-1240px)/2+2.5rem))] lg:pt-10">
            <Reveal>
              <p className={body}>
                Jyl is an accomplished nurse injector with a career spanning over a decade in
                healthcare, focusing initially on perioperative services before making a seamless
                transition to aesthetic medicine in 2020. Trained by some of the leading injectors
                on the East Coast, she has developed an exceptional understanding of facial
                anatomy, which enhances her skills as an injector.
              </p>
              <p className={`${body} mt-8`}>
                As founder of RIN Aesthetic Practice, Jyl is driven by a passion for aesthetic
                medicine and a commitment to achieving outstanding patient outcomes. She places a
                strong emphasis on continuous education and safety, ensuring that her clients
                receive the highest standard of care in their aesthetic journeys.
              </p>
            </Reveal>
            <Reveal className="mt-[56px]">
              <p className="eyebrow">Away from the practice</p>
              <p className={`${body} mt-6`}>
                In her free time, Jyl enjoys spending time with her family, whether on a beach or
                in a mineral spring, traveling, and reading healthcare articles.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mt-[72px] bg-ivory md:mt-[96px]">
        <div className={`${container} grid grid-cols-12 gap-x-6`}>
          <MaskedLines
            as="p"
            lines={[
              "Conservative by design. Built on anatomy and on the long view, rather than the trend of the season.",
            ]}
            className="col-span-12 max-w-[24ch] font-body text-[30px] font-extralight leading-[1.22] tracking-[-0.02em] text-ink md:col-start-2 md:col-span-11 md:text-[42px]"
          />
        </div>
      </section>

      <section className={`${container} mt-[48px] pb-[72px] md:pb-[96px]`}>
        <div className="grid grid-cols-12 gap-x-6">
          <Reveal className="col-span-12 lg:col-span-7">
            <p className={body}>
              Jyl treats one person at a time, without rushing, and will tell you plainly when the
              answer is to do less. Most clients arrive on a recommendation from someone they
              trust, and stay for years.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={`${container} py-[72px] md:py-[96px]`}>
        <div className="grid grid-cols-12 items-center gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <WipeImage from="left">
              <picture className="block overflow-hidden rounded-[2px]">
                <source
                  type="image/webp"
                  srcSet={`${bp640w.url} 640w, ${bp1000w.url} 1000w`}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <img
                  src={bp1000.url}
                  srcSet={`${bp640.url} 640w, ${bp1000.url} 1000w`}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  width={1000}
                  height={750}
                  loading="lazy"
                  alt="Jyl during the renovation of RIN Aesthetic Practice"
                  className="aspect-[4/3] w-full object-cover object-[50%_45%]"
                />
              </picture>
            </WipeImage>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="eyebrow text-olive">Why RIN</p>
            <MaskedLines
              lines={["Building the practice"]}
              className="mt-5 font-body text-[32px] font-extralight leading-[1.16] tracking-[-0.02em] text-ink"
            />
            <Reveal>
              <p className={`${body} mt-6`}>
                [Placeholder: two or three sentences from Jyl on why she opened her own practice.
                To be supplied.]
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory pt-[72px] pb-[80px] md:pt-[96px] md:pb-[112px]">
        <div className={container}>
          <p className="eyebrow text-olive">The space</p>
          <MaskedLines
            lines={["Where you will be"]}
            className="mt-5 font-body text-[32px] font-extralight leading-[1.16] tracking-[-0.02em] text-ink"
          />
          <p className="mt-4 font-body text-[16px] font-light text-walnut">
            A quiet suite in Charlottesville, built to feel unhurried.
          </p>
        </div>
        <div className="rail mt-12 overflow-x-auto pl-6 md:mx-auto md:max-w-[1240px] md:overflow-visible md:px-10">
          <div className="flex gap-3 md:grid md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="flex aspect-[4/5] w-[78vw] shrink-0 items-center justify-center rounded-[2px] bg-greige md:w-auto"
              >
                <span className="eyebrow text-walnut">Practice photo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${container} pt-[72px] pb-[72px] md:pt-[96px] md:pb-[96px]`}>
        <Reveal className="rounded-[2px] border border-greige bg-white p-8">
          <p className="eyebrow text-olive">Medical oversight</p>
          <p className="pretty mt-4 font-body text-[15px] font-light leading-[26px] text-walnut">
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
      </section>

      <section className="bg-ink">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-6 py-[72px] md:flex-row md:items-center md:justify-between md:gap-20 md:px-10 md:py-[96px]">
          <div>
            <h2 className="max-w-[20ch] font-body text-[30px] font-extralight tracking-[-0.02em] text-ivory md:text-[38px]">
              Book a consultation
            </h2>
            <p className="measure mt-5 font-body text-[16px] font-light leading-[1.75] text-greige">
              Consultations are thorough and obligation-free.
            </p>
            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <a
                href={practice.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-label inline-flex items-center justify-center rounded-[2px] bg-champagne px-8 py-4 text-ink transition-colors hover:bg-ivory"
              >
                Book now
              </a>
              <a
                href={practice.phoneHref}
                className="font-body text-[16px] font-light text-greige transition-colors hover:text-ivory"
              >
                {practice.phone}
              </a>
            </div>
          </div>
          <img
            src={jylSquare.url}
            alt="Jyl, founder and nurse injector at RIN Aesthetic Practice"
            width={220}
            height={220}
            loading="lazy"
            className="h-[220px] w-[220px] shrink-0 rounded-[2px] object-cover"
          />
        </div>
      </section>
    </PageShell>
  );
}
