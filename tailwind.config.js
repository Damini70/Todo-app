/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'light': '#ffffff',
        'dark': '#333333',
      },
      textColor: {
        'light': '#333333',
        'dark': '#ffffff',
      },
    }
  },
  plugins: [ require('@tailwindcss/forms')],
}

