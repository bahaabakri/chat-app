/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        keyframes: {
          'fade-in': {
            '0%': { opacity: 0, transform: 'scale(0.95)' },
            '100%': { opacity: 1, transform: 'scale(1)' },
          },
          'fade-out': {
            '0%': { opacity: 1, transform: 'scale(1)' },
            '100%': { opacity: 0, transform: 'scale(0.95)' },
          },
        },
        animation: {
          'fade-in': 'fade-in 200ms ease-out',
          'fade-out': 'fade-out 200ms ease-in',
        },
      },
    },
  plugins: [],
}

