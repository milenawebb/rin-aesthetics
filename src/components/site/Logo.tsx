import { practice } from "@/data/site";
import logoAsset from "@/assets/rin-logo.png.asset.json";

/**
 * Brand wordmark. Pass `src` with the outlined SVG export once supplied;
 * until then the text lockup renders as a placeholder.
 */
export function Logo({
  src = logoAsset.url,
  width,
  className = "",
}: {
  src?: string;
  width: number;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={`${practice.wordmark} ${practice.wordmarkSub} logo`}
      style={{ width }}
      className={`block h-auto ${className}`}
    />
  );
}