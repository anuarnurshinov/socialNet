import { Avatar, IconButton, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import AddIcon from "@mui/icons-material/Add"
const UserInformation = () => {
  return (
    <Grid container sx={{ mt: 15 }}>
      <Grid xs={12} sx={{ mt: 1 }} container justifyContent="center">
        <Avatar
          alt="Remy Sharp"
          src="https://lastfm.freetls.fastly.net/i/u/500x500/5871e2a557e0c82bd27e82f3cfbe4812.jpg"
        />
      </Grid>
      <Grid sx={{ mt: 1 }} xs={12} container justifyContent="center">
        <Typography color={"white"}>Иван Пупкин</Typography>
      </Grid>
    </Grid>
  )
}

export default UserInformation

export const PlusIconForAddingStory = () => {
  return (
    <Grid container sx={{ mt: 15 }}>
      <Grid xs={12} sx={{ mt: 1 }} container justifyContent="center">
        <IconButton>
          <AddIcon sx={{ color: "white" }} />
        </IconButton>
      </Grid>
      <Grid sx={{ mt: 1 }} xs={12} container justifyContent="center">
        <Typography color="white">Добавить</Typography>
      </Grid>
    </Grid>
  )
}
