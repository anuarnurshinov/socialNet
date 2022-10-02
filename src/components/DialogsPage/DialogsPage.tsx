import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import PushPinIcon from "@mui/icons-material/PushPin"
import { useNavigate } from "react-router-dom"
import { DialogsPageHeadProps } from "./DialogsPageContainer"
import { useEffect } from "react"
import UserAvatar from "../common/UserAvatar"
import { UserNickName } from "../common/UserNickName"

const DialogsPage: React.FC<DialogsPageHeadProps> = ({
  getDialogsThunk,
  dialogs,
  ownerId,
}) => {
  useEffect(() => {
    getDialogsThunk(1)
  }, [])

  const style = {
    width: "100%",
    bgcolor: "background.paper",
  }
  return (
    <Box sx={{ p: 2 }}>
      <List sx={style} aria-label="mailbox folders">
        {dialogs.map((item: any) => {
          const userId =
            ownerId === item.secondUser ? item.firstUser : item.secondUser
          return <DialogItem userId={userId} key={item.id} dialogId={item.id} />
        })}
      </List>
    </Box>
  )
}

export default DialogsPage

interface IDialogItemProps {
  dialogId: number
  userId: number
}
const DialogItem: React.FC<IDialogItemProps> = ({ dialogId, userId }) => {
  const navigate = useNavigate()
  const onClickNavigateToMessages = (id: number) => {
    navigate(`/dialogs/${dialogId}`)
  }
  return (
    <ListItem
      onClick={() => {
        onClickNavigateToMessages(dialogId)
      }}
      sx={{ boxShadow: 3, borderRadius: "10px", minHeight: 90, mb: 2 }}
      button
    >
      <Grid2 width={"100%"} container>
        <Grid2 xs={0.7}>
          <UserAvatar userId={userId} />
        </Grid2>
        <Grid2 flexGrow={1}>
          <UserNickName userId={userId} />
          <Box>
            <Typography>
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give
            </Typography>
          </Box>
        </Grid2>
        <Grid2>
          <Box>11:05 </Box>
          <Box>
            <PushPinIcon />
          </Box>
        </Grid2>
      </Grid2>
      <ListItemText />
    </ListItem>
  )
}
