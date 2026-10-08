import lips01Before from "@/assets/lips-01-before.jpg.asset.json";
import lips01After from "@/assets/lips-01-after.jpg.asset.json";
import lips02Before from "@/assets/lips-02-before.jpg.asset.json";
import lips02After from "@/assets/lips-02-after.jpg.asset.json";
import neck01Before from "@/assets/neck-01-before.jpg.asset.json";
import neck01After from "@/assets/neck-01-after.jpg.asset.json";

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
  // Hand-picked for the home page strip. Keep this to six at most.
  featured: boolean;
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

// The line under a Results heading, chosen from what is actually displayed.
// Null when nothing displayable is showing: no line over only greige blocks.
export function resultsNotice(items: GalleryItem[]): string | null {
  return items.some(isDisplayable) ? NOTICE_REAL : null;
}

export function galleryForService(serviceId: string): GalleryItem[] {
  return publishedGallery().filter((g) => g.serviceId === serviceId);
}

export function galleryForConcern(
  concernTags: string[],
  serviceTags: (serviceId: string) => string[],
): GalleryItem[] {
  return publishedGallery().filter((item) =>
    serviceTags(item.serviceId).some((tag) => concernTags.includes(tag)),
  );
}

export function featured(): GalleryItem[] {
  return publishedGallery().filter((g) => g.featured).slice(0, 6);
}

export function publishedGallery(): GalleryItem[] {
  return gallery.filter(isDisplayable);
}
