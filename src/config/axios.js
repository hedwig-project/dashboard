import axios from 'axios'

axios.defaults.baseURL = 'http://138.197.83.143:9090/'
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
