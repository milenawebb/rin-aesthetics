import treatmentRoom from "@/assets/treatment-room.jpg.asset.json";

export interface ServiceVariant {
  marker: string;
  title: string;
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
    slug: "candela-light-and-bright",
    name: "Candela Light & Bright Experience",
    heroImage: treatmentRoom.url,
    category: "Device & Laser",
    isSignature: true,
    priceDisplay: "$900",
    downtime: "A few days",
    sessions: "Single visit",
    followUp: "Complimentary",
    concernTags: [
      { label: "Uneven tone", slug: "uneven-tone" },
      { label: "Lines and wrinkles", slug: "lines-and-wrinkles" },
      { label: "Sun damage", slug: "sun-damage" },
    ],
    intro: [
      "The Light & Bright Experience combines three Candela platforms in a single appointment to address surface pigment, diffuse redness and the early loss of firmness that photographs read as tiredness. It is planned rather than packaged: the sequence and the settings are chosen in the room, for your skin, on the day.",
      "Most people come to it after years of good skincare that has stopped making a visible difference. The intention is not a dramatic change but a clearer, more even canvas that makes everything else you do work harder.",
    ],
    helpsWith: [
      "Sun spots and uneven pigment across the cheeks and temples",
      "Persistent facial redness and visible capillaries",
      "Fine lines around the eyes and mouth",
      "Enlarged pores and rough surface texture",
      "Early laxity along the jawline",
    ],
    suitableFor: [
      "Healthy adults looking for a measured, natural result",
      "Skin that has had sun exposure over many years",
      "Anyone preparing for an event three to four weeks out",
      "Patients who prefer one considered visit over a long course",
    ],
    notSuitableNote:
      "Not suitable during pregnancy or breastfeeding, on recently tanned skin, or within six months of oral isotretinoin. We will review your history at consultation and tell you plainly if this is not the right treatment for you.",
    variantsLabel: "What's in it",
    variantsHeading: "Three platforms, one appointment",
    variantsIntro:
      "Each device does one thing well. Used in sequence, they cover pigment, vascularity and collagen in a single sitting.",
    variants: [
      {
        marker: "01",
        title: "Vbeam Prima",
        body: "Pulsed dye light for redness, flushing and broken capillaries. Calms the vascular tone that makes skin look irritated.",
      },
      {
        marker: "02",
        title: "Nordlys IPL",
        body: "Selective light targeting surface pigment and sun damage. Spots lift and flake away over the following week.",
      },
      {
        marker: "03",
        title: "Frax 1940",
        body: "Non-ablative fractional resurfacing to refine texture and stimulate collagen through the deeper layers.",
      },
    ],
    steps: [
      {
        title: "Consultation and mapping",
        body: "We review your history, photograph the skin in standardised light and agree the sequence and settings together before anything begins.",
      },
      {
        title: "Preparation",
        body: "The skin is cleansed and numbing cream is applied where needed. Comfort is planned for, not endured.",
      },
      {
        title: "Treatment",
        body: "The three passes run in sequence over roughly ninety minutes. You will feel warmth and a series of quick snaps.",
      },
      {
        title: "Immediately after",
        body: "Expect warmth and pinkness similar to mild sunburn. Cooling and a barrier balm are applied before you leave.",
      },
      {
        title: "The following week",
        body: "Pigment darkens then flakes away over three to seven days. Redness settles first, texture continues improving for weeks.",
      },
      {
        title: "Review",
        body: "A complimentary follow-up at six weeks lets us compare photographs and decide whether anything further is worth doing.",
      },
    ],
    preCare: [
      "Avoid deliberate sun exposure and self-tan for two weeks",
      "Stop retinoids and exfoliating acids five days before",
      "Tell us about any cold sore history so we can pre-treat",
      "Arrive with clean skin and no make-up if possible",
    ],
    postCare: [
      "Keep the skin cool and use only the balm provided for 48 hours",
      "No exercise, saunas or hot showers for two days",
      "Do not pick or scrub flaking pigment — let it release",
      "Broad-spectrum SPF 50 daily for at least four weeks",
    ],
    providerHeading: "Treated by Jyl",
    providerParagraphs: [
      "Every Light & Bright appointment is performed by Jyl personally. She trained in aesthetic medicine after more than a decade in clinical nursing and has run device-based treatments for the last nine years.",
      "Her approach is conservative by design. She would rather do slightly less and see you back than chase a result that does not suit your face.",
    ],
    faqs: [
      {
        q: "How much downtime should I plan for?",
        a: "Most people are comfortable in public after two to three days. Pigment flaking is visible up close for about a week and covers well with mineral make-up after 48 hours.",
      },
      {
        q: "Is it painful?",
        a: "It is tolerable. Numbing cream is applied beforehand and the sensation is described as quick, hot snaps against the skin, easing immediately after each pass.",
      },
      {
        q: "How many sessions will I need?",
        a: "The Experience is designed as a single visit. Some patients choose to repeat it annually to maintain the result.",
      },
      {
        q: "When will I see results?",
        a: "Clarity appears within one to two weeks as pigment sheds. Texture and firmness continue improving for up to three months as collagen remodels.",
      },
      {
        q: "Can I have it in summer?",
        a: "Yes, provided you have not been in the sun recently and you commit to daily SPF. We may adjust settings seasonally.",
      },
    ],
    relatedServiceIds: ["DEV-01", "INJ-02"],
    relatedProductIds: ["PRD-01", "PRD-02"],
  },
];

export const products: Product[] = [
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
    slug: "candela-light-and-bright",
    name: "Candela Light & Bright Experience",
    category: "Device & Laser",
    description: "Three Candela platforms in one considered appointment.",
    priceDisplay: "$900",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
