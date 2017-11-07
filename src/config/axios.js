import axios from 'axios'

axios.defaults.baseURL = '//hedwig-cloud.ml'
// axios.defaults.baseURL = 'http://localhost:9090'
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

export const authenticatedGet = (url, token) =>
  new Promise((resolve, reject) => {
    axios.get(url, {
      headers: { Authorization: `JWT ${token}` },
    })
    .then((response) => {
      if (response.data.success !== undefined && response.data.success === false) {
        reject(response)
      } else resolve(response)
    })
    .catch(error => reject(error))
  })

export const authenticatedPut = (url, data, token) =>
  new Promise((resolve, reject) => {
    axios.put(url, data, {
      headers: { Authorization: `JWT ${token}` },
    })
    .then((response) => {
      if (response.data.success !== undefined && response.data.success === false) {
        reject(response)
      } else resolve(response)
    })
    .catch(error => reject(error))
  })

export const authenticatedDelete = (url, token) =>
  new Promise((resolve, reject) => {
    axios.delete(url, {
      headers: { Authorization: `JWT ${token}` },
    })
    .then((response) => {
      if (response.data.success !== undefined && response.data.success === false) {
        reject(response)
      } else resolve(response)
    })
    .catch(error => reject(error))
  })
