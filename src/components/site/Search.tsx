import { useRouter } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { practice } from "@/data/site";
import { QUICK_LINKS, search, type SearchResult } from "@/lib/search";

type Tone = "light" | "dark";

export function MagnifierIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" className="shrink-0">
      <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/** Router-aware link for search results; hrefs come from the prebuilt index. */
function useGo(onDone: () => void) {
  const router = useRouter();
  return (href: string) => {
    onDone();
    router.history.push(href);
  };
}

export function SearchResults({
  query,
  results,
  active,
  tone,
  onNavigate,
  idPrefix,
}: {
  query: string;
  results: SearchResult[];
  active: number;
  tone: Tone;
  onNavigate: () => void;
  idPrefix: string;
}) {
  const go = useGo(onNavigate);
  const click = (href: string) => (e: MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    go(href);
  };
  const label = tone === "dark" ? "text-greige" : "text-walnut";
  const item = tone === "dark" ? "text-ivory" : "text-ink";
  const activeBg = tone === "dark" ? "bg-walnut/40" : "bg-greige/40";

  if (query.trim().length < 2) return null;

  if (results.length === 0) {
    return (
      <div className="py-6">
        <p className={`font-display text-[20px] font-extralight ${item}`}>No match for that.</p>
        <p className={`mt-3 font-body text-[15px] font-light leading-[1.7] ${label}`}>
          Tell me what bothers you and I will tell you what will help.
        </p>
        <a
          href={practice.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-label mt-5 inline-block rounded-[2px] bg-champagne px-6 py-3 text-ink"
        >
          Book a consultation
        </a>
        <p className={`label-xs mt-8 ${label}`}>Popular</p>
        <ul className="mt-2">
          {QUICK_LINKS.map((q) => (
            <li key={q.key}>
              <a href={q.href} onClick={click(q.href)} className={`flex min-h-[44px] items-center font-body text-[16px] font-light ${item} hover:text-champagne`}>
                {q.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  let lastGroup = "";
  return (
    <ul role="listbox" id={`${idPrefix}-list`} aria-label="Search results" className="py-2">
      {results.map((r, i) => {
        const heading = r.group !== lastGroup ? r.group : null;
        lastGroup = r.group;
        return (
          <li key={r.key} role="presentation">
            {heading ? <p className={`label-xs mt-4 mb-1 ${label}`}>{heading}</p> : null}
            <a
              id={`${idPrefix}-opt-${i}`}
              role="option"
              aria-selected={i === active}
              href={r.href}
              onClick={click(r.href)}
              className={`-mx-3 flex min-h-[44px] items-center rounded-[2px] px-3 font-body text-[16px] font-light ${item} ${i === active ? activeBg : ""} hover:text-champagne`}
            >
              {r.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/** Shared query state, keyboard navigation and Enter-to-open. */
export function useSearch(onNavigate: () => void) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(-1);
  const results = useMemo(() => search(query), [query]);
  const go = useGo(onNavigate);
  useEffect(() => setActive(results.length ? 0 : -1), [results]);

  const onInputKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a <= 0 ? results.length - 1 : a - 1));
    } else if (e.key === "Enter" && active >= 0) {
      e.preventDefault();
      go(results[active].href);
    }
  };
  return { query, setQuery, results, active, onInputKey };
}

/** Desktop: search icon trigger and centered overlay. */
export function DesktopSearch() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => btnRef.current?.focus());
  };
  return (
    <>
      <button
        ref={btnRef}
        type="button"
        aria-label="Search the site"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center text-ivory transition-colors hover:text-champagne"
      >
        <MagnifierIcon size={17} />
      </button>
      {open ? <SearchOverlay onClose={close} /> : null}
    </>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const s = useSearch(onClose);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
      return;
    }
    if (e.key !== "Tab" || !boxRef.current) return;
    const items = Array.from(boxRef.current.querySelectorAll<HTMLElement>("input, a[href], button"));
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="fixed inset-0 z-[70]" onKeyDown={onKey}>
      <div className="drawer-scrim absolute inset-0 bg-ink/60" onClick={onClose} aria-hidden="true" />
      <div
        ref={boxRef}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="relative mx-auto mt-[12vh] w-[calc(100%-48px)] max-w-[640px] rounded-[2px] border border-greige bg-ivory px-8 pb-6 pt-6"
      >
        <div className="flex items-center gap-3 border-b border-greige pb-4 text-ink">
          <MagnifierIcon size={18} />
          <input
            ref={inputRef}
            type="text"
              enterKeyHint="search"
            value={s.query}
            onChange={(e) => s.setQuery(e.target.value)}
            onKeyDown={s.onInputKey}
            placeholder="What are you looking for?"
            aria-label="Search the site"
            aria-controls="desk-search-list"
            aria-activedescendant={s.active >= 0 ? `desk-search-opt-${s.active}` : undefined}
            className="w-full bg-transparent font-body text-[18px] font-light text-ink placeholder:text-walnut focus:outline-none"
          />
          <button type="button" onClick={onClose} aria-label="Close search" className="label-xs text-walnut hover:text-ink">
            Close
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          <SearchResults
            query={s.query}
            results={s.results}
            active={s.active}
            tone="light"
            onNavigate={onClose}
            idPrefix="desk-search"
          />
        </div>
      </div>
    </div>
  );
}
