import { useState } from "react";
import type { GalleryItem } from "@/data/gallery";
import { isDisplayable } from "@/data/gallery";
import { getServiceById } from "@/data/lookup";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { GalleryCaption } from "@/components/gallery/GalleryPair";
import { ResultTile } from "@/components/gallery/ResultTile";

// Every grid uses the same tile as the home rail: hover or focus wipe,
// split fallback on touch and reduced motion (handled inside ResultTile).
export function GalleryGrid({ items, expandable = false }: { items: GalleryItem[]; expandable?: boolean }) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const selectedService = selected ? getServiceById(selected.serviceId) : undefined;

  return (
    <>
      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const service = getServiceById(item.serviceId);
          if (!service) return null;
          const canOpen = expandable && isDisplayable(item);
          return (
            <article key={item.id}>
              <ResultTile
                item={item}
                treatmentName={service.name}
                mode="wipe"
                onOpen={canOpen ? () => setSelected(item) : undefined}
              />
              <GalleryCaption item={item} />
            </article>
          );
        })}
      </div>

      <Dialog open={expandable && selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[92vh] max-w-[1200px] overflow-y-auto rounded-[2px] border-greige bg-ivory p-6 shadow-none md:p-10">
          <DialogTitle className="sr-only">
            {selectedService ? `${selectedService.name} before and after` : "Before and after result"}
          </DialogTitle>
          <DialogDescription className="sr-only">Before and after shown side by side at full size.</DialogDescription>
          {selected && selectedService && isDisplayable(selected) ? (
            <div>
              <div className="grid gap-6 md:grid-cols-2">
                <figure>
                  <img src={selected.beforeSrc} alt={selected.beforeAlt} className="h-auto w-full rounded-[2px]" />
                  <figcaption className="label-xs mt-3 text-walnut">Before</figcaption>
                </figure>
                <figure>
                  <img src={selected.afterSrc} alt={selected.afterAlt} className="h-auto w-full rounded-[2px]" />
                  <figcaption className="label-xs mt-3 text-walnut">After</figcaption>
                </figure>
              </div>
              <GalleryCaption item={selected} />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
