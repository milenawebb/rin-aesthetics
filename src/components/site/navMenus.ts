import { concerns, type Concern } from "@/data/concerns";
import { services } from "@/data/services";
import { practice } from "@/data/site";

export type MenuLink =
  | { label: string; to: "/concerns/$slug"; params: { slug: string } }
  | { label: string; to: "/$category/$slug"; params: { category: string; slug: string } };

export interface MenuGroup {
  heading: string;
  links: MenuLink[];
  foot?: FootLink;
}

export interface FootLink {
  label: string;
  to: "/concerns" | "/treatments";
  hash?: string;
}

export interface MenuColumn {
  groups: MenuGroup[];
}

export type FeatureLink =
  | { label: string; kind: "internal"; to: "/$category/$slug"; params: { category: string; slug: string } }
  | { label: string; kind: "external"; href: string };

export interface FeaturePanel {
  eyebrow: string;
  title: string;
  body: string;
  link: FeatureLink;
  /** Optional image URL. When absent, nothing renders in its place. */
  image?: string;
  imageAlt?: string;
}

export interface NavMenu {
  id: "concerns" | "treatments";
  columns: MenuColumn[];
  feature: FeaturePanel;
  allLabel: string;
  allHref: "/concerns" | "/treatments";
}

function splitPath(slug: string) {
  const [category = "", rest = ""] = slug.split("/");
  return { category, slug: rest };
}

/* ---------- Treatments ---------- */

const treatmentServices = services.filter((s) => !s.slug.startsWith("book/"));

function treatmentGroup(category: string, heading: string, hash: string): MenuGroup {
  return {
    heading,
    foot: { label: "See all", to: "/treatments", hash },
    links: treatmentServices
      .filter((s) => s.category === category)
      .map((s): MenuLink => ({
        label: s.shortName || s.name,
        to: "/$category/$slug",
        params: splitPath(s.slug),
      })),
  };
}

const refinery = services.find((s) => s.slug === "devices/skin-refinery");

const treatmentsFeature: FeaturePanel = {
  eyebrow: "Signature treatment",
  title: refinery?.name ?? "",
  body: "Jyl's own protocol, built from the treatments on this page and sequenced for your skin rather than sold as a single appointment.",
  link: {
    label: `Read about ${refinery?.shortName ?? refinery?.name ?? ""}`.replace(/^Read about The /, "Read about the "),
    kind: "internal",
    to: "/$category/$slug",
    params: splitPath(refinery?.slug ?? ""),
  },
};

/* ---------- Concerns ---------- */

const concernColumns: { heading: string; ids: string[] }[] = [
  { heading: "Shape and volume", ids: ["lines-and-wrinkles", "volume-loss", "facial-contour", "skin-laxity"] },
  { heading: "Lips, eyes and hair", ids: ["lips", "under-eye-area", "hair-thinning"] },
  {
    heading: "Skin quality",
    ids: ["pigmentation", "redness", "texture-and-pores", "acne-and-scarring", "dryness-and-dullness"],
  },
];

function concernLink(c: Concern): MenuLink {
  return { label: c.h1, to: "/concerns/$slug", params: { slug: c.slug.replace(/^concerns\//, "") } };
}

function buildConcernGroups(): MenuGroup[] {
  const byId = new Map(concerns.map((c) => [c.id, c]));
  const listed = new Set(concernColumns.flatMap((col) => col.ids));
  const groups = concernColumns.map((col) => ({
    heading: col.heading,
    links: col.ids.flatMap((id) => {
      const c = byId.get(id);
      return c ? [concernLink(c)] : [];
    }),
  }));
  // Safety net: a concern missing from the lists above still appears, in the last column.
  const missing = concerns.filter((c) => !listed.has(c.id));
  if (missing.length) {
    if (import.meta.env.DEV) {
      console.warn(
        `[navMenus] Concern ids not assigned to a nav column, appended to the last column: ${missing
          .map((c) => c.id)
          .join(", ")}`,
      );
    }
    groups[groups.length - 1]?.links.push(...missing.map(concernLink));
  }
  return groups;
}

const concernGroups = buildConcernGroups();

const concernsFeature: FeaturePanel = {
  eyebrow: "Not sure where to start",
  title: "Book a consultation",
  body: "Tell me what bothers you when you look in the mirror and I will tell you honestly what will help, what will not, and what it would take.",
  link: { label: "Book a consultation", kind: "external", href: practice.bookingUrl },
};

export const navMenus: Record<string, NavMenu> = {
  "/concerns": {
    id: "concerns",
    columns: [
      { groups: [concernGroups[0]!] },
      { groups: [concernGroups[1]!] },
      { groups: [{ ...concernGroups[2]!, foot: { label: "See all concerns", to: "/concerns" } }] },
    ],
    feature: concernsFeature,
    allLabel: "All concerns",
    allHref: "/concerns",
  },
  "/treatments": {
    id: "treatments",
    columns: [
      { groups: [treatmentGroup("Injectables", "Injectables", "injectables")] },
      { groups: [treatmentGroup("Device & Laser", "Device and laser", "device-and-laser")] },
      {
        groups: [
          treatmentGroup("Skin Treatments", "Skin treatments", "skin-treatments"),
          treatmentGroup("Hydrafacials", "Hydrafacials", "hydrafacials"),
        ],
      },
    ],
    feature: treatmentsFeature,
    allLabel: "All treatments",
    allHref: "/treatments",
  },
};

/** Groups for the mobile drawer: the same groups the mega menu columns hold, in column order. */
export function menuGroups(menu: NavMenu): MenuGroup[] {
  return menu.columns.flatMap((c) => c.groups);
}

/** Extra drawer rows after the main nav links. Not part of the desktop main navigation. */
export const drawerExtraLinks: { label: string; to: "/financing" }[] = [
  { label: "Financing", to: "/financing" },
];
