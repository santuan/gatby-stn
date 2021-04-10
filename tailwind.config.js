const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: false,
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "serif"],
      serif: ["Yeseva One", "serif"],
      mono: ["Space Mono", "mono"],
    },
  },
  variants: {},
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
    require("postcss-nested"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
