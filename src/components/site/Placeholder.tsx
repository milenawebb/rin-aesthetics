interface PlaceholderProps {
  label: string;
  alt: string;
  className?: string;
}

export function Placeholder({ label, alt, className = "" }: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center rounded-[2px] bg-greige ${className}`}
    >
      <span className="label-xs text-ink/55">{label}</span>
    </div>
  );
}