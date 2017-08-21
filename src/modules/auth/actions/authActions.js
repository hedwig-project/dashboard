import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CLEAR_AUTH_ERRORS,
} from '@modules/auth/actionTypes/authActionTypes'
import { unauthenticatedPost } from '@config/axios'

export const clearAuthErrors = () => ({
  type: CLEAR_AUTH_ERRORS,
})

const requestSignUp = userData => ({
  type: SIGN_UP_REQUEST,
  payload: {
    userData,
  },
})

const signUpSuccess = userData => ({
  type: SIGN_UP_SUCCESS,
  payload: {
    userData,
  },
})

const signUpFailure = error => ({
  type: SIGN_UP_FAILURE,
  payload: {
    error,
  },
})

export const signUp = data => ((dispatch) => {
  dispatch(requestSignUp(data))

  // this is needed as API expects birthday in US date format,
  // but birthday from form comes in BR date format
  if (data.birthday) {
    const birthdayPieces = data.birthday.split('/')
    data.birthday = birthdayPieces[1] + '/' + birthdayPieces[0] + '/' + birthdayPieces[2]
  }

  return unauthenticatedPost('user/register', data)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      dispatch(signUpSuccess(response))
    })
    .catch((error) => {
      dispatch(signUpFailure(error.data.message))
    })
})

const requestLogin = creds => ({
  type: LOGIN_REQUEST,
  payload: {
    creds,
  },
})

const loginSuccess = userData => ({
  type: LOGIN_SUCCESS,
  payload: {
    userData,
  },
})

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
})

export const login = creds => ((dispatch) => {
  dispatch(requestLogin(creds))

  return unauthenticatedPost('user/authenticate', creds)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      dispatch(loginSuccess(response))
    })
    .catch((error) => {
      const data = error.data
      let message = ''
      if (data) {
        message = data.message
      }
      dispatch(loginFailure(message ? message : 'Default message'))
    })
})

const receiveLogout = () => ({
  type: LOGOUT,
  isFetching: false,
  isAuthenticated: false,
})

export const logoutUser = () => ((dispatch) => {
  localStorage.removeItem('token')
  dispatch(receiveLogout())
})
