// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom theme colors that work with your CSS variables
        surface: "var(--surface-80)",
        border: "var(--border)",
        muted: {
          DEFAULT: "var(--muted)",
          bg: "var(--muted-bg)",
        },
        accent: "var(--accent)",
        text: "var(--text)",
        input: "var(--input)",
        bg: "var(--bg)",
        sidebar: "var(--sidebar-bg)",
        main: "var(--main-bg)",
      },
      backgroundColor: {
        surface: "var(--surface-80)",
      },
      borderColor: {
        DEFAULT: "var(--border)",
      },
      textColor: {
        DEFAULT: "var(--text)",
        muted: "var(--muted)",
      },
    },
  },
  plugins: [],
}