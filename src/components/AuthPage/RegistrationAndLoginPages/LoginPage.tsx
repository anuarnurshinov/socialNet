import * as React from "react"
import { Button, FormControl, Grid } from "@mui/material"
import FormField from "./FormFields/FormField"
import { IFieldProperties } from "../AuthPageTypes"
import { useNavigate } from "react-router-dom"

interface ILoginPageProps {
  handleSubmit: any
  handleClickShowPassword: any
  handleMouseDownPassword: any
  fieldProperties: IFieldProperties
  onSubmit: any
}

const LoginPage: React.FC<ILoginPageProps> = ({
  handleSubmit,
  handleClickShowPassword,
  handleMouseDownPassword,
  fieldProperties,
  onSubmit,
}) => {
  const navigate = useNavigate()
  const onClickGoToRegister = () => {
    navigate("/register")
  }
  return (
    <Grid container justifyContent="center">
      <FormControl
        component={"form"}
        sx={{ width: 1 / 3, boxShadow: 3, p: 2, mt: 2 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 style={{ textAlign: "center" }}>Вход</h2>
        <FormField
          common={fieldProperties.common}
          fieldProperties={fieldProperties.email}
        />
        <FormField
          common={fieldProperties.common}
          handleClickShowPassword={handleClickShowPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          fieldProperties={fieldProperties.password}
        />

        <Button sx={{ mb: 1 }} type="submit" variant="contained">
          Войти
        </Button>
        <Button
          sx={{ mb: 1 }}
          variant="contained"
          disableElevation
          onClick={onClickGoToRegister}
        >
          Регистрация
        </Button>
      </FormControl>
    </Grid>
  )
}

export default LoginPage
