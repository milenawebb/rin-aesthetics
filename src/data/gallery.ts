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
  // Hand-picked for the home page strip. Keep this to six at most.
  featured: boolean;
}

export const gallery: GalleryItem[] = [
  {
    id: "lips-01",
    serviceId: "INJ-03",
    beforeSrc: "/images/results/lips-01-before.jpg",
    afterSrc: "/images/results/lips-01-after.jpg",
    beforeAlt: "Lip filler result, before treatment",
    afterAlt: "Lip filler result, two weeks after one session",
    sessions: "1 session",
    interval: "2 weeks",
    consentOnFile: false,
    placeholder: true,
    featured: true,
  },
  {
    id: "lips-02",
    serviceId: "INJ-03",
    beforeSrc: "/images/results/lips-02-before.jpg",
    afterSrc: "/images/results/lips-02-after.jpg",
    beforeAlt: "Lip filler result, before treatment",
    afterAlt: "Lip filler result, two weeks after one session",
    sessions: "1 session",
    interval: "2 weeks",
    consentOnFile: false,
    placeholder: true,
    featured: true,
  },
  {
    id: "neck-01",
    serviceId: "DEV-05",
    beforeSrc: "/images/results/neck-01-before.jpg",
    afterSrc: "/images/results/neck-01-after.jpg",
    beforeAlt: "Neck texture, before treatment",
    afterAlt: "Neck texture, eight weeks after one session",
    sessions: "1 session",
    interval: "8 weeks",
    consentOnFile: false,
    placeholder: true,
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
    featured: false,
  },
];

// A pair is publishable only when it has both photographs and written
// consent. Everything else renders as a labelled placeholder block.
export function isPublishable(item: GalleryItem): boolean {
  return (
    !item.placeholder &&
    item.consentOnFile &&
    item.beforeSrc !== "" &&
    item.afterSrc !== ""
  );
}

export function galleryForService(serviceId: string): GalleryItem[] {
  return gallery.filter((g) => g.serviceId === serviceId);
}

export function featured(): GalleryItem[] {
  return gallery.filter((g) => g.featured).slice(0, 6);
}
