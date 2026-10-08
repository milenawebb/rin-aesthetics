import { Link } from "@tanstack/react-router";
import { footerColumns, practice } from "@/data/site";
import { Logo } from "./Logo";

/** Policies render as a quiet row at the foot; the other groups form the column grid. */
const linkColumns = footerColumns.filter((c) => c.title !== "Policies");
const policyLinks = footerColumns.find((c) => c.title === "Policies")?.links ?? [];

function InstagramIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="6" ry="6" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="chevron transition-transform duration-300 [transition-timing-function:var(--ease-editorial)]"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ContactBlock() {
  return (
    <div>
      <Link to="/" aria-label="RIN Aesthetic Practice home" className="inline-block">
        <Logo width={96} />
      </Link>
      <address className="mt-6 font-body not-italic text-[15px] leading-[1.75] text-greige md:mt-8">
        {practice.addressLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        Text{" "}
        <a href={practice.smsHref} className="hover:text-champagne">
          {practice.phone}
        </a>
        <br />
        <a href={`mailto:${practice.email}`} className="hover:text-champagne">
          {practice.email}
        </a>
        {practice.hoursLines.map((l, i) => (
          <span key={l} className={i === 0 ? "mt-4 block" : "block"}>
            {l}
          </span>
        ))}
      </address>
      <a
        href={practice.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="RIN Aesthetic Practice on Instagram"
        className="mt-10 inline-flex h-11 w-11 items-center justify-center text-ivory transition-colors duration-[400ms] hover:text-champagne focus-visible:text-champagne md:mt-8"
      >
        <InstagramIcon />
      </a>
    </div>
  );
}

function DesktopFooter() {
  return (
    <div className="hidden md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-14 lg:grid-cols-[max-content_repeat(3,minmax(0,1fr))] lg:gap-x-12">
      <div className="md:col-span-3 lg:col-span-1">
        <ContactBlock />
      </div>

      {linkColumns.map((column) => (
        <div key={column.title}>
          <div id={`footer-${column.title.toLowerCase()}`} className="label-xs text-champagne">{column.title}</div>
          <ul aria-labelledby={`footer-${column.title.toLowerCase()}`} className="mt-4 space-y-2.5 md:mt-6 md:space-y-3">
            {column.links.map((link, i) => (
              <li key={`${column.title}-${i}`}>
                <Link
                  to={link.to}
                  {...(link.hash ? { hash: link.hash } : {})}
                  className="font-body text-[15px] text-greige transition-colors hover:text-ivory"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function MobileAccordion() {
  return (
    <div className="md:hidden mt-12">
      {linkColumns.map((column) => (
        <details key={column.title} className="footer-accordion group">
          <summary className="footer-accordion-summary flex h-[60px] cursor-pointer items-center justify-between border-b border-[#3A3128] focus-visible:outline focus-visible:outline-1 focus-visible:outline-champagne focus-visible:outline-offset-0">
            <span className="font-body text-[13px] font-medium uppercase tracking-[0.16em] text-ivory">
              {column.title}
            </span>
            <ChevronIcon />
          </summary>
          <div className="footer-accordion-panel grid">
            <div>
              <ul className="py-2">
                {column.links.map((link, i) => (
                  <li key={`${column.title}-${i}`}>
                    <Link
                      to={link.to}
                      {...(link.hash ? { hash: link.hash } : {})}
                      className="flex h-11 items-center font-body text-[15px] font-light text-ivory transition-colors hover:text-champagne"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="site-container pt-16 pb-20 md:py-28">
        {/* Mobile: always-visible brand + contact + accordion */}
        <div className="md:hidden">
          <ContactBlock />
          <MobileAccordion />
        </div>

        <DesktopFooter />

        {policyLinks.length > 0 && (
          <nav aria-label="Policies" className="mt-12 md:mt-16">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {policyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-[13px] font-light text-footer-credit transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="mt-12 flex flex-col items-start gap-2 border-t border-walnut pt-8 md:mt-16 md:flex-row md:items-baseline md:justify-between md:gap-8">
          <p className="font-body text-[13px] font-light text-[#A39A8C]">
            © {new Date().getFullYear()} RIN Aesthetic Practice. {practice.location}.
          </p>
          <p className="font-body text-[13px] font-light text-footer-credit">
            Developed by{" "}
            <a
              href="https://fifthexit.com"
              target="_blank"
              rel="noopener"
              className="underline-offset-4 hover:underline focus-visible:underline"
            >
              fifthexit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
