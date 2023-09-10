/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        Marineblue: "hsl(213, 96%, 18%)",
        Purplishblue: "hsl(243, 100%, 62%)",
        Pastelblue: "hsl(228, 100%, 84%)",
        Lightblue: "hsl(206, 94%, 87%)",
        Strawberryred: "hsl(354, 84%, 57%)",

        Coolgray: "hsl(231, 11%, 63%)",
        Lightgray: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        white: "hsl(0, 0%, 100%)"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}