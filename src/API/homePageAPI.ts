import { instance, unPacking } from "./common"

export const homePageAPI = {
  async getAllPosts() {
    const response = await instance.get(`posts`)
    return unPacking(response)
  },
}
