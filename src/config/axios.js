import axios from 'axios'

axios.defaults.baseURL = 'http://138.197.83.143:3000/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


export const signUp = signUpData => axios.post('user/register', signUpData)
  .then(response => console.log(response))
