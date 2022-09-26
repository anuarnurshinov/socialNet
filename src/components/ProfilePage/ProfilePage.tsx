import { Box, Button, Container, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import BackgroundImage from "./BackgroundImage"

import MailIcon from "@mui/icons-material/Mail"
import ProfileInfo from "./ProfileInfo"
import MediaList from "./MediaList"
import { IProfile } from "../../redux/typesForReducers"
import AvatarForProfilePage from "./AvatarForProfilePage"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import PostContainer from "../HomePage/Post/PostContainer"
import NewPostContainer from "../HomePage/NewPostField/NewPostContainer"
import { ProfilePageHeaderProps } from "./ProfilePageContainer"

const ProfilePage: React.FC<ProfilePageHeaderProps> = ({
  profile,
  updatePhotoThunk,
  accessToken,
  getUserPhotoThunk,
  getUserProfileThunk,
  getUserPostsThunk,
}) => {
  const { userId } = useParams()

  useEffect(() => {
    getUserPhotoThunk(Number(userId))
    getUserProfileThunk(Number(userId))
    getUserPostsThunk(Number(userId))
  }, [userId])

  return (
    <Grid2>
      <Grid2 sx={{ p: 1 }}>
        <Container
          sx={{ p: 2, borderRadius: "10px", height: 350, boxShadow: 3 }}
        >
          <BackgroundImage />
          <Grid2 container>
            <Grid2 xs={1}>
              <Box>
                <AvatarForProfilePage
                  userId={profile.id}
                  userPhoto={profile.photo}
                  updatePhotoThunk={updatePhotoThunk}
                  accessToken={accessToken}
                />
              </Box>
            </Grid2>
            <Grid2 sx={{ flexGrow: 1 }} xs={2}>
              <Typography fontWeight={"bold"}>{profile.name}</Typography>
              <Typography>{"@" + profile.name}</Typography>
            </Grid2>
            <Grid2>
              <Button variant="contained">Добавить</Button>
            </Grid2>
            <Grid2 sx={{ ml: 1 }}>
              <Button variant="contained">
                Написать
                <MailIcon />
              </Button>
            </Grid2>
            <Grid2></Grid2>
          </Grid2>
        </Container>
      </Grid2>
      <Grid2 container>
        <Grid2 sx={{ p: 1 }} xs={4}>
          <Container
            sx={{
              boxShadow: 3,
              borderRadius: "10px",
              p: 2,
            }}
          >
            <Typography fontWeight={"bold"}>Обо мне:</Typography>
            <Box>
              <Typography>{profile.aboutMe}</Typography>
              <ProfileInfo />
              <MediaList />
            </Box>
          </Container>
        </Grid2>
        <Grid2 sx={{ p: 1 }} xs={8}>
          <NewPostContainer />
          {profile.posts
            ?.map((item, index) => <PostContainer item={item} key={index} />)
            .reverse()}
        </Grid2>
      </Grid2>
    </Grid2>
  )
}

export default ProfilePage
