import { catalog, type CatalogItem } from "./catalog";

export interface ConcernFaq {
  q: string;
  a: string;
}

export interface Concern {
  slug: string;
  /** Primary catalog tag. */
  tag: string;
  /** Secondary tags also pulled into the derived lists. */
  relatedTags?: string[];
  label: string;
  h1: string;
  intro: string[];
  whatCauses?: string[];
  heroImage?: string;
  faqs: ConcernFaq[];
}

const placeholderIntro = (label: string): string[] => [
  `[Placeholder copy] ${label} is one of the concerns we see most often at the practice. This paragraph will be replaced with two or three plain sentences describing what people notice, when they tend to notice it, and how we talk about it in the room.`,
  "[Placeholder copy] The second paragraph will set expectations: what can realistically change, what cannot, and why we would rather plan a sequence than sell a single appointment.",
];

const placeholderCauses = (label: string): string[] => [
  `[Placeholder copy] First common contributor to ${label.toLowerCase()}`,
  "[Placeholder copy] Second contributor, written in plain language",
  "[Placeholder copy] Third contributor, one line only",
  "[Placeholder copy] Fourth contributor, to be confirmed by the provider",
];

const placeholderFaqs = (label: string): ConcernFaq[] => [
  {
    q: `How long does it take to see a change in ${label.toLowerCase()}?`,
    a: "[Placeholder copy] Answer to be written by the provider. It will give a realistic timeframe rather than a best case.",
  },
  {
    q: "Will I need more than one appointment?",
    a: "[Placeholder copy] Answer to be written by the provider, covering typical sequencing and review points.",
  },
  {
    q: "What does it cost to start?",
    a: "[Placeholder copy] Answer to be written by the provider, referring to the consultation rather than a fixed package.",
  },
];

export const concerns: Concern[] = [
  {
    slug: "uneven-tone",
    tag: "pigment",
    relatedTags: ["sun_damage", "dullness"],
    label: "Uneven tone",
    h1: "Uneven tone and dark spots",
    intro: [
      "Uneven tone is usually the first thing people notice in daylight photographs rather than in the mirror. Freckling that once looked incidental joins up across the cheeks and temples, and the skin starts to read as tired regardless of how well you have slept.",
      "It responds well, but it responds slowly and it comes back if the cause is not managed. We plan for both: something to clear what is already there, and a daily routine that keeps it from returning.",
    ],
    whatCauses: [
      "Years of ordinary sun exposure, not only holidays or sunburns",
      "Hormonal change, including pregnancy and the contraceptive pill",
      "Inflammation left behind by spots, scratches or previous treatments",
      "Heat and friction, which can drive pigment even without direct sun",
      "A skin barrier that has been over-exfoliated and is reacting",
    ],
    faqs: [
      {
        q: "Will the spots come back after treatment?",
        a: "Some will, if the cause is still active. Sun-driven pigment stays clear for years with daily SPF; hormonally driven pigment is more persistent and usually needs a maintenance routine rather than a single course.",
      },
      {
        q: "Can I be treated in summer?",
        a: "Yes, provided you have not had recent sun on the skin and you are willing to keep it covered afterwards. We may lower the settings and add a session rather than push a single aggressive treatment.",
      },
      {
        q: "Is laser or a peel better for me?",
        a: "It depends on how deep the pigment sits and how much downtime you can take. Surface pigment often clears with light-based treatment; mixed or hormonal pigment usually does better with a gentler, layered approach.",
      },
      {
        q: "Does darker skin need a different plan?",
        a: "Yes. Richer skin tones carry a higher risk of post-inflammatory pigment, so we treat more conservatively, prepare the skin beforehand and space sessions further apart.",
      },
      {
        q: "How soon will I see a difference?",
        a: "Surface pigment lifts and flakes within one to two weeks. Overall evenness continues improving for around three months as the deeper layers settle.",
      },
    ],
  },
  {
    slug: "lines-and-wrinkles",
    tag: "fine_lines",
    relatedTags: ["laxity"],
    label: "Lines and wrinkles",
    h1: "Lines and wrinkles",
    intro: placeholderIntro("Lines and wrinkles"),
    whatCauses: placeholderCauses("Lines and wrinkles"),
    faqs: placeholderFaqs("Lines and wrinkles"),
  },
  {
    slug: "texture-and-pores",
    tag: "texture",
    relatedTags: ["acne"],
    label: "Texture and pores",
    h1: "Texture and enlarged pores",
    intro: placeholderIntro("Texture and pores"),
    whatCauses: placeholderCauses("Texture and pores"),
    faqs: placeholderFaqs("Texture and pores"),
  },
  {
    slug: "lost-volume",
    tag: "volume",
    relatedTags: ["laxity"],
    label: "Lost volume",
    h1: "Lost volume in the face",
    intro: placeholderIntro("Lost volume"),
    whatCauses: placeholderCauses("Lost volume"),
    faqs: placeholderFaqs("Lost volume"),
  },
  {
    slug: "lips",
    tag: "lips",
    relatedTags: ["volume"],
    label: "Lips",
    h1: "Lip shape and definition",
    intro: placeholderIntro("Lips"),
    whatCauses: placeholderCauses("Lips"),
    faqs: placeholderFaqs("Lips"),
  },
  {
    slug: "under-eye-area",
    tag: "under_eye",
    relatedTags: ["volume", "fine_lines"],
    label: "Under-eye area",
    h1: "The under-eye area",
    intro: placeholderIntro("Under-eye area"),
    whatCauses: placeholderCauses("Under-eye area"),
    faqs: placeholderFaqs("Under-eye area"),
  },
  {
    slug: "redness",
    tag: "redness",
    relatedTags: ["sun_damage"],
    label: "Redness",
    h1: "Facial redness and flushing",
    intro: placeholderIntro("Redness"),
    whatCauses: placeholderCauses("Redness"),
    faqs: placeholderFaqs("Redness"),
  },
  {
    slug: "acne",
    tag: "acne",
    relatedTags: ["texture"],
    label: "Acne",
    h1: "Active acne and congestion",
    intro: placeholderIntro("Acne"),
    whatCauses: placeholderCauses("Acne"),
    faqs: placeholderFaqs("Acne"),
  },
  {
    slug: "acne-scarring",
    tag: "acne_scarring",
    relatedTags: ["texture"],
    label: "Acne scarring",
    h1: "Acne scarring",
    intro: placeholderIntro("Acne scarring"),
    whatCauses: placeholderCauses("Acne scarring"),
    faqs: placeholderFaqs("Acne scarring"),
  },
  {
    slug: "laxity",
    tag: "laxity",
    relatedTags: ["volume"],
    label: "Laxity",
    h1: "Laxity along the jaw and neck",
    intro: placeholderIntro("Laxity"),
    whatCauses: placeholderCauses("Laxity"),
    faqs: placeholderFaqs("Laxity"),
  },
  {
    slug: "dryness-and-dullness",
    tag: "dryness",
    relatedTags: ["dullness"],
    label: "Dryness and dullness",
    h1: "Dryness and dullness",
    intro: placeholderIntro("Dryness and dullness"),
    whatCauses: placeholderCauses("Dryness and dullness"),
    faqs: placeholderFaqs("Dryness and dullness"),
  },
  {
    slug: "thinning-hair",
    tag: "hair",
    label: "Thinning hair",
    h1: "Thinning hair",
    intro: placeholderIntro("Thinning hair"),
    whatCauses: placeholderCauses("Thinning hair"),
    faqs: placeholderFaqs("Thinning hair"),
  },
];

