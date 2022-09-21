import { PaletteMode } from "@mui/material"
import { amber, grey } from "@mui/material/colors"

// export const themeOptions: ThemeOptions = {
//   palette: {
//     secondary: {
//       main: "#90caf9",
//       dark: "#42a5f5",
//       light: "#e3f2fd",
//     },
//     primary: {
//       main: "#ce93d8",
//       dark: "#ab47bc",
//       light: "#f3e5f5",
//     },
//   },
// }

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          secondary: {
            main: "#212121",
          },
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: "black",
          },
        }
      : {
          primary: {
            main: amber[600],
          },
          secondary: {
            main: amber[600],
            light: "",
          },
          // palette values for dark mode
          // primary: amber,
          // divider: amber[700],
          background: {
            // default: amber[900],
            // paper: amber[900],
          },
          text: {
            // primary: "main",
            // secondary: "primary.main",
          },
        }),
  },
})
