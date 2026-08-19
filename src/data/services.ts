import deviceRefinery from "@/assets/device-refinery.png.asset.json";
import srTech1 from "@/assets/sr-tech-1.png.asset.json";
import srTech2 from "@/assets/sr-tech-2.png.asset.json";
import srTech3 from "@/assets/sr-tech-3.png.asset.json";
import srTech4 from "@/assets/sr-tech-4.png.asset.json";

export interface ServiceVariant {
  marker: string;
  title: string;
  body: string;
  points?: string[];
  /** Low-resolution reference photograph, rendered as a labelled placeholder. */
  placeholderImage?: string;
}

export interface ServicePromise {
  label: string;
  body: string;
}

export interface ServiceStep {
  title: string;
  body: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ConcernTag {
  label: string;
  slug: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  category: string;
  isSignature?: boolean;
  priceDisplay: string;
  downtime: string;
  sessions: string;
  followUp?: string;
  concernTags: ConcernTag[];
  heroImage?: string;
  eyebrow?: string;
  headingSuffix?: string;
  standfirst?: string;
  promises?: ServicePromise[];
  intro: string[];
  helpsWith: string[];
  suitableFor: string[];
  notSuitableNote?: string;
  variantsLabel?: string;
  variantsHeading?: string;
  variantsIntro?: string;
  variants?: ServiceVariant[];
  steps: ServiceStep[];
  preCare: string[];
  postCare: string[];
  providerHeading?: string;
  providerParagraphs?: string[];
  faqs: ServiceFaq[];
  relatedServiceIds: string[];
  relatedProductIds: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  priceDisplay: string;
}

export const services: Service[] = [
  {
    id: "DEV-03",
    slug: "skin-refinery",
    name: "The Skin Refinery",
    headingSuffix: "by RIN",
    eyebrow: "RIN signature treatment",
    standfirst: "Tone. Texture. Clarity. Luminosity.",
    heroImage: deviceRefinery.url,
    category: "Device & Laser",
    isSignature: true,
    priceDisplay: "$900",
    downtime: "A few days",
    sessions: "Single visit",
    followUp: "Complimentary",
    concernTags: [
      { label: "Uneven tone", slug: "uneven-tone" },
      { label: "Redness", slug: "redness" },
      { label: "Texture and pores", slug: "texture-and-pores" },
      { label: "Lines and wrinkles", slug: "lines-and-wrinkles" },
      { label: "Acne", slug: "acne" },
      { label: "Acne scarring", slug: "acne-scarring" },
    ],
    intro: [
      "The Skin Refinery is our signature light and laser treatment, built on the Candela Nordlys platform. It combines advanced IPL with two fractional laser wavelengths to refine, renew and reveal clearer skin \u2014 in one customised session rather than across months of separate appointments.",
      "Every session is set individually. Which technologies are used, and at what strength, depends on what your skin needs on the day.",
    ],
    promises: [
      {
        label: "Customised to you",
        body: "Settings chosen for your skin, not a fixed protocol",
      },
      {
        label: "Visible results",
        body: "Change you can see, documented at your follow-up",
      },
      {
        label: "Minimal downtime",
        body: "A few quiet days, not a few quiet weeks",
      },
      {
        label: "Broad suitability",
        body: "Safe across a wide range of skin types",
      },
    ],
    helpsWith: [
      "Uneven tone, sun spots and pigmentation",
      "Persistent redness and rosacea",
      "Rough texture and enlarged pores",
      "Fine lines and deeper wrinkles",
      "Active breakouts and oil control",
      "Acne scarring at the surface and below it",
    ],
    suitableFor: [
      "Anyone who wants several concerns addressed in one visit",
      "Skin that has stopped responding to skincare alone",
      "Patients planning four to five weeks before an event",
      "A wide range of skin types, confirmed individually at consultation",
    ],
    notSuitableNote:
      "Recent sun exposure, a very active breakout or travel within three weeks are all reasons to wait. Jyl will say so at consultation, and waiting produces a better result.",
    variantsLabel: "What's in it",
    variantsHeading: "Four technologies. One session.",
    variantsIntro:
      "Each does something the others can't. Combining them is what separates this from a standard photofacial.",
    variants: [
      {
        marker: "SWT",
        title: "SWT IPL Photofacial",
        body: "Broadband light targeting the visible signs of sun exposure and time.",
        points: [
          "Evens skin tone",
          "Reduces redness and rosacea",
          "Improves pigmentation",
          "Stimulates collagen",
        ],
        placeholderImage: srTech1.url,
      },
      {
        marker: "SWT",
        title: "SWT IPL for Acne",
        body: "The same light technology tuned to acne-causing bacteria and inflammation.",
        points: [
          "Reduces active breakouts",
          "Calms inflammation",
          "Helps control oil",
          "Discourages future breakouts",
        ],
        placeholderImage: srTech2.url,
      },
      {
        marker: "1940nm",
        title: "Fractional Laser",
        body: "Non-ablative resurfacing that works at the surface.",
        points: [
          "Improves fine lines and texture",
          "Minimises enlarged pores",
          "Softens acne scarring",
          "Stimulates collagen and elastin",
        ],
        placeholderImage: srTech3.url,
      },
      {
        marker: "1550nm",
        title: "Fractional Laser",
        body: "Deeper fractional energy that remodels and tightens.",
        points: [
          "Improves deeper wrinkles",
          "Tightens lax skin",
          "Reduces deeper acne scars",
          "Enhances tone and firmness",
        ],
        placeholderImage: srTech4.url,
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
    preCare: [
      "Avoid sun exposure, tanning beds and self-tanner",
      "Stop retinol and retinoids",
      "Stop exfoliating acids and chemical peels",
      "Wear SPF daily",
      "Arrive with clean skin, free of makeup or lotions",
    ],
    postCare: [],
    providerHeading: "Conservative settings, honest expectations",
    providerParagraphs: [
      "Jyl will tell you plainly if your skin isn't ready. Recent sun, active breakouts, or a holiday in three weeks are all reasons to wait \u2014 and waiting produces a better result than pushing ahead.",
      "She treats this as one thorough session rather than a package sold in threes. Most people need one, reviewed at five weeks, and only then a decision about whether a second would add anything.",
    ],
    faqs: [
      {
        q: "How much downtime should I plan for?",
        a: "A few days of redness and a sandpaper-like texture as the skin sheds. Most people are comfortable in public by day three.",
      },
      {
        q: "How is this different from a standard IPL photofacial?",
        a: "A photofacial uses IPL alone. This adds two fractional laser wavelengths that reach texture, scarring and collagen \u2014 concerns IPL cannot address.",
      },
      {
        q: "Will one session be enough?",
        a: "Often, yes. Your complimentary follow-up is where that gets assessed properly.",
      },
      {
        q: "Is it suitable for darker skin tones?",
        a: "The platform is designed for a wide range of skin types, and Jyl confirms suitability individually at consultation.",
      },
      {
        q: "Can it treat acne as well as ageing?",
        a: "Yes \u2014 one of the four technologies is tuned specifically for active acne, which is why the session can address both.",
      },
    ],
    relatedServiceIds: ["DEV-06", "DEV-05"],
    relatedProductIds: ["SB-08", "SB-04"],
  },
];

export const products: Product[] = [
  {
    id: "SB-08",
    slug: "barrier-recovery-balm",
    name: "Barrier Recovery Balm",
    category: "Aftercare",
    description: "The occlusive balm we send home after every light and laser session.",
    priceDisplay: "$48",
  },
  {
    id: "SB-04",
    slug: "mineral-spf-50-fluid",
    name: "Mineral SPF 50 Fluid",
    category: "Daily care",
    description: "Tinted zinc sunscreen that sits well over healing skin.",
    priceDisplay: "$62",
  },
  {
    id: "PRD-01",
    slug: "barrier-repair-balm",
    name: "Barrier Repair Balm",
    category: "Aftercare",
    description: "The occlusive balm we send home after every device treatment.",
    priceDisplay: "$48",
  },
  {
    id: "PRD-02",
    slug: "mineral-spf-50",
    name: "Mineral SPF 50",
    category: "Daily care",
    description: "Tinted zinc sunscreen that sits well over healing skin.",
    priceDisplay: "$62",
  },
];

export const serviceSummaries: {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  priceDisplay: string;
}[] = [
  {
    id: "DEV-01",
    slug: "nordlys-ipl",
    name: "Nordlys IPL",
    category: "Device & Laser",
    description: "Targeted light for sun damage, pigment and diffuse redness.",
    priceDisplay: "From $350",
  },
  {
    id: "INJ-02",
    slug: "neuromodulator",
    name: "Neuromodulator",
    category: "Injectables",
    description: "Softening expression lines while keeping movement natural.",
    priceDisplay: "From $14 per unit",
  },
  {
    id: "DEV-03",
    slug: "skin-refinery",
    name: "The Skin Refinery",
    category: "Device & Laser",
    description: "Four technologies in one customised light and laser session.",
    priceDisplay: "$900",
  },
  {
    id: "DEV-05",
    slug: "microneedling-rf",
    name: "Microneedling with radiofrequency",
    category: "Device & Laser",
    description: "Controlled injury and heat to firm the lower face and refine texture.",
    priceDisplay: "From $650",
  },
  {
    id: "DEV-06",
    slug: "frax-1550-resurfacing",
    name: "Frax 1550 Resurfacing",
    category: "Device & Laser",
    description: "Deeper fractional resurfacing for scarring and established lines.",
    priceDisplay: "From $600",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
