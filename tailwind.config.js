module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        grayish:'#f3f3f3',
        textblue:'rgba(0, 87, 218, 0.65)',
        'background1':'rgba(2, 103, 255, 0.65)'
      },
      scale:{
        '101':'1.01'
      },
      width:{
        '96':'25rem',
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
        'mdd':{'max':'804px'},

        'smm':{'max':'654px'},
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'xsm':{'max':'590px'},
        'xxsm':{'max':'455px'}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
