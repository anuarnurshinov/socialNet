import React from "react"
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { Outlet } from "react-router-dom"
import { getDesignTokens } from "./themeOptions"
import MenuContainer from "./components/Menu/MenuContainer"

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
})

const App = () => {
  const [mode, setMode] = React.useState<"light" | "dark">("light")

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
    }),
    []
  )

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Grid container>
              <MenuContainer />
              <Container sx={{ height: "100vh" }}>
                <Outlet />
              </Container>
            </Grid>
          </CssBaseline>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App
