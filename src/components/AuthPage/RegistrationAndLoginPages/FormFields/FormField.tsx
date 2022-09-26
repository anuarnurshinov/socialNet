import { VisibilityOff, Visibility } from "@mui/icons-material"
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material"

interface IFormFieldProps {
  fieldProperties: any
  handleClickShowPassword?: () => {}
  handleMouseDownPassword?: () => {}
  common: any
}

const FormField: React.FC<IFormFieldProps> = ({
  fieldProperties,
  handleClickShowPassword,
  handleMouseDownPassword,
  common,
}) => {
  return (
    <FormControl sx={{ mb: 1 }}>
      <InputLabel>{fieldProperties.titleRus}</InputLabel>
      <OutlinedInput
        {...common.register(`${fieldProperties.titleEng}`, {
          required: {
            value: true,
            message: "Поле обязательно к заполнению",
          },
          maxLength: 30,
          minLength: {
            value: 2,
            message: "Минимальное количество символов - 2",
          },
          pattern: {
            value: fieldProperties.regExp,
            message: `${fieldProperties.titleRus} должен состоять из латиницы и цифр`,
          },
        })}
        type={
          fieldProperties.titleEng === "password"
            ? common.values.showPassword
              ? "text"
              : "password"
            : ""
        }
        endAdornment={
          fieldProperties.titleEng === "password" ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {common.values.showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          ) : (
            ""
          )
        }
      />

      {common.errors[`${fieldProperties.titleEng}`] && (
        <Alert severity="error">
          {" "}
          {`${common.errors[`${fieldProperties.titleEng}`].message}`}
        </Alert>
      )}
    </FormControl>
  )
}
export default FormField
