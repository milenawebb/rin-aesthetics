import { seoHead } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BookingBand } from "@/components/site/BookingBand";
import { ProductList } from "@/components/site/ProductList";
import { brands, products } from "@/data/products";


const seo = seoHead("/shop");

export const Route = createFileRoute("/shop")({
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
          Shop
        </h1>
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
            <div className="mt-10">
              <ProductList items={items} showBrand={false} />
            </div>
          </section>
        );
      })}
      <BookingBand />
    </PageShell>
  );
}
