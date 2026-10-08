// Person schema for the provider, rendered on /about.
//
// Why this matters: Google treats medical and aesthetic content as a topic
// where it wants to know who is behind the advice. A named provider with a
// stated role, employer and verifiable profile is a trust signal that a
// practice without one does not have.
//
// ONE GAP, needing the client:
//
//   1. Credentials. If she is an RN, BSN or similar, those belong here and
//      on the page. This is the one place where letters after a name do real
//      work, because the competing practice leads with MSN and FNP-C and we
//      currently show nothing. Leave the arrays empty rather than inventing
//      anything.

import { providerName, providerFirstName, providerCredential, providerCredentialTitle } from "@/data/provider";
import { SITE_URL } from "@/lib/seo-head";

export const providerSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: providerName,
  givenName: providerFirstName,
  familyName: "Carter",

  jobTitle: providerCredentialTitle,
  description:
    `${providerCredential.charAt(0).toUpperCase()}${providerCredential.slice(1)} and founder of RIN Aesthetic Practice in Charlottesville, Virginia, with over a decade in healthcare and a practice built on conservative, anatomy-led treatment.`,

  url: `${SITE_URL}/about`,
  // image: supplied by the About route from the imported portrait asset.

  worksFor: {
    "@type": "MedicalBusiness",
    name: "RIN Aesthetic Practice",
    url: SITE_URL,
    telephone: "+1-434-217-5300",
    email: "info@rinaestheticsva.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "340 Towncenter Ln, Suite 200B",
      addressLocality: "Charlottesville",
      addressRegion: "VA",
      postalCode: "22911",
      addressCountry: "US",
    },
  },

  hasCredential: [],

  // NEEDS CLIENT: letters she uses after her name, such as "RN", "BSN".
  honorificSuffix: "",

  knowsAbout: [
    "Neurotoxin",
    "Dermal fillers",
    "Lip filler",
    "Facial balancing",
    "Biostimulators",
    "Platelet rich plasma",
    "Fractional laser resurfacing",
    "Intense pulsed light",
    "Microneedling",
    "Chemical peels",
  ],

  sameAs: ["https://www.instagram.com/rinaestheticsva"],
};
