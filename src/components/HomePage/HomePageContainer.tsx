import { connect, ConnectedProps } from "react-redux/"
import { getAllPostsThunk } from "../../redux/Reducers/HomePageReducer"
import { RootStateType } from "../../redux/store"
import HomePage from "./HomePage"

const mapStateToProps = (state: RootStateType) => ({
  posts: state.homePage.posts,
})

const mapDispatchToProps = {
  getAllPostsThunk,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type HomePageHeaderProps = ConnectedProps<typeof connector>

export default connector(HomePage)
