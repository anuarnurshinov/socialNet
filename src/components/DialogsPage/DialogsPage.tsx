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

const DialogsPage = () => {
  const style = {
    width: "100%",
    bgcolor: "background.paper",
  }
  const dialogList = [{}, {}, {}, {}, {}]
  return (
    <Box sx={{ p: 2 }}>
      <List sx={style} aria-label="mailbox folders">
        {dialogList.map((item, index) => (
          <DialogItem key={index} />
        ))}
      </List>
    </Box>
  )
}

export default DialogsPage

const DialogItem = () => {
  const navigate = useNavigate()
  const onClickNavigatoToMessege = (id: number) => {
    navigate(`/dialogs/${id}`)
  }
  return (
    <ListItem
      onClick={() => {
        onClickNavigatoToMessege(1)
      }}
      sx={{ boxShadow: 3, borderRadius: "10px", minHeight: 90, mb: 2 }}
      button
    >
      <Grid2 width={"100%"} container>
        <Grid2 xs={0.7}>
          <Avatar
            sx={{ width: "2.5em", height: "2.5em" }}
            src={
              "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg"
            }
          />
        </Grid2>
        <Grid2 flexGrow={1}>
          <Typography fontWeight={"bold"}>NickName</Typography>
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
