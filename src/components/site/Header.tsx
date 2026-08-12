import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { navLinks, practice } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-ink">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="block leading-none" onClick={() => setOpen(false)}>
          <span className="block font-display text-[26px] leading-none tracking-[0.14em] text-ivory">
            {practice.wordmark}
          </span>
          <span className="mt-1 block text-[9px] font-normal uppercase leading-none tracking-[0.34em] text-greige">
            {practice.wordmarkSub}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[14px] font-light text-ivory transition-colors hover:text-champagne"
              activeProps={{ className: "text-champagne" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={practice.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-[2px] bg-champagne px-6 py-3 text-[12px] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ivory"
          >
            Book now
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="label-xs text-ivory lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 top-20 z-50 flex flex-col bg-ink px-6 pb-16 pt-10 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-walnut py-6 font-display text-[26px] font-light text-ivory"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={practice.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 block rounded-[2px] bg-champagne px-6 py-4 text-center text-[12px] uppercase tracking-[0.16em] text-ink"
          >
            Book now
          </a>
          <p className="mt-10 text-[14px] text-greige">
            <a href={practice.phoneHref}>{practice.phone}</a>
          </p>
        </div>
      ) : null}
    </header>
  );
}