import {
  Box,
  FormControl,
  InputLabel,
  FilledInput,
  Avatar,
  Button,
  Popover,
  Input,
} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Grid2 from "@mui/material/Unstable_Grid2"
import { IProfile } from "../../../redux/typesForReducers"
import { formatDate } from "./Dater"

interface IPostFormProps {
  id: string | undefined
  open: boolean
  handleClose: () => void
  anchorEl: any
  ownerProfile: IProfile
  sendNewPostThunk: (data: newPostData) => {}
  getUserPostsThunk: (userId: number) => {}
}
export interface newPostData {
  title: string
  author: string | null
  userId: number | null
  text: string
  image: string
  creationTime: Date
  likes: number
  dislikes: number
}

const PostForm: React.FC<IPostFormProps> = ({
  ownerProfile,
  id,
  open,
  handleClose,
  anchorEl,
  sendNewPostThunk,
  getUserPostsThunk,
}) => {
  const [isClicked, setClick] = useState(false)

  const startAdornment = isClicked ? (
    <Avatar src={ownerProfile.photo} sx={{ m: 1 }} />
  ) : (
    ""
  )

  const endAdornment = (
    <Button
      sx={{ mt: "auto", mb: "auto", height: 40, ml: 1 }}
      disableElevation
      type="submit"
      variant="contained"
    >
      <SendIcon sx={{ ml: 1 }} />
    </Button>
  )
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data: any) => {
    const payloadData: newPostData = {
      title: "",
      author: ownerProfile.name,
      userId: ownerProfile.id,
      text: data.text,
      image: data.image,
      creationTime: new Date(),
      likes: 0,
      dislikes: 0,
    }

    let userId = Number(ownerProfile.id)

    await sendNewPostThunk(payloadData)
    getUserPostsThunk(userId)
    reset()
  }

  return (
    <Box>
      <FormControl
        component={"form"}
        fullWidth
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid2 container>
          <Grid2 xs={10}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel>О чем вы думаете?</InputLabel>
              <FilledInput
                disableUnderline
                sx={{ borderRadius: "10px" }}
                multiline
                {...register("text")}
                onSubmit={handleSubmit(onSubmit)}
                startAdornment={startAdornment}
                onClick={() => {
                  setClick(true)
                }}
                onBlur={() => {
                  setClick(false)
                }}
              />
            </FormControl>
            <FormControl>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box sx={{ p: 2 }}>
                  <Input
                    {...register("image")}
                    type="text"
                    placeholder="вставьте ссылку"
                  />
                </Box>
              </Popover>
            </FormControl>
          </Grid2>
          {endAdornment}
        </Grid2>
      </FormControl>
    </Box>
  )
}
export default PostForm
