<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history (force pushing, or rebasing/amending/squashing commits
> that are already pushed), as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- No em dashes anywhere in this project. Not in copy, headings, button labels, alt text, meta descriptions, schema, form text, error messages, comments, or AI assistant responses. Use a full stop, a comma, a colon or brackets instead. Do not substitute a spaced hyphen. This applies to all new content and to any content generated or edited later. Every build runs the dash checker against src, including encoded forms, so violations fail before compilation.
- Use American English throughout all visitor-facing and internal copy because RIN is a Virginia practice. Use forms such as customize, customization, color, center, gray, catalog, and license as a noun.

- Service and concern content lives only in src/data (services.ts, concerns.ts); pages render a section only when its field is non-empty. Why: content is filled field by field and empty fields must never show placeholders.
- Treatment headers without a device image use one spacing owner before the intro; facts stack below the tablet breakpoint. Why: avoids doubled section spacing and orphan fact cells.
- Service URLs are /<category>/<slug> taken from Service.slug via one dynamic route; redirects.ts entries are 301s in that route; /book/consultation is a page stating the consultation fee before linking to Vagaro, other /book/* send to Vagaro. Why: routes stay generated from data.

- Gallery records are the single source for results placements; service and concern matches derive from service IDs, and images render only through isDisplayable(), which admits real photos solely via isPublishable() and otherwise only patient-free stand-ins. Why: treatment tags stay synchronized and patient consent is enforced at render time.
- Contact submissions are written by a server function before email is attempted, and delivery status is stored on each record. Why: a provider failure must never lose a visitor message.
- Gutter-labeled sections use the shared structural 96px label column and 32px gap at 1280px and wider. Why: label spacing must stay identical across pages without positional offsets.
- Keep AskRin dormant and unimported by the root layout, retaining its component and CSS without canned assistant replies. Why: Phase 2 can reuse the interface without shipping an inactive assistant or reserving floating-button clearance in Phase 1.

- Legacy URLs are answered by one server request middleware in src/start.ts: 410 for retiredUrls, then 301 from wordpressRedirects, then 301 from redirects.ts, matching with or without a trailing slash. Why: real status codes before any page renders, with data files as the only source.

- Header dropdowns and mobile accordions derive from concerns.ts and services.ts via src/components/site/navMenus.ts; booking actions are a separate array and never appear. Why: adding a concern or service updates the nav with no hand list.
- Heading sizes come only from the type-h1, type-h2 and type-h3 utilities in src/styles.css; section spacing comes only from page-head, section-space and band-space, with each section owning its bottom space only. Why: one change applies site-wide and spacing values can never stack.
- Every horizontal edge (header, page content, booking band, footer, mega panel) uses the one site-container utility in src/styles.css; routes and components never set their own max width, side padding or centering, and side-label grids nest inside it; right-bleeding rails use site-bleed-right, and the tablet Home hero panel (hero-tablet-panel) is the single documented exception. Why: edges stay aligned site-wide from one definition.
- Every result photograph is resized to at most 1600px on the long edge with EXIF stripped before publication: by hand before adding it to the project until an upload system exists, then automatically in that system (client canvas resizing covers both). Why: originals are more identifiable than the consented web result, heavy on cellular, and EXIF can carry GPS and capture time.
- Below 1024px the header bar is fixed from first paint inside a constant 80px in-flow reservation and turns compact (logo, Book now, Menu) once scrolled, via useCompactHeader in Header.tsx; desktop stays sticky. Why: booking is always reachable on a phone with zero layout shift.
- Manrope is self-hosted as one Latin variable file (public/fonts), preloaded in __root, with font-display swap and per-weight metric-matched "Manrope Fallback" faces in src/styles.css; never load fonts from a third party. Why: no extra connection before first paint, and the swap must not shift layout.
- Gold and olive text on light grounds uses the champagne-light and olive-light tokens, and small labels on greige use ink-soft; the brand champagne and olive stay for dark grounds only, and text never uses opacity for color. Why: every text pair must pass WCAG AA (4.5:1) at first paint, not only after an animation.
