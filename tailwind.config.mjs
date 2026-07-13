/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#EDE9DC",
        "paper-dim": "#E3DECC",
        ink: "#1C1B18",
        muted: "#6B6558",
        rule: "#D3CCB8",
        blue: "#24438C",
        red: "#B23A2E",
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
