import { projects, type Project } from "../data/config";

function escape(str: string) {
  return str.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c]!
  );
}

function card(p: Project) {
  return `
  <a href="${escape(p.href)}" target="_blank" rel="noreferrer"
     class="group flex flex-col justify-between border border-rule rounded-sm p-3.5 hover:border-blue transition-colors bg-paper-dim/40 h-full">
    <div>
      <div class="flex items-baseline justify-between gap-2">
        <h3 class="font-mono text-sm font-medium text-ink group-hover:text-blue transition-colors">${escape(p.name)}</h3>
        <span class="font-mono text-xs text-muted">↗</span>
      </div>
      <p class="mt-1 text-sm leading-snug text-muted">${escape(p.description)}</p>
    </div>
    <div class="mt-2.5 flex flex-wrap gap-1.5">
      ${p.tags.map((t) => `<span class="tag">${escape(t)}</span>`).join("")}
    </div>
  </a>`;
}

/**
 * Renders the project grid as a raw HTML string for a given tag filter.
 * Called both at build time (initial page render, tag="all") and at
 * request time from src/pages/api/projects.ts (HTMX filter clicks).
 */
export function renderProjects(tag: string) {
  const filtered = tag === "all" ? projects : projects.filter((p) => p.tags.includes(tag));

  if (filtered.length === 0) {
    return `<p class="col-span-full font-mono text-sm text-muted py-6">No projects tagged "${escape(tag)}" yet.</p>`;
  }

  return filtered.map(card).join("\n");
}
