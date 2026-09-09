# Deployment Guide — Veer Laser Fab

Static site (Vite + React). Build with `npm run build`; deploy the `dist/` folder to any static host.

## Canonical domain

All metadata, canonicals, sitemap and structured data use `https://veerlaserfab.com/`.
Configure the host to 301-redirect `http://` and `www.` variants to `https://veerlaserfab.com/`.

## Netlify

`public/_headers` is copied into `dist/` and applied automatically — no extra setup.

## Other hosts (nginx / Caddy / Cloudflare Pages / Apache)

Reproduce the same response headers as in `public/_headers`:

| Path | Header |
| --- | --- |
| All routes | `X-Content-Type-Options: nosniff` |
| All routes | `Referrer-Policy: strict-origin-when-cross-origin` |
| All routes | `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()` |
| All routes | `Strict-Transport-Security: max-age=31536000; includeSubDomains` |
| All routes | `X-Frame-Options: SAMEORIGIN` |
| `/assets/*` | `Cache-Control: public, max-age=31536000, immutable` |
| `/fonts/*` | `Cache-Control: public, max-age=31536000, immutable` |
| `/favicon/*` | `Cache-Control: public, max-age=604800` |
| `/`, `/index.html`, `/404.html` | `Cache-Control: public, max-age=0, must-revalidate` |

SPA fallback: every unknown path should serve `/404.html` with a **404 status**
(Netlify does this automatically; on nginx use `error_page 404 /404.html;`).

## Compression

Enable Brotli (preferred) and gzip for HTML, CSS, JS, SVG and WOFF2 at the host/CDN edge.

## Pre-deployment checklist

- `npm run typecheck` passes
- `npm run build` passes
- GA4/GTM tracking ID added to `index.html` when available
