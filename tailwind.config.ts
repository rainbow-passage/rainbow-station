import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx,jsx,js}',
  ],
  theme: {
    fontSize: {
      xvs: "0.25rem",
      xxxs: "0.4rem",
      xxs: "0.6rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
    },

    extend: {
      colors: {
        primary: "#0B000B",
        secondary: "#F5EAB8",
        backg: "#090513",
        shad: "#1E1930",
      },
      backgroundImage: {
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        gaegu: ["Gaegu", "cursive"],
      },
      dropShadow: {
        "3xl": "5px 15px 15px rgba(0, 0, 0, 1)",
      },
      backdropBlur: {
        xs: "2px",
        xxs: "1px",
      },
      maxWidth: {
        xxs: "10rem",
      },
      screens: {
        xxs: "290px",
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
      height: {
        4320: "4320px",
        2880: "2880px",
        2160: "2160px",
        1440: "1440px",
        1080: "1080px",
        720: "720px",
        540: "540px",
        480: "480px",
        400: "400px",
        360: "360px",
        300: "300px",
        298: "298px",
        240: "240px",
        120: "120px",
        12.5: "50px",
      },
      width: {
        7680: "7680px",
        5760: "5760px",
        4320: "4320px",
        3840: "3840px",
        2880: "2880px",
        2560: "2560px",
        2160: "2160px",
        1920: "1920px",
        1440: "1440px",
        1080: "1080px",
        720: "720px",
        540: "540px",
        480: "480px",
        400: "400px",
        398: "398px",
        96: "384px",
        80: "320px",
        72: "288px",
        64.5: "258px",
        64: "256px",
      },

    },

    plugins: [],
  },
} satisfies Config

