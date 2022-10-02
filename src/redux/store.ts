import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import authPageReducer from "./Reducers/AuthPageReducer"
import profilePageReducer from "./Reducers/ProfilePageReducer"
import homePageReducer from "./Reducers/HomePageReducer"
import usersPageReducer from "./Reducers/UsersPageReducer"
import dialogsPageReducer from "./Reducers/DialogsPageReducer"

export const store = configureStore({
  reducer: {
    profilePage: profilePageReducer,
    authPage: authPageReducer,
    homePage: homePageReducer,
    usersPage: usersPageReducer,
    dialogsPage: dialogsPageReducer,
  },
})

export type AppDispatchType = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>
export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<string>
>

//@ts-ignore
window.store = store
