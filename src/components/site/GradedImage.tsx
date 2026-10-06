interface GradedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  srcSet?: string;
  webpSrcSet?: string;
  sizes?: string;
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
  srcSet,
  webpSrcSet,
  sizes,
}: GradedImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-[2px] bg-greige ${className}`}>
      <picture>
      {webpSrcSet ? <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} /> : null}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover"
        style={{ filter: "saturate(0.92) brightness(1.02)" }}
      />
      </picture>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: "rgba(201,169,97,0.06)" }}
      />
    </div>
  );
}
