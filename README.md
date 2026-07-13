# log — a reusable Astro + Tailwind + HTMX portfolio

A minimal, resume-styled portfolio template: intro → experience → education
→ projects → skills → contact, laid out like a code editor gutter (every
section is a numbered "line"). Built as a starting point inspired by
minimal, monospace developer-portfolio layouts — edit the palette and copy
to make it yours.

## Stack

- **Astro** — pages/components, static-by-default with two dynamic API routes
- **Tailwind CSS** — all styling, tokens defined in `tailwind.config.mjs`
- **HTMX** — powers two real interactions without any client-side framework:
  1. **Project tag filter** — clicking a tag `hx-get`s `/api/projects?tag=...`
     and swaps the project grid, server-rendered by Astro.
  2. **Contact form** — `hx-post`s `/api/contact`, swaps in a confirmation
     partial, no page reload, no JS form library.

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321
```

```bash
npm run build      # outputs a Node server to dist/
node ./dist/server/entry.mjs
```

## Making it yours

Everything content-related lives in **`src/data/config.ts`** — name, role,
bio, resume link, socials, experience, education, projects, and skills.
Edit that one file and the whole site updates; you shouldn't need to touch
markup for a basic re-skin.

To restyle: colors, fonts and spacing tokens are in `tailwind.config.mjs`
(`paper`, `ink`, `muted`, `blue`, `red`, `rule`) and `src/styles/global.css`
(fonts + the numbered-gutter signature element).

```
src/
  data/config.ts        ← edit this for your content
  components/            Hero, Experience, Education, Projects, Skills,
                          Contact, Footer, SectionHeading
  lib/renderProjects.ts  shared HTML renderer used by the page AND the
                          HTMX filter endpoint (single source of truth)
  pages/
    index.astro           prerendered at build time
    api/projects.ts        HTMX target — GET /api/projects?tag=...
    api/contact.ts          HTMX target — POST /api/contact
```

## Wiring up the contact form for real

`src/pages/api/contact.ts` currently just `console.log`s submissions.
Swap the `// TODO` block for Resend, Postmark, a Slack webhook, or a
database insert — the HTMX side needs no changes.

## Deploying

This template uses `output: "server"` with `@astrojs/node` because the two
API routes need to run per-request. The homepage itself is still built as
a static file (`export const prerender = true` in `index.astro`). To
deploy on Vercel/Netlify/Cloudflare instead of a Node server, swap the
adapter in `astro.config.mjs` for the platform's own (e.g.
`@astrojs/vercel`) — the rest of the app is unaffected.

## Note on the source of inspiration

This template was built by extracting the visible text/structure from a
JS-rendered single-page portfolio (colors and exact spacing weren't
retrievable from a static fetch), then designing an original visual system
around that structure — it isn't a pixel clone.
