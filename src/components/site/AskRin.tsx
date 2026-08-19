import { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const SUGGESTIONS = [
  "What helps with dark spots?",
  "How much is lip filler?",
  "Downtime for a peel?",
];

const PLACEHOLDER_REPLY =
  "This is a preview — the assistant will be connected before launch.";

type Message = { role: "user" | "assistant"; text: string };

export function AskRin() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    panel?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (active === first || active === panel)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  const ask = (question: string) => {
    const text = question.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "assistant", text: PLACEHOLDER_REPLY },
    ]);
    setDraft("");
    window.requestAnimationFrame(() => {
      const el = bodyRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Ask RIN"
        style={{ transitionTimingFunction: EASE }}
        className={`group fixed right-7 bottom-7 z-50 flex h-14 items-center justify-center gap-2 overflow-hidden rounded-[2px] border border-champagne bg-ink px-0 transition-[width,opacity] duration-[400ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-ivory motion-reduce:transition-none w-14 hover:w-[168px] focus-visible:w-[168px] ${
          mounted ? "opacity-100" : "pointer-events-none opacity-0"
        } ${open ? "pointer-events-none opacity-0" : ""}`}
      >
        <span className="hidden h-[5px] w-[5px] shrink-0 rounded-full bg-champagne group-hover:block group-focus-visible:block" />
        <span className="whitespace-nowrap font-body text-[11px] font-medium tracking-[0.22em] text-champagne">
          <span className="group-hover:hidden group-focus-visible:hidden">ASK</span>
          <span className="hidden group-hover:inline group-focus-visible:inline">ASK RIN</span>
        </span>
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Ask RIN"
          tabIndex={-1}
          style={{ transitionTimingFunction: EASE }}
          className="ask-rin-panel fixed inset-0 z-50 flex flex-col rounded-none border border-greige bg-ivory focus:outline-none sm:inset-auto sm:right-7 sm:bottom-7 sm:h-[560px] sm:w-[400px] sm:rounded-[2px]"
        >
          <div className="bg-ink px-5 py-[18px]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-body text-[16px] font-light text-ivory">Ask RIN</p>
                <p className="mt-1 font-body text-[12px] font-light text-[#8A8377]">
                  Answers about treatments, pricing and care
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close Ask RIN"
                className="-mr-2 -mt-1 flex h-9 w-9 items-center justify-center text-champagne transition-colors hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
          </div>

          <div ref={bodyRef} className="flex-1 overflow-y-auto bg-ivory px-5 py-6">
            <p className="font-body text-[14px] font-light leading-[1.65] text-walnut">
              Hi — I can help with treatments, prices, downtime and how to prepare. For
              anything clinical, Jyl will answer at your consultation.
            </p>

            {messages.length === 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => ask(s)}
                    className="rounded-[2px] border border-greige bg-white px-[13px] py-[7px] font-body text-[12px] font-light text-walnut transition-colors hover:border-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="mt-6 space-y-4">
              {messages.map((m, i) => (
                <p
                  key={i}
                  className={
                    m.role === "user"
                      ? "ml-auto max-w-[85%] rounded-[2px] border border-greige bg-white px-3 py-2 font-body text-[14px] font-light leading-[1.65] text-ink"
                      : "max-w-[90%] font-body text-[14px] font-light leading-[1.65] text-walnut"
                  }
                >
                  {m.text}
                </p>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(draft);
            }}
            className="flex items-center gap-3 border-t border-greige bg-white px-5 py-4"
          >
            <label htmlFor="ask-rin-input" className="sr-only">
              Ask a question
            </label>
            <input
              id="ask-rin-input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask a question…"
              className="flex-1 bg-transparent font-body text-[13px] font-light text-ink placeholder:text-walnut/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            />
            <button
              type="submit"
              className="font-body text-[10px] font-medium tracking-[0.16em] text-champagne transition-colors hover:text-walnut focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            >
              SEND
            </button>
          </form>
        </div>
      )}
    </>
  );
}
