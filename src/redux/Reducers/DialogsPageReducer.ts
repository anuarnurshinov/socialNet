import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunkType } from "../store"
import { DialogsPageState } from "../typesForReducers"
import { dialogsPageAPI } from "../../API/dialogsPageAPI"
import { IMessage } from "../../components/DialogsPage/Messages/Messages"
import { IMessageForSend } from "../../components/DialogsPage/Messages/InputFieldForChat"

const initialState: DialogsPageState = {
  dialogs: [],
  messages: [],
}

export const dialogsPageReducer = createSlice({
  name: "authPage",
  initialState,
  reducers: {
    updateDialogs: (state, action: PayloadAction<[]>) => {
      state.dialogs = action.payload
    },
    updateMessages: (state, action: PayloadAction<[]>) => {
      state.messages = action.payload
    },
  },
})

export const { updateDialogs, updateMessages } = dialogsPageReducer.actions

export const getDialogsThunk =
  (id: number): AppThunkType =>
  async (dispatch) => {
    let response = await dialogsPageAPI.getDialogs(id)
    dispatch(updateDialogs(response))
  }

export const getMessagesThunk =
  (id: number): AppThunkType =>
  async (dispatch) => {
    let response = await dialogsPageAPI.getMessages(id)
    dispatch(updateMessages(response))
  }
export const sendMessageThunk =
  (data: IMessageForSend): AppThunkType =>
  async (dispatch) => {
    await dialogsPageAPI.sendMessage(data)
  }
export default dialogsPageReducer.reducer
