import { seoHead } from "@/lib/seo-head";
import { BookingBand } from "@/components/site/BookingBand";
import { resultsNotice } from "@/data/gallery";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Button } from "@/components/ui/button";
import { concerns } from "@/data/concerns";
import { galleryForConcern, publishedGallery } from "@/data/gallery";
import { getServiceById } from "@/data/lookup";


const seo = seoHead("/results");

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: seo.meta,
    links: seo.links,
  }),
  component: ResultsPage,
});

const serviceTags = (serviceId: string) => getServiceById(serviceId)?.concernTags ?? [];

const filterConcerns = concerns.filter(
  (concern) => galleryForConcern(concern.tags, serviceTags).length > 0,
);

function ResultsPage() {
  const [activeId, setActiveId] = useState("all");
  const activeConcern = concerns.find((concern) => concern.id === activeId);
  const items = activeConcern ? galleryForConcern(activeConcern.tags, serviceTags) : publishedGallery();

  return (
    <PageShell>
      <main className="page-head site-container">
        <header>
          <p className="eyebrow">Results</p>
          <h1 className="type-h1 mt-6 text-ink">
            Before and after
          </h1>
          {resultsNotice(items) ? (
            <p className="measure mt-6 font-body text-[17px] font-light leading-[1.8] text-walnut">
              {resultsNotice(items)}
            </p>
          ) : null}
        </header>

        {filterConcerns.length ? (<div className="mt-12 flex flex-wrap gap-x-2 gap-y-3 border-y border-greige py-5" aria-label="Filter results by concern">
          <FilterButton active={activeId === "all"} onClick={() => setActiveId("all")}>
            All
          </FilterButton>
          {filterConcerns.map((concern) => (
            <FilterButton
              key={concern.id}
              active={activeId === concern.id}
              onClick={() => setActiveId(concern.id)}
            >
              {concern.h1}
            </FilterButton>
          ))}
        </div>) : null}

        <div className="mt-14">
          <GalleryGrid items={items} align="left" />
        </div>
      </main>
      <BookingBand />
    </PageShell>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <Button
      type="button"
      variant="ghost"
      aria-pressed={active}
      onClick={onClick}
      className={`h-auto rounded-[2px] px-4 py-2 font-body text-[13px] font-medium shadow-none ${
        active ? "bg-ink text-ivory hover:bg-ink hover:text-ivory" : "text-walnut hover:bg-greige/35 hover:text-ink"
      }`}
    >
      {children}
    </Button>
  );
}