export interface ProfilePageState {
  profile: IProfile
  ownerProfile: IProfile
}

export interface IProfile {
  id: null | number
  name: null | string
  aboutMe: null | string
  photo: string
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
