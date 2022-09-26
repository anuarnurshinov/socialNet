import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunkType } from "../store"
import { HomePageState } from "../typesForReducers"
import { authPageAPI, IAuthData } from "../../API/authPageAPI"
import { HomePageAPI } from "../../API/homePageAPI"

const initialState: HomePageState = {
  posts: [],
}

export const homePageReducer = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    updatePosts: (state, action: PayloadAction<[]>) => {
      state.posts = action.payload
    },
  },
})

export const { updatePosts } = homePageReducer.actions

export const getAllPostsThunk = (): AppThunkType => async (dispatch) => {
  let response = await HomePageAPI.getAllPosts()
  dispatch(updatePosts(response))
}

export default homePageReducer.reducer
