/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'vs-bg': '#1e1e1e',
            'vs-dark': '#0e0e0e',
        }
    },
  },
  plugins: [],
}
