import { instance, unPacking } from "./common"

export const usersPageAPI = {
  async getAllPosts() {
    const response = await instance.get(`users`)
    return unPacking(response)
  },
}
