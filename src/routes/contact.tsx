import { BookingBand } from "@/components/site/BookingBand";
import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { practice } from "@/data/site";
import { submitContactForm } from "@/lib/contact.functions";
import { contactFormSchema, type ContactFormInput } from "@/lib/contact-schema";
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

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

type FormStatus = { kind: "idle" | "success" | "error"; message: string };

function ContactForm() {
  const sendContact = useServerFn(submitContactForm);
  const [status, setStatus] = useState<FormStatus>({ kind: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "idle", message: "" });
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
      const fields = parsed.error.flatten().fieldErrors;
      const nextErrors: Partial<Record<keyof ContactFormInput, string>> = {};
      if (fields.name?.[0]) nextErrors.name = fields.name[0];
      if (fields.email?.[0]) nextErrors.email = fields.email[0];
      if (fields.message?.[0]) nextErrors.message = fields.message[0];
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSending(true);
    try {
      const result = await sendContact({ data: parsed.data });
      setStatus({ kind: result.sent ? "success" : "error", message: result.message });
      if (result.sent) form.reset();
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Your message could not be sent. Please email or text the practice instead.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="mt-24 border-t border-greige pt-12" aria-labelledby="send-message">
      <h2 id="send-message" className="text-3xl font-light text-ink md:text-4xl">Send a message</h2>
      <form className="mt-10 max-w-[680px] space-y-7" noValidate onSubmit={handleSubmit}>
        <div>
          <label htmlFor="contact-name" className={label}>Name</label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            maxLength={100}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className="mt-3 h-12 rounded-[2px] border-greige bg-transparent shadow-none"
          />
          {errors.name && <p id="contact-name-error" className="mt-2 text-sm text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className={label}>Email</label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={255}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className="mt-3 h-12 rounded-[2px] border-greige bg-transparent shadow-none"
          />
          {errors.email && <p id="contact-email-error" className="mt-2 text-sm text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="contact-message" className={label}>Message</label>
          <Textarea
            id="contact-message"
            name="message"
            rows={7}
            maxLength={2000}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className="mt-3 min-h-[180px] resize-y rounded-[2px] border-greige bg-transparent shadow-none"
          />
          {errors.message && <p id="contact-message-error" className="mt-2 text-sm text-destructive">{errors.message}</p>}
        </div>
        <div aria-hidden="true" className="hidden">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <div>
          <p className="mb-4 text-sm font-normal text-walnut">Please do not include medical details in this form.</p>
          <Button
            type="submit"
            disabled={isSending}
            className="h-12 rounded-[2px] bg-ink px-7 text-sm font-normal text-ivory shadow-none hover:bg-walnut"
          >
            {isSending ? "Sending..." : "Send"}
          </Button>
        </div>
        {status.kind !== "idle" && (
          <p
            role="status"
            aria-live="polite"
            className={status.kind === "success" ? "text-sm text-olive" : "text-sm text-destructive"}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}

function ContactPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <h1 className="text-4xl font-light text-ink md:text-5xl">Contact</h1>
        <p className="mt-6 max-w-[68ch] text-lg font-light text-ink/80">
          Booking is the fastest way to reach us.
        </p>

        <div className="mt-16 grid gap-12 border-t border-greige pt-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
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
          <div>
            <p className={label}>Follow</p>
            <a
              href={practice.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-lg font-light text-ink hover:text-walnut"
            >
              <InstagramIcon />
              <span>@rinaestheticsva</span>
            </a>
            <p className="mt-4 text-sm font-light text-ink/75">Recent work and what is new at the practice.</p>
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
              width={1368}
              height={1100}
              loading="lazy"
              alt="The RIN Aesthetic Practice storefront on Towncenter Lane, with the entrance marked"
              className="mt-12 h-auto w-full rounded-[2px] object-contain"
            />
          </picture>
        </section>

        <ContactForm />

        <p className="mt-16 font-body text-[15px] font-light leading-[1.75] text-walnut">
          Buying for someone else?{" "}
          <Link
            to="/shop"
            hash="gift-cards"
            className="text-ink underline decoration-greige underline-offset-[6px] transition-colors hover:decoration-champagne"
          >
            Gift cards
          </Link>{" "}
          can be bought for any amount and used toward any treatment or product.
        </p>
      </div>
      <BookingBand />
    </PageShell>
  );
}
