import { providerName, providerCredential, providerCredentialTitle } from "@/data/provider";
// Jyl at work (936 x 1318, EXIF stripped). Atmosphere only: used solely in the
// "How Jyl approaches this" section of facial injectable pages, never beside outcome claims.
import j480 from "@/assets/jyl-treating-sizes/jyl-treating-480.jpg.asset.json";
import j720 from "@/assets/jyl-treating-sizes/jyl-treating-720.jpg.asset.json";
import j936 from "@/assets/jyl-treating-sizes/jyl-treating-936.jpg.asset.json";
import w480 from "@/assets/jyl-treating-sizes/jyl-treating-480.webp.asset.json";
import w720 from "@/assets/jyl-treating-sizes/jyl-treating-720.webp.asset.json";
import w936 from "@/assets/jyl-treating-sizes/jyl-treating-936.webp.asset.json";

/** Average color of the treating photo, painted behind it while it loads. */
export const treatingColor = "#8F7663";
export const treatingWidth = 936;
export const treatingHeight = 1318;
export const treatingSrc = j720.url;
export const treatingJpgSrcSet = `${j480.url} 480w, ${j720.url} 720w, ${j936.url} 936w`;
export const treatingWebpSrcSet = `${w480.url} 480w, ${w720.url} 720w, ${w936.url} 936w`;
export const treatingAlt = `${providerName} performing a facial injectable treatment in the practice treatment room.`;

/** Facial injectable services that show the treating photo instead of the portrait. */
export const TREATING_PHOTO_SERVICE_IDS = new Set(["INJ-01", "INJ-02", "INJ-03", "INJ-04", "INJ-05", "INJ-08", "INJ-09"]);
