import { useEffect, useState } from "react";
import type { GalleryItem } from "@/data/gallery";
import { afterAltText, beforeAltText, isDisplayable } from "@/data/gallery";
import { ResultPhoto } from "./ResultPhoto";

const EASE = "cubic-bezier(0.16,1,0.3,1)";

// One 4:5 tile per pair. Images render only when isDisplayable() passes,
// which requires a published record with both images.
// mode "wipe": hover or focus wipes the after across the before.
// mode "split": before left, after right, divider fixed at center.
// Wipe runs only under (hover: hover) and (pointer: fine); touch, coarse
// pointers and reduced motion always fall back to split.
export function ResultTile({
  item,
  treatmentName,
  mode = "wipe",
  onOpen,
}: {
  item: GalleryItem;
  treatmentName: string;
  mode?: "wipe" | "split";
  onOpen?: (() => void) | undefined;
}) {
  const [revealed, setRevealed] = useState(false);
  const [forceSplit, setForceSplit] = useState(false);

  useEffect(() => {
    setForceSplit(
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  if (!isDisplayable(item)) {
    return (
      <div className="flex aspect-[4/5] w-full items-center justify-center rounded-[2px] bg-greige px-4 text-center">
        <span className="label-xs text-ink-soft">Before and after</span>
      </div>
    );
  }

  const contained = item.fit === "contain";
  const objectPosition = contained ? "center" : item.focus ?? "center";
  const imageFit = contained ? "object-contain bg-greige" : "object-cover";

  const dot = (
    <span
      aria-hidden
      className="pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-champagne"
    />
  );
  const shade = (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/55 to-transparent"
    />
  );

  if (mode === "split" || forceSplit) {
    const split = (
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-greige">
        <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
          <ResultPhoto src={item.beforeSrc} alt={beforeAltText(item)} className={`h-full w-full ${imageFit}`} style={{ objectPosition }} />
        </div>
        <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
          <ResultPhoto src={item.afterSrc} alt={afterAltText(item)} className={`h-full w-full ${imageFit}`} style={{ objectPosition }} />
        </div>
        <span aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-champagne" />
        {shade}
        <span className="label-xs pointer-events-none absolute bottom-4 left-4 text-ivory">Before</span>
        <span className="label-xs pointer-events-none absolute bottom-4 left-[calc(50%+1rem)] text-ivory">After</span>
        {dot}
      </div>
    );
    return onOpen ? (
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open larger ${treatmentName} before and after pair`}
        className="block w-full rounded-[2px] text-left outline-none focus-visible:ring-1 focus-visible:ring-champagne focus-visible:ring-offset-2"
      >
        {split}
      </button>
    ) : (
      split
    );
  }

  return (
    <button
      type="button"
      aria-label={
        onOpen
          ? `Open larger ${treatmentName} before and after pair`
          : `Show after image for ${treatmentName.toLowerCase()}`
      }
      aria-pressed={onOpen ? undefined : revealed}
      onClick={onOpen}
      onPointerEnter={(e) => e.pointerType === "mouse" && setRevealed(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setRevealed(false)}
      onFocus={() => setRevealed(true)}
      onBlur={() => setRevealed(false)}
      className="relative block aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-greige outline-none focus-visible:ring-1 focus-visible:ring-champagne focus-visible:ring-offset-2"
    >
      <ResultPhoto src={item.beforeSrc} alt={beforeAltText(item)} className={`absolute inset-0 h-full w-full ${imageFit}`} style={{ objectPosition }} />
      <ResultPhoto
        src={item.afterSrc}
        alt={afterAltText(item)}
        className={`absolute inset-0 h-full w-full ${imageFit}`}
        style={{
          objectPosition,
          clipPath: revealed ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
          transition: `clip-path 700ms ${EASE}`,
        }}
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
      {shade}
      <span
        className="label-xs pointer-events-none absolute bottom-4 left-4 text-ivory"
        style={{ transition: "opacity 200ms linear" }}
      >
        <WipeLabel revealed={revealed} />
      </span>
      {dot}
    </button>
  );
}

// Switches to AFTER as the wipe completes, back to BEFORE immediately.
function WipeLabel({ revealed }: { revealed: boolean }) {
  const [after, setAfter] = useState(false);
  useEffect(() => {
    if (!revealed) {
      setAfter(false);
      return;
    }
    const t = window.setTimeout(() => setAfter(true), 600);
    return () => window.clearTimeout(t);
  }, [revealed]);
  return <>{after ? "After" : "Before"}</>;
}
