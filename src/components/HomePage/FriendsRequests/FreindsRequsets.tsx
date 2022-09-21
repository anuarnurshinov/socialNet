import Grid from "@mui/material/Unstable_Grid2"
import PossibleFriendItem from "./PossibleFriendItem"
import { Typography } from "@mui/material"

let friendsRequestData: object[] = [{}, {}, {}]

const FriendsRequests = () => {
  return (
    <Grid
      sx={{ mt: 1, p: 2, boxShadow: 3, borderRadius: "10px" }}
      container
      spacing={1}
    >
      <Grid xs={8}>
        <Typography sx={{ fontWeight: "bold" }}>Запросы в друзья</Typography>
      </Grid>
      <Grid xs={4}>
        <Typography component={"a"}>Все</Typography>
      </Grid>
      <Grid>
        {friendsRequestData.map((item, index) => {
          return <PossibleFriendItem key={index} />
        })}
      </Grid>
    </Grid>
  )
}

export default FriendsRequests
