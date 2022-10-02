import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit"
import { profilePageAPI } from "../../API/profilePageAPI"
import { newPostData } from "../../components/HomePage/NewPostField/PostForm"
import { IProfile, ProfilePageState } from "../typesForReducers"

const initialState: ProfilePageState = {
  profile: {
    id: null,
    name: "",
    aboutMe: "",
    photo: "",
    posts: [],
  },
  ownerProfile: {
    id: null,
    name: "",
    aboutMe: "",
    photo: "",
  },
}

export const profilePageReducer = createSlice({
  name: "profilePage",
  initialState,
  reducers: {
    updatePhoto: (state, action: PayloadAction<string>) => {
      state.profile = {
        ...state.profile,
        photo: action.payload,
      }
    },
    updateOwnerPhoto: (state, action: PayloadAction<string>) => {
      state.ownerProfile = {
        ...state.ownerProfile,
        photo: action.payload,
      }
    },
    updateOwnerProfile: (state, action: PayloadAction<IProfile>) => {
      state.ownerProfile = { ...state.ownerProfile, ...action.payload }
    },
    updateProfile: (state, action: PayloadAction<IProfile>) => {
      state.profile = {
        ...state.profile,
        name: action.payload.name,
        id: action.payload.id,
      }
    },
    getUserProfile: (state, action: PayloadAction<IProfile>) => {
      state.profile = { ...state.profile, ...action.payload }
    },
    updateUserPosts: (state, action: PayloadAction<[]>) => {
      state.profile.posts = action.payload
    },
  },
})

export const {
  getUserProfile,
  updateOwnerProfile,
  updateOwnerPhoto,
  updatePhoto,
  updateUserPosts,
} = profilePageReducer.actions

export const getUserPhotoThunk =
  (userId: number) => async (dispatch: Dispatch) => {
    let response = await profilePageAPI.getUserPhoto(userId)

    dispatch(updatePhoto(response.photo))
  }
export const updatePhotoThunk =
  (data: {}, accessToken: string, id: number | null) =>
  async (dispatch: Dispatch) => {
    let response = await profilePageAPI.updateUserPhoto(data, accessToken, id)
    dispatch(updatePhoto(response.photo))
    dispatch(updateOwnerPhoto(response.photo))
  }
export const getUserProfileThunk =
  (userId: number) => async (dispatch: Dispatch) => {
    let response = await profilePageAPI.getUserProfile(userId)

    dispatch(getUserProfile(response))
  }

export const getUserPostsThunk =
  (userId: number) => async (dispatch: Dispatch) => {
    let response = await profilePageAPI.getUserPosts(userId)

    dispatch(updateUserPosts(response))
  }
export const sendNewPostThunk =
  (data: newPostData) => async (dispatch: Dispatch) => {
    let response = await profilePageAPI.sendNewPost(data)
  }

export default profilePageReducer.reducer
