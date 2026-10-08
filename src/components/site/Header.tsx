import { consultation } from "@/data/consultation";
import { Link, useRouterState } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { navLinks, practice } from "@/data/site";
import { Logo } from "./Logo";
import { navMenus, type NavMenu } from "./navMenus";
import { MegaPanel } from "./MegaPanel";
import { MobileDrawer } from "./MobileDrawer";
import { DesktopSearch } from "./Search";

const OPEN_DELAY = 100;
const CLOSE_DELAY = 200;

/** Each page renders its own header, so a drawer link navigation hands focus to the next page's Menu button. */
let focusMenuOnMount = false;

export function Header() {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);
  const openTimer = useRef<number | undefined>(undefined);
  const closeTimer = useRef<number | undefined>(undefined);
  const navRef = useRef<HTMLElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const closeDrawer = useCallback(() => setOpen(false), []);
  const returnFocus = useCallback(() => {
    focusMenuOnMount = true;
    menuBtnRef.current?.focus();
    window.setTimeout(() => (focusMenuOnMount = false), 1000);
  }, []);

  useEffect(() => {
    if (focusMenuOnMount) {
      focusMenuOnMount = false;
      menuBtnRef.current?.focus();
    }
  }, []);
  const pathname = useRouterState({ select: (s) => s.location.pathname });


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

  const pinned = useCompactHeader(open);

  return (
    <header
      className="relative z-50 h-20 w-full bg-ink lg:sticky lg:top-0 lg:h-auto"
    >
      <div
        className={`compact-header fixed inset-x-0 top-0 bg-ink lg:static lg:translate-y-0 lg:border-0 ${pinned ? "-translate-y-6 border-b border-walnut" : ""}`}
      >
      <div className={`compact-header site-container flex h-20 items-center justify-between lg:translate-y-0 ${pinned ? "translate-y-3" : ""}`}>
        <Link to="/" className="block leading-none" onClick={() => setOpen(false)}>
          <Logo width={109} className={`compact-header origin-left lg:scale-100 ${pinned ? "scale-[0.712]" : ""}`} />
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
          <div className="-mx-4">
            <DesktopSearch />
          </div>
          <a
            href={consultation.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-label rounded-[2px] bg-champagne px-6 py-3 text-ink transition-colors hover:bg-ivory"
          >
            Book now
          </a>
        </nav>

        <div className="flex items-center gap-6 lg:hidden">
            <a
              href={consultation.bookingUrl}
              target="_blank"
              rel="noreferrer"
              aria-hidden={!pinned}
              tabIndex={pinned ? undefined : -1}
              className={`btn-label inline-flex min-h-11 w-[118px] items-center justify-center rounded-[2px] bg-champagne text-ink ${pinned ? "" : "invisible"}`}
            >
              Book now
            </a>
          <button
            ref={menuBtnRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label="Open menu"
            className="label-xs min-h-11 text-ivory"
          >
            Menu
          </button>
        </div>
      </div>
      </div>

      {open ? <MobileDrawer onClose={closeDrawer} returnFocus={returnFocus} /> : null}
    </header>
  );
}

/**
 * Below 1024px the bar is always fixed inside an 80px in-flow reservation. It turns compact on the
 * first scroll and stays compact until the page is back at the top. Desktop always reports false.
 */
function useCompactHeader(menuOpen: boolean) {
  const [compact, setCompact] = useState(false);
  const menuRef = useRef(menuOpen);
  menuRef.current = menuOpen;
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const onScroll = () => {
      // The open menu locks page scrolling; keep the header as it was until it closes.
      if (menuRef.current) return;
      setCompact(mq.matches && window.scrollY > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onScroll);
    };
  }, []);
  return compact;
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
  const skipFocusOpen = useRef(false);

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
      skipFocusOpen.current = true;
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
          if (skipFocusOpen.current) {
            skipFocusOpen.current = false;
            return;
          }
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
        className="nav-panel absolute inset-x-0 top-full z-50 max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden border-b border-greige bg-ivory"
      >
        <MegaPanel columns={menu.columns} feature={menu.feature} />
      </div>
    </div>
  );
}
