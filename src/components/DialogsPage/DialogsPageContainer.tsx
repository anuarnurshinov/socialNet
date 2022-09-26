import { connect } from "react-redux"
import DialogsPage from "./DialogsPage"
import { compose } from "redux"
import WithRedirect from "../../hoc/WithRedirect"

export default compose(WithRedirect, connect())(DialogsPage)
