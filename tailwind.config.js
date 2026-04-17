/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a56db',
        secondary: '#f97316',
        accent: '#10b981',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
