import { useEffect, useState } from "react"
import { profilePageAPI } from "../../API/profilePageAPI"
import Typography from "../MainPage/modules/components/Typography"

interface IUserNickName {
  userId: number
  anotherDependency?: any
}

export const UserNickName: React.FC<IUserNickName> = ({
  userId,
  anotherDependency,
}) => {
  const [nickName, setNickName] = useState("")

  useEffect(() => {
    profilePageAPI
      .getUserNickName(userId)
      .then((response: any) => setNickName(`${response}`))
  }, [userId, anotherDependency])
  return <Typography sx={{ fontWeight: "bold" }}>{nickName}</Typography>
}

export default UserNickName
