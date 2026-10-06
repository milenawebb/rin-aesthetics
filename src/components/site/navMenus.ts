import { concerns } from "@/data/concerns";
import { services } from "@/data/services";

export type MenuLink =
  | { label: string; to: "/concerns/$slug"; params: { slug: string } }
  | { label: string; to: "/$category/$slug"; params: { category: string; slug: string } };
export interface MenuGroup {
  heading?: string;
  links: MenuLink[];
}
export interface NavMenu {
  id: "concerns" | "treatments";
  columns: MenuGroup[][];
  allLabel: string;
  allHref: "/concerns" | "/treatments";
  count: number;
}

const categoryOrder = ["Injectables", "Device & Laser", "Skin Treatments", "Hydrafacials"];

const concernLinks: MenuLink[] = concerns.map((c) => ({
  label: c.h1,
  to: "/concerns/$slug",
  params: { slug: c.slug.replace(/^concerns\//, "") },
}));
const half = Math.ceil(concernLinks.length / 2);

const treatmentGroups: MenuGroup[] = categoryOrder.map((category) => ({
  heading: category,
  links: services
    .filter((s) => s.category === category && !s.slug.startsWith("book/"))
    .map((s): MenuLink => {
      const [cat = "", slug = ""] = s.slug.split("/");
      return { label: s.shortName || s.name, to: "/$category/$slug", params: { category: cat, slug } };
    }),
}));

export const navMenus: Record<string, NavMenu> = {
  "/concerns": {
    id: "concerns",
    columns: [[{ links: concernLinks.slice(0, half) }], [{ links: concernLinks.slice(half) }]],
    allLabel: "All concerns",
    allHref: "/concerns",
    count: concernLinks.length,
  },
  "/treatments": {
    id: "treatments",
    columns: [treatmentGroups.slice(0, 1), treatmentGroups.slice(1)],
    allLabel: "All treatments",
    allHref: "/treatments",
    count: treatmentGroups.reduce((n, g) => n + g.links.length, 0),
  },
};
