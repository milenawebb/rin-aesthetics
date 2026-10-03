export function SectionLabel({ children }: { children: string }) {
  return (
    <>
      <div className="section-label">
        <span className="eyebrow section-label-pin">{children}</span>
      </div>
      <p className="eyebrow xl:hidden">{children}</p>
    </>
  );
}
