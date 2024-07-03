import axios from "axios"

const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const BASEURL = "https://webhook.site/"

const axiosConfig = {
  baseURL: proxyUrl + BASEURL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
    Referer: "http://localhost:3000/",
  },
}

const api = axios.create(axiosConfig)

api.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors
      window.location.reload() // Example of how to handle 401 errors
    }
    return Promise.reject(error)
  }
)

export default api
