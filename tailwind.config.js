const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "serif"],
      serif: ["Yeseva One", "serif"],
      mono: ["Space Mono", "mono"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.kush-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }
      addUtilities(newUtilities)
    }),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
}
