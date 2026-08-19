interface GradedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

/**
 * Stock/temporary photography wrapper.
 * Applies one consistent grade to every sourced image so mixed sources cohere:
 * saturation 0.92, brightness 1.02 and a warm champagne overlay at 6%.
 */
export function GradedImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
}: GradedImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-[2px] bg-greige ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover"
        style={{ filter: "saturate(0.92) brightness(1.02)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: "rgba(201,169,97,0.06)" }}
      />
    </div>
  );
}