export function getConcern(slug: string) {
  return concerns.find((c) => c.slug === slug);
}

function tagsFor(concern: Concern) {
  return [concern.tag, ...(concern.relatedTags ?? [])];
}

function matches(item: CatalogItem, tags: string[]) {
  return (
    item.active &&
    item.quizEligible &&
    item.concernTags.some((tag) => tags.includes(tag))
  );
}

export function getConcernTreatments(concern: Concern) {
  const tags = tagsFor(concern);
  return catalog
    .filter((item) => item.type === "service" && matches(item, tags))
    .sort((a, b) => a.priceFrom - b.priceFrom);
}

export function getConcernProducts(concern: Concern) {
  const tags = tagsFor(concern);
  return catalog
    .filter((item) => item.type === "product" && matches(item, tags))
    .sort((a, b) => a.priceFrom - b.priceFrom)
    .slice(0, 3);
}

export function getConcernResultsCount(concern: Concern) {
  return getConcernTreatments(concern).reduce(
    (total, item) => total + (item.resultsCount ?? 0),
    0,
  );
}

export function getRelatedConcerns(concern: Concern) {
  const ids = new Set(getConcernTreatments(concern).map((item) => item.id));
  return concerns
    .filter((other) => other.slug !== concern.slug)
    .map((other) => ({
      concern: other,
      shared: getConcernTreatments(other).filter((item) => ids.has(item.id)).length,
    }))
    .filter((entry) => entry.shared > 0)
    .sort((a, b) => b.shared - a.shared)
    .slice(0, 3)
    .map((entry) => entry.concern);
}

export function lowestPrice(items: { priceFrom: number; priceDisplay: string }[]) {
  if (!items.length) return null;
  return items.reduce((min, item) => (item.priceFrom < min.priceFrom ? item : min), items[0]!);
}
