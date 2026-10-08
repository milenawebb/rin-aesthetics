import { seoHead } from "@/lib/seo-head";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BookingBand } from "@/components/site/BookingBand";
import { ProductList } from "@/components/site/ProductList";
import { brands, products, skincareIntro } from "@/data/products";


const seo = seoHead("/skincare");

export const Route = createFileRoute("/skincare")({
  head: () => ({
    meta: seo.meta,
    links: seo.links,
  }),
  component: ShopPage,
});

const sectionClass = "section-space site-container";
const headingClass = "type-h2 text-ink";

function ShopPage() {
  return (
    <PageShell>
      <section className="page-head site-container">
        <h1 className="type-h1 text-ink">
          Skincare
        </h1>
        <div className="measure mt-6 space-y-4">
          {skincareIntro.map((t) => (
            <p key={t} className="font-body text-[17px] font-light leading-[1.75] text-walnut">{t}</p>
          ))}
        </div>
      </section>

      {Object.values(brands).map((brand) => {
        const items = products.filter((p) => p.brand === brand.id);
        if (!items.length) return null;
        return (
          <section key={brand.id} className={sectionClass}>
            <h2 className={headingClass}>
              {brand.name}
              {brand.storeUrl ? (
                <>
                  {" "}
                  <a
                    href={brand.storeUrl}
                    target="_blank"
                    rel="sponsored noopener"
                    className="font-body text-[15px] font-medium text-ink underline decoration-champagne underline-offset-4 transition-colors hover:text-walnut"
                  >
                    Shop {brand.name}
                  </a>
                </>
              ) : null}
            </h2>
            {brand.note ? (
              <p className="measure mt-5 font-body text-[16px] font-light leading-[1.75] text-walnut">
                {brand.note}
              </p>
            ) : null}
            {brand.groups.map((g) => {
              const groupItems = g.ids
                .map((id) => items.find((p) => p.id === id))
                .filter((p): p is (typeof items)[number] => Boolean(p));
              if (!groupItems.length) return null;
              return (
                <div key={g.name} className="mt-12">
                  <h3 className="label-xs mb-4 text-olive-light">{g.name}</h3>
                  <ProductList items={groupItems} showBrand={false} />
                </div>
              );
            })}
          </section>
        );
      })}
      <BookingBand />
    </PageShell>
  );
}
