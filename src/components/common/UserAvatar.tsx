import { Avatar } from "@mui/material"
import { useEffect, useState } from "react"
import { profilePageAPI } from "../../API/profilePageAPI"

interface IUserAvatar {
  userId: number
  anotherDependency?: any
}

export const UserAvatar: React.FC<IUserAvatar> = ({
  userId,
  anotherDependency,
}) => {
  const [userPhoto, setUserPhoto] = useState("")

  useEffect(() => {
    profilePageAPI
      .getUserPhoto(userId)
      .then((response: any) => response.photo)
      .then((response: any) => setUserPhoto(`${response}`))
  }, [userId, anotherDependency])
  return <Avatar src={`${userPhoto}`} />
}

export default UserAvatar
