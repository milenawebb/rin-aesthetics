import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo-head";
import { PageShell } from "@/components/site/PageShell";
import { BookingBand } from "@/components/site/BookingBand";

const APPLY_URL = "https://app.patientfi.com/v2/charlottesville-aesthetics/apply";

export const Route = createFileRoute("/financing")({
  head: () => seoHead("/financing"),
  component: FinancingPage,
});

const steps = [
  { title: "Apply on PatientFi's site.", body: "It takes about a minute and happens entirely with them." },
  { title: "See what you qualify for.", body: "You will know your terms before you commit to any treatment." },
  { title: "Book your treatment.", body: "Use your plan at your appointment and pay monthly." },
];

const notes = [
  "Approval, rates and terms are set by PatientFi, not by the practice. We do not see your application or make the lending decision.",
  "Financing can be used toward treatments and packages. It cannot be used for retail products or gift certificates.",
  "If you are not sure whether financing makes sense for what you are considering, ask at your consultation. I would rather talk through the treatment plan first and the payment second.",
];

const body = "measure font-body text-[16px] font-light leading-[1.75] text-walnut";
const h2 = "type-h2 text-ink";

function FinancingPage() {
  return (
    <PageShell>
      <section className="page-head site-container">
        <p className="eyebrow">Payment options</p>
        <h1 className="type-h1 mt-6 text-ink">
          Pay over time with PatientFi
        </h1>
        <div className="mt-8 space-y-5">
          <p className={body}>
            Some treatments are a bigger decision than others. A course of laser resurfacing or a full facial balancing plan is not something most people want to pay for in one go, and I would rather you treat your skin on the right schedule than on the schedule your budget allows this month.
          </p>
          <p className={body}>
            PatientFi lets you spread the cost over monthly payments. The application is on their site, takes about a minute, and PatientFi states that checking your options does not affect your credit score.
          </p>
        </div>

        <div className="mt-16 border-t border-greige pt-12">
          <h2 className={h2}>How it works</h2>
          <ol className="mt-8 space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-6">
                <span className="label-xs pt-[6px] text-champagne-light">{String(i + 1).padStart(2, "0")}</span>
                <p className={body}>
                  <span className="font-normal text-ink">{s.title}</span> {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 border-t border-greige pt-12">
          <h2 className={h2}>Worth knowing</h2>
          <ul className="mt-8 space-y-4">
            {notes.map((n) => (
              <li key={n} className={`${body} border-l border-greige pl-5`}>{n}</li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-label inline-block rounded-[2px] border border-greige bg-transparent px-8 py-[18px] text-ink transition-colors hover:border-champagne"
          >
            Apply through PatientFi
          </a>
          <p className={`${body} mt-5 text-[14px]`}>
            PatientFi is an independent lender. Applying does not commit you to booking anything.
          </p>
        </div>
      </section>
      <BookingBand />
    </PageShell>
  );
}
