import { brands, buyUrl, type Product } from "@/data/products";

/** Referral list. A product links out only when buyUrl() returns a real URL. */
export function ProductList({ items, showBrand = true }: { items: Product[]; showBrand?: boolean }) {
  return (
    <ul className="border-t border-greige">
      {items.map((p) => {
        const url = buyUrl(p);
        const body = (
          <div className="grid grid-cols-1 items-baseline gap-2 px-4 py-7 transition-colors duration-300 md:grid-cols-[200px_1fr] md:gap-10 md:px-6">
            <span className="label-xs text-olive">{showBrand ? (brands[p.brand]?.name ?? "") : ""}</span>
            <span className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-10">
              <span className="font-body text-[19px] font-medium leading-[1.35] text-ink md:min-w-[280px]">
                {p.name}
              </span>
              <span className="font-body text-[15px] font-light leading-[1.7] text-walnut">
                {p.shortDescription}
              </span>
            </span>
          </div>
        );
        return (
          <li key={p.id} className="-mx-4 border-b border-greige md:-mx-6">
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
