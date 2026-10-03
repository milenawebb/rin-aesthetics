import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BookingBand } from "@/components/site/BookingBand";
import { ProductList } from "@/components/site/ProductList";
import { brands, products } from "@/data/products";
import { packages, giftCards } from "@/data/shop";

const title = "Shop | RIN Aesthetic Practice";
const description =
  "Packages, gift cards, and the skinbetter science and Hydrinity skincare RIN recommends, ordered directly from each brand.";

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

const sectionClass = "mx-auto max-w-[1240px] px-6 py-[56px] md:px-10 md:py-[88px]";
const headingClass = "display-tight font-display text-[28px] font-extralight text-ink md:text-[34px]";

function ShopPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-[1240px] px-6 pt-[56px] md:px-10 md:pt-[104px]">
        <p className="eyebrow">Shop</p>
        <h1 className="display-tight mt-6 font-display text-[34px] font-extralight text-ink md:text-[44px]">
          Shop
        </h1>
      </section>

      {packages.length ? (
        <section className={sectionClass}>
          <h2 className={headingClass}>Packages</h2>
          <div className="mt-10 space-y-10">
            {packages.map((pkg) => (
              <div key={pkg.id} className="max-w-[760px] border border-greige px-6 py-8 md:px-10 md:py-10">
                <h3 className="font-body text-[19px] font-medium leading-[1.35] text-ink">
                  {pkg.name}
                </h3>
                <p className="mt-3 font-body text-[19px] font-medium text-ink">{pkg.priceDisplay}</p>
                <p className="measure mt-4 font-body text-[16px] font-light leading-[1.75] text-walnut">
                  {pkg.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="font-body text-[15px] font-light leading-[1.7] text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
                {pkg.bookingUrl ? (
                  <a
                    href={pkg.bookingUrl}
                    target="_blank"
                    rel="noopener"
                    className="btn-label mt-8 inline-block rounded-[2px] bg-ink px-6 py-3 text-ivory transition-colors hover:bg-walnut"
                  >
                    Book this package
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section id="gift-cards" className={`${sectionClass} scroll-mt-20`}>
        <h2 className={headingClass}>{giftCards.headline}</h2>
        <p className="measure mt-5 font-body text-[16px] font-light leading-[1.75] text-walnut">
          {giftCards.body}
        </p>
        {giftCards.purchaseUrl ? (
          <a
            href={giftCards.purchaseUrl}
            target="_blank"
            rel="noopener"
            className="btn-label mt-8 inline-block rounded-[2px] bg-ink px-6 py-3 text-ivory transition-colors hover:bg-walnut"
          >
            Buy a gift card
          </a>
        ) : null}
        {giftCards.terms.length ? (
          <div className="measure mt-8 space-y-3">
            {giftCards.terms.map((term, i) => (
              <p key={i} className="font-body text-[13px] font-light leading-[1.7] text-walnut">
                {term}
              </p>
            ))}
          </div>
        ) : null}
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
                    rel="noopener"
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
