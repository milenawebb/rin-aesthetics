import { seoHead } from "@/lib/seo-head";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { BookingBand } from "@/components/site/BookingBand";
import { policies, type Policy } from "@/data/policies";

function findPolicy(slug: string): Policy | undefined {
  return policies.find((p) => p.slug === `policies/${slug}`);
}

function anchor(i: number) {
  return `section-${i + 1}`;
}

export const Route = createFileRoute("/policies/$slug")({
  loader: ({ params }) => {
    const policy = findPolicy(params.slug);
    if (!policy) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) =>
    findPolicy(params.slug)
      ? seoHead(`/policies/${params.slug}`)
      : { meta: [{ name: "robots", content: "noindex" }] },
  component: PolicyPage,
});

function renderText(text: string) {
  // Turn bare emails and URLs into champagne underlined links.
  const parts = text.split(/(\b[\w.+-]+@[\w-]+\.[\w.]+\b|https?:\/\/[^\s)]+)/g);
  return parts.map((part, i) => {
    if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(part)) {
      return (
        <a key={i} href={`mailto:${part}`} className="text-champagne-light underline underline-offset-4">
          {part}
        </a>
      );
    }
    if (/^https?:\/\//.test(part)) {
      const clean = part.replace(/[.,;]$/, "");
      return (
        <a key={i} href={clean} target="_blank" rel="noopener" className="text-champagne-light underline underline-offset-4">
          {part}
        </a>
      );
    }
    return part;
  });
}

function PolicyPage() {
  const { slug } = Route.useLoaderData();
  const policy = findPolicy(slug)!;
  const toc = policy.sections
    .map((s, i) => ({ heading: s.heading, id: (s as { id?: string }).id ?? anchor(i) }))
    .filter((s): s is { heading: string; id: string } => Boolean(s.heading));
  const [active, setActive] = useState<string | undefined>(toc[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      let current = toc[0]?.id;
      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 160) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  const dates = [
    policy.effective ? `Effective ${policy.effective}` : null,
    policy.updated ? `Updated ${policy.updated}` : null,
  ].filter(Boolean);

  return (
    <PageShell>
      <div className="page-head">
        <div className="site-container xl:grid xl:grid-cols-[96px_minmax(0,1fr)] xl:gap-x-8">
          <div className="hidden xl:block" />
          <div className="min-w-0 xl:grid xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-x-16">
            {toc.length > 0 ? (
              <nav aria-label="Contents" className="hidden xl:block">
                <div className="sticky top-[120px]">
                  <p className="eyebrow mb-6">Contents</p>
                  <ol className="space-y-3">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          aria-current={active === item.id ? "true" : undefined}
                          className={`block font-body text-[13px] leading-[1.5] transition-colors ${
                            active === item.id ? "text-ink" : "text-walnut hover:text-ink"
                          }`}
                        >
                          {item.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </nav>
            ) : (
              <div className="hidden xl:block" />
            )}

            <article className="min-w-0 max-w-[68ch]">
              <p className="eyebrow">Policies</p>
              <h1 className="type-h1 mt-6 text-ink">
                {policy.title}
              </h1>
              <p className="mt-6 font-body text-[18px] font-light leading-[1.6] text-walnut">{policy.standfirst}</p>
              {dates.length > 0 ? (
                <p className="label-xs mt-6 text-walnut">{dates.join(". ")}</p>
              ) : null}

              {toc.length > 0 ? (
                <nav aria-label="Contents" className="mt-12 border-t border-greige pt-8 xl:hidden">
                  <p className="eyebrow mb-4">Contents</p>
                  <ol className="space-y-2">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="font-body text-[15px] text-walnut hover:text-ink">
                          {item.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              ) : null}

              <div className="mt-16 space-y-12">
                {policy.sections.map((section, i) => {
                  const hasParas = (section.paragraphs?.length ?? 0) > 0;
                  const hasBullets = (section.bullets?.length ?? 0) > 0;
                  if (!section.heading && !hasParas && !hasBullets) return null;
                  return (
                    <section key={i} id={(section as { id?: string }).id ?? anchor(i)} className="scroll-mt-[120px] space-y-5">
                      {section.heading ? (
                        <h2 className="type-h3 text-ink">
                          {section.heading}
                        </h2>
                      ) : null}
                      {section.paragraphs?.map((p, j) => (
                        <p key={j} className="font-body text-[16px] font-light leading-[1.75] text-ink/85">
                          {renderText(p)}
                        </p>
                      ))}
                      {hasBullets ? (
                        <ul className="rule-list space-y-3">
                          {section.bullets!.map((b, j) => (
                            <li
                              key={j}
                              className="font-body text-[16px] font-light leading-[1.75] text-ink/85"
                            >
                              {renderText(b)}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      </div>
      <BookingBand />
    </PageShell>
  );
}
