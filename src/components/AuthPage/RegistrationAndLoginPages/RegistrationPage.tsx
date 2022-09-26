import * as React from "react"
import { Button, FormControl, Grid } from "@mui/material"
import FormField from "./FormFields/FormField"
import { useNavigate } from "react-router-dom"
import { IFieldProperties } from "../AuthPageTypes"

interface IRegistrationPage {
  handleSubmit: any
  onSubmit: any
  fieldProperties: IFieldProperties
  handleClickShowPassword: any
  handleMouseDownPassword: any
}

const RegistrationPage: React.FC<IRegistrationPage> = ({
  handleSubmit,
  onSubmit,
  fieldProperties,
  handleClickShowPassword,
  handleMouseDownPassword,
}) => {
  const navigate = useNavigate()
  const onClickGoToLogin = () => {
    navigate("/login")
  }
  return (
    <Grid container justifyContent="center">
      <FormControl
        component={"form"}
        sx={{ width: 1 / 3, boxShadow: 3, p: 2, mt: 2 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 style={{ textAlign: "center" }}>Регистрация</h2>
        <FormField
          common={fieldProperties.common}
          fieldProperties={fieldProperties.name}
        />
        <FormField
          common={fieldProperties.common}
          fieldProperties={fieldProperties.surname}
        />

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

        <Button
          sx={{ mb: 1 }}
          disableElevation
          type="submit"
          variant="contained"
        >
          Сохранить
        </Button>
        <Button
          sx={{ mb: 1 }}
          variant="contained"
          disableElevation
          onClick={onClickGoToLogin}
        >
          Есть аккаунт?
        </Button>
      </FormControl>
    </Grid>
  )
}

export default RegistrationPage
