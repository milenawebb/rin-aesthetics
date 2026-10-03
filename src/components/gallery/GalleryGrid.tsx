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
import { GalleryCaption } from "@/components/gallery/GalleryPair";
import { ResultTile } from "@/components/gallery/ResultTile";

export function GalleryGrid({ items, expandable = false }: { items: GalleryItem[]; expandable?: boolean }) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const selectedService = selected ? getServiceById(selected.serviceId) : undefined;

  return (
    <>
      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
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
                  <ResultTile item={item} treatmentName={service.name} mode="split" />
                </Button>
              ) : (
                <ResultTile item={item} treatmentName={service.name} mode="split" />
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
              <div className="mx-auto max-w-[560px]"><ResultTile item={selected} treatmentName={selectedService.name} mode="split" /></div>
              <GalleryCaption item={selected} />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}