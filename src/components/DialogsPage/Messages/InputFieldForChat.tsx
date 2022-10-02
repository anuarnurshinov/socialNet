import { FilledInput, Button, FormControl } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import SendIcon from "@mui/icons-material/Send"
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { IMessage } from "./Messages"

interface IInputFieldProps {
  ownerId: number | null
  companionId: number
  sendMessageThunk: (data: IMessageForSend) => void
  getMessagesThunk: (id: number) => void
  setNewTime: (newTime: Date) => void
}
export interface IMessageForSend {
  dialogId: number
  senderId: number | null
  receiverId: number
  creationTime: Date
  text: string
}
const InputFieldForChat: React.FC<IInputFieldProps> = ({
  ownerId,
  sendMessageThunk,
  companionId,
  getMessagesThunk,
  setNewTime,
}) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { dialogId } = useParams()

  const onSubmit = async (data: any) => {
    const payloadData: IMessageForSend = {
      dialogId: Number(dialogId),
      senderId: ownerId,
      receiverId: companionId,
      creationTime: new Date(),
      text: data.text,
    }
    sendMessageThunk(payloadData)
    getMessagesThunk(Number(dialogId))
    setNewTime(new Date())
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid2 container sx={{ position: "absolute", bottom: 20, width: "95%" }}>
        <Grid2 flexGrow={1}>
          <FormControl sx={{ p: 1, width: "100%" }}>
            <FilledInput {...register("text")} disableUnderline />
          </FormControl>
        </Grid2>
        <Grid2 container justifyContent={"center"} flexGrow={0}>
          <Button type="submit" variant="text">
            <SendIcon />
          </Button>
          <Button variant="text">
            <EmojiEmotionsIcon />
          </Button>
        </Grid2>
      </Grid2>
    </form>
  )
}

export default InputFieldForChat
