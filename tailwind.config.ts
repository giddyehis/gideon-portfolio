import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#07090d", panel: "#0d1117", line: "#1f2733", mint: "#34e0a1", volt: "#5b8cff" },
    fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"], mono: ["var(--font-mono)", "ui-monospace", "monospace"] },
    keyframes: { marquee: { to: { transform: "translateX(-50%)" } }, blink: { "50%": { opacity: "0" } } },
    animation: { marquee: "marquee 30s linear infinite", blink: "blink 1s step-end infinite" },
  } },
  plugins: [],
} satisfies Config;
