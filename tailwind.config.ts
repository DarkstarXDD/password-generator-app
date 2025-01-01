import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*"],
  theme: {
    screens: {
      md: "58rem",
    },

    fontFamily: {
      body: ["Roboto", "sans-serif"],
    },

    fontSize: {
      "heading-desktop": [
        "3.5rem",
        { lineHeight: "1", letterSpacing: "0px", fontWeight: "700" },
      ],

      "heading-mobile": [
        "2.5rem",
        { lineHeight: "1", letterSpacing: "0px", fontWeight: "700" },
      ],

      body: [
        "1rem",
        { lineHeight: "1.5", letterSpacing: "0px", fontWeight: "400" },
      ],

      "body-bold": [
        "1rem",
        { lineHeight: "1.5", letterSpacing: "0px", fontWeight: "700" },
      ],

      "body-small": [
        "0.75rem",
        { lineHeight: "1.5", letterSpacing: "0px", fontWeight: "700" },
      ],
    },

    colors: {
      transparent: "transparent",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      green: "hsl(159, 69%, 38%)",

      red: {
        DEFAULT: "hsl(14, 86%, 42%)",
        hover: "hsl(14, 86%, 31%)",
      },

      rose: {
        50: "hsl(20, 50%, 98%)",
        100: "hsl(13, 31%, 94%)",
        300: "hsl(14, 25%, 72%)",
        400: "hsl(7, 20%, 60%)",
        500: "hsl(12, 20%, 44%)",
        900: "hsl(14, 65%, 9%)",
      },
    },

    extend: {
      gridTemplateColumns: {
        "3fr-2fr": "3fr 2fr",
        list: "auto 1fr",
      },
    },
  },
  plugins: [],

  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config
