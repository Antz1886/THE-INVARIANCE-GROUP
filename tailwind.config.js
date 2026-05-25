/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          blue: "#0088ff",
          purple: "#9d4edd",
        },
        brand: {
          black: "#030303",
          dark: "#0a0a0c",
          slate: {
            dark: "#0d111c",
            light: "#1e293b",
          },
          text: {
            primary: "#f8fafc",
            secondary: "#94a3b8",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
