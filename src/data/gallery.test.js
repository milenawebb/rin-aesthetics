import { describe, expect, it } from "bun:test";
import { featured, publishedGallery } from "./gallery";

describe("featured results", () => {
  it("includes every published featured result beyond the former six-result limit", () => {
    const expected = publishedGallery().filter((item) => item.featured);
    expect(featured().map((item) => item.id)).toEqual(expected.map((item) => item.id));
    expect(featured()).toHaveLength(9);
    expect(featured().at(-1)?.id).toBe("candela-03");
  });
});