import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunkType } from "../store"
import { UsersPageState } from "../typesForReducers"
import { usersPageAPI } from "../../API/usersPageAPI"

const initialState: UsersPageState = {
  users: [],
}

export const usersPageReducer = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    updateUsers: (state, action: PayloadAction<[]>) => {
      state.users = action.payload
    },
  },
})

export const { updateUsers } = usersPageReducer.actions

export const getAllUsersThunk = (): AppThunkType => async (dispatch) => {
  const response = await usersPageAPI.getAllPosts()
  dispatch(updateUsers(response))
}

export default usersPageReducer.reducer
