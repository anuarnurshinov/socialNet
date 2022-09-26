import { RootStateType } from "../../redux/store"
import { connect, ConnectedProps } from "react-redux/"
import UsersPage from "./UsersPage"
import { compose } from "redux"

const mapStateToProps = (state: RootStateType) => {}
const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type UserPageHeadType = ConnectedProps<typeof connector>

export default compose(connector)(UsersPage)
