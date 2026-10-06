import { services, bookingActions, type Service, type Downtime } from "./services";
import { concerns, servicesForConcern, type Concern } from "./concerns";

export function servicePath(service: Service) {
  return `/${service.slug}`;
}

export function splitSlug(slug: string) {
  const [category = "", rest = ""] = slug.split("/");
  return { category, slug: rest };
}

export function getServiceByPath(category: string, slug: string) {
  return services.find((s) => s.slug === `${category}/${slug}`);
}

export function getServiceById(id: string) {
  return services.find((s) => s.id === id);
}

export function getConcernBySlug(slug: string) {
  return concerns.find((c) => c.slug === `concerns/${slug}`);
}

export function concernPathSlug(concern: Concern) {
  return concern.slug.replace(/^concerns\//, "");
}

export function getBookingAction(slug: string) {
  return bookingActions.find((b) => b.slug === `book/${slug}`);
}

/** Numeric sort key from the price display. Prices on consultation sort last. */
export function priceValue(priceDisplay: string) {
  const match = priceDisplay.replace(/,/g, "").match(/\d+(\.\d+)?/);
  return match ? Number(match[0]) : Number.POSITIVE_INFINITY;
}

export function servicesFor(concern: Concern) {
  return servicesForConcern(concern, services).sort(
    (a, b) => priceValue(a.priceDisplay) - priceValue(b.priceDisplay),
  );
}

export function concernsForService(service: Service) {
  return concerns.filter((c) => c.tags.some((t) => service.concernTags.includes(t)));
}

export function relatedConcerns(concern: Concern) {
  const ids = new Set(servicesFor(concern).map((s) => s.id));
  return concerns
    .filter((other) => other.id !== concern.id)
    .map((other) => ({
      concern: other,
      shared: servicesFor(other).filter((s) => ids.has(s.id)).length,
    }))
    .filter((e) => e.shared > 0)
    .sort((a, b) => b.shared - a.shared)
    .slice(0, 4)
    .map((e) => e.concern);
}

export const downtimeLabel: Record<Downtime, string> = {
  none: "None",
  minimal: "Minimal",
  days: "A few days",
};

export function sessionsLabel(n: number) {
  return n <= 1 ? "Single visit" : `Series of ${n}`;
}


/** Joins "by RIN" with a non-breaking space so the brand never wraps away from "by". */
export function keepBrandTogether(text: string): string {
  return text.replace(/ by RIN\b/g, " by\u00a0RIN");
}
