import {
  Avatar,
  Backdrop,
  Box,
  Button,
  FormControl,
  Input,
} from "@mui/material"
import { useState } from "react"
import CancelIcon from "@mui/icons-material/Cancel"
import { useForm } from "react-hook-form"

interface IAvatarProps {
  updatePhotoThunk: (data: {}, accessToken: string, id: number | null) => {}
  userId: number | null
  accessToken: string
  userPhoto: string
}

const AvatarForProfilePage: React.FC<IAvatarProps> = ({
  updatePhotoThunk,
  userId,
  accessToken,
  userPhoto,
}) => {
  const [isHover, setIsHover] = useState(false)
  const onMouseOver = () => {
    setIsHover(true)
  }
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    setOpen(!open)
  }
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  })
  const onSubmit = (data: object) => {
    updatePhotoThunk({ ...data, userId }, accessToken, userId)
    setOpen(false)
  }

  const uploadPhoto =
    "https://media.istockphoto.com/vectors/camera-photo-upload-icon-on-isolated-white-background-eps-10-vector-vector-id1248723171?k=20&m=1248723171&s=612x612&w=0&h=K3Cv1zo_db-6LAqCJYCMiiPJdOEgjY89bnrxmV7fPDY="

  return (
    <>
      <Avatar
        onMouseOver={onMouseOver}
        onMouseOut={() => {
          setIsHover(false)
        }}
        onClick={handleToggle}
        src={isHover ? uploadPhoto : userPhoto}
        sx={{
          width: 85,
          height: 85,
          bottom: 40,
          opacity: isHover ? 0.5 : 1,
          cursor: "pointer",
        }}
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}

        // onClick={handleClose}
      >
        <Box
          sx={{
            borderRadius: "10px",
            bgcolor: "white",
            pt: 2,
            pl: 2,
          }}
        >
          {" "}
          <FormControl component={"form"} onSubmit={handleSubmit(onSubmit)}>
            <FormControl sx={{ position: "relative" }}>
              <Input
                {...register("photo")}
                type="text"
                disableUnderline
                placeholder="Вставьте ссылку"
              />
            </FormControl>
            <FormControl>
              <Input type="submit" />
            </FormControl>
          </FormControl>
          <Button onClick={handleClose}>
            <CancelIcon />
          </Button>
        </Box>
      </Backdrop>
    </>
  )
}

export default AvatarForProfilePage
