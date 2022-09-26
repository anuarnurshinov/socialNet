import { FieldValues, UseFormRegister } from "react-hook-form"

export interface IFieldItem {
  titleEng: string
  titleRus: string
  regExp: RegExp
}

export interface IFieldProperties {
  common: {
    register: UseFormRegister<FieldValues>
    errors: {}
    values: {}
  }
  email: IFieldItem
  name: IFieldItem
  password: IFieldItem
  surname: IFieldItem
}
