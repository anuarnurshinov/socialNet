import { instance, unPacking } from "./common"
import { IMessageForSend } from "../components/DialogsPage/Messages/InputFieldForChat"

export const dialogsPageAPI = {
  async getDialogs(id: number) {
    const response: [] = []

    const firstSearch = await instance.get(`dialogs?firstUser=${id}`)
    unPacking(firstSearch).forEach((element: never) => {
      response.push(element)
    })

    const secondSearch = await instance.get(`dialogs?secondUser=${id}`)
    unPacking(secondSearch).forEach((element: never) => {
      response.push(element)
    })

    return response
  },
  async getMessages(id: number) {
    const response = await instance.get(`messages?dialogId=${id}`)
    return unPacking(response)
  },
  async sendMessage(data: IMessageForSend) {
    const response = await instance.post(`messages`, data)
    return unPacking(response)
  },
}
