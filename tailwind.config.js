const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.css',
  ],
  theme: {
    fontFamily: {
      sans: ["Vollkorn", "serif"],
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
