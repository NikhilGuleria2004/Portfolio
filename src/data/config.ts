// ---------------------------------------------------------------------------
// SITE CONTENT
// This is the only file most people need to edit to make this template
// their own. Every component below reads from here.
// ---------------------------------------------------------------------------

export const site = {
  name: "Nikhil Guleria",
  role: "AI & Full-Stack Engineer",
  location: "India",
  tagline:
    "I build systems that reason, talk to APIs, and occasionally to people.",
  bio: "What started as curiosity about computers became a habit of building. I enjoy taking ideas from a blank editor to a working product, whether that's designing interfaces, writing backend services, or figuring out the architecture that connects everything together.",
  email: "nikhilguleria20004@gmail.com",
  resumeUrl: "/NikhilGuleriaResume.pdf",
  social: [
    { label: "GitHub", href: "https://github.com/NikhilGuleria2004" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nikhil-guleria-2b1b4b288/" },
    { label: "leetcode", href: "https://leetcode.com/u/Nikhil_Guleria/" },
  ],
};

export type Experience = {
  period: string;
  org: string;
  role: string;
  description: string;
};

export const experience: Experience[] = [
  {
    period: "April 2026 — now",
    org: "Duke Infosys",
    role: "Software Engineer",
    description:
      "Leading complete platform rebuild of hiring system serving 2000+ jobseekers and employers, migrating from a vanilla html&css monolith to a decoupled NodeJS backend and React frontend.",
  },
  {
    period: "2024 — now",
    org: "Freelance Work",
    role: "Software Developer",
    description:
      "Developed and deployed multiple full-stack web applications, including a personal financial history analyzer and an AI-powered webpage restyle tool, utilizing technologies such as Next.js, React, TypeScript, Supabase, and Tailwind CSS",
  },
  {
    period: "2023 — 2024",
    org: "Open source",
    role: "Contributor",
    description:
      "Built and maintained a lightweight TypeScript framework for composing LLM agents out of small, testable tools rather than one large prompt.",
  },
];

export type EducationEntry = {
  period: string;
  school: string;
  detail: string;
};

export const education: EducationEntry[] = [
  {
    period: "Nov 2022 — June 2026",
    school: "Chitkara University",
    detail:
      "B.E, Computer Science and Engineering. Contributed to various tech clubs and volunteered as an NSS service member",
  },
];

export type Project = {
  name: string;
  description: string;
  href: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "SaaS CRM",
    description:
      "A Multitenant SaaS CRM",
    href: "https://github.com/yourhandle/saasrm",
    tags: ["backend", "typescript"],
    /* features:
      
    */
  },
  {
    name: "MediaDB",
    description:
      "A Media Intelligence Platform, integrating RAG systems, for people that want all their pop culture info stored a searchable in a single place",
    href: "https://github.com/yourhandle/MediaDB",
    tags: ["web", "ai"],
    /* features:
      Users could ask questions like:

"Find sci-fi films with hopeful endings similar to Arrival."
"Explain why people compare Dark and Primer."
"Summarize everything I need to remember before watching Dune: Messiah."
"Show the creative influences behind The Matrix."
"Find books with protagonists similar to Rust Cohle."
"Separate fan theories from confirmed lore for One Piece."

What would make it technically impressive is the retrieval architecture, not just the interface. You could combine:

Hybrid search (BM25 + vector search) for both exact names and semantic queries.
Knowledge graph retrieval for relationships between creators, characters, franchises, and themes.
Source ranking so official sources (studios, publishers, author interviews) are prioritized over fan discussions, with Reddit or forums used only when appropriate.
Citations showing exactly which review, interview, script, or wiki page supported each claim.
Agentic retrieval that decides whether a query is about chronology, production history, themes, recommendations, or lore, and searches different indexes accordingly.

That would feel much closer to a production AI application than another "chat with movie data" demo, and it showcases advanced RAG techniques while solving problems that media enthusiasts actually encounter.
    */
  },
  {
    name: "Nlux",
    description:
      "An Ai Powered CLI tool that understands your linux enviornment instead of just generating commands",
    href: "https://github.com/yourhandle/facewatch",
    tags: ["ai", "ml"],
    /*features:
      $ copilot "why is docker not starting"

✓ Checked systemctl status
✓ Found journal logs
✓ Found missing docker.socket

Diagnosis:
Docker socket service failed because...

Features:

Reads logs automatically
Detects the distro
Checks services
Suggests fixes
Explains commands before running them
Optional interactive mode

Skills:

Rust/Go/Python
AI integration
System inspection
TUI
    */
  },
  {
    name: "API GateWay",
    description:
      "An API GateWay and JSONBIN Equivalent API Maker for ease of use",
    href: "https://github.com/yourhandle/ApiBin",
    tags: ["web", "apis"],
  },
];

export const projectTags = ["all", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export const skills = [
  "TypeScript",
  "Python",
  "Golang",
  "Java",
  "C/C++",
  "React",
  "Astro",
  "HTMX",
  "TailwindCSS",
  "Next",
  "Node.js",
  "Express",
  "FastAPI",
  "Hono",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Linux",
  "Bash",
  "Zsh",
  "PyTorch",
  "LangGraph",
  "LangChain",
  "AWS",
  "Vercel",
  "Nginx",
  "Docker",
  "Kubernetes",
];
