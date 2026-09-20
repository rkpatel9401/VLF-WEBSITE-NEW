# Codebase Changelog — Veer Laser Fab

Date: 2026-09-20. Rule: same website outside, cleaner inside. No visual redesign.

## Moves to TO_BE_DELETED/ (17 files, recoverable)

- `public/products/EVAPORATOR.jpg` → `TO_BE_DELETED/duplicate-assets/products/` (identical duplicate of `evaporator-unit.jpg`).
- `public/products/ROTORY DRYER.jpg` → `TO_BE_DELETED/duplicate-assets/products/` (identical duplicate of `rotary-dryer.jpg`).
- `public/images/facility-unit1.png`, `facility-unit2.png`, `gallery-tube.webp`, `hero-laser.webp`, `unit1.webp` → `TO_BE_DELETED/unused-assets/images/` (no references).
- `public/MOBILE VIEW 2.jpg` → `TO_BE_DELETED/unused-assets/root/` (unreferenced mockup).
- 8 `public/certificates/*.svg` placeholders → `TO_BE_DELETED/obsolete-cert-placeholders/certificates/`.
- `metadata.json` → `TO_BE_DELETED/old-config/`.

## Code cleanup (why: dead AI-generated code, zero visual change)

- `src/components/Products.tsx`: deleted dead `ProductArt()` line-art (~218 lines, never rendered). Cards show photos. Build passes.
- `src/data/content.ts`: deleted dead `VMC_CARDS` and `FOOTER_TAGLINES` exports (never imported).
- `src/components/Footer.tsx`: footer chips now use an inline list (same 4 labels, same style); removed dead import.
- `src/components/Icons.tsx`: deleted 6 never-imported icons; kept `LogoMark/Wordmark` with a future-use comment.

No files renamed, no folders restructured (current layout is already professional), no dependencies changed, no SEO/config changes.

## Validation

- `npm run typecheck` (tsc --noEmit): PASS.
- `npm run build` (vite build): PASS.
