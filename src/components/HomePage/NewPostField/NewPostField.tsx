import Grid2 from "@mui/material/Unstable_Grid2"
import { Button, Grid, Typography } from "@mui/material"
import PostForm from "./PostForm"
import VideocamIcon from "@mui/icons-material/Videocam"
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto"
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto"
import OptionsBtn from "./OptionsBtn"

const NewPostField = () => {
  return (
    <Grid2
      sx={{ borderRadius: "10px", p: 2, m: 0, mt: 0, boxShadow: 3 }}
      container
      spacing={1}
    >
      <Grid2 xs={12}>
        <IconAndTitle />
      </Grid2>
      <Grid2 sx={{ mb: 1 }} xs={12}>
        <PostForm />
      </Grid2>
      <Grid2>
        <Button color="success">
          <VideocamIcon sx={{ mr: 1 }} /> LiveVideo{" "}
        </Button>
      </Grid2>
      <Grid2>
        <Button color="warning">
          <InsertPhotoIcon sx={{ mr: 1 }} />
          Photo/Video
        </Button>
      </Grid2>
      <Grid2>
        <Button color="info">
          <AddAPhotoIcon sx={{ mr: 1 }} />
          Feeling/Activity
        </Button>
      </Grid2>
      <Grid2>
        <OptionsBtn />
      </Grid2>
    </Grid2>
  )
}

export default NewPostField

const IconAndTitle = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Typography sx={{ ml: 1, mr: 1 }}>
          <h3>CreatePost </h3>
        </Typography>
      </Grid>
    </>
  )
}
