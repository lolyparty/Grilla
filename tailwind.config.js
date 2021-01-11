module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        grayish:'#f3f3f3',
        textblue:'rgba(0, 87, 218, 0.65)',
        spinblue:'rgba(10, 226, 255, 0.541)'
      },
      scale:{
        '101':'1.01'
      },
      width:{
        '96':'25rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
