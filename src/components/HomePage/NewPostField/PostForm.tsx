import {
  Box,
  FormControl,
  InputLabel,
  FilledInput,
  Avatar,
  Button,
} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import { useState } from "react"
import { useForm } from "react-hook-form"

const PostForm = () => {
  const [isClicked, setClick] = useState(false)

  const startAdornment = isClicked ? <Avatar sx={{ m: 1 }} /> : ""

  const endAdornment = isClicked ? (
    <Button
      sx={{ position: "absolute", bottom: 10, right: 10 }}
      variant="contained"
    >
      Отправить
      <SendIcon sx={{ ml: 1 }} />
    </Button>
  ) : (
    ""
  )
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <Box>
      <FormControl fullWidth onSubmit={handleSubmit(onSubmit)}>
        <InputLabel>О чем вы думаете?</InputLabel>
        <FilledInput
          disableUnderline
          sx={{ borderRadius: "10px" }}
          multiline
          {...register("message")}
          onSubmit={handleSubmit(onSubmit)}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          onClick={() => {
            setClick(true)
          }}
          onBlur={() => {
            setClick(false)
          }}
        />
      </FormControl>
    </Box>
  )
}
export default PostForm
