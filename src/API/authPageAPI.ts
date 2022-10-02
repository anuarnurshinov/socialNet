import { instance, unPacking } from "./common"
import { AxiosResponse } from "axios"

export interface IAuthData {
  email?: string | undefined
  password?: string | undefined
  name?: string | undefined
  surname?: string | undefined
}

export interface IRegister {
  accessToken: string
  user: {
    email: string
    id: number
    name: string
    surname: string
  }
}

export const authPageAPI = {
  async register(data: IAuthData) {
    const response = await instance.post<IRegister>(`register`, data)

    return response.data
  },
  async logIn(data: IAuthData) {
    const response = await instance.post("login", data)
    return unPacking(response)
  },
}
