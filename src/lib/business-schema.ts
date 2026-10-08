// The one MedicalBusiness record, emitted on Home and Contact under a shared @id
// so search engines read both copies as the same business.
import { SITE_URL } from "@/lib/seo-head";
import { practice } from "@/data/site";
import { services } from "@/data/services";
import { heroDesktop } from "@/lib/hero";

export const BUSINESS_ID = `${SITE_URL}/#practice`;

// Every dollar amount in every treatment's price display and options, lowest to highest.
function priceRange(): string | undefined {
  const amounts: number[] = [];
  for (const s of services) {
    const texts = [s.priceDisplay, ...(s.options ?? []).map((o) => o.price)];
    for (const t of texts) {
      for (const m of t.replace(/,/g, "").matchAll(/\$(\d+)/g)) amounts.push(Number(m[1]));
    }
  }
  if (amounts.length === 0) return undefined;
  return `$${Math.min(...amounts)}-$${Math.max(...amounts)}`;
}

const absolute = (url: string) => (url.startsWith("http") ? url : `${SITE_URL}${url}`);

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": BUSINESS_ID,
  name: "RIN Aesthetic Practice",
  url: `${SITE_URL}/`,
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["https://schema.org/Wednesday", "https://schema.org/Thursday", "https://schema.org/Friday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
  priceRange: priceRange(),
  areaServed: { "@type": "City", name: "Charlottesville, Virginia" },
  image: absolute(heroDesktop.src),
  sameAs: [practice.instagram],
  logo: `${SITE_URL}/icon-512.png`,
};

export const businessJsonLd = { type: "application/ld+json", children: JSON.stringify(businessSchema) };
