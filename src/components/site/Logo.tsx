import { practice } from "@/data/site";

/**
 * Brand wordmark, served as a cached SVG file (not inlined). The light file is for dark
 * backgrounds; pass tone="ink" on cream or light backgrounds.
 */
export function Logo({
  tone = "light",
  width,
  className = "",
}: {
  tone?: "light" | "ink";
  width: number;
  className?: string;
}) {
  return (
    <img
      src={tone === "ink" ? "/rin-logo-ink.svg" : "/rin-logo.svg"}
      alt={`${practice.wordmark} ${practice.wordmarkSub}`}
      width={width}
      height={Math.round((width * 1449) / 3231)}
      style={{ width }}
      className={`block h-auto ${className}`}
    />
  );
}
