// Jyl's portrait: one source image (jyl-portrait.jpg, 1123 x 1401) plus sizes derived
// from it. Regenerate every derived file from the source when the photo changes.
import source from "@/assets/jyl-portrait.jpg.asset.json";
import j240 from "@/assets/jyl-portrait-sizes/jyl-portrait-240.jpg.asset.json";
import j480 from "@/assets/jyl-portrait-sizes/jyl-portrait-480.jpg.asset.json";
import j720 from "@/assets/jyl-portrait-sizes/jyl-portrait-720.jpg.asset.json";
import j960 from "@/assets/jyl-portrait-sizes/jyl-portrait-960.jpg.asset.json";
import w240 from "@/assets/jyl-portrait-sizes/jyl-portrait-240.webp.asset.json";
import w480 from "@/assets/jyl-portrait-sizes/jyl-portrait-480.webp.asset.json";
import w720 from "@/assets/jyl-portrait-sizes/jyl-portrait-720.webp.asset.json";
import w960 from "@/assets/jyl-portrait-sizes/jyl-portrait-960.webp.asset.json";
import w1123 from "@/assets/jyl-portrait-sizes/jyl-portrait-1123.webp.asset.json";

export const portraitWidth = 1123;
export const portraitHeight = 1401;
/** Full-size source, used as the plain fallback and for schema/preload. */
export const portraitSrc = source.url;
export const portraitJpgSrcSet = `${j240.url} 240w, ${j480.url} 480w, ${j720.url} 720w, ${j960.url} 960w, ${source.url} 1123w`;
export const portraitWebpSrcSet = `${w240.url} 240w, ${w480.url} 480w, ${w720.url} 720w, ${w960.url} 960w, ${w1123.url} 1123w`;
