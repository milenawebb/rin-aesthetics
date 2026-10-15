import candela01Before from "@/assets/candela-01-before.jpg.asset.json";
import candela01After from "@/assets/candela-01-after.jpg.asset.json";
import candela02Before from "@/assets/candela-02-before.jpg.asset.json";
import candela02After from "@/assets/candela-02-after.jpg.asset.json";
import candela03Before from "@/assets/candela-03-before.jpg.asset.json";
import candela03After from "@/assets/candela-03-after.jpg.asset.json";
import lips01Before from "@/assets/lips-01-before.jpg.asset.json";
import lips01After from "@/assets/lips-01-after.jpg.asset.json";
import lips02Before from "@/assets/lips-02-before.jpg.asset.json";
import lips02After from "@/assets/lips-02-after.jpg.asset.json";
import neck01Before from "@/assets/neck-01-before.jpg.asset.json";
import neck01After from "@/assets/neck-01-after.jpg.asset.json";
import lips03Before from "@/assets/lips-03-before.jpg.asset.json";
import lips03After from "@/assets/lips-03-after.jpg.asset.json";
import face01Before from "@/assets/face-01-before.jpg.asset.json";
import face01After from "@/assets/face-01-after.jpg.asset.json";
import jaw01Before from "@/assets/jaw-01-before.jpg.asset.json";
import jaw01After from "@/assets/jaw-01-after.jpg.asset.json";

// Before and after gallery.
//
// One record per pair. The same record populates the Results page, the
// matching service page and the matching concern page, so a photo is filed
// once and appears in three places.
//
// CONSENT RULE: an item with a real photograph and consentOnFile false must
// not render anywhere, ever. That check belongs in the component, not in a
// reviewer's memory. Placeholders have no consent requirement because there
// is no patient in them.

export interface GalleryItem {
  id: string;
  // Matches a Service id. Concern tags are derived from that service, never
  // set here, so a photo cannot drift out of sync with the treatment.
  serviceId: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  // "1 session", "3 sessions"
  sessions: string;
  // How long after the last session the second photo was taken.
  interval: string;
  consentOnFile: boolean;
  // True while this is a stand-in. Renders as a labelled greige block.
  placeholder: boolean;
  // Example image with no patient in it, shown only to illustrate the
  // layout. Needs no consent and is never presentable as a result.
  standIn?: boolean;
  // Explicit sign-off. Nothing renders anywhere until this is true.
  published: boolean;
  // Concern tags this result must not appear under, even though its treatment
  // carries them. Empty or absent means it inherits every treatment tag.
  excludeConcernTags?: string[];
  // Further treatment ids whose pages also show this result. The caption still
  // names serviceId. Empty or absent means only its own treatment page.
  alsoShowOn?: string[];
  // Hand-picked for the home page strip. Keep this to six at most.
  featured: boolean;
  // Who supplied the photographs. Absent means "rin". Candela images are
  // not RIN patients and are credited on every card and in the notice.
  source?: GallerySource;
  // CSS object-position for both photos inside the 4:5 tile. Absent means
  // "center". Before and after share it so the pair lines up in the wipe.
  focus?: string;
  // Tile-only fit. Contain preserves the whole photo; absent means cover.
  fit?: "cover" | "contain";
}

export type GallerySource = "rin" | "candela";

export function sourceOf(item: GalleryItem): GallerySource {
  return item.source ?? "rin";
}

export const CANDELA_CREDIT = "Clinical image courtesy of Candela. Not a RIN patient.";

function joinAlt(alt: string): string {
  return `${alt.replace(/\.$/, "")}. ${CANDELA_CREDIT}`;
}

// Alt text as rendered: Candela images carry the credit after the alt.
export function beforeAltText(item: GalleryItem): string {
  return sourceOf(item) === "candela" ? joinAlt(item.beforeAlt) : item.beforeAlt;
}
export function afterAltText(item: GalleryItem): string {
  return sourceOf(item) === "candela" ? joinAlt(item.afterAlt) : item.afterAlt;
}

