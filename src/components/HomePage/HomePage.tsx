import { Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import FriendsRequests from "./FriendsRequests/FreindsRequsets"
import NewPostField from "./NewPostField/NewPostField"
import Post from "./Post/Post"
import Stories from "./Stories/Stories"
import PhotoList from "./PhotoList/PhotoList"
import NewPostContainer from "./NewPostField/NewPostContainer"
import { useEffect } from "react"
import PostContainer from "./Post/PostContainer"
import { HomePageHeaderProps } from "./HomePageContainer"

const HomePage: React.FC<HomePageHeaderProps> = ({
  getAllPostsThunk,
  posts,
}) => {
  useEffect(() => {
    getAllPostsThunk()
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid sx={{ p: 2 }} xs={9}>
          <Stories />
          <NewPostContainer />
          {posts
            .map((item, index) => <PostContainer item={item} key={index} />)
            .reverse()}
        </Grid>
        <Grid xs={3}>
          <FriendsRequests />
          <PhotoList />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage
