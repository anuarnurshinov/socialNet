import { compose } from "redux"
import App from "./App"
import { EmptyHOC } from "./hoc/EmptyHOC"

const AppContainer = () => {
  return <App />
}

export default compose(EmptyHOC(AppContainer))
