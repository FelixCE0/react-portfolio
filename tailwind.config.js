/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Inter", "sans-serif"],
        titleFont: ["Cal Sans", "sans-serif"],
      },
      colors: {
        bodyColor: {
          light: "#ffffff",
          dark: "#09090b"
        },
        lightText: {
          light: "#09090b",
          dark: "#fafafa"
        },
        cardBg: {
          light: "#fafafa",
          dark: "#18181b"
        },
        borderColor: {
          light: "#e4e4e7",
          dark: "#27272a"
        },
        designColor: "#3b82f6",
        accentColor: {
          light: "#f4f4f5",
          dark: "#27272a"
        }
      },
      boxShadow: {
        'shadowOne-light': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'shadowOne-dark': '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
