import { useEffect, useRef, useState } from "react";
import type { ResultCase } from "@/data/results";

interface Props {
  item: ResultCase;
  placeholderLabel: string;
}

export function BeforeAfterTile({ item, placeholderLabel }: Props) {
  const [revealed, setRevealed] = useState(false);
  const [touch, setTouch] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  const alt = item.alt ?? `${item.treatment} before and after photograph`;

  const face = (src: string | undefined, state: "before" | "after") =>
    src ? (
      <img
        src={src}
        alt={state === "before" ? `${alt} — before` : `${alt} — after`}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    ) : (
      <div
        role="img"
        aria-label={`${alt} — ${state}`}
        className="flex h-full w-full items-center justify-center bg-greige"
      >
        <span className="label-xs text-ink/55">{placeholderLabel}</span>
      </div>
    );

  return (
    <div className="w-[64vw] shrink-0 sm:w-[38vw] lg:w-[292px]">
      <div
        ref={ref}
        role={touch ? "button" : undefined}
        tabIndex={0}
        aria-pressed={touch ? revealed : undefined}
        onMouseEnter={() => !touch && setRevealed(true)}
        onMouseLeave={() => !touch && setRevealed(false)}
        onFocus={() => setRevealed(true)}
        onBlur={() => setRevealed(false)}
        onClick={() => touch && setRevealed((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setRevealed((v) => !v);
          }
        }}
        className="ba-tile relative aspect-[4/5] w-full overflow-hidden rounded-[2px] outline-none ring-offset-2 focus-visible:ring-1 focus-visible:ring-champagne"
      >
        <div className="absolute inset-0">{face(item.beforeImage, "before")}</div>

        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${revealed ? 0 : 100}% 0 0)`,
            transition: "clip-path 700ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {face(item.afterImage, "after")}
        </div>

        {/* champagne edge travelling with the wipe */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-px bg-champagne"
          style={{
            left: `${revealed ? 100 : 0}%`,
            opacity: revealed ? 0 : 1,
            transition:
              "left 700ms cubic-bezier(0.16,1,0.3,1), opacity 200ms linear 600ms",
          }}
        />

        <div className="pointer-events-none absolute bottom-0 left-0 flex h-14 w-full items-end bg-ink/45 px-4 pb-4">
          <div className="relative h-4 w-full">
          <span
            className="label-xs absolute left-0 bottom-0 text-ivory"
            style={{ opacity: revealed ? 0 : 1, transition: "opacity 300ms linear" }}
          >
            Before
          </span>
          <span
            className="label-xs absolute left-0 bottom-0 text-ivory"
            style={{ opacity: revealed ? 1 : 0, transition: "opacity 300ms linear" }}
          >
            After
          </span>
          </div>
        </div>

        {touch ? (
          <span
            aria-hidden
            className="pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-champagne"
          />
        ) : null}
      </div>
      <p className="mt-4 text-[13px] font-light text-walnut">{item.treatment}</p>
    </div>
  );
}
