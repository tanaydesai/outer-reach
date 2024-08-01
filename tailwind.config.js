/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      },
      fontFamily: {
        'rajdhani-bold': ['rajdhani-bold', 'sans-serif'],
        'rajdhani-regular': ['rajdhani-regular', 'sans-serif'],
        "planer-m": ['planer-m', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
