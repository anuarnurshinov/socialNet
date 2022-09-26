import * as React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { RootStateType } from "../redux/store"

const WithRedirect = (Component: any) => {
  class RedirectComponent extends React.Component<any> {
    render() {
      if (this.props.isAuth) {
        return <Component {...this.props} />
      }
      return <Navigate {...this.props} to={"/login"} />
    }
  }

  const mapStateToProps = (state: RootStateType) => {
    return {
      isAuth: state.authPage.isAuth,
    }
  }

  const WithAutoRedirect = connect(mapStateToProps)(RedirectComponent)

  return WithAutoRedirect
}
export default WithRedirect
