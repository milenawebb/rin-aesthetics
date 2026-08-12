interface PlaceholderProps {
  label: string;
  alt: string;
  className?: string;
  labelPosition?: "center" | "bottom-left";
}

export function Placeholder({
  label,
  alt,
  className = "",
  labelPosition = "center",
}: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex rounded-[2px] bg-greige ${
        labelPosition === "center"
          ? "items-center justify-center"
          : "items-end justify-start p-6 md:p-10"
      } ${className}`}
    >
      <span className="label-xs text-ink/55">{label}</span>
    </div>
  );
}