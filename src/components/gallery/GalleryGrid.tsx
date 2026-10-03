import { useState } from "react";
import type { GalleryItem } from "@/data/gallery";
import { getServiceById } from "@/data/lookup";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { GalleryCaption, GalleryPairMedia } from "@/components/gallery/GalleryPair";

export function GalleryGrid({ items, expandable = false }: { items: GalleryItem[]; expandable?: boolean }) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const selectedService = selected ? getServiceById(selected.serviceId) : undefined;

  return (
    <>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {items.map((item) => {
          const service = getServiceById(item.serviceId);
          if (!service) return null;
          return (
            <article key={item.id}>
              {expandable ? (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setSelected(item)}
                  aria-label={`Open larger ${service.name} before and after pair`}
                  className="block h-auto w-full whitespace-normal rounded-[2px] p-0 text-left shadow-none hover:bg-transparent"
                >
                  <GalleryPairMedia item={item} treatmentName={service.name} />
                </Button>
              ) : (
                <GalleryPairMedia item={item} treatmentName={service.name} />
              )}
              <GalleryCaption item={item} />
            </article>
          );
        })}
      </div>

      <Dialog open={expandable && selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[92vh] max-w-[1100px] overflow-y-auto rounded-[2px] border-greige bg-ivory p-6 shadow-none md:p-10">
          <DialogTitle className="sr-only">
            {selectedService ? `${selectedService.name} before and after` : "Before and after result"}
          </DialogTitle>
          <DialogDescription className="sr-only">Larger view of the selected result pair.</DialogDescription>
          {selected && selectedService ? (
            <div>
              <GalleryPairMedia item={selected} treatmentName={selectedService.name} />
              <GalleryCaption item={selected} />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}