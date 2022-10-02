import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunkType } from "../store"
import { AuthPageState } from "../typesForReducers"
import { authPageAPI, IAuthData } from "../../API/authPageAPI"
import { updateOwnerPhoto, updateOwnerProfile } from "./ProfilePageReducer"
import { profilePageAPI } from "../../API/profilePageAPI"

const initialState: AuthPageState = {
  isAuth: false,
  accessToken: "",
}

export const authPageReducer = createSlice({
  name: "authPage",
  initialState,
  reducers: {
    toggleAuthFlag: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    updateAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
  },
})

export const { updateAccessToken, toggleAuthFlag } = authPageReducer.actions

export const registerThunk =
  (data: IAuthData): AppThunkType =>
  async (dispatch) => {
    let response = await authPageAPI.register(data)
    await profilePageAPI.createEmptyPhotoTemplate(response.user.id)
    dispatch(updateAccessToken(response.accessToken))
    dispatch(updateOwnerProfile(response.user))
    dispatch(toggleAuthFlag(true))
    let userPhoto = await profilePageAPI.getUserPhoto(response.user.id)
    dispatch(updateOwnerPhoto(userPhoto.photo))
  }
export const logInThunk =
  (data: IAuthData): AppThunkType =>
  async (dispatch) => {
    try {
      let response = await authPageAPI.logIn(data)
      dispatch(toggleAuthFlag(true))
      dispatch(updateAccessToken(response.accessToken))
      dispatch(updateOwnerProfile(response.user))
      response = await profilePageAPI.getUserPhoto(response.user.id)
      dispatch(updateOwnerPhoto(response.photo))
    } catch (error) {}
  }

export default authPageReducer.reducer
