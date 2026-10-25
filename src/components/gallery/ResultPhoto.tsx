import { useEffect, useRef, useState, type CSSProperties } from "react";
import { resultPhotos, resultPhotoSizes } from "./resultPhotos";

// Both axes must be near view: the page viewport and the clipped scrolling row.
// No source is emitted by SSR, so native lazy-load distance cannot fetch early.
export function ResultPhoto({ src, alt, className, style, sizes = resultPhotoSizes }: {
  src: string;
  alt: string;
  className: string;
  style?: CSSProperties;
  sizes?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [ready, setReady] = useState(false);
  const photo = resultPhotos[src];

  useEffect(() => {
    const image = ref.current;
    const rail = image?.closest('[role="region"][aria-label="Results"]');
    if (!image || !rail) return;
    let pageNear = false;
    let rowNear = false;
    const reveal = () => {
      if (!pageNear || !rowNear) return;
      setReady(true);
      pageObserver.disconnect();
      rowObserver.disconnect();
    };
    const pageObserver = new IntersectionObserver(([entry]) => {
      pageNear = entry?.isIntersecting ?? false;
      reveal();
    }, { rootMargin: "250px 0px" });
    const rowObserver = new IntersectionObserver(([entry]) => {
      rowNear = entry?.isIntersecting ?? false;
      reveal();
    }, { root: rail, rootMargin: "0px 200px" });
    pageObserver.observe(rail);
    rowObserver.observe(image);
    return () => {
      pageObserver.disconnect();
      rowObserver.disconnect();
    };
  }, [src]);

  return (
    <picture className="contents">
      {ready && photo ? <source type="image/webp" srcSet={photo.webp} sizes={sizes} /> : null}
      <img
        ref={ref}
        src={ready ? photo?.src ?? src : undefined}
        srcSet={ready ? photo?.jpg : undefined}
        sizes={sizes}
        alt={alt}
        decoding="async"
        fetchPriority="low"
        className={className}
        style={style}
      />
    </picture>
  );
}