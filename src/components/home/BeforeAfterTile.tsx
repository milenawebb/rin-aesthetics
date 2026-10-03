import type { GalleryItem } from "@/data/gallery";
import { getServiceById } from "@/data/lookup";
import { ResultTile } from "@/components/gallery/ResultTile";

export function BeforeAfterTile({ item }: { item: GalleryItem }) {
  const service = getServiceById(item.serviceId);
  if (!service) return null;
  return (
    <div className="w-[64vw] shrink-0 sm:w-[38vw] lg:w-[292px]">
      <ResultTile item={item} treatmentName={service.name} />
      <p className="mt-4 text-[13px] font-light text-walnut">{service.name}</p>
    </div>
  );
}
