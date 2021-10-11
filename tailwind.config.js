module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'sans': ['Niramit', 'Sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'active'],
      textColor: ['even','active']
    },
  },
  plugins: [],
}
