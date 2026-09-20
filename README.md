# Veer Laser Fab — Website (simple guide for non-programmers)

This is the company website. One long page with sections: Facilities, Products, Services, Case Studies, Industries, Clients, Certifications, Why Us, Gallery, About, Contact.

## Where things live

- Pages/sections: `src/components/` (for example `Hero.tsx`, `Products.tsx`, `Contact.tsx`). `src/App.tsx` lists them in order.
- All website words + image paths: `src/data/content.ts` (edit text here, not in many files).
- Website appearance: `src/index.css` (colors, buttons, layout).
- Photos/videos: `public/images/`, `public/products/`, `public/process/`, `public/logos/`, `public/videos/`, `public/certificates/`. Main logo: `public/logo.jpg`.
- Website title/Google info: `index.html`. Contact map/form settings: `src/components/Contact.tsx`.
- Build/hosting settings: `package.json`, `vite.config.js`, `tsconfig.json`, `public/_headers`, `DEPLOYMENT.md`.

## How to run / build

1. Install Node.js. 2. Open this folder in a terminal. 3. Run `npm install`. 4. Run `npm run dev` to preview. 5. Run `npm run typecheck` to check for errors. 6. Run `npm run build` to make the final `dist/` folder for hosting.

## NEVER delete these

`index.html`, `src/`, `public/` (except `TO_BE_DELETED/` after review), `package.json`, `package-lock.json`, `vite.config.js`, `tsconfig.json`, `public/robots.txt`, `public/sitemap.xml`, `public/_headers`, `public/404.html`, `public/favicon/`, `public/fonts/`, `public/logo.jpg`, `DEPLOYMENT.md`.

## TO_BE_DELETED/

Quarantine folder for possibly-unneeded files. Website does NOT use it. Check with someone technical before permanently deleting. After review, keep it out of uploads.

## AI DEVELOPMENT RULES

Before editing: 1. Read the existing file/component first. 2. Search the project for an existing component, style, constant, or image before creating anything new. 3. Reuse `SectionHeading`, icons in `Icons.tsx`, animation helpers in `lib/motion.tsx`, and text in `data/content.ts`. 4. Never create a duplicate component when an existing one can be edited. 5. Never add duplicate CSS — reuse classes in `index.css`. 6. Never add a second version of a feature — edit the first one. 7. Never leave old code behind after a fix — remove it in the same edit. 8. Never create `new/final/final2/backup/temp/old/test` files or duplicate images. 9. Keep the same folder structure and naming style (for example `HeroSection`-style names, `useSomething` hooks, `hero-facility.webp` images). 10. Make the smallest change that fixes the request. 11. Do not touch unrelated files. 12. Do not redesign working sections unless asked. 13. After editing, remove unused imports, run `npm run typecheck` and `npm run build`, and confirm no images/links broke.

