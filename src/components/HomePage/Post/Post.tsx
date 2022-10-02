import { Avatar, Box, Button, Container, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import OptionsBtn from "../NewPostField/OptionsBtn"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"
import ShareIcon from "@mui/icons-material/Share"
import { formatDate } from "../NewPostField/Dater"
import { PostHeaderProps } from "./PostContainer"
import { UserAvatar } from "../../common/UserAvatar"

interface IItem {
  author: string
  id: number
  image: string
  text: string
  title: string
  userId: number
  creationTime: string
  likes: number
  dislikes: number
}

export interface IPostProps {
  item: IItem
}

const Post: React.FC<PostHeaderProps> = ({ item, ownerPhoto }) => {
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
            <UserAvatar userId={item.id} anotherDependency={ownerPhoto} />
          </Grid2>
          <Grid2 xs={2.2}>
            <Typography fontWeight={"bold"}>{item.author}</Typography>
            <Typography fontWeight={"light"}>
              {formatDate(new Date(item.creationTime))}
            </Typography>
          </Grid2>
          <Grid2 sx={{ textAlign: "-webkit-right", mt: -1 }} xs={9}>
            <OptionsBtn />
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2>
        <Typography>{item.text}</Typography>
      </Grid2>
      <Box sx={{ mt: 1, mb: 1, textAlign: "center" }}>
        <Box sx={{ p: 1 }}>
          <img
            alt=""
            style={{ borderRadius: "10px", width: "-webkit-fill-available" }}
            src={item.image}
          />
        </Box>
      </Box>
      <Grid2 sx={{ position: "absolute", bottom: 5 }}>
        <Box>
          <Button color="info">
            <ThumbUpIcon />
          </Button>
          {item.likes}
          <Button color="info">
            <ThumbDownIcon />
          </Button>
          {item.dislikes}
          <Button color="info">
            <ShareIcon />
          </Button>
        </Box>
      </Grid2>
    </Grid2>
  )
}

export default Post
