import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunkType } from "../store"
import { UsersPageState } from "../typesForReducers"

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

export const getAllUsersThunk = (): AppThunkType => async (dispatch) => {}

export default usersPageReducer.reducer
