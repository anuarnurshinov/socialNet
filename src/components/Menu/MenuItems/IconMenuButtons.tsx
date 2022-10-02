import { NavLink } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from "@mui/icons-material/Person"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import { IconButton } from "@mui/material"

const IconMenuButtons = () => {
  const iconStyle = {
    fontSize: "35px",
  }
  const activeItemStyle = {
    color: "secondary.main",
  }

  // const itemStyle = {
  //   color: "text.secondary",
  // }

  const IconBtnsPrint = (isActive: boolean, Icon: any) => {
    return (
      <IconButton sx={isActive ? activeItemStyle : {}}>
        <Icon sx={iconStyle} />
      </IconButton>
    )
  }

  return (
    <>
      <NavLink to="/home">
        {({ isActive }) => IconBtnsPrint(isActive, HomeIcon)}
      </NavLink>
      <NavLink to="/users">
        {({ isActive }) => IconBtnsPrint(isActive, PersonIcon)}
      </NavLink>
      {/* <NavLink to="/dialogs">
        {({ isActive }) => IconBtnsPrint(isActive, ChatBubbleIcon)}
      </NavLink> */}
    </>
  )
}

export default IconMenuButtons
