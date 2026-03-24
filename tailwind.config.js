/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a0a0a",
          accent: "#c8956c",
          "accent-dark": "#a67850",
          "accent-light": "#d4a882",
          light: "#f5f5f0",
          text: "#111111",
        },
      },
      maxWidth: {
        container: "1180px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        btn: "16px",
      },
    },
  },
  plugins: [],
};
