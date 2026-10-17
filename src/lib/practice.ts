// About "Where you will be" photos: three 1200 x 900 (4:3) originals, served as WebP with
// JPEG fallback at 400, 600, 800 and 1200 wide. Regenerate the sizes when a photo is replaced.
const files = import.meta.glob<{ url: string }>("@/assets/practice-sizes/*.asset.json", { eager: true, import: "default" });

const WIDTHS = [400, 600, 800, 1200];
const url = (name: string, w: number, ext: string) =>
  files[`/src/assets/practice-sizes/practice-${name}-${w}.${ext}.asset.json`]!.url;
const set = (name: string, ext: string) => WIDTHS.map((w) => `${url(name, w, ext)} ${w}w`).join(", ");

/** Phone rail shows each at 78% of the screen; tablet and up shows three across the container. */
export const practicePhotoSizes = "(min-width: 1280px) 400px, (min-width: 768px) 31vw, 78vw";

function photo(name: string, alt: string, color: string) {
  return { key: name, alt, color, src: url(name, 800, "jpg"), srcSet: set(name, "jpg"), webpSrcSet: set(name, "webp") };
}

export const practicePhotos = [
  photo("reception", "The reception area at RIN Aesthetic Practice in Charlottesville.", "#A19383"),
  photo("laser-room", "The laser treatment room at RIN Aesthetic Practice.", "#AC9E92"),
  photo("treatment-room", "A private treatment room at RIN Aesthetic Practice.", "#BBA590"),
];
