import type { ReactNode } from "react";

type SectionLabelProps = {
  label?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function SectionLabel({ label, children, className = "", contentClassName = "" }: SectionLabelProps) {
  return (
    <div
      className={`site-container xl:grid xl:grid-cols-[96px_minmax(0,1fr)] xl:gap-x-8 ${className}`}
    >
      <div className="hidden xl:block">
        {label ? (
          <div className="sticky top-[120px] flex justify-end">
            <span className="eyebrow whitespace-nowrap [writing-mode:vertical-rl] rotate-180">{label}</span>
          </div>
        ) : null}
      </div>
      <div className={`min-w-0 ${contentClassName}`}>
        {label ? <p className="eyebrow mb-6 xl:hidden">{label}</p> : null}
        {children}
      </div>
    </div>
  );
}
