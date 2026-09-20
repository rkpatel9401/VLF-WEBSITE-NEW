# Codebase Audit Report — Veer Laser Fab (VLF-WEBSITE-NEW)

Date: 2026-09-20. Safety rule: nothing permanently deleted; candidates moved to `TO_BE_DELETED/`.

## 1. Project overview

- React 18 + TypeScript single-page site, Vite 6 build, Tailwind v4.
- Package manager: npm (`package-lock.json`; `bun.lock` also present but unused).
- Entry: `index.html` → `src/main.tsx` → `src/App.tsx`.
- No routing; one scrolling page with anchor sections.
- Content centralized in `src/data/content.ts`; motion helpers in `src/lib/motion.tsx`.

## 3. Files moved to TO_BE_DELETED (17 files, all HIGH confidence)

- `public/products/EVAPORATOR.jpg` → `TO_BE_DELETED/duplicate-assets/products/EVAPORATOR.jpg` — byte-identical to kept `evaporator-unit.jpg` (SHA256 68D3D0…); uppercase name never referenced.
- `public/products/ROTORY DRYER.jpg` → `TO_BE_DELETED/duplicate-assets/products/ROTORY DRYER.jpg` — byte-identical to kept `rotary-dryer.jpg` (SHA256 1552A9…); also misspelled (`ROTORY`) with space in name.
- `public/images/facility-unit1.png` → `TO_BE_DELETED/unused-assets/images/` — unused; Facility 1 uses the JPG.
- `public/images/facility-unit2.png` → `TO_BE_DELETED/unused-assets/images/` — unused; Facility 2 uses the JPG.
- `public/images/gallery-tube.webp` → `TO_BE_DELETED/unused-assets/images/` — unused; gallery uses `/images/gallery/*.jpg`.
- `public/images/hero-laser.webp` → `TO_BE_DELETED/unused-assets/images/` — unused; hero uses `hero-background.webp` + `hero-mobile.jpg`.
- `public/images/unit1.webp` → `TO_BE_DELETED/unused-assets/images/` — unused alternate facility render.
- `public/MOBILE VIEW 2.jpg` → `TO_BE_DELETED/unused-assets/root/` — unreferenced design mockup with space in filename.
- 8 placeholder SVGs in `public/certificates/*.svg` → `TO_BE_DELETED/obsolete-cert-placeholders/certificates/` — each says `PLACEHOLDER - REPLACE WITH ORIGINAL CERTIFICATE SCAN`; carousel renders drawn faces, not these files.
- `metadata.json` → `TO_BE_DELETED/old-config/metadata.json` — leftover AI-Studio config; no code reads it.

## 4. Files NOT moved (uncertain — kept on purpose)

- `public/certificates/*.jpg` (8 real scans) — not shown in current carousel UI but they are real legal/trust assets. Keep.
- Unreferenced but real photos (`about-floor.webp`, `gallery-bend.webp`, `gallery-decorative.webp`, `gallery-peb.webp`, `unit2.webp`, `suzlon-tower.webp`, `milacron-base.webp`) — keep for future use.

## 5. Duplicates + large files

- Duplicates confirmed by SHA256 (see section 3). JPG vs PNG facility pairs: JPGs are used, PNGs quarantined.
- Large files (report only, not deleted): `videos/suzlon.mp4` ~21 MB; `process/*.png` ~370–655 KB each; `certificates/*.jpg` ~330–640 KB each; some hero/gallery photos ~0.5–1.2 MB. Built JS: vendor-react ~135 KB, main ~79 KB (normal).

## 6. Architecture + code quality

- Single-page anchor site; `content.ts` (~850 lines) is the intentional source of truth; contact form posts to formsubmit.co (third-party dependency — be aware).
- Fixed safely (visuals unchanged): removed dead `ProductArt()` (~218 lines) from `Products.tsx`; removed dead `VMC_CARDS` + `FOOTER_TAGLINES` exports (footer chips inlined); removed 6 dead icon exports from `Icons.tsx`; kept `LogoMark/Wordmark` with comment for future use.
- CSS uses centralized Tailwind tokens; no conflicting duplicates found. No renaming/restructuring needed — current structure is already clean.

## 7. Recommendations

1. Review `TO_BE_DELETED/` then permanently delete/restore. 2. Decide whether to show real certificate JPGs in the carousel. 3. Only optimize media if speed becomes an issue. 4. After review, add `TO_BE_DELETED/` to `.gitignore`. 5. Keep future edits in `content.ts`/existing components; never create `new/final/backup` files.

- All 73 `public/images/gallery/*.jpg` — referenced by `GALLERY` in `content.ts`; kept.
- `dist/`, `node_modules/`, `bun.lock`, `LogoMark/Wordmark` icons — kept (generated / future use).

- Map: `index.html → main.tsx → App.tsx → Header/Hero/Facilities/Products/Footer + lazy(Services/CaseStudies/Industries/Clients/Certifications/WhyUs/Gallery/About/Contact) → content.ts + public/* + lucide-react`.

## 2. Files kept

Kept: `index.html`, all 20 components in `src/components/`, `src/data/content.ts`, `src/lib/motion.tsx`, `src/index.css`, `public/404.html`, `robots.txt`, `sitemap.xml`, `_headers`, all `favicon/*`, all `fonts/*`, `public/logo.jpg`, used images/logos/process/products/video/cert JPGs, `package.json`, `package-lock.json`, `tsconfig.json`, `vite.config.js`, `.gitignore`, `DEPLOYMENT.md`. `dist/` and `node_modules/` are generated — do not edit.
