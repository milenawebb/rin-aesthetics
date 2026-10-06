// Client-side site search. The index is built once at module load from the
// data files. Synonym keys route queries only; result labels always come from
// catalog data, never from the query text.
import { services } from "@/data/services";
import { concerns } from "@/data/concerns";
import { products, brands } from "@/data/products";
import { pageMeta } from "@/data/seo";
import { policies } from "@/data/policies";
import { searchSynonyms } from "@/data/searchSynonyms";

export type SearchGroup = "Treatments" | "Concerns" | "Products" | "Pages";
const GROUP_ORDER: SearchGroup[] = ["Treatments", "Concerns", "Products", "Pages"];

export interface SearchResult {
  key: string;
  label: string;
  group: SearchGroup;
  href: string;
}

interface Entry extends SearchResult {
  fields: string[]; // normalized, all searchable fields
  names: string[]; // normalized, name fields only (used by fuzzy pass)
}

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const PAGE_LABELS: Record<string, string> = {
  "/treatments": "Treatments",
  "/concerns": "Concerns",
  "/results": "Results",
  "/shop": "Shop",
  "/financing": "Financing",
  "/about": "About",
  "/contact": "Contact",
};
for (const p of policies) PAGE_LABELS["/" + p.slug] = p.title;

function buildIndex(): Entry[] {
  const out: Entry[] = [];
  for (const s of services) {
    if (s.slug.startsWith("book/")) continue;
    out.push({
      key: s.slug,
      label: s.shortName,
      group: "Treatments",
      href: "/" + s.slug,
      fields: [s.shortName, s.name, s.shortDescription, s.category].map(normalize),
      names: [s.shortName, s.name].map(normalize),
    });
  }
  for (const c of concerns) {
    out.push({
      key: c.slug,
      label: c.h1,
      group: "Concerns",
      href: "/" + c.slug,
      fields: [normalize(c.h1)],
      names: [normalize(c.h1)],
    });
  }
  for (const p of products) {
    const brand = brands[p.brand]?.name ?? p.brand;
    out.push({
      key: p.slug,
      label: p.name,
      group: "Products",
      href: "/shop",
      fields: [p.name, brand].map(normalize),
      names: [p.name, brand].map(normalize),
    });
  }
  for (const route of Object.keys(pageMeta)) {
    const label = PAGE_LABELS[route];
    if (!label) continue;
    out.push({
      key: route.replace(/^\//, ""),
      label,
      group: "Pages",
      href: route,
      fields: [normalize(label), normalize(pageMeta[route].title)],
      names: [normalize(label)],
    });
  }
  return out;
}

const INDEX: Entry[] = buildIndex();
const BY_KEY = new Map(INDEX.map((e) => [e.key, e]));
const SYNONYMS = new Map(Object.entries(searchSynonyms).map(([k, v]) => [normalize(k), v]));

function levenshtein(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev: number[] = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur: number[] = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const v = Math.min((prev[j] ?? 0) + 1, (cur[j - 1] ?? 0) + 1, (prev[j - 1] ?? 0) + (a[i - 1] === b[j - 1] ? 0 : 1));
      cur[j] = v;
      rowMin = Math.min(rowMin, v);
    }
    if (rowMin > max) return max + 1;
    prev = cur;
  }
  return prev[b.length] ?? max + 1;
}

const MAX_RESULTS = 8;
const FUZZY_DISTANCE = 2;

export function search(raw: string): SearchResult[] {
  const q = normalize(raw);
  if (q.length < 2) return [];
  const tiers = new Map<string, { tier: number; order: number }>();
  const set = (key: string, tier: number, order: number) => {
    if (!tiers.has(key) && BY_KEY.has(key)) tiers.set(key, { tier, order });
  };

  (SYNONYMS.get(q) ?? []).forEach((k, i) => set(k, 0, i));

  INDEX.forEach((e, i) => {
    if (e.fields.some((f) => f.startsWith(q) || f.split(" ").some((w) => w.startsWith(q)))) set(e.key, 1, i);
  });
  INDEX.forEach((e, i) => {
    if (e.fields.some((f) => f.includes(q))) set(e.key, 2, i);
  });

  const qTokens = q.split(" ").filter((t) => t.length >= 4);
  if (qTokens.length) {
    INDEX.forEach((e, i) => {
      const words = e.names.flatMap((n) => n.split(" ")).filter((w) => w.length >= 4);
      const hit = qTokens.every((t) => words.some((w) => levenshtein(t, w, FUZZY_DISTANCE) <= FUZZY_DISTANCE));
      if (hit) set(e.key, 3, i);
    });
  }

  const hits = [...tiers.entries()].map(([key, t]) => ({ e: BY_KEY.get(key)!, ...t }));
  const bestTier = (g: SearchGroup) => Math.min(...hits.filter((h) => h.e.group === g).map((h) => h.tier));
  const groups = GROUP_ORDER.filter((g) => hits.some((h) => h.e.group === g)).sort(
    (a, b) => bestTier(a) - bestTier(b) || GROUP_ORDER.indexOf(a) - GROUP_ORDER.indexOf(b),
  );
  const sorted = groups.flatMap((g) =>
    hits.filter((h) => h.e.group === g).sort((a, b) => a.tier - b.tier || a.order - b.order),
  );
  return sorted.slice(0, MAX_RESULTS).map(({ e }) => ({ key: e.key, label: e.label, group: e.group, href: e.href }));
}

export const QUICK_LINKS: SearchResult[] = ["/treatments", "/concerns", "/results", "/financing", "/contact"].map(
  (r) => ({ key: r, label: PAGE_LABELS[r] ?? "", group: "Pages", href: r }),
);
