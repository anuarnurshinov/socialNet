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
  Button,
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
import { useNavigate } from "react-router-dom"
import {
  searchFieldStyleForXS,
  logoIconStyle0ForMD,
  logoTextStyleForMD,
  logoTextStyleForXS,
  logoIconStyle0ForXS,
  searchFieldStyleForMD,
  iconMenuStyleForMD,
} from "./StylesForMenu"
import { AppMenuHeaderProps } from "./MenuContainer"

export const AppMenu: React.FC<AppMenuHeaderProps> = ({
  ownerPhoto,
  isAuth,
  userId,
}) => {
  const navigate = useNavigate()
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

            {isAuth ? (
              <UserProfileBtn ownerPhoto={ownerPhoto} userId={userId} />
            ) : (
              <Button
                sx={{ height: "50%", mt: "auto", mb: "auto" }}
                variant="contained"
                onClick={() => {
                  navigate("/login")
                }}
              >
                {" "}
                Войти{" "}
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
