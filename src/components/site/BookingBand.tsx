import jyl480 from "@/assets/jyl-4x5-480.jpg.asset.json";
import jyl720 from "@/assets/jyl-4x5-720.jpg.asset.json";
import jyl960 from "@/assets/jyl-4x5-960.jpg.asset.json";
import jyl480w from "@/assets/jyl-4x5-480.webp.asset.json";
import jyl720w from "@/assets/jyl-4x5-720.webp.asset.json";
import jyl960w from "@/assets/jyl-4x5-960.webp.asset.json";
import { practice } from "@/data/site";

type Props = {
  /** Treatment-specific variant: pass the service name, price and booking URL. */
  treatment?: { name: string; price: string; bookingUrl: string };
  /** Horizontal padding matching the page's own container, so the band's left edge lines up with its H1. */
  padding?: string;
};

/** The one closing booking band, used on every page except concern pages. */
export function BookingBand({ treatment, padding = "px-6 md:px-10" }: Props) {
  const heading = treatment ? `Book your ${treatment.name}` : "Book a consultation";
  const line = treatment ? treatment.price : "Consultations are thorough and obligation-free.";
  return (
    <section className="border-t border-greige bg-ivory">
      <div
        className={`mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-y-8 pb-[144px] pt-12 md:grid-cols-[minmax(0,1fr)_220px] md:gap-x-12 md:px-10 md:pb-14 md:pt-14 lg:grid-cols-12 lg:gap-x-8 lg:pb-[72px] lg:pt-[72px] ${padding}`}
      >
        <div className="min-w-0 lg:col-span-7">
          <h2 className="display-tight font-display text-[34px] font-extralight text-ink">
            {heading}
          </h2>
          {line ? (
            <p className="measure mt-4 font-body text-[16px] font-light leading-[1.75] text-walnut">{line}</p>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6">
            <a
              href={treatment ? treatment.bookingUrl : practice.bookingUrl}
              target="_blank"
              rel="noopener"
              className="btn-label inline-flex items-center justify-center rounded-[2px] bg-ink px-8 py-4 text-ivory transition-colors hover:bg-walnut"
            >
              {treatment ? "Book this treatment" : "Book a consultation"}
            </a>
            <a
              href={practice.phoneHref}
              className="font-body text-[16px] font-light text-ink transition-colors hover:text-champagne"
            >
              {practice.phone}
            </a>
          </div>
          {treatment ? (
            <a
              href={practice.bookingUrl}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-block font-body text-[15px] font-light text-walnut underline decoration-greige underline-offset-4 transition-colors hover:text-ink"
            >
              or book a consultation first
            </a>
          ) : null}
        </div>
        <picture className="block self-start lg:col-span-4 lg:col-start-9">
          <source
            type="image/webp"
            srcSet={`${jyl480w.url} 480w, ${jyl720w.url} 720w, ${jyl960w.url} 960w`}
            sizes="(min-width: 1024px) 240px, 100vw"
          />
          <img
            src={jyl960.url}
            srcSet={`${jyl480.url} 480w, ${jyl720.url} 720w, ${jyl960.url} 960w`}
            sizes="(min-width: 1024px) 240px, 100vw"
            alt="Jyl, founder and nurse injector at RIN Aesthetic Practice"
            width={960}
            height={1200}
            loading="lazy"
            className="mx-auto aspect-square h-auto w-full max-w-[240px] rounded-[2px] object-cover object-[50%_20%]"
          />
        </picture>
      </div>
    </section>
  );
}
