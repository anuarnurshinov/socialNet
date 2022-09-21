import { Container } from "@mui/system"
import InputFieldForChat from "./InputFieldForChat"
import MessageList from "./MessageList"

const Messages = () => {
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
      <MessageList />
      <InputFieldForChat />
    </Container>
  )
}

export default Messages
