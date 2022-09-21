import { createBrowserRouter } from "react-router-dom"
import AppContainer from "./AppContainer"
import HomePage from "./components/HomePage/HomePage"
import MainPage from "./components/MainPage/MainPage"
import ProfilePage from "./components/ProfilePage/ProfilePage"
import { loader as profileLoader } from "./components/ProfilePage/ProfilePage"
import DialogsPage from "./components/DialogsPage/DialogsPage"
import Messages from "./components/DialogsPage/Messages/Messages"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <div>PageNotFound</div>,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        loader: profileLoader,
        element: <ProfilePage />,
      },
      {
        path: "/dialogs",
        element: <DialogsPage />,
      },
      {
        path: "/dialogs/:id",
        element: <Messages />,
      },
    ],
  },
  {
    path: "/preview",
    element: <MainPage />,
  },
])
