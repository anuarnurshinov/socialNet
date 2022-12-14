import { newPostData } from "../components/HomePage/NewPostField/PostForm"
import { instance, unPacking } from "./common"

interface IUserPhoto {
  photo: string
  userId: number
  id: number
}

export const profilePageAPI = {
  async getUserPhoto(id: number) {
    const response = await instance.get<IUserPhoto>(`userPhotos/${id}`)
    return response.data
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
  async getUserNickName(id: number) {
    const response = await instance.get(`users/${id}`)
    let data = unPacking(response)

    let nickName = data.name + " " + data.surname

    return nickName
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
