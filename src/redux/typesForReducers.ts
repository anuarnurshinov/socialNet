export interface ProfilePageState {
  profile: IProfile
  ownerProfile: IProfile
}

export interface IProfile {
  id: null | number
  name: null | string
  aboutMe?: null | string
  photo?: string
  posts?: []
}
export interface AuthPageState {
  isAuth: boolean
  accessToken: string
}
export interface HomePageState {
  posts: []
}
export interface UsersPageState {
  users: []
}

export interface DialogsPageState {
  dialogs: [dialogs] | []
  messages: [messages] | []
}
interface dialogs {
  id: number
  userId: [number]
}
interface messages {
  id: number
  dialogId: number
  senderId: number
  receiverId: number
  creationTime: Date
  text: string
}
