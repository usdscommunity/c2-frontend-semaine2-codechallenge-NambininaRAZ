/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'hsl(233, 26%, 24%)',
        'primary-green': 'hsl(136, 64%, 51%)',
        'primary-cyan': 'hsl(192, 69%, 51%)',
        'neutral-gray-600': 'hsl(233, 8%, 62%)',
        'neutral-gray-100': 'hsl(220, 16%, 96%)',
        'neutral-gray-50': 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        'public-sans': ['Public Sans', 'sans-serif'],
      },
      fontSize: {
        'body': '18px',
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, hsl(136, 64%, 51%) 0%, hsl(192, 69%, 51%) 100%)',
      },
    },
  },
  plugins: [],
}