/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bayer-primary': {
          50: '#ffdce4',
          100: '#ffbece',
          200: '#ff7596',
          300: '#ff3162',
          400: '#de0043',
          500: '#bf124b',
          600: '#a02453',
          700: '#81365b',
          800: '#624963',
          900: '#443247',
        },
        'bayer-secondary': {
          50: '#e7f8ff',
          100: '#cdf1ff',
          200: '#a4e7ff',
          300: '#3eccff',
          400: '#00bcff',
          500: '#0091df',
          600: '#007cb8',
          700: '#006f9b',
          800: '#00617f',
          900: '#10384f',
        },
      },
    },
  },
  plugins: [],
}