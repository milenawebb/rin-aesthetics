import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfterTile } from "@/components/home/BeforeAfterTile";
import type { GalleryItem } from "@/data/gallery";

export function ResultsRail({ cases, renderItem }: {
  cases: GalleryItem[];
  renderItem?: (item: GalleryItem) => ReactNode;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const [progress, setProgress] = useState(0);
  const [edges, setEdges] = useState({ previous: false, next: false });
  const resetKey = cases.map((item) => item.id).join(",");

  const onScroll = () => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setEdges({ previous: el.scrollLeft > 2, next: el.scrollLeft < max - 2 });
  };

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: "instant" });
    onScroll();
    const observer = new ResizeObserver(onScroll);
    observer.observe(el);
    return () => observer.disconnect();
  }, [resetKey]);

  const scroll = (direction: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.firstElementChild;
    if (!card) return;
    const gap = parseFloat(window.getComputedStyle(el).columnGap) || 0;
    el.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <div>
      <div
        id={id}
        ref={railRef}
        role="region"
        aria-label="Results"
        tabIndex={0}
        onScroll={onScroll}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            scroll(event.key === "ArrowRight" ? 1 : -1);
          } else if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            event.currentTarget.scrollTo({ left: event.key === "Home" ? 0 : event.currentTarget.scrollWidth });
          }
        }}
        className="rail flex snap-x snap-mandatory items-start gap-3 overflow-x-auto overscroll-x-contain rounded-[2px] outline-none focus-visible:ring-1 focus-visible:ring-champagne md:gap-6"
      >
        {cases.map((item) => (
          <article key={item.id} data-result-id={item.id} className="min-w-0 shrink-0 grow-0 basis-[calc(100%-2rem)] snap-start snap-always md:basis-[calc((100%-4.5rem)/3.25)]">
            {renderItem ? renderItem(item) : <BeforeAfterTile item={item} />}
          </article>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between gap-6">
      <div
        className="h-px w-full bg-greige md:max-w-[520px]"
        role="presentation"
      >
        <div
          className="h-px bg-champagne"
          style={{
            width: `${Math.max(12, progress * 100)}%`,
            transition: "width 400ms cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>
      {cases.length > 2 ? (
        <div className="hidden h-11 shrink-0 items-center justify-end gap-3 md:flex">
          {edges.previous ? (
            <Button variant="outline" size="icon" aria-label="Previous results" title="Previous results" aria-controls={id} onClick={() => scroll(-1)} className="h-11 w-11 rounded-[2px] border-greige bg-ivory text-ink shadow-none hover:border-ink hover:bg-greige">
              <ArrowLeft aria-hidden="true" />
            </Button>
          ) : null}
          {edges.next ? (
            <Button variant="outline" size="icon" aria-label="Next results" title="Next results" aria-controls={id} onClick={() => scroll(1)} className="h-11 w-11 rounded-[2px] border-greige bg-ivory text-ink shadow-none hover:border-ink hover:bg-greige">
              <ArrowRight aria-hidden="true" />
            </Button>
          ) : null}
        </div>
      ) : null}
      </div>
    </div>
  );
}