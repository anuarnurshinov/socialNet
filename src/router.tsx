import { createBrowserRouter } from "react-router-dom"
import AppContainer from "./AppContainer"
import HomePage from "./components/HomePage/HomePage"
import MainPage from "./components/MainPage/MainPage"

import Messages from "./components/DialogsPage/Messages/Messages"
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer"
import DialogsPageContainer from "./components/DialogsPage/DialogsPageContainer"
import AuthPageContainer from "./components/AuthPage/AuthPageContainer"
import HomePageContainer from "./components/HomePage/HomePageContainer"
import UsersPage from "./components/UsersPage/UsersPage"
import UsersPageContainer from "./components/UsersPage/UsersPageContainer"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <div>PageNotFound</div>,
    children: [
      {
        path: "/home",
        element: <HomePageContainer />,
      },
      {
        path: "/",
        element: <HomePageContainer />,
      },
      {
        path: "profile/:userId",
        element: <ProfilePageContainer />,
      },
      {
        path: "/dialogs",
        element: <DialogsPageContainer />,
      },
      {
        path: "/dialogs/:dialogId",
        element: <Messages />,
      },
      {
        path: "/login",
        element: <AuthPageContainer />,
      },
      {
        path: "/register",
        element: <AuthPageContainer />,
      },
      {
        path: "/profile",
        element: <UsersPageContainer />,
      },
    ],
  },
  {
    path: "/preview",
    element: <MainPage />,
  },
])
