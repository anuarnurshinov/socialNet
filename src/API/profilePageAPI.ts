import { newPostData } from "../components/HomePage/NewPostField/PostForm"
import { instance, unPacking } from "./common"

export const profilePageAPI = {
  async getUserPhoto(id: number) {
    const response = await instance.get(`userPhotos/${id}`)
    return unPacking(response)
  },
  async updateUserPhoto(data: any, accessToken: string, id: number | null) {
    const response = await instance.put(`/userPhotos/${id}`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
    return unPacking(response)
  },
  async getUserProfile(id: number) {
    const response = await instance.get(`users/${id}`)
    return unPacking(response)
  },
  async getUserPosts(userId: number) {
    const response = await instance.get(`posts?userId=${userId}`)
    return unPacking(response)
  },
  async sendNewPost(data: newPostData) {
    const response = await instance.post(`posts`, data)
    return unPacking(response)
  },
  async createEmptyPhotoTemplate(userId: number) {
    const response = await instance.post(`userPhotos`, { userId })
    return unPacking(response)
  },
}
