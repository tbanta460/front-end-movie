const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        blue: colors.blue,
      "01": "#131338ff",
      "02":"#0a0a2bff",
      "03":"#131314",
      "04":"#0F0F0F",
      "05": "#1e3042ff",
      "06": "#152433ff",
      "07": "#0f1d2bff",
      "101" : "#F0A500",
      "rgb-101":"rgb(240, 165, 0, 0.6)",
      "rgb-000" :"rgb(0,0,0, 0.4)"
    },
    extend: {
      spacing: {
        '85': '22rem',
        '97': '25rem',
        '98': '26rem',
        '99': '28rem',
        '100': '30rem',
        '105': '35rem',
        '110': '40rem'
      },
      gridTemplateColumns: {
          // Simple 16 column grid
          '001': '1.5fr 2.5fr 1fr',
         '01': '0.5fr 1.5fr 1fr',
         '03': '1fr 1fr',


          // Complex site-specific column configuration
         'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300','currentColor'),
      'orange': '#F0A500',
      'grey': '#152433ff'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [
    
   ],
}
