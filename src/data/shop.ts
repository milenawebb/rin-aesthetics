// Packages, gift cards and the brand stores.
//
// All three are sold through Vagaro, not through this site. There is no cart
// here and skinbetter's terms do not permit one.
//
// FLAGGED FOR THE CLIENT:
//   1. The package is still named "DOSE'S Signature Skin Tightening Package"
//      in Vagaro. It needs renaming before launch.
//   2. The gift certificate artwork in Vagaro is DOSE branded. Anyone buying
//      one today receives the old practice's certificate.
//   3. The package contains Sublative Skin Resurfacing and Alastin Skin
//      Nectar. Neither is in the catalog. Alastin is a third product brand.

export interface Package {
  id: string;
  name: string;
  priceDisplay: string;
  description: string;
  includes: string[];
  bookingUrl: string;
}

export const packages: Package[] = [
  {
    id: "PKG-01",
    name: "NEEDS APPROVAL: currently named after the previous practice in Vagaro. Suggested: The Skin Tightening Series",
    priceDisplay: "$2,750",
    description:
      "Two series of radiofrequency microneedling and resurfacing, with exosomes and a recovery serum, bought together rather than session by session.",
    includes: [
      "Two series of Matrix Pro radiofrequency microneedling",
      "Sublative skin resurfacing",
      "Exosomes",
      "Alastin Skin Nectar",
    ],
    bookingUrl: "",
  },
];

export interface GiftCards {
  headline: string;
  body: string;
  // The Vagaro gift certificate page. Empty until supplied.
  purchaseUrl: string;
  terms: string[];
}

export const giftCards: GiftCards = {
  headline: "Gift cards",
  body: "Gift cards can be bought for any amount and used toward any treatment or product.",
  purchaseUrl: "",
  terms: [
    "NEEDS APPROVAL: confirm the terms. The current Vagaro certificate states that only one gift card may be used per tox treatment, that cards must be used within six months of purchase, that all sales are final, and that cards have no cash value. Confirm whether those still apply, since the refund policy on this site says only that gift certificate purchases are non-refundable.",
  ],
};

// True when a service appears in a package's contents, so the service page
// can point at the package. Matches by name against the includes list.
export function serviceInPackage(serviceName: string): boolean {
  const needle = serviceName.toLowerCase();
  return packages.some((p) =>
    p.includes.some((item) => item.toLowerCase().includes(needle)),
  );
}
