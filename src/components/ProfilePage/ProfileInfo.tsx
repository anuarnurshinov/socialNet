import { List, ListItem, ListItemText } from "@mui/material"
import LockOpenIcon from "@mui/icons-material/LockOpen"
import VisibilityIcon from "@mui/icons-material/Visibility"
import LocationOnIcon from "@mui/icons-material/LocationOn"
const ProfileInfo = () => {
  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  }

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <LockOpenIcon sx={{ mr: 2 }} />
        <ListItemText primary="Private" secondary="What's up, how are you?" />
      </ListItem>

      <ListItem button>
        <VisibilityIcon sx={{ mr: 2 }} />
        <ListItemText primary="Visble" secondary="Anyone can find you" />
      </ListItem>
      <ListItem button>
        <LocationOnIcon sx={{ mr: 2 }} />
        <ListItemText primary="Moscow, Russia" />
      </ListItem>

      <ListItem button>
        <ListItemText primary="General Group" />
      </ListItem>
    </List>
  )
}

export default ProfileInfo
