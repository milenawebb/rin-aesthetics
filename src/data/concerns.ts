// Generated from rin-catalog-and-quiz.xlsx.
// Services on a concern page are derived at runtime by matching tags against
// Service.concernTags. Never hardcode a service list onto a concern.

export interface Concern {
  id: string;
  slug: string;
  h1: string;
  tags: string[];
  // Stage 3 content.
  intro: string;
  body: string[];
  faqs: { question: string; answer: string }[];
}

export const concerns: Concern[] = [
  {
    id: "lines-and-wrinkles",
    slug: "concerns/lines-and-wrinkles",
    h1: "Lines and wrinkles",
    tags: ["fine_lines"],
    intro: "",
    body: [],
    faqs: [],
  },
  {
    id: "volume-loss",
    slug: "concerns/volume-loss",
    h1: "Volume loss",
    tags: ["volume_loss"],
    intro: "",
    body: [],
    faqs: [],
  },
  {
    id: "facial-contour",
    slug: "concerns/facial-contour",
    h1: "Facial contour and balance",
    tags: ["contour"],
    intro: "",
    body: [],
    faqs: [],
  },
  {
    id: "skin-laxity",
    slug: "concerns/skin-laxity",
    h1: "Skin laxity and firmness",
    tags: ["laxity"],
    intro: "",
    body: [],
    faqs: [],
  },
  {
    id: "lips",
    slug: "concerns/lips",
    h1: "Lips",
    tags: ["lips"],
    intro: "",
    body: [],
    faqs: [],
  },
  {
    id: "under-eye-area",
    slug: "concerns/under-eye-area",
    h1: "Under-eye area",
    tags: ["eye_area"],
    intro: "",
    body: [],
    faqs: [],
  },
  {
    id: "pigmentation",
    slug: "concerns/pigmentation",
    h1: "Pigmentation and sun damage",
    tags: ["pigment", "sun_damage"],
    intro: "",
    body: [],
    faqs: [],
  },
  {
    id: "redness",
    slug: "concerns/redness",
    h1: "Redness and visible vessels",
    tags: ["redness"],
    intro: "",
    body: [],
    faqs: [],
  },
  {
    id: "texture-and-pores",
    slug: "concerns/texture-and-pores",
    h1: "Texture and pores",
    tags: ["texture", "pores"],
    intro: "",
    body: [],
    faqs: [],
  },
  {
    id: "acne-and-scarring",
    slug: "concerns/acne-and-scarring",
    h1: "Acne and acne scarring",
    tags: ["acne", "scarring"],
    intro: "",
    body: [],
    faqs: [],
  },
  {
    id: "dryness-and-dullness",
    slug: "concerns/dryness-and-dullness",
    h1: "Dryness and dullness",
    tags: ["dryness", "hydration"],
    intro: "",
    body: [],
    faqs: [],
  },
  {
    id: "hair-thinning",
    slug: "concerns/hair-thinning",
    h1: "Hair thinning",
    tags: ["hair_loss"],
    intro: "",
    body: [],
    faqs: [],
  },
];

export function servicesForConcern<T extends { concernTags: string[] }>(
  concern: Concern,
  all: T[],
): T[] {
  return all.filter((s) => s.concernTags.some((t) => concern.tags.includes(t)));
}
