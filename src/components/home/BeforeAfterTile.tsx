import { useEffect, useState } from "react";
import type { GalleryItem } from "@/data/gallery";
import { isPublishable } from "@/data/gallery";
import { getServiceById } from "@/data/lookup";
import { GalleryPairMedia } from "@/components/gallery/GalleryPair";

const EASE = "cubic-bezier(0.16,1,0.3,1)";

export function BeforeAfterTile({ item }: { item: GalleryItem }) {
  const [revealed, setRevealed] = useState(false);
  const [touch, setTouch] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setTouch(window.matchMedia("(hover: none)").matches);
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const service = getServiceById(item.serviceId);
  if (!service) return null;
  const publishable = isPublishable(item);
  const splitView = touch || reduced || !publishable;
  const label = revealed ? "After" : "Before";

  return (
    <div className="w-[64vw] shrink-0 sm:w-[38vw] lg:w-[292px]">
      {splitView ? (
        <GalleryPairMedia item={item} treatmentName={service.name} />
      ) : (
        <button
          type="button"
          aria-label={`Show after image for ${service.name.toLowerCase()}`}
          aria-pressed={revealed}
          onMouseEnter={() => setRevealed(true)}
          onMouseLeave={() => setRevealed(false)}
          onFocus={() => setRevealed(true)}
          onBlur={() => setRevealed(false)}
          className="ba-tile relative block aspect-[4/5] w-full overflow-hidden rounded-[2px] outline-none focus-visible:ring-1 focus-visible:ring-champagne focus-visible:ring-offset-2"
        >
          <>
            <img
              src={item.beforeSrc}
              alt={item.beforeAlt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <img
              src={item.afterSrc}
              alt={item.afterAlt}
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                clipPath: revealed ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                transition: `clip-path 700ms ${EASE}`,
              }}
              loading="lazy"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 w-px bg-champagne"
              style={{
                left: revealed ? "100%" : "0%",
                opacity: revealed ? 0 : 1,
                transition: `left 700ms ${EASE}, opacity 200ms linear 600ms`,
              }}
            />
          </>

          <span className="label-xs pointer-events-none absolute bottom-4 left-4 text-ivory">
            {label}
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-champagne"
          />
        </button>
      )}
      <p className="mt-4 text-[13px] font-light text-walnut">{service.name}</p>
    </div>
  );
}
