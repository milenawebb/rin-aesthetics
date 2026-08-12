import { practice } from "@/data/site";

/**
 * Brand wordmark. Pass `src` with the outlined SVG export once supplied;
 * until then the text lockup renders as a placeholder.
 */
export function Logo({
  src,
  width,
  className = "",
}: {
  src?: string;
  width: number;
  className?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${practice.wordmark} logo`}
        style={{ width }}
        className={`block h-auto ${className}`}
      />
    );
  }

  return (
    <span style={{ width }} className={`block ${className}`}>
      <span className="block font-display text-[26px] font-normal leading-none tracking-[0.14em] text-ivory">
        {practice.wordmark}
      </span>
      <span className="mt-1 block font-body text-[9px] font-normal uppercase leading-none tracking-[0.34em] text-greige">
        {practice.wordmarkSub}
      </span>
    </span>
  );
}