import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollable = scrollHeight - clientHeight;
      const scrollY = window.scrollY;
      const threshold = scrollHeight * 0.6;
      setVisible(scrollable > 0 && scrollY + clientHeight > threshold);
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={`group fixed right-7 bottom-7 z-50 flex h-12 w-12 items-center justify-center rounded-[2px] border border-champagne bg-ink/90 transition-all duration-300 ease-out motion-reduce:transition-none hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-champagne transition-transform duration-300 ease-out motion-reduce:transition-none group-hover:-translate-y-0.5"
      >
        <path d="M6 15l6-6 6 6" />
      </svg>
    </button>
  );
}
