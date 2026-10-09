import { useEffect, useRef, useState, type TouchEvent } from "react";
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

// Space of the After photo left showing below the Before on phones.
const AFTER_PEEK = 32;

// Every grid uses the same tile as the home rail: hover or focus wipe,
// split fallback on touch and reduced motion (handled inside ResultTile).
export function GalleryGrid({
  items,
  align = "center",
}: {
  items: GalleryItem[];
  // "left" keeps one or two results flush with the left content edge
  // instead of centering them. Used by the Results page only.
  align?: "center" | "left";
}) {
  const openable = items.filter(
    (item) => isDisplayable(item) && getServiceById(item.serviceId),
  );
  const [index, setIndex] = useState<number | null>(null);
  const selected = index !== null ? openable[index] : null;
  const selectedService = selected ? getServiceById(selected.serviceId) : undefined;

  const step = (dir: 1 | -1) =>
    setIndex((i) => (i === null ? i : (i + dir + openable.length) % openable.length));

  // Phone peek: cap the scroll area so a sliver of the After shows.
  const bodyRef = useRef<HTMLDivElement>(null);
  const [beforeEl, beforeRef] = useState<HTMLElement | null>(null);
  const [bodyMax, setBodyMax] = useState<number | undefined>(undefined);
  useEffect(() => {
    const fig = beforeEl;
    if (!fig) return;
    const measure = () => {
      if (window.matchMedia("(min-width: 768px)").matches) return setBodyMax(undefined);
      setBodyMax(fig.offsetHeight + 48 + AFTER_PEEK); // 24px top padding + 24px gap
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(fig);
    return () => ro.disconnect();
  }, [beforeEl]);
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 });
  }, [index]);

  // Swipe changes result only on a clearly horizontal gesture; vertical
  // scrolling stays native (touch-action: pan-y).
  const touch = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: TouchEvent) => {
    const t = e.touches[0];
    if (!t) return;
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: TouchEvent) => {
    const start = touch.current;
    touch.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    if (!t) return;
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
  };

  // One or two results center at desktop instead of leaving empty grid cells:
  // one spans the middle half of a 4 column track on tablet and, at desktop, takes the exact width of one of the pair (3 of 8 columns plus their 2 gaps), two each span 3 of 8.
  const count = items.length;
  const layout =
    count === 1
      ? { grid: `sm:grid-cols-4 lg:flex${align === "left" ? "" : " lg:justify-center"}`, item: () => `sm:col-span-2${align === "left" ? "" : " sm:col-start-2"} lg:w-[calc((100%-14rem)*3/8+4rem)]` }
      : count === 2
        ? { grid: "lg:grid-cols-8", item: (i: number) => (i === 0 ? `lg:col-span-3${align === "left" ? "" : " lg:col-start-2"}` : "lg:col-span-3") }
        : { grid: "lg:grid-cols-3", item: () => "" };

  const navBtn =
    "flex h-11 w-11 items-center justify-center rounded-[2px] border border-greige text-ink transition-colors hover:border-ink";

  return (
    <>
      <div className={`grid gap-x-8 gap-y-14 sm:grid-cols-2 ${layout.grid}`}>
        {items.map((item, i) => {
          const service = getServiceById(item.serviceId);
          if (!service) return null;
          const pos = openable.indexOf(item);
          return (
            <article key={item.id} className={layout.item(i)}>
              <ResultTile
                item={item}
                treatmentName={service.name}
                mode="wipe"
                onOpen={pos >= 0 ? () => setIndex(pos) : undefined}
              />
              <GalleryCaption item={item} />
            </article>
          );
        })}
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setIndex(null)}>
        <DialogContent
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
          }}
          className="flex max-h-[92vh] max-w-[1200px] flex-col gap-0 overflow-hidden rounded-[2px] border-greige bg-ivory p-0 shadow-none"
        >
          <DialogTitle className="sr-only">
            {selectedService ? `${selectedService.name} before and after` : "Before and after result"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Before and after shown at full size. Use the arrow keys or the previous and next buttons to move between results.
          </DialogDescription>
          {selected && selectedService ? (
            <>
              <div className="shrink-0 border-b border-greige px-6 pb-4 pt-6 pr-14 md:px-10 md:pr-16">
                <div className="[&>p]:mt-0">
                  <GalleryCaption item={selected} />
                </div>
                {openable.length > 1 ? (
                  <div className="mt-4 flex items-center gap-3">
                    <button type="button" onClick={() => step(-1)} aria-label="Previous result" className={navBtn}>
                      <span aria-hidden>&#8592;</span>
                    </button>
                    <button type="button" onClick={() => step(1)} aria-label="Next result" className={navBtn}>
                      <span aria-hidden>&#8594;</span>
                    </button>
                    <span className="label-xs text-walnut" aria-live="polite">
                      {(index ?? 0) + 1} of {openable.length}
                    </span>
                  </div>
                ) : null}
              </div>
              <div
                ref={bodyRef}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                style={{ maxHeight: bodyMax, touchAction: "pan-y" }}
                className="min-h-0 flex-1 overflow-y-auto px-6 py-6 md:px-10 md:py-10"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <figure ref={beforeRef}>
                    <img src={selected.beforeSrc} alt={selected.beforeAlt} className="h-auto w-full rounded-[2px]" />
                    <figcaption className="label-xs mt-3 text-walnut">Before</figcaption>
                  </figure>
                  <figure>
                    <img src={selected.afterSrc} alt={selected.afterAlt} className="h-auto w-full rounded-[2px]" />
                    <figcaption className="label-xs mt-3 text-walnut">After</figcaption>
                  </figure>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
