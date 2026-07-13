/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
  paper: "#2B2517",
  "paper-dim": "#332C1D",

  ink: "#E5DCC8",

  muted: "#B4A98F",

  rule: "#5B5242",

  blue: "#7DA8FF",

  red: "#D86D4A",
},
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "42rem",
      },
    },
  },
  plugins: [],
};
