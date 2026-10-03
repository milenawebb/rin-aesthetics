import { Link } from "@tanstack/react-router";
import type { GalleryItem } from "@/data/gallery";
import { getServiceById, splitSlug } from "@/data/lookup";

export function GalleryCaption({ item, linked = true }: { item: GalleryItem; linked?: boolean }) {
  const service = getServiceById(item.serviceId);
  if (!service) return null;
  const path = splitSlug(service.slug);
  const details = `${item.sessions}, ${item.interval}`;

  return (
    <p className="mt-4 font-body text-[14px] font-light leading-[1.7] text-walnut">
      {linked ? (
        <Link
          to="/$category/$slug"
          params={{ category: path.category, slug: path.slug }}
          className="text-ink underline decoration-greige underline-offset-4 transition-colors hover:decoration-champagne"
        >
          {service.name}
        </Link>
      ) : (
        <span className="text-ink">{service.name}</span>
      )}
      {`, ${details}`}
    </p>
  );
}