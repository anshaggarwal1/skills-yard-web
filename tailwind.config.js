/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'greenish': {
          light: '#25D366'
        },
        'blacky': {
          default: 'rgb(54 58 69/1)',
          light: "#333333"
        },
        'grayish': {
          light: "#808080",
        },
        'darker': {
          black: '#202124',
          white: '#EEEEEE'
        }
      },
      boxShadow: {
        light: '0 0px 0px #3a3a4429, 0 0px 10px #5a5b6a29',
        spread: '0 4px 8px #3a3a4429, 0 8px 16px #5a5b6a29',
        'darker': {
          black: '#202124',
          white: '#EEEEEE'
        }
      }
    },
  },
  plugins: [],
};
