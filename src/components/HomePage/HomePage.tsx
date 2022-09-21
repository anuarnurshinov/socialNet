import { Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import FriendsRequests from "./FriendsRequests/FreindsRequsets"
import NewPostField from "./NewPostField/NewPostField"
import Post from "./Post/Post"
import Stories from "./Stories/Stories"
import PhotoList from "./PhotoList/PhotoList"

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid sx={{ p: 2 }} xs={9}>
          <Stories />
          <NewPostField />
          <Post />
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
