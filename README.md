# RIN Aesthetic Practice

Website for **RIN Aesthetic Practice**, a medical aesthetics studio in Charlottesville, Virginia.

Live at **[rinaestheticsva.com](https://rinaestheticsva.com)**

## The problem

Most med spa sites are organized around the service menu: a list of treatment names, each with a page. That works for someone who already knows they want a specific treatment. It fails everyone else, which is most first-time visitors. People do not arrive thinking "I need a 1940nm fractional treatment." They arrive thinking "I don't like what is happening around my jawline."

## The approach

The site is organized around concerns rather than services. A visitor picks what they want addressed, sees the options that apply, and books from there. The service pages still exist and go deep, but they are the second step rather than the entry point.

## Notable pieces

**Concern-first information architecture.** Concern tiles on the home page route into concern pages, which present the relevant treatments with enough depth to make a decision. The service menu is still reachable directly for people who know what they want.

**Responsive hero.** The hero photograph is a landscape shot of the practice signage that clipped badly at every portrait crop. Rather than fight it with object-position, the site serves three separately cropped source files by breakpoint: 4:3 on mobile, 3:2 on tablet, full frame on desktop.

**Ask RIN.** A floating AI assistant scoped to questions about the practice and its treatments. It replaced the back-to-top control rather than sitting alongside it, so the bottom-right corner holds one thing instead of two competing ones.

**Before and after results.** Always presented as a horizontal scrolling row, never a tile grid. A grid invites comparison between unrelated patients; a row keeps each pair as its own result.

**Typography.** Manrope throughout, at weight 200 for large headings. Three Didone display faces were tried first and all failed at card-title sizes, where the thin strokes disappeared.

## Stack

- React + TypeScript
- Tailwind CSS
- Vite
- Vagaro for booking and intake forms
- Resend for transactional email
- Deployed as a Cloudflare Worker, with a production-branch publish gate

## Development

```bash
git clone https://github.com/milenawebb/rin-aesthetics.git
cd rin-aesthetics
npm install
npm run dev
```

## Notes

Built with AI-native tooling, primarily Lovable, with the information architecture, content structure and product decisions made by hand.

Photography and brand assets belong to RIN Aesthetic Practice and are included here only as part of the site build.

---

Built by [Milena Webb](https://milenawebb.com) / [fifthexit](https://fifthexit.com), a DBA of Webb Consulting LLC.
