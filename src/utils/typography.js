import Typography from "typography"
import theme from "typography-theme-twin-peaks"

theme.baseFontSize = "16px" // was 20px.

theme.overrideStyles = ({ rhythm }, options) => ({
  "h1,h2,h3,h4,h5,h6": {
    color: "#fff",
  },
})

const typography = new Typography(theme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
