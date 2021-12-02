module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#1775B9'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
