import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-ivory">
      <Header />
      <main className="flex-1 overflow-x-clip">{children}</main>
      <Footer />
    </div>
  );
}


export function PlaceholderPage({ title, blurb }: { title: string; blurb: string }) {
  return (
    <PageShell>
      <section className="page-head site-container">
        <p className="label-xs text-champagne-light">RIN</p>
        <h1 className="type-h1 mt-6 text-ink">
          {title}
        </h1>
        <p className="measure mt-6 font-body text-[16px] font-light leading-[1.75] text-walnut">
          {blurb}
        </p>
      </section>
    </PageShell>
  );
}