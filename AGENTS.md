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
- Service URLs are /<category>/<slug> taken from Service.slug via one dynamic route; redirects.ts entries are 301s in that route; /book/* sends to Vagaro. Why: routes stay generated from data.

- Gallery records are the single source for results placements; service and concern matches derive from service IDs, and images render only through isDisplayable(), which admits real photos solely via isPublishable() and otherwise only patient-free stand-ins. Why: treatment tags stay synchronized and patient consent is enforced at render time.
- Contact submissions are written by a server function before email is attempted, and delivery status is stored on each record. Why: a provider failure must never lose a visitor message.
- Gutter-labeled sections use the shared structural 96px label column and 32px gap at 1280px and wider. Why: label spacing must stay identical across pages without positional offsets.
- Keep AskRin dormant and unimported by the root layout, retaining its component and CSS without canned assistant replies. Why: Phase 2 can reuse the interface without shipping an inactive assistant or reserving floating-button clearance in Phase 1.

- Legacy URLs are answered by one server request middleware in src/start.ts: 410 for retiredUrls, then 301 from wordpressRedirects, then 301 from redirects.ts, matching with or without a trailing slash. Why: real status codes before any page renders, with data files as the only source.

- Header dropdowns and mobile accordions derive from concerns.ts and services.ts via src/components/site/navMenus.ts; booking actions are a separate array and never appear. Why: adding a concern or service updates the nav with no hand list.
