/**
 * Before-and-after cases. Images are supplied by the practice; until then a
 * case may carry no imagery and renders as a labelled placeholder pair.
 * Never place stock photography in a before-and-after slot.
 */
export interface ResultCase {
  id: string;
  /** Treatment name shown beneath the tile. */
  treatment: string;
  /** Concern taxonomy tags, matching catalog concernTags. */
  concernTags: string[];
  /** Same crop, 4:5 portrait. */
  beforeImage?: string;
  afterImage?: string;
  alt?: string;
}

export const resultCases: ResultCase[] = [
  { id: "R-01", treatment: "Candela Light & Bright Experience", concernTags: ["pigment", "sun_damage", "texture"] },
  { id: "R-02", treatment: "Candela Light & Bright Experience", concernTags: ["redness", "fine_lines"] },
  { id: "R-03", treatment: "Candela Light & Bright Experience", concernTags: ["acne_scarring", "texture"] },
  { id: "R-04", treatment: "Neuromodulator", concernTags: ["fine_lines"] },
  { id: "R-05", treatment: "Dermal filler", concernTags: ["volume", "lips"] },
  { id: "R-06", treatment: "Microneedling with RF", concernTags: ["texture", "laxity", "acne_scarring"] },
  { id: "R-07", treatment: "Medical-grade facial", concernTags: ["dryness", "acne"] },
  { id: "R-08", treatment: "Under-eye treatment", concernTags: ["under_eye"] },
];

export function getResultCasesByTags(tags: string[]): ResultCase[] {
  const set = new Set(tags);
  return resultCases.filter((item) =>
    item.concernTags.some((tag) => set.has(tag)),
  );
}
