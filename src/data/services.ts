// Generated from rin-catalog-and-quiz.xlsx. Do not hand-edit structure.
// Content fields left empty are filled in Stage 3. Any section whose field is
// empty must render nothing at all, never an empty heading or a placeholder.

export type Downtime = "none" | "minimal" | "days";

export interface ServiceOption {
  name: string;
  price: string;
  note: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  name: string;
  /** Used wherever several treatments are listed together. */
  shortName: string;
  slug: string;
  category: string;
  priceDisplay: string;
  bookingUrl?: string;
  priceBand: string;
  downtime: Downtime;
  seriesSessions: number;
  repeatWeeks: number | null;
  concernTags: string[];
  pairsWith: string[];
  precareId: string;
  aftercareId: string;
  shortDescription: string;
  options: ServiceOption[];
  // Stage 3 content. Empty until written and approved by the provider.
  intro: string[];
  helpsWith: string[];
  whoItsFor: string[];
  notFor: string;
  steps: { title: string; body: string }[];
  howJylApproaches: string;
  faqs: Faq[];
  eyebrow?: string;
  tagline?: string;
  promises?: { label: string; text: string }[];
  technologiesHeading?: string;
  technologiesIntro?: string;
  technologies?: { badge: string; name: string; description: string; bullets: string[] }[];
  howJylApproachesHeading?: string;
}

