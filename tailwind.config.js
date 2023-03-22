/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 2px 15px 1px rgba(0,0,0,0.07)',
      },
      spacing: {
        150: '37.5rem',
      },
    },
  },
  plugins: [],
};
