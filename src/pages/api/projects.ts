import type { APIRoute } from "astro";
import { renderProjects } from "../../lib/renderProjects";

// Dynamic route — must not be prerendered, since it responds per-request
// to the `tag` query param sent by the HTMX filter buttons.
export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const tag = url.searchParams.get("tag") ?? "all";
  const html = renderProjects(tag);

  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
};
