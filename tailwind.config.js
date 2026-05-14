/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#0a0e27',
          darker: '#050813',
          light: '#f5f5f7',
          lighter: '#ffffff',
          purple: '#6366f1',
          blue: '#3b82f6',
          teal: '#14b8a6',
          gold: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'cosmic-dark': 'radial-gradient(ellipse at top, #1e1b4b 0%, #0a0e27 50%, #050813 100%)',
        'cosmic-light': 'radial-gradient(ellipse at top, #e0e7ff 0%, #f5f5f7 50%, #ffffff 100%)',
      },
    },
  },
  plugins: [],
}
