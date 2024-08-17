/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "bg2": "url('/images/bg2.png')",
        "bg3": "url('/images/bg3.png')",
        "bg6": "url('/images/bg6.png')",
        "drake": "url('/images/drake.jpg')",
        "eco3": "url('/images/eco3.png')",
      },
      fontFamily: {
        'rajdhani-bold': ['rajdhani-bold', 'sans-serif'],
        'rajdhani-regular': ['rajdhani-regular', 'sans-serif'],
        "planer-m": ['planer-m', 'sans-serif'],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}