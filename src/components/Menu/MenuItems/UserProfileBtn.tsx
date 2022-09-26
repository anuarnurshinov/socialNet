import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

interface IUserProfileBrnProps {
  ownerPhoto: string
  userId: number | null
}

const UserProfileBtn: React.FC<IUserProfileBrnProps> = ({
  ownerPhoto,
  userId,
}) => {
  const navigate = useNavigate()
  const settings = [
    { name: "Profile", link: `/profile/${userId}` },
    { name: "Logout", link: "/logout" },
  ]

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const handleGoToProfilePage = (link: string) => {
    handleCloseUserMenu()
    navigate(`${link}`)
  }

  return (
    <>
      <Box sx={{ m: 1 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src={ownerPhoto} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem
              key={setting.name}
              onClick={() => {
                handleGoToProfilePage(setting.link)
              }}
            >
              <Typography textAlign="center">{setting.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  )
}

export default UserProfileBtn
