// 301 redirects. Two services were merged onto one page each, and six old
// concern URLs forward to their renamed pages. These URLs are
// kept so existing links and search results do not break.

export const redirects: Record<string, string> = {
  "/devices/ipl-spot-treatment": "/devices/ipl",
  "/skin-treatments/microneedling-biphasic-peel": "/skin-treatments/microneedling",
  "/concerns/uneven-tone": "/concerns/pigmentation",
  "/concerns/lost-volume": "/concerns/volume-loss",
  "/concerns/acne": "/concerns/acne-and-scarring",
  "/concerns/acne-scarring": "/concerns/acne-and-scarring",
  "/concerns/laxity": "/concerns/skin-laxity",
  "/concerns/thinning-hair": "/concerns/hair-thinning",
  // Shop renamed to Skincare.
  "/shop": "/skincare",
};
