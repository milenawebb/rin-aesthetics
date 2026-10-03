# Results gallery

## Build
- Add the supplied `gallery.ts` as the single source for all before and after pairs.
- Create one shared pair component that calls `isPublishable()` before rendering any real image. Failed checks render two labeled 4:5 greige placeholders.
- Add a plain side-by-side pair layout for the Results, service, and concern pages, with treatment links and session and interval details.
- Build `/results` with the required notice, concern filters derived from each item's service tags, a responsive pair grid, and an accessible larger view when a pair is selected.
- Replace service and concern result matching with gallery helpers derived from service IDs and concern tags. Placeholders remain visible.
- Keep the existing home desktop effect: the Before image is shown first, then the After image wipes in horizontally from left to right on hover or keyboard focus, with the champagne divider moving across. Use the six `featured()` records without rebuilding that interaction.
- On touch devices only, show both home images side by side with no tap-to-reveal interaction. Placeholder pairs also show both labeled halves.

## Technical details
- Add a derived concern-gallery helper that looks up each gallery item's service and compares its service tags with the concern tags.
- Ensure every real image branch is guarded inside the rendering component by `isPublishable()`.
- Keep the existing home rail drag and progress behavior.
- Remove old `results.ts` usage from all page placements once the gallery source is connected.
- Update the Results page metadata with `og:type` and `twitter:card`.

## Verification
- Check desktop and mobile layouts for `/`, `/results`, one service page, and one concern page.
- Confirm the Results filters include only concerns with at least one gallery pair.
- Confirm touch home pairs show both halves, while desktop home pairs retain the horizontal hover reveal.
- Search all gallery image rendering paths to confirm none bypass `isPublishable()`.
