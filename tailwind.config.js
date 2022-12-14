/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sub": "#FAFAFA",
        "salmon": "#D83439" //"#ef5b5b",
      }
    },
  },
  plugins: [
  ],
}
