import { connect, ConnectedProps } from "react-redux"
import { compose } from "redux"
import WithRedirect from "../../../hoc/WithRedirect"
import {
  getMessagesThunk,
  sendMessageThunk,
} from "../../../redux/Reducers/DialogsPageReducer"
import { RootStateType } from "../../../redux/store"
import Messages from "./Messages"

const mapDispatchToProps = {
  getMessagesThunk,
  sendMessageThunk,
}

const mapStateToProps = (state: RootStateType) => ({
  messages: state.dialogsPage.messages,
  ownerId: state.profilePage.ownerProfile.id,
  dialogs: state.dialogsPage.dialogs,
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export type MessagesHeadProps = ConnectedProps<typeof connector>

export default compose(WithRedirect, connector)(Messages)
