import { url } from 'inspector';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        'bg-image-animation': 'bgImageAnimation 15s infinite',
      },
      keyframes: {
        bgImageAnimation: {
         
        },
      },
    },
  },
  plugins: [],
}

