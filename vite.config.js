import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Inlines the built CSS into index.html — removes the render-blocking
 * stylesheet request. Zero visual difference, first paint needs one
 * request fewer.
 */
function inlineCss() {
  return {
    name: "inline-css",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (!ctx.bundle) return html;
        return html.replace(
          /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
          (match, href) => {
            const asset = ctx.bundle && ctx.bundle[href.slice(1)];
            return asset && asset.type === "asset" ? `<style>\n${asset.source}\n</style>` : match;
          }
        );
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCss()],
  build: {
    rollupOptions: {
      output: {
        /* Stable vendor chunks → long-lived browser caching across deploys */
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-icons": ["lucide-react"],
        },
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    allowedHosts: true,
    hmr: {
      port: 3000,
    },
    watch: {
      // Ignore static asset folders — avoids EBUSY watcher crashes on Windows
      // when files are locked by cloud sync (OneDrive) or other apps.
      ignored: ["**/ASSETS/**"],
    },
  },
});
