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
- Service URLs are /<category>/<slug> taken from Service.slug via one dynamic route; redirects.ts entries are 301s in that route; /book/* sends to Vagaro. Why: routes stay generated from data.
