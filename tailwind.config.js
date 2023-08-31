const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: colors.orange,
      gray: colors.gray,
      yellow: colors.yellow,
      blue: colors.blueGray,
      white: colors.white,
      black: colors.black,
      red: colors.red,
      green: colors.green,
      indigo: colors.indigo,
    },
    screens: {
      'sm': '300px',
      'lg': '700px'
    },
    // fontFamily: {
    //   'sans': ['ui-sans-serif', 'system-ui'],
    //   'serif': ['ui-serif', 'Georgia'],
    //   'mono': ['ui-monospace', 'SFMono-Regular'],
    //   'montserrat': ['Montserrat'],
    //  },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/src/assets/hero.png')",
        'action': "url('/src/assets/action.png')",
      })
    },
  },
  variants: {
    extend: {
      translate: ['hover'],
    },
  },
  plugins: [],
}
