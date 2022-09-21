import { Avatar, Box, Button, Container, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import OptionsBtn from "../NewPostField/OptionsBtn"
import Text from "./PostText"
import PostImage from "./PostImage"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"
import ShareIcon from "@mui/icons-material/Share"
const Post = () => {
  return (
    <Grid2
      sx={{
        p: 2,
        boxShadow: 3,
        mt: 2,
        pb: 4,
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <Grid2>
        <Grid2 sx={{ mb: 1 }} container>
          <Grid2 xs={0.8}>
            <Avatar sx={{}} />
          </Grid2>
          <Grid2 xs={2.2}>
            <Typography fontWeight={"bold"}>NickName</Typography>
            <Typography fontWeight={"light"}>22 min ago</Typography>
          </Grid2>
          <Grid2 sx={{ textAlign: "-webkit-right", mt: -1 }} xs={9}>
            <OptionsBtn />
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2>
        <Text />
      </Grid2>
      <Box sx={{ mt: 1, mb: 1, textAlign: "center" }}>
        <PostImage />
      </Box>
      <Grid2 sx={{ position: "absolute", bottom: 5 }}>
        <Box>
          <Button color="info">
            <ThumbUpIcon />
          </Button>
          0
          <Button color="info">
            <ThumbDownIcon />
          </Button>
          0
          <Button color="info">
            <ShareIcon />
          </Button>
        </Box>
      </Grid2>
    </Grid2>
  )
}

export default Post
