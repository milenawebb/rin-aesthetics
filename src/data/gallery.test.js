import { describe, expect, it } from "bun:test";
import { featured, publishedGallery, galleryForConcern } from "./gallery";
import { services } from "./services";

describe("featured results", () => {
  it("includes every published featured result beyond the former six-result limit", () => {
    const expected = publishedGallery().filter((item) => item.featured);
    expect(featured().map((item) => item.id)).toEqual(expected.map((item) => item.id));
    expect(featured()).toHaveLength(10);
    expect(featured().at(-1)?.id).toBe("candela-03");
  });
});

describe("lips-04 placement", () => {
  const lipService = services.find((service) => service.slug === "injectables/lip-filler");
  const serviceTags = (id) => services.find((service) => service.id === id)?.concernTags ?? [];

  it("belongs to the Lip Filler route and follows lips-03 without displacing the next result", () => {
    const items = publishedGallery();
    const index = items.findIndex((item) => item.id === "lips-04");
    expect(items[index]?.serviceId).toBe(lipService?.id);
    expect(items[index - 1]?.id).toBe("lips-03");
    expect(items[index + 1]?.id).toBe("face-01");
  });

  it("appears for Lips but is excluded from Volume loss", () => {
    expect(galleryForConcern(["lips"], serviceTags).some((item) => item.id === "lips-04")).toBe(true);
    expect(galleryForConcern(["volume_loss"], serviceTags).some((item) => item.id === "lips-04")).toBe(false);
  });
});