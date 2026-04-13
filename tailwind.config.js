/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          navy: '#0B1B3F',
          blue: '#142F6B',
          royal: '#1E4D9C',
          sky: '#3B82F6',
          sand: '#FFFFFF',
          gold: '#FFB800',
          gray: '#F3F4F6',
        },
      },
      boxShadow: {
        'glow': '0 20px 45px rgba(31, 60, 136, 0.18)',
      },
    },
  },
  plugins: [],
}