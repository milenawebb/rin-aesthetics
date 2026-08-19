import { Link } from "@tanstack/react-router";
import { footerColumns, practice } from "@/data/site";
import { Logo } from "./Logo";

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

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-[1240px] px-6 pt-16 pb-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-2 md:gap-14 lg:grid-cols-[1.2fr_repeat(3,0.8fr)]">
          <div>
            <Logo width={104} />
            <address className="mt-6 font-body not-italic text-[15px] leading-[1.75] text-greige md:mt-8">
              {practice.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a href={practice.phoneHref} className="hover:text-champagne">
                {practice.phone}
              </a>
              <br />
              <a href={`mailto:${practice.email}`} className="hover:text-champagne">
                {practice.email}
              </a>
            </address>
            <a
              href={practice.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RIN Aesthetic Practice on Instagram"
              className="mt-8 -ml-2.5 inline-flex h-11 w-11 items-center justify-center text-ivory transition-colors duration-[400ms] hover:text-champagne focus-visible:text-champagne"
            >
              <InstagramIcon />
            </a>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="label-xs text-champagne">{column.title}</h2>
              <ul className="mt-4 space-y-2.5 md:mt-6 md:space-y-3">
                {column.links.map((link, i) => (
                  <li key={`${column.title}-${i}`}>
                    <Link
                      to={link.to}
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

        <div className="mt-12 border-t border-walnut pt-8 md:mt-16">
          <p className="font-body text-[13px] font-light text-[#A39A8C]">
            © {new Date().getFullYear()} RIN Aesthetic Practice. {practice.location}.
          </p>
        </div>
      </div>
    </footer>
  );
}
