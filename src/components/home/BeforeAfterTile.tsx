import type { GalleryItem } from "@/data/gallery";
import { getServiceById } from "@/data/lookup";
import { ResultTile } from "@/components/gallery/ResultTile";

export function BeforeAfterTile({ item }: { item: GalleryItem }) {
  const service = getServiceById(item.serviceId);
  if (!service) return null;
  return (
    <div className="w-[calc(100vw-64px)] shrink-0 snap-start snap-always sm:w-[38vw] lg:w-[292px]">
      <ResultTile item={item} treatmentName={service.name} />
      <p className="mt-4 text-[13px] font-light text-walnut">{service.name}</p>
    </div>
  );
}
