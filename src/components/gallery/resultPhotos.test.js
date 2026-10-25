import { describe, expect, it } from "bun:test";
import { publishedGallery } from "../../data/gallery";
import { resultPhotos } from "./resultPhotos";

describe("responsive result photos", () => {
  it("provides both formats for all 20 published photographs without changing their original sources", () => {
    const originals = publishedGallery().flatMap((item) => [item.beforeSrc, item.afterSrc]);
    expect(originals).toHaveLength(20);
    for (const src of originals) {
      const photo = resultPhotos[src];
      expect(photo).toBeDefined();
      expect(photo.webp).toContain("400w");
      expect(photo.jpg).toContain("400w");
      expect(photo.src).not.toBe(src);
      for (const candidate of [...photo.jpg.split(", "), ...photo.webp.split(", ")]) {
        const width = Number(candidate.split(" ").at(-1)?.replace("w", ""));
        expect(width).toBeLessThanOrEqual(800);
        expect(width).toBeGreaterThanOrEqual(400);
      }
    }
  });
});