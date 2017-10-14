import axios from 'axios'

// axios.defaults.baseURL = '//138.197.83.143:9090'
axios.defaults.baseURL = 'http://localhost:9090'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const unauthenticatedPost = (url, data) =>
  new Promise((resolve, reject) => {
    axios.post(url, data)
    .then((response) => {
      if (response.data.success !== undefined && response.data.success === false) {
        reject(response)
      } else resolve(response)
    })
    .catch(error => reject(error))
  })

export const authenticatedPost = (url, data, token) =>
  new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: { Authorization: `JWT ${token}` },
    })
    .then((response) => {
      if (response.data.success !== undefined && response.data.success === false) {
        reject(response)
      } else resolve(response)
    })
    .catch(error => reject(error))
  })
