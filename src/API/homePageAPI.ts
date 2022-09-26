import { instance, unPacking } from "./common"

export const HomePageAPI = {
  async getAllPosts() {
    const response = await instance.get(`posts`)
    return unPacking(response)
  },
}
