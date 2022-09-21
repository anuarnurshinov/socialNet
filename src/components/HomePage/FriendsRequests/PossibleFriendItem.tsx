import { Avatar, Button, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

const PossibleFriendItem = () => {
  return (
    <>
      <Grid
        sx={{ mt: 2 }}
        container
        alignItems="center"
        justifyContent="center"
      >
        <Avatar
          sx={{ mr: 1 }}
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
        <Typography sx={{ fontWeight: "bolder" }}> Anthony Daugloi </Typography>
      </Grid>
      <Grid
        sx={{ mt: 2 }}
        container
        alignItems="center"
        justifyContent="center"
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: 50, m: 1 }}
        >
          {" "}
          Добавить{" "}
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: 50, m: 1 }}
        >
          <VisibilityOffIcon />
        </Button>
      </Grid>
    </>
  )
}

export default PossibleFriendItem
