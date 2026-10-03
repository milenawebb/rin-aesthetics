import jylSquare from "@/assets/jyl-square.jpg.asset.json";
import { practice } from "@/data/site";

export function BookingBand() {
  return (
    <section className="bg-ink">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-6 py-[72px] md:flex-row md:items-center md:justify-between md:gap-20 md:px-10 md:py-[96px]">
        <div>
          <h2 className="display-tight max-w-[20ch] font-display text-[30px] font-extralight text-ivory md:text-[38px]">
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
          alt="Jyl Carter, aesthetic nurse practitioner, at RIN Aesthetic Practice"
          width={220}
          height={220}
          loading="lazy"
          className="h-[220px] w-[220px] shrink-0 rounded-[2px] object-cover"
        />
      </div>
    </section>
  );
}
