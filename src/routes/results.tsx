import { BookingBand } from "@/components/site/BookingBand";
import { resultsNotice } from "@/data/gallery";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Button } from "@/components/ui/button";
import { concerns } from "@/data/concerns";
import { gallery, galleryForConcern } from "@/data/gallery";
import { getServiceById } from "@/data/lookup";

const title = "Before and After Results | RIN Aesthetic Practice";
const description =
  "Before and after treatment results from RIN Aesthetic Practice in Charlottesville, Virginia.";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
  const items = activeConcern ? galleryForConcern(activeConcern.tags, serviceTags) : gallery;

  return (
    <PageShell>
      <main className="mx-auto max-w-[1240px] px-6 py-[64px] md:px-10 md:py-[104px]">
        <header>
          <p className="eyebrow">Results</p>
          <h1 className="display-tight mt-6 font-display text-[34px] font-extralight text-ink md:text-[48px]">
            Before and after
          </h1>
          {resultsNotice(items) ? (
            <p className="measure mt-6 font-body text-[17px] font-light leading-[1.8] text-walnut">
              {resultsNotice(items)}
            </p>
          ) : null}
        </header>

        <div className="mt-12 flex flex-wrap gap-x-2 gap-y-3 border-y border-greige py-5" aria-label="Filter results by concern">
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
        </div>

        <div className="mt-14">
          <GalleryGrid items={items} />
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