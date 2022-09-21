import { FilledInput, Button } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import SendIcon from "@mui/icons-material/Send"
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"

const InputFieldForChat = () => {
  return (
    <Grid2 container sx={{ position: "absolute", bottom: 20, width: "95%" }}>
      <Grid2 flexGrow={1}>
        <FilledInput sx={{ p: 1, width: "100%" }} disableUnderline />
      </Grid2>
      <Grid2 container justifyContent={"center"} flexGrow={0}>
        <Button variant="text">
          <SendIcon />
        </Button>
        <Button variant="text">
          <EmojiEmotionsIcon />
        </Button>
      </Grid2>
    </Grid2>
  )
}

export default InputFieldForChat
