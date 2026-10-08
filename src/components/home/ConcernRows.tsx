import { Link } from "@tanstack/react-router";
import { useInView } from "@/hooks/use-in-view";
import { concerns } from "@/data/concerns";
import { concernPathSlug, servicesFor } from "@/data/lookup";

/** The homepage shortlist, in display order. Ids only; unmatched ids render nothing. */
const HOME_CONCERN_IDS = ["lines-and-wrinkles", "volume-loss", "skin-laxity", "lips", "pigmentation", "acne-and-scarring"];
const homeConcerns = HOME_CONCERN_IDS.flatMap((id) => concerns.filter((c) => c.id === id));

export function ConcernRows() {
  const { ref, inView } = useInView<HTMLUListElement>("0px 0px -20% 0px");

  return (
    <ul ref={ref} className="mt-14 border-t border-greige">
      {homeConcerns.map((concern, i) => {
        const count = servicesFor(concern).length;
        return (
          <li key={concern.id} className="border-b border-greige">
            <span className="concern-row-mask block overflow-hidden">
              <span
                className={`concern-row-inner block ${inView ? "is-in" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Link
                  to="/concerns/$slug"
                  params={{ slug: concernPathSlug(concern) }}
                  className="concern-row group flex h-[96px] items-center gap-4 transition-colors"
                >
                  <span className="w-[56px] shrink-0 pl-1 font-body text-[12px] font-medium text-champagne-light transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="concern-row-name flex-1 font-body text-[22px] font-extralight leading-[1.15] tracking-[-0.02em] text-ink md:text-[32px]">
                    {concern.h1}
                  </span>
                  <span className="shrink-0 pr-1 font-body text-[13px] font-light text-walnut">
                    {count} {count === 1 ? "treatment" : "treatments"}
                  </span>
                </Link>
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
