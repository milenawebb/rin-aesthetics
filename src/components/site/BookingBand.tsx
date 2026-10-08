import { providerName, providerCredential, providerCredentialTitle } from "@/data/provider";
import { consultation, consultationFeeLine } from "@/data/consultation";
import { keepBrandTogether } from "@/data/lookup";
import { portraitColor, portraitSrc, portraitJpgSrcSet, portraitWebpSrcSet } from "@/lib/portrait";

const BAND_SIZES = "(min-width: 1024px) 240px, (min-width: 768px) 220px, calc(100vw - 48px)";
import { practice } from "@/data/site";
import { CancellationNote } from "@/components/site/CancellationNote";

type Props = {
  /** Treatment-specific variant: pass the service name, price and booking URL. */
  treatment?: { name: string; price: string; priceLines?: string[] | undefined; bookingUrl: string; bookLabel?: string | undefined };
  /** Page-specific copy for the consultation variant (concern pages). */
  heading?: string;
  line?: string;
};

/** The one closing booking band, used on every page. */
export function BookingBand({ treatment, heading: headingCopy, line: lineCopy }: Props) {
  const heading = treatment ? (treatment.bookLabel ?? `Book your ${keepBrandTogether(treatment.name)}`) : (headingCopy ?? "Book a consultation");
  const line = treatment ? treatment.price : (lineCopy ?? null);
  return (
    <section className="booking-band border-t border-greige bg-ivory">
      <div className="site-container">
        <div
          className={`grid min-w-0 grid-cols-1 items-start gap-y-8 pb-12 pt-12 md:grid-cols-[minmax(0,1fr)_220px] md:gap-x-8 md:pb-14 md:pt-14 lg:grid-cols-12 lg:gap-x-8 lg:pb-[72px] lg:pt-[72px]`}
        >
        <div className="min-w-0 lg:col-span-7">
          <h2 className="type-h2 text-ink">
            {heading}
          </h2>
          {treatment?.priceLines ? (
            <div className="mt-4">
              {treatment.priceLines.map((l) => (
                <p key={l} className="font-body text-[16px] font-light leading-[1.75] text-walnut">{l}</p>
              ))}
            </div>
          ) : line ? (
            <p className="measure mt-4 font-body text-[16px] font-light leading-[1.75] text-walnut">{line}</p>
          ) : null}
          <div className="mt-8 flex flex-col items-start gap-y-6 md:flex-row md:flex-wrap md:items-start md:gap-x-10 [--band-btn-h:53px]">
            <div className="flex w-full flex-col md:w-auto">
            <a
              href={treatment ? treatment.bookingUrl : consultation.bookingUrl}
              target="_blank"
              rel="noopener"
              className="btn-label inline-flex w-full md:w-auto items-center justify-center rounded-[2px] bg-ink px-8 py-4 text-ivory transition-colors hover:bg-walnut"
            >
              {treatment ? (treatment.bookLabel ?? "Book this treatment") : "Book a consultation"}
            </a>
            {treatment ? null : (
              <p className="mt-3 font-body text-[14px] font-light leading-[1.6] text-walnut">{consultationFeeLine}</p>
            )}
            <CancellationNote className="mt-3" />
            </div>
            <a
              href={practice.smsHref}
              className="font-body text-[16px] font-light text-ink transition-colors hover:text-champagne-light md:flex md:h-[var(--band-btn-h)] md:items-center"
            >
              Text {practice.phone}
            </a>
          </div>
          {treatment ? (
            <a
              href={consultation.bookingUrl}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-block font-body text-[15px] font-light text-walnut underline decoration-greige underline-offset-4 transition-colors hover:text-ink"
            >
              or book a consultation first
            </a>
          ) : null}
          {treatment ? (
            <p className="mt-2 font-body text-[14px] font-light leading-[1.6] text-walnut">{consultationFeeLine}</p>
          ) : null}
        </div>
        <picture className="block md:justify-self-end lg:col-span-4 lg:col-start-9">
          <source type="image/webp" srcSet={portraitWebpSrcSet} sizes={BAND_SIZES} />
          <img
            src={portraitSrc}
            srcSet={portraitJpgSrcSet}
            sizes={BAND_SIZES}
            alt={`${providerName}, founder and ${providerCredential} at RIN Aesthetic Practice`}
            width={1123}
            height={1401}
            loading="lazy"
            style={{ backgroundColor: portraitColor }}
            className="block aspect-square h-auto w-full rounded-[2px] object-cover object-[50%_20%] md:max-w-[220px] lg:max-w-[240px]"
          />
        </picture>
        </div>
      </div>
    </section>
  );
}
