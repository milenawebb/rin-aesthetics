import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { practice } from "@/data/site";
import storefrontJpg from "@/assets/rin-storefront.jpg.asset.json";
import storefrontWebp from "@/assets/rin-storefront.webp.asset.json";

const title = "Contact | RIN Aesthetic Practice";
const description =
  "Book online, email or text RIN Aesthetic Practice. 340 Towncenter Ln, Suite 200B, Charlottesville, VA 22911.";

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(practice.address)}`;

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "RIN Aesthetic Practice",
  url: "https://mwgroupllc.net",
  telephone: "+1-434-217-5300",
  email: practice.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "340 Towncenter Ln, Suite 200B",
    addressLocality: "Charlottesville",
    addressRegion: "VA",
    postalCode: "22911",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 38.1258994, longitude: -78.4453277 },
  sameAs: [practice.instagram],
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  }),
  component: ContactPage,
});

const label = "text-[11px] uppercase tracking-[0.18em] text-walnut";

function ContactPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <h1 className="text-4xl font-light text-ink md:text-5xl">Contact</h1>
        <p className="mt-6 max-w-[68ch] text-lg font-light text-ink/80">
          Booking is the fastest way to reach us.
        </p>

        <div className="mt-16 grid gap-12 border-t border-greige pt-12 md:grid-cols-3 md:gap-10">
          <div>
            <p className={label}>Book</p>
            <a
              href={practice.bookingUrl}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex rounded-[2px] bg-ink px-6 py-3 text-sm tracking-wide text-ivory transition-colors duration-300 hover:bg-walnut"
            >
              Book now
            </a>
            <p className="mt-5 text-sm font-light text-ink/75">
              For injectables and any treatment you already know you want.
            </p>
          </div>
          <div>
            <p className={label}>Email</p>
            <a href={`mailto:${practice.email}`} className="mt-5 block text-lg font-light text-ink hover:text-walnut">
              {practice.email}
            </a>
            <p className="mt-4 text-sm font-light text-ink/75">
              For everything else. We reply within one business day.
            </p>
          </div>
          <div>
            <p className={label}>Text</p>
            <a href={practice.phoneHref} className="mt-5 block text-lg font-light text-ink hover:text-walnut">
              {practice.phone}
            </a>
            <p className="mt-4 text-sm font-light text-ink/75">For anything urgent.</p>
          </div>
        </div>

        <section className="mt-24 border-t border-greige pt-12" aria-labelledby="finding-us">
          <h2 id="finding-us" className={label}>Finding us</h2>
          <address className="mt-6 text-xl font-light not-italic leading-relaxed text-ink">
            {practice.addressLines[0]}
            <br />
            {practice.addressLines[1]}
          </address>
          <p className="mt-6 max-w-[68ch] text-lg font-normal text-champagne">
            Please use the entrance that faces the Sherwin Williams store.
          </p>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm text-walnut underline underline-offset-4 hover:text-ink"
          >
            Get directions
          </a>
          <picture>
            <source srcSet={storefrontWebp.url} type="image/webp" />
            <img
              src={storefrontJpg.url}
              width={1484}
              height={1158}
              loading="lazy"
              alt="The RIN Aesthetic Practice storefront on Towncenter Lane, with the entrance marked"
              className="mt-12 h-auto w-full rounded-[2px]"
            />
          </picture>
        </section>

        <section className="mt-16">
          <a
            href={practice.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-walnut hover:text-ink"
          >
            @rinaestheticsva
          </a>
        </section>
      </div>
    </PageShell>
  );
}
