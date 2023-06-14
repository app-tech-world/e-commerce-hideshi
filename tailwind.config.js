/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      phone: "375px",
      tablet: "768px",
      notebook: "1280px",
      desktop: "1440px"
    },
    textColor: {
      skin: {
        primary: "var(--fs-color-neutral-7)",
        secondary: "var(--fs-color-neutral-7)",
        success: "#50b191"
      }
    },
    backgroundColor: {
      skin: {
        primary: "var(--fs-color-main-3)",
        light: "var(--fs-color-main-2)",
        "tertiary-hover": "var(--fs-color-main-2)",
        "tertiary-active": "var(--fs-color-main-3)",
        warning: "#b17000",
        success: "#007043",
        disabled: "var(--fs-color-main-3)"

      }
    }
  },
  plugins: [],
}

