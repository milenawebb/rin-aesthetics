/**
 * Before-and-after cases. Photography is supplied by the practice; never place
 * stock imagery in a before-and-after slot.
 */
import lips01Before from "@/assets/lips-01-before.jpg.asset.json";
import lips01After from "@/assets/lips-01-after.jpg.asset.json";
import neck01Before from "@/assets/neck-01-before.jpg.asset.json";
import neck01After from "@/assets/neck-01-after.jpg.asset.json";
import lips02Before from "@/assets/lips-02-before.jpg.asset.json";
import lips02After from "@/assets/lips-02-after.jpg.asset.json";

export interface ResultCase {
  id: string;
  beforeSrc: string;
  afterSrc: string;
  /** Treatment name shown beneath the tile. */
  treatment: string;
  treatmentSlug: string;
  alt: string;
  /** Concern taxonomy tags, matching catalog concernTags. */
  concernTags: string[];
}

export const resultCases: ResultCase[] = [
  {
    id: "lips-01",
    beforeSrc: lips01Before.url,
    afterSrc: lips01After.url,
    treatment: "Lip filler",
    treatmentSlug: "lip-filler",
    alt: "Lip filler result, front view",
    concernTags: ["lips", "volume"],
  },
  {
    id: "neck-01",
    beforeSrc: neck01Before.url,
    afterSrc: neck01After.url,
    treatment: "Neck skin tightening",
    treatmentSlug: "neck-skin-tightening",
    alt: "Neck skin tightening result",
    concernTags: ["laxity", "texture", "fine_lines"],
  },
  {
    id: "lips-02",
    beforeSrc: lips02Before.url,
    afterSrc: lips02After.url,
    treatment: "Lip filler",
    treatmentSlug: "lip-filler",
    alt: "Lip filler result, three-quarter view",
    concernTags: ["lips", "volume", "fine_lines"],
  },
];

export function getResultCasesByTags(tags: string[]): ResultCase[] {
  const set = new Set(tags);
  return resultCases.filter((item) =>
    item.concernTags.some((tag) => set.has(tag)),
  );
}
