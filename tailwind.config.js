/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0C0E13",
          900: "#12141B",
          800: "#1A1D26",
          700: "#242832",
          600: "#343A47",
          400: "#8A8F9C",
          200: "#C9CCD3",
        },
        paper: {
          50: "#F7F5F0",
          100: "#F1EEE7",
          200: "#E7E2D6",
          300: "#D8D2C2",
        },
        brass: {
          300: "#E8CE9A",
          400: "#D9B876",
          500: "#C99F53",
          600: "#A87F3E",
        },
        signal: {
          400: "#7FA8A0",
          500: "#5B8C87",
          600: "#436864",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
