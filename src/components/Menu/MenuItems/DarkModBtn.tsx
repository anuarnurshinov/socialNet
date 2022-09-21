import { useTheme } from "@emotion/react"
import { Brightness7, Brightness4 } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import React from "react"
import { ColorModeContext } from "../../../App"

export const DarkModBtn = () => {
  const theme: any = useTheme()
  const colorMode = React.useContext(ColorModeContext)
  return (
    <>
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </>
  )
}
