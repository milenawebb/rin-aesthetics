# src/lib rules

- Jyl's portrait has one source asset (jyl-portrait.jpg); all placements take sizes and WebP from src/lib/portrait.ts, derived from that source. Why: one photo to replace, every placement downloads only the size it paints.
- The treating photo (src/lib/treating.ts) appears only in the "How Jyl approaches this" section of services listed in TREATING_PHOTO_SERVICE_IDS, never in results, galleries or beside outcome claims. Why: it is atmosphere, and placing it near outcomes would bring it under before and after advertising rules.
- The Home hero's three crops are served as WebP with JPEG fallback at derived widths from src/lib/hero.ts, shared by the picture and the preload. Why: a phone must never download the full PNG crop.
