import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BookingBand } from "@/components/site/BookingBand";
import { ProductList } from "@/components/site/ProductList";
import { brands, products } from "@/data/products";

const title = "Skincare | RIN Aesthetic Practice";
const description =
  "The skinbetter science and Hydrinity skincare RIN recommends, ordered directly from each brand.";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-[1240px] px-6 pt-[56px] md:px-10 md:pt-[104px]">
        <p className="eyebrow">Shop</p>
        <h1 className="display-tight mt-6 font-display text-[34px] font-extralight text-ink md:text-[44px]">
          Skincare
        </h1>
      </section>
      {Object.values(brands).map((brand) => {
        const items = products.filter((p) => p.brand === brand.id);
        if (!items.length) return null;
        return (
          <section key={brand.id} className="mx-auto max-w-[1240px] px-6 py-[56px] md:px-10 md:py-[88px]">
            <h2 className="display-tight font-display text-[28px] font-extralight text-ink md:text-[34px]">
              {brand.name}
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
