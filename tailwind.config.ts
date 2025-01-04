import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*"],
  theme: {
    screens: {
      md: "58rem",
    },

    fontFamily: {
      body: ["JetBrains-Mono", "monospace"],
    },

    fontSize: {
      "preset-1": [
        "2rem",
        { lineHeight: "1", letterSpacing: "0px", fontWeight: "700" },
      ],

      "preset-2": [
        "1.5rem",
        { lineHeight: "1", letterSpacing: "0px", fontWeight: "700" },
      ],

      "preset-3": [
        "1.125rem",
        { lineHeight: "1", letterSpacing: "0px", fontWeight: "700" },
      ],

      "preset-4": [
        "1rem",
        { lineHeight: "1", letterSpacing: "0px", fontWeight: "700" },
      ],
    },

    colors: {
      transparent: "transparent",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",

      "almost-black": "hsl(248, 18%, 9%)",
      "very-dark-grey": "hsl(248, 15%, 11%)",
      "dark-grey": "hsl(247, 11%, 15%)",
      grey: "hsl(251, 9%, 53%)",
      "almost-white": "hsl(252, 11%, 91%)",
      "neon-green": "hsl(127, 100%, 82%)",
      "green-hover": "hsl(127, 58%, 74%)",
      yellow: "hsl(42, 91%, 68%)",
      orange: "hsl(13, 95%, 66%)",
      red: "hsl(0, 91%, 63%)",
    },

    extend: {},
  },
  plugins: [],

  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config
