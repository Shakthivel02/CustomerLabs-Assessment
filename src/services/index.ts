import axios from "axios"

const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const BASEURL = "https://webhook.site/"

const axiosConfig = {
  baseURL: proxyUrl + BASEURL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
  proxy: {
    host: "localhost",
    port: 8080,
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
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

export default api
