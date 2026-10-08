// Home hero: three crops (hero.png, rin-hero-tablet.png, rin-hero-mobile.png), each served as
// WebP with JPEG fallback at sizes derived from that crop. Regenerate from the source crops when replaced.
import m480w from "@/assets/hero-sizes/hero-mobile-480.webp.asset.json";
import m780w from "@/assets/hero-sizes/hero-mobile-780.webp.asset.json";
import m1056w from "@/assets/hero-sizes/hero-mobile-1056.webp.asset.json";
import m480j from "@/assets/hero-sizes/hero-mobile-480.jpg.asset.json";
import m780j from "@/assets/hero-sizes/hero-mobile-780.jpg.asset.json";
import m1056j from "@/assets/hero-sizes/hero-mobile-1056.jpg.asset.json";
import t900w from "@/assets/hero-sizes/hero-tablet-900.webp.asset.json";
import t1352w from "@/assets/hero-sizes/hero-tablet-1352.webp.asset.json";
import t900j from "@/assets/hero-sizes/hero-tablet-900.jpg.asset.json";
import t1352j from "@/assets/hero-sizes/hero-tablet-1352.jpg.asset.json";
import d1280w from "@/assets/hero-sizes/hero-desktop-1280.webp.asset.json";
import d1746w from "@/assets/hero-sizes/hero-desktop-1746.webp.asset.json";
import d1280j from "@/assets/hero-sizes/hero-desktop-1280.jpg.asset.json";
import d1746j from "@/assets/hero-sizes/hero-desktop-1746.jpg.asset.json";

export const heroSizes = "100vw";
export const heroDesktopMedia = "(min-width: 1024px)";
export const heroTabletMedia = "(min-width: 768px) and (max-width: 1023px)";
export const heroMobileMedia = "(max-width: 767px)";

export const heroDesktop = {
  webp: `${d1280w.url} 1280w, ${d1746w.url} 1746w`,
  jpg: `${d1280j.url} 1280w, ${d1746j.url} 1746w`,
};
export const heroTablet = {
  webp: `${t900w.url} 900w, ${t1352w.url} 1352w`,
  jpg: `${t900j.url} 900w, ${t1352j.url} 1352w`,
};
export const heroMobile = {
  webp: `${m480w.url} 480w, ${m780w.url} 780w, ${m1056w.url} 1056w`,
  jpg: `${m480j.url} 480w, ${m780j.url} 780w, ${m1056j.url} 1056w`,
  src: m780j.url,
};
