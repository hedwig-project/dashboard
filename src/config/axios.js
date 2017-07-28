import axios from 'axios'

axios.defaults.baseURL = '138.197.83.143:3000/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


export const signUp = () => axios.post('http://138.197.83.143:3000/user/register', {
  name: 'teste gabi',
  birthday: '10/28/1994',
  username: 'testegabi',
  password: '123456',
  email: 'testegabi@teste.com',
})
  .then(response => console.log(response))
