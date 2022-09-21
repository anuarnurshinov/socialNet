import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material"
import { DarkModBtn } from "./MenuItems/DarkModBtn"
import IconMenuButtons from "./MenuItems/IconMenuButtons"
import SearchField from "./MenuItems/SearchField"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt"
import NotificationBtn from "./MenuItems/NotificationBtn"
import ChatBtn from "./MenuItems/ChatBtn"
import UserProfileBtn from "./MenuItems/UserProfileBtn"
import React from "react"
import MenuIcon from "@mui/icons-material/Menu"

const logoTextStyleForMD = {
  fontWeight: "bold",
  mr: 2,
  display: { xs: "none", md: "flex" },
}
const logoTextStyleForXS = {
  display: { xs: "flex", md: "none" },
  flexGrow: 0,
}
const logoIconStyle0ForMD = {
  fontSize: "50px",
  display: { xs: "none", md: "flex" },
}
const logoIconStyle0ForXS = {
  fontSize: "20px",
  display: { xs: "flex", md: "none" },
  mr: 1,
  flexGrow: { md: "none", xs: 2 },
}
const iconMenuStyleForMD = {
  ml: 2,
  flexGrow: 1,
  display: {
    xs: "none",
    md: "flex",
  },
}
const searchFieldStyleForMD = {
  display: {
    xs: "none",
    md: "flex",
  },
}
const searchFieldStyleForXS = {
  display: {
    xs: "flex",
    md: "none",
  },
}

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

export const AppMenu: React.FC<Props> = ({ window }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawerWidth = 240
  const navItems = ["Home", "Stories", "Videos", "Groups", "Shop"]
  const drawer = (
    <>
      <Box sx={searchFieldStyleForXS}>
        <SearchField />
      </Box>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <AppBar sx={{ mb: 1 }} position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: {},
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          <ElectricBoltIcon sx={logoIconStyle0ForMD} />
          <Typography variant={"h5"} sx={logoTextStyleForMD}>
            SocNet
          </Typography>

          <Typography variant={"h5"} sx={logoTextStyleForXS}>
            SocNet
          </Typography>
          <ElectricBoltIcon sx={logoIconStyle0ForXS} />
          <Box sx={searchFieldStyleForMD}>
            <SearchField />
          </Box>

          <Box sx={iconMenuStyleForMD}>
            <IconMenuButtons />
          </Box>
          <Box sx={{ display: { xs: "flex" } }}>
            <DarkModBtn />
            <NotificationBtn />
            <ChatBtn />
            <UserProfileBtn />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
