import { connect, ConnectedProps } from "react-redux"
import DialogsPage from "./DialogsPage"
import { compose } from "redux"
import WithRedirect from "../../hoc/WithRedirect"
import { getDialogsThunk } from "../../redux/Reducers/DialogsPageReducer"
import { RootStateType } from "../../redux/store"

const mapDispatchToProps = {
  getDialogsThunk,
}

const mapStateToProps = (state: RootStateType) => ({
  dialogs: state.dialogsPage.dialogs,
  ownerId: state.profilePage.ownerProfile.id,
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export type DialogsPageHeadProps = ConnectedProps<typeof connector>

export default compose(WithRedirect, connector)(DialogsPage)
