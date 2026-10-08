import { useEffect, useRef, useState } from "react";

interface EarlyImageProps {
  src: string;
  srcSet: string;
  webpSrcSet: string;
  sizes: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Background on the picture box while the photo loads. */
  color: string;
  pictureClassName?: string;
}

/**
 * Below-the-fold photo that starts fetching about 800px before it enters the
 * viewport (native lazy loading uses a fixed, shorter margin), at low priority
 * so it never competes with the hero, then fades in over 180ms once decoded.
 * Reduced motion swaps instantly. Width and height stay set, so no layout shift.
 */
export function EarlyImage({ src, srcSet, webpSrcSet, sizes, alt, width, height, className = "", color, pictureClassName = "block" }: EarlyImageProps) {
  const boxRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [load, setLoad] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setLoad(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (load && img?.complete && img.naturalWidth) setShown(true);
  }, [load]);

  return (
    <picture ref={boxRef} className={pictureClassName} style={{ backgroundColor: color }}>
      {load ? <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} /> : null}
      <img
        ref={imgRef}
        src={load ? src : undefined}
        srcSet={load ? srcSet : undefined}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        decoding="async"
        fetchPriority="low"
        onLoad={() => setShown(true)}
        className={`${className} transition-opacity duration-[180ms] ease-out motion-reduce:transition-none ${shown ? "opacity-100" : "opacity-0"}`}
      />
      <noscript>
        <img src={src} srcSet={srcSet} sizes={sizes} alt="" width={width} height={height} className={className} />
      </noscript>
    </picture>
  );
}
