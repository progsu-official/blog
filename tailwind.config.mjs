/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'SF Mono'", "Menlo", "Monaco", "'Cascadia Code'", "'Fira Code'", "monospace"],
      },
      colors: {
        space: {
          950: "#02020a",
          900: "#050516",
          800: "#06060f",
        },
      },
      typography: () => ({
        DEFAULT: {
          css: {
            fontFamily: "'SF Mono', Menlo, Monaco, monospace",
            color: "rgba(255,255,255,0.85)",
            maxWidth: "none",
            lineHeight: "1.75",
            "h1, h2, h3, h4, h5, h6": {
              fontFamily: "'SF Mono', Menlo, Monaco, monospace",
              color: "rgba(255,255,255,0.92)",
              fontWeight: "600",
              letterSpacing: "-.01em",
            },
            a: {
              color: "#818cf8",
              textDecoration: "none",
              "&:hover": { color: "#a5b4fc" },
            },
            code: {
              fontFamily: "'SF Mono', Menlo, Monaco, monospace",
              color: "rgba(216,180,254,0.9)",
              background: "rgba(76,29,149,0.2)",
              border: "1px solid rgba(168,85,247,0.2)",
              padding: "0.1em 0.4em",
              borderRadius: "3px",
              fontSize: "0.88em",
            },
            "code::before": { content: '""' },
            "code::after":  { content: '""' },
            pre: {
              fontFamily: "'SF Mono', Menlo, Monaco, monospace",
              background: "rgba(6,6,15,0.8)",
              border: "1px solid rgba(168,85,247,0.18)",
              borderRadius: "6px",
              color: "rgba(255,255,255,0.85)",
            },
            "pre code": {
              background: "transparent",
              border: "none",
              padding: "0",
              color: "inherit",
            },
            strong: { color: "rgba(255,255,255,0.95)" },
            blockquote: {
              borderLeftColor: "rgba(168,85,247,0.4)",
              color: "rgba(255,255,255,0.5)",
              fontStyle: "normal",
            },
            hr: { borderColor: "rgba(168,85,247,0.12)" },
            "ul > li::marker": { color: "rgba(168,85,247,0.5)" },
            "ol > li::marker": { color: "rgba(168,85,247,0.5)" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
