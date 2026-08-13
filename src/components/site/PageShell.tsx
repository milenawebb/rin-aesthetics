import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PlaceholderPage({ title, blurb }: { title: string; blurb: string }) {
  return (
    <PageShell>
      <section className="mx-auto max-w-[1240px] px-6 py-[72px] md:px-10 md:py-[120px]">
        <p className="label-xs text-champagne">RIN</p>
        <h1 className="display-tight mt-6 font-display text-[34px] font-extralight text-ink md:text-[56px]">
          {title}
        </h1>
        <p className="measure mt-6 font-body text-[16px] font-light leading-[1.75] text-walnut">
          {blurb}
        </p>
      </section>
    </PageShell>
  );
}