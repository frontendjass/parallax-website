/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matcha: {
          50: '#f3f6ef',
          100: '#e4eadd',
          200: '#c0cfb2',
          300: '#aabe98',
          400: '#8ba576',
          500: '#6e8959',
          600: '#546c44',
          700: '#425437',
          800: '#384430',
          900: '#313c2b',
          950: '#181f14',
        },
      },
    },
  },
  plugins: [],
}

