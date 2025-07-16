/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Exo', 'Montserrat', 'monospace'],
      },
      colors: {
        'red-neon': '#ff2d2d',
        'gold-digital': '#f5b728',
      },
      animation: {
        'glitch': 'glitch 0.3s ease-in-out',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '10%': { transform: 'translate(-2px, 2px)' },
          '20%': { transform: 'translate(-3px, 0px)' },
          '30%': { transform: 'translate(3px, 2px)' },
          '40%': { transform: 'translate(-1px, -1px)' },
          '50%': { transform: 'translate(2px, 2px)' },
          '60%': { transform: 'translate(-2px, 0px)' },
          '70%': { transform: 'translate(3px, 1px)' },
          '80%': { transform: 'translate(-1px, -1px)' },
          '90%': { transform: 'translate(2px, 2px)' },
        }
      }
    },
  },
  plugins: [],
};