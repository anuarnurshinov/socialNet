import { RootStateType } from "../../redux/store"
import { connect, ConnectedProps } from "react-redux/"
import UsersPage from "./UsersPage"
import { compose } from "redux"
import { getAllUsersThunk } from "../../redux/Reducers/UsersPageReducer"

const mapStateToProps = (state: RootStateType) => ({
  users: state.usersPage.users,
})
const mapDispatchToProps = { getAllUsersThunk }

const connector = connect(mapStateToProps, mapDispatchToProps)

export type UserPageHeadType = ConnectedProps<typeof connector>

export default compose(connector)(UsersPage)
