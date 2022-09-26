import { instance, unPacking } from "./common"

export interface IAuthData {
  email?: string | undefined
  password?: string | undefined
  name?: string | undefined
  surname?: string | undefined
}

export const authPageAPI = {
  async register(data: IAuthData) {
    const response = await instance.post(`register`, data)
    return unPacking(response)
  },
  async logIn(data: IAuthData) {
    const response = await instance.post("login", data)
    return unPacking(response)
  },
}
