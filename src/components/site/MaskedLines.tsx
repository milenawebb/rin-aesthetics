import { Fragment } from "react";
import { useInView } from "@/hooks/use-in-view";

type Tag = "h1" | "h2" | "h3" | "p";

export function MaskedLines({
  lines,
  as: Tag = "h2",
  className = "",
  delay = 0,
}: {
  lines: string[];
  as?: Tag;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLHeadingElement>();

  return (
    <Tag ref={ref as never} className={`balance ${className}`}>
      {lines.map((line, i) => (
        // A real space text node between line spans: invisible between block lines,
        // but it keeps the heading's text content reading as one sentence.
        <Fragment key={i}>
        {i > 0 ? " " : null}
        <span className="mask-line">
          <span
            className={`mask-line-inner ${inView ? "is-in" : ""}`}
            style={{ transitionDelay: `${delay + i * 90}ms` }}
          >
            {line.trim()}
          </span>
        </span>
        </Fragment>
      ))}
    </Tag>
  );
}