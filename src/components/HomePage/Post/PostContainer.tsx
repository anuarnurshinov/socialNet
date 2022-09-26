import { connect, ConnectedProps } from "react-redux"
import { compose } from "redux"
import { RootStateType } from "../../../redux/store"
import Post, { IPostProps } from "./Post"

const mapStateToProps = (state: RootStateType) => ({
  ownerPhoto: state.profilePage.ownerProfile.photo,
})

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type PostHeaderProps = ConnectedProps<typeof connector> & IPostProps

export default compose(connector)(Post)