export const gallery: GalleryItem[] = [
  {
    id: "lips-01",
    serviceId: "INJ-03",
    beforeSrc: lips01Before.url,
    afterSrc: lips01After.url,
    beforeAlt: "Lip filler result, before treatment",
    afterAlt: "Lip filler result, two weeks after one session",
    sessions: "1 session",
    interval: "2 weeks",
    consentOnFile: false,
    placeholder: false,
    standIn: true,
    published: true,
    featured: true,
    excludeConcernTags: ["volume_loss"],
  },
  {
    id: "lips-02",
    serviceId: "INJ-03",
    beforeSrc: lips02Before.url,
    afterSrc: lips02After.url,
    beforeAlt: "Lip filler result, before treatment",
    afterAlt: "Lip filler result, two weeks after one session",
    sessions: "1 session",
    interval: "2 weeks",
    consentOnFile: false,
    placeholder: false,
    standIn: true,
    published: true,
    featured: true,
    excludeConcernTags: ["volume_loss"],
  },
  {
    id: "neck-01",
    serviceId: "DEV-05",
    beforeSrc: neck01Before.url,
    afterSrc: neck01After.url,
    beforeAlt: "Neck texture, before treatment",
    afterAlt: "Neck texture, eight weeks after one session",
    sessions: "1 session",
    interval: "8 weeks",
    consentOnFile: false,
    placeholder: false,
    standIn: true,
    published: true,
    featured: true,
    // Concern pages this result shows on: Lines and wrinkles, and Skin laxity and firmness.
    alsoShowOn: ["INJ-09"],
    excludeConcernTags: ["pigment", "sun_damage", "hair_loss", "eye_area", "acne", "scarring", "texture", "pores"],
  },
  {
    id: "lips-03",
    serviceId: "INJ-03",
    beforeSrc: lips03Before.url,
    afterSrc: lips03After.url,
    beforeAlt: "Lips before lip filler.",
    afterAlt: "The same lips after lip filler, fuller and more defined.",
    sessions: "",
    interval: "",
    consentOnFile: false,
    placeholder: false,
    standIn: false,
    published: true,
    featured: true,
    source: "rin",
    excludeConcernTags: ["volume_loss"],
    fit: "contain",
  },
  {
    id: "face-01",
    serviceId: "INJ-04",
    beforeSrc: face01Before.url,
    afterSrc: face01After.url,
    beforeAlt: "Three-quarter view of a woman's face before treatment.",
    afterAlt: "The same face after full facial balancing.",
    sessions: "",
    interval: "",
    consentOnFile: false,
    placeholder: false,
    standIn: false,
    published: true,
    featured: true,
    source: "rin",
    excludeConcernTags: ["laxity"],
    focus: "center bottom",
  },
  {
    id: "jaw-01",
    serviceId: "INJ-02",
    beforeSrc: jaw01Before.url,
    afterSrc: jaw01After.url,
    beforeAlt: "Side profile of the jawline and chin before treatment.",
    afterAlt: "The same profile after dermal filler to the jawline and chin.",
    sessions: "",
    interval: "",
    consentOnFile: false,
    placeholder: false,
    standIn: false,
    published: true,
    featured: true,
    source: "rin",
    excludeConcernTags: ["volume_loss", "eye_area"],
    focus: "right center",
  },
  {
    id: "candela-01",
    focus: "center 75%",
    serviceId: "DEV-06",
    beforeSrc: candela01Before.url,
    afterSrc: candela01After.url,
    beforeAlt: "Face with freckles across the cheeks and nose, before treatment.",
    afterAlt: "The same face after treatment, with fewer visible freckles.",
    sessions: "",
    interval: "",
    consentOnFile: false,
    placeholder: false,
    published: true,
    featured: true,
    source: "candela",
    alsoShowOn: ["DEV-05"],
    // Concern pages: Pigmentation and sun damage only.
    excludeConcernTags: ["redness", "texture"],
  },
  {
    id: "candela-02",
    focus: "center 70%",
    serviceId: "DEV-06",
    beforeSrc: candela02Before.url,
    afterSrc: candela02After.url,
    beforeAlt: "Side view of a cheek with brown spots, before treatment.",
    afterAlt: "The same cheek after treatment, with the brown spots faded.",
    sessions: "",
    interval: "",
    consentOnFile: false,
    placeholder: false,
    published: true,
    featured: true,
    source: "candela",
    alsoShowOn: ["DEV-05"],
    // Concern pages: Pigmentation and sun damage only.
    excludeConcernTags: ["redness", "texture"],
  },
  {
    id: "candela-03",
    focus: "center 70%",
    serviceId: "DEV-06",
    beforeSrc: candela03Before.url,
    afterSrc: candela03After.url,
    beforeAlt: "Face with freckles across the forehead, cheeks and nose, before treatment.",
    afterAlt: "The same face after treatment, with fewer visible freckles.",
    sessions: "",
    interval: "",
    consentOnFile: false,
    placeholder: false,
    published: true,
    featured: true,
    source: "candela",
    alsoShowOn: ["DEV-05"],
    // Concern pages: Pigmentation and sun damage only.
    excludeConcernTags: ["redness", "texture"],
  },
  {
    id: "tox-01",
    serviceId: "INJ-01",
    beforeSrc: "",
    afterSrc: "",
    beforeAlt: "",
    afterAlt: "",
    sessions: "1 session",
    interval: "2 weeks",
    consentOnFile: false,
    placeholder: true,
    published: false,
    featured: true,
  },
  {
    id: "tox-02",
    serviceId: "INJ-01",
    beforeSrc: "",
    afterSrc: "",
    beforeAlt: "",
    afterAlt: "",
    sessions: "1 session",
    interval: "2 weeks",
    consentOnFile: false,
    placeholder: true,
    published: false,
    featured: false,
  },
  {
    id: "filler-01",
    serviceId: "INJ-02",
    beforeSrc: "",
    afterSrc: "",
    beforeAlt: "",
    afterAlt: "",
    sessions: "1 session",
    interval: "4 weeks",
    consentOnFile: false,
    placeholder: true,
    published: false,
    featured: true,
  },
  {
    id: "balancing-01",
    serviceId: "INJ-04",
    beforeSrc: "",
    afterSrc: "",
    beforeAlt: "",
    afterAlt: "",
    sessions: "1 session",
    interval: "6 weeks",
    consentOnFile: false,
    placeholder: true,
    published: false,
    featured: true,
  },
  {
    id: "biostim-01",
    serviceId: "INJ-05",
    beforeSrc: "",
    afterSrc: "",
    beforeAlt: "",
    afterAlt: "",
    sessions: "3 sessions",
    interval: "12 weeks after the last",
    consentOnFile: false,
    placeholder: true,
    published: false,
    featured: false,
  },
  {
    id: "refinery-01",
    serviceId: "DEV-03",
    beforeSrc: "",
    afterSrc: "",
    beforeAlt: "",
    afterAlt: "",
    sessions: "1 session",
    interval: "5 weeks",
    consentOnFile: false,
    placeholder: true,
    published: false,
    featured: false,
  },
  {
    id: "refinery-02",
    serviceId: "DEV-03",
    beforeSrc: "",
    afterSrc: "",
    beforeAlt: "",
    afterAlt: "",
    sessions: "1 session",
    interval: "5 weeks",
    consentOnFile: false,
    placeholder: true,
    published: false,
    featured: false,
  },
  {
    id: "ipl-01",
    serviceId: "DEV-06",
    beforeSrc: "",
    afterSrc: "",
    beforeAlt: "",
    afterAlt: "",
    sessions: "1 session",
    interval: "4 weeks",
    consentOnFile: false,
    placeholder: true,
    published: false,
    featured: false,
  },
  {
    id: "vipeel-01",
    serviceId: "SKN-01",
    beforeSrc: "",
    afterSrc: "",
    beforeAlt: "",
    afterAlt: "",
    sessions: "1 session",
    interval: "3 weeks",
    consentOnFile: false,
    placeholder: true,
    published: false,
    featured: false,
  },
  {
    id: "microneedling-01",
    serviceId: "SKN-02",
    beforeSrc: "",
    afterSrc: "",
    beforeAlt: "",
    afterAlt: "",
    sessions: "3 sessions",
    interval: "8 weeks after the last",
    consentOnFile: false,
    placeholder: true,
    published: false,
    featured: false,
  },
  {
    id: "prp-hair-01",
    serviceId: "INJ-07",
    beforeSrc: "",
    afterSrc: "",
    beforeAlt: "",
    afterAlt: "",
    sessions: "3 sessions",
    interval: "16 weeks after the last",
    consentOnFile: false,
    placeholder: true,
    published: false,
    featured: false,
  },
];

