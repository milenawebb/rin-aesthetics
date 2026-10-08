import { brands, buyUrl, type Product } from "@/data/products";

/**
 * Referral list. A product links out only when buyUrl() returns a real URL.
 * Each row owns one top rule: rules sit only above and between products,
 * never after the last one, and all span the same content width.
 */
export function ProductList({ items, showBrand = true }: { items: Product[]; showBrand?: boolean }) {
  const cols = showBrand
    ? "md:grid-cols-[160px_minmax(280px,1fr)_2fr]"
    : "md:grid-cols-[minmax(320px,1fr)_2fr]";
  return (
    <ul>
      {items.map((p) => {
        const url = buyUrl(p);
        const body = (
          <div className={`grid grid-cols-1 items-baseline gap-2 py-7 transition-colors duration-300 md:gap-10 ${cols}`}>
            {showBrand ? <span className="label-xs text-olive-light">{brands[p.brand]?.name ?? ""}</span> : null}
            <span className="font-body text-[19px] font-medium leading-[1.35] text-ink">{p.name}</span>
            <span className="font-body text-[15px] font-light leading-[1.7] text-walnut">{p.shortDescription}</span>
          </div>
        );
        return (
          <li key={p.id} className="border-t border-greige">
            {url ? (
              <a href={url} target="_blank" rel="noopener" className="group block hover:bg-white">
                {body}
              </a>
            ) : (
              body
            )}
          </li>
        );
      })}
    </ul>
  );
}
