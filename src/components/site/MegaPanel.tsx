import { Link } from "@tanstack/react-router";
import type { FeaturePanel, MenuColumn, MenuLink } from "./navMenus";

export function menuLinkProps(l: MenuLink) {
  return { to: l.to, params: l.params } as const;
}

export function FeatureLinkEl({ feature, className, onClick }: { feature: FeaturePanel; className: string; onClick?: () => void }) {
  const l = feature.link;
  if (l.kind === "external") {
    return (
      <a href={l.href} target="_blank" rel="noopener" className={className} onClick={onClick}>
        {l.label}
      </a>
    );
  }
  return (
    <Link to={l.to} params={l.params} className={className} onClick={onClick}>
      {l.label}
    </Link>
  );
}

/** Shared mega menu skeleton: three link columns plus a tinted feature panel. */
export function MegaPanel({ columns, feature }: { columns: MenuColumn[]; feature: FeaturePanel }) {
  return (
    <div className="relative mx-auto grid max-w-[1240px] grid-cols-[3fr_1fr] px-6 md:px-10">
      <div className="grid grid-cols-3 py-10">
        {columns.map((col, ci) => (
          <div
            key={ci}
            className={`flex flex-col gap-8 ${ci === 0 ? "pr-8" : "border-l border-greige px-8"}`}
          >
            {col.groups.map((group) => (
              <div key={group.heading}>
                <p className="label-xs mb-4 text-olive">{group.heading}</p>
                <ul className="flex flex-col gap-[10px]">
                  {group.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        {...menuLinkProps(l)}
                        className="font-body text-[14px] font-light text-ink transition-colors hover:text-walnut"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                {group.foot ? (
                  <Link
                    to={group.foot.to}
                    {...(group.foot.hash ? { hash: group.foot.hash } : {})}
                    className="mt-4 inline-block font-body text-[14px] font-normal text-ink transition-colors hover:text-walnut"
                  >
                    {group.foot.label}
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Tint runs from the feature column to the panel's right edge. */}
      <div className="relative flex flex-col justify-center py-10 pl-8">
        <div aria-hidden="true" className="absolute inset-y-0 left-0 -right-[2000px] -z-10 bg-greige/40" />
        {feature.image ? (
          <img src={feature.image} alt={feature.imageAlt ?? ""} className="mb-6 aspect-[4/3] w-full object-cover" />
        ) : null}
        <p className="eyebrow">{feature.eyebrow}</p>
        <p className="mt-4 font-display text-[22px] font-extralight leading-[1.25] text-ink">{feature.title}</p>
        <p className="mt-4 font-body text-[14px] font-light leading-[1.7] text-walnut">{feature.body}</p>
        <FeatureLinkEl
          feature={feature}
          className="btn-label mt-6 inline-block self-start border-b border-champagne pb-1 text-ink transition-colors hover:text-walnut"
        />
      </div>
    </div>
  );
}
