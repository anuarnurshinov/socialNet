import { Box } from "@mui/material"

const BackgroundImage = () => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        display: "inline-block",
        overflow: "hidden",
        height: "250px",
        width: "-webkit-fill-available",
      }}
    >
      <img
        style={{ verticalAlign: "center", width: "-webkit-fill-available" }}
        alt=""
        src={
          "https://img.artlebedev.ru/everything/yandex/kit-wallpapers/yandex-kit-wallpapers.gif"
        }
      />
    </Box>
  )
}

export default BackgroundImage
