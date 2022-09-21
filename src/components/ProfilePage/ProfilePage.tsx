import { Avatar, Box, Button, Container, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import BackgroundImage from "./BackgroundImage"

import MailIcon from "@mui/icons-material/Mail"
import NewPostField from "../HomePage/NewPostField/NewPostField"
import Post from "../HomePage/Post/Post"
import ProfileInfo from "./ProfileInfo"
import MediaList from "./MediaList"

export const loader = async ({ params }: any) => {
  console.log(params)
}

const ProfilePage = () => {
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
                <Avatar
                  src="https://aif-s3.aif.ru/images/011/857/f5ef0f2e2e55334bec4503294e0b6ae1.jpg"
                  sx={{
                    width: 85,
                    height: 85,
                    bottom: 40,
                  }}
                />
              </Box>
            </Grid2>
            <Grid2 sx={{ flexGrow: 1 }} xs={2}>
              <Typography fontWeight={"bold"}>NickName</Typography>
              <Typography>@useremail</Typography>
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
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <ProfileInfo />
              <MediaList />
            </Box>
          </Container>
        </Grid2>
        <Grid2 sx={{ p: 1 }} xs={8}>
          <NewPostField />
          <Post />
        </Grid2>
      </Grid2>
    </Grid2>
  )
}

export default ProfilePage
