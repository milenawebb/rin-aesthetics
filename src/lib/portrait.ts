// Jyl's portrait: one source image (jyl-portrait.jpg, 1123 x 1401) plus sizes derived
// from it. Regenerate every derived file from the source when the photo changes.
import source from "@/assets/jyl-portrait.jpg";
import j240 from "@/assets/jyl-portrait-sizes/jyl-portrait-240.jpg";
import j480 from "@/assets/jyl-portrait-sizes/jyl-portrait-480.jpg";
import j720 from "@/assets/jyl-portrait-sizes/jyl-portrait-720.jpg";
import j960 from "@/assets/jyl-portrait-sizes/jyl-portrait-960.jpg";
import w240 from "@/assets/jyl-portrait-sizes/jyl-portrait-240.webp";
import w480 from "@/assets/jyl-portrait-sizes/jyl-portrait-480.webp";
import w720 from "@/assets/jyl-portrait-sizes/jyl-portrait-720.webp";
import w960 from "@/assets/jyl-portrait-sizes/jyl-portrait-960.webp";
import w1123 from "@/assets/jyl-portrait-sizes/jyl-portrait-1123.webp";

/** Average color of the portrait, painted behind it while it loads. */
export const portraitColor = "#60402C";
/** 16 x 20 blurred preview, cropped to the 4:5 home frame. Regenerate with the photo. */
export const portraitPreview = "data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAABwBQCdASoQABQAPtFUo0uoJKMhsAgBABoJagCdMoR4N1/9AH//EF+MrkCvtD+XOvw35++AAP7w3d8VWQk7tAD9nNk+gd/IuqMVd+fNseSu7PtrIGGpQX8tO5J+1Hg9+w4HGhDz2ex2HZSA1aG9+B6Xdvyub81+UEO+rJHV/tq2WuJFl05oKNGWnpJWFev52Pr/8UWNC9dM7oI9OwaN4pSqqtRlF2f3rJAW7REji3b760VVaJoCzh/g00yAAA==";
export const portraitWidth = 1123;
export const portraitHeight = 1401;
/** Full-size source, used as the plain fallback and for schema/preload. */
export const portraitSrc = source;
export const portraitJpgSrcSet = `${j240} 240w, ${j480} 480w, ${j720} 720w, ${j960} 960w, ${source} 1123w`;
export const portraitWebpSrcSet = `${w240} 240w, ${w480} 480w, ${w720} 720w, ${w960} 960w, ${w1123} 1123w`;
