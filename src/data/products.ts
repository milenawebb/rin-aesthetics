// Generated from rin-catalog-and-quiz.xlsx.
// RIN does not sell these on the site. Every product links out to the brand's
// authorized store. skinbetter's terms do not permit resale through a third
// party storefront, so this must stay a referral, not a cart.

export interface Brand {
  id: string;
  name: string;
  // The practice's own authorized storefront. Empty until supplied.
  storeUrl: string;
  note: string;
}

export const brands: Record<string, Brand> = {
  skinbetter: {
    id: "skinbetter",
    name: "skinbetter science",
    storeUrl: "",
    note: "Authorized practice store. Orders are placed with skinbetter directly.",
  },
  hydrinity: {
    id: "hydrinity",
    name: "Hydrinity",
    storeUrl: "",
    note: "Ordered through Hydrinity using the practice link.",
  },
};

export interface Product {
  id: string;
  name: string;
  brand: string;
  slug: string;
  concernTags: string[];
  pairsWith: string[];
  shortDescription: string;
  // Per-product deep link. Falls back to the brand storeUrl when empty.
  vendorUrl: string;
}

export const products: Product[] = [
  {
    id: "SB-01",
    name: "AlphaRet Overnight Cream",
    brand: "skinbetter",
    slug: "shop/skinbetter/alpharet-overnight-cream",
    concernTags: ["fine_lines", "texture", "sun_damage"],
    pairsWith: ["SB-07"],
    shortDescription: "A nightly retinoid and AHA cream built for renewal with less irritation.",
    vendorUrl: "",
  },
  {
    id: "SB-02",
    name: "AlphaRet Clearing Serum",
    brand: "skinbetter",
    slug: "shop/skinbetter/alpharet-clearing-serum",
    concernTags: ["acne", "pores", "texture"],
    pairsWith: ["SB-13"],
    shortDescription: "A retinoid serum aimed at breakout-prone skin.",
    vendorUrl: "",
  },
  {
    id: "SB-03",
    name: "AlphaRet Exfoliating Peel Pads",
    brand: "skinbetter",
    slug: "shop/skinbetter/alpharet-peel-pads",
    concernTags: ["texture", "pores", "pigment"],
    pairsWith: ["SB-01"],
    shortDescription: "At-home exfoliating pads for a few nights a week.",
    vendorUrl: "",
  },
  {
    id: "SB-04",
    name: "Alto Advanced Defense and Repair Serum",
    brand: "skinbetter",
    slug: "shop/skinbetter/alto-defense-serum",
    concernTags: ["redness", "pigment", "texture", "sun_damage"],
    pairsWith: ["SB-07"],
    shortDescription: "A morning antioxidant serum for brightness, redness and uneven tone.",
    vendorUrl: "",
  },
  {
    id: "SB-05",
    name: "Trio Rebalancing Moisture Treatment",
    brand: "skinbetter",
    slug: "shop/skinbetter/trio-moisture-treatment",
    concernTags: ["dryness", "sensitivity", "aftercare"],
    pairsWith: ["SB-01"],
    shortDescription: "A rich moisturizer for skin that is dry or compromised.",
    vendorUrl: "",
  },
  {
    id: "SB-06",
    name: "Even Tone Correcting Serum",
    brand: "skinbetter",
    slug: "shop/skinbetter/even-tone-correcting-serum",
    concernTags: ["pigment", "sun_damage"],
    pairsWith: ["SB-07"],
    shortDescription: "Targets dark spots and uneven pigmentation.",
    vendorUrl: "",
  },
  {
    id: "SB-07",
    name: "sunbetter TONE SMART SPF 75",
    brand: "skinbetter",
    slug: "shop/skinbetter/sunbetter-tone-smart",
    concernTags: ["sun_damage", "pigment"],
    pairsWith: ["SB-06"],
    shortDescription: "A mineral sunscreen with a hint of color that adapts to skin tone.",
    vendorUrl: "",
  },
  {
    id: "SB-08",
    name: "sunbetter SHEER SPF 70",
    brand: "skinbetter",
    slug: "shop/skinbetter/sunbetter-sheer",
    concernTags: ["sun_damage", "sensitivity"],
    pairsWith: ["SB-04"],
    shortDescription: "A sheer mineral sunscreen for daily wear under makeup.",
    vendorUrl: "",
  },
  {
    id: "SB-09",
    name: "Mystro Active Balance Serum",
    brand: "skinbetter",
    slug: "shop/skinbetter/mystro-active-balance",
    concernTags: ["redness", "texture", "sensitivity"],
    pairsWith: ["SB-05"],
    shortDescription: "For skin showing redness, dullness and rough texture together.",
    vendorUrl: "",
  },
  {
    id: "SB-10",
    name: "InterFuse Treatment Cream EYE",
    brand: "skinbetter",
    slug: "shop/skinbetter/interfuse-eye",
    concernTags: ["eye_area", "fine_lines"],
    pairsWith: ["SB-11"],
    shortDescription: "A targeted treatment for lines and puffiness around the eyes.",
    vendorUrl: "",
  },
  {
    id: "SB-11",
    name: "Instant Effect Gel Eye",
    brand: "skinbetter",
    slug: "shop/skinbetter/instant-effect-gel-eye",
    concernTags: ["eye_area"],
    pairsWith: ["SB-10"],
    shortDescription: "A short-term smoothing gel for the under-eye area.",
    vendorUrl: "",
  },
  {
    id: "SB-12",
    name: "Ampra",
    brand: "skinbetter",
    slug: "shop/skinbetter/ampra",
    concernTags: ["volume_loss", "laxity", "fine_lines"],
    pairsWith: ["SB-01"],
    shortDescription: "A topical aimed at the look of fullness and contour.",
    vendorUrl: "",
  },
  {
    id: "SB-13",
    name: "Oxygen Infusion Wash",
    brand: "skinbetter",
    slug: "shop/skinbetter/oxygen-infusion-wash",
    concernTags: ["texture", "pores"],
    pairsWith: ["SB-02"],
    shortDescription: "A daily cleanser suited to combination and oilier skin.",
    vendorUrl: "",
  },
  {
    id: "SB-14",
    name: "Cleansing Gel",
    brand: "skinbetter",
    slug: "shop/skinbetter/cleansing-gel",
    concernTags: ["dryness", "sensitivity"],
    pairsWith: ["SB-05"],
    shortDescription: "A gentle daily cleanser for dry or sensitive skin.",
    vendorUrl: "",
  },
  {
    id: "HY-01",
    name: "Restorative HA Serum",
    brand: "hydrinity",
    slug: "shop/hydrinity/restorative-ha-serum",
    concernTags: ["hydration", "dryness", "texture"],
    pairsWith: ["HY-06"],
    shortDescription: "The core hyaluronic acid serum for hydration and smoothness.",
    vendorUrl: "",
  },
  {
    id: "HY-02",
    name: "Renewing HA Serum",
    brand: "hydrinity",
    slug: "shop/hydrinity/renewing-ha-serum",
    concernTags: ["hydration", "fine_lines", "laxity"],
    pairsWith: ["HY-01"],
    shortDescription: "A firming-focused version of the hyaluronic acid serum.",
    vendorUrl: "",
  },
  {
    id: "HY-03",
    name: "VIVID Brightening Serum",
    brand: "hydrinity",
    slug: "shop/hydrinity/vivid-brightening-serum",
    concernTags: ["pigment", "sun_damage"],
    pairsWith: ["HY-01"],
    shortDescription: "Targets uneven tone, dark spots and melasma.",
    vendorUrl: "",
  },
  {
    id: "HY-04",
    name: "RetaXome Daily Retinal Hydrator",
    brand: "hydrinity",
    slug: "shop/hydrinity/retaxome",
    concernTags: ["fine_lines", "texture", "acne"],
    pairsWith: ["HY-01"],
    shortDescription: "A retinaldehyde treatment positioned as gentler than standard retinol.",
    vendorUrl: "",
  },
  {
    id: "HY-05",
    name: "Hyacyn Active Purifying Mist",
    brand: "hydrinity",
    slug: "shop/hydrinity/hyacyn-active",
    concernTags: ["aftercare", "sensitivity", "redness", "acne"],
    pairsWith: ["SKN-02"],
    shortDescription: "A calming hypochlorous acid mist used after treatments.",
    vendorUrl: "",
  },
  {
    id: "HY-06",
    name: "PRELUDE Facial Treatment Cleanser",
    brand: "hydrinity",
    slug: "shop/hydrinity/prelude-cleanser",
    concernTags: ["dryness", "sensitivity"],
    pairsWith: ["HY-01"],
    shortDescription: "A gentle cleanser meant to prepare skin for active products.",
    vendorUrl: "",
  },
  {
    id: "HY-07",
    name: "Eye Renew Complex",
    brand: "hydrinity",
    slug: "shop/hydrinity/eye-renew-complex",
    concernTags: ["eye_area", "hydration"],
    pairsWith: ["HY-01"],
    shortDescription: "Hydration and renewal for the eye area.",
    vendorUrl: "",
  },
  {
    id: "HY-08",
    name: "ENCORE Body Hydrator",
    brand: "hydrinity",
    slug: "shop/hydrinity/encore-body-hydrator",
    concernTags: ["body_skin", "dryness"],
    pairsWith: ["HY-01"],
    shortDescription: "Extends the brand's hydration approach to the body.",
    vendorUrl: "",
  },
  {
    id: "HY-09",
    name: "LUXE Lip Hydrator",
    brand: "hydrinity",
    slug: "shop/hydrinity/luxe-lip-hydrator",
    concernTags: ["lips", "dryness"],
    pairsWith: ["INJ-03"],
    shortDescription: "A lip treatment that pairs well with lip filler aftercare.",
    vendorUrl: "",
  },
];

export function buyUrl(p: Product): string {
  return p.vendorUrl || (brands[p.brand]?.storeUrl ?? "");
}
