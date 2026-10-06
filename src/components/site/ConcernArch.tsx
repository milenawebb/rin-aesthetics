// Arch frame for concern diagrams. Geometry is fixed: 4:5, semicircular top
// (radius half the width), 4px bottom corners, image filling edge to edge.
// The diagrams are drawn against this exact curve, so do not change it.
export function ConcernArch({
  src,
  alt,
  loading,
  className = "",
}: {
  src: string;
  alt: string;
  loading: "eager" | "lazy";
  className?: string;
}) {
  return (
    <div className={`[container-type:inline-size] ${className}`}>
      <div className="aspect-[4/5] w-full overflow-hidden rounded-t-[50cqw] rounded-b-[4px] bg-greige/40">
        <img
          src={src}
          alt={alt}
          width={800}
          height={1000}
          loading={loading}
          decoding="async"
          className="block h-full w-full"
        />
      </div>
    </div>
  );
}
