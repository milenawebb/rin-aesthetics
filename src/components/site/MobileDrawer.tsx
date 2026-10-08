import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { navLinks, practice } from "@/data/site";
import { Logo } from "./Logo";
import { drawerExtraLinks, menuGroups, navMenus, type NavMenu } from "./navMenus";
import { FeatureLinkEl, menuLinkProps } from "./MegaPanel";
import { MagnifierIcon, SearchResults, useSearch } from "./Search";

const rowClass =
  "flex min-h-[56px] w-full items-center justify-between border-b border-walnut py-3 text-left font-body text-[18px] font-light text-ivory";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="shrink-0">
      <path d={dir === "right" ? "M5 2l5 5-5 5" : "M9 2L4 7l5 5"} fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function MobileDrawer({ onClose, returnFocus }: { onClose: () => void; returnFocus: () => void }) {
  const [section, setSection] = useState<string | null>(null);
  const [dir, setDir] = useState<"fwd" | "back">("fwd");
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());
  const sheetRef = useRef<HTMLDivElement>(null);
  const srch = useSearch(onClose);
  const searching = srch.query.trim().length >= 2;

  // Lock page scroll and restore the exact position on close.
  useEffect(() => {
    const y = window.scrollY;
    const b = document.body.style;
    const prev = { position: b.position, top: b.top, width: b.width, overflow: b.overflow };
    b.position = "fixed";
    b.top = `-${y}px`;
    b.width = "100%";
    b.overflow = "hidden";
    sheetRef.current?.querySelector<HTMLElement>("button")?.focus();
    return () => {
      Object.assign(b, prev);
      window.scrollTo(0, y);
      returnFocus();
    };
  }, [returnFocus]);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
      return;
    }
    if (e.key !== "Tab" || !sheetRef.current) return;
    const items = Array.from(
      sheetRef.current.querySelectorAll<HTMLElement>("input, a[href], button:not([disabled])"),
    );
    const first = items[0];
    const last = items[items.length - 1];
    if (!first || !last) return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const drill = (to: string | null) => {
    setDir(to ? "fwd" : "back");
    setSection(to);
    requestAnimationFrame(() =>
      sheetRef.current?.querySelector<HTMLElement>("[data-level] button, [data-level] a")?.focus(),
    );
  };

  const menu: NavMenu | undefined = section ? navMenus[section] : undefined;
  const sectionLabel = navLinks.find((l) => l.to === section)?.label ?? "";

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" onKeyDown={onKey}>
      <div className="drawer-scrim absolute inset-0 bg-ink/60" onClick={onClose} aria-hidden="true" />
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="drawer-sheet absolute inset-y-0 right-0 flex w-full max-w-[480px] flex-col bg-ink"
      >
        <div className="grid shrink-0 grid-cols-[48px_1fr_48px] items-center border-b border-walnut px-4 pb-3 pt-[calc(env(safe-area-inset-top)+12px)]">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-12 w-12 items-center justify-center text-ivory"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
          <Link to="/" onClick={onClose} className="justify-self-center" aria-label="RIN home">
            <Logo width={89} />
          </Link>
          <span />
        </div>

        <div className="shrink-0 border-b border-walnut px-6 py-3">
          <div className="flex items-center gap-3 text-greige">
            <MagnifierIcon size={16} />
            {/* Never autofocused: on a phone the keyboard would cover the menu. */}
            <input
              type="text"
              enterKeyHint="search"
              value={srch.query}
              onChange={(e) => srch.setQuery(e.target.value)}
              onKeyDown={srch.onInputKey}
              placeholder="What are you looking for?"
              aria-label="Search the site"
              aria-controls="drawer-search-list"
              aria-activedescendant={srch.active >= 0 ? `drawer-search-opt-${srch.active}` : undefined}
              className="min-h-[44px] w-full bg-transparent font-body text-[16px] font-light text-ivory placeholder:text-greige focus:outline-none"
            />
            {srch.query ? (
              <button type="button" onClick={() => srch.setQuery("")} className="label-xs shrink-0 text-greige">
                Clear
              </button>
            ) : null}
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain">
          {searching ? (
            <div className="px-6 pb-10">
              <SearchResults
                query={srch.query}
                results={srch.results}
                active={srch.active}
                tone="dark"
                onNavigate={onClose}
                idPrefix="drawer-search"
              />
            </div>
          ) : menu ? (
            <div key={menu.id} data-level className={`px-6 pb-10 ${dir === "fwd" ? "drawer-level-fwd" : "drawer-level-back"}`}>
              <button
                type="button"
                onClick={() => drill(null)}
                className="flex min-h-[56px] w-full items-center gap-3 border-b border-walnut text-left label-xs text-greige"
              >
                <Chevron dir="left" />
                <span>{sectionLabel}</span>
              </button>
              <Link to={menu.allHref} onClick={onClose} className={`${rowClass} font-normal text-champagne`}>
                {menu.allLabel}
              </Link>
              {menuGroups(menu).map((g) => {
                const key = `${menu.id}:${g.heading}`;
                const isOpen = openGroups.has(key);
                const id = `drawer-group-${key.replace(/[^a-z0-9]+/gi, "-")}`;
                return (
                  <div key={key} className="border-b border-walnut">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={id}
                      onClick={() =>
                        setOpenGroups((s) => {
                          const n = new Set(s);
                          if (n.has(key)) n.delete(key);
                          else n.add(key);
                          return n;
                        })
                      }
                      className="flex min-h-[56px] w-full items-center justify-between text-left font-body text-[18px] font-light text-ivory"
                    >
                      <span>{g.heading}</span>
                      <span aria-hidden="true" className="text-[20px] font-extralight text-greige">
                        {isOpen ? "\u2212" : "+"}
                      </span>
                    </button>
                    {isOpen ? (
                      <ul id={id} className="pb-4 pl-5">
                        {g.links.map((l) => (
                          <li key={l.label}>
                            <Link
                              {...menuLinkProps(l)}
                              onClick={onClose}
                              className="flex min-h-[44px] items-center font-body text-[16px] font-light text-greige"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
              <div className="mt-8 rounded-[2px] bg-walnut/40 px-5 py-6">
                <p className="label-xs text-champagne">{menu.feature.eyebrow}</p>
                <p className="mt-3 font-display text-[20px] font-extralight text-ivory">{menu.feature.title}</p>
                <p className="mt-3 font-body text-[14px] font-light leading-[1.7] text-greige">{menu.feature.body}</p>
                <FeatureLinkEl
                  feature={menu.feature}
                  onClick={onClose}
                  className="btn-label mt-5 inline-block border-b border-champagne pb-1 text-ivory"
                />
                {menu.feature.note ? <p className="mt-3 font-body text-[13px] font-light leading-[1.6] text-greige">{menu.feature.note}</p> : null}
              </div>
            </div>
          ) : (
            <nav
              key="top"
              data-level
              aria-label="Mobile"
              className={`px-6 ${dir === "back" ? "drawer-level-back" : ""}`}
            >
              {navLinks.map((link) =>
                navMenus[link.to] ? (
                  <button key={link.to} type="button" onClick={() => drill(link.to)} className={rowClass}>
                    <span>{link.label}</span>
                    <Chevron dir="right" />
                  </button>
                ) : (
                  <Link key={link.to} to={link.to} onClick={onClose} className={rowClass}>
                    {link.label}
                  </Link>
                ),
              )}
              {drawerExtraLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={onClose} className={rowClass}>
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>

        {!menu && !searching ? (
          <div className="shrink-0 px-6 pb-[calc(env(safe-area-inset-bottom)+20px)] pt-5">
            <a
              href={practice.bookingUrl}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="btn-label block rounded-[2px] bg-champagne px-6 py-4 text-center text-ink"
            >
              Book now
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
