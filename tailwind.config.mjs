/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "bg-deep": "#0D0B1A",
        "bg-dark": "#1E1C6E",
        "bg-mid": "#2A2E4A",
        "accent-pink": "#D63AAF",
        "accent-purple": "#6B22CC",
        "accent-cyan": "#00E5FF",
        "accent-rose": "#8B1A6B",
        lavender: "#F2DDFF",
        "steel-blue": "#8B9FD4",
      },
      fontFamily: {
        pixel: ["'Press Start 2P'", "monospace"],
        vt: ["'VT323'", "monospace"],
      },
      typography: (theme) => ({
        invert: {
          css: {
            "--tw-prose-body": theme("colors.lavender"),
            "--tw-prose-headings": theme("colors.lavender"),
            "--tw-prose-links": theme("colors.accent-cyan"),
            "--tw-prose-bold": theme("colors.lavender"),
            "--tw-prose-code": theme("colors.accent-cyan"),
            "--tw-prose-pre-bg": theme("colors.bg-mid"),
            fontFamily: "'VT323', monospace",
            fontSize: "1.2rem",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
