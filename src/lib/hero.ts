// Home hero: three crops (hero.png, rin-hero-tablet.png, rin-hero-mobile.png), each served as
// WebP with JPEG fallback at sizes derived from that crop. Regenerate from the source crops when replaced.
import m480w from "@/assets/hero-sizes/hero-mobile-480.webp";
import m780w from "@/assets/hero-sizes/hero-mobile-780.webp";
import m1056w from "@/assets/hero-sizes/hero-mobile-1056.webp";
import m480j from "@/assets/hero-sizes/hero-mobile-480.jpg";
import m780j from "@/assets/hero-sizes/hero-mobile-780.jpg";
import m1056j from "@/assets/hero-sizes/hero-mobile-1056.jpg";
import t900w from "@/assets/hero-sizes/hero-tablet-900.webp";
import t1352w from "@/assets/hero-sizes/hero-tablet-1352.webp";
import t900j from "@/assets/hero-sizes/hero-tablet-900.jpg";
import t1352j from "@/assets/hero-sizes/hero-tablet-1352.jpg";
import d1280w from "@/assets/hero-sizes/hero-desktop-1280.webp";
import d1746w from "@/assets/hero-sizes/hero-desktop-1746.webp";
import d1280j from "@/assets/hero-sizes/hero-desktop-1280.jpg";
import d1746j from "@/assets/hero-sizes/hero-desktop-1746.jpg";

export const heroSizes = "100vw";
export const heroDesktopMedia = "(min-width: 1024px)";
export const heroTabletMedia = "(min-width: 768px) and (max-width: 1023px)";
export const heroMobileMedia = "(max-width: 767px)";

export const heroDesktop = {
  webp: `${d1280w} 1280w, ${d1746w} 1746w`,
  jpg: `${d1280j} 1280w, ${d1746j} 1746w`,
  src: d1746j,
};
export const heroTablet = {
  webp: `${t900w} 900w, ${t1352w} 1352w`,
  jpg: `${t900j} 900w, ${t1352j} 1352w`,
};
export const heroMobile = {
  webp: `${m480w} 480w, ${m780w} 780w, ${m1056w} 1056w`,
  jpg: `${m480j} 480w, ${m780j} 780w, ${m1056j} 1056w`,
  src: m780j,
};
