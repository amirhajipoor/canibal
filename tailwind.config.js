/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      animation: {
        'move-to-b': 'move-box 2s forwards',
      },
      keyframes: {
        'move-box': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-11rem, 10rem)' },
        },
      },
    },
  },
  plugins: [],
}

