import { connect, ConnectedProps } from "react-redux"
import ProfilePage from "./ProfilePage"
import { compose } from "redux"
import { RootStateType } from "../../redux/store"
import {
  getUserPhotoThunk,
  getUserPostsThunk,
  getUserProfileThunk,
  updatePhotoThunk,
} from "../../redux/Reducers/ProfilePageReducer"

const mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile,
  accessToken: state.authPage.accessToken,
})

const mapDispatchToProps = {
  updatePhotoThunk,
  getUserPhotoThunk,
  getUserProfileThunk,
  getUserPostsThunk,
}

export type ProfilePageHeaderProps = ConnectedProps<typeof connector>

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(ProfilePage)
