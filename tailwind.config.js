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
        "starship1": "url('/images/starship1.jpg')",
        "starship2": "url('/images/starship2.jpg')",
        "starship3": "url('/images/starship3.jpeg')",
        "starlink1": "url('/images/starlink1.jpg')",
        "moon1": "url('/images/moon1.png')",
        "moon2": "url('/images/moon2.jpeg')",
        "moon3": "url('/images/moon3.jpeg')",
        "mars1": "url('/images/mars1.jpeg')",
        "mars2": "url('/images/mars2.jpeg')",
        "wind1": "url('/images/wind1.png')",
        "wind2": "url('/images/wind2.jpg')",
        "nuclear1": "url('/images/nuclear1.jpg')",
        "nuclear2": "url('/images/nuclear2.jpeg')",
        "nuclear3": "url('/images/nuclear3.png')",
        "ocean1": "url('/images/ocean1.jpg')",
        "ocean2": "url('/images/ocean2.jpg')",
        "ocean3": "url('/images/ocean3.jpg')",
        "carbon1": "url('/images/carbon1.jpg')",
        "bio1": "url('/images/bio1.jpg')",
        "bg1": "url('/images/bg1.png')",
        "bg2": "url('/images/bg2.png')",
        "bg3": "url('/images/bg3.png')",
        "grain": "url('/images/grain.png')",
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