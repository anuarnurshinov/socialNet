import { connect, ConnectedProps } from "react-redux/"
import LoginPage from "./RegistrationAndLoginPages/LoginPage"
import RegistrationPage from "./RegistrationAndLoginPages/RegistrationPage"
import React from "react"
import { useForm } from "react-hook-form"
import { logInThunk, registerThunk } from "../../redux/Reducers/AuthPageReducer"
import { Navigate, useMatch, useNavigate } from "react-router-dom"
import { IAuthData } from "../../API/authPageAPI"
import { IFieldProperties } from "./AuthPageTypes"
import { RootStateType } from "../../redux/store"

const AuthPageContainer: React.FC<HeaderProps> = ({
  userId,
  registerThunk,
  logInThunk,
  isAuth,
}) => {
  const [values, setValues] = React.useState({
    showPassword: false,
  })

  const match = useMatch("/login")

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  })

  const onSubmit = (data: IAuthData) => {
    if (match) {
      logInThunk(data)
      reset()
      return
    }
    debugger
    registerThunk(data)
    reset()
    return
  }

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event: { preventDefault: () => {} }) => {
    event.preventDefault()
  }

  const fieldProperties: IFieldProperties = {
    common: {
      register,
      errors,
      values,
    },
    email: {
      titleEng: "email",
      titleRus: "Почта",
      regExp: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    },
    name: {
      titleEng: "name",
      titleRus: "Имя",
      regExp: /^[А-я]{3,16}$/,
    },
    password: {
      titleEng: "password",
      titleRus: "Пароль",
      regExp: /^[A-z0-9_-]{3,16}$/,
    },
    surname: {
      titleEng: "surname",
      titleRus: "Фамилия",
      regExp: /^[А-я]{3,16}$/,
    },
  }

  if (isAuth) {
    return <Navigate to={`/profile/${userId}`} />
  }
  if (match) {
    return (
      <LoginPage
        handleSubmit={handleSubmit}
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
        fieldProperties={fieldProperties}
        onSubmit={onSubmit}
      />
    )
  }
  return (
    <RegistrationPage
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      fieldProperties={fieldProperties}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
    />
  )
}

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.authPage.isAuth,
  userId: state.profilePage.ownerProfile.id,
})

const mapDispatchToProps = {
  registerThunk,
  logInThunk,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type HeaderProps = ConnectedProps<typeof connector>

export default connector(AuthPageContainer)
