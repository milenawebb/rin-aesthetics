import { providerName, providerCredential, providerCredentialTitle } from "@/data/provider";
// Titles and meta descriptions for every indexable route.
//
// Written from the catalog rather than from search data: the site was never
// verified in Google Search Console before 5 October 2026, so there is no
// query history to write against.
//
// Titles aim for 60 characters or under, descriptions for 150 to 160.
// Longer titles get truncated in results; longer descriptions get rewritten
// by Google.
//
// /book/consultation is a page (it states the fee before the Vagaro handoff); the other /book/ routes are redirects and need no metadata.

export interface PageMeta {
  title: string;
  description: string;
}

export const pageMeta: Record<string, PageMeta> = {
  "/book/consultation": {
    title: "Book a Consultation | RIN Aesthetic Practice",
    description: `Book a consultation with ${providerName} at RIN Aesthetic Practice in Charlottesville, Virginia. The fee is shown before you continue to booking.`,
  },
  "/": {
    title: "Medical Aesthetics in Charlottesville, VA | RIN",
    description: `Injectables, lasers and skin treatments from ${providerCredential} ${providerName}. Prices shown on every treatment. Book a consultation in Charlottesville, Virginia.`,
  },
  "/treatments": {
    title: "All Treatments and Prices | RIN Aesthetic Practice",
    description: "Every treatment RIN offers, with prices, downtime and session counts shown. Injectables, lasers, skin treatments and hydrafacials in Charlottesville, VA.",
  },
  "/concerns": {
    title: "Treatments by Concern | RIN Aesthetic Practice",
    description: "Start with what you notice. Each concern lists the treatments that address it, with prices and downtime side by side, so you can compare before you book.",
  },
  "/results": {
    title: "Before and After Results | RIN Aesthetic Practice",
    description: "Unretouched before and after photographs from our own treatment room in Charlottesville, filtered by concern. Individual results vary.",
  },
  "/about": {
    title: `About ${providerName}, ${providerCredentialTitle} | RIN Aesthetic Practice`,
    description: `${providerName} is a ${providerCredential} with over a decade in healthcare, treating one person at a time and telling you plainly when the answer is to do less.`,
  },
  "/shop": {
    title: "Medical-Grade Skincare | RIN Aesthetic Practice",
    description: `skinbetter science and Hydrinity, chosen by ${providerName} to support and hold your results between treatments. Ordered directly from each brand.`,
  },
  "/financing": {
    title: "Financing and Payment Plans | RIN Aesthetic Practice",
    description: "Spread the cost of treatment over monthly payments with PatientFi. Apply in about a minute and see your options before you book.",
  },
  "/contact": {
    title: "Contact and Directions | RIN Aesthetic Practice",
    description: "340 Towncenter Ln, Suite 200B, Charlottesville, VA. Book online, email or text. Use the entrance facing the Sherwin Williams store.",
  },
  "/injectables/neurotoxin": {
    title: "Neurotoxin in Charlottesville, VA | RIN",
    description: "Softens expression lines in the forehead, brows and around the eyes. From $95. Prices, downtime and aftercare shown before you book.",
  },
  "/injectables/dermal-fillers": {
    title: "Dermal Fillers in Charlottesville, VA | RIN",
    description: "Restores lost volume and smooths lines using hyaluronic acid filler. Prices, downtime and aftercare shown before you book.",
  },
  "/injectables/lip-filler": {
    title: "Lip Filler in Charlottesville, VA | RIN",
    description: "Adds volume and definition to the lips, tailored to how much change you want. $800. Prices, downtime and aftercare shown before you book.",
  },
  "/injectables/full-facial-balancing": {
    title: "Full Facial Balancing in Charlottesville, VA | RIN",
    description: "Three to four syringes across the face to harmonize proportions rather than treat one area. $2,100. Prices, downtime and aftercare shown.",
  },
  "/injectables/biostimulators": {
    title: "Biostimulators in Charlottesville, VA | RIN",
    description: "Stimulates your own collagen gradually over a series, for subtle long-lasting change. From $750. Prices, downtime and aftercare shown before you book.",
  },
  "/injectables/prp-hair-restoration": {
    title: "PRP Hair Restoration in Charlottesville, VA | RIN",
    description: "Uses your own platelets to stimulate growth in thinning areas. Starts with a candidacy consult. From $750. Prices and downtime shown.",
  },
  "/injectables/ez-gel-prp": {
    title: "EZ Gel and PRP in Charlottesville, VA | RIN",
    description: "A filler-like volumizer made from your own blood, used under the eyes, cheeks, lips and laugh lines. From $750. Prices and downtime shown.",
  },
  "/injectables/skinvive": {
    title: "Skinvive in Charlottesville, VA | RIN",
    description: "Micro-droplet hydration that improves smoothness and glow rather than adding volume. $600. Prices, downtime and aftercare shown before you book.",
  },
  "/devices/fractional-lips": {
    title: "Fractional Treatment for Lips in Charlottesville, VA | RIN",
    description: "Refreshes the lip area and smooths lip lines without adding volume. $250. Prices, downtime and aftercare shown before you book.",
  },
  "/devices/skin-refinery": {
    title: "The Skin Refinery by RIN in Charlottesville, VA | RIN",
    description: "RIN's signature treatment. Three Candela technologies combined in one customized session. $900. Prices, downtime and aftercare shown.",
  },
  "/devices/fractional-laser": {
    title: "Fractional Laser in Charlottesville, VA | RIN",
    description: "Two fractional wavelengths working at different depths to renew skin from the inside out. $675. Prices, downtime and aftercare shown before you book.",
  },
  "/devices/ipl": {
    title: "SWT IPL in Charlottesville, VA | RIN",
    description: "Sun spots, redness and broken capillaries, treated with broadband light. $250 for a few spots, $450 for the full face or chest. Minimal downtime.",
  },
  "/devices/matrix-pro": {
    title: "Candela Matrix Pro in Charlottesville, VA | RIN",
    description: "Radiofrequency microneedling at three depths, for lax skin on the neck, jowls and jawline. Prices, downtime and aftercare shown before you book.",
  },
  "/skin-treatments/vi-peel": {
    title: "VI Peel in Charlottesville, VA | RIN",
    description: "A medical-grade peel suitable for all skin types. Includes a post-care kit to take home. From $350. Prices, downtime and aftercare shown before you book.",
  },
  "/skin-treatments/microneedling": {
    title: "Microneedling in Charlottesville, VA | RIN",
    description: "Controlled micro-injury that triggers your own repair response, paired with exosomes, PRP or a biphasic peel. From $650. Prices and downtime shown.",
  },
  "/hydrafacials/the-refinement": {
    title: "The Refinement Hydrafacial in Charlottesville, VA | RIN",
    description: "A 50-minute treatment covering analysis, cleanse, exfoliation, extractions, LED, boosters and SPF. $195. Prices and downtime shown.",
  },
  "/concerns/lines-and-wrinkles": {
    title: "Lines and wrinkles treatments in Charlottesville | RIN",
    description: "Forehead lines, frown lines and crow's feet, and the difference between lines that move and lines that stay. Compare by price and downtime.",
  },
  "/concerns/volume-loss": {
    title: "Volume loss treatments in Charlottesville | RIN",
    description: "Hollowing at the temples, cheeks and under the eyes. Compare what restores it, with prices and downtime shown side by side.",
  },
  "/concerns/facial-contour": {
    title: "Facial contour and balance treatments in Charlottesville | RIN",
    description: "Jawline, chin and cheek proportion, treated as one face rather than one feature. Compare the options by price, downtime and sessions.",
  },
  "/concerns/skin-laxity": {
    title: "Skin laxity and firmness treatments in Charlottesville | RIN",
    description: "Skin that has lost its spring along the jawline and neck. Compare the treatments that rebuild it, with prices, downtime and session counts.",
  },
  "/concerns/lips": {
    title: "Lip treatments in Charlottesville | RIN",
    description: "Volume, shape and definition, or just the fine lines around the edge. Compare lip treatments by price, downtime and how long each one lasts.",
  },
  "/concerns/under-eye-area": {
    title: "Under-eye treatments in Charlottesville | RIN",
    description: "Dark circles, hollowing, puffiness and crepey skin under the eyes. Compare the options with prices and downtime shown before you book.",
  },
  "/concerns/pigmentation": {
    title: "Pigmentation and sun damage treatments in Charlottesville | RIN",
    description: "Sun spots, melasma and uneven tone. Compare the light and laser treatments that clear them, with prices, downtime and session counts shown.",
  },
  "/concerns/redness": {
    title: "Redness and visible vessels treatments in Charlottesville | RIN",
    description: "Persistent flushing, rosacea and broken capillaries. Compare the treatments that calm them, with prices and downtime shown side by side.",
  },
  "/concerns/texture-and-pores": {
    title: "Texture and pores treatments in Charlottesville | RIN",
    description: "Rough, uneven texture and enlarged pores. Compare the resurfacing options by price, downtime and how many sessions each one takes.",
  },
  "/concerns/acne-and-scarring": {
    title: "Acne and scarring treatments in Charlottesville | RIN",
    description: "Active breakouts and the marks they leave behind. Compare what treats each, with prices, downtime and how many sessions to expect.",
  },
  "/concerns/dryness-and-dullness": {
    title: "Dryness and dullness treatments in Charlottesville | RIN",
    description: "Skin that feels tight and looks dull however much you moisturize. Compare the treatments that hydrate from within, with prices and downtime.",
  },
  "/concerns/hair-thinning": {
    title: "Hair thinning treatments in Charlottesville | RIN",
    description: "Thinning hair, starting with a candidacy consult to see whether you are a good fit. Compare the options with prices and session counts shown.",
  },
  "/policies/service-policies": {
    title: "Service Policies | RIN Aesthetic Practice",
    description: "Appointments, cancellations, refunds and what to expect when you visit RIN Aesthetic Practice in Charlottesville, Virginia.",
  },
  "/policies/privacy": {
    title: "Privacy Policy | RIN Aesthetic Practice",
    description: "What information RIN Aesthetic Practice collects, why, how long it is kept, and how to ask us to change or delete it.",
  },
  "/policies/cookies": {
    title: "Cookie Policy | RIN Aesthetic Practice",
    description: "What cookies this site uses, what they do, and how to change your preferences or turn them off in your browser.",
  },
  "/policies/terms": {
    title: "Terms and Conditions | RIN Aesthetic Practice",
    description: "The terms you accept by using the RIN Aesthetic Practice website, including arbitration, liability and intellectual property.",
  },
  "/policies/medical-records": {
    title: "Medical Record Requests | RIN Aesthetic Practice",
    description: "How to request a copy of your medical records from RIN Aesthetic Practice, what it costs, and how long records are kept.",
  },
  "/404": {
    title: "Page Not Found | RIN Aesthetic Practice",
    description: "That page does not exist. Browse treatments by concern, or book a consultation in Charlottesville, Virginia.",
  },
};

export function metaFor(route: string): PageMeta {
  return (
    pageMeta[route] ?? {
      title: "RIN Aesthetic Practice | Charlottesville, VA",
      description:
        "Medical aesthetics in Charlottesville, Virginia. Injectables, lasers and skin treatments, with prices shown on every treatment.",
    }
  );
}
