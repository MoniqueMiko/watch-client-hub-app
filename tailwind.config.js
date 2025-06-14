/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  content: [
  './index.html',
  './src/**/*.{vue,js,ts,jsx,tsx}',
],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}
