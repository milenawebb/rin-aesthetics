import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { navLinks, practice } from "@/data/site";
import { Logo } from "./Logo";

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
          <Logo width={118} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body text-[14px] font-normal text-ivory transition-colors hover:text-champagne"
              activeProps={{ className: "text-champagne" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={practice.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-label rounded-[2px] bg-champagne px-6 py-3 text-ink transition-colors hover:bg-ivory"
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
                className="display-tight opsz-md border-b border-walnut py-6 font-display text-[28px] font-normal text-ivory"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={practice.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-label mt-10 block rounded-[2px] bg-champagne px-6 py-4 text-center text-ink"
          >
            Book now
          </a>
          <p className="mt-10 font-body text-[14px] text-greige">
            <a href={practice.phoneHref}>{practice.phone}</a>
          </p>
        </div>
      ) : null}
    </header>
  );
}