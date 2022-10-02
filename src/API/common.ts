import axios, { AxiosPromise, AxiosResponse } from "axios"

export const instance = axios.create({
  baseURL: "http://localhost:3001/",
})
export const unPacking = (response: any) => response.data
