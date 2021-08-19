import axios from "axios"

axios.defaults.baseURL = "https://jordan.ashton.fashion/api/goods/30/"

const serviceApi = {
  getComments(page) {
    return axios.get(`comments?page=${page}`).then((r) => r.data)
  },
  postComment(postData) {
    return axios.post("comments", postData)
  },
}

export default serviceApi
