/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B2A4A',
        accent: '#FF7A00',
        light: '#F5F9FF',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(11, 42, 74, 0.12)',
      },
    },
  },
  plugins: [],
}
