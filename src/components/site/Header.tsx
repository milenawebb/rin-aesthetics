import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { navLinks, practice } from "@/data/site";
import { Logo } from "./Logo";
import { navMenus, type NavMenu } from "./navMenus";

const OPEN_DELAY = 100;
const CLOSE_DELAY = 200;

export function Header() {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);
  const openTimer = useRef<number | undefined>(undefined);
  const closeTimer = useRef<number | undefined>(undefined);
  const navRef = useRef<HTMLElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close everything on route change.
  useEffect(() => {
    setPanel(null);
    setOpen(false);
  }, [pathname]);

  // Click outside closes the desktop panel.
  useEffect(() => {
    if (!panel) return;
    const onDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setPanel(null);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [panel]);

  const clearTimers = () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
  };

  const hoverOpen = (to: string) => {
    clearTimers();
    // Another panel already open: swap immediately.
    if (panel && panel !== to) return setPanel(to);
    openTimer.current = window.setTimeout(() => setPanel(to), OPEN_DELAY);
  };
  const hoverClose = () => {
    clearTimers();
    closeTimer.current = window.setTimeout(() => setPanel(null), CLOSE_DELAY);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-ink">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="block leading-none" onClick={() => setOpen(false)}>
          <Logo width={118} />
        </Link>

        <nav ref={navRef} aria-label="Primary" className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const menu = navMenus[link.to];
            if (!menu) {
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-body text-[14px] font-normal text-ivory transition-colors hover:text-champagne"
                  activeProps={{ className: "text-champagne" }}
                  onMouseEnter={() => panel && setPanel(null)}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <DesktopDropdown
                key={link.to}
                label={link.label}
                to={link.to}
                menu={menu}
                isOpen={panel === link.to}
                setOpen={(v) => {
                  clearTimers();
                  setPanel(v ? link.to : null);
                }}
                onHoverIn={() => hoverOpen(link.to)}
                onHoverOut={hoverClose}
              />
            );
          })}
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
        <div className="fixed inset-0 top-20 z-50 flex flex-col overflow-y-auto overscroll-contain bg-ink px-6 pb-16 pt-10 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => {
              const menu = navMenus[link.to];
              return menu ? (
                <MobileAccordion
                  key={link.to}
                  label={link.label}
                  to={link.to}
                  menu={menu}
                  onNavigate={() => setOpen(false)}
                />
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="display-tight border-b border-walnut py-6 font-display text-[28px] font-extralight text-ivory"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <a
            href={practice.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-label mt-10 block shrink-0 rounded-[2px] bg-champagne px-6 py-4 text-center text-ink"
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

function canHover() {
  return typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;
}

function DesktopDropdown({
  label,
  to,
  menu,
  isOpen,
  setOpen,
  onHoverIn,
  onHoverOut,
}: {
  label: string;
  to: string;
  menu: NavMenu;
  isOpen: boolean;
  setOpen: (v: boolean) => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = `nav-panel-${menu.id}`;

  const focusFirst = () =>
    requestAnimationFrame(() => panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus());

  const onTriggerKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      focusFirst();
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const onPanelKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    }
  };

  // Touch devices: first tap opens the panel instead of navigating.
  const onTriggerClick = (e: MouseEvent) => {
    if (!canHover() && !isOpen) {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => canHover() && onHoverIn()}
      onMouseLeave={() => canHover() && onHoverOut()}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        ref={triggerRef}
        to={to}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onTriggerClick}
        onKeyDown={onTriggerKey}
        onFocus={(e) => {
          if (e.currentTarget.matches(":focus-visible")) setOpen(true);
        }}
        className="font-body text-[14px] font-normal text-ivory transition-colors hover:text-champagne"
        activeProps={{ className: "text-champagne" }}
      >
        {label}
      </Link>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!isOpen}
        onKeyDown={onPanelKey}
        className="nav-panel absolute left-0 top-full z-50 pt-6"
      >
        <div className="w-max max-w-[min(560px,calc(100vw-48px))] rounded-[2px] border border-greige bg-ivory px-8 py-7">
          <div className="grid grid-cols-2 gap-x-10">
            {menu.columns.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-6">
                {col.map((group, gi) => (
                  <div key={gi}>
                    {group.heading ? (
                      <p className="label-xs mb-3 text-olive">{group.heading}</p>
                    ) : null}
                    <ul className="flex flex-col gap-[10px]">
                      {group.links.map((l) => (
                        <li key={l.href}>
                          <a
                            href={l.href}
                            className="font-body text-[14px] font-light text-ink transition-colors hover:text-walnut"
                          >
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-greige pt-5">
            <a href={menu.allHref} className="btn-label text-ink transition-colors hover:text-walnut">
              {menu.allLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  label,
  to,
  menu,
  onNavigate,
}: {
  label: string;
  to: string;
  menu: NavMenu;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const id = `mobile-panel-${menu.id}`;
  const groups = menu.columns.flat();

  return (
    <div className="border-b border-walnut">
      <div className="flex items-center justify-between">
        <Link
          to={to}
          onClick={onNavigate}
          className="display-tight flex-1 py-6 font-display text-[28px] font-extralight text-ivory"
        >
          {label}
        </Link>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={id}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${label}`}
          onClick={() => setExpanded((v) => !v)}
          className="flex h-12 w-12 items-center justify-center text-greige"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            aria-hidden="true"
            className={`transition-transform duration-150 ${expanded ? "rotate-180" : ""}`}
          >
            <path d="M2 5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>
      </div>
      {expanded ? (
        <div id={id} className="pb-6">
          {groups.map((g, i) => (
            <div key={i} className={i > 0 && g.heading ? "mt-5" : ""}>
              {g.heading ? <p className="label-xs mb-2 text-olive">{g.heading}</p> : null}
              <ul className="flex flex-col">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={onNavigate} className="block py-2 font-body text-[16px] font-light text-greige">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <a href={menu.allHref} onClick={onNavigate} className="btn-label mt-5 block py-2 text-champagne">
            {menu.allLabel}
          </a>
        </div>
      ) : null}
    </div>
  );
}
