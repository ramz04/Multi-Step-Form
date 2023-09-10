/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
  plugins: [],
}
