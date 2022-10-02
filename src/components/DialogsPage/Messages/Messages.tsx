import { Container } from "@mui/system"
import react, { useState } from "react"
import InputFieldForChat from "./InputFieldForChat"
import { MessagesHeadProps } from "./MessagesContainer"
import { useParams } from "react-router-dom"
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import UserAvatar from "../../common/UserAvatar"
import UserNickName from "../../common/UserNickName"

export interface IMessage {
  id: number
  creationTime: Date
  dialogId: number
  receiverId: number
  senderId: any
  text: string
}
interface IDialog {
  firstUser: number
  id: number
  secondUser: number
}

const Messages: React.FC<MessagesHeadProps> = ({
  getMessagesThunk,
  messages,
  ownerId,
  dialogs,
  sendMessageThunk,
}) => {
  const { dialogId } = useParams()
  const [timeOfLastMsg, setNewTime] = useState(new Date())

  react.useEffect(() => {
    getMessagesThunk(Number(dialogId))
  }, [dialogId, timeOfLastMsg])

  let searchTerm = Number(dialogId)
  let result: any | undefined = dialogs.find((item) => item.id === searchTerm)
  let companionId =
    ownerId === result.firstUser ? result.secondUser : result.firstUser

  return (
    <Container
      sx={{
        mt: 2,
        p: 2,
        minHeight: "80vh",
        boxShadow: 3,
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <Container sx={{ overflow: "scroll", maxHeight: "70vh" }}>
        {messages.map((item: IMessage, index: number) => (
          <Item item={item} key={index} />
        ))}
      </Container>
      <InputFieldForChat
        setNewTime={setNewTime}
        sendMessageThunk={sendMessageThunk}
        companionId={companionId}
        ownerId={ownerId}
        getMessagesThunk={getMessagesThunk}
      />
    </Container>
  )
}

export default Messages

interface ItemProps {
  item: IMessage
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <ListItem disablePadding>
      <ListItemAvatar>
        <UserAvatar userId={item.senderId} />
      </ListItemAvatar>
      <ListItemText
        primary={<UserNickName userId={item.senderId} />}
        secondary={item.text}
      />
    </ListItem>
  )
}
