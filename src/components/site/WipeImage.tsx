import type { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

export function WipeImage({
  children,
  from = "left",
  className = "",
}: {
  children: ReactNode;
  from?: "left" | "bottom" | "right";
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      <div className={`wipe wipe-${from} ${inView ? "is-in" : ""}`}>{children}</div>
    </div>
  );
}