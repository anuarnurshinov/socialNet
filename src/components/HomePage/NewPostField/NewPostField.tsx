import Grid2 from "@mui/material/Unstable_Grid2"
import { Button, Grid, Popover, Typography } from "@mui/material"
import PostForm, { newPostData } from "./PostForm"
import VideocamIcon from "@mui/icons-material/Videocam"
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto"
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto"
import OptionsBtn from "./OptionsBtn"
import React from "react"
import { IProfile } from "../../../redux/typesForReducers"

interface INewPostField {
  ownerProfile: IProfile
  sendNewPostThunk: (data: newPostData) => {}
  getUserPostsThunk: (userId: number) => {}
}

const NewPostField: React.FC<INewPostField> = ({
  ownerProfile,
  sendNewPostThunk,
  getUserPostsThunk,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

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
        <PostForm
          getUserPostsThunk={getUserPostsThunk}
          sendNewPostThunk={sendNewPostThunk}
          id={id}
          open={open}
          handleClose={handleClose}
          anchorEl={anchorEl}
          ownerProfile={ownerProfile}
        />
      </Grid2>
      <Grid2>
        <Button aria-describedby={id} onClick={handleClick} color="warning">
          <InsertPhotoIcon sx={{ mr: 1 }} />
          Photo/Video
        </Button>
      </Grid2>
      <Grid2>
        <Button color="success">
          <VideocamIcon sx={{ mr: 1 }} /> LiveVideo{" "}
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
        <Typography fontWeight={"bold"} sx={{ ml: 1, mr: 1 }}>
          CreatePost
        </Typography>
      </Grid>
    </>
  )
}
