import Grid2 from "@mui/material/Unstable_Grid2"
import { Button } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

const MediaList = () => {
  return (
    <Grid2 container>
      <Button color="info">
        <FacebookIcon />
      </Button>
      <Button color="info">
        <LinkedInIcon />
      </Button>
      <Button color="warning">
        <InstagramIcon />
      </Button>
      <Button color="success">
        <WhatsAppIcon />
      </Button>
    </Grid2>
  )
}

export default MediaList