// The only render gate: marked published with both images present.
// Anything else is absent from every page, never a stand-in block.
export function isDisplayable(item: GalleryItem): boolean {
  return item.published && item.beforeSrc !== "" && item.afterSrc !== "";
}

export const NOTICE_REAL =
  "Unretouched photography from our own treatment room. Individual results vary.";

export const NOTICE_CANDELA =
  "Clinical images courtesy of Candela, the device manufacturer. These are not RIN patients. Individual results vary.";

export const NOTICE_MIXED =
  "Images marked courtesy of Candela are supplied by the device manufacturer. All others are from our own treatment room. Individual results vary.";

// The line under a Results heading, chosen from what is actually displayed.
// Null when nothing displayable is showing.
export function resultsNotice(items: GalleryItem[]): string | null {
  const shown = items.filter(isDisplayable);
  if (!shown.length) return null;
  const candela = shown.filter((g) => sourceOf(g) === "candela").length;
  if (candela === 0) return NOTICE_REAL;
  if (candela === shown.length) return NOTICE_CANDELA;
  return NOTICE_MIXED;
}

export function galleryForService(serviceId: string): GalleryItem[] {
  return publishedGallery().filter((g) => g.serviceId === serviceId || g.alsoShowOn?.includes(serviceId));
}

export function galleryForConcern(
  concernTags: string[],
  serviceTags: (serviceId: string) => string[],
): GalleryItem[] {
  return publishedGallery().filter((item) =>
    serviceTags(item.serviceId).some((tag) => concernTags.includes(tag) && !item.excludeConcernTags?.includes(tag)),
  );
}

export function featured(): GalleryItem[] {
  return publishedGallery().filter((g) => g.featured).slice(0, 6);
}

export function publishedGallery(): GalleryItem[] {
  return gallery.filter(isDisplayable);
}
