// import {
//   AUTH_START,
//   AUTH_FINISH,
//   LOGOUT_SUCCESS,
//   SIGNUP_FINISH,
//   CLEAR_AUTH_ERRORS,
//   CLEAR_RESET_PASSWORD_MESSAGE,
//   SET_RESET_PASSWORD_MESSAGE,
// } from '@modules/auth/actionTypes/authActionTypes.js'

// export const startAuth = () => ({
//   type: AUTH_START,
// })
// export const finishAuth = error => ({
//   type: AUTH_FINISH,
//   payload: {
//     error,
//   },
// })
// export const clearAuthErrors = () => ({
//   type: CLEAR_AUTH_ERRORS,
// })
// export const clearResetPasswordMessage = () => ({
//   type: CLEAR_RESET_PASSWORD_MESSAGE,
// })
// export const setResetPasswordMessage = message => ({
//   type: SET_RESET_PASSWORD_MESSAGE,
//   payload: {
//     message,
//   },
// })
// export const finishSignup = () => ({
//   type: SIGNUP_FINISH,
// })
// export const loginError = error => ({
//   type: LOGOUT_SUCCESS,
//   payload: {
//     error,
//   },
// })

// export const signUp = signupData => (dispatch, getState) => {
//   console.log('signup action recebida')
//   // TODO
// }

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from '@modules/auth/actionTypes/authActionTypes'
import { signUp as signUpRequest } from '@config/axios'

export const signUp = (data) => {
  signUpRequest(data)
  return {
    type: LOGIN_REQUEST,
  }
}

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token,
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  }
}

// Calls the API to get a token and
// dispatches actions along the way
// export function loginUser(creds) {
//   let config = {
//     method: 'POST',
//     headers: { 'Content-Type':'application/x-www-form-urlencoded' },
//     body: `username=${creds.username}&password=${creds.password}`
//   }

//   return dispatch => {
//     // We dispatch requestLogin to kickoff the call to the API
//     dispatch(requestLogin(creds))
//     return fetch('http://localhost:3001/sessions/create', config)
//       .then(response =>
//         response.json()
//         .then(user => ({ user, response }))
//       ).then(({ user, response }) =>  {
//         if (!response.ok) {
//           // If there was a problem, we want to
//           // dispatch the error condition
//           dispatch(loginError(user.message))
//           return Promise.reject(user)
//         }
//         else {
//           // If login was successful, set the token in local storage
//           localStorage.setItem('id_token', user.id_token)
          
//           // Dispatch the success action
//           dispatch(receiveLogin(user))
//         }
//       }).catch(err => console.log("Error: ", err))
//   }
// }

// // Logs the user out
// export function logoutUser() {
//   return dispatch => {
//     dispatch(requestLogout())
//     localStorage.removeItem('id_token')
//     dispatch(receiveLogout())
//   }
// }
