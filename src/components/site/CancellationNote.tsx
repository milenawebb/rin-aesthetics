import { Link } from "@tanstack/react-router";

/** Supporting line under booking actions; links to the policy section anchor. Uses the existing fee-line note style. */
export function CancellationNote({ className = "" }: { className?: string }) {
  return (
    <p className={`font-body text-[14px] font-light leading-[1.6] text-walnut ${className}`}>
      Cancellations within 48 hours are charged. See our{" "}
      <Link
        to="/policies/$slug"
        params={{ slug: "service-policies" }}
        hash="cancellations"
        className="underline decoration-greige underline-offset-4 transition-colors hover:text-ink"
      >
        cancellation policy
      </Link>
      .
    </p>
  );
}
