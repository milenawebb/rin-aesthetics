import { Link } from "@tanstack/react-router";
import type { GalleryItem } from "@/data/gallery";
import { isPublishable } from "@/data/gallery";
import { getServiceById, splitSlug } from "@/data/lookup";

interface GalleryPairMediaProps {
  item: GalleryItem;
  treatmentName: string;
  className?: string;
}

export function GalleryPairMedia({ item, treatmentName, className = "" }: GalleryPairMediaProps) {
  const publishable = isPublishable(item);

  return (
    <div className={`grid grid-cols-2 gap-1 ${className}`}>
      {publishable ? (
        <>
          <GalleryImage src={item.beforeSrc} alt={item.beforeAlt} position="Before" />
          <GalleryImage src={item.afterSrc} alt={item.afterAlt} position="After" />
        </>
      ) : (
        <>
          <GalleryPlaceholder label={`${treatmentName} / Before`} />
          <GalleryPlaceholder label={`${treatmentName} / After`} />
        </>
      )}
    </div>
  );
}

function GalleryImage({ src, alt, position }: { src: string; alt: string; position: string }) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-greige">
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      <span className="label-xs pointer-events-none absolute bottom-3 left-3 text-ivory">{position}</span>
    </div>
  );
}

function GalleryPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/5] items-center justify-center rounded-[2px] bg-greige px-3 text-center">
      <span className="label-xs text-ink/55">{label}</span>
    </div>
  );
}

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