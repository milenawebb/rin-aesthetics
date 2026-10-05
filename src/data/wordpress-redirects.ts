// 301 redirect map, built from the live WordPress sitemap at
// rinaestheticsva.com/wp-sitemap.xml on 5 October 2026.
//
// 56 URLs found. Three groups:
//   REDIRECT  real pages with a sensible destination on the new site
//   RETIRE    theme demo content that was never about this practice
//   DECIDE    no obvious destination, listed at the bottom, needs a decision
//
// Everything here is a permanent 301 except the RETIRE group, which should
// return 410 Gone so search engines drop them rather than keep following a
// redirect to a page that has nothing to do with the query.

export const wordpressRedirects: Record<string, string> = {
  // Core pages
  "/home/": "/",
  "/about/": "/about",
  "/contact/": "/contact",
  "/gallery/": "/results",
  "/services/": "/treatments",

  // Category pages become anchored sections on the treatments index
  "/injectables/": "/treatments#injectables",
  "/devices/": "/treatments#device-and-laser",
  "/skin-treatments/": "/treatments#skin-treatments",
  "/facials-packages/": "/treatments#hydrafacials",

  // Services no longer offered
  "/waxing/": "/treatments",
  "/wellness/": "/treatments",

  // Policies
  "/service-policies/": "/policies/service-policies",
  "/privacy_policy/": "/policies/privacy",
  "/terms_and_conditions/": "/policies/terms",
  "/cookie-policy/": "/policies/cookies",
  "/medical-record-request/": "/policies/medical-records",

  // Shop. The new site has no cart, so the commerce routes go to the shop
  // page rather than nowhere.
  "/shop/": "/shop",
  "/shop-dose/": "/shop",
  "/cart/": "/shop",
  "/checkout/": "/shop",
  "/account/": "/",

  // Products, all of which are packages
  "/product/signature-hydrafacial/": "/hydrafacials/the-refinement",
  "/product/matrix-pro-face-and-neck-package/": "/shop",
  "/product/signature-skin-tightening-package/": "/shop",
  "/product/sculpt-lift-tighten-package/": "/shop",
  "/product-category/hydrafacial/": "/hydrafacials/the-refinement",
  "/product-category/device-packages/": "/shop",

  // PROVISIONAL: pending confirmation. The new site has no financing page yet.
  "/payment-plans/": "/contact",
};

// Theme demo content. These are posts and categories about nail salons and
// makeup that shipped with the WordPress theme and were never about this
// practice. Redirecting them to a med spa page would be worse than removing
// them: anyone arriving from "gel polish guide" wants nail polish.
//
// Return 410 Gone for each, which tells search engines to drop the URL.
export const retiredUrls: string[] = [
  "/blog/",
  "/blog-nail-salon-v1/",
  "/single-service/",
  "/makeup-trends-2021/",
  "/10-best-makeup-tips/",
  "/best-hydrating-setting-powders/",
  "/the-art-of-nail-sculpting-a-masterclass-in-acrylic-extensions/",
  "/gel-polish-guide-long-lasting-colors-for-every-season/",
  "/the-perfect-pair-matching-manicures-and-pedicures/",
  "/nail-care-in-winter-protecting-your-nails-from-the-cold/",
  "/signature-style-custom-nail-designs-for-every-personality/",
  "/spotlight-on-nail-trends-whats-buzzing-in-the-industry/",
  "/category/uncategorized/",
  "/category/international/",
  "/category/kids-manicure/",
  "/category/manicure/",
  "/category/pedicure/",
  "/category/workshops/",
];

// NEEDS A DECISION before launch:
//
// "/payment-plans/"  The current site has a payment plans page. Affirm
//                    financing was mentioned early in the project. The new
//                    site has no equivalent page and no mention of financing
//                    anywhere. Either build a short page, add financing to
//                    the treatments index intro, or redirect to /contact.
//                    Do not quietly drop it: people search for it.