export const services: Service[] = [
  {
    id: "INJ-01",
    name: "Neurotoxin (Daxxify, Dysport, or Xeomin)",
    shortName: "Neurotoxin",
    slug: "injectables/neurotoxin",
    category: "Injectables",
    priceDisplay: "From $95",
    priceBand: "low",
    downtime: "none",
    seriesSessions: 1,
    repeatWeeks: 16,
    concernTags: ["fine_lines"],
    pairsWith: ["INJ-10", "SB-01"],
    precareId: "PC-INJECT",
    aftercareId: "AC-TOX",
    shortDescription:
      "Softens expression lines in the forehead, brows and around the eyes.",
    options: [],
    intro: [
      "Neurotoxin softens the lines that appear when you move your face: across the forehead, between the brows, and at the outer corners of the eyes. It eases the muscle underneath so the line has a chance to settle rather than deepen with every expression.",
      "RIN carries Daxxify, Dysport and Xeomin. Which one suits you depends on how fast you want it to start working and how long you want it to last. That is decided at your appointment rather than picked from a menu.",
    ],
    helpsWith: [
      "Horizontal lines across the forehead",
      "The vertical lines between the brows",
      "Crow's feet at the outer corners of the eyes",
      "A brow that sits lower or heavier than it used to",
      "Dimpling and texture across the chin",
      "NEEDS APPROVAL: confirm which areas Jyl treats. Masseter, lip flip, bunny lines and underarm sweating are commonly offered and are not listed here because I cannot confirm she does them.",
    ],
    whoItsFor: [
      "Anyone whose lines stay visible after the expression has stopped",
      "First-time patients who want something that wears off rather than something permanent",
      "Patients already having filler who want movement softened as well as volume restored",
      "Anyone wanting to slow a line down before it sets in",
    ],
    notFor:
      "Not during pregnancy or breastfeeding, and not with certain neuromuscular conditions. If a line is fully visible when your face is completely still, neurotoxin alone will not erase it, and Jyl will tell you that rather than treat it and hope.",
    steps: [
      {
        title: "Consultation",
        body: "Jyl watches how your face moves, not only how it looks at rest. Where you hold tension decides where the product goes and how much of it you need.",
      },
      {
        title: "The appointment",
        body: "A series of small injections with a fine needle. Most people describe it as a quick pinch. Plan on about fifteen minutes and go straight back to your day afterwards.",
      },
      {
        title: "The first two weeks",
        body: "Movement eases gradually rather than all at once. Most people notice a change around day three or four, with the full result at about two weeks.",
      },
      {
        title: "Your follow-up",
        body: "A complimentary review between weeks two and three. If anything needs adjusting, that is when it gets adjusted, and it is included.",
      },
    ],
    howJylApproaches:
      "Jyl treats conservatively on a first visit and reviews at two weeks, rather than using more product up front and hoping it lands well. The aim is to soften movement, not remove it. Looking like you have had nothing done is the easier of the two outcomes to achieve, and it is the one she defaults to unless you ask for something stronger.",
    faqs: [
      {
        question: "How long does it last?",
        answer:
          "NEEDS APPROVAL: confirm the range Jyl quotes. Draft: Around three to four months for most people, with Daxxify typically lasting longer. How long it lasts depends on the product, the dose and how strongly you use those muscles.",
      },
      {
        question: "Will I look frozen?",
        answer:
          "Not at the doses Jyl uses on a first visit. She treats conservatively and reviews at two weeks, which means the result is adjusted upward if you want more rather than waiting out a result that went too far.",
      },
      {
        question: "Does it hurt?",
        answer:
          "Most people find it very manageable. The needle is fine and each injection takes a second. There is no numbing required for most areas.",
      },
      {
        question: "What is the difference between Daxxify, Dysport and Xeomin?",
        answer:
          "NEEDS APPROVAL: confirm how Jyl explains this. Draft: They are all neurotoxins and they all work the same way. They differ in how quickly they take effect and how long they last. Jyl will recommend one based on what you want and how you have responded to treatment before.",
      },
      {
        question: "What does the price include?",
        answer:
          "NEEDS APPROVAL: the catalog says From $95 but does not say what that buys. Confirm whether this is per unit, per area, or a minimum, and whether a typical first treatment costs more. The page must say, or the price misleads.",
      },
    ],
  },
  {
    id: "INJ-02",
    name: "Dermal Fillers",
    shortName: "Dermal Fillers",
    slug: "injectables/dermal-fillers",
    category: "Injectables",
    priceDisplay: "Price on consultation",
    priceBand: "high",
    downtime: "minimal",
    seriesSessions: 1,
    repeatWeeks: 48,
    concernTags: ["volume_loss", "contour"],
    pairsWith: ["INJ-01"],
    precareId: "PC-INJECT",
    aftercareId: "AC-FILLER",
    shortDescription: "Restores lost volume and smooths lines using hyaluronic acid filler.",
    options: [],
    intro: [],
    helpsWith: [],
    whoItsFor: [],
    notFor: "",
    steps: [],
    howJylApproaches: "",
    faqs: [],
  },
  {
    id: "INJ-03",
    name: "Lip Filler",
    shortName: "Lip Filler",
    slug: "injectables/lip-filler",
    category: "Injectables",
    priceDisplay: "$800",
    priceBand: "high",
    downtime: "minimal",
    seriesSessions: 1,
    repeatWeeks: 36,
    concernTags: ["lips", "volume_loss"],
    pairsWith: ["HY-09"],
    precareId: "PC-INJECT",
    aftercareId: "AC-FILLER",
    shortDescription: "Adds volume and definition to the lips, tailored to how much change you want.",
    options: [],
    intro: [],
    helpsWith: [],
    whoItsFor: [],
    notFor: "",
    steps: [],
    howJylApproaches: "",
    faqs: [],
  },
  {
    id: "INJ-04",
    name: "Full Facial Balancing",
    shortName: "Full Facial Balancing",
    slug: "injectables/full-facial-balancing",
    category: "Injectables",
    priceDisplay: "$2,100",
    priceBand: "high",
    downtime: "minimal",
    seriesSessions: 1,
    repeatWeeks: 52,
    concernTags: ["volume_loss", "contour", "laxity"],
    pairsWith: ["INJ-01"],
    precareId: "PC-INJECT",
    aftercareId: "AC-FILLER",
    shortDescription: "Three to four syringes used across the face to harmonize proportions rather than treat one area.",
    options: [],
    intro: [],
    helpsWith: [],
    whoItsFor: [],
    notFor: "",
    steps: [],
    howJylApproaches: "",
    faqs: [],
  },
  {
    id: "INJ-05",
    name: "Regenerative Medicine / Biostimulators (Sculptra, Radiesse)",
    shortName: "Biostimulators",
    slug: "injectables/biostimulators",
    category: "Injectables",
    priceDisplay: "From $750",
    priceBand: "high",
    downtime: "minimal",
    seriesSessions: 3,
    repeatWeeks: 26,
    concernTags: ["laxity", "volume_loss", "fine_lines"],
    pairsWith: ["INJ-02"],
    precareId: "PC-INJECT",
    aftercareId: "AC-BIOSTIM",
    shortDescription: "Stimulates your own collagen gradually over a series, for subtle long-lasting change.",
    options: [],
    intro: [],
    helpsWith: [],
    whoItsFor: [],
    notFor: "",
    steps: [],
    howJylApproaches: "",
    faqs: [],
  },
  {
    id: "INJ-07",
    name: "Platelet Rich Plasma Hair Restoration",
    shortName: "PRP Hair Restoration",
    slug: "injectables/prp-hair-restoration",
    category: "Injectables",
    priceDisplay: "From $750",
    priceBand: "high",
    downtime: "minimal",
    seriesSessions: 3,
    repeatWeeks: 26,
    concernTags: ["hair_loss"],
    pairsWith: [],
    precareId: "PC-INJECT",
    aftercareId: "AC-PRP",
    shortDescription: "Uses your own platelets to stimulate growth in thinning areas. Starts with a candidacy consult.",
    options: [],
    intro: [],
    helpsWith: [],
    whoItsFor: [],
    notFor: "",
    steps: [],
    howJylApproaches: "",
    faqs: [],
  },
  {
    id: "INJ-08",
    name: "EZ Gel / PRP",
    shortName: "EZ Gel and PRP",
    slug: "injectables/ez-gel-prp",
    category: "Injectables",
    priceDisplay: "From $750",
    priceBand: "high",
    downtime: "minimal",
    seriesSessions: 2,
    repeatWeeks: 6,
    concernTags: ["volume_loss", "texture", "eye_area", "laxity"],
    pairsWith: ["INJ-05"],
    precareId: "PC-INJECT",
    aftercareId: "AC-PRP",
    shortDescription: "A filler-like volumizer made from your own blood, used under the eyes, cheeks, lips and laugh lines.",
    options: [],
    intro: [],
    helpsWith: [],
    whoItsFor: [],
    notFor: "",
    steps: [],
    howJylApproaches: "",
    faqs: [],
  },
  {
    id: "INJ-09",
    name: "Skin Booster Skinvive",
    shortName: "Skinvive",
    slug: "injectables/skinvive",
    category: "Injectables",
    priceDisplay: "$600",
    priceBand: "mid",
    downtime: "none",
    seriesSessions: 1,
    repeatWeeks: 26,
    concernTags: ["hydration", "texture", "dryness", "fine_lines"],
    pairsWith: ["HY-01"],
    precareId: "PC-INJECT",
    aftercareId: "AC-FILLER",
    shortDescription: "Micro-droplet hydration that improves smoothness and glow rather than adding volume.",
    options: [],
    intro: [],
    helpsWith: [],
    whoItsFor: [],
    notFor: "",
    steps: [],
    howJylApproaches: "",
    faqs: [],
  },
  {
    id: "DEV-01",
    name: "Non-ablative Fractional Treatment (Lips)",
    shortName: "Fractional Treatment for Lips",
    slug: "devices/fractional-lips",
    category: "Device & Laser",
    priceDisplay: "$250",
    priceBand: "low",
    downtime: "minimal",
    seriesSessions: 1,
    repeatWeeks: 26,
    concernTags: ["lips", "fine_lines", "texture"],
    pairsWith: ["INJ-03"],
    precareId: "PC-LASER",
    aftercareId: "AC-LASER",
    shortDescription: "Refreshes the lip area and smooths lip lines without adding volume.",
    options: [],
    intro: [],
    helpsWith: [],
    whoItsFor: [],
    notFor: "",
    steps: [],
    howJylApproaches: "",
    faqs: [],
  },
  {
    id: "DEV-03",
    name: "The Skin Refinery by RIN",
    shortName: "The Skin Refinery",
    slug: "devices/skin-refinery",
    category: "Device & Laser",
    priceDisplay: "$900",
    priceBand: "high",
    downtime: "days",
    seriesSessions: 1,
    repeatWeeks: 26,
    concernTags: ["pigment", "redness", "texture", "fine_lines", "acne", "scarring"],
    pairsWith: ["DEV-06", "DEV-05", "SB-08", "SB-04"],
    precareId: "PC-LASER",
    aftercareId: "AC-LASER",
    shortDescription:
      "Her signature treatment, exclusive to RIN. Three Candela technologies combined in one customized session.",

    options: [],
    eyebrow: "RIN SIGNATURE TREATMENT",
    tagline: "Tone. Texture. Clarity. Luminosity.",

    intro: [
      "The Skin Refinery is our signature light and laser treatment, built on the Candela Nordlys platform. It combines advanced IPL with two fractional laser wavelengths to refine, renew and reveal clearer skin in one customized session, rather than across months of separate appointments.",
      "Every session is set individually. Which technologies are used, and at what strength, depends on what your skin needs on the day.",
    ],

    promises: [
      { label: "CUSTOMIZED TO YOU", text: "Settings chosen for your skin, not a fixed protocol" },
      { label: "VISIBLE RESULTS", text: "Change you can see, documented at your follow-up" },
      { label: "MINIMAL DOWNTIME", text: "A few quiet days, not a few quiet weeks" },
      { label: "BROAD SUITABILITY", text: "Safe across a wide range of skin types" },
    ],

    helpsWith: [
      "Uneven tone, sun spots and pigmentation",
      "Persistent redness and rosacea",
      "Rough texture and enlarged pores",
      "Fine lines and deeper wrinkles",
      "Active breakouts and oil control",
      "Acne scarring at the surface and below it",
    ],

    whoItsFor: [
      "Anyone who wants several concerns addressed in one visit",
      "Skin that has stopped responding to skincare alone",
      "Patients planning four to five weeks before an event",
      "A wide range of skin types, confirmed individually at consultation",
    ],

    notFor:
      "Recent sun exposure, a very active breakout or travel within three weeks are all reasons to wait. Jyl will say so at consultation, and waiting produces a better result.",

    technologiesHeading: "Four technologies. One session.",
    technologiesIntro:
      "Each does something the others cannot. Combining them is what separates this from a standard photofacial.",
    technologies: [
      {
        badge: "SWT",
        name: "SWT IPL Photofacial",
        description: "Broadband light targeting the visible signs of sun exposure and time.",
        bullets: [
          "Evens skin tone",
          "Reduces redness and rosacea",
          "Improves pigmentation",
          "Stimulates collagen",
        ],
      },
      {
        badge: "SWT",
        name: "SWT IPL for Acne",
        description: "The same light technology tuned to acne-causing bacteria and inflammation.",
        bullets: [
          "Reduces active breakouts",
          "Calms inflammation",
          "Helps control oil",
          "Discourages future breakouts",
        ],
      },
      {
        badge: "1940NM",
        name: "Fractional Laser",
        description: "Non-ablative resurfacing that works at the surface.",
        bullets: [
          "Improves fine lines and texture",
          "Minimizes enlarged pores",
          "Softens acne scarring",
          "Stimulates collagen and elastin",
        ],
      },
      {
        badge: "1550NM",
        name: "Fractional Laser",
        description: "Deeper fractional energy that remodels and tightens.",
        bullets: [
          "Improves deeper wrinkles",
          "Tightens lax skin",
          "Reduces deeper acne scars",
          "Enhances tone and firmness",
        ],
      },
    ],

    steps: [
      {
        title: "Consultation",
        body: "Jyl assesses your skin and confirms this is the right treatment, or that something gentler should come first.",
      },
      {
        title: "The week before",
        body: "Preparation instructions arrive by email. Following them is what makes the session safe and effective.",
      },
      {
        title: "The session",
        body: "Skin is cleansed and numbed, then each technology is applied in sequence at settings chosen for you.",
      },
      {
        title: "Afterwards",
        body: "Aftercare arrives the same day, with follow-up guidance across the first week. Your complimentary review is booked for four to five weeks later.",
      },
    ],

    howJylApproachesHeading: "Conservative settings, honest expectations",
    howJylApproaches:
      "Jyl will tell you plainly if your skin is not ready. Recent sun, active breakouts, or a holiday in three weeks are all reasons to wait, and waiting produces a better result. She treats this as one thorough session rather than a package sold in threes. Most people need one, reviewed at five weeks, and only then a decision about whether a second would add anything.",

    faqs: [
      {
        question: "How much downtime should I plan for?",
        answer:
          "NEEDS APPROVAL. Draft: A few days. Expect redness and a sandpaper texture that settles over roughly three to five days, with makeup usually fine after the first forty-eight hours.",
      },
      {
        question: "How is this different from a standard IPL photofacial?",
        answer:
          "A photofacial uses IPL alone. This adds two fractional laser wavelengths that reach texture, scarring and collagen. IPL cannot address those.",
      },
      {
        question: "Will one session be enough?",
        answer:
          "Often, yes. Your complimentary follow-up is where that gets assessed properly.",
      },
      {
        question: "Is it suitable for darker skin tones?",
        answer:
          "The platform is designed for a wide range of skin types, and Jyl confirms suitability individually at consultation.",
      },
      {
        question: "Can it treat acne as well as aging?",
        answer:
          "Yes. One of the technologies is tuned specifically for active acne, which is why the session can address both.",
      },
    ],
  },
  {
    id: "DEV-05",
    name: "Candela 1940 & 1550 Fractional Laser",
    shortName: "Fractional Laser",
    slug: "devices/fractional-laser",
    category: "Device & Laser",
    priceDisplay: "$675",
    priceBand: "mid",
    downtime: "days",
    seriesSessions: 1,
    repeatWeeks: 26,
    concernTags: ["texture", "pigment", "pores", "fine_lines", "laxity", "scarring"],
    pairsWith: ["DEV-04"],
    precareId: "PC-LASER",
    aftercareId: "AC-RESURFACE",
    shortDescription: "Two fractional wavelengths working at different depths to renew skin from the inside out.",
    options: [],
    intro: [],
    helpsWith: [],
    whoItsFor: [],
    notFor: "",
    steps: [],
    howJylApproaches: "",
    faqs: [],
  },
  {
    id: "DEV-06",
    name: "Candela SWT IPL",
    shortName: "SWT IPL",
    slug: "devices/ipl",
    category: "Device & Laser",
    priceDisplay: "$250 spot, $450 full face or chest",
    priceBand: "mid",
    downtime: "minimal",
    seriesSessions: 1,
    repeatWeeks: 26,
    concernTags: ["sun_damage", "pigment", "redness", "texture"],
    pairsWith: ["DEV-04"],
    precareId: "PC-LASER",
    aftercareId: "AC-LASER",
    shortDescription: "Evens tone by targeting sun damage, redness and broken capillaries. Treat a few spots or the whole face or chest.",
    options: [
      { name: "Spot treatment", price: "$250", note: "A few specific spots rather than the whole area." },
      { name: "Full face or chest", price: "$450", note: "Even tone across the whole area in one session." },
    ],
    intro: [],
    helpsWith: [],
    whoItsFor: [],
    notFor: "",
    steps: [],
    howJylApproaches: "",
    faqs: [],
  },
  {
    id: "SKN-01",
    name: "VI Peel",
    shortName: "VI Peel",
    slug: "skin-treatments/vi-peel",
    category: "Skin Treatments",
    priceDisplay: "From $350",
    priceBand: "mid",
    downtime: "days",
    seriesSessions: 3,
    repeatWeeks: 8,
    concernTags: ["pigment", "texture", "acne", "scarring", "sun_damage"],
    pairsWith: ["SB-08"],
    precareId: "PC-PEEL",
    aftercareId: "AC-PEEL",
    shortDescription: "A medical-grade peel suitable for all skin types. Includes a post-care kit to take home.",
    options: [],
    intro: [],
    helpsWith: [],
    whoItsFor: [],
    notFor: "",
    steps: [],
    howJylApproaches: "",
    faqs: [],
  },
  {
    id: "SKN-02",
    name: "Microneedling",
    shortName: "Microneedling",
    slug: "skin-treatments/microneedling",
    category: "Skin Treatments",
    priceDisplay: "From $650",
    priceBand: "mid",
    downtime: "minimal",
    seriesSessions: 3,
    repeatWeeks: 6,
    concernTags: ["texture", "scarring", "pores", "fine_lines", "laxity"],
    pairsWith: ["HY-05"],
    precareId: "PC-MICRO",
    aftercareId: "AC-RESURFACE",
    shortDescription: "Controlled micro-injury that triggers your own repair response, paired with exosomes, PRP or a biphasic peel.",
    options: [
      { name: "With exosomes or PRP", price: "$675", note: "Growth factors applied straight after needling to amplify the repair response." },
      { name: "With biphasic peel", price: "$650", note: "A peel layered with the needling for renewal plus radiance." },
    ],
    intro: [],
    helpsWith: [],
    whoItsFor: [],
    notFor: "",
    steps: [],
    howJylApproaches: "",
    faqs: [],
  },
  {
    id: "HYD-01",
    name: "The Refinement Hydrafacial",
    shortName: "The Refinement",
    slug: "hydrafacials/the-refinement",
    category: "Hydrafacials",
    priceDisplay: "$195",
    priceBand: "low",
    downtime: "none",
    seriesSessions: 1,
    repeatWeeks: 4,
    concernTags: ["hydration", "texture", "pores", "dryness"],
    pairsWith: ["HY-01"],
    precareId: "",
    aftercareId: "AC-FACIAL",
    shortDescription: "A 50-minute treatment covering analysis, cleanse, exfoliation, extractions, LED, boosters and SPF.",
    options: [],
    intro: [],
    helpsWith: [],
    whoItsFor: [],
    notFor: "",
    steps: [],
    howJylApproaches: "",
    faqs: [],
  },
];

export interface BookingAction {
  id: string;
  name: string;
  slug: string;
  priceDisplay: string;
  shortDescription: string;
}

// Not pages. These are booking links and reminder triggers only.
export const bookingActions: BookingAction[] = [
  {
    id: "INJ-06",
    name: "Consultation",
    slug: "book/consultation",
    priceDisplay: "$100",
    shortDescription: "A full assessment with the provider. The fee goes toward your completed service.",
  },
  {
    id: "INJ-10",
    name: "Follow Up",
    slug: "book/follow-up",
    priceDisplay: "Free",
    shortDescription: "A complimentary touch-up after your initial tox, usually between weeks two and three.",
  },
  {
    id: "DEV-04",
    name: "Device Follow Up",
    slug: "book/device-follow-up",
    priceDisplay: "Free",
    shortDescription: "A complimentary review of your results and next steps, usually four to five weeks after treatment.",
  },
];

/** Booking link for a service: its own Vagaro URL when set, otherwise the general booking page. */
export function serviceBookingUrl(service: { bookingUrl?: string }): string {
  return service.bookingUrl && service.bookingUrl.trim() ? service.bookingUrl : "https://www.vagaro.com/rinaesthetics";
}
