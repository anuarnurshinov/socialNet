import { connect } from "react-redux"
import { compose } from "redux"
import {
  getUserPostsThunk,
  sendNewPostThunk,
} from "../../../redux/Reducers/ProfilePageReducer"
import { RootStateType } from "../../../redux/store"
import NewPostField from "./NewPostField"

const mapStateToProps = (state: RootStateType) => ({
  ownerProfile: state.profilePage.ownerProfile,
})

const mapDispatchToProps = {
  sendNewPostThunk,
  getUserPostsThunk,
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  NewPostField
)
