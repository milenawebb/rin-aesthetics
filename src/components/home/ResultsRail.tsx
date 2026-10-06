import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { BeforeAfterTile } from "@/components/home/BeforeAfterTile";
import type { GalleryItem } from "@/data/gallery";

export function ResultsRail({ cases }: { cases: GalleryItem[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const drag = useRef<{ x: number; left: number } | null>(null);

  const onScroll = () => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = railRef.current;
    if (!el) return;
    drag.current = { x: e.clientX, left: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = railRef.current;
    if (!el || !drag.current) return;
    el.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };

  const endDrag = () => {
    drag.current = null;
  };

  return (
    <div>
      <div
        ref={railRef}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="rail flex snap-x snap-mandatory items-start gap-3 overflow-x-auto overscroll-x-contain pr-6 sm:snap-none sm:gap-6 md:pr-10"
      >
        {cases.map((item) => (
          <BeforeAfterTile key={item.id} item={item} />
        ))}
      </div>
      <div
        className="mt-8 h-px w-full bg-greige md:max-w-[520px]"
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
    </div>
  );
}