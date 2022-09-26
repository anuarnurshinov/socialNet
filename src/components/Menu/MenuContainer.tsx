import { connect, ConnectedProps } from "react-redux"
import { compose } from "redux"
import { RootStateType } from "../../redux/store"
import { AppMenu } from "./Menu"

const mapStateToProps = (state: RootStateType) => ({
  ownerPhoto: state.profilePage.ownerProfile.photo,
  isAuth: state.authPage.isAuth,
  userId: state.profilePage.ownerProfile.id,
})

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type AppMenuHeaderProps = ConnectedProps<typeof connector>

export default compose(connector)(AppMenu)
