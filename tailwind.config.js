module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'indigo-lighter': '#b3bcf5',
      'indigo': '#5c6ac4',
      'indigo-dark': '#202e78',
      'nav' : '#0B0C0C',
      'border_color': '#D6D5D4',
      'placeholder_color': '#B1B4B6',
      'banner_bg': '#0B4B66',
      'white' : '#FFFFFF',
      'border' : '#F47738',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
