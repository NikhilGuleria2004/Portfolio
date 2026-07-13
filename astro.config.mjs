import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// Output is "server" because the HTMX-powered project filter and contact
// form live at src/pages/api/*.ts and need to run per-request. The
// homepage itself sets `export const prerender = true`, so it's still
// built as a static file — only the two API routes are dynamic.
export default defineConfig({
  output: "server",
  adapter: cloudflare(),

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});