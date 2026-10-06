import { concerns } from "@/data/concerns";
import { services } from "@/data/services";

export interface MenuLink {
  label: string;
  href: string;
}
export interface MenuGroup {
  heading?: string;
  links: MenuLink[];
}
export interface NavMenu {
  id: "concerns" | "treatments";
  columns: MenuGroup[][];
  allLabel: string;
  allHref: string;
  count: number;
}

const categoryOrder = ["Injectables", "Device & Laser", "Skin Treatments", "Hydrafacials"];

const concernLinks: MenuLink[] = concerns.map((c) => ({ label: c.h1, href: `/${c.slug}` }));
const half = Math.ceil(concernLinks.length / 2);

const treatmentGroups: MenuGroup[] = categoryOrder.map((category) => ({
  heading: category,
  links: services
    .filter((s) => s.category === category && !s.slug.startsWith("book/"))
    .map((s) => ({ label: s.shortName || s.name, href: `/${s.slug}` })),
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
